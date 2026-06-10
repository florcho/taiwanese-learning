#!/usr/bin/env python3
"""
corpus_build.py — corpus.jsonl ↔ lessons.js 사이의 *기계적* 작업만 담당.

레슨의 '내용'(注音/拼音/vocab/practice)은 Claude 에이전트가 만든다.
이 스크립트는 결정적인 부분만:
  - 아직 레슨 안 된 corpus 줄 뽑기   (--list-unprocessed)
  - 완성된 레슨 객체를 lessons.js에 append  (--append-lesson, stdin JSON)
  - 처리한 corpus 줄을 processed:true + lessonId 로 마킹  (--mark)
  - 다음 레슨 ID 알려주기  (--next-id)
  - 커밋 + push  (--push)

Usage:
  python3 corpus_build.py --list-unprocessed
  python3 corpus_build.py --next-id
  cat lesson.json | python3 corpus_build.py --append-lesson
  python3 corpus_build.py --mark c0022,c0023 --lesson L29
  python3 corpus_build.py --push "Add L29 (auto): 협업 일정 어휘"
"""
import sys, re, json, argparse, subprocess
from pathlib import Path

# 이 파일: <repo>/.claude/skills/build-lessons/corpus_build.py → repo = parents[3]
PROJECT = Path(__file__).resolve().parents[3]
LESSONS = PROJECT / "data" / "lessons.js"
CORPUS  = PROJECT / "data" / "corpus.jsonl"


def read_corpus():
    rows = []
    if CORPUS.exists():
        for line in CORPUS.read_text().splitlines():
            line = line.strip()
            if line:
                rows.append(json.loads(line))
    return rows


def write_corpus(rows):
    CORPUS.write_text("\n".join(json.dumps(r, ensure_ascii=False) for r in rows) + "\n")


def next_id():
    ids = re.findall(r"id: 'L(\d+)'", LESSONS.read_text())
    n = int(max(ids, key=int)) + 1 if ids else 1
    return f"L{n:02d}"


def list_unprocessed():
    rows = [r for r in read_corpus() if not r.get("processed")]
    print(json.dumps(rows, ensure_ascii=False, indent=2))


def append_lesson(lesson):
    content = LESSONS.read_text()
    entry = json.dumps(lesson, ensure_ascii=False, indent=4)
    new = re.sub(r"\s*\];\s*$", f",\n  {entry}\n];\n", content)
    if new == content:
        sys.exit("ERROR: LESSONS 배열 끝(];)을 못 찾음")
    LESSONS.write_text(new)
    # JS 문법 검증
    chk = subprocess.run(
        ["node", "-e", f"new Function(require('fs').readFileSync('{LESSONS}','utf8'))"],
        capture_output=True, text=True)
    if chk.returncode != 0:
        sys.exit(f"ERROR: lessons.js 문법 깨짐 — {chk.stderr[:200]}")
    print(f"✅ appended {lesson.get('id')}")


def mark(ids, lesson_id):
    target = set(ids.split(","))
    rows = read_corpus()
    hit = 0
    for r in rows:
        if r.get("id") in target:
            r["processed"] = True
            r["lessonId"] = lesson_id
            hit += 1
    write_corpus(rows)
    print(f"✅ marked {hit} rows → {lesson_id}")


def push(msg):
    for args in (["git", "add", "data/lessons.js", "data/corpus.jsonl"],
                 ["git", "commit", "-q", "-m", msg]):
        subprocess.run(args, cwd=PROJECT, check=True)
    r = subprocess.run(["git", "push", "origin", "main"],
                       cwd=PROJECT, capture_output=True, text=True)
    print("✅ pushed" if r.returncode == 0 else f"push warn: {r.stderr[:200]}")


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--list-unprocessed", action="store_true")
    p.add_argument("--next-id", action="store_true")
    p.add_argument("--append-lesson", action="store_true")
    p.add_argument("--mark")
    p.add_argument("--lesson")
    p.add_argument("--push")
    a = p.parse_args()

    if a.list_unprocessed: list_unprocessed()
    elif a.next_id:        print(next_id())
    elif a.append_lesson:  append_lesson(json.load(sys.stdin))
    elif a.mark:           mark(a.mark, a.lesson or "")
    elif a.push is not None: push(a.push)
    else:                  p.print_help()
