// 대만 만다린 학습 PWA - 앱 로직
// LESSONS, REVIEW_VOCAB 는 data/lessons.js 에서 로드됨

// ============================================================
// 상태 관리
// ============================================================
const STORAGE_KEY = 'taiwanese-learning-v1';
const state = {
  currentLesson: null,
  currentSentenceIdx: 0,
  currentTab: 'overview',
  ttsRate: 1.0,
  vocabFilter: 'all',
  quiz: null,
  recorder: null,
  isRecording: false,
  progress: loadProgress()
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { completed: [], vocab: {} };
  } catch (e) {
    return { completed: [], vocab: {} };
  }
}
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}
function markLessonDone(id) {
  if (!state.progress.completed.includes(id)) {
    state.progress.completed.push(id);
    saveProgress();
  }
}

// ============================================================
// 화면 전환
// ============================================================
function show(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(screenId).classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// 홈 화면 렌더
// ============================================================
function renderHome() {
  // 오늘의 레슨 = 첫 미완료 레슨
  const today = LESSONS.find(l => !state.progress.completed.includes(l.id)) || LESSONS[0];
  state.todayLesson = today;
  document.getElementById('header-subtitle').textContent = `오늘 ${new Date().toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', weekday: 'short' })}`;
  document.getElementById('today-lesson-title').textContent = today.title;
  document.getElementById('today-lesson-subtitle').textContent = today.subtitle;

  // 진행도
  const done = state.progress.completed.length;
  const total = LESSONS.length;
  document.getElementById('progress-pill').textContent = `${done} / ${total}`;

  // 단어 개수
  const totalVocab = LESSONS.reduce((sum, l) => sum + (l.vocab?.length || 0), 0);
  document.getElementById('vocab-count').textContent = `${totalVocab}개`;

  // 레슨 목록
  const list = document.getElementById('lesson-list');
  list.innerHTML = '';
  LESSONS.forEach(l => {
    const isDone = state.progress.completed.includes(l.id);
    const item = document.createElement('div');
    item.className = 'lesson-item' + (isDone ? ' done' : '');
    item.innerHTML = `
      <span class="lesson-id">${l.id}</span>
      <div class="lesson-meta">
        <h4>${l.title}</h4>
        <p>${l.subtitle}</p>
      </div>
      <span class="lesson-badge ${l.difficulty.split('-')[0]}">${l.difficulty}</span>
    `;
    item.onclick = () => openLesson(l.id);
    list.appendChild(item);
  });
}

// ============================================================
// 레슨 화면
// ============================================================
function openLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return;
  state.currentLesson = lesson;
  state.currentSentenceIdx = 0;

  document.getElementById('lesson-title').textContent = lesson.title;
  document.getElementById('lesson-subtitle').textContent = lesson.subtitle;

  renderOverview();
  renderShadow();
  renderVocab();
  renderPractice();

  // placeholder 레슨은 빈 상태로 안내
  if (lesson.type === 'placeholder') {
    switchTab('overview');
  } else {
    switchTab('overview');
  }
  show('screen-lesson');
}

function renderOverview() {
  const l = state.currentLesson;
  document.getElementById('lesson-fulltext').textContent = l.fullText;
  document.getElementById('lesson-korean-summary').textContent = l.koreanSummary;
  const goals = document.getElementById('lesson-goals');
  goals.innerHTML = '';
  const goalsArr = [
    `${l.sentences.length}개 문장 쉐도잉`,
    `${l.vocab.length}개 단어 마스터`,
    `${l.practice.length}개 작문 시뮬레이션`
  ].filter(g => !g.startsWith('0'));
  goalsArr.forEach(g => {
    const li = document.createElement('li');
    li.textContent = g;
    goals.appendChild(li);
  });
}

function renderShadow() {
  const l = state.currentLesson;
  if (!l.sentences.length) {
    document.querySelector('#tab-shadow').innerHTML = '<div class="card"><p>이 레슨에는 쉐도잉 콘텐츠가 없습니다.</p></div>';
    return;
  }
  const idx = state.currentSentenceIdx;
  const s = l.sentences[idx];
  document.getElementById('sent-counter').textContent = `${idx + 1} / ${l.sentences.length}`;
  document.getElementById('sent-hanzi').textContent = s.hanzi;
  document.getElementById('sent-zhuyin').textContent = s.zhuyin;
  document.getElementById('sent-pinyin').textContent = s.pinyin;
  document.getElementById('sent-korean').textContent = s.korean;
  document.getElementById('sent-wordbreak').textContent = s.wordBreak;
  document.getElementById('sent-pattern').textContent = s.keyPattern || '';
}

function renderVocab() {
  const l = state.currentLesson;
  const container = document.getElementById('vocab-list');
  container.innerHTML = '';
  if (!l.vocab.length) {
    container.innerHTML = '<div class="card"><p>이 레슨에는 단어가 없습니다.</p></div>';
    return;
  }
  l.vocab.forEach(v => container.appendChild(makeVocabItem(v)));
}

function makeVocabItem(v) {
  const item = document.createElement('div');
  item.className = 'vocab-item';
  const tags = (v.tags || []).map(t => `<span class="tag ${t}">${t}</span>`).join('');
  item.innerHTML = `
    <div class="vocab-head">
      <span class="vocab-hanzi">${v.hanzi}</span>
      <span class="vocab-phon">${v.zhuyin}</span>
      <span class="vocab-pinyin">${v.pinyin}</span>
    </div>
    <p class="vocab-korean">${v.korean} <span style="color:var(--text-faint);font-size:11px;">· ${v.pos || ''}</span></p>
    <div class="vocab-tags">${tags}</div>
    <div class="vocab-detail">
      ${v.example ? `
        <div class="vocab-example">
          <p class="ex-hanzi">${v.example.hanzi}</p>
          <p class="ex-korean">${v.example.korean}</p>
        </div>
      ` : ''}
      <button class="vocab-tts">🔊 발음 듣기</button>
    </div>
  `;
  item.onclick = (e) => {
    if (e.target.classList.contains('vocab-tts')) {
      speak(v.example ? v.example.hanzi : v.hanzi);
      e.stopPropagation();
      return;
    }
    item.classList.toggle('expanded');
  };
  return item;
}

function renderPractice() {
  const l = state.currentLesson;
  const container = document.getElementById('practice-list');
  container.innerHTML = '';
  if (!l.practice.length) {
    container.innerHTML = '<div class="card"><p>이 레슨에는 작문 연습이 없습니다.</p></div>';
    return;
  }
  l.practice.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'practice-item';
    const modelsHTML = (p.modelAnswers || []).map(m => `
      <div class="model-answer">
        <div class="model-level">${m.level}</div>
        <p class="model-hanzi">${m.hanzi}</p>
        ${m.pinyin ? `<p class="model-pinyin">${m.pinyin}</p>` : ''}
        <p class="model-korean">${m.korean}</p>
      </div>
    `).join('');
    div.innerHTML = `
      <p class="practice-prompt">📝 ${p.prompt}</p>
      <textarea class="practice-user-input" placeholder="여기에 답을 직접 써보세요..."></textarea>
      <button class="show-models-btn" data-idx="${i}">💡 모범답안 보기</button>
      <div class="model-answers">${modelsHTML}</div>
    `;
    div.querySelector('.show-models-btn').onclick = () => {
      div.querySelector('.model-answers').classList.toggle('shown');
    };
    container.appendChild(div);
  });
}

function switchTab(tabName) {
  state.currentTab = tabName;
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id === 'tab-' + tabName));
}

// ============================================================
// 쉐도잉 컨트롤
// ============================================================
function nextSent() {
  const l = state.currentLesson;
  if (!l) return;
  if (state.currentSentenceIdx < l.sentences.length - 1) {
    state.currentSentenceIdx++;
    renderShadow();
  } else {
    markLessonDone(l.id);
    toast('🎉 마지막 문장입니다! 레슨 완료');
    renderHome();
  }
}
function prevSent() {
  if (state.currentSentenceIdx > 0) {
    state.currentSentenceIdx--;
    renderShadow();
  }
}

// ============================================================
// TTS (브라우저 음성)
// ============================================================
function getVoice() {
  const voices = speechSynthesis.getVoices();
  // 우선순위: zh-TW > zh-HK > zh-CN
  return voices.find(v => v.lang === 'zh-TW') ||
         voices.find(v => v.lang.startsWith('zh-TW')) ||
         voices.find(v => v.lang === 'zh-HK') ||
         voices.find(v => v.lang.startsWith('zh')) ||
         null;
}

function speak(text, rate = state.ttsRate) {
  if (!('speechSynthesis' in window)) {
    toast('이 브라우저는 음성 합성을 지원하지 않습니다.');
    return;
  }
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'zh-TW';
  utter.rate = rate;
  const voice = getVoice();
  if (voice) utter.voice = voice;
  speechSynthesis.speak(utter);
}

// ============================================================
// 녹음 (MediaRecorder API)
// ============================================================
async function toggleRecord() {
  const btn = document.getElementById('record-toggle');
  if (state.isRecording) {
    state.recorder.stop();
    state.isRecording = false;
    btn.classList.remove('recording');
    btn.textContent = '🎤 따라말하기';
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.recorder = new MediaRecorder(stream);
    const chunks = [];
    state.recorder.ondataavailable = (e) => chunks.push(e.data);
    state.recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      document.getElementById('my-audio').src = url;
      document.getElementById('recording-result').classList.remove('hidden');
      stream.getTracks().forEach(t => t.stop());
    };
    state.recorder.start();
    state.isRecording = true;
    btn.classList.add('recording');
    btn.textContent = '⏹ 정지';
  } catch (err) {
    toast('마이크 권한이 필요해요');
  }
}

// ============================================================
// 전체 단어장 + 필터
// ============================================================
function renderAllVocab() {
  const allVocab = [];
  LESSONS.forEach(l => {
    (l.vocab || []).forEach(v => allVocab.push({ ...v, lessonId: l.id }));
  });
  document.getElementById('vocab-total').textContent = allVocab.length;

  const container = document.getElementById('vocab-all-list');
  container.innerHTML = '';
  const filter = state.vocabFilter;
  const filtered = filter === 'all' ? allVocab : allVocab.filter(v => (v.tags || []).includes(filter));
  filtered.forEach(v => container.appendChild(makeVocabItem(v)));
  if (filtered.length === 0) {
    container.innerHTML = '<div class="card"><p>해당 카테고리 단어가 없습니다.</p></div>';
  }
}

// ============================================================
// 퀴즈
// ============================================================
function startQuiz() {
  const allVocab = [];
  LESSONS.forEach(l => {
    (l.vocab || []).forEach(v => allVocab.push(v));
  });
  if (allVocab.length < 4) {
    toast('단어가 부족해요');
    return;
  }
  const shuffled = allVocab.sort(() => Math.random() - 0.5).slice(0, 10);
  state.quiz = { questions: shuffled, idx: 0, correct: 0, all: allVocab };
  show('screen-quiz');
  renderQuiz();
}

function renderQuiz() {
  const q = state.quiz;
  if (q.idx >= q.questions.length) {
    document.getElementById('quiz-container').innerHTML = `
      <div class="quiz-card">
        <h3>🎉 완료!</h3>
        <p class="quiz-prompt">${q.correct} / ${q.questions.length}</p>
        <p class="quiz-prompt-sub">${q.correct === q.questions.length ? '완벽해요!' : q.correct >= 7 ? '잘했어요!' : '한번 더 도전!'}</p>
        <button class="btn btn-primary" onclick="startQuiz()">다시 풀기</button>
        <button class="btn" style="margin-top:8px" onclick="show('screen-home')">홈으로</button>
      </div>
    `;
    return;
  }
  document.getElementById('quiz-progress').textContent = `${q.idx + 1} / ${q.questions.length}`;
  const cur = q.questions[q.idx];
  // 보기 4개 (정답 1 + 오답 3)
  const others = q.all.filter(v => v.hanzi !== cur.hanzi).sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [cur, ...others].sort(() => Math.random() - 0.5);

  const c = document.getElementById('quiz-container');
  c.innerHTML = `
    <div class="quiz-card">
      <p class="quiz-prompt-sub">다음 단어의 의미는?</p>
      <p class="quiz-prompt">${cur.hanzi}</p>
      <p class="phonetic">${cur.zhuyin} · ${cur.pinyin}</p>
      <div class="quiz-options">
        ${options.map(o => `<button class="quiz-option" data-hanzi="${o.hanzi}">${o.korean}</button>`).join('')}
      </div>
    </div>
  `;
  c.querySelectorAll('.quiz-option').forEach(btn => {
    btn.onclick = () => {
      const isCorrect = btn.dataset.hanzi === cur.hanzi;
      btn.classList.add(isCorrect ? 'correct' : 'wrong');
      if (!isCorrect) {
        c.querySelector(`[data-hanzi="${cur.hanzi}"]`).classList.add('correct');
      } else {
        q.correct++;
      }
      // 발음 들려주기
      speak(cur.hanzi);
      setTimeout(() => {
        q.idx++;
        renderQuiz();
      }, 1500);
    };
  });
}

// ============================================================
// 교정 단어 (진단 보강)
// ============================================================
function showReviewVocab() {
  show('screen-vocab-all');
  document.getElementById('vocab-total').textContent = REVIEW_VOCAB.length;
  document.querySelector('#screen-vocab-all .lesson-head h2').textContent = '🎯 진단 교정 단어';
  document.querySelector('#screen-vocab-all .filter-bar').style.display = 'none';
  const container = document.getElementById('vocab-all-list');
  container.innerHTML = '';
  REVIEW_VOCAB.forEach(v => {
    const item = document.createElement('div');
    item.className = 'vocab-item';
    item.innerHTML = `
      <div class="vocab-head">
        <span class="vocab-hanzi">${v.hanzi}</span>
        <span class="vocab-phon">${v.zhuyin}</span>
        <span class="vocab-pinyin">${v.pinyin}</span>
      </div>
      <p class="vocab-korean">${v.korean}</p>
      <p class="vocab-tags"><span class="tag 교정">${v.source}</span></p>
    `;
    item.onclick = () => speak(v.hanzi);
    container.appendChild(item);
  });
}

// ============================================================
// Plaud 프롬프트
// ============================================================
const PLAUD_PROMPTS = [
  {
    title: '📺 Reels/영상 트랜스크립트 분석',
    desc: 'Reels 녹음 후 Plaud AI에 던지기. 문장별 분해 + 단어장 자동 생성',
    prompt: `請將以下台灣中文逐句拆解，每句提供：
1) 原文（繁體中文）
2) 注音符號
3) 拼音
4) 韓文翻譯
5) HSK 4 以上的生詞，列出該詞的詞性與 2 個例句
6) 美容／醫美／網紅產業相關專業詞彙，請特別標註

請以 JSON 格式輸出，方便我直接複製到學習 app 裡。

[在這裡貼上轉錄文字]`
  },
  {
    title: '🗣️ Yuna 회의 답변 코칭',
    desc: 'Yuna와의 미팅 녹음 후 답변 시뮬레이션 자동 생성',
    prompt: `請分析以下這段我與台灣同事 Yuna 的對話：

1) 將 Yuna 說過的每段話按時間順序列出，並提供繁體中文 + 韓文翻譯
2) 找出我需要回應的部分，為每一個提供 3 種等級的回應範例：
   - 簡單版（A2 程度）
   - 中等版（B1 程度，加入台灣常用口語）
   - 自然版（B2 程度，像本地人）
3) 列出 Yuna 使用的台灣特有口語（例如 "本來也想說..."、"不然就..."），並標註其用法

[在這裡貼上轉錄文字]`
  },
  {
    title: '📧 이메일 분석 → 답장 초안',
    desc: '받은 이메일을 텍스트로 붙여넣고 답장 초안 자동 생성',
    prompt: `請分析以下這封台灣商業合作來信：

1) 重點摘要（韓文）
2) 對方在要求什麼？需要我回覆什麼？
3) 列出 5 個信中的商業用語＋韓文解釋
4) 提供 3 個版本的回信草稿（繁體中文）：
   - 接受版本
   - 婉拒版本
   - 需要更多資訊版本
5) 信尾的標準客套話有哪些？

[在這裡貼上信件內容]`
  },
  {
    title: '🎤 발음 교정 (내 녹음 vs 원본)',
    desc: '본인 녹음 + 원본 녹음 둘 다 올린 뒤 비교 분석',
    prompt: `我正在學習台灣中文。我會提供兩段錄音：
A) 原文／原始錄音（台灣人的發音）
B) 我跟讀的錄音（韓國人，剛開始學）

請：
1) 比對 A 跟 B 的發音差異
2) 找出我發錯的字、聲調錯誤的字
3) 重點挑 3 個最需要練習的發音點
4) 給我練習建議（韓國人常犯的台灣中文發音問題）

[附上錄音檔]`
  },
  {
    title: '📑 격식 이메일 → 회화체 변환',
    desc: '격식 이메일을 캐주얼 회화로 바꿔서 두 가지 톤 동시 학습',
    prompt: `請將以下格式化的商業中文改寫成兩個版本：
1) 一個更口語的版本（像跟同事聊天）
2) 一個更正式的版本（像跟客戶寫信）

並列出每個版本使用的關鍵句型差異，例如 "由於" vs "因為"，"完畢" vs "完了" 等等。

[在這裡貼上原文]`
  }
];

function renderPlaud() {
  const list = document.getElementById('plaud-list');
  list.innerHTML = '';
  PLAUD_PROMPTS.forEach(p => {
    const div = document.createElement('div');
    div.className = 'plaud-card';
    div.innerHTML = `
      <div class="plaud-title">${p.title}</div>
      <div class="plaud-desc">${p.desc}</div>
      <div class="plaud-prompt-text">${escapeHTML(p.prompt)}</div>
    `;
    div.onclick = () => {
      navigator.clipboard.writeText(p.prompt).then(() => {
        toast('✅ 프롬프트 복사 완료!');
      });
    };
    list.appendChild(div);
  });
}

function escapeHTML(s) {
  return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

// ============================================================
// 토스트
// ============================================================
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add('hidden'), 2000);
}

// ============================================================
// 이벤트 바인딩
// ============================================================
function bindEvents() {
  // 오늘 시작
  document.getElementById('start-today-btn').onclick = () => {
    if (state.todayLesson) openLesson(state.todayLesson.id);
  };

  // 탭
  document.querySelectorAll('.tab').forEach(t => {
    t.onclick = () => switchTab(t.dataset.tab);
  });

  // 뒤로
  document.querySelectorAll('.back-btn').forEach(b => {
    b.onclick = () => {
      const f = document.querySelector('#screen-vocab-all .filter-bar');
      if (f) f.style.display = '';
      const h = document.querySelector('#screen-vocab-all .lesson-head h2');
      if (h) h.textContent = '전체 단어장';
      show('screen-home');
      renderHome();
    };
  });

  // 쉐도잉 컨트롤
  document.getElementById('prev-sent').onclick = prevSent;
  document.getElementById('next-sent').onclick = nextSent;
  document.getElementById('tts-play').onclick = () => {
    const l = state.currentLesson;
    if (!l || !l.sentences[state.currentSentenceIdx]) return;
    speak(l.sentences[state.currentSentenceIdx].hanzi, 1.0);
  };
  document.getElementById('tts-slow').onclick = () => {
    const l = state.currentLesson;
    if (!l || !l.sentences[state.currentSentenceIdx]) return;
    speak(l.sentences[state.currentSentenceIdx].hanzi, 0.7);
  };
  document.getElementById('record-toggle').onclick = toggleRecord;

  // 빠른 도구
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.onclick = () => {
      const a = btn.dataset.action;
      if (a === 'vocab-all') { show('screen-vocab-all'); renderAllVocab(); }
      else if (a === 'quiz-random') startQuiz();
      else if (a === 'review-vocab') showReviewVocab();
      else if (a === 'plaud-prompts') { show('screen-plaud'); renderPlaud(); }
    };
  });

  // 필터
  document.querySelectorAll('.chip').forEach(c => {
    c.onclick = () => {
      document.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      state.vocabFilter = c.dataset.filter;
      renderAllVocab();
    };
  });

  // 설정 (현재는 진행도 리셋)
  document.getElementById('settings-btn').onclick = () => {
    if (confirm('진행도를 초기화하시겠습니까?')) {
      state.progress = { completed: [], vocab: {} };
      saveProgress();
      renderHome();
      toast('초기화 완료');
    }
  };
}

// ============================================================
// 초기화
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  // 음성 로드를 위해 대기 (iOS는 초기에 voices 비어있음)
  if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = () => {};
    // 트리거
    speechSynthesis.getVoices();
  }
  bindEvents();
  renderHome();
});

// PWA Service Worker (옵션: 오프라인 캐싱은 생략, 단순 시작)
if ('serviceWorker' in navigator) {
  // 현재는 SW 없음 - file:// 로도 동작
}
