// 대만 만다린 학습 콘텐츠 - 모든 레슨 데이터
// 매일 새 레슨 추가 시 이 파일에 추가하면 됩니다.

const LESSONS = [
  // ============================================================
  // L01 — Yuna Slack 메시지 (구어/캐주얼 업무 대화)
  // ============================================================
  {
    id: 'L01',
    title: 'Yuna Slack 메시지 — 계정 문제 상의',
    subtitle: '대만 직장인 캐주얼 톤 / 핵심 패턴: 本來也想說...不然就',
    source: 'Yuna Slack message',
    type: 'casual_work_chat',
    difficulty: 'B1',
    date: '2026-05-23',
    fullText: '我本來也想說不然我就重新辦一個帳號，但是他們很擔心其他使用者也遇到一樣的情況，所以他想找出問題。',
    koreanSummary: '원래는 그냥 계정을 새로 하나 만들까 생각했었거든. 근데 다른 사용자들도 같은 상황을 겪을까봐 그쪽에서 너무 걱정하시더라구. 그래서 문제를 찾아내고 싶어 하셔.',
    sentences: [
      {
        id: 1,
        hanzi: '我本來也想說不然我就重新辦一個帳號',
        zhuyin: 'ㄨㄛˇ ㄅㄣˇ ㄌㄞˊ ㄧㄝˇ ㄒㄧㄤˇ ㄕㄨㄛ ㄅㄨˋ ㄖㄢˊ ㄨㄛˇ ㄐㄧㄡˋ ㄔㄨㄥˊ ㄒㄧㄣ ㄅㄢˋ ㄧˊ ㄍㄜ˙ ㄓㄤˋ ㄏㄠˋ',
        pinyin: 'wǒ běnlái yě xiǎngshuō bùrán wǒ jiù chóngxīn bàn yīgè zhànghào',
        korean: '나는 원래는 그냥 다시 계정 하나 새로 만들까도 생각했어',
        wordBreak: '我(나) | 本來(원래) | 也(도/까지) | 想說(생각하다·대만식 구어) | 不然(아니면) | 我就(나는 그냥) | 重新(다시) | 辦(만들다·신청하다) | 一個(하나) | 帳號(계정)',
        keyPattern: '「本來也想說...不然就」= "원래는 ~ 할까 (다른 방법)생각도 했었거든" — Yuna가 자주 쓰는 캐주얼 화법'
      },
      {
        id: 2,
        hanzi: '但是他們很擔心其他使用者也遇到一樣的情況',
        zhuyin: 'ㄉㄢˋ ㄕˋ ㄊㄚ ㄇㄣ˙ ㄏㄣˇ ㄉㄢ ㄒㄧㄣ ㄑㄧˊ ㄊㄚ ㄕˇ ㄩㄥˋ ㄓㄜˇ ㄧㄝˇ ㄩˋ ㄉㄠˋ ㄧˊ ㄧㄤˋ ㄉㄜ˙ ㄑㄧㄥˊ ㄎㄨㄤˋ',
        pinyin: 'dànshì tāmen hěn dānxīn qítā shǐyòngzhě yě yùdào yíyàng de qíngkuàng',
        korean: '근데 그쪽에서는 다른 사용자들도 같은 상황을 겪을까봐 걱정하셔',
        wordBreak: '但是(근데) | 他們(그들) | 很(매우) | 擔心(걱정하다) | 其他(다른) | 使用者(사용자) | 也(도) | 遇到(겪다·마주치다) | 一樣的(같은) | 情況(상황)',
        keyPattern: '「很擔心 + 주어 + 동사」= "~가 ~할까봐 걱정하다" — 업무에서 매우 자주'
      },
      {
        id: 3,
        hanzi: '所以他想找出問題',
        zhuyin: 'ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄒㄧㄤˇ ㄓㄠˇ ㄔㄨ ㄨㄣˋ ㄊㄧˊ',
        pinyin: 'suǒyǐ tā xiǎng zhǎochū wèntí',
        korean: '그래서 그쪽에서는 문제를 찾아내려고 해',
        wordBreak: '所以(그래서) | 他(그·존칭X) | 想(하고 싶다) | 找出(찾아내다·동사+결과) | 問題(문제)',
        keyPattern: '「找出」= 동사 + 出 = 찾아"내다". 결과보어 出는 발견/생산의 결과를 강조'
      }
    ],
    vocab: [
      { hanzi: '本來', zhuyin: 'ㄅㄣˇ ㄌㄞˊ', pinyin: 'běnlái', korean: '원래는, 본래', pos: '부사', hsk: 4, tags: ['회화', '필수'], example: { hanzi: '我本來想去看電影，但是太累了。', korean: '원래 영화 보러 가려고 했는데 너무 피곤했어요.' } },
      { hanzi: '想說', zhuyin: 'ㄒㄧㄤˇ ㄕㄨㄛ', pinyin: 'xiǎng shuō', korean: '~할까 생각하다 (대만식 구어)', pos: '동사구', hsk: '대만특유', tags: ['대만식', '회화', '필수'], example: { hanzi: '我想說明天去吃火鍋。', korean: '내일 훠궈 먹으러 갈까 생각 중이에요.' } },
      { hanzi: '不然', zhuyin: 'ㄅㄨˋ ㄖㄢˊ', pinyin: 'bùrán', korean: '아니면, 그렇지 않으면', pos: '접속사', hsk: 4, tags: ['회화'], example: { hanzi: '不然我們改天再聊？', korean: '아니면 다른 날 얘기할까요?' } },
      { hanzi: '重新', zhuyin: 'ㄔㄨㄥˊ ㄒㄧㄣ', pinyin: 'chóngxīn', korean: '다시, 새로', pos: '부사', hsk: 4, tags: ['업무'], example: { hanzi: '我們需要重新討論這個方案。', korean: '이 안을 다시 논의해야 해요.' } },
      { hanzi: '辦', zhuyin: 'ㄅㄢˋ', pinyin: 'bàn', korean: '(계정·서류 등을) 신청하다, 만들다, 처리하다', pos: '동사', hsk: 3, tags: ['업무', '필수'], example: { hanzi: '我要辦信用卡。', korean: '신용카드를 만들려고 해요.' } },
      { hanzi: '帳號', zhuyin: 'ㄓㄤˋ ㄏㄠˋ', pinyin: 'zhànghào', korean: '계정, 어카운트', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '請問你的IG帳號是什麼？', korean: '인스타 계정이 뭐예요?' } },
      { hanzi: '擔心', zhuyin: 'ㄉㄢ ㄒㄧㄣ', pinyin: 'dānxīn', korean: '걱정하다', pos: '동사', hsk: 3, tags: ['회화', '필수'], example: { hanzi: '不要擔心，我會處理。', korean: '걱정 마세요, 제가 처리할게요.' } },
      { hanzi: '使用者', zhuyin: 'ㄕˇ ㄩㄥˋ ㄓㄜˇ', pinyin: 'shǐyòngzhě', korean: '사용자, 유저', pos: '명사', hsk: 5, tags: ['업무', '필수'], example: { hanzi: '我們的使用者來自不同國家。', korean: '저희 사용자는 여러 나라에서 옵니다.' } },
      { hanzi: '遇到', zhuyin: 'ㄩˋ ㄉㄠˋ', pinyin: 'yùdào', korean: '겪다, 마주치다', pos: '동사', hsk: 3, tags: ['회화', '필수'], example: { hanzi: '我遇到一個問題。', korean: '문제 하나 생겼어요.' } },
      { hanzi: '情況', zhuyin: 'ㄑㄧㄥˊ ㄎㄨㄤˋ', pinyin: 'qíngkuàng', korean: '상황', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '目前的情況比較複雜。', korean: '현재 상황이 좀 복잡해요.' } },
      { hanzi: '找出', zhuyin: 'ㄓㄠˇ ㄔㄨ', pinyin: 'zhǎochū', korean: '찾아내다 (결과보어)', pos: '동사구', hsk: 4, tags: ['업무', '회화'], example: { hanzi: '我們得找出原因。', korean: '원인을 찾아내야 해요.' } }
    ],
    practice: [
      {
        prompt: 'Yuna가 "這支影片的觸及率比預期低，要不要重新規劃一下投放策略？"라고 보냈을 때',
        modelAnswers: [
          { level: '간단', hanzi: '好啊，我們重新規劃。', pinyin: 'hǎo a, wǒmen chóngxīn guīhuà.', korean: '좋아요, 다시 짜봅시다.' },
          { level: '중간', hanzi: '我也覺得效果不好，我們改天討論一下吧。', pinyin: 'wǒ yě juéde xiàoguǒ bù hǎo, wǒmen gǎitiān tǎolùn yīxià ba.', korean: '저도 효과가 별로인 것 같아요. 날 잡아서 같이 논의해봐요.' },
          { level: '자연스러움', hanzi: '對欸，本來預期的觸及率沒達到。要不要先找出原因再規劃？', pinyin: 'duì ei, běnlái yùqí de chùjí lǜ méi dádào. yào bù yào xiān zhǎochū yuányīn zài guīhuà?', korean: '맞아요, 원래 예상한 도달률이 안 나왔어요. 먼저 원인부터 찾고 다시 짜는 게 어때요?' }
        ]
      }
    ]
  },

  // ============================================================
  // L02 — 본인이 보낸 협업 제안 이메일 - 인사/소개
  // ============================================================
  {
    id: 'L02',
    title: '협업 제안 이메일 — 인사 & 소개',
    subtitle: '본인이 자주 쓸 패턴 / 외우면 50% 자동화',
    source: '본인 발송 이메일 → Kana',
    type: 'business_email_intro',
    difficulty: 'B1',
    date: '2026-05-23',
    fullText: '您好！我是韓國 No.1 醫美 App「歐尼 UNNI」團隊的永恩 🧡 關注 Kana 的 IG 好一陣子了，真的很喜歡您分享的韓國美妝資訊。認為您的風格跟我們品牌追求的很相似，因此誠摯來邀約合作。',
    koreanSummary: '안녕하세요! 저는 한국 No.1 의료미용 앱 「歐尼 UNNI」팀의 영은이라고 합니다. Kana님의 IG를 한참 동안 팔로우해왔고, 공유해주시는 한국 뷰티 정보를 정말 좋아합니다. Kana님의 스타일이 저희 브랜드가 추구하는 방향과 매우 비슷하다고 느껴서 진심으로 협업을 제안드리고자 합니다.',
    sentences: [
      {
        id: 1,
        hanzi: '您好！我是韓國 No.1 醫美 App「歐尼 UNNI」團隊的永恩',
        zhuyin: 'ㄋㄧㄣˊ ㄏㄠˇ ㄨㄛˇ ㄕˋ ㄏㄢˊ ㄍㄨㄛˊ ㄧ ㄇㄟˇ ㄊㄨㄢˊ ㄉㄨㄟˋ ㄉㄜ˙ ㄩㄥˇ ㄣ',
        pinyin: 'nín hǎo! wǒ shì Hánguó No.1 yīměi App "Ōuní UNNI" tuánduì de Yǒng\'ēn',
        korean: '안녕하세요! 저는 한국 No.1 의료미용 앱 「歐尼 UNNI」팀의 영은입니다',
        wordBreak: '您好(공식인사) | 我是(저는~입니다) | 醫美(의료미용) | 團隊(팀) | 的(의) | 永恩(이름)',
        keyPattern: '이메일 첫 줄 공식: 您好 + 我是 + [회사/팀] + 的 + [이름]'
      },
      {
        id: 2,
        hanzi: '關注 Kana 的 IG 好一陣子了，真的很喜歡您分享的韓國美妝資訊',
        zhuyin: 'ㄍㄨㄢ ㄓㄨˋ ㄉㄜ˙ ㄏㄠˇ ㄧˊ ㄓㄣˋ ㄗ˙ ㄌㄜ˙ ㄓㄣ ㄉㄜ˙ ㄏㄣˇ ㄒㄧˇ ㄏㄨㄢ ㄋㄧㄣˊ ㄈㄣ ㄒㄧㄤˇ ㄉㄜ˙ ㄈㄣ ㄒㄧㄤˇ ㄗ ㄒㄩㄣˋ',
        pinyin: 'guānzhù Kana de IG hǎo yízhènzi le, zhēnde hěn xǐhuān nín fēnxiǎng de Hánguó měizhuāng zīxùn',
        korean: 'Kana님의 IG를 꽤 오랫동안 팔로우해왔고, 공유해주시는 한국 뷰티 정보를 정말 좋아합니다',
        wordBreak: '關注(팔로우/주목하다) | 好一陣子了(꽤 오래되었다) | 真的(정말로) | 喜歡(좋아하다) | 分享(공유하다) | 美妝(뷰티/메이크업) | 資訊(정보)',
        keyPattern: '「關注 + ~ + 好一陣子了」= "~를 꽤 오래 팔로우해왔다" — 인플루언서 컨택 시 핵심 패턴!'
      },
      {
        id: 3,
        hanzi: '認為您的風格跟我們品牌追求的很相似，因此誠摯來邀約合作',
        zhuyin: 'ㄖㄣˋ ㄨㄟˊ ㄋㄧㄣˊ ㄉㄜ˙ ㄈㄥ ㄍㄜˊ ㄍㄣ ㄨㄛˇ ㄇㄣ˙ ㄆㄧㄣˇ ㄆㄞˊ ㄓㄨㄟ ㄑㄧㄡˊ ㄉㄜ˙ ㄏㄣˇ ㄒㄧㄤ ㄙˋ ㄧㄣ ㄘˇ ㄔㄥˊ ㄓˋ ㄌㄞˊ ㄧㄠ ㄩㄝ ㄏㄜˊ ㄗㄨㄛˋ',
        pinyin: 'rènwéi nín de fēnggé gēn wǒmen pǐnpái zhuīqiú de hěn xiāngsì, yīncǐ chéngzhì lái yāoyuē hézuò',
        korean: 'Kana님의 스타일이 저희 브랜드가 추구하는 방향과 매우 비슷하다고 생각합니다, 그래서 진심으로 협업을 제안드립니다',
        wordBreak: '認為(생각하다·공식) | 風格(스타일) | 跟(와/과) | 品牌(브랜드) | 追求(추구하다) | 相似(비슷하다) | 因此(따라서) | 誠摯(진심으로) | 邀約(초대·제안하다) | 合作(협업)',
        keyPattern: '「A 跟 B 很相似，因此 ~」= "A는 B와 매우 비슷하므로 ~" — 협업 제안 핵심 문장'
      }
    ],
    vocab: [
      { hanzi: '您好', zhuyin: 'ㄋㄧㄣˊ ㄏㄠˇ', pinyin: 'nín hǎo', korean: '안녕하세요 (공식)', pos: '인사말', hsk: 1, tags: ['업무', '필수', '이메일'], example: { hanzi: '您好，我是負責 KOL 合作的窗口。', korean: '안녕하세요, KOL 협업 담당자입니다.' } },
      { hanzi: '醫美', zhuyin: 'ㄧ ㄇㄟˇ', pinyin: 'yīměi', korean: '의료미용, 메디컬뷰티', pos: '명사', hsk: '업계', tags: ['업계', '필수', '강남언니'], example: { hanzi: '韓國的醫美技術非常成熟。', korean: '한국의 의료미용 기술은 매우 발달했어요.' } },
      { hanzi: '團隊', zhuyin: 'ㄊㄨㄢˊ ㄉㄨㄟˋ', pinyin: 'tuánduì', korean: '팀, 팀원들', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '我們團隊很期待跟您合作。', korean: '저희 팀은 협업을 기대하고 있어요.' } },
      { hanzi: '關注', zhuyin: 'ㄍㄨㄢ ㄓㄨˋ', pinyin: 'guānzhù', korean: '팔로우하다, 주목하다', pos: '동사', hsk: 4, tags: ['업무', '필수', 'SNS'], example: { hanzi: '我關注您的頻道很久了。', korean: '채널을 오랫동안 팔로우해왔어요.' } },
      { hanzi: '好一陣子', zhuyin: 'ㄏㄠˇ ㄧˊ ㄓㄣˋ ㄗ˙', pinyin: 'hǎo yízhènzi', korean: '꽤 오랫동안', pos: '시간표현', hsk: '대만식', tags: ['대만식', '회화', '이메일'], example: { hanzi: '我們認識好一陣子了。', korean: '우리 알고 지낸 지 꽤 됐어요.' } },
      { hanzi: '分享', zhuyin: 'ㄈㄣ ㄒㄧㄤˇ', pinyin: 'fēnxiǎng', korean: '공유하다, 셰어하다', pos: '동사', hsk: 4, tags: ['SNS', '필수'], example: { hanzi: '今天分享我的愛用品！', korean: '오늘은 제 애용품을 공유할게요!' } },
      { hanzi: '美妝', zhuyin: 'ㄇㄟˇ ㄓㄨㄤ', pinyin: 'měizhuāng', korean: '뷰티, 화장품', pos: '명사', hsk: '업계', tags: ['업계', '필수'], example: { hanzi: '我喜歡分享美妝開箱。', korean: '뷰티 언박싱 공유하는 거 좋아해요.' } },
      { hanzi: '資訊', zhuyin: 'ㄗ ㄒㄩㄣˋ', pinyin: 'zīxùn', korean: '정보 (대만식, 중국 본토는 信息)', pos: '명사', hsk: 4, tags: ['대만식', '업무', '필수'], example: { hanzi: '更多資訊請看下方連結。', korean: '자세한 정보는 아래 링크 참고하세요.' } },
      { hanzi: '風格', zhuyin: 'ㄈㄥ ㄍㄜˊ', pinyin: 'fēnggé', korean: '스타일, 풍격', pos: '명사', hsk: 4, tags: ['업무', 'SNS', '필수'], example: { hanzi: '您的風格很有個性。', korean: '스타일이 매우 개성있으세요.' } },
      { hanzi: '品牌', zhuyin: 'ㄆㄧㄣˇ ㄆㄞˊ', pinyin: 'pǐnpái', korean: '브랜드', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '我們是韓國知名品牌。', korean: '저희는 한국의 유명 브랜드입니다.' } },
      { hanzi: '追求', zhuyin: 'ㄓㄨㄟ ㄑㄧㄡˊ', pinyin: 'zhuīqiú', korean: '추구하다', pos: '동사', hsk: 4, tags: ['업무', '이메일'], example: { hanzi: '我們追求的是真實的評論。', korean: '저희가 추구하는 건 진솔한 리뷰예요.' } },
      { hanzi: '相似', zhuyin: 'ㄒㄧㄤ ㄙˋ', pinyin: 'xiāngsì', korean: '비슷하다, 유사하다', pos: '형용사', hsk: 4, tags: ['업무'], example: { hanzi: '我們的理念很相似。', korean: '우리 이념이 매우 비슷해요.' } },
      { hanzi: '因此', zhuyin: 'ㄧㄣ ㄘˇ', pinyin: 'yīncǐ', korean: '따라서, 그러므로 (공식)', pos: '접속사', hsk: 4, tags: ['이메일', '필수'], example: { hanzi: '因此我們希望跟您合作。', korean: '따라서 협업을 희망드립니다.' } },
      { hanzi: '誠摯', zhuyin: 'ㄔㄥˊ ㄓˋ', pinyin: 'chéngzhì', korean: '진심으로, 진실되게', pos: '부사·형용사', hsk: 5, tags: ['이메일', '필수'], example: { hanzi: '誠摯邀請您參加。', korean: '진심으로 참가를 권유드립니다.' } },
      { hanzi: '邀約', zhuyin: 'ㄧㄠ ㄩㄝ', pinyin: 'yāoyuē', korean: '초대하다, 제안하다', pos: '동사', hsk: 5, tags: ['업무', '이메일', '필수'], example: { hanzi: '想邀約您拍攝合作影片。', korean: '협업 영상 촬영을 제안드리고 싶어요.' } },
      { hanzi: '合作', zhuyin: 'ㄏㄜˊ ㄗㄨㄛˋ', pinyin: 'hézuò', korean: '협업, 협력, 합작', pos: '명사·동사', hsk: 3, tags: ['업무', '필수'], example: { hanzi: '期待跟您合作！', korean: '협업 기대합니다!' } }
    ],
    practice: [
      {
        prompt: '인스타에서 본 새 인플루언서 "Mei"에게 첫 협업 제안 이메일 쓰기 (인사~소개 부분만)',
        modelAnswers: [
          { level: '템플릿', hanzi: '您好！我是韓國 No.1 醫美 App「歐尼 UNNI」團隊的 [본인이름]。關注 Mei 的 IG 好一陣子了，真的很喜歡您分享的 [內容主題]。認為您的風格跟我們品牌追求的很相似，因此誠摯來邀約合作。', pinyin: '(템플릿 그대로 활용)', korean: '템플릿 — 이름·주제만 바꿔서 재사용' }
        ]
      }
    ]
  },

  // ============================================================
  // L03 — 협업 제안 이메일 - 조건/가격 부분
  // ============================================================
  {
    id: 'L03',
    title: '협업 제안 이메일 — 조건 & 견적 요청',
    subtitle: '檔期/報價/授權 등 업계 필수 용어',
    source: '본인 발송 이메일 → Kana',
    type: 'business_email_terms',
    difficulty: 'B1',
    date: '2026-05-23',
    fullText: '合作形式：IG Reels ＋ 一則 IG 限動（帶連結）。合作檔期：六月底以前（避開假日上刊）。請協助提供以下項目的報價：IG Reels（90 秒內）＋ 不過稿 IG Story（帶指定連結）、廣告授權及再製費用（3個月）。',
    koreanSummary: '협업 형식: IG Reels + IG 스토리 1건 (링크 포함). 일정: 6월말 이전 (휴일 게재 피함). 다음 항목에 대해 견적 요청드립니다: IG Reels (90초 이내) + 검수 없는 IG 스토리 (지정 링크 포함), 광고 사용권 및 재제작 비용 (3개월).',
    sentences: [
      {
        id: 1,
        hanzi: '合作形式：IG Reels ＋ 一則 IG 限動',
        zhuyin: 'ㄏㄜˊ ㄗㄨㄛˋ ㄒㄧㄥˊ ㄕˋ ㄧˋ ㄗㄜˊ ㄒㄧㄢˋ ㄉㄨㄥˋ',
        pinyin: 'hézuò xíngshì: IG Reels + yī zé IG xiàndòng',
        korean: '협업 형식: IG Reels + IG 스토리 1건',
        wordBreak: '合作形式(협업 형식) | 一則(1건·세는 단위) | 限動(限時動態=스토리 줄임말)',
        keyPattern: '대만에서 인스타 스토리 = 限時動態 → 줄여서 限動. 한국어 "스토리" 그대로 안 통함!'
      },
      {
        id: 2,
        hanzi: '合作檔期：六月底以前（避開假日上刊）',
        zhuyin: 'ㄏㄜˊ ㄗㄨㄛˋ ㄉㄤˋ ㄑㄧ ㄌㄧㄡˋ ㄩㄝˋ ㄉㄧˇ ㄧˇ ㄑㄧㄢˊ ㄅㄧˋ ㄎㄞ ㄐㄧㄚˋ ㄖˋ ㄕㄤˋ ㄎㄢ',
        pinyin: 'hézuò dàngqí: liù yuè dǐ yǐqián (bìkāi jiàrì shàngkān)',
        korean: '협업 일정: 6월말 이전 (휴일 게재 피하기)',
        wordBreak: '檔期(일정·스케줄) | 月底(월말) | 以前(이전) | 避開(피하다) | 假日(휴일) | 上刊(게재·올리기)',
        keyPattern: '檔期 = 인플루언서 업계에서 매번 쓰는 단어. "스케줄" 의미. 上刊 = 게재(업로드+공개)'
      },
      {
        id: 3,
        hanzi: '請協助提供以下項目的報價',
        zhuyin: 'ㄑㄧㄥˇ ㄒㄧㄝˊ ㄓㄨˋ ㄊㄧˊ ㄍㄨㄥ ㄧˇ ㄒㄧㄚˋ ㄒㄧㄤˋ ㄇㄨˋ ㄉㄜ˙ ㄅㄠˋ ㄐㄧㄚˋ',
        pinyin: 'qǐng xiézhù tígōng yǐxià xiàngmù de bàojià',
        korean: '아래 항목에 대해 견적 제공 부탁드립니다',
        wordBreak: '請(부탁드립니다) | 協助(협조하다) | 提供(제공하다) | 以下(아래) | 項目(항목) | 報價(견적)',
        keyPattern: '「請協助 + 동사」= "~해 주시기 바랍니다" — 매우 정중한 비즈니스 표현. 매일 쓸 것'
      },
      {
        id: 4,
        hanzi: '廣告授權及再製費用（3個月）',
        zhuyin: 'ㄍㄨㄤˇ ㄍㄠˋ ㄕㄡˋ ㄑㄩㄢˊ ㄐㄧˊ ㄗㄞˋ ㄓˋ ㄈㄟˋ ㄩㄥˋ',
        pinyin: 'guǎnggào shòuquán jí zàizhì fèiyòng',
        korean: '광고 사용권 및 재제작 비용',
        wordBreak: '廣告(광고) | 授權(권한 부여·라이선스) | 及(및) | 再製(재제작) | 費用(비용)',
        keyPattern: '광고 라이선스 협상에서 매번 등장. 廣告授權 = "광고로 재사용할 권리"'
      }
    ],
    vocab: [
      { hanzi: '形式', zhuyin: 'ㄒㄧㄥˊ ㄕˋ', pinyin: 'xíngshì', korean: '형식, 형태', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '合作形式可以再討論。', korean: '협업 형식은 다시 논의할 수 있어요.' } },
      { hanzi: '一則', zhuyin: 'ㄧˋ ㄗㄜˊ', pinyin: 'yī zé', korean: '1건 (스토리/뉴스 등 세는 단위)', pos: '양사', hsk: 4, tags: ['SNS', '대만식'], example: { hanzi: '請發一則限動。', korean: '스토리 1건 올려주세요.' } },
      { hanzi: '限動', zhuyin: 'ㄒㄧㄢˋ ㄉㄨㄥˋ', pinyin: 'xiàndòng', korean: '인스타 스토리 (限時動態 줄임)', pos: '명사', hsk: '업계', tags: ['SNS', '대만식', '필수'], example: { hanzi: '昨天的限動很多人看。', korean: '어제 스토리 많이 봤어요.' } },
      { hanzi: '檔期', zhuyin: 'ㄉㄤˋ ㄑㄧ', pinyin: 'dàngqí', korean: '일정, 스케줄', pos: '명사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '請確認您的檔期。', korean: '일정 확인 부탁드려요.' } },
      { hanzi: '以前', zhuyin: 'ㄧˇ ㄑㄧㄢˊ', pinyin: 'yǐqián', korean: '이전', pos: '시간표현', hsk: 2, tags: ['필수'], example: { hanzi: '六月底以前要交稿。', korean: '6월말 이전에 원고 보내주셔야 해요.' } },
      { hanzi: '避開', zhuyin: 'ㄅㄧˋ ㄎㄞ', pinyin: 'bìkāi', korean: '피하다, 회피하다', pos: '동사', hsk: 5, tags: ['업무'], example: { hanzi: '避開週末上刊。', korean: '주말 게재는 피하기.' } },
      { hanzi: '假日', zhuyin: 'ㄐㄧㄚˋ ㄖˋ', pinyin: 'jiàrì', korean: '휴일, 공휴일', pos: '명사', hsk: 3, tags: ['업무', '필수'], example: { hanzi: '假日不上刊。', korean: '휴일에는 게재 안 합니다.' } },
      { hanzi: '上刊', zhuyin: 'ㄕㄤˋ ㄎㄢ', pinyin: 'shàngkān', korean: '게재, 업로드 (인플루언서 업계)', pos: '동사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '預計下週上刊。', korean: '다음주 게재 예정입니다.' } },
      { hanzi: '協助', zhuyin: 'ㄒㄧㄝˊ ㄓㄨˋ', pinyin: 'xiézhù', korean: '협조하다, 도와주다 (공식)', pos: '동사', hsk: 4, tags: ['이메일', '필수'], example: { hanzi: '請協助回覆。', korean: '회신 부탁드립니다.' } },
      { hanzi: '提供', zhuyin: 'ㄊㄧˊ ㄍㄨㄥ', pinyin: 'tígōng', korean: '제공하다', pos: '동사', hsk: 3, tags: ['업무', '필수'], example: { hanzi: '我們會提供素材。', korean: '소재를 제공해드리겠습니다.' } },
      { hanzi: '項目', zhuyin: 'ㄒㄧㄤˋ ㄇㄨˋ', pinyin: 'xiàngmù', korean: '항목, 프로젝트', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '請看以下項目。', korean: '아래 항목을 봐주세요.' } },
      { hanzi: '報價', zhuyin: 'ㄅㄠˋ ㄐㄧㄚˋ', pinyin: 'bàojià', korean: '견적, 견적가', pos: '명사·동사', hsk: '업계', tags: ['업무', '필수', '인플루언서'], example: { hanzi: '請提供您的報價。', korean: '견적 부탁드립니다.' } },
      { hanzi: '授權', zhuyin: 'ㄕㄡˋ ㄑㄩㄢˊ', pinyin: 'shòuquán', korean: '권한 부여, 라이선스', pos: '명사·동사', hsk: 5, tags: ['업무', '계약'], example: { hanzi: '需要您的廣告授權。', korean: '광고 사용 권한이 필요해요.' } },
      { hanzi: '再製', zhuyin: 'ㄗㄞˋ ㄓˋ', pinyin: 'zàizhì', korean: '재제작, 재가공', pos: '동사', hsk: '업계', tags: ['업무', '계약'], example: { hanzi: '再製費用另計。', korean: '재제작 비용은 별도예요.' } },
      { hanzi: '費用', zhuyin: 'ㄈㄟˋ ㄩㄥˋ', pinyin: 'fèiyòng', korean: '비용, 요금', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '相關費用如下。', korean: '관련 비용은 다음과 같습니다.' } },
      { hanzi: '保密', zhuyin: 'ㄅㄠˇ ㄇㄧˋ', pinyin: 'bǎomì', korean: '비밀 유지, 기밀 유지', pos: '동사', hsk: 5, tags: ['업무', '이메일'], example: { hanzi: '以上資訊請協助保密。', korean: '위 정보 비공개 부탁드립니다.' } }
    ],
    practice: [
      {
        prompt: 'Yuna가 "Kana 那邊回信了嗎？" 라고 물었을 때 "검토 중이라 다음 주 게재 일정 다시 조정할 것 같아요" 답하기',
        modelAnswers: [
          { level: '간단', hanzi: '還在確認，下週可能要改檔期。', pinyin: 'hái zài quèrèn, xià zhōu kěnéng yào gǎi dàngqí.', korean: '아직 확인 중이에요, 다음주 일정 바꿔야 할 수도 있어요.' },
          { level: '자연스러움', hanzi: '她還在確認，下週的檔期可能要再協調一下。', pinyin: 'tā hái zài quèrèn, xià zhōu de dàngqí kěnéng yào zài xiétiáo yīxià.', korean: '아직 확인 중이세요, 다음주 일정은 다시 조율해야 할 것 같아요.' }
        ]
      }
    ]
  },

  // ============================================================
  // L04 — Reels 캡션 단어 폭격 (Beauty/Influencer 업계)
  // ============================================================
  {
    id: 'L04',
    title: 'Reels 캡션 핵심 어휘 — Beauty/Influencer',
    subtitle: '진단에서 몰랐던 11개 단어 + 응용',
    source: '진단 B1 + 업계 확장',
    type: 'vocab_burst',
    difficulty: 'A2-B1',
    date: '2026-05-23',
    fullText: '分享我最近超愛的韓系妝容！底妝必備就是這瓶 ✨ 持妝12小時不脫妝、乾肌救星，姐妹們衝啊！這次跟韓國品牌合作的開箱影片在 highlight 喔～ #韓妞妝 #業配',
    koreanSummary: '요즘 푹 빠진 한국 메이크업 룩 공유! 베이스는 무조건 이거 한 병 ✨ 12시간 무너지지 않는 지속력, 건성피부 구원자, 언니들 가즈아! 이번에 한국 브랜드랑 협업한 언박싱 영상은 하이라이트에 올려놨어요~ #한국여자메이크업 #광고협찬',
    sentences: [
      {
        id: 1,
        hanzi: '分享我最近超愛的韓系妝容',
        zhuyin: 'ㄈㄣ ㄒㄧㄤˇ ㄨㄛˇ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄔㄠ ㄞˋ ㄉㄜ˙ ㄏㄢˊ ㄒㄧˋ ㄓㄨㄤ ㄖㄨㄥˊ',
        pinyin: 'fēnxiǎng wǒ zuìjìn chāo ài de hán xì zhuāngróng',
        korean: '요즘 진짜 좋아하는 한국식 메이크업 룩 공유',
        wordBreak: '分享(공유) | 最近(요즘) | 超愛(엄청 좋아하는) | 韓系(한국식) | 妝容(메이크업·룩)',
        keyPattern: '「超 + 형용사」= 엄청 ~. SNS·구어에서 매번. (例: 超棒/超讚/超好用)'
      },
      {
        id: 2,
        hanzi: '底妝必備就是這瓶',
        zhuyin: 'ㄉㄧˇ ㄓㄨㄤ ㄅㄧˋ ㄅㄟˋ ㄐㄧㄡˋ ㄕˋ ㄓㄜˋ ㄆㄧㄥˊ',
        pinyin: 'dǐzhuāng bìbèi jiùshì zhè píng',
        korean: '베이스 메이크업 필수템은 바로 이 한 병',
        wordBreak: '底妝(베이스 메이크업) | 必備(필수·반드시 갖춰야 하는) | 就是(바로 ~) | 這瓶(이 병)',
        keyPattern: '「~必備就是 ~」= "~필수템은 바로 ~" — 화장품 리뷰 정형 표현'
      },
      {
        id: 3,
        hanzi: '持妝12小時不脫妝、乾肌救星',
        zhuyin: 'ㄔˊ ㄓㄨㄤ ㄅㄨˋ ㄊㄨㄛ ㄓㄨㄤ ㄍㄢ ㄐㄧ ㄐㄧㄡˋ ㄒㄧㄥ',
        pinyin: 'chízhuāng 12 xiǎoshí bù tuōzhuāng, gānjī jiùxīng',
        korean: '12시간 지속, 무너지지 않음, 건성피부의 구원자',
        wordBreak: '持妝(메이크업 지속) | 不脫妝(무너지지 않음) | 乾肌(건성피부) | 救星(구원자·구세주)',
        keyPattern: '「乾肌救星 / 油肌救星」: 피부타입 + 救星 = 그 타입에 최적'
      },
      {
        id: 4,
        hanzi: '姐妹們衝啊！',
        zhuyin: 'ㄐㄧㄝˇ ㄇㄟˋ ㄇㄣ˙ ㄔㄨㄥ ㄚ',
        pinyin: 'jiěmèimen chōng a!',
        korean: '언니들 가즈아!',
        wordBreak: '姐妹們(언니들·여성 팔로워 호칭) | 衝(돌진·구어로 "가즈아")',
        keyPattern: '여성 인플루언서가 팔로워 부르는 표준 호칭 = 姐妹們'
      },
      {
        id: 5,
        hanzi: '這次跟韓國品牌合作的開箱影片',
        zhuyin: 'ㄓㄜˋ ㄘˋ ㄍㄣ ㄏㄢˊ ㄍㄨㄛˊ ㄆㄧㄣˇ ㄆㄞˊ ㄏㄜˊ ㄗㄨㄛˋ ㄉㄜ˙ ㄎㄞ ㄒㄧㄤ ㄧㄥˇ ㄆㄧㄢˋ',
        pinyin: 'zhè cì gēn Hánguó pǐnpái hézuò de kāixiāng yǐngpiàn',
        korean: '이번 한국 브랜드 협업 언박싱 영상',
        wordBreak: '這次(이번) | 跟(과/와) | 開箱(언박싱) | 影片(영상)',
        keyPattern: '대만에서 "영상" = 影片 (중국 본토 视频 X). 인플 업계 빈출!'
      }
    ],
    vocab: [
      { hanzi: '妝容', zhuyin: 'ㄓㄨㄤ ㄖㄨㄥˊ', pinyin: 'zhuāngróng', korean: '메이크업 룩', pos: '명사', hsk: '업계', tags: ['업계', '필수', 'Beauty'], example: { hanzi: '今天的妝容偏自然。', korean: '오늘 메이크업은 자연스러운 느낌.' } },
      { hanzi: '底妝', zhuyin: 'ㄉㄧˇ ㄓㄨㄤ', pinyin: 'dǐzhuāng', korean: '베이스 메이크업, 파운데이션', pos: '명사', hsk: '업계', tags: ['업계', '필수', 'Beauty'], example: { hanzi: '底妝是化妝的基礎。', korean: '베이스는 화장의 기본이에요.' } },
      { hanzi: '必備', zhuyin: 'ㄅㄧˋ ㄅㄟˋ', pinyin: 'bìbèi', korean: '필수, 반드시 갖춰야 함', pos: '형용사', hsk: 5, tags: ['SNS', '필수'], example: { hanzi: '夏日必備防曬。', korean: '여름엔 자외선 차단 필수.' } },
      { hanzi: '持妝', zhuyin: 'ㄔˊ ㄓㄨㄤ', pinyin: 'chízhuāng', korean: '메이크업 지속력', pos: '명사', hsk: '업계', tags: ['업계', 'Beauty'], example: { hanzi: '這款持妝超久。', korean: '이거 지속력 엄청 길어요.' } },
      { hanzi: '脫妝', zhuyin: 'ㄊㄨㄛ ㄓㄨㄤ', pinyin: 'tuōzhuāng', korean: '메이크업이 무너짐', pos: '동사', hsk: '업계', tags: ['업계', 'Beauty'], example: { hanzi: '夏天容易脫妝。', korean: '여름엔 메이크업 잘 무너져요.' } },
      { hanzi: '乾肌', zhuyin: 'ㄍㄢ ㄐㄧ', pinyin: 'gānjī', korean: '건성 피부 (乾性肌膚 줄임)', pos: '명사', hsk: '업계', tags: ['업계', 'Beauty', '의료'], example: { hanzi: '我是乾肌，需要保濕。', korean: '저 건성이라 보습 필요해요.' } },
      { hanzi: '救星', zhuyin: 'ㄐㄧㄡˋ ㄒㄧㄥ', pinyin: 'jiùxīng', korean: '구원자, 구세주 (애용표현)', pos: '명사', hsk: 5, tags: ['SNS', '회화'], example: { hanzi: '這瓶是我的救星！', korean: '이 제품 제 구원자예요!' } },
      { hanzi: '衝', zhuyin: 'ㄔㄨㄥ', pinyin: 'chōng', korean: '가즈아, 돌진 (구어)', pos: '동사', hsk: '구어', tags: ['SNS', '회화', '대만식'], example: { hanzi: '看到打折，衝啊！', korean: '세일이다, 가즈아!' } },
      { hanzi: '開箱', zhuyin: 'ㄎㄞ ㄒㄧㄤ', pinyin: 'kāixiāng', korean: '언박싱', pos: '동사·명사', hsk: '업계', tags: ['업계', '필수', 'SNS'], example: { hanzi: '今天來開箱新品。', korean: '오늘은 신상 언박싱.' } },
      { hanzi: '影片', zhuyin: 'ㄧㄥˇ ㄆㄧㄢˋ', pinyin: 'yǐngpiàn', korean: '영상 (대만식, 본토 视频 X)', pos: '명사', hsk: 3, tags: ['업계', '대만식', '필수', 'SNS'], example: { hanzi: '我拍了一支影片。', korean: '영상 하나 찍었어요.' } },
      { hanzi: '韓妞', zhuyin: 'ㄏㄢˊ ㄋㄧㄡ', pinyin: 'hánniū', korean: '한국 여자, 한국 스타일 여자', pos: '명사', hsk: '구어', tags: ['SNS', '대만식'], example: { hanzi: '我超愛韓妞穿搭。', korean: '한국 여자 스타일링 너무 좋아함.' } },
      { hanzi: '業配', zhuyin: 'ㄧㄝˋ ㄆㄟˋ', pinyin: 'yèpèi', korean: '광고 협찬, PR (業務配合 줄임)', pos: '명사', hsk: '업계', tags: ['업계', '필수', 'SNS', '대만식'], example: { hanzi: '這是業配，但我真心推薦！', korean: '이거 광고지만 진심 추천!' } },
      { hanzi: '姐妹們', zhuyin: 'ㄐㄧㄝˇ ㄇㄟˋ ㄇㄣ˙', pinyin: 'jiěmèimen', korean: '언니들 (팔로워 호칭)', pos: '명사', hsk: '구어', tags: ['SNS', '회화'], example: { hanzi: '姐妹們，必看！', korean: '언니들, 꼭 보세요!' } },
      { hanzi: '超', zhuyin: 'ㄔㄠ', pinyin: 'chāo', korean: '엄청, 매우 (구어 강조)', pos: '부사', hsk: 4, tags: ['회화', '필수', 'SNS'], example: { hanzi: '超好用！', korean: '엄청 좋아요!' } }
    ],
    practice: [
      {
        prompt: 'Yuna가 "幫我寫一段業配文，推薦 UNNI App" 이라고 부탁했을 때 짧은 캡션 1줄 작성',
        modelAnswers: [
          { level: '간단', hanzi: '姐妹們！想找韓國醫美？UNNI App 必備！', pinyin: 'jiěmèimen! xiǎng zhǎo Hánguó yīměi? UNNI App bìbèi!', korean: '언니들! 한국 의료미용 찾는다면? UNNI 앱 필수!' },
          { level: '자연스러움', hanzi: '想去韓國做醫美的姐妹們衝啊！UNNI App 直接幫你諮詢，超方便～ #業配', pinyin: 'xiǎng qù Hánguó zuò yīměi de jiěmèimen chōng a! UNNI App zhíjiē bāng nǐ zīxún, chāo fāngbiàn~ #yèpèi', korean: '한국 의료미용 가고싶은 언니들 가즈아! UNNI 앱이 바로 상담 도와줘요, 엄청 편함~ #광고' }
        ]
      }
    ]
  },

  // ============================================================
  // L05 — 격식 이메일 표현 (진단 B2 보강)
  // ============================================================
  {
    id: 'L05',
    title: '비즈니스 이메일 격식 표현',
    subtitle: '關於/針對/篩選/進行 등 문어체 핵심',
    source: '진단 B2 + 확장',
    type: 'formal_email',
    difficulty: 'B1-B2',
    date: '2026-05-23',
    fullText: '您好，關於下季度的合作方案，我們希望能夠提前確認檔期，並針對 KOL 的篩選標準進行討論。請問您下週是否方便安排一次線上會議？另外，預算的部分也想再跟您確認一下細節。',
    koreanSummary: '안녕하세요, 다음 분기 협업 방안에 관해, 일정을 미리 확인하고 KOL 선정 기준에 대해 논의하고 싶습니다. 다음 주에 온라인 회의 한 번 가능하실까요? 또한 예산 부분도 세부사항을 다시 확인드리고 싶습니다.',
    sentences: [
      {
        id: 1,
        hanzi: '關於下季度的合作方案',
        zhuyin: 'ㄍㄨㄢ ㄩˊ ㄒㄧㄚˋ ㄐㄧˋ ㄉㄨˋ ㄉㄜ˙ ㄏㄜˊ ㄗㄨㄛˋ ㄈㄤ ㄢˋ',
        pinyin: 'guānyú xià jìdù de hézuò fāng\'àn',
        korean: '다음 분기 협업 방안에 관해',
        wordBreak: '關於(에 관해서) | 下季度(다음 분기) | 方案(방안·플랜)',
        keyPattern: '「關於 ~」= 이메일 첫 문장 정형 표현. "~에 관해 말씀드리면"'
      },
      {
        id: 2,
        hanzi: '我們希望能夠提前確認檔期',
        zhuyin: 'ㄨㄛˇ ㄇㄣ˙ ㄒㄧ ㄨㄤˋ ㄋㄥˊ ㄍㄡˋ ㄊㄧˊ ㄑㄧㄢˊ ㄑㄩㄝˋ ㄖㄣˋ ㄉㄤˋ ㄑㄧ',
        pinyin: 'wǒmen xīwàng nénggòu tíqián quèrèn dàngqí',
        korean: '저희는 일정을 미리 확인할 수 있기를 희망합니다',
        wordBreak: '希望(희망하다) | 能夠(할 수 있다·공식) | 提前(미리·앞당겨) | 確認(확인)',
        keyPattern: '「希望能夠 + 동사」= "~할 수 있기를 희망합니다" — 비즈니스 정중 표현'
      },
      {
        id: 3,
        hanzi: '並針對 KOL 的篩選標準進行討論',
        zhuyin: 'ㄅㄧㄥˋ ㄓㄣ ㄉㄨㄟˋ ㄉㄜ˙ ㄕㄞ ㄒㄩㄢˇ ㄅㄧㄠ ㄓㄨㄣˇ ㄐㄧㄣˋ ㄒㄧㄥˊ ㄊㄠˇ ㄌㄨㄣˋ',
        pinyin: 'bìng zhēnduì KOL de shāixuǎn biāozhǔn jìnxíng tǎolùn',
        korean: '그리고 KOL 선정 기준에 대해 논의를 진행',
        wordBreak: '並(그리고·공식) | 針對(에 대해·타겟팅) | KOL(인플루언서) | 篩選(선정·필터링) | 標準(기준) | 進行(진행하다) | 討論(논의)',
        keyPattern: '「並 + 針對 ~ + 進行 ~」= 격식 문장 구조. 한 문장에 3개 격식 패턴!'
      },
      {
        id: 4,
        hanzi: '請問您下週是否方便安排一次線上會議？',
        zhuyin: 'ㄑㄧㄥˇ ㄨㄣˋ ㄋㄧㄣˊ ㄒㄧㄚˋ ㄓㄡ ㄕˋ ㄈㄡˇ ㄈㄤ ㄅㄧㄢˋ ㄢ ㄆㄞˊ ㄧˊ ㄘˋ ㄒㄧㄢˋ ㄕㄤˋ ㄏㄨㄟˋ ㄧˋ',
        pinyin: 'qǐng wèn nín xià zhōu shìfǒu fāngbiàn ānpái yīcì xiànshàng huìyì?',
        korean: '다음 주 온라인 회의 한 번 잡으실 시간 되실까요?',
        wordBreak: '請問(여쭙겠습니다) | 是否(인지 아닌지) | 方便(편하다·시간 되다) | 安排(잡다·일정 잡다) | 線上會議(온라인 회의)',
        keyPattern: '「請問 ~ 是否方便 ~」= 회의·미팅 요청 공식. 한 문장 통째 외우기'
      }
    ],
    vocab: [
      { hanzi: '關於', zhuyin: 'ㄍㄨㄢ ㄩˊ', pinyin: 'guānyú', korean: '~에 관하여', pos: '전치사', hsk: 3, tags: ['이메일', '필수'], example: { hanzi: '關於這件事，請告訴我。', korean: '이 건에 관해 알려주세요.' } },
      { hanzi: '能夠', zhuyin: 'ㄋㄥˊ ㄍㄡˋ', pinyin: 'nénggòu', korean: '~할 수 있다 (공식)', pos: '조동사', hsk: 4, tags: ['이메일', '필수'], example: { hanzi: '希望能夠盡快回覆。', korean: '되도록 빨리 회신 부탁드립니다.' } },
      { hanzi: '提前', zhuyin: 'ㄊㄧˊ ㄑㄧㄢˊ', pinyin: 'tíqián', korean: '미리, 앞당겨', pos: '부사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '請提前一週通知。', korean: '1주 전에 미리 알려주세요.' } },
      { hanzi: '確認', zhuyin: 'ㄑㄩㄝˋ ㄖㄣˋ', pinyin: 'quèrèn', korean: '확인하다', pos: '동사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '請確認時間。', korean: '시간 확인 부탁드립니다.' } },
      { hanzi: '並', zhuyin: 'ㄅㄧㄥˋ', pinyin: 'bìng', korean: '그리고, 또한 (공식 접속사)', pos: '접속사', hsk: 4, tags: ['이메일', '필수'], example: { hanzi: '請確認檔期，並提供報價。', korean: '일정 확인하시고 견적도 부탁드립니다.' } },
      { hanzi: '針對', zhuyin: 'ㄓㄣ ㄉㄨㄟˋ', pinyin: 'zhēnduì', korean: '~에 대해, 타겟팅', pos: '전치사', hsk: 4, tags: ['이메일', '업무', '필수'], example: { hanzi: '針對這個問題討論。', korean: '이 문제에 대해 논의.' } },
      { hanzi: '篩選', zhuyin: 'ㄕㄞ ㄒㄩㄢˇ', pinyin: 'shāixuǎn', korean: '선정하다, 필터링', pos: '동사', hsk: 5, tags: ['업무', '인플루언서'], example: { hanzi: '我們會篩選合適的 KOL。', korean: '적합한 KOL을 선정하겠습니다.' } },
      { hanzi: '標準', zhuyin: 'ㄅㄧㄠ ㄓㄨㄣˇ', pinyin: 'biāozhǔn', korean: '기준, 표준', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '篩選標準如下。', korean: '선정 기준은 다음과 같습니다.' } },
      { hanzi: '進行', zhuyin: 'ㄐㄧㄣˋ ㄒㄧㄥˊ', pinyin: 'jìnxíng', korean: '진행하다 (격식 동사 연결)', pos: '동사', hsk: 3, tags: ['이메일', '필수'], example: { hanzi: '進行討論。', korean: '논의를 진행.' } },
      { hanzi: '討論', zhuyin: 'ㄊㄠˇ ㄌㄨㄣˋ', pinyin: 'tǎolùn', korean: '논의하다', pos: '동사', hsk: 3, tags: ['업무', '필수'], example: { hanzi: '我們明天再討論。', korean: '내일 다시 논의해요.' } },
      { hanzi: '是否', zhuyin: 'ㄕˋ ㄈㄡˇ', pinyin: 'shìfǒu', korean: '~인지 아닌지 (공식)', pos: '부사', hsk: 4, tags: ['이메일', '필수'], example: { hanzi: '請問是否方便？', korean: '시간 괜찮으실까요?' } },
      { hanzi: '安排', zhuyin: 'ㄢ ㄆㄞˊ', pinyin: 'ānpái', korean: '잡다, 일정 잡다, 배정하다', pos: '동사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '請幫我安排會議。', korean: '회의 잡아주세요.' } },
      { hanzi: '線上會議', zhuyin: 'ㄒㄧㄢˋ ㄕㄤˋ ㄏㄨㄟˋ ㄧˋ', pinyin: 'xiànshàng huìyì', korean: '온라인 회의', pos: '명사', hsk: '업무', tags: ['업무', '필수'], example: { hanzi: '安排一次線上會議。', korean: '온라인 회의 한 번 잡아요.' } },
      { hanzi: '預算', zhuyin: 'ㄩˋ ㄙㄨㄢˋ', pinyin: 'yùsuàn', korean: '예산', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '預算有限。', korean: '예산이 제한적이에요.' } },
      { hanzi: '細節', zhuyin: 'ㄒㄧˋ ㄐㄧㄝˊ', pinyin: 'xìjié', korean: '세부사항, 디테일', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '細節再討論。', korean: '디테일은 다시 논의해요.' } }
    ],
    practice: [
      {
        prompt: '협력사에 "다음 분기 협업 예산 미리 확인하고, 콘텐츠 방향에 대해 논의하고 싶다"는 이메일 작성',
        modelAnswers: [
          { level: '템플릿', hanzi: '您好，關於下季度的合作，我們希望能夠提前確認預算，並針對內容方向進行討論。請問您下週是否方便安排一次線上會議？', pinyin: '(L05 패턴 그대로 활용)', korean: '템플릿 — 분기/내용/일정만 바꿔서 재사용' }
        ]
      }
    ]
  },

  // ============================================================
  // L06 — 격식 한 문장 해부 (진단 A5 보강)
  // ============================================================
  {
    id: 'L06',
    title: '격식 한 문장 해부 — 由於/將於 구조',
    subtitle: '진단에서 못 읽었던 A5 문장 완전 분해',
    source: '진단 A5',
    type: 'formal_sentence',
    difficulty: 'B2',
    date: '2026-05-23',
    fullText: '由於本月的預算已分配完畢，相關事宜將於下個月再行協商。',
    koreanSummary: '이번 달 예산이 이미 다 배정 완료되어, 관련 사안은 다음 달에 다시 협의하겠습니다.',
    sentences: [
      {
        id: 1,
        hanzi: '由於本月的預算已分配完畢',
        zhuyin: 'ㄧㄡˊ ㄩˊ ㄅㄣˇ ㄩㄝˋ ㄉㄜ˙ ㄩˋ ㄙㄨㄢˋ ㄧˇ ㄈㄣ ㄆㄟˋ ㄨㄢˊ ㄅㄧˋ',
        pinyin: 'yóuyú běn yuè de yùsuàn yǐ fēnpèi wánbì',
        korean: '이번 달 예산이 이미 배정 완료되었으므로',
        wordBreak: '由於(인하여·공식 "때문에") | 本月(이번 달) | 預算(예산) | 已(이미·공식) | 分配(배정·분배) | 完畢(완료·공식)',
        keyPattern: '「由於 ~ 完畢」= 격식 인과 구조. 由於 = 因為보다 격식. 完畢 = 完了/結束보다 격식'
      },
      {
        id: 2,
        hanzi: '相關事宜將於下個月再行協商',
        zhuyin: 'ㄒㄧㄤ ㄍㄨㄢ ㄕˋ ㄧˊ ㄐㄧㄤ ㄩˊ ㄒㄧㄚˋ ㄍㄜ˙ ㄩㄝˋ ㄗㄞˋ ㄒㄧㄥˊ ㄒㄧㄝˊ ㄕㄤ',
        pinyin: 'xiāngguān shìyí jiāng yú xià gè yuè zài xíng xiéshāng',
        korean: '관련 사안은 다음 달에 다시 협의하겠습니다',
        wordBreak: '相關(관련) | 事宜(사안·공식 "일") | 將於(에서/에·미래격식) | 下個月(다음 달) | 再行(다시·격식 "再") | 協商(협의·공식)',
        keyPattern: '「將於 ~ 再行 ~」= 미래 격식. 將 = 미래 표시. 再行 + 동사 = "다시 ~할 것"'
      }
    ],
    vocab: [
      { hanzi: '由於', zhuyin: 'ㄧㄡˊ ㄩˊ', pinyin: 'yóuyú', korean: '~로 인하여 (격식)', pos: '접속사', hsk: 4, tags: ['이메일', '격식', '필수'], example: { hanzi: '由於系統升級，網站暫停服務。', korean: '시스템 업그레이드로 인해 사이트 일시 중단.' } },
      { hanzi: '本月', zhuyin: 'ㄅㄣˇ ㄩㄝˋ', pinyin: 'běnyuè', korean: '이번 달 (격식)', pos: '시간표현', hsk: 4, tags: ['이메일', '격식'], example: { hanzi: '本月底結算。', korean: '이번 달말 정산.' } },
      { hanzi: '已', zhuyin: 'ㄧˇ', pinyin: 'yǐ', korean: '이미 (공식 — 회화는 已經)', pos: '부사', hsk: 4, tags: ['이메일', '격식'], example: { hanzi: '款項已收到。', korean: '대금 입금 완료되었습니다.' } },
      { hanzi: '分配', zhuyin: 'ㄈㄣ ㄆㄟˋ', pinyin: 'fēnpèi', korean: '배정, 분배', pos: '동사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '預算如何分配？', korean: '예산을 어떻게 배정하나요?' } },
      { hanzi: '完畢', zhuyin: 'ㄨㄢˊ ㄅㄧˋ', pinyin: 'wánbì', korean: '완료 (격식)', pos: '동사', hsk: 5, tags: ['이메일', '격식', '필수'], example: { hanzi: '作業完畢。', korean: '작업 완료.' } },
      { hanzi: '相關', zhuyin: 'ㄒㄧㄤ ㄍㄨㄢ', pinyin: 'xiāngguān', korean: '관련, 관련된', pos: '형용사', hsk: 4, tags: ['이메일', '필수'], example: { hanzi: '相關資料附件。', korean: '관련 자료 첨부.' } },
      { hanzi: '事宜', zhuyin: 'ㄕˋ ㄧˊ', pinyin: 'shìyí', korean: '사안, 사항 (격식)', pos: '명사', hsk: 5, tags: ['이메일', '격식', '필수'], example: { hanzi: '合作事宜請洽窗口。', korean: '협업 사안은 담당자에게 문의.' } },
      { hanzi: '將於', zhuyin: 'ㄐㄧㄤ ㄩˊ', pinyin: 'jiāng yú', korean: '~에서 (미래·격식)', pos: '복합표현', hsk: 5, tags: ['이메일', '격식', '필수'], example: { hanzi: '會議將於下午三點舉行。', korean: '회의는 오후 3시에 진행됩니다.' } },
      { hanzi: '再行', zhuyin: 'ㄗㄞˋ ㄒㄧㄥˊ', pinyin: 'zài xíng', korean: '다시 (격식·再의 강조형)', pos: '부사', hsk: 5, tags: ['이메일', '격식'], example: { hanzi: '稍後再行通知。', korean: '추후 다시 통지.' } },
      { hanzi: '協商', zhuyin: 'ㄒㄧㄝˊ ㄕㄤ', pinyin: 'xiéshāng', korean: '협의, 협상 (격식)', pos: '동사', hsk: 5, tags: ['업무', '계약', '필수'], example: { hanzi: '價格可協商。', korean: '가격 협의 가능.' } }
    ],
    practice: [
      {
        prompt: '같은 의미를 캐주얼/회화체로 다시 써보기',
        modelAnswers: [
          { level: '회화체 변환', hanzi: '這個月的預算已經用完了，相關的事下個月再聊吧。', pinyin: 'zhège yuè de yùsuàn yǐjīng yòng wán le, xiāngguān de shì xià gè yuè zài liáo ba.', korean: '같은 의미 — 由於→因為, 完畢→用完了, 事宜→事, 將於→下個月, 協商→聊' }
        ]
      }
    ]
  },

  // ============================================================
  // L07 — Plaud Reels 트랜스크립트 (재업로드 대기)
  // ============================================================
  {
    id: 'L07',
    title: '🚧 Reels 트랜스크립트 — 재업로드 대기',
    subtitle: 'Plaud TXT 인코딩 깨짐. 복사-붙여넣기 또는 m4a 파일 재공유 필요',
    source: 'Plaud Note (encoding broken)',
    type: 'placeholder',
    difficulty: 'TBD',
    date: '2026-05-23',
    fullText: '(콘텐츠 대기 중)',
    koreanSummary: 'Plaud에서 받은 TXT 파일이 UTF-8 디코딩 문제로 글자 손실. 다음 중 하나로 재공유 부탁드려요: (1) Plaud 앱에서 트랜스크립트를 복사해서 메시지에 붙여넣기, (2) 원본 m4a/mp3 오디오 파일 공유, (3) 영상의 화면 캡션 스크린샷.',
    sentences: [],
    vocab: [],
    practice: [
      {
        prompt: '재업로드 가이드',
        modelAnswers: [
          { level: '권장', hanzi: '(Plaud 앱 → 해당 노트 → "Transcript" 탭 → 텍스트 전체 선택 → 복사 → 메시지에 붙여넣기)', pinyin: '', korean: '이 방식이 인코딩 사고가 가장 적음' }
        ]
      }
    ]
  },

  // ============================================================
  // L08 — 칭찬 표현 (인박스에서 자동 생성)
  // ============================================================
  {
    id: 'L08',
    title: '칭찬 표현 — 你的眼光太好了吧!',
    subtitle: '일상 캐주얼 / Yuna한테 받을법한 칭찬 답하기',
    source: 'Inbox (2026-05-25 Slack)',
    type: 'casual_compliment',
    difficulty: 'A2-B1',
    date: '2026-05-25',
    fullText: '花真的太漂亮了 你的眼光太好了吧！',
    koreanSummary: '꽃 진짜 너무 예뻐요, 안목 너무 좋으신데요!',
    sentences: [
      {
        id: 1,
        hanzi: '花真的太漂亮了',
        zhuyin: 'ㄏㄨㄚ ㄓㄣ ㄉㄜ˙ ㄊㄞˋ ㄆㄧㄠˋ ㄌㄧㄤˋ ㄌㄜ˙',
        pinyin: 'huā zhēnde tài piàoliang le',
        korean: '꽃 진짜 너무 예뻐요',
        wordBreak: '花(꽃) | 真的(진짜로) | 太~了(너무 ~) | 漂亮(예쁘다)',
        keyPattern: '「真的太 + 형용사 + 了」= "진짜 너무 ~다" — 감탄·칭찬 핵심 패턴. (例: 真的太棒了/真的太厲害了)'
      },
      {
        id: 2,
        hanzi: '你的眼光太好了吧！',
        zhuyin: 'ㄋㄧˇ ㄉㄜ˙ ㄧㄢˇ ㄍㄨㄤ ㄊㄞˋ ㄏㄠˇ ㄌㄜ˙ ㄅㄚ˙',
        pinyin: 'nǐde yǎnguāng tài hǎo le ba',
        korean: '안목이 너무 좋으신데요!',
        wordBreak: '你的(당신의) | 眼光(안목·감각) | 太好了(너무 좋다) | 吧(~네요·어조사)',
        keyPattern: '「眼光」은 외모(눈빛) X, **안목/감각** O. 「~太好了吧」 끝의 「吧」가 부드러운 감탄을 만듦 — 대만식 회화 빈출'
      }
    ],
    vocab: [
      { hanzi: '花', zhuyin: 'ㄏㄨㄚ', pinyin: 'huā', korean: '꽃', pos: '명사', hsk: 1, tags: ['회화'], example: { hanzi: '這束花好香！', korean: '이 꽃다발 향이 좋아요!' } },
      { hanzi: '真的', zhuyin: 'ㄓㄣ ㄉㄜ˙', pinyin: 'zhēnde', korean: '진짜로, 정말로', pos: '부사', hsk: 2, tags: ['회화', '필수'], example: { hanzi: '真的嗎？', korean: '진짜요?' } },
      { hanzi: '漂亮', zhuyin: 'ㄆㄧㄠˋ ㄌㄧㄤˋ', pinyin: 'piàoliang', korean: '예쁘다, 아름답다', pos: '형용사', hsk: 1, tags: ['회화', '필수'], example: { hanzi: '你今天好漂亮！', korean: '오늘 너무 예뻐요!' } },
      { hanzi: '眼光', zhuyin: 'ㄧㄢˇ ㄍㄨㄤ', pinyin: 'yǎnguāng', korean: '안목, 감각, 식견', pos: '명사', hsk: 5, tags: ['회화', '필수', '업무'], example: { hanzi: '你的眼光真好，這個KOL選得很對。', korean: '안목 진짜 좋으세요, 이 KOL 잘 골랐어요.' } },
      { hanzi: '吧', zhuyin: 'ㄅㄚ˙', pinyin: 'ba', korean: '어조사 (부드러운 추측·권유·감탄)', pos: '어조사', hsk: 2, tags: ['회화', '대만식', '필수'], example: { hanzi: '我們明天去吧！', korean: '내일 같이 가요!' } }
    ],
    practice: [
      {
        prompt: 'Yuna가 본인이 고른 인플루언서/콘텐츠를 보고 "你的眼光真好!"라고 칭찬했을 때 겸손하게 답하기',
        modelAnswers: [
          { level: '간단', hanzi: '哪有！', pinyin: 'nǎ yǒu!', korean: '어디요! (겸손)' },
          { level: '중간', hanzi: '謝謝！其實是團隊一起選的。', pinyin: 'xièxiè! qíshí shì tuánduì yīqǐ xuǎn de.', korean: '감사해요! 사실 팀이 같이 골랐어요.' },
          { level: '자연스러움', hanzi: '過獎了過獎了～其實我也是看了好多才選到這個。', pinyin: 'guòjiǎngle guòjiǎngle~ qíshí wǒ yěshì kànle hǎoduō cái xuǎndào zhège.', korean: '과찬이에요~ 사실 저도 많이 보고 나서야 이걸 골랐어요.' }
        ]
      },
      {
        prompt: '협력사가 "Yuna的眼光很好" 라고 칭찬할 때 Yuna 대신 받는 입장에서 응답',
        modelAnswers: [
          { level: '자연스러움', hanzi: '對啊，Yuna 真的很會挑！下次也讓她推薦給您。', pinyin: 'duì a, Yuna zhēnde hěn huì tiāo! xiàcì yě ràng tā tuījiàn gěi nín.', korean: '맞아요, Yuna가 정말 잘 골라요! 다음에 또 추천드릴게요.' }
        ]
      }
    ]
  }
];

// 진단에서 누락된 한자 회복용 - 자주 등장하는 격식체 어휘 미니뱅크
const REVIEW_VOCAB = [
  { hanzi: '精華液', zhuyin: 'ㄐㄧㄥ ㄏㄨㄚˊ ㄧㄝˋ', pinyin: 'jīnghuá yè', korean: '에센스 (스킨케어)', source: '진단 A2' },
  { hanzi: '成熟', zhuyin: 'ㄔㄥˊ ㄕㄡˊ', pinyin: 'chéngshóu', korean: '성숙하다, 발달했다 (인기 X)', source: '진단 A4 교정' },
  { hanzi: '雙眼皮', zhuyin: 'ㄕㄨㄤ ㄧㄢˇ ㄆㄧˊ', pinyin: 'shuāngyǎnpí', korean: '쌍꺼풀', source: '진단 A4' },
  { hanzi: '技術', zhuyin: 'ㄐㄧˋ ㄕㄨˋ', pinyin: 'jìshù', korean: '기술', source: '진단 A4' }
];

if (typeof module !== 'undefined') {
  module.exports = { LESSONS, REVIEW_VOCAB };
}
