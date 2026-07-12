# Claude Code 컨텍스트 — 대만어 학습 PWA

이 파일은 새 Claude Code 세션이 시작될 때 자동으로 로드돼요. 매번 설명 다시 안 해도 됩니다.

## 📌 프로젝트 한 줄 요약
**flor.cho (헬싱페이퍼/강남언니 Taiwan 파트 리드) 의 대만 만다린(台灣國語) 1개월 집중 학습용 PWA + 인박스 시스템.**

## 👤 사용자 프로필
- 한국인, HSK 2-3 수준
- 발음/성조 ⭐⭐⭐⭐ / 격식체 ⭐ / 능동 산출 ⭐
- 약점 3가지: ① 업계 어휘(Beauty/醫美/業配) ② 격식 이메일 ③ 능동 작문·말하기
- 목표 (2026-06-23까지): Yuna(대만인 동료) 코멘트 대만어로 즉답, 이메일·Reels 90% 이해

## 🏗 시스템 구조

```
/Users/choeunbi/Documents/Claude/taiwanese_learning/
├── index.html                       # PWA 홈
├── app.js                           # 로직 (쉐도잉, 단어, 퀴즈, 인박스, GH 연동)
├── styles.css
├── manifest.json
├── data/lessons.js                  # 모든 레슨 (LESSONS 배열)
├── data/corpus.jsonl                # 🆕 번역 버퍼 (대만어→한국어 원문 누적, processed 플래그)
├── data/flashcard_state.json        # 🃏 플래시카드 분류 상태 (앱이 GitHub 동기화로 push)
├── .claude/agents/                  # 🆕 lesson-builder, taiwanese-verifier (빌드용 서브에이전트)
├── .claude/skills/build-lessons/    # 🆕 corpus→레슨 빌드 스킬 + corpus_build.py 헬퍼
├── inbox/                           # 처리 대기 자료 (PWA + 버튼 업로드분)
├── scripts/                         # 로컬 전용 파이썬 (inbox_to_lesson.py 등) — .gitignore 처리
├── icons/
├── README.md
├── PLAUD_PROMPTS.md
└── CLAUDE_PROJECT_INSTRUCTIONS.md   # claude.ai/데스크탑앱 프로젝트 지침
```

⚠️ `scripts/` 는 `.gitignore` 라 **git에 안 올라감**(로컬 전용). 단, 빌드에 필요한
`corpus_build.py` 는 `.claude/skills/build-lessons/` 로 옮겨 **추적된다**(원격 루틴이 써야 하므로).

- **GitHub**: `florcho/taiwanese-learning`
- **라이브 URL**: https://florcho.github.io/taiwanese-learning/
- **GitHub Pages 빌드**: main 브랜치 → 자동 (30-60초)

## 🔄 데이터 흐름 (2026-06-10 재구조화)

번역(데스크탑 앱)과 레슨(PWA)을 **corpus.jsonl** 한 파일로 잇는다.

```
[데스크탑 앱 프로젝트]  대만어 던짐 → taiwan-translate 스킬
   → 번역+단어표 출력 + Google Drive 폴더 taiwanese_corpus_inbox 에 파일 1개 생성
     (create_file, {source,translation,source_date})
                                  │
[원격 루틴, 매일 저녁 7시]  build-lessons 스킬 실행 (Drive + Slack 커넥터 부착)
   0. Drive 인박스 흡수: search_files → corpus_build.py --ingest (이미 흡수한 건 .drive_ingested.json로 스킵)
   1. corpus_build.py --list-unprocessed (processed:false 줄)
   2. 주제별 클러스터링
   3. 클러스터별 병렬: lesson-builder → taiwanese-verifier
   4. lessons.js append → mark processed:true → git push
   5. 요약 Slack DM (퇴근길 확인용)
                                  │
[폰 PWA]  새로고침 → 새 레슨 ✨
```

- 캡처 다리 = **Google Drive 커넥터** (데스크탑 앱 채팅엔 GitHub 쓰기 커넥터가 없어서 Drive 경유). Drive 폴더 id `1cqGR1gu0Tsxw4ZTVnOWkTyWNbpqw9tTC`.
- 빌드 후 단일 진실원천 = repo의 `data/corpus.jsonl`. Drive는 임시 인박스(파일 누적돼도 id로 중복방지).
- 원격 루틴 id: `trig_018MdMhKTtbZeAzukqjgmJfY` (매일 19:00 KST). Claude GitHub App으로 repo clone/push.
- ⚠️ 폐기됨: `auto_lesson.py`(로컬 세션 스캔). 번역이 데스크탑 앱으로 옮겨가 무용 → 삭제.

### 수동 빌드
"인박스 처리해줘" 대신 이제 **`/build-lessons`** (또는 corpus의 특정 줄을 `processed:false`로 뒤집고 실행). PWA + 버튼 인박스(`inbox/*.md`)는 보조 경로로 유지(`scripts/inbox_to_lesson.py`).

## 📐 레슨 스키마

```javascript
{
  id: 'LNN',
  title: '...',
  subtitle: '...',
  source: '...',
  type: 'casual_compliment' | 'casual_work_chat' | 'business_email_intro' |
        'business_email_terms' | 'vocab_burst' | 'formal_email' | 'formal_sentence',
  difficulty: 'A2' | 'A2-B1' | 'B1' | 'B1-B2' | 'B2',
  date: 'YYYY-MM-DD',
  fullText: '繁體 원문',
  koreanSummary: '한국어 의역',
  sentences: [
    { id, hanzi, zhuyin: 'ㄅㄆㄇ...', pinyin, korean, wordBreak, keyPattern }
  ],
  vocab: [
    { hanzi, zhuyin, pinyin, korean, pos, hsk, tags: ['업무','필수',...], example: {hanzi, korean} }
  ],
  practice: [
    { prompt: '시나리오', modelAnswers: [{ level: '간단'|'중간'|'자연스러움', hanzi, pinyin, korean }] }
  ]
}
```

자세한 스키마와 태그 옵션은 `CLAUDE_PROJECT_INSTRUCTIONS.md` 참고.

## 🃏 플래시카드 (반복학습) — 2026-06-07 추가

홈 빠른도구 **🃏 플래시카드** (= 기존 '전체 단어장'을 대체). 모든 레슨 vocab을 `hanzi` 기준 중복제거해 카드 풀 생성.

- **앞면**: 단어(hanzi) + 예문(example.hanzi) / **뒷면**: 한국어 뜻 + 拼音(·注音) + 뒤집으면 자동 발음(TTS)
- **분류(Leitner 2단계)**: `미학습(new)` → ✅알아요 `맞춘(known)` / ❌몰라요 `못맞춘(unknown)`. 못맞춘 덱에서 맞추면 known으로 이동
- **로컬 저장**: `localStorage['taiwanese-flashcards-v1']`. 키가 `hanzi` 라서 **레슨 갱신돼도 분류 유지**, 새 단어는 자동 '미학습'
- **GitHub 동기화**: 카드화면 하단 버튼으로 `data/flashcard_state.json` push(올리기)/pull(받기). PAT 필요. SHA 갱신 지원

### 🗂 3개 세트 (2026-07-12 추가)
플래시카드 화면 상단에 **세트 선택 줄**(종합/번↔간/시술명) + 기존 상태 칩(전체/미학습/못맞춘/맞춘). Leitner 분류는 세트별 네임스페이스 key로 저장:
- **종합**: 모든 레슨 vocab. key=`hanzi` (기존과 동일 → 분류 유실 없음)
- **번↔간**: `data/t2s.js` (자동 생성). 레슨 vocab 중 번↔간이 다른 단어만. 앞=번체(글자 하이라이트)/뒤=간체+뜻+글자매핑. key=`t2s:번체`
  - 생성/갱신: `python3 scripts/build_t2s.py` (opencc t2s). **레슨 단어 늘면 재실행.** 의존성 `pip3 install opencc-python-reimplemented`
- **시술명**: `data/procedures.js` (72개, `scripts/build_procedures.py`의 ENTRIES 편집→재생성. pypinyin으로 拼音·注音 자동). 강남언니 대만 이벤트 목록에서 추출한 핵심 시술 용어. 앞=시술명 번체+拼音 / 뒤=한국어명+한글설명+옵셔널 `img`. key=`proc:번체`
- 세 데이터 파일 모두 `index.html`에서 `document.write`로 로드(전역 `LESSONS`/`T2S_CARDS`/`PROCEDURES`)

### 📥 분류 상태 읽는 법 (레슨 추가/추천 시 활용)
사용자가 "동기화했다"고 하면 `data/flashcard_state.json` 을 읽어 어떤 단어가 `unknown`(못 외운 것)인지 파악 가능. 형식:
```json
{ "updatedAt": "ISO", "cards": { "業配": { "box": "unknown|known|new", "ts": "ISO", "lessonId": "L20" } } }
```
→ `unknown` 단어를 새 레슨 예문에 의도적으로 재등장시키거나 복습 우선순위로 쓸 수 있음.

## 🎨 콘텐츠 스타일 규칙

- 항상 **繁體中文만** (간체 절대 X)
- 발음 표기: **注音 + 拼音 둘 다** (사용자 선호)
- 대만 특유 표현 적극 활용: 影片(영상), 限動(스토리), 業配(PR), 開箱(언박싱), 檔期(일정), 上刊(게재), 想說/不然/本來/吧/啦
- 연습 답안 3단계: 간단 / 중간 / 자연스러움
- 격식 vs 회화 두 톤 대비 (由於 vs 因為 등)
- 업계 빈출 단어는 ⭐ 마킹
- "왜 이렇게 쓰는지" 패턴 설명 필수 (단순 번역 X)

## 📝 사용자 피드백 (중요!)

- **산출물(파일·코드·레슨) 만들기 전 항상 텍스트로 미리보기 → 사용자 승인 → 푸시** (기록된 강한 선호)
- 보고/요약은 간결하게 (불필요한 trailing summary X)

## 🔧 자주 사용하는 명령

### 로컬 서버 (테스트용)
```bash
cd /Users/choeunbi/Documents/Claude/taiwanese_learning
python3 -m http.server 8000
# 폰에서: http://[Mac IP]:8000
```

### GitHub Push
```bash
git push origin main   # ← 그냥 이걸로 됨!
```
⚠️ **토큰 필요 없음.** 인증은 macOS osxkeychain에 저장돼 있어서 `git push origin main` 한 줄이면 끝. `GH_TOKEN` 환경변수 / PAT URL 방식 쓰지 말 것 (예전 메모였음, 지금은 keychain).

### lessons.js 문법 검증
```bash
osascript -l JavaScript -e '
const path = "/Users/choeunbi/Documents/Claude/taiwanese_learning/data/lessons.js";
const data = $.NSString.stringWithContentsOfFileEncodingError(path, $.NSUTF8StringEncoding, $());
try { new Function(ObjC.unwrap(data)); "JS_OK"; } catch(e) { "JS_ERR: " + e.message; }'
```

### Plaud TXT 인코딩 복구
```bash
python3 -c "
with open('broken.txt') as f: text = f.read()
fixed = bytearray(ord(c) for c in text if ord(c) < 256)
print(fixed.decode('utf-8', errors='replace'))
"
```

## 📊 현재 레슨 상태 (2026-06-17 통합 재구성)

기존 36개(L01~L36)를 **실제 내용 기준** 주제별 **6개 통합 레슨**으로 병합. 비슷한 단어 반복 노출이 목적.
빈 placeholder(구 L07 — Reels 재업로드 대기)만 **삭제**. 나머지 35개는 전부 보존·병합.

| ID | 통합 레슨 | 합친 구ID | 문장·단어 |
|----|----------|----------|----------|
| L01 | 협업 제안·견적 이메일/DM (아웃바운드) | L02·L03·L18·L22·L29·L31·L32 | s37·v77 |
| L02 | 협업 문의 응답·조율·거절 (인바운드/구어) | L12·L23·L25·L26·L30·L34·L36 | s28·v56 |
| L03 | 醫美·인플루언서 업계 어휘·권리 | L04·L10·L15·L16·L19·L20·L28·L33·L35 | s41·v110 |
| L04 | 비즈니스 격식·문어체 | L05·L06 | s6·v25 |
| L05 | 캐주얼 회화·칭찬·어조사 | L01·L08·L09·L11·L17·L27 | s18·v52 |
| L06 | 醫美 마케팅·소비자 카피·리서치 | L13·L14·L21·L24 | s16·v50 |

- 통합 시 문장은 날짜순 concat + 1..N 재번호, 단어는 hanzi 기준 dedup(태그 합집합), practice는 보존.
- 통합 레슨엔 `mergedFrom`(구ID 배열), `dateLabel`("MM/DD~MM/DD" 자료 기준일) 필드 추가.
- 재실행 스크립트: `scripts/merge_lessons.js` (CLUSTERS 매핑 수정 후 재실행, .gitignore).
- 다음 자동빌드 ID는 **L07** (`corpus_build.py next_id` 호환 확인).

⚠️ **이 표는 자주 뒤처짐.** 항상 `node -e "console.log(require('./data/lessons.js').LESSONS.map(l=>l.id))"` 로 직접 확인.
⚠️ 자동빌드 루틴은 새 문장을 다시 개별 L## 로 append함 → 쌓이면 `merge_lessons.js` 매핑 갱신해 재병합.
⚠️ **병합 전 반드시 `git fetch origin && git rebase origin/main`** — 자동빌드가 리모트에 새 레슨을 push해두므로 stale 상태로 병합하면 새 레슨 유실됨(2026-06-17 실제 발생).

### 🆕 2026-06-17 UI/기능 변경
- **개요 탭 '🔊 전체 듣기'**: 문장을 끊김 없이 순서대로 TTS 재생 + 현재 문장 하이라이트(`speakSequence`/`stopSequence`). 🐢 속도 토글(1.0↔0.7) 포함.
- **'작문' 탭 제거**: 탭/렌더 삭제, `practice` 데이터는 lessons.js에 보존(나중에 복구 가능).
- **학습 횟수 카운터**: progress 구조 `{completed:[]}` → **`{counts:{id:횟수}}`** (자동 마이그레이션). 개요의 **'✓ 학습 완료'** 버튼으로만 +1. 홈 리스트에 `N회 학습/미학습` + `📅 MM/DD 자료`(레슨 dateLabel) 표시.

## 🎤🔊 녹음 · TTS (2026-06-07 개선)

- **녹음**: iOS Safari는 `audio/webm` 미지원 → `MediaRecorder.isTypeSupported`로 mp4/aac/webm 자동탐지하고 실제 mimeType으로 Blob 생성(`toggleRecord`/`pickRecorderMime`). HTTPS(라이브)에서만 마이크 동작
- **TTS**: `getVoice()` 가 Enhanced/Premium/Neural 고품질 음성을 우선 선택. iOS 기본 음성이 로봇 같으면 **설정 → 손쉬운 사용 → 음성 콘텐츠 → 음성 → 中文(台灣) → 고품질** 1회 다운로드 필요(설정 화면에 안내·현재 음성·테스트 버튼 있음)

## ⚠️ 알려진 이슈

- **Plaud TXT export 인코딩 사고**: UTF-8 → Latin-1 변환 손실 자주 발생. 항상 **Plaud 앱에서 텍스트 직접 복사** 권장
- **iOS Safari PWA 캐싱**: index.html이 `data/lessons.js?v=Date.now()` 동적 로드로 캐시 무력화 처리됨(2026-06-02). 그래서 보통은 **앱 재실행만 하면** 새 레슨 반영됨. 그래도 안 보이면 → index.html 셸 자체가 옛 캐시인 경우이므로 앱 삭제 후 재추가 or Safari 캐시 클리어 1회. 라이브 반영 검증: `curl -s "https://florcho.github.io/taiwanese-learning/data/lessons.js?t=$(date +%s)" | grep "id: 'L"`
- **GitHub Pages 권한**: Pages는 웹 UI에서 1회 활성화 완료 (push만 하면 자동 재배포 ~30-60초)

## 🔐 인증

push 인증은 **macOS osxkeychain에 저장돼 있어 `git push origin main`으로 바로 됨** (토큰 입력 불필요). `GH_TOKEN` 환경변수·PAT URL 방식은 예전 메모이며 지금은 안 씀. 토큰을 코드/파일에 박는 일은 절대 X.

폰 PWA의 PAT은 localStorage에만 저장 (서버 전송 X).

---

## 🆕 새 세션 시작 시 권장 첫 행동

1. `data/lessons.js` 의 마지막 레슨 ID 확인 (다음 ID 결정)
2. `inbox/` 폴더 내용 확인 (`ls inbox/`)
3. 최근 커밋 확인 (`git log --oneline -5`)
4. 그 후 사용자 요청 대응
