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
/Users/choeunbi/Documents/taiwanese_learning/
├── index.html                       # PWA 홈
├── app.js                           # 로직 (쉐도잉, 단어, 퀴즈, 인박스, GH 연동)
├── styles.css
├── manifest.json
├── data/lessons.js                  # 모든 레슨 (LESSONS 배열)
├── data/flashcard_state.json        # 🃏 플래시카드 분류 상태 (앱이 GitHub 동기화로 push)
├── inbox/                           # 처리 대기 자료
├── scripts/                         # 자동화 파이썬 (auto_lesson.py 등) — .gitignore 처리, 로컬 전용
├── icons/
├── README.md
├── PLAUD_PROMPTS.md
└── CLAUDE_PROJECT_INSTRUCTIONS.md   # claude.ai 프로젝트 지침
```

⚠️ `scripts/` 는 `.gitignore` 에 있어 **git에 안 올라감**(로컬 전용 자동화). 커밋/리포에서 안 보여도 정상.

- **GitHub**: `florcho/taiwanese-learning`
- **라이브 URL**: https://florcho.github.io/taiwanese-learning/
- **GitHub Pages 빌드**: main 브랜치 → 자동 (30-60초)

## 🔄 인박스 → 레슨 변환 워크플로우

사용자가 폰 PWA에서 자료(Slack/이메일/Reels)를 + 버튼으로 업로드 → GitHub `/inbox/*.md` 에 저장됨.

**사용자가 "인박스 처리해줘" 라고 하면**:
1. `inbox/*.md` 파일들 읽기 (.gitkeep 제외)
2. 각각 레슨 객체로 변환 (스키마: 아래)
3. `data/lessons.js` LESSONS 배열에 append (ID 자동 증가)
4. 처리한 inbox 파일 삭제
5. 단일 커밋으로 push
6. Pages 재배포 (~30초) → 폰 새로고침하면 새 레슨 보임

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
cd /Users/choeunbi/Documents/taiwanese_learning
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
const path = "/Users/choeunbi/Documents/taiwanese_learning/data/lessons.js";
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

## 📊 현재 레슨 상태 (2026-06-01 기준)

| ID | 제목 | 출처 |
|----|------|------|
| L01 | Yuna Slack — 本來也想說 패턴 | Yuna 메시지 |
| L02 | 협업 제안 이메일 - 인사·소개 | 본인 발송 |
| L03 | 협업 제안 이메일 - 조건·견적 | 본인 발송 |
| L04 | Reels 캡션 — Beauty 어휘 11개 | 진단 B1 + 확장 |
| L05 | 비즈니스 이메일 격식 표현 | 진단 B2 + 확장 |
| L06 | 격식 한 문장 해부 (由於/將於) | 진단 A5 |
| L07 | 🚧 Plaud Reels (재업로드 대기) | 인코딩 사고 |
| L08 | 칭찬 표현 — 你的眼光太好了吧! | 인박스 2026-05-25 |
| L09~L16 | (인박스 변환분 — 클리닉 마케팅/소비자 리서치 톤/광고 견적·일정 등) | 인박스 |
| L17 | Yuna 협력사 소개 인사말 템플릿 | 인박스 2026-05-28 |
| L18 | 협업 견적·재제작 조건 (報價/再製) | 인박스 2026-06-01 |
| L19 | 網紅 언어(韓/中) 선택 내부 토론 | 인박스 2026-06-01 |
| L20 | 醫美 광고 카피 어휘 폭격 (시술명+세일패턴) | 인박스 2026-06-01 |
| L21 | 경쟁 에이전시 프로필 광고 (醫美 觀光 대행) | 인박스 2026-06-02 |
| L22 | 협업 재제안 follow-up 이메일 (UNNI) | 인박스 2026-06-02 |
| L23 | 협업 진행 일정표 (腳本→上刊→付款) | 인박스 2026-06-02 |

다음 추가될 레슨 ID는 **L24**.

⚠️ **이 표는 자주 뒤처짐.** 새 세션에선 표를 믿지 말고 항상 `grep "id: 'L" data/lessons.js` 로 마지막 ID를 직접 확인할 것 (= "다음 ID" 결정 방법).

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
