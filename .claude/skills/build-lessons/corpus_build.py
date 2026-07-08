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
PROJECT  = Path(__file__).resolve().parents[3]
LESSONS  = PROJECT / "data" / "lessons.js"
CORPUS   = PROJECT / "data" / "corpus.jsonl"
INGESTED = PROJECT / "data" / ".drive_ingested.json"   # 이미 흡수한 Drive 파일 id 기록


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
    # 두 포맷 모두 인식: 손으로 쓴 `id: 'L28'` + 자동추가 JSON `"id": "L29"`
    ids = re.findall(r"id[\"']?\s*:\s*[\"']L(\d+)", LESSONS.read_text())
    n = int(max(ids, key=int)) + 1 if ids else 1
    return f"L{n:02d}"


def list_unprocessed():
    rows = [r for r in read_corpus() if not r.get("processed")]
    print(json.dumps(rows, ensure_ascii=False, indent=2))


def ingest(items):
    """Drive 인박스에서 읽은 항목을 corpus.jsonl에 흡수.
    items: [{drive_id, source, translation, source_date}, ...]
    이미 흡수한 drive_id는 .drive_ingested.json 기준으로 스킵(중복 방지)."""
    seen = set()
    if INGESTED.exists():
        seen = set(json.loads(INGESTED.read_text()).get("ingested", []))
    rows = read_corpus()
    nums = [int(r["id"][1:]) for r in rows if re.match(r"c\d+$", r.get("id", ""))]
    n = max(nums) + 1 if nums else 1
    added = 0
    for it in items:
        did = it.get("drive_id")
        if not did or did in seen:
            continue
        src = (it.get("source") or "").strip()
        if not src:
            continue
        rows.append({"id": f"c{n:04d}", "source": src,
                     "translation": (it.get("translation") or "").strip(),
                     "source_date": it.get("source_date", ""),
                     "processed": False, "lessonId": None, "driveId": did})
        seen.add(did); n += 1; added += 1
    write_corpus(rows)
    INGESTED.write_text(json.dumps({"ingested": sorted(seen)}, ensure_ascii=False, indent=2) + "\n")
    print(f"✅ ingested {added} new (skipped {len(items) - added} already-seen)")


def append_lesson(lesson):
    content = LESSONS.read_text()
    entry = json.dumps(lesson, ensure_ascii=False, indent=4)
    # lessons.js: LESSONS array ends with \n];\n\n (blank line follows).
    # Use lambda to avoid re.sub processing backslash escapes in replacement.
    new = re.sub(r"\n\];\n\n",
                 lambda m: f",\n  {entry}\n];\n\n", content, count=1)
    if new == content:
        # fallback: end-of-file pattern
        new = re.sub(r"\s*\];\s*$",
                     lambda m: f",\n  {entry}\n];\n", content)
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
    # Ensure correct author so stop-hook doesn't flag the commit
    subprocess.run(["git", "config", "user.email", "noreply@anthropic.com"], cwd=PROJECT)
    subprocess.run(["git", "config", "user.name", "Claude"], cwd=PROJECT)

    for args in (["git", "add", "data/lessons.js", "data/corpus.jsonl", "data/.drive_ingested.json"],
                 ["git", "commit", "-q", "-m", msg]):
        subprocess.run(args, cwd=PROJECT, check=True)

    branch = subprocess.run(["git", "rev-parse", "--abbrev-ref", "HEAD"],
                            cwd=PROJECT, capture_output=True, text=True).stdout.strip()

    # Push current branch first
    r = subprocess.run(["git", "push", "origin", branch],
                       cwd=PROJECT, capture_output=True, text=True)
    if r.returncode != 0:
        print(f"push warn: {r.stderr[:200]}")
        return

    # If on a feature branch, also merge to main so GitHub Pages picks up changes
    if branch != "main":
        subprocess.run(["git", "checkout", "main"], cwd=PROJECT, check=True)
        subprocess.run(["git", "merge", branch, "--no-edit"], cwd=PROJECT, check=True)
        r2 = subprocess.run(["git", "push", "origin", "main"],
                            cwd=PROJECT, capture_output=True, text=True)
        subprocess.run(["git", "checkout", branch], cwd=PROJECT, check=True)
        if r2.returncode != 0:
            print(f"main push warn: {r2.stderr[:200]}")
        else:
            print(f"✅ pushed ({branch} → main)")
    else:
        print("✅ pushed")


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--list-unprocessed", action="store_true")
    p.add_argument("--ingest", action="store_true", help="stdin: Drive 항목 JSON 배열 → corpus 흡수")
    p.add_argument("--next-id", action="store_true")
    p.add_argument("--append-lesson", action="store_true")
    p.add_argument("--mark")
    p.add_argument("--lesson")
    p.add_argument("--push")
    a = p.parse_args()

    if a.list_unprocessed: list_unprocessed()
    elif a.ingest:         ingest(json.load(sys.stdin))
    elif a.next_id:        print(next_id())
    elif a.append_lesson:  append_lesson(json.load(sys.stdin))
    elif a.mark:           mark(a.mark, a.lesson or "")
    elif a.push is not None: push(a.push)
    else:                  p.print_help()
