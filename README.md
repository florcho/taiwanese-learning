# 🇹🇼 대만어 학습 PWA

flor.cho@healingpaper.com 전용 맞춤 학습 도구.
대만 만다린(台灣國語) — Yuna와의 업무 회화 + 인플루언서 협업 이메일 + Reels 어휘 학습.

## 🚀 시작하기

### 데스크탑에서 미리보기
```bash
cd /Users/choeunbi/Documents/Claude/taiwanese_learning
open index.html
```

### 📱 폰에서 사용하기 (출퇴근용 — 핵심!)

**옵션 A. iCloud Drive로 동기화 후 Safari 열기**
1. 이 폴더 전체를 `iCloud Drive` → `Documents` 안으로 복사
2. 폰에서 `파일` 앱 → iCloud Drive → `taiwanese_learning` → `index.html` 길게 누름 → "공유" → "Safari로 열기"
3. Safari에서 → 공유 버튼 → "홈 화면에 추가" → 앱처럼 사용 가능

**옵션 B. 로컬 서버 + 같은 Wi-Fi (가장 깔끔)**
```bash
cd /Users/choeunbi/Documents/Claude/taiwanese_learning
python3 -m http.server 8000
```
같은 Wi-Fi에서 폰 Safari로 `http://[맥북IP]:8000` 접속 → 홈화면 추가

**옵션 C. GitHub Pages 무료 호스팅**
1. 이 폴더를 GitHub 리포지토리로 푸시
2. Settings → Pages → main branch 활성화
3. `https://[username].github.io/[repo]` 에서 접속

---

## 📚 레슨

2026-06-17 기준 **주제별 6개 통합 레슨(L01~L06)** 으로 재구성 — 비슷한 자료를 묶어 단어가 반복 노출되게 함.
(L01 협업 아웃바운드 · L02 협업 인바운드 · L03 업계 어휘 · L04 격식 · L05 캐주얼 · L06 마케팅)
자동빌드 루틴이 새 자료를 L07+로 계속 append하며, 쌓이면 다시 병합해요.
전체 목록은 앱 홈 화면, ID는 `node -e "console.log(require('./data/lessons.js').LESSONS.map(l=>l.id))"` 로 확인.

---

## 🎯 1개월 학습 계획

### W1 (5/24~5/30) — 약점 보강 + 업계 어휘
- 매일 L01~L06 중 1개씩 (총 6개)
- 발음 위주: 쉐도잉 모드 활용
- 단어장은 누적 (앱 안에서 자동)

### W2 (5/31~6/6) — 능동 산출 부팅
- 개요 탭 **🔊 전체 듣기**로 레슨 통째 흘려듣기 → 쉐도잉으로 따라 말하기
- Plaud 프롬프트 #2 (Yuna 회의 코칭) 본격 활용
- Yuna에게 1~2 문장 답장 시도

### W3 (6/7~6/13) — 즉답 훈련
- Yuna 미팅 매번 Plaud로 녹음 → 다음날 답변 시뮬
- 새 Reels 1개씩 학습 (Plaud 프롬프트 #1 활용)
- 이메일 자작 (L02·L03 템플릿 변형)

### W4 (6/14~6/20) — 실전 점검
- 같은 진단 (A5 문장 + C 작문) 다시 풀어보기
- 목표: Yuna 코멘트에 대만어로 즉답, 이메일 90% 이해

---

## 🎙️ Plaud 활용 워크플로우

앱 안 "Plaud 프롬프트" 화면에 5개 프롬프트 저장됨. 탭하면 클립보드 복사.

1. **Reels 트랜스크립트 분석** — Reels 녹음 → 프롬프트 던지면 학습용 분해 자동
2. **Yuna 회의 답변 코칭** — 회의 녹음 → 내가 답해야 할 부분 3 단계 답안 자동
3. **이메일 분석 → 답장 초안** — 받은 이메일 텍스트 + 프롬프트 → 답장 3 버전
4. **발음 교정** — 본인 녹음 + 원본 녹음 → 차이 분석
5. **격식 → 회화체 변환** — 같은 의미 두 가지 톤 동시 학습

---

## ⚠️ Plaud TXT 인코딩 문제 (L07)

기존에 보내신 `05-23_推薦：韓國醫美預約APP_Only_transcript.txt`는 UTF-8 디코딩 사고로 글자 절반이 손실됐어요. 다음 중 하나로 재공유 부탁:

1. **(권장) 복사-붙여넣기**: Plaud 앱 → 해당 노트 → "Transcript" → 텍스트 전체 선택 → 복사 → 메시지에 그대로 붙여넣기
2. **m4a 오디오 파일** 첨부 → 제가 직접 트랜스크립트 추출
3. **영상 스크린샷** (자막 포함된 프레임 3~5개)

---

## 🛠️ 새 레슨 추가하기

`data/lessons.js` 파일의 `LESSONS` 배열에 새 객체 추가:

```javascript
{
  id: 'L08',
  title: '제목',
  subtitle: '부제',
  source: '출처',
  type: 'casual_work_chat',  // 또는 business_email_intro 등
  difficulty: 'B1',
  date: '2026-MM-DD',
  fullText: '전체 본문 (繁體中文)',
  koreanSummary: '한국어 요약',
  sentences: [
    {
      id: 1,
      hanzi: '...',
      zhuyin: 'ㄅㄆㄇㄈ ...',
      pinyin: '...',
      korean: '...',
      wordBreak: '단어1(뜻) | 단어2(뜻)',
      keyPattern: '💡 핵심 패턴 설명'
    }
  ],
  vocab: [
    {
      hanzi: '...',
      zhuyin: '...',
      pinyin: '...',
      korean: '...',
      pos: '...',
      hsk: 4,
      tags: ['업무', '필수'],
      example: { hanzi: '...', korean: '...' }
    }
  ],
  practice: [
    {
      prompt: '시나리오 설명',
      modelAnswers: [
        { level: '간단', hanzi: '...', pinyin: '...', korean: '...' }
      ]
    }
  ]
}
```

저장 후 폰에서 Safari 새로고침하면 즉시 반영.

---

## 🎨 디자인 노트

- 다크 테마 기본 (출퇴근시 눈 부담 ↓)
- 모바일 우선 (375px 기준)
- 발음: 注音 + 拼音 둘 다 표기
- TTS: 브라우저 내장 `zh-TW` 음성. **Enhanced/Premium 고품질 음성 우선 선택** (iOS는 설정에서 中文(台灣) 고품질 1회 다운로드 권장 — 앱 설정 화면에 안내)
- 녹음: MediaRecorder API. iOS Safari 호환 위해 지원 mimeType(mp4/aac/webm) 자동 탐지 (HTTPS에서만 동작)

## 🃏 플래시카드 (반복학습)

홈 빠른도구 첫 칸. 모든 레슨 단어를 카드로 모아 반복 학습:
- 앞면 단어+예문 → 탭하여 뒤집기 → 뒷면 한글뜻·拼音·자동 발음
- ✅알아요 / ❌몰라요 로 **맞춘 / 못맞춘 / 미학습** 분류 (덱 전환 가능)
- 분류는 `localStorage` 저장, 단어(漢字) 기준이라 레슨이 늘어도 유지
- 하단 ☁️ 버튼으로 `data/flashcard_state.json` 에 GitHub 동기화(여러 기기·Claude 프로젝트 공유)

## 📂 파일 구조

```
taiwanese_learning/
├── index.html          # 메인 HTML
├── styles.css          # 스타일
├── app.js              # 로직
├── manifest.json       # PWA 메타데이터
├── data/
│   ├── lessons.js              # 모든 레슨 데이터 (여기만 추가하면 됨)
│   └── flashcard_state.json    # 플래시카드 분류 상태 (앱이 동기화로 생성/갱신)
├── inbox/              # 레슨화 대기 자료
├── scripts/            # 자동화 스크립트 (.gitignore, 로컬 전용)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## 🔄 작동 확인 체크리스트

- [ ] 홈에서 전체 레슨 목록 + 각 레슨의 `N회 학습/미학습` 배지·`📅 자료일` 표시
- [ ] 레슨 탭하면 "개요/쉐도잉/단어장" 3탭이 보임 (작문 탭은 2026-06-17 제거)
- [ ] 개요 탭 🔊 **전체 듣기** → 문장 순차 재생 + 현재 문장 하이라이트
- [ ] 개요 탭 ✓ **학습 완료** 누르면 홈 리스트 학습 횟수 +1
- [ ] 쉐도잉 🔊 재생 누르면 中文 발음이 들림 (설정에서 고품질 음성 확인)
- [ ] 🎤 따라말하기 → 마이크 권한 → 녹음 → 정지 → 재생 가능
- [ ] 🃏 플래시카드 → 뒤집기 → ✅/❌ 분류 → 덱(미학습/못맞춘/맞춘) 전환
- [ ] 플래시카드 하단 ☁️ 동기화(올리기/받기) 작동
- [ ] 빠른 도구 → 랜덤 퀴즈 / Plaud 프롬프트 작동

문제 발생 시 Safari 콘솔 또는 알려주세요.
