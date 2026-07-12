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
  fc: null,
  progress: loadProgress()
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const p = raw ? JSON.parse(raw) : {};
    // 구조 마이그레이션: {completed:[]} → {counts:{id:횟수}}
    if (!p.counts) {
      p.counts = {};
      if (Array.isArray(p.completed)) p.completed.forEach(id => { p.counts[id] = 1; });
    }
    if (!p.vocab) p.vocab = {};
    return p;
  } catch (e) {
    return { counts: {}, vocab: {} };
  }
}
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}
function lessonCount(id) { return state.progress.counts[id] || 0; }
// 학습 1회 카운트 (명시적 '학습 완료' 버튼)
function markLessonComplete(id) {
  state.progress.counts[id] = (state.progress.counts[id] || 0) + 1;
  saveProgress();
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
  // 오늘의 레슨 = 첫 미학습(0회) 레슨
  const today = LESSONS.find(l => lessonCount(l.id) === 0) || LESSONS[0];
  state.todayLesson = today;
  document.getElementById('header-subtitle').textContent = `오늘 ${new Date().toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', weekday: 'short' })}`;
  document.getElementById('today-lesson-title').textContent = today.title;
  document.getElementById('today-lesson-subtitle').textContent = today.subtitle;

  // 진행도 = 1회 이상 학습한 레슨 수
  const done = LESSONS.filter(l => lessonCount(l.id) > 0).length;
  const total = LESSONS.length;
  document.getElementById('progress-pill').textContent = `${done} / ${total}`;

  // 단어 개수
  const totalVocab = LESSONS.reduce((sum, l) => sum + (l.vocab?.length || 0), 0);
  document.getElementById('vocab-count').textContent = `${totalVocab}개`;

  // 레슨 목록
  const list = document.getElementById('lesson-list');
  list.innerHTML = '';
  LESSONS.forEach(l => {
    const cnt = lessonCount(l.id);
    const dateLabel = l.dateLabel || fmtDate(l.date);
    const item = document.createElement('div');
    item.className = 'lesson-item' + (cnt > 0 ? ' done' : '');
    const countHtml = cnt > 0
      ? `<span class="study-count done">✓ ${cnt}회 학습</span>`
      : `<span class="study-count">미학습</span>`;
    item.innerHTML = `
      <span class="lesson-id">${l.id}</span>
      <div class="lesson-meta">
        <h4>${l.title}</h4>
        <p>${l.subtitle}</p>
        <div class="lesson-sub-row">
          ${countHtml}
          ${dateLabel ? `<span class="lesson-date">📅 ${dateLabel} 자료</span>` : ''}
        </div>
      </div>
      <span class="lesson-badge ${l.difficulty.split('-')[0]}">${l.difficulty}</span>
    `;
    item.onclick = () => openLesson(l.id);
    list.appendChild(item);
  });
}

// 'YYYY-MM-DD' → 'MM/DD' (레슨 자료 기준일 표시용)
function fmtDate(d) {
  if (!d) return '';
  const p = d.split('-');
  return p.length === 3 ? `${p[1]}/${p[2]}` : d;
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

  stopSequence();
  renderOverview();
  renderShadow();
  renderVocab();
  updateMarkDoneBtn();

  switchTab('overview');
  show('screen-lesson');
}

// '학습 완료' 버튼 라벨에 현재 횟수 반영
function updateMarkDoneBtn() {
  const btn = document.getElementById('mark-done-btn');
  if (!btn || !state.currentLesson) return;
  const cnt = lessonCount(state.currentLesson.id);
  btn.textContent = cnt > 0 ? `✓ 학습 완료 (현재 ${cnt}회)` : '✓ 학습 완료';
}

function renderOverview() {
  const l = state.currentLesson;
  // 전체 본문 = 문장별 span (전체 듣기 시 현재 문장 하이라이트)
  const ft = document.getElementById('lesson-fulltext');
  ft.innerHTML = (l.sentences || []).map((s, i) =>
    `<span class="ft-sent" data-i="${i}">${s.hanzi}</span>`).join(' ');
  document.getElementById('lesson-korean-summary').textContent = l.koreanSummary;
  const goals = document.getElementById('lesson-goals');
  goals.innerHTML = '';
  const goalsArr = [
    `${l.sentences.length}개 문장 쉐도잉`,
    `${l.vocab.length}개 단어 마스터`
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

// (작문 탭 제거됨 — practice 데이터는 lessons.js에 보존, 화면 렌더만 삭제)

function switchTab(tabName) {
  stopSequence(); // 탭 이동 시 전체 듣기 정지
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
    // 학습 횟수는 '학습 완료' 버튼으로만 카운트 (쉐도잉 끝은 안내만)
    toast('🎉 마지막 문장입니다! 개요의 "학습 완료"를 눌러 횟수를 기록하세요');
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
// 고품질 음성 우선: Enhanced/Premium > 알려진 좋은 이름 > 일반 zh-TW > zh
function getVoice() {
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return null;
  const tw = voices.filter(v => v.lang && v.lang.replace('_', '-').toLowerCase().startsWith('zh-tw'));
  const pool = tw.length ? tw : voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('zh'));
  if (!pool.length) return null;
  const score = (v) => {
    const n = (v.name || '').toLowerCase();
    let s = 0;
    if (/enhanced|premium|neural|natural/.test(n)) s += 100; // iOS/크롬 고품질
    if (/meijia|mei-?jia|美佳|ya-?ling|雅琳|yu-?shu|google/.test(n)) s += 30; // 알려진 좋은 음성
    if (v.lang && v.lang.replace('_', '-').toLowerCase() === 'zh-tw') s += 10;
    if (v.localService) s += 1;
    return s;
  };
  return pool.slice().sort((a, b) => score(b) - score(a))[0] || null;
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
  utter.pitch = 1.0;
  const voice = getVoice();
  if (voice) { utter.voice = voice; utter.lang = voice.lang; }
  speechSynthesis.speak(utter);
}

// 개요 '전체 듣기' — 문장을 끊김 없이 순서대로 재생 (현재 문장 하이라이트)
function stopSequence() {
  state.seqPlaying = false;
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  document.querySelectorAll('.ft-sent.speaking').forEach(e => e.classList.remove('speaking'));
  const btn = document.getElementById('ft-play');
  if (btn) btn.textContent = '🔊 전체 듣기';
}
function speakSequence() {
  const l = state.currentLesson;
  if (!l || !(l.sentences || []).length) return;
  if (state.seqPlaying) { stopSequence(); return; }
  if (!('speechSynthesis' in window)) { toast('이 브라우저는 음성 합성을 지원하지 않습니다.'); return; }
  state.seqPlaying = true;
  const btn = document.getElementById('ft-play');
  if (btn) btn.textContent = '⏸ 정지';
  const voice = getVoice();
  let i = 0;
  const speakNext = () => {
    if (!state.seqPlaying) return;
    if (i >= l.sentences.length) { stopSequence(); return; }
    document.querySelectorAll('.ft-sent.speaking').forEach(e => e.classList.remove('speaking'));
    const span = document.querySelector(`.ft-sent[data-i="${i}"]`);
    if (span) { span.classList.add('speaking'); span.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
    const u = new SpeechSynthesisUtterance(l.sentences[i].hanzi);
    u.lang = 'zh-TW';
    u.rate = state.ttsRate;
    u.pitch = 1.0;
    if (voice) { u.voice = voice; u.lang = voice.lang; }
    u.onend = () => { i++; speakNext(); };
    u.onerror = () => { i++; speakNext(); };
    speechSynthesis.speak(u);
  };
  speechSynthesis.cancel();
  speakNext();
}

// 현재 잡힌 음성 이름 (설정 화면 안내용)
function currentVoiceLabel() {
  const v = getVoice();
  if (!v) return '음성 없음 — 아래 안내대로 다운로드해주세요';
  const enhanced = /enhanced|premium|neural|natural/i.test(v.name || '');
  return `${v.name} (${v.lang})${enhanced ? ' · 고품질 ✅' : ' · 기본품질'}`;
}

// ============================================================
// 녹음 (MediaRecorder API)
// ============================================================
// iOS Safari는 audio/webm을 지원하지 않음 → 지원되는 mimeType을 런타임에 탐지
function pickRecorderMime() {
  if (typeof MediaRecorder === 'undefined' || !MediaRecorder.isTypeSupported) return '';
  const candidates = [
    'audio/mp4',            // iOS Safari (aac)
    'audio/mp4;codecs=mp4a.40.2',
    'audio/webm;codecs=opus', // Chrome/Firefox/Android
    'audio/webm',
    'audio/aac'
  ];
  return candidates.find(t => MediaRecorder.isTypeSupported(t)) || '';
}

async function toggleRecord() {
  const btn = document.getElementById('record-toggle');
  if (state.isRecording) {
    try { state.recorder.stop(); } catch (e) {}
    state.isRecording = false;
    btn.classList.remove('recording');
    btn.textContent = '🎤 따라말하기';
    return;
  }
  // 사전 점검: getUserMedia / MediaRecorder 사용 가능 여부
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    toast('이 브라우저는 녹음을 지원하지 않아요 (HTTPS에서만 가능)');
    return;
  }
  if (typeof MediaRecorder === 'undefined') {
    toast('이 브라우저는 MediaRecorder를 지원하지 않아요');
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mime = pickRecorderMime();
    state.recorder = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
    const chunks = [];
    state.recorder.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
    state.recorder.onstop = () => {
      // 실제 녹음에 쓰인 mimeType으로 Blob 생성 (iOS는 mp4)
      const type = state.recorder.mimeType || mime || 'audio/mp4';
      const blob = new Blob(chunks, { type });
      const url = URL.createObjectURL(blob);
      document.getElementById('my-audio').src = url;
      document.getElementById('recording-result').classList.remove('hidden');
      stream.getTracks().forEach(t => t.stop());
    };
    state.recorder.onerror = () => {
      toast('녹음 중 오류가 발생했어요');
      stream.getTracks().forEach(t => t.stop());
      state.isRecording = false;
      btn.classList.remove('recording');
      btn.textContent = '🎤 따라말하기';
    };
    state.recorder.start();
    state.isRecording = true;
    btn.classList.add('recording');
    btn.textContent = '⏹ 정지';
  } catch (err) {
    if (err && (err.name === 'NotAllowedError' || err.name === 'SecurityError')) {
      toast('마이크 권한이 필요해요 (설정에서 허용)');
    } else if (err && err.name === 'NotFoundError') {
      toast('마이크를 찾을 수 없어요');
    } else {
      toast('녹음을 시작할 수 없어요: ' + (err && err.name || ''));
    }
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
// 플래시카드 (반복학습 + 분류) — 기존 '전체 단어장' 대체
// ============================================================
const FC_KEY = 'taiwanese-flashcards-v1';

function getFCState() {
  try { return JSON.parse(localStorage.getItem(FC_KEY)) || {}; } catch { return {}; }
}
function saveFCState(s) { localStorage.setItem(FC_KEY, JSON.stringify(s)); }

// ===== 카드 세트 =====
// 종합(레슨 vocab) · 번↔간(번체↔간체 대치) · 시술명
const FC_SETS = [
  { id: 'all',  label: '종합' },
  { id: 't2s',  label: '번↔간' },
  { id: 'proc', label: '시술명' }
];

// 세트별 카드 풀. 각 카드는 고유 key(분류 저장용)와 type(렌더 분기용)을 가짐.
function fcCardsForSet(setId) {
  if (setId === 't2s') return buildT2SCards();
  if (setId === 'proc') return buildProcCards();
  return buildAllCards();
}

// 종합: 모든 레슨 단어를 hanzi 기준 중복제거. key=hanzi (기존 분류 상태와 호환)
function buildAllCards() {
  const map = new Map();
  LESSONS.forEach(l => {
    (l.vocab || []).forEach(v => {
      if (!v.hanzi || map.has(v.hanzi)) return;
      map.set(v.hanzi, {
        key: v.hanzi, type: 'vocab',
        hanzi: v.hanzi,
        zhuyin: v.zhuyin || '',
        pinyin: v.pinyin || '',
        korean: v.korean || '',
        example: v.example || null,
        lessonId: l.id
      });
    });
  });
  return Array.from(map.values());
}

// 번↔간 대치: data/t2s.js (자동 생성). key='t2s:'+번체
function buildT2SCards() {
  if (typeof T2S_CARDS === 'undefined') return [];
  return T2S_CARDS.map(c => ({
    key: 't2s:' + c.hanzi, type: 't2s',
    hanzi: c.hanzi, simp: c.simp,
    pinyin: c.pinyin || '', zhuyin: c.zhuyin || '',
    korean: c.korean || '', pairs: c.pairs || [], lessonId: c.lessonId || ''
  }));
}

// 시술명: data/procedures.js. key='proc:'+번체
function buildProcCards() {
  if (typeof PROCEDURES === 'undefined') return [];
  return PROCEDURES.filter(p => p.hanzi).map(p => ({
    key: 'proc:' + p.hanzi, type: 'proc',
    hanzi: p.hanzi, pinyin: p.pinyin || '', zhuyin: p.zhuyin || '',
    koreanName: p.koreanName || '', desc: p.desc || '', img: p.img || '', lessonId: 'proc'
  }));
}

// 카드의 현재 분류: 'new' | 'unknown' | 'known'
function fcBox(key) {
  const s = getFCState();
  return (s[key] && s[key].box) || 'new';
}
function fcSetBox(card, box) {
  const s = getFCState();
  s[card.key] = { box, ts: new Date().toISOString(), lessonId: card.lessonId };
  saveFCState(s);
}

function fcCounts(setId) {
  const all = fcCardsForSet(setId);
  const c = { all: all.length, new: 0, unknown: 0, known: 0 };
  all.forEach(card => { c[fcBox(card.key)]++; });
  return c;
}

// 세트의 기본 시작 덱: 미학습 우선 → 못맞춘 → 전체
function fcDefaultDeck(setId) {
  const c = fcCounts(setId);
  return c.new ? 'new' : (c.unknown ? 'unknown' : 'all');
}

function openFlashcards() {
  show('screen-flashcard');
  const setId = (state.fc && state.fc.setId) || 'all';
  renderFCSets(setId);
  fcStartDeck(fcDefaultDeck(setId), setId);
}

function renderFCSets(activeSet) {
  const el = document.getElementById('fc-sets');
  if (!el) return;
  el.innerHTML = FC_SETS.map(s =>
    `<button class="fc-set ${s.id === activeSet ? 'active' : ''}" data-set="${s.id}">${s.label} <b>${fcCardsForSet(s.id).length}</b></button>`
  ).join('');
  el.querySelectorAll('.fc-set').forEach(b => {
    b.onclick = () => {
      const setId = b.dataset.set;
      renderFCSets(setId);
      fcStartDeck(fcDefaultDeck(setId), setId);
    };
  });
}

function renderFCDecks(active, setId) {
  setId = setId || (state.fc && state.fc.setId) || 'all';
  const c = fcCounts(setId);
  const decks = [
    { key: 'all', label: '전체', n: c.all },
    { key: 'new', label: '미학습', n: c.new },
    { key: 'unknown', label: '못맞춘', n: c.unknown },
    { key: 'known', label: '맞춘(복습)', n: c.known }
  ];
  document.getElementById('fc-decks').innerHTML = decks.map(d =>
    `<button class="fc-chip ${d.key === active ? 'active' : ''}" data-deck="${d.key}">${d.label} <b>${d.n}</b></button>`
  ).join('');
  document.querySelectorAll('#fc-decks .fc-chip').forEach(b => {
    b.onclick = () => fcStartDeck(b.dataset.deck, setId);
  });
}

function fcStartDeck(deck, setId) {
  setId = setId || (state.fc && state.fc.setId) || 'all';
  const all = fcCardsForSet(setId);
  let cards = deck === 'all' ? all : all.filter(c => fcBox(c.key) === deck);
  // 셔플
  cards = cards.slice().sort(() => Math.random() - 0.5);
  state.fc = { setId, deck, cards, idx: 0, flipped: false, studied: 0 };
  renderFCDecks(deck, setId);
  renderFlashcard();
}

// 카드 타입별 앞/뒤 면 HTML
function fcFaces(card) {
  if (card.type === 't2s') {
    const pairs = card.pairs || [];
    const hlTrad = [...card.hanzi].map(ch =>
      pairs.some(p => p[0] === ch) ? `<span class="t2s-diff">${ch}</span>` : ch).join('');
    const hlSimp = [...card.simp].map(ch =>
      pairs.some(p => p[1] === ch) ? `<span class="t2s-diff">${ch}</span>` : ch).join('');
    const mapping = pairs.map(p => `${p[0]}→${p[1]}`).join('　');
    return {
      front: `
        <p class="fc-tag">번체</p>
        <p class="fc-hanzi">${hlTrad}</p>
        <p class="fc-hint">탭해서 간체·뜻 보기</p>`,
      back: `
        <p class="fc-tag">간체</p>
        <p class="fc-hanzi fc-simp">${hlSimp}</p>
        <p class="fc-korean">${card.korean}</p>
        <p class="fc-phon">${card.pinyin}${card.zhuyin ? ' · ' + card.zhuyin : ''}</p>
        ${mapping ? `<p class="t2s-map">${mapping}</p>` : ''}
        <button class="fc-tts" id="fc-tts">🔊 다시 듣기</button>`
    };
  }
  if (card.type === 'proc') {
    return {
      front: `
        <p class="fc-hanzi">${card.hanzi}</p>
        <p class="fc-phon">${card.pinyin}${card.zhuyin ? ' · ' + card.zhuyin : ''}</p>
        <p class="fc-hint">탭해서 뜻·설명 보기</p>`,
      back: `
        <p class="fc-korean">${card.koreanName}</p>
        ${card.img ? `<img class="fc-img" src="${card.img}" alt="${card.koreanName}"/>` : ''}
        <p class="fc-desc">${card.desc}</p>
        <button class="fc-tts" id="fc-tts">🔊 다시 듣기</button>`
    };
  }
  // vocab (기본)
  return {
    front: `
      <p class="fc-hanzi">${card.hanzi}</p>
      ${card.example ? `<p class="fc-example">${card.example.hanzi}</p>` : ''}
      <p class="fc-hint">탭해서 뜻 보기</p>`,
    back: `
      <p class="fc-korean">${card.korean}</p>
      <p class="fc-phon">${card.pinyin}${card.zhuyin ? ' · ' + card.zhuyin : ''}</p>
      ${card.example ? `<p class="fc-ex-ko">${card.example.korean}</p>` : ''}
      <button class="fc-tts" id="fc-tts">🔊 다시 듣기</button>`
  };
}

function renderFlashcard() {
  const fc = state.fc;
  const stage = document.getElementById('fc-stage');
  if (!fc.cards.length) {
    const msg = fc.deck === 'unknown' ? '못맞춘 단어가 없어요! 👏'
      : fc.deck === 'new' ? '미학습 단어가 없어요. 다 봤네요!'
      : fc.deck === 'known' ? '아직 맞춘 단어가 없어요.'
      : '단어가 없어요.';
    stage.innerHTML = `<div class="fc-empty"><div class="big-emoji">🎉</div><p>${msg}</p></div>`;
    return;
  }
  if (fc.idx >= fc.cards.length) {
    stage.innerHTML = `
      <div class="fc-empty">
        <div class="big-emoji">✅</div>
        <p>이 덱 ${fc.cards.length}장 끝!<br/><span style="color:var(--text-dim);font-size:13px">${fc.studied}장 분류함</span></p>
        <button class="btn btn-primary" id="fc-restart" style="margin-top:12px">다시 섞기</button>
      </div>`;
    document.getElementById('fc-restart').onclick = () => fcStartDeck(fc.deck, fc.setId);
    renderFCDecks(fc.deck, fc.setId);
    return;
  }
  const card = fc.cards[fc.idx];
  const box = fcBox(card.key);
  const boxBadge = box === 'known' ? '<span class="fc-badge known">맞춘</span>'
    : box === 'unknown' ? '<span class="fc-badge unknown">못맞춘</span>'
    : '<span class="fc-badge new">미학습</span>';
  const faces = fcFaces(card);
  stage.innerHTML = `
    <div class="fc-progress">${fc.idx + 1} / ${fc.cards.length} ${boxBadge}</div>
    <div class="fc-card ${fc.flipped ? 'flipped' : ''}" id="fc-card">
      <div class="fc-face fc-front">${faces.front}</div>
      <div class="fc-face fc-back">${faces.back}</div>
    </div>
    <div class="fc-controls">
      ${fc.flipped ? `
        <button class="btn fc-no" id="fc-no">❌ 몰라요</button>
        <button class="btn fc-yes" id="fc-yes">✅ 알아요</button>
      ` : `<button class="btn btn-primary" id="fc-flip-btn">뒤집기</button>`}
    </div>
  `;
  const cardEl = document.getElementById('fc-card');
  cardEl.onclick = (e) => { if (e.target.id !== 'fc-tts') fcFlip(); };
  if (fc.flipped) {
    speak(card.hanzi, 1.0); // 뒤집으면 자동 발음
    document.getElementById('fc-tts').onclick = (e) => { e.stopPropagation(); speak(card.hanzi, 1.0); };
    document.getElementById('fc-no').onclick = () => fcMark(false);
    document.getElementById('fc-yes').onclick = () => fcMark(true);
  } else {
    document.getElementById('fc-flip-btn').onclick = fcFlip;
  }
}

function fcFlip() {
  if (!state.fc) return;
  state.fc.flipped = !state.fc.flipped;
  renderFlashcard();
}

function fcMark(known) {
  const fc = state.fc;
  const card = fc.cards[fc.idx];
  fcSetBox(card, known ? 'known' : 'unknown');
  fc.studied++;
  fc.idx++;
  fc.flipped = false;
  renderFlashcard();
  renderFCDecks(fc.deck, fc.setId);
  renderFCSets(fc.setId);
}

// GitHub 동기화 (올리기)
async function syncFlashcardsToGitHub() {
  const btn = document.getElementById('fc-sync-btn');
  if (!getGHConfig().pat) { toast('설정에서 PAT를 먼저 넣어주세요'); show('screen-settings'); renderSettings(); return; }
  const orig = btn.textContent;
  btn.disabled = true; btn.textContent = '⏳ 업로드 중...';
  try {
    const payload = { updatedAt: new Date().toISOString(), cards: getFCState() };
    const json = JSON.stringify(payload, null, 2);
    const path = 'data/flashcard_state.json';
    let sha;
    try { const ex = await ghGetFile(path); sha = ex && ex.sha; } catch (e) {}
    await ghPutFile(path, utf8Base64(json), 'Update flashcard state', sha);
    toast('✅ 분류상태 동기화 완료');
  } catch (e) {
    toast('실패: ' + e.message);
  } finally {
    btn.disabled = false; btn.textContent = orig;
  }
}

// GitHub에서 받아 로컬에 병합 (최신 ts 우선)
async function pullFlashcardsFromGitHub() {
  const btn = document.getElementById('fc-pull-btn');
  if (!getGHConfig().pat) { toast('설정에서 PAT를 먼저 넣어주세요'); show('screen-settings'); renderSettings(); return; }
  const orig = btn.textContent;
  btn.disabled = true; btn.textContent = '⏳ 받는 중...';
  try {
    const f = await ghGetFile('data/flashcard_state.json');
    if (!f) { toast('아직 동기화된 상태가 없어요'); return; }
    const remote = (JSON.parse(f.text).cards) || {};
    const local = getFCState();
    let merged = 0;
    Object.keys(remote).forEach(h => {
      if (!local[h] || (remote[h].ts || '') > (local[h].ts || '')) { local[h] = remote[h]; merged++; }
    });
    saveFCState(local);
    toast(`📥 ${merged}개 항목 반영됨`);
    if (state.fc) { renderFCSets(state.fc.setId); fcStartDeck(state.fc.deck, state.fc.setId); }
  } catch (e) {
    toast('실패: ' + e.message);
  } finally {
    btn.disabled = false; btn.textContent = orig;
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
// 인박스 (Upload Queue) + GitHub API
// ============================================================
const INBOX_KEY = 'taiwanese-inbox-queue';
const GH_CONFIG_KEY = 'taiwanese-github-config';

function getInboxQueue() {
  try { return JSON.parse(localStorage.getItem(INBOX_KEY)) || []; } catch { return []; }
}
function saveInboxQueue(q) { localStorage.setItem(INBOX_KEY, JSON.stringify(q)); }
function getGHConfig() {
  try {
    const c = JSON.parse(localStorage.getItem(GH_CONFIG_KEY)) || {};
    return { owner: c.owner || 'florcho', repo: c.repo || 'taiwanese-learning', pat: c.pat || '' };
  } catch { return { owner: 'florcho', repo: 'taiwanese-learning', pat: '' }; }
}
function saveGHConfig(c) { localStorage.setItem(GH_CONFIG_KEY, JSON.stringify(c)); }

// 파일 → base64 변환
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      const base64 = result.split(',')[1]; // strip data:...;base64,
      resolve({ base64, name: file.name, size: file.size, mime: file.type });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// UTF-8 안전 base64 인코딩 (한자 포함 텍스트용)
function utf8Base64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

// GitHub API: 파일 업로드 (PUT contents). 기존 파일 갱신 시 sha 필요.
async function ghPutFile(path, contentBase64, message, sha) {
  const cfg = getGHConfig();
  if (!cfg.pat) throw new Error('PAT이 설정되지 않았어요. 설정 화면에서 입력해주세요.');
  const url = `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${path}`;
  const body = { message: message || `Add ${path}`, content: contentBase64, branch: 'main' };
  if (sha) body.sha = sha;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${cfg.pat}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`${res.status} ${res.statusText}: ${err.message || ''}`);
  }
  return res.json();
}

// GitHub API: 파일 읽기 (GET contents). 없으면 null. {text, sha} 반환.
async function ghGetFile(path) {
  const cfg = getGHConfig();
  if (!cfg.pat) throw new Error('PAT이 설정되지 않았어요.');
  const url = `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${path}?ref=main`;
  const res = await fetch(url, {
    headers: { 'Authorization': `Bearer ${cfg.pat}`, 'Accept': 'application/vnd.github+json' }
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`${res.status}: 읽기 실패`);
  const data = await res.json();
  const text = data.content ? decodeURIComponent(escape(atob(data.content.replace(/\n/g, '')))) : '';
  return { text, sha: data.sha };
}

// 연결 테스트
async function ghTestConnection() {
  const cfg = getGHConfig();
  if (!cfg.pat) throw new Error('PAT 미설정');
  const url = `https://api.github.com/repos/${cfg.owner}/${cfg.repo}`;
  const res = await fetch(url, {
    headers: { 'Authorization': `Bearer ${cfg.pat}`, 'Accept': 'application/vnd.github+json' }
  });
  if (!res.ok) throw new Error(`${res.status}: 토큰 또는 리포 확인 필요`);
  const data = await res.json();
  return data;
}

// 인박스 항목 추가
async function submitUpload() {
  const content = document.getElementById('upload-content').value.trim();
  const memo = document.getElementById('upload-memo').value.trim();
  const fileInput = document.getElementById('upload-file');
  const file = fileInput.files[0];
  const type = document.querySelector('.type-chip.active')?.dataset.type || 'other';

  if (!content && !file) {
    setUploadStatus('내용 텍스트나 파일 중 하나는 필요해요', 'error');
    return;
  }

  const now = new Date();
  const ts = now.toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const dateStr = ts.slice(0, 10);
  const timeStr = ts.slice(11, 19);
  const id = `${dateStr}_${timeStr}_${type}`;

  const item = {
    id,
    type,
    date: now.toISOString(),
    memo,
    content,
    file: null,
    synced: false,
    githubUrls: []
  };

  if (file) {
    setUploadStatus('파일 처리 중...', '');
    try {
      const fileData = await fileToBase64(file);
      item.file = fileData;
    } catch (e) {
      setUploadStatus('파일 읽기 실패: ' + e.message, 'error');
      return;
    }
  }

  // 1. 로컬에 추가
  const queue = getInboxQueue();
  queue.unshift(item);
  saveInboxQueue(queue);

  // 2. PAT 있으면 GitHub 업로드 시도
  const cfg = getGHConfig();
  if (cfg.pat) {
    setUploadStatus('GitHub에 업로드 중...', '');
    try {
      const urls = await uploadItemToGitHub(item);
      // 업로드 성공 → 로컬 큐 동기화 상태 업데이트
      const q = getInboxQueue();
      const idx = q.findIndex(x => x.id === item.id);
      if (idx >= 0) { q[idx].synced = true; q[idx].githubUrls = urls; saveInboxQueue(q); }
      setUploadStatus('✅ GitHub 업로드 완료!', 'success');
      setTimeout(closeUploadModal, 1200);
    } catch (e) {
      setUploadStatus('로컬엔 저장됨. GitHub 업로드 실패: ' + e.message, 'error');
    }
  } else {
    setUploadStatus(`✅ 로컬 저장됨. PAT 설정 후 "동기화" 해주세요. (현재 큐: ${queue.length}개)`, 'success');
    setTimeout(closeUploadModal, 1500);
  }
  updateInboxBadge();
}

// 개별 항목 GitHub 업로드
async function uploadItemToGitHub(item) {
  const urls = [];
  // 텍스트 → .md 파일
  if (item.content) {
    const md = `---\ntype: ${item.type}\ndate: ${item.date}\nmemo: ${item.memo || ''}\n---\n\n${item.content}\n`;
    const path = `inbox/${item.id}.md`;
    const result = await ghPutFile(path, utf8Base64(md), `Add inbox ${item.type}: ${item.id}`);
    urls.push(result.content?.html_url);
  }
  // 파일 (있으면)
  if (item.file) {
    const ext = item.file.name.includes('.') ? item.file.name.split('.').pop() : 'bin';
    const path = `inbox/${item.id}.${ext}`;
    const result = await ghPutFile(path, item.file.base64, `Add inbox file ${item.id}`);
    urls.push(result.content?.html_url);
  }
  return urls;
}

// 모달 제어
function openUploadModal() {
  document.getElementById('upload-modal').classList.remove('hidden');
  // 폼 초기화
  document.getElementById('upload-content').value = '';
  document.getElementById('upload-memo').value = '';
  document.getElementById('upload-file').value = '';
  document.getElementById('upload-file-info').textContent = '';
  document.getElementById('upload-status').textContent = '';
  document.getElementById('upload-status').className = 'form-help';
  document.querySelectorAll('.type-chip').forEach((c, i) => c.classList.toggle('active', i === 0));
}
function closeUploadModal() {
  document.getElementById('upload-modal').classList.add('hidden');
}
function setUploadStatus(msg, kind) {
  const el = document.getElementById('upload-status');
  el.textContent = msg;
  el.className = 'form-help' + (kind ? ' ' + kind : '');
}

// 인박스 화면 렌더
function renderInboxScreen() {
  const queue = getInboxQueue();
  const list = document.getElementById('inbox-queue-list');
  const statusCard = document.getElementById('inbox-status-card');
  const actions = document.getElementById('inbox-actions');
  const cfg = getGHConfig();

  const syncedCount = queue.filter(q => q.synced).length;
  const pendingCount = queue.length - syncedCount;
  statusCard.innerHTML = `
    <p class="label">현황</p>
    <p style="margin:0;font-size:14px;line-height:1.6">
      📥 전체 ${queue.length}개 · ☁️ GitHub 동기화 ${syncedCount}개 · ⏳ 대기 ${pendingCount}개<br/>
      <span style="color:var(--text-dim);font-size:12px">
        ${cfg.pat ? `🔑 PAT 설정됨 (${cfg.owner}/${cfg.repo})` : '⚠️ PAT 미설정 — 설정에서 입력 필요'}
      </span>
    </p>
  `;

  if (queue.length === 0) {
    list.innerHTML = `
      <div class="inbox-empty">
        <div class="big-emoji">📭</div>
        <p>인박스가 비어있어요.<br/>+ 버튼으로 자료를 추가해보세요.</p>
      </div>
    `;
    actions.classList.add('hidden');
    return;
  }

  actions.classList.remove('hidden');
  list.innerHTML = '';
  queue.forEach(item => {
    const div = document.createElement('div');
    div.className = 'inbox-item';
    const preview = item.content ? item.content.slice(0, 200) : '(텍스트 없음)';
    const fileInfo = item.file ? `📎 ${item.file.name} (${(item.file.size / 1024).toFixed(1)} KB)` : '';
    div.innerHTML = `
      <div class="inbox-meta">
        <span class="inbox-type-badge">${item.type}</span>
        <span class="inbox-status ${item.synced ? 'synced' : 'pending'}">
          ${item.synced ? '☁️ 동기화됨' : '⏳ 대기 중'}
        </span>
      </div>
      <p class="inbox-preview">${escapeHTML(preview)}</p>
      ${fileInfo ? `<p style="font-size:12px;color:var(--text-dim);margin:4px 0">${fileInfo}</p>` : ''}
      ${item.memo ? `<p style="font-size:12px;color:var(--text-dim);margin:4px 0">📝 ${escapeHTML(item.memo)}</p>` : ''}
      <p style="font-size:11px;color:var(--text-faint);margin:4px 0 0">${new Date(item.date).toLocaleString('ko-KR')}</p>
      <div class="inbox-actions-row">
        ${!item.synced ? `<button class="btn" data-action="sync" data-id="${item.id}">☁️ 동기화</button>` : ''}
        <button class="btn" data-action="delete" data-id="${item.id}">🗑️ 삭제</button>
      </div>
    `;
    div.querySelectorAll('[data-action]').forEach(btn => {
      btn.onclick = async () => {
        const id = btn.dataset.id;
        const action = btn.dataset.action;
        if (action === 'delete') {
          if (confirm('이 항목을 삭제할까요?')) {
            const q = getInboxQueue().filter(x => x.id !== id);
            saveInboxQueue(q);
            renderInboxScreen();
            updateInboxBadge();
          }
        } else if (action === 'sync') {
          btn.textContent = '⏳ 업로드 중...';
          btn.disabled = true;
          try {
            const it = getInboxQueue().find(x => x.id === id);
            const urls = await uploadItemToGitHub(it);
            const q = getInboxQueue();
            const idx = q.findIndex(x => x.id === id);
            if (idx >= 0) { q[idx].synced = true; q[idx].githubUrls = urls; saveInboxQueue(q); }
            toast('✅ 동기화 완료');
            renderInboxScreen();
          } catch (e) {
            toast('실패: ' + e.message);
            btn.disabled = false;
            btn.textContent = '☁️ 동기화';
          }
        }
      };
    });
    list.appendChild(div);
  });
}

async function syncAllToGitHub() {
  const queue = getInboxQueue();
  const pending = queue.filter(q => !q.synced);
  if (pending.length === 0) { toast('동기화할 항목이 없어요'); return; }
  if (!getGHConfig().pat) { toast('PAT를 먼저 설정해주세요'); show('screen-settings'); renderSettings(); return; }

  const btn = document.getElementById('sync-all-btn');
  btn.textContent = `⏳ 0 / ${pending.length}`;
  btn.disabled = true;
  let success = 0, fail = 0;
  for (let i = 0; i < pending.length; i++) {
    const item = pending[i];
    btn.textContent = `⏳ ${i + 1} / ${pending.length}`;
    try {
      const urls = await uploadItemToGitHub(item);
      const q = getInboxQueue();
      const idx = q.findIndex(x => x.id === item.id);
      if (idx >= 0) { q[idx].synced = true; q[idx].githubUrls = urls; saveInboxQueue(q); }
      success++;
    } catch (e) {
      console.error(e);
      fail++;
    }
  }
  btn.disabled = false;
  btn.textContent = '☁️ 전체 GitHub로 동기화';
  toast(`완료: 성공 ${success}, 실패 ${fail}`);
  renderInboxScreen();
}

function updateInboxBadge() {
  const c = getInboxQueue().length;
  const el = document.getElementById('settings-inbox-count');
  if (el) el.textContent = c;
}

// 설정 화면
function renderSettings() {
  const cfg = getGHConfig();
  document.getElementById('gh-owner').value = cfg.owner;
  document.getElementById('gh-repo').value = cfg.repo;
  // PAT는 input에 채우지 않음 (iOS Safari password 필드 자동 비움 버그 회피)
  const patInput = document.getElementById('gh-pat');
  patInput.value = '';
  patInput.placeholder = cfg.pat ? `저장됨 (...${cfg.pat.slice(-6)}) — 변경할 때만 새로 입력` : 'github_pat_...';
  const s = document.getElementById('gh-status');
  if (cfg.pat) {
    s.textContent = `🔑 PAT 저장됨 (...${cfg.pat.slice(-6)})`;
    s.className = 'form-help success';
  } else {
    s.textContent = '';
    s.className = 'form-help';
  }
  const vl = document.getElementById('tts-voice-label');
  if (vl) vl.textContent = currentVoiceLabel();
  updateInboxBadge();
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
      stopSequence();
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

  // 개요: 전체 듣기 / 속도 토글 / 학습 완료
  document.getElementById('ft-play').onclick = speakSequence;
  document.getElementById('ft-rate').onclick = () => {
    state.ttsRate = state.ttsRate === 1.0 ? 0.7 : 1.0;
    const btn = document.getElementById('ft-rate');
    btn.textContent = state.ttsRate === 1.0 ? '🐢 0.7x' : '🐢 1.0x';
    btn.classList.toggle('active', state.ttsRate !== 1.0);
    if (state.seqPlaying) { stopSequence(); speakSequence(); } // 새 속도로 재시작
  };
  document.getElementById('mark-done-btn').onclick = () => {
    const l = state.currentLesson;
    if (!l) return;
    markLessonComplete(l.id);
    updateMarkDoneBtn();
    toast(`✓ ${lessonCount(l.id)}회째 학습 기록 완료`);
  };

  // 빠른 도구
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.onclick = () => {
      const a = btn.dataset.action;
      if (a === 'vocab-all') openFlashcards();
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

  // 설정 화면 열기
  document.getElementById('settings-btn').onclick = () => {
    show('screen-settings');
    renderSettings();
  };

  // 설정 화면: 저장 / 테스트 / 진행도 초기화 / 인박스
  document.getElementById('save-gh-btn').onclick = () => {
    saveGHConfig({
      owner: document.getElementById('gh-owner').value.trim() || 'florcho',
      repo: document.getElementById('gh-repo').value.trim() || 'taiwanese-learning',
      pat: document.getElementById('gh-pat').value.trim()
    });
    const s = document.getElementById('gh-status');
    s.textContent = '✅ 저장 완료';
    s.className = 'form-help success';
  };
  document.getElementById('test-gh-btn').onclick = async () => {
    // 입력값 임시 저장 후 테스트
    saveGHConfig({
      owner: document.getElementById('gh-owner').value.trim() || 'florcho',
      repo: document.getElementById('gh-repo').value.trim() || 'taiwanese-learning',
      pat: document.getElementById('gh-pat').value.trim()
    });
    const s = document.getElementById('gh-status');
    s.textContent = '⏳ 연결 확인 중...';
    s.className = 'form-help';
    try {
      const data = await ghTestConnection();
      s.textContent = `✅ 연결 성공: ${data.full_name} (${data.private ? 'private' : 'public'})`;
      s.className = 'form-help success';
    } catch (e) {
      s.textContent = '❌ ' + e.message;
      s.className = 'form-help error';
    }
  };
  const ttsTestBtn = document.getElementById('tts-test-btn');
  if (ttsTestBtn) ttsTestBtn.onclick = () => {
    speak('你好，今天天氣很好', 1.0);
    const vl = document.getElementById('tts-voice-label');
    if (vl) vl.textContent = currentVoiceLabel();
  };
  document.getElementById('view-inbox-btn').onclick = () => {
    show('screen-inbox');
    renderInboxScreen();
  };
  document.getElementById('reset-progress-btn').onclick = () => {
    if (confirm('진행도를 초기화하시겠습니까? (인박스는 유지됩니다)')) {
      state.progress = { completed: [], vocab: {} };
      saveProgress();
      toast('진행도 초기화 완료');
      renderSettings();
    }
  };

  // FAB + 모달
  document.getElementById('fab').onclick = openUploadModal;
  document.getElementById('close-modal-btn').onclick = closeUploadModal;
  document.querySelector('#upload-modal .modal-backdrop').onclick = closeUploadModal;
  document.querySelectorAll('.type-chip').forEach(c => {
    c.onclick = () => {
      document.querySelectorAll('.type-chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
    };
  });
  document.getElementById('upload-file').onchange = (e) => {
    const f = e.target.files[0];
    document.getElementById('upload-file-info').textContent = f ? `${f.name} (${(f.size / 1024).toFixed(1)} KB)` : '';
  };
  document.getElementById('submit-upload-btn').onclick = submitUpload;

  // 플래시카드 동기화
  document.getElementById('fc-sync-btn').onclick = syncFlashcardsToGitHub;
  document.getElementById('fc-pull-btn').onclick = pullFlashcardsFromGitHub;

  // 인박스 화면: 전체 동기화 / 전체 삭제
  document.getElementById('sync-all-btn').onclick = syncAllToGitHub;
  document.getElementById('clear-all-btn').onclick = () => {
    if (confirm('인박스의 모든 항목을 삭제할까요? (GitHub에 동기화된 파일은 유지됨)')) {
      saveInboxQueue([]);
      renderInboxScreen();
      updateInboxBadge();
      toast('인박스 비움');
    }
  };
}

// ============================================================
// 초기화
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  // 음성 로드를 위해 대기 (iOS는 초기에 voices 비어있음)
  if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = () => {
      const vl = document.getElementById('tts-voice-label');
      if (vl && !document.getElementById('screen-settings').classList.contains('hidden')) {
        vl.textContent = currentVoiceLabel();
      }
    };
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
