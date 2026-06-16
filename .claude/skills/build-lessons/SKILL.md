---
name: build-lessons
description: corpus.jsonl의 아직 레슨 안 된 번역들을 모아 주제별로 묶고, 멀티에이전트(builder→verifier)로 레슨을 생성해 lessons.js에 push한다. 매일 원격 루틴이 호출하거나 "/build-lessons"로 수동 실행.
user-invocable: true
---

# build-lessons — corpus → 레슨 자동 빌드

대만어 학습 PWA repo(`/Users/choeunbi/Documents/Claude/taiwanese_learning`)에서 실행. corpus에 쌓인 새 번역을 검증된 레슨으로 만든다.

## 순서

> 헬퍼 경로: `.claude/skills/build-lessons/corpus_build.py` (이하 `$CB` 로 표기). repo 루트에서 실행.

0. **Google Drive 인박스 흡수** (Drive 커넥터 필요)
   - `search_files` 로 폴더 안 파일을 모두 나열: query `parentId = '1cqGR1gu0Tsxw4ZTVnOWkTyWNbpqw9tTC'`
   - 각 파일에서 JSON(`{source,translation,source_date}`)을 파싱한다. 작은 파일은 `contentSnippet` 에 내용이 들어오고, 잘렸으면 `read_file_content` 로 전체를 읽는다.
   - `{drive_id: <파일 id>, source, translation, source_date}` 배열을 만들어 흡수:
     ```bash
     echo '<JSON array>' | python3 .claude/skills/build-lessons/corpus_build.py --ingest
     ```
   - 이미 흡수한 파일은 `data/.drive_ingested.json` 기준으로 자동 스킵된다 (Drive 파일은 지우지 않아도 됨).

1. **새 번역 수집**
   ```bash
   python3 .claude/skills/build-lessons/corpus_build.py --list-unprocessed
   ```
   결과가 빈 배열이면 **여기서 종료** (할 일 없음 — 보고만). 자동 빌드는 조용히 끝낸다.

2. **주제별 클러스터링** (네가 판단)
   - 원문들을 의미/톤이 비슷한 묶음으로 그룹핑 (협업 이메일 / 구어 DM / 醫美 어휘 / 일정·계약 등).
   - 한 클러스터 = 레슨 1개. 너무 잘게 쪼개지 말고 3~8문장 단위로.
   - 한 줄짜리 단편(UI 문구·폼 안내 등 학습가치 낮은 것)은 묶거나 스킵. 스킵한 건 마지막에 보고.
   - 각 클러스터에 포함된 corpus `id` 목록을 기록.

3. **클러스터별 병렬 생성 + 검증** (멀티에이전트)
   각 클러스터를 독립적으로 — 클러스터가 여러 개면 **병렬로** Agent 호출:
   - `--next-id`로 ID 확보(클러스터마다 순차 증가).
   - **lesson-builder** 서브에이전트에 그 클러스터의 원문+번역+ID+오늘날짜를 줘서 레슨 객체 생성.
   - 그 결과를 **taiwanese-verifier** 서브에이전트에 넘겨 검수 → 교정된 `lesson` 받기.
   - 클러스터가 1개뿐이면 그냥 순차로(병렬 오버헤드 불필요).

4. **반영 + push** (검증 통과분만)
   각 레슨에 대해:
   ```bash
   echo '<verified lesson JSON>' | python3 scripts/corpus_build.py --append-lesson
   python3 scripts/corpus_build.py --mark <id1,id2,...> --lesson <LNN>
   ```
   전부 끝나면 한 번에:
   ```bash
   python3 scripts/corpus_build.py --push "Add <LNN-LMM> (auto-corpus): <요약>"
   ```

5. **요약 보고** (= 알림 본문)
   ```
   ✅ 자동 빌드 완료 — 새 레슨 N개 (LNN~LMM)
   - LNN: 제목 — 핵심 포인트 1줄 (verifier가 고친 것: ...)
   - ...
   스킵: <학습가치 낮아 제외한 줄, 있으면>
   30~60초 후 폰 PWA 반영.
   ```

## 원칙
- **검증 통과분만 push.** verifier가 ok:false여도 lesson은 교정본이 오므로 그걸 쓰되, issues를 보고에 남긴다.
- corpus가 비었으면 아무것도 안 만들고 조용히 끝낸다 (빈 커밋 금지).
- 토큰/모델 인증·repo push는 osxkeychain 기반이라 `git push origin main` 그대로 됨.
- 산출물 스타일·스키마는 `.claude/agents/lesson-builder.md` 가 단일 기준.
