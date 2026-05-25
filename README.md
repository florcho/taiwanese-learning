# 🇹🇼 대만어 학습 PWA

flor.cho@healingpaper.com 전용 맞춤 학습 도구.
대만 만다린(台灣國語) — Yuna와의 업무 회화 + 인플루언서 협업 이메일 + Reels 어휘 학습.

## 🚀 시작하기

### 데스크탑에서 미리보기
```bash
cd /Users/choeunbi/Documents/taiwanese_learning
open index.html
```

### 📱 폰에서 사용하기 (출퇴근용 — 핵심!)

**옵션 A. iCloud Drive로 동기화 후 Safari 열기**
1. 이 폴더 전체를 `iCloud Drive` → `Documents` 안으로 복사
2. 폰에서 `파일` 앱 → iCloud Drive → `taiwanese_learning` → `index.html` 길게 누름 → "공유" → "Safari로 열기"
3. Safari에서 → 공유 버튼 → "홈 화면에 추가" → 앱처럼 사용 가능

**옵션 B. 로컬 서버 + 같은 Wi-Fi (가장 깔끔)**
```bash
cd /Users/choeunbi/Documents/taiwanese_learning
python3 -m http.server 8000
```
같은 Wi-Fi에서 폰 Safari로 `http://[맥북IP]:8000` 접속 → 홈화면 추가

**옵션 C. GitHub Pages 무료 호스팅**
1. 이 폴더를 GitHub 리포지토리로 푸시
2. Settings → Pages → main branch 활성화
3. `https://[username].github.io/[repo]` 에서 접속

---

## 📚 현재 레슨 (총 7개)

| ID | 제목 | 출처 | 난이도 |
|----|------|------|--------|
| L01 | Yuna Slack 메시지 - 계정 문제 상의 | Yuna Slack | B1 |
| L02 | 협업 제안 이메일 - 인사 & 소개 | 본인 발송 | B1 |
| L03 | 협업 제안 이메일 - 조건 & 견적 | 본인 발송 | B1 |
| L04 | Reels 캡션 - Beauty/Influencer 핵심 어휘 | 진단 + 확장 | A2-B1 |
| L05 | 비즈니스 이메일 격식 표현 | 진단 B2 | B1-B2 |
| L06 | 격식 한 문장 해부 (由於/將於) | 진단 A5 | B2 |
| L07 | 🚧 Reels Plaud (재업로드 대기) | — | TBD |

---

## 🎯 1개월 학습 계획

### W1 (5/24~5/30) — 약점 보강 + 업계 어휘
- 매일 L01~L06 중 1개씩 (총 6개)
- 발음 위주: 쉐도잉 모드 활용
- 단어장은 누적 (앱 안에서 자동)

### W2 (5/31~6/6) — 작문 부팅
- 매 레슨 "작문" 탭의 모범답안을 외워서 변형
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
- TTS: 브라우저 내장 `zh-TW` 음성 사용 (iOS Safari는 Mei-Jia 또는 Sin-Ji 사용)
- 녹음: MediaRecorder API (마이크 권한 필요)

## 📂 파일 구조

```
taiwanese_learning/
├── index.html          # 메인 HTML
├── styles.css          # 스타일
├── app.js              # 로직
├── manifest.json       # PWA 메타데이터
├── data/
│   └── lessons.js      # 모든 레슨 데이터 (여기만 추가하면 됨)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## 🔄 작동 확인 체크리스트

- [ ] 홈에서 7개 레슨이 보임
- [ ] 레슨 탭하면 "개요/쉐도잉/단어장/작문" 4탭이 보임
- [ ] 🔊 재생 누르면 中文 발음이 들림 (zh-TW 음성)
- [ ] 🎤 따라말하기 → 마이크 권한 → 녹음 → 정지 → 재생 가능
- [ ] 단어 탭 → 단어 카드 누르면 펼쳐짐 + 예문 표시
- [ ] 빠른 도구 → 랜덤 퀴즈 작동
- [ ] 빠른 도구 → Plaud 프롬프트 탭하면 복사됨

문제 발생 시 Safari 콘솔 또는 알려주세요.
