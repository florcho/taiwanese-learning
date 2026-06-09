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
  },

  // ============================================================
  // L09 — 캐주얼 반응·감탄 (인박스 2026-05-26)
  // ============================================================
  {
    id: 'L09',
    title: '캐주얼 반응·감탄 — 啊⋯沒申請到 / 有免費施術欸!',
    subtitle: '아쉬움·놀람 표현 + 施術(시술) 업계 단어',
    source: 'Inbox (2026-05-26 Slack)',
    type: 'casual_work_chat',
    difficulty: 'A2-B1',
    date: '2026-05-26',
    fullText: '啊⋯結束了 沒有申請到。有免費施術欸！！！',
    koreanSummary: '아… 끝났네, 신청 못 했어. 무료 시술 있대!!!',
    sentences: [
      {
        id: 1,
        hanzi: '啊⋯結束了，沒有申請到',
        zhuyin: 'ㄚ ㄐㄧㄝˊ ㄕㄨˋ ㄌㄜ˙ ㄇㄟˊ ㄧㄡˇ ㄕㄣ ㄑㄧㄥˇ ㄉㄠˋ',
        pinyin: 'a... jiéshù le, méiyǒu shēnqǐng dào',
        korean: '아… 끝났네, 신청 못 했어',
        wordBreak: '啊(아…감탄) | 結束了(끝났다) | 沒有(못/안) | 申請(신청) | 到(성공 결과보어)',
        keyPattern: '「沒有 + 동사 + 到」= "~하지 못했다". 到는 동작의 성공/달성을 나타내는 결과보어. 申請到=신청에 성공하다 → 沒申請到=신청 실패'
      },
      {
        id: 2,
        hanzi: '有免費施術欸！！！',
        zhuyin: 'ㄧㄡˇ ㄇㄧㄢˇ ㄈㄟˋ ㄕ ㄕㄨˋ ㄟ',
        pinyin: 'yǒu miǎnfèi shīshù ei!',
        korean: '무료 시술 있대!!!',
        wordBreak: '有(있다) | 免費(무료) | 施術(시술) | 欸(~네!·대만 감탄 어조사)',
        keyPattern: '「欸」= 놀람·발견의 대만식 어조사 ("~있대!/~네!"). 施術 = 의료미용 시술 — 강남언니 업무 필수 단어 ⭐'
      }
    ],
    vocab: [
      { hanzi: '啊', zhuyin: 'ㄚ', pinyin: 'a', korean: '아… (감탄·아쉬움)', pos: '감탄사', hsk: 1, tags: ['회화'], example: { hanzi: '啊，我忘記了！', korean: '아, 깜빡했다!' } },
      { hanzi: '結束', zhuyin: 'ㄐㄧㄝˊ ㄕㄨˋ', pinyin: 'jiéshù', korean: '끝나다, 종료되다', pos: '동사', hsk: 3, tags: ['회화', '필수'], example: { hanzi: '活動已經結束了。', korean: '이벤트는 이미 끝났어요.' } },
      { hanzi: '申請', zhuyin: 'ㄕㄣ ㄑㄧㄥˇ', pinyin: 'shēnqǐng', korean: '신청하다', pos: '동사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '我要申請合作。', korean: '협업을 신청하려고 해요.' } },
      { hanzi: '免費', zhuyin: 'ㄇㄧㄢˇ ㄈㄟˋ', pinyin: 'miǎnfèi', korean: '무료', pos: '형용사', hsk: 3, tags: ['회화', '필수'], example: { hanzi: '這是免費體驗。', korean: '이건 무료 체험이에요.' } },
      { hanzi: '施術', zhuyin: 'ㄕ ㄕㄨˋ', pinyin: 'shīshù', korean: '시술 (의료미용)', pos: '명사·동사', hsk: '업계', tags: ['업계', '필수', '의료'], example: { hanzi: '這個施術恢復很快。', korean: '이 시술은 회복이 빨라요.' } },
      { hanzi: '欸', zhuyin: 'ㄟ', pinyin: 'ei', korean: '~네!/어! (대만식 놀람 어조사)', pos: '어조사', hsk: '대만식', tags: ['대만식', '회화', '필수'], example: { hanzi: '欸，你也在這裡！', korean: '어, 너도 여기 있네!' } }
    ],
    practice: [
      {
        prompt: '동료가 "申請的活動結束了" 라고 했을 때 아쉬움 표현하기',
        modelAnswers: [
          { level: '간단', hanzi: '啊⋯太可惜了。', pinyin: 'a... tài kěxí le.', korean: '아… 너무 아쉽다.' },
          { level: '자연스러움', hanzi: '欸真的假的⋯下次要早點申請才行。', pinyin: 'ei zhēnde jiǎde... xiàcì yào zǎodiǎn shēnqǐng cái xíng.', korean: '헐 진짜요…? 다음엔 좀 더 일찍 신청해야겠어요.' }
        ]
      },
      {
        prompt: '무료 시술 이벤트 정보를 동료에게 공유하기',
        modelAnswers: [
          { level: '자연스러움', hanzi: '欸欸這個診所有免費施術耶！要不要一起申請？', pinyin: 'ei ei zhège zhěnsuǒ yǒu miǎnfèi shīshù ye! yào bù yào yìqǐ shēnqǐng?', korean: '야야 이 클리닉 무료 시술 있대! 같이 신청할래?' }
        ]
      }
    ]
  },

  // ============================================================
  // L10 — 인플루언서 협업 업무 용어 (인박스 2026-05-26)
  // ============================================================
  {
    id: 'L10',
    title: '인플루언서 협업 업무 용어 — 網紅/口碑帳號/PPL',
    subtitle: '업계 핵심 어휘 + 바쁜 동료 친근체',
    source: 'Inbox (2026-05-26 Slack)',
    type: 'casual_work_chat',
    difficulty: 'B1',
    date: '2026-05-26',
    fullText: '網紅、再合作清單推薦、台灣相關口碑帳號、PPL 推薦清單。因為等等 11:30 要去接 Elva，所以我現在正在超級集中中!!嘿嘿',
    koreanSummary: '인플루언서, 재협업 리스트 추천, 대만 관련 평판 좋은 계정, PPL 추천 리스트. 이따 11:30에 Elva 데리러 가야 해서 지금 완전 초집중 중!! 헤헤',
    sentences: [
      {
        id: 1,
        hanzi: '網紅、再合作清單推薦',
        zhuyin: 'ㄨㄤˇ ㄏㄨㄥˊ ㄗㄞˋ ㄏㄜˊ ㄗㄨㄛˋ ㄑㄧㄥ ㄉㄢ ㄊㄨㄟ ㄐㄧㄢˋ',
        pinyin: 'wǎnghóng, zài hézuò qīngdān tuījiàn',
        korean: '인플루언서, 재협업 리스트 추천',
        wordBreak: '網紅(인플루언서·왕홍) | 再合作(재협업) | 清單(리스트·목록) | 推薦(추천)',
        keyPattern: '網紅 = 網路紅人(인터넷 유명인) 줄임 = 인플루언서. KOL과 거의 같은 뜻으로 혼용'
      },
      {
        id: 2,
        hanzi: '台灣相關口碑帳號、PPL 推薦清單',
        zhuyin: 'ㄊㄞˊ ㄨㄢ ㄒㄧㄤ ㄍㄨㄢ ㄎㄡˇ ㄅㄟ ㄓㄤˋ ㄏㄠˋ ㄊㄨㄟ ㄐㄧㄢˋ ㄑㄧㄥ ㄉㄢ',
        pinyin: 'Táiwān xiāngguān kǒubēi zhànghào, PPL tuījiàn qīngdān',
        korean: '대만 관련 평판 좋은 계정, PPL 추천 리스트',
        wordBreak: '台灣相關(대만 관련) | 口碑(입소문·평판) | 帳號(계정) | PPL(간접광고·제품 배치) | 推薦清單(추천 리스트)',
        keyPattern: '口碑 = 입소문/평판 (口碑帳號 = 신뢰도 높은 계정). PPL = Product Placement, 대만에선 置入性行銷이라고도 함'
      },
      {
        id: 3,
        hanzi: '因為等等 11:30 要去接 Elva，所以我現在正在超級集中中!!嘿嘿',
        zhuyin: 'ㄧㄣ ㄨㄟˋ ㄉㄥˇ ㄉㄥˇ ㄧㄠˋ ㄑㄩˋ ㄐㄧㄝ ㄙㄨㄛˇ ㄧˇ ㄨㄛˇ ㄒㄧㄢˋ ㄗㄞˋ ㄓㄥˋ ㄗㄞˋ ㄔㄠ ㄐㄧˊ ㄐㄧˊ ㄓㄨㄥ ㄓㄨㄥ',
        pinyin: 'yīnwèi děngděng 11:30 yào qù jiē Elva, suǒyǐ wǒ xiànzài zhèngzài chāojí jízhōng zhōng!! hēihēi',
        korean: '이따 11:30에 Elva 데리러 가야 해서, 지금 완전 초집중 중이에요!! 헤헤',
        wordBreak: '等等(이따가) | 要去接(데리러 가야 한다) | 所以(그래서) | 正在~中(~하는 중) | 超級(엄청·super) | 集中(집중) | 嘿嘿(헤헤)',
        keyPattern: '「正在 + 동사 + 中」= "~하는 중". 「超級」은 超보다 더 강한 강조. 嘿嘿 = 친근한 웃음소리 — 동료 사이 캐주얼 톤'
      }
    ],
    vocab: [
      { hanzi: '網紅', zhuyin: 'ㄨㄤˇ ㄏㄨㄥˊ', pinyin: 'wǎnghóng', korean: '인플루언서, 왕홍', pos: '명사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '我們想找台灣網紅合作。', korean: '대만 인플루언서랑 협업하고 싶어요.' } },
      { hanzi: '口碑', zhuyin: 'ㄎㄡˇ ㄅㄟ', pinyin: 'kǒubēi', korean: '입소문, 평판', pos: '명사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '這家診所口碑很好。', korean: '이 클리닉 평판이 좋아요.' } },
      { hanzi: '清單', zhuyin: 'ㄑㄧㄥ ㄉㄢ', pinyin: 'qīngdān', korean: '리스트, 목록', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '我整理了一份推薦清單。', korean: '추천 리스트 하나 정리했어요.' } },
      { hanzi: '推薦', zhuyin: 'ㄊㄨㄟ ㄐㄧㄢˋ', pinyin: 'tuījiàn', korean: '추천하다', pos: '동사', hsk: 4, tags: ['업무', '필수', 'SNS'], example: { hanzi: '我推薦這位網紅。', korean: '이 인플루언서 추천해요.' } },
      { hanzi: 'PPL', zhuyin: '(英)', pinyin: 'PPL', korean: '간접광고, 제품 배치 (置入性行銷)', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '계약'], example: { hanzi: '這支影片有 PPL。', korean: '이 영상엔 PPL이 들어가요.' } },
      { hanzi: '接', zhuyin: 'ㄐㄧㄝ', pinyin: 'jiē', korean: '데리러 가다, 마중하다, (전화) 받다', pos: '동사', hsk: 3, tags: ['회화', '필수'], example: { hanzi: '我去接小孩。', korean: '애 데리러 가요.' } },
      { hanzi: '正在', zhuyin: 'ㄓㄥˋ ㄗㄞˋ', pinyin: 'zhèngzài', korean: '~하는 중이다 (진행)', pos: '부사', hsk: 2, tags: ['회화', '필수'], example: { hanzi: '我正在開會。', korean: '회의 중이에요.' } },
      { hanzi: '超級', zhuyin: 'ㄔㄠ ㄐㄧˊ', pinyin: 'chāojí', korean: '엄청, 완전 (super)', pos: '부사', hsk: 4, tags: ['회화', 'SNS'], example: { hanzi: '超級好吃！', korean: '완전 맛있어!' } },
      { hanzi: '集中', zhuyin: 'ㄐㄧˊ ㄓㄨㄥ', pinyin: 'jízhōng', korean: '집중하다', pos: '동사', hsk: 4, tags: ['회화', '업무'], example: { hanzi: '我要集中精神。', korean: '정신 집중해야 해요.' } }
    ],
    practice: [
      {
        prompt: 'Yuna가 "幫我整理台灣網紅的再合作清單" 이라고 부탁했을 때 답하기',
        modelAnswers: [
          { level: '간단', hanzi: '好的，我來整理。', pinyin: 'hǎode, wǒ lái zhěnglǐ.', korean: '네, 제가 정리할게요.' },
          { level: '자연스러움', hanzi: '好唷～我先把口碑好的網紅列出來，再加上 PPL 推薦清單給你。', pinyin: 'hǎo yo~ wǒ xiān bǎ kǒubēi hǎo de wǎnghóng liè chūlái, zài jiāshàng PPL tuījiàn qīngdān gěi nǐ.', korean: '좋아요~ 평판 좋은 인플루언서 먼저 뽑고, PPL 추천 리스트도 추가해서 드릴게요.' }
        ]
      },
      {
        prompt: '바빠서 잠깐 자리 비운다고 동료에게 캐주얼하게 알리기',
        modelAnswers: [
          { level: '자연스러움', hanzi: '我等等要去接人，現在超級忙，晚點回你!!', pinyin: 'wǒ děngděng yào qù jiē rén, xiànzài chāojí máng, wǎndiǎn huí nǐ!!', korean: '저 이따 누구 데리러 가야 해서 지금 완전 바빠요, 좀 있다 답할게요!!' }
        ]
      }
    ]
  },

  // ============================================================
  // L11 — 대만식 일정 조율 어조사 (인박스 2026-05-26)
  // ============================================================
  {
    id: 'L11',
    title: '대만식 일정 조율 — 好挖~可以唷~',
    subtitle: '挖/唷 귀여운 어조사 + 부드러운 지연 제안',
    source: 'Inbox (2026-05-26 Slack)',
    type: 'casual_work_chat',
    difficulty: 'A2-B1',
    date: '2026-05-26',
    fullText: '好挖~ 可以唷~但可能要等七月可以嗎~',
    koreanSummary: '좋아요~ 가능해요~ 근데 아마 7월까지 기다려야 할 수도 있는데 괜찮을까요~',
    sentences: [
      {
        id: 1,
        hanzi: '好挖~ 可以唷~',
        zhuyin: 'ㄏㄠˇ ㄨㄚ ㄎㄜˇ ㄧˇ ㄛ',
        pinyin: 'hǎo wa~ kěyǐ yo~',
        korean: '좋아요~ 가능해요~',
        wordBreak: '好(좋다) | 挖(=哇, 대만식 어조사) | 可以(가능하다) | 唷(대만식 친근 어조사)',
        keyPattern: '「挖」(哇)·「唷」= 대만 여성들이 자주 쓰는 귀엽고 부드러운 문장 끝 어조사. 같은 "좋아요"도 톤이 훨씬 친근해짐'
      },
      {
        id: 2,
        hanzi: '但可能要等七月可以嗎~',
        zhuyin: 'ㄉㄢˋ ㄎㄜˇ ㄋㄥˊ ㄧㄠˋ ㄉㄥˇ ㄑㄧ ㄩㄝˋ ㄎㄜˇ ㄧˇ ㄇㄚ˙',
        pinyin: 'dàn kěnéng yào děng qīyuè kěyǐ ma~',
        korean: '근데 아마 7월까지 기다려야 할 수도 있는데 괜찮을까요~',
        wordBreak: '但(근데) | 可能(아마·~일 수도) | 要等(기다려야) | 七月(7월) | 可以嗎(괜찮을까요?)',
        keyPattern: '「但可能要~，可以嗎?」= 부드럽게 지연·조건 거는 공식. 단정 X, 상대 의향 물으며 완곡하게 ("~해야 할 수도 있는데 괜찮으세요?")'
      }
    ],
    vocab: [
      { hanzi: '挖', zhuyin: 'ㄨㄚ', pinyin: 'wa', korean: '~요~ (哇의 변형, 대만식 친근 어조사)', pos: '어조사', hsk: '대만식', tags: ['대만식', '회화', '필수'], example: { hanzi: '好挖～我知道了！', korean: '좋아요~ 알겠어요!' } },
      { hanzi: '唷', zhuyin: 'ㄛ', pinyin: 'yo', korean: '~요~ (부드럽고 귀여운 대만식 어조사)', pos: '어조사', hsk: '대만식', tags: ['대만식', '회화', '필수'], example: { hanzi: '可以唷～沒問題！', korean: '가능해요~ 문제없어요!' } },
      { hanzi: '可以', zhuyin: 'ㄎㄜˇ ㄧˇ', pinyin: 'kěyǐ', korean: '가능하다, 괜찮다', pos: '조동사', hsk: 2, tags: ['회화', '필수'], example: { hanzi: '這樣可以嗎？', korean: '이렇게 해도 될까요?' } },
      { hanzi: '但', zhuyin: 'ㄉㄢˋ', pinyin: 'dàn', korean: '근데, 하지만 (=但是)', pos: '접속사', hsk: 2, tags: ['회화', '필수'], example: { hanzi: '可以，但要等一下。', korean: '가능한데, 좀 기다려야 해요.' } },
      { hanzi: '可能', zhuyin: 'ㄎㄜˇ ㄋㄥˊ', pinyin: 'kěnéng', korean: '아마, ~일 수도 있다', pos: '부사·형용사', hsk: 3, tags: ['회화', '필수'], example: { hanzi: '可能要下週才行。', korean: '아마 다음주나 돼야 할 것 같아요.' } },
      { hanzi: '等', zhuyin: 'ㄉㄥˇ', pinyin: 'děng', korean: '기다리다', pos: '동사', hsk: 2, tags: ['회화', '필수'], example: { hanzi: '請等我一下。', korean: '잠깐만 기다려 주세요.' } }
    ],
    practice: [
      {
        prompt: '협력사가 6월 협업을 요청했는데 7월로 미뤄야 할 때 부드럽게 답하기',
        modelAnswers: [
          { level: '간단', hanzi: '可以唷～但可能要等七月。', pinyin: 'kěyǐ yo~ dàn kěnéng yào děng qīyuè.', korean: '가능해요~ 근데 7월까지 기다려야 할 수도 있어요.' },
          { level: '자연스러움', hanzi: '好挖～這個我們很有興趣！但檔期可能要排到七月，這樣可以嗎～', pinyin: 'hǎo wa~ zhège wǒmen hěn yǒu xìngqù! dàn dàngqí kěnéng yào páidào qīyuè, zhèyàng kěyǐ ma~', korean: '좋아요~ 이거 저희 관심 많아요! 근데 일정이 7월로 잡힐 수도 있는데 괜찮을까요~' }
        ]
      }
    ]
  },

  // ============================================================
  // L12 — 협업 문의 정중 답변 (인박스 2026-05-26)
  // ============================================================
  {
    id: 'L12',
    title: '협업 문의 정중 답변 — 請問是什麼方面的合作呢?',
    subtitle: '정중한 문의·확인 + 報價 제안',
    source: 'Inbox (2026-05-26 Slack)',
    type: 'business_email_terms',
    difficulty: 'B1',
    date: '2026-05-26',
    fullText: '請問是什麼方面的合作呢？是想詢問目前新的公司有什麼合作機會嗎？是醫美診所合作嗎～那我這邊先報價給您嗎？',
    koreanSummary: '어떤 방면의 협업일까요? 지금 새 회사에 어떤 협업 기회가 있는지 문의하시는 건가요? 의료미용 클리닉 협업인가요~ 그럼 제가 먼저 견적 드릴까요?',
    sentences: [
      {
        id: 1,
        hanzi: '請問是什麼方面的合作呢？',
        zhuyin: 'ㄑㄧㄥˇ ㄨㄣˋ ㄕˋ ㄕㄣˊ ㄇㄜ˙ ㄈㄤ ㄇㄧㄢˋ ㄉㄜ˙ ㄏㄜˊ ㄗㄨㄛˋ ㄋㄜ˙',
        pinyin: 'qǐngwèn shì shénme fāngmiàn de hézuò ne?',
        korean: '어떤 방면의 협업일까요?',
        wordBreak: '請問(여쭙겠습니다) | 什麼方面(어떤 방면·분야) | 合作(협업) | 呢(부드러운 질문 어조사)',
        keyPattern: '「請問是什麼~呢?」= 정중하게 되묻는 공식. 끝의 「呢」가 딱딱함을 덜어줌'
      },
      {
        id: 2,
        hanzi: '是想詢問目前新的公司有什麼合作機會嗎？',
        zhuyin: 'ㄕˋ ㄒㄧㄤˇ ㄒㄩㄣˊ ㄨㄣˋ ㄇㄨˋ ㄑㄧㄢˊ ㄒㄧㄣ ㄉㄜ˙ ㄍㄨㄥ ㄙ ㄧㄡˇ ㄕㄣˊ ㄇㄜ˙ ㄏㄜˊ ㄗㄨㄛˋ ㄐㄧ ㄏㄨㄟˋ ㄇㄚ˙',
        pinyin: 'shì xiǎng xúnwèn mùqián xīn de gōngsī yǒu shénme hézuò jīhuì ma?',
        korean: '지금 새 회사에 어떤 협업 기회가 있는지 문의하시는 건가요?',
        wordBreak: '想詢問(문의하시려는) | 目前(현재) | 新的公司(새 회사) | 合作機會(협업 기회) | 嗎(질문)',
        keyPattern: '「是想 + 동사 + 嗎?」= 상대 의도를 확인하는 정중 표현 ("~하시려는 건가요?"). 詢問 = 询问의 번체, 격식 "문의"'
      },
      {
        id: 3,
        hanzi: '是醫美診所合作嗎～那我這邊先報價給您嗎？',
        zhuyin: 'ㄕˋ ㄧ ㄇㄟˇ ㄓㄣˇ ㄙㄨㄛˇ ㄏㄜˊ ㄗㄨㄛˋ ㄇㄚ˙ ㄋㄚˋ ㄨㄛˇ ㄓㄜˋ ㄅㄧㄢ ㄒㄧㄢ ㄅㄠˋ ㄐㄧㄚˋ ㄍㄟˇ ㄋㄧㄣˊ ㄇㄚ˙',
        pinyin: 'shì yīměi zhěnsuǒ hézuò ma~ nà wǒ zhèbiān xiān bàojià gěi nín ma?',
        korean: '의료미용 클리닉 협업인가요~ 그럼 제가 먼저 견적 드릴까요?',
        wordBreak: '醫美診所(의료미용 클리닉) | 那(그럼) | 我這邊(제 쪽에서) | 先(먼저) | 報價給您(견적 드리다)',
        keyPattern: '「那我這邊先 ~ 給您嗎?」= "그럼 제 쪽에서 먼저 ~해드릴까요?" — 능동적이고 정중한 비즈니스 제안. 협업 협상에서 매우 자주'
      }
    ],
    vocab: [
      { hanzi: '請問', zhuyin: 'ㄑㄧㄥˇ ㄨㄣˋ', pinyin: 'qǐngwèn', korean: '여쭙겠습니다, 실례지만', pos: '동사', hsk: 1, tags: ['업무', '이메일', '필수'], example: { hanzi: '請問您貴姓？', korean: '성함이 어떻게 되세요?' } },
      { hanzi: '方面', zhuyin: 'ㄈㄤ ㄇㄧㄢˋ', pinyin: 'fāngmiàn', korean: '방면, 분야, 측면', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '哪方面的合作？', korean: '어떤 방면의 협업이요?' } },
      { hanzi: '詢問', zhuyin: 'ㄒㄩㄣˊ ㄨㄣˋ', pinyin: 'xúnwèn', korean: '문의하다 (격식)', pos: '동사', hsk: 5, tags: ['업무', '이메일', '필수'], example: { hanzi: '想跟您詢問報價。', korean: '견적 문의드리고 싶어요.' } },
      { hanzi: '目前', zhuyin: 'ㄇㄨˋ ㄑㄧㄢˊ', pinyin: 'mùqián', korean: '현재, 지금', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '目前還在洽談中。', korean: '현재 아직 협의 중이에요.' } },
      { hanzi: '機會', zhuyin: 'ㄐㄧ ㄏㄨㄟˋ', pinyin: 'jīhuì', korean: '기회', pos: '명사', hsk: 3, tags: ['업무', '필수'], example: { hanzi: '希望有合作的機會。', korean: '협업 기회가 있길 바라요.' } },
      { hanzi: '醫美診所', zhuyin: 'ㄧ ㄇㄟˇ ㄓㄣˇ ㄙㄨㄛˇ', pinyin: 'yīměi zhěnsuǒ', korean: '의료미용 클리닉', pos: '명사', hsk: '업계', tags: ['업계', '필수', '의료'], example: { hanzi: '我們合作的醫美診所很多。', korean: '저희가 협업하는 의료미용 클리닉이 많아요.' } },
      { hanzi: '診所', zhuyin: 'ㄓㄣˇ ㄙㄨㄛˇ', pinyin: 'zhěnsuǒ', korean: '클리닉, 의원', pos: '명사', hsk: '업계', tags: ['업계', '의료'], example: { hanzi: '這家診所在台北。', korean: '이 클리닉은 타이베이에 있어요.' } },
      { hanzi: '這邊', zhuyin: 'ㄓㄜˋ ㄅㄧㄢ', pinyin: 'zhèbiān', korean: '이쪽, 제 쪽 (=這裡, 대만 빈출)', pos: '명사', hsk: 2, tags: ['회화', '대만식', '필수'], example: { hanzi: '我這邊處理一下。', korean: '제 쪽에서 좀 처리할게요.' } },
      { hanzi: '報價', zhuyin: 'ㄅㄠˋ ㄐㄧㄚˋ', pinyin: 'bàojià', korean: '견적, 견적 내다', pos: '명사·동사', hsk: '업계', tags: ['업무', '필수', '인플루언서'], example: { hanzi: '我先報價給您。', korean: '먼저 견적 드릴게요.' } },
      { hanzi: '呢', zhuyin: 'ㄋㄜ˙', pinyin: 'ne', korean: '~요? (부드러운 질문 어조사)', pos: '어조사', hsk: 2, tags: ['회화', '필수'], example: { hanzi: '你覺得呢？', korean: '어떻게 생각하세요?' } }
    ],
    practice: [
      {
        prompt: '협력사가 막연하게 "想跟你們合作" 라고만 했을 때, 어떤 협업인지 정중하게 되묻기',
        modelAnswers: [
          { level: '간단', hanzi: '請問是什麼方面的合作呢？', pinyin: 'qǐngwèn shì shénme fāngmiàn de hézuò ne?', korean: '어떤 방면의 협업일까요?' },
          { level: '자연스러움', hanzi: '謝謝您的來信！請問是什麼方面的合作呢？是醫美診所還是品牌的合作？', pinyin: 'xièxiè nín de láixìn! qǐngwèn shì shénme fāngmiàn de hézuò ne? shì yīměi zhěnsuǒ háishì pǐnpái de hézuò?', korean: '연락 감사해요! 어떤 방면의 협업일까요? 의료미용 클리닉인가요 아니면 브랜드 협업인가요?' }
        ]
      },
      {
        prompt: '협업 내용 파악 후 먼저 견적을 제안하기',
        modelAnswers: [
          { level: '자연스러움', hanzi: '了解～那我這邊先報價給您，您再看看是否合適？', pinyin: 'liǎojiě~ nà wǒ zhèbiān xiān bàojià gěi nín, nín zài kànkan shìfǒu héshì?', korean: '알겠어요~ 그럼 제가 먼저 견적 드릴 테니, 적합한지 보시겠어요?' }
        ]
      }
    ]
  },

  // ============================================================
  // L13 — 韓國 醫美 클리닉 SNS 카피 (인박스 2026-05-27)
  // ============================================================
  {
    id: 'L13',
    title: '醫美 클리닉 SNS 카피 — 開幕活動延長 안내',
    subtitle: '한국 의사가 대만 고객 대상으로 올린 마케팅 카피',
    source: 'Inbox (2026-05-27 — 클리닉 IG/小紅書 톤)',
    type: 'casual_speech',
    difficulty: 'B1',
    date: '2026-05-27',
    fullText: '被大家說服了，開幕活動延長到 5 月。希望能用合理透明的價格，讓更多人輕鬆體驗專業又安全的療程。而我的終極目標是…有一天到台灣開一間診所。',
    koreanSummary: '여러분들 설득으로 개업 행사 5월까지 연장합니다. 합리적이고 투명한 가격으로 더 많은 분이 안전하고 전문적인 시술을 편하게 경험하셨으면 좋겠어요. 제 궁극의 목표는… 언젠가 대만에 클리닉을 여는 것!',
    sentences: [
      {
        id: 1,
        hanzi: '被大家說服了，開幕活動延長到 5 月',
        zhuyin: 'ㄅㄟˋ ㄉㄚˋ ㄐㄧㄚ ㄕㄨㄛ ㄈㄨˊ ㄌㄜ˙ ㄎㄞ ㄇㄨˋ ㄏㄨㄛˊ ㄉㄨㄥˋ ㄧㄢˊ ㄔㄤˊ ㄉㄠˋ ㄨㄩˇ ㄩㄝˋ',
        pinyin: 'bèi dàjiā shuōfú le, kāimù huódòng yáncháng dào wǔ yuè',
        korean: '여러분들에게 설득당했어요, 개업 행사 5월까지 연장합니다',
        wordBreak: '被(피동·~당하다) | 大家(모두) | 說服(설득하다) | 開幕(개업·오픈) | 活動(이벤트) | 延長(연장) | 到(~까지)',
        keyPattern: '「被 + 행위자 + 동사」= 피동 구조. "被大家說服了" = "여러분에게 설득당했어요" → 부드러운 양보·결정 표현으로 마케팅에 자주'
      },
      {
        id: 2,
        hanzi: '希望能用合理透明的價格，讓更多人輕鬆體驗專業又安全的療程',
        zhuyin: 'ㄒㄧ ㄨㄤˋ ㄋㄥˊ ㄩㄥˋ ㄏㄜˊ ㄌㄧˇ ㄊㄡˋ ㄇㄧㄥˊ ㄉㄜ˙ ㄐㄧㄚˋ ㄍㄜˊ ㄖㄤˋ ㄍㄥˋ ㄉㄨㄛ ㄖㄣˊ ㄑㄧㄥ ㄙㄨㄥ ㄊㄧˇ ㄧㄢˋ ㄓㄨㄢ ㄧㄝˋ ㄧㄡˋ ㄢ ㄑㄩㄢˊ ㄉㄜ˙ ㄌㄧㄠˊ ㄔㄥˊ',
        pinyin: 'xīwàng néng yòng hélǐ tòumíng de jiàgé, ràng gèngduō rén qīngsōng tǐyàn zhuānyè yòu ānquán de liáochéng',
        korean: '합리적이고 투명한 가격으로 더 많은 분이 전문적이고 안전한 시술을 부담 없이 경험하셨으면 좋겠어요',
        wordBreak: '合理(합리적) | 透明(투명) | 價格(가격) | 讓(~하게 하다) | 輕鬆(편하게·가볍게) | 體驗(체험·경험) | 專業又安全(전문적이고 안전한) | 療程(시술 코스)',
        keyPattern: '「合理透明的價格」= 강남언니가 가장 강조하는 가치 키워드! 본인 마케팅 카피에 그대로 쓸 수 있는 황금 표현. 「療程」= 시술/치료 코스 (1회성 아닌 패키지·과정 느낌)'
      },
      {
        id: 3,
        hanzi: '而我的終極目標是…有一天到台灣開一間診所',
        zhuyin: 'ㄦˊ ㄨㄛˇ ㄉㄜ˙ ㄓㄨㄥ ㄐㄧˊ ㄇㄨˋ ㄅㄧㄠ ㄕˋ ㄧㄡˇ ㄧˋ ㄊㄧㄢ ㄉㄠˋ ㄊㄞˊ ㄨㄢ ㄎㄞ ㄧˋ ㄐㄧㄢ ㄓㄣˇ ㄙㄨㄛˇ',
        pinyin: 'ér wǒ de zhōngjí mùbiāo shì... yǒu yītiān dào Táiwān kāi yī jiān zhěnsuǒ',
        korean: '제 궁극의 목표는… 언젠가 대만에 클리닉을 하나 여는 것!',
        wordBreak: '而(그리고) | 終極目標(궁극의 목표) | 有一天(언젠가) | 開(열다·오픈하다) | 一間(하나·간 단위) | 診所(클리닉)',
        keyPattern: '「終極目標」= 궁극의 목표 (마케팅 글에서 비전 제시할 때). 「開一間診所」= 클리닉을 열다 — 양사 「間」으로 시설 셈'
      }
    ],
    vocab: [
      { hanzi: '開幕', zhuyin: 'ㄎㄞ ㄇㄨˋ', pinyin: 'kāimù', korean: '개업, 오픈', pos: '동사·명사', hsk: 5, tags: ['업무', '필수', '의료'], example: { hanzi: '我們上週開幕。', korean: '저희 지난주에 오픈했어요.' } },
      { hanzi: '活動', zhuyin: 'ㄏㄨㄛˊ ㄉㄨㄥˋ', pinyin: 'huódòng', korean: '이벤트, 행사', pos: '명사', hsk: 3, tags: ['업무', '필수'], example: { hanzi: '這次活動效果很好。', korean: '이번 행사 효과 좋아요.' } },
      { hanzi: '延長', zhuyin: 'ㄧㄢˊ ㄔㄤˊ', pinyin: 'yáncháng', korean: '연장하다', pos: '동사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '活動延長一週。', korean: '이벤트 1주 연장.' } },
      { hanzi: '說服', zhuyin: 'ㄕㄨㄛ ㄈㄨˊ', pinyin: 'shuōfú', korean: '설득하다', pos: '동사', hsk: 5, tags: ['업무'], example: { hanzi: '我被他說服了。', korean: '그한테 설득당했어요.' } },
      { hanzi: '合理', zhuyin: 'ㄏㄜˊ ㄌㄧˇ', pinyin: 'hélǐ', korean: '합리적이다', pos: '형용사', hsk: 4, tags: ['업무', '필수', '의료'], example: { hanzi: '價格很合理。', korean: '가격이 합리적이에요.' } },
      { hanzi: '透明', zhuyin: 'ㄊㄡˋ ㄇㄧㄥˊ', pinyin: 'tòumíng', korean: '투명하다', pos: '형용사', hsk: 4, tags: ['업무', '필수', '의료'], example: { hanzi: '價格透明，沒有隱藏費用。', korean: '가격 투명, 숨겨진 비용 없음.' } },
      { hanzi: '體驗', zhuyin: 'ㄊㄧˇ ㄧㄢˋ', pinyin: 'tǐyàn', korean: '체험하다, 경험하다', pos: '동사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '免費體驗一次。', korean: '한번 무료 체험.' } },
      { hanzi: '療程', zhuyin: 'ㄌㄧㄠˊ ㄔㄥˊ', pinyin: 'liáochéng', korean: '시술 코스, 치료 과정', pos: '명사', hsk: '업계', tags: ['업계', '필수', '의료'], example: { hanzi: '這個療程要做三次。', korean: '이 시술 코스는 3회 받아야 해요.' } },
      { hanzi: '重視', zhuyin: 'ㄓㄨㄥˋ ㄕˋ', pinyin: 'zhòngshì', korean: '중시하다', pos: '동사', hsk: 4, tags: ['업무'], example: { hanzi: '我們很重視顧客的意見。', korean: '저희는 고객 의견을 중시합니다.' } },
      { hanzi: '團隊', zhuyin: 'ㄊㄨㄢˊ ㄉㄨㄟˋ', pinyin: 'tuánduì', korean: '팀', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '我們的台灣團隊。', korean: '저희 대만 팀.' } },
      { hanzi: '安心', zhuyin: 'ㄢ ㄒㄧㄣ', pinyin: 'ānxīn', korean: '안심, 안심하다', pos: '형용사·동사', hsk: 4, tags: ['업무', '의료', '필수'], example: { hanzi: '請放心，我們很專業。', korean: '안심하세요, 저희 전문적입니다.' } },
      { hanzi: '終極目標', zhuyin: 'ㄓㄨㄥ ㄐㄧˊ ㄇㄨˋ ㄅㄧㄠ', pinyin: 'zhōngjí mùbiāo', korean: '궁극의 목표', pos: '명사', hsk: 5, tags: ['업무'], example: { hanzi: '我們的終極目標是讓台灣用戶滿意。', korean: '저희 궁극 목표는 대만 사용자 만족입니다.' } },
      { hanzi: '間', zhuyin: 'ㄐㄧㄢ', pinyin: 'jiān', korean: '~간 (방·점포·시설 양사)', pos: '양사', hsk: 2, tags: ['회화', '필수'], example: { hanzi: '一間咖啡廳。', korean: '카페 한 곳.' } }
    ],
    practice: [
      {
        prompt: '강남언니 마케팅 카피로 — 협력 클리닉의 가격 정책을 한 줄로 강조',
        modelAnswers: [
          { level: '간단', hanzi: '價格合理透明，安心預約。', pinyin: 'jiàgé hélǐ tòumíng, ānxīn yùyuē.', korean: '가격 합리·투명, 안심 예약.' },
          { level: '자연스러움', hanzi: '我們用合理透明的價格，讓您輕鬆體驗安全的療程！', pinyin: 'wǒmen yòng hélǐ tòumíng de jiàgé, ràng nín qīngsōng tǐyàn ānquán de liáochéng!', korean: '저희는 합리적·투명한 가격으로, 안전한 시술을 부담 없이 경험하실 수 있도록 해드려요!' }
        ]
      }
    ]
  },

  // ============================================================
  // L14 — 醫美 사전조사 인플루언서 톤 (인박스 2026-05-27)
  // ============================================================
  {
    id: 'L14',
    title: '醫美 사전조사 인플루언서 톤 — 不踩雷清單',
    subtitle: '대만 소비자가 한국 의료미용 가기 전 검색·조사하는 톤. 타겟 페르소나 언어 폭격',
    source: 'Inbox (2026-05-27 — 인플루언서 캡션 3건 통합)',
    type: 'vocab_burst',
    difficulty: 'B1',
    date: '2026-05-27',
    fullText: 'J人出品直接抄！韓國會懲罰不做攻略的人。整理出這份韓國醫美「不踩雷清單」。共同條件: 1:1面診/非流水線/紅標皮膚科專門。8月要飛首爾體驗第一次醫美，想要聽聽水水們的心得、建議。',
    koreanSummary: 'J 인간이 만든 거 그대로 베끼세요! 한국은 조사 안 하는 사람을 벌해요. 한국 의료미용 "지뢰 안 밟는 리스트" 정리. 공통 조건: 1:1 면진/유수식 X/적색 표시 피부과 전문의. 8월 서울 가서 첫 의료미용 체험하려고요, 언니들 후기·조언 듣고 싶어요.',
    sentences: [
      {
        id: 1,
        hanzi: 'J人出品直接抄！韓國會懲罰不做攻略的人',
        zhuyin: 'ㄖㄣˊ ㄔㄨ ㄆㄧㄣˇ ㄓˊ ㄐㄧㄝ ㄔㄠ ㄏㄢˊ ㄍㄨㄛˊ ㄏㄨㄟˋ ㄔㄥˊ ㄈㄚˊ ㄅㄨˋ ㄗㄨㄛˋ ㄍㄨㄥ ㄌㄩㄝˋ ㄉㄜ˙ ㄖㄣˊ',
        pinyin: 'J rén chūpǐn zhíjiē chāo! Hánguó huì chéngfá bú zuò gōnglüè de rén',
        korean: 'J 인간이 만든 거 그대로 베끼세요! 한국은 (여행) 조사 안 하는 사람을 벌해요',
        wordBreak: 'J人(MBTI J 인간) | 出品(작품·만든 것) | 直接抄(그대로 베끼다) | 懲罰(벌하다) | 攻略(공략·여행 조사)',
        keyPattern: '「J人 / 攻略」= 대만 인플루언서 슬랭. MBTI J 타입 = 계획 철저한 사람. 攻略 = 게임에서 온 말로 "철저한 사전조사". "韓國會懲罰不做攻略的人" = 한국 여행 인플들의 밈'
      },
      {
        id: 2,
        hanzi: '整理出這份韓國醫美「不踩雷清單」',
        zhuyin: 'ㄓㄥˇ ㄌㄧˇ ㄔㄨ ㄓㄜˋ ㄈㄣˋ ㄏㄢˊ ㄍㄨㄛˊ ㄧ ㄇㄟˇ ㄅㄨˋ ㄘㄞˇ ㄌㄟˊ ㄑㄧㄥ ㄉㄢ',
        pinyin: 'zhěnglǐ chū zhè fèn Hánguó yīměi "bù cǎiléi qīngdān"',
        korean: '이 한국 의료미용 "지뢰 안 밟는 리스트" 정리했어요',
        wordBreak: '整理(정리하다) | 這份(이) | 不踩雷(지뢰 안 밟다) | 清單(리스트)',
        keyPattern: '「不踩雷清單」= 대만 소비자 검색어 No.1! 지뢰(雷=실패작) 안 밟는 안전 리스트. 본인 콘텐츠 마케팅에 필수 키워드 ⭐⭐'
      },
      {
        id: 3,
        hanzi: '共同條件: 1:1面診/非流水線/紅標皮膚科專門',
        zhuyin: 'ㄍㄨㄥˋ ㄊㄨㄥˊ ㄊㄧㄠˊ ㄐㄧㄢˋ ㄇㄧㄢˋ ㄓㄣˇ ㄈㄟ ㄌㄧㄡˊ ㄕㄨㄟˇ ㄒㄧㄢˋ ㄏㄨㄥˊ ㄅㄧㄠ ㄆㄧˊ ㄈㄨ ㄎㄜ ㄓㄨㄢ ㄇㄣˊ',
        pinyin: 'gòngtóng tiáojiàn: yī duì yī miànzhěn / fēi liúshuǐxiàn / hóngbiāo pífūkē zhuānmén',
        korean: '공통 조건: 1:1 면진 / 유수식(공장식) X / 적색 표시 피부과 전문의',
        wordBreak: '共同條件(공통 조건) | 1:1面診(1:1 면진·대면 진료) | 非流水線(유수식 아님·공장식 X) | 紅標(적색 표시·전문의 인증) | 皮膚科專門(피부과 전문)',
        keyPattern: '대만 타겟의 3대 클리닉 선정 기준! 「面診」= 의사와 직접 상담, 「流水線」= 컨베이어식 진료(부정적), 「紅標」= 한국 전문의 마크. 본인 콘텐츠 키워드 ⭐'
      },
      {
        id: 4,
        hanzi: '8月要飛首爾體驗第一次醫美，想要聽聽水水們的心得、建議',
        zhuyin: 'ㄩㄝˋ ㄧㄠˋ ㄈㄟ ㄕㄡˇ ㄦˇ ㄊㄧˇ ㄧㄢˋ ㄉㄧˋ ㄧ ㄘˋ ㄧ ㄇㄟˇ ㄒㄧㄤˇ ㄧㄠˋ ㄊㄧㄥ ㄕㄨㄟˇ ㄕㄨㄟˇ ㄇㄣ˙ ㄉㄜ˙ ㄒㄧㄣ ㄉㄜˊ ㄐㄧㄢˋ ㄧˋ',
        pinyin: '8 yuè yào fēi Shǒu\'ěr tǐyàn dì-yī cì yīměi, xiǎngyào tīngting shuǐshuǐmen de xīndé, jiànyì',
        korean: '8월에 서울 가서 첫 의료미용 체험하려고요, 언니들의 후기·조언 듣고 싶어요',
        wordBreak: '飛(비행기로 가다) | 首爾(서울) | 第一次(처음) | 水水們(언니들·예쁜 친구들·인플 슬랭) | 心得(후기·소감) | 建議(조언)',
        keyPattern: '「水水們」= 인플루언서가 여성 팔로워 부르는 호칭 (姐妹們과 유사하지만 더 인터넷적). 「飛+도시」= "~로 비행기 타고 가다" 캐주얼. 「心得」= 체험 후기'
      }
    ],
    vocab: [
      { hanzi: '攻略', zhuyin: 'ㄍㄨㄥ ㄌㄩㄝˋ', pinyin: 'gōnglüè', korean: '공략, 사전 조사, 가이드', pos: '명사·동사', hsk: '구어', tags: ['SNS', '회화', '필수'], example: { hanzi: '我做了完整的首爾攻略。', korean: '서울 가이드 완전판 만들었어요.' } },
      { hanzi: '不踩雷', zhuyin: 'ㄅㄨˋ ㄘㄞˇ ㄌㄟˊ', pinyin: 'bù cǎiléi', korean: '지뢰 안 밟다, 실패 없는', pos: '구어 표현', hsk: '대만식', tags: ['SNS', '대만식', '필수', '인플루언서'], example: { hanzi: '保證不踩雷！', korean: '실패 없는 거 보장!' } },
      { hanzi: '清單', zhuyin: 'ㄑㄧㄥ ㄉㄢ', pinyin: 'qīngdān', korean: '리스트', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '推薦清單。', korean: '추천 리스트.' } },
      { hanzi: 'J人', zhuyin: 'ㄖㄣˊ', pinyin: 'J rén', korean: 'MBTI J 타입 인간 (계획·체계적)', pos: '명사', hsk: '구어', tags: ['SNS', '대만식'], example: { hanzi: '我是大J人，超愛做計畫。', korean: '저 완전 J인간, 계획 짜는 거 너무 좋아함.' } },
      { hanzi: '面診', zhuyin: 'ㄇㄧㄢˋ ㄓㄣˇ', pinyin: 'miànzhěn', korean: '대면 진료, 면진', pos: '명사·동사', hsk: '업계', tags: ['업계', '의료', '필수'], example: { hanzi: '建議先做面診。', korean: '먼저 면진 받으시는 거 추천.' } },
      { hanzi: '流水線', zhuyin: 'ㄌㄧㄡˊ ㄕㄨㄟˇ ㄒㄧㄢˋ', pinyin: 'liúshuǐxiàn', korean: '유수식, 공장식 (부정적)', pos: '명사', hsk: '업계', tags: ['업계', '의료'], example: { hanzi: '不要選流水線診所。', korean: '공장식 클리닉은 피하세요.' } },
      { hanzi: '紅標', zhuyin: 'ㄏㄨㄥˊ ㄅㄧㄠ', pinyin: 'hóngbiāo', korean: '적색 표시 (한국 전문의 인증)', pos: '명사', hsk: '업계', tags: ['업계', '의료', '필수'], example: { hanzi: '一定要找紅標皮膚科。', korean: '꼭 적색 표시 피부과 찾으세요.' } },
      { hanzi: '皮膚科', zhuyin: 'ㄆㄧˊ ㄈㄨ ㄎㄜ', pinyin: 'pífūkē', korean: '피부과', pos: '명사', hsk: '의료', tags: ['의료', '필수'], example: { hanzi: '我預約了皮膚科。', korean: '피부과 예약했어요.' } },
      { hanzi: '水水們', zhuyin: 'ㄕㄨㄟˇ ㄕㄨㄟˇ ㄇㄣ˙', pinyin: 'shuǐshuǐmen', korean: '언니들, 예쁜 친구들 (인플 호칭)', pos: '명사', hsk: '구어', tags: ['SNS', '대만식'], example: { hanzi: '水水們快來看！', korean: '언니들 빨리 보세요!' } },
      { hanzi: '心得', zhuyin: 'ㄒㄧㄣ ㄉㄜˊ', pinyin: 'xīndé', korean: '후기, 소감, 체험기', pos: '명사', hsk: 5, tags: ['SNS', '필수'], example: { hanzi: '分享我的醫美心得。', korean: '제 의료미용 후기 공유.' } },
      { hanzi: '黃金微針', zhuyin: 'ㄏㄨㄤˊ ㄐㄧㄣ ㄨㄟˊ ㄓㄣ', pinyin: 'huángjīn wēizhēn', korean: '골드 마이크로니들', pos: '명사', hsk: '업계', tags: ['업계', '의료', '필수'], example: { hanzi: '黃金微針很有效。', korean: '골드 마이크로니들 효과 좋아요.' } },
      { hanzi: '淚溝', zhuyin: 'ㄌㄟˋ ㄍㄡ', pinyin: 'lèigōu', korean: '눈물고랑', pos: '명사', hsk: '의료', tags: ['업계', '의료'], example: { hanzi: '想處理淚溝。', korean: '눈물고랑 처리하고 싶어요.' } },
      { hanzi: '填充', zhuyin: 'ㄊㄧㄢˊ ㄔㄨㄥ', pinyin: 'tiánchōng', korean: '필러, 충전', pos: '명사·동사', hsk: '의료', tags: ['업계', '의료', '필수'], example: { hanzi: '做淚溝填充。', korean: '눈물고랑 필러 시술.' } },
      { hanzi: '拉提', zhuyin: 'ㄌㄚ ㄊㄧˊ', pinyin: 'lātí', korean: '리프팅', pos: '명사', hsk: '의료', tags: ['업계', '의료'], example: { hanzi: '想做拉提。', korean: '리프팅 하고 싶어요.' } },
      { hanzi: '肉毒', zhuyin: 'ㄖㄡˋ ㄉㄨˊ', pinyin: 'ròudú', korean: '보톡스 (肉毒桿菌)', pos: '명사', hsk: '의료', tags: ['업계', '의료', '필수'], example: { hanzi: '打肉毒瘦小臉。', korean: '보톡스로 얼굴 슬림하게.' } }
    ],
    practice: [
      {
        prompt: '강남언니 콘텐츠로 — 본인 클리닉의 "不踩雷" 포인트 한 줄로 강조',
        modelAnswers: [
          { level: '간단', hanzi: '不踩雷！全部紅標皮膚科。', pinyin: 'bù cǎiléi! quánbù hóngbiāo pífūkē.', korean: '실패 없어요! 전부 적색 표시 피부과.' },
          { level: '자연스러움', hanzi: '水水們的不踩雷攻略！1:1面診、非流水線、全是紅標皮膚科 ✅', pinyin: 'shuǐshuǐmen de bù cǎiléi gōnglüè! yī duì yī miànzhěn, fēi liúshuǐxiàn, quán shì hóngbiāo pífūkē ✅', korean: '언니들의 실패 없는 가이드! 1:1 면진, 공장식 X, 전부 적색 표시 피부과 ✅' }
        ]
      }
    ]
  },

  // ============================================================
  // L15 — 광고 협업 일정·가격 협상 (인박스 2026-05-28)
  // ============================================================
  {
    id: 'L15',
    title: '광고 협업 일정·가격 협상 — 投廣/素材授權/報價',
    subtitle: '본인이 매일 협상할 광고 기간·가격·권리 표현',
    source: 'Inbox (2026-05-28 Slack — 내부 + 협력사 답변)',
    type: 'business_email_terms',
    difficulty: 'B1-B2',
    date: '2026-05-28',
    fullText: '你要投廣一個月+素材授權一個月對咪。我們6月追加三位人選。七月目前都可以安排喔！請問廣告主要幾個月呢？目前報價是一個月$500/六個月$1500，不可二次加工。',
    koreanSummary: '광고 1개월 + 소재 사용권 1개월 맞지? 6월에 3명 추가. 7월은 일정 다 가능해요! 광고주께서 몇 개월 원하시나요? 현재 견적은 1개월 $500 / 6개월 $1500, 재가공 불가.',
    sentences: [
      {
        id: 1,
        hanzi: '你要投廣一個月+素材授權一個月對咪',
        zhuyin: 'ㄋㄧˇ ㄧㄠˋ ㄊㄡˊ ㄍㄨㄤˇ ㄧˊ ㄍㄜ˙ ㄩㄝˋ ㄙㄨˋ ㄘㄞˊ ㄕㄡˋ ㄑㄩㄢˊ ㄧˊ ㄍㄜ˙ ㄩㄝˋ ㄉㄨㄟˋ ㄇㄧ˙',
        pinyin: 'nǐ yào tóuguǎng yī gè yuè + sùcái shòuquán yī gè yuè duì mi',
        korean: '광고 1개월 + 소재 사용권 1개월 맞지?',
        wordBreak: '投廣(광고 집행) | 一個月(1개월) | 素材(소재) | 授權(사용권 부여) | 對咪(맞지?·=對嗎 변형)',
        keyPattern: '「投廣 + 素材授權」= 인플루언서 협업의 두 축. 投廣=콘텐츠 광고 집행, 素材授權=광고용 영상·이미지 재사용 권리. 「對咪」= 對嗎의 캐주얼 변형, 동료끼리 친근 톤'
      },
      {
        id: 2,
        hanzi: '我們6月追加三位人選',
        zhuyin: 'ㄨㄛˇ ㄇㄣ˙ ㄩㄝˋ ㄓㄨㄟ ㄐㄧㄚ ㄙㄢ ㄨㄟˋ ㄖㄣˊ ㄒㄩㄢˇ',
        pinyin: 'wǒmen 6 yuè zhuījiā sān wèi rénxuǎn',
        korean: '저희 6월에 3명 추가합니다',
        wordBreak: '追加(추가) | 三位(3분·사람 양사) | 人選(후보·선정 인물)',
        keyPattern: '「追加 + N位 + 人選」= 협업 인플루언서 추가 공식. 人選 = "선정 대상자"로 협업 후보 의미'
      },
      {
        id: 3,
        hanzi: '七月目前都可以安排喔！請問廣告主要幾個月呢？',
        zhuyin: 'ㄑㄧ ㄩㄝˋ ㄇㄨˋ ㄑㄧㄢˊ ㄉㄡ ㄎㄜˇ ㄧˇ ㄢ ㄆㄞˊ ㄛ ㄑㄧㄥˇ ㄨㄣˋ ㄍㄨㄤˇ ㄍㄠˋ ㄓㄨˇ ㄧㄠˋ ㄐㄧˇ ㄍㄜ˙ ㄩㄝˋ ㄋㄜ˙',
        pinyin: 'qī yuè mùqián dōu kěyǐ ānpái o! qǐngwèn guǎnggào zhǔ yào jǐ ge yuè ne?',
        korean: '7월은 일정 다 가능해요! 광고주께서 몇 개월 원하시나요?',
        wordBreak: '目前(현재) | 都可以(다 가능) | 安排(일정 잡다) | 喔(어조사) | 廣告主(광고주) | 幾個月(몇 개월) | 呢(부드러운 질문)',
        keyPattern: '「目前都可以安排喔」= 가용성 친근 안내. 「廣告主」= 광고주 (협업 비용 지불 주체). 「廣告主要+기간」= 광고주가 ~기간 원하다'
      },
      {
        id: 4,
        hanzi: '目前報價是一個月$500/六個月$1500，不可二次加工',
        zhuyin: 'ㄇㄨˋ ㄑㄧㄢˊ ㄅㄠˋ ㄐㄧㄚˋ ㄕˋ ㄧˊ ㄍㄜ˙ ㄩㄝˋ ㄌㄧㄡˋ ㄍㄜ˙ ㄩㄝˋ ㄅㄨˋ ㄎㄜˇ ㄦˋ ㄘˋ ㄐㄧㄚ ㄍㄨㄥ',
        pinyin: 'mùqián bàojià shì yī gè yuè $500 / liù gè yuè $1500, bùkě èrcì jiāgōng',
        korean: '현재 견적은 1개월 $500 / 6개월 $1500, 재가공 불가입니다',
        wordBreak: '報價(견적) | 一個月/六個月(1개월/6개월) | 不可(불가) | 二次加工(재가공)',
        keyPattern: '「不可二次加工」= 영상·소재를 한 번 만든 후 재편집·재가공 금지 — 인플루언서 계약 표준 조항. 본인이 자주 명시할 표현 ⭐'
      }
    ],
    vocab: [
      { hanzi: '投廣', zhuyin: 'ㄊㄡˊ ㄍㄨㄤˇ', pinyin: 'tóuguǎng', korean: '광고 집행하다 (=投放廣告)', pos: '동사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '我們要投廣兩個月。', korean: '저희 2개월 광고 집행합니다.' } },
      { hanzi: '素材', zhuyin: 'ㄙㄨˋ ㄘㄞˊ', pinyin: 'sùcái', korean: '소재 (영상·이미지)', pos: '명사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '請提供素材。', korean: '소재 제공 부탁드려요.' } },
      { hanzi: '授權', zhuyin: 'ㄕㄡˋ ㄑㄩㄢˊ', pinyin: 'shòuquán', korean: '사용권 부여, 라이선스', pos: '명사·동사', hsk: 5, tags: ['업계', '계약', '필수'], example: { hanzi: '需要素材授權。', korean: '소재 사용권 필요해요.' } },
      { hanzi: '對咪', zhuyin: 'ㄉㄨㄟˋ ㄇㄧ˙', pinyin: 'duì mi', korean: '맞지? (對嗎의 친근 변형, 대만 동료체)', pos: '구어 표현', hsk: '대만식', tags: ['대만식', '회화'], example: { hanzi: '是這樣對咪？', korean: '이렇게 맞지?' } },
      { hanzi: '追加', zhuyin: 'ㄓㄨㄟ ㄐㄧㄚ', pinyin: 'zhuījiā', korean: '추가', pos: '동사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '追加兩位。', korean: '두 명 추가.' } },
      { hanzi: '人選', zhuyin: 'ㄖㄣˊ ㄒㄩㄢˇ', pinyin: 'rénxuǎn', korean: '후보, 선정 인물', pos: '명사', hsk: '업무', tags: ['업무', '필수', '인플루언서'], example: { hanzi: '這次的人選有三位。', korean: '이번 후보는 3명이에요.' } },
      { hanzi: '原始檔案', zhuyin: 'ㄩㄢˊ ㄕˇ ㄉㄤˋ ㄢˋ', pinyin: 'yuánshǐ dǎng\'àn', korean: '원본 파일', pos: '명사', hsk: '업계', tags: ['업계', '계약', '필수'], example: { hanzi: '需要原始檔案授權。', korean: '원본 파일 사용권 필요.' } },
      { hanzi: '投放', zhuyin: 'ㄊㄡˊ ㄈㄤˋ', pinyin: 'tóufàng', korean: '집행, 게재', pos: '동사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '投放預算。', korean: '집행 예산.' } },
      { hanzi: '廣告主', zhuyin: 'ㄍㄨㄤˇ ㄍㄠˋ ㄓㄨˇ', pinyin: 'guǎnggào zhǔ', korean: '광고주', pos: '명사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '廣告主想知道效果。', korean: '광고주께서 효과 궁금해 하세요.' } },
      { hanzi: '二次加工', zhuyin: 'ㄦˋ ㄘˋ ㄐㄧㄚ ㄍㄨㄥ', pinyin: 'èrcì jiāgōng', korean: '재가공, 2차 편집', pos: '명사·동사', hsk: '업계', tags: ['업계', '계약', '필수'], example: { hanzi: '影片不可二次加工。', korean: '영상 재가공 불가.' } },
      { hanzi: '安排', zhuyin: 'ㄢ ㄆㄞˊ', pinyin: 'ānpái', korean: '일정 잡다, 배정하다', pos: '동사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '幫您安排檔期。', korean: '일정 잡아드릴게요.' } }
    ],
    practice: [
      {
        prompt: '협력사가 "我們想做廣告投放，可以嗎?" 라고 물었을 때 견적 안내하기',
        modelAnswers: [
          { level: '자연스러움', hanzi: '可以唷～目前報價是投廣一個月 $500，六個月 $1500，包含素材授權但不可二次加工，請問需要幾個月呢？', pinyin: 'kěyǐ yo~ mùqián bàojià shì tóuguǎng yī gè yuè $500, liù gè yuè $1500, bāohán sùcái shòuquán dàn bùkě èrcì jiāgōng, qǐngwèn xūyào jǐ ge yuè ne?', korean: '가능해요~ 현재 견적은 광고 1개월 $500, 6개월 $1500, 소재 사용권 포함이지만 재가공은 불가에요. 몇 개월 필요하세요?' }
        ]
      }
    ]
  },

  // ============================================================
  // L16 — 광고 재제작 세부 안내 (인박스 2026-05-28)
  // ============================================================
  {
    id: 'L16',
    title: '광고 재제작 세부 안내 — 腳本/再製/直橫式',
    subtitle: '협력사에게 광고 재가공 정책 설명 — 기술 용어 무더기',
    source: 'Inbox (2026-05-28 Slack — 협력사 답변)',
    type: 'business_email_terms',
    difficulty: 'B2',
    date: '2026-05-28',
    fullText: '日程的部分我先抓一版，您看過腳本以後再幫我評估一下日程。再製不會更改創作者的內容，也不會另外加上字卡等等。目前廣告分成直式與橫式兩種種類，只會因應廣告形式修剪影片長度，比方說修改為 6 秒或 15 秒素材，另加上包框設計！',
    koreanSummary: '일정은 제가 먼저 한 판 잡아두고, 스크립트 보신 후에 일정 검토 부탁드려요. 재제작은 크리에이터 콘텐츠 변경 안 하고, 자막 카드 추가도 안 해요. 현재 광고는 세로형/가로형 두 종류로 나뉘고, 광고 형식에 맞춰 영상 길이만 자르고 (예: 6초, 15초 소재로 수정) 프레임 디자인 추가합니다!',
    sentences: [
      {
        id: 1,
        hanzi: '日程的部分我先抓一版，您看過腳本以後再幫我評估一下日程',
        zhuyin: 'ㄖˋ ㄔㄥˊ ㄉㄜ˙ ㄅㄨˋ ㄈㄣˋ ㄨㄛˇ ㄒㄧㄢ ㄓㄨㄚ ㄧˋ ㄅㄢˇ ㄋㄧㄣˊ ㄎㄢˋ ㄍㄨㄛˋ ㄐㄧㄠˇ ㄅㄣˇ ㄧˇ ㄏㄡˋ ㄗㄞˋ ㄅㄤ ㄨㄛˇ ㄆㄧㄥˊ ㄍㄨ ㄧˊ ㄒㄧㄚˋ',
        pinyin: 'rìchéng de bùfèn wǒ xiān zhuā yī bǎn, nín kànguò jiǎoběn yǐhòu zài bāng wǒ pínggū yīxià',
        korean: '일정은 제가 먼저 한 판 잡아두고, 스크립트 보신 후에 일정 검토 부탁드려요',
        wordBreak: '日程(일정) | 抓一版(한 판 잡다·초안 만들다) | 腳本(스크립트) | 評估(평가·검토)',
        keyPattern: '「抓一版」= 캐주얼 비즈니스 표현 "초안 한 번 잡다". 「您看過 + N + 以後再~」= "~보신 후에 ~해주세요" 정중 요청 구조'
      },
      {
        id: 2,
        hanzi: '再製不會更改創作者的內容，也不會另外加上字卡等等',
        zhuyin: 'ㄗㄞˋ ㄓˋ ㄅㄨˊ ㄏㄨㄟˋ ㄍㄥ ㄍㄞˇ ㄔㄨㄤˋ ㄗㄨㄛˋ ㄓㄜˇ ㄉㄜ˙ ㄋㄟˋ ㄖㄨㄥˊ ㄧㄝˇ ㄅㄨˊ ㄏㄨㄟˋ ㄌㄧㄥˋ ㄨㄞˋ ㄐㄧㄚ ㄕㄤˋ ㄗˋ ㄎㄚˇ ㄉㄥˇ ㄉㄥˇ',
        pinyin: 'zàizhì búhuì gēnggǎi chuàngzuòzhě de nèiróng, yě búhuì lìngwài jiāshàng zìkǎ děngděng',
        korean: '재제작은 크리에이터 콘텐츠를 변경하지 않고, 자막 카드 같은 것도 추가로 넣지 않아요',
        wordBreak: '再製(재제작) | 不會(~하지 않음) | 更改(변경하다) | 創作者(크리에이터) | 內容(콘텐츠) | 另外(별도로) | 字卡(텍스트 자막 카드)',
        keyPattern: '협력사 안심시키는 표현. 「不會 + 동사」를 반복해 "~안 함" 명확히 강조 — 인플루언서 권리 보호 표현 ⭐'
      },
      {
        id: 3,
        hanzi: '目前廣告分成直式與橫式兩種種類，只會因應廣告形式修剪影片長度',
        zhuyin: 'ㄇㄨˋ ㄑㄧㄢˊ ㄍㄨㄤˇ ㄍㄠˋ ㄈㄣ ㄔㄥˊ ㄓˊ ㄕˋ ㄩˇ ㄏㄥˊ ㄕˋ ㄌㄧㄤˇ ㄓㄨㄥˇ ㄓㄨㄥˇ ㄌㄟˋ ㄓˇ ㄏㄨㄟˋ ㄧㄣ ㄧㄥˋ ㄍㄨㄤˇ ㄍㄠˋ ㄒㄧㄥˊ ㄕˋ ㄒㄧㄡ ㄐㄧㄢˇ ㄧㄥˇ ㄆㄧㄢˋ ㄔㄤˊ ㄉㄨˋ',
        pinyin: 'mùqián guǎnggào fēnchéng zhíshì yǔ héngshì liǎng zhǒng zhǒnglèi, zhǐhuì yīnyìng guǎnggào xíngshì xiūjiǎn yǐngpiàn chángdù',
        korean: '현재 광고는 세로형과 가로형 두 종류로 나뉘며, 광고 형식에 맞춰 영상 길이만 자릅니다',
        wordBreak: '分成(나뉘다) | 直式(세로형) | 橫式(가로형) | 兩種種類(두 종류) | 只會(~만) | 因應(맞추다·대응) | 形式(형식) | 修剪(자르다·트리밍) | 長度(길이)',
        keyPattern: '「直式/橫式」= 인스타·유튜브 광고 표준 분류. 「因應 + N + 동사」= "~에 맞춰 ~하다" 격식 표현'
      },
      {
        id: 4,
        hanzi: '比方說修改為 6 秒或 15 秒素材，另加上包框設計',
        zhuyin: 'ㄅㄧˇ ㄈㄤ ㄕㄨㄛ ㄒㄧㄡ ㄍㄞˇ ㄨㄟˊ ㄇㄧㄠˇ ㄏㄨㄛˋ ㄇㄧㄠˇ ㄙㄨˋ ㄘㄞˊ ㄌㄧㄥˋ ㄐㄧㄚ ㄕㄤˋ ㄅㄠ ㄎㄨㄤ ㄕㄜˋ ㄐㄧˋ',
        pinyin: 'bǐfāng shuō xiūgǎi wéi 6 miǎo huò 15 miǎo sùcái, lìng jiāshàng bāokuāng shèjì',
        korean: '예를 들면 6초 또는 15초 소재로 수정하고, 프레임 디자인을 추가합니다',
        wordBreak: '比方說(예를 들면) | 修改(수정) | 為(~로) | 秒(초) | 或(또는) | 另(또한) | 包框設計(프레임 디자인)',
        keyPattern: '「比方說」= "예를 들면" 캐주얼 비즈니스. 「包框」= 영상 외곽 프레임 디자인 — 광고 시각 작업의 표준'
      }
    ],
    vocab: [
      { hanzi: '日程', zhuyin: 'ㄖˋ ㄔㄥˊ', pinyin: 'rìchéng', korean: '일정', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '日程已確認。', korean: '일정 확인 완료.' } },
      { hanzi: '腳本', zhuyin: 'ㄐㄧㄠˇ ㄅㄣˇ', pinyin: 'jiǎoběn', korean: '스크립트, 대본', pos: '명사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '請看腳本。', korean: '스크립트 봐주세요.' } },
      { hanzi: '評估', zhuyin: 'ㄆㄧㄥˊ ㄍㄨ', pinyin: 'pínggū', korean: '평가하다, 검토하다', pos: '동사', hsk: 5, tags: ['업무', '필수'], example: { hanzi: '請評估一下。', korean: '검토 부탁드려요.' } },
      { hanzi: '再製', zhuyin: 'ㄗㄞˋ ㄓˋ', pinyin: 'zàizhì', korean: '재제작, 재가공', pos: '동사·명사', hsk: '업계', tags: ['업계', '계약', '필수'], example: { hanzi: '再製費用另計。', korean: '재제작 비용 별도.' } },
      { hanzi: '更改', zhuyin: 'ㄍㄥ ㄍㄞˇ', pinyin: 'gēnggǎi', korean: '변경하다', pos: '동사', hsk: 4, tags: ['업무'], example: { hanzi: '不會更改內容。', korean: '내용 변경 안 합니다.' } },
      { hanzi: '創作者', zhuyin: 'ㄔㄨㄤˋ ㄗㄨㄛˋ ㄓㄜˇ', pinyin: 'chuàngzuòzhě', korean: '크리에이터, 창작자', pos: '명사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '尊重創作者的內容。', korean: '크리에이터 콘텐츠 존중.' } },
      { hanzi: '字卡', zhuyin: 'ㄗˋ ㄎㄚˇ', pinyin: 'zìkǎ', korean: '자막 카드, 텍스트 카드', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서'], example: { hanzi: '不另加字卡。', korean: '자막 카드 추가 안 함.' } },
      { hanzi: '直式', zhuyin: 'ㄓˊ ㄕˋ', pinyin: 'zhíshì', korean: '세로형', pos: '명사', hsk: '업계', tags: ['업계', 'SNS', '필수'], example: { hanzi: '直式廣告。', korean: '세로형 광고.' } },
      { hanzi: '橫式', zhuyin: 'ㄏㄥˊ ㄕˋ', pinyin: 'héngshì', korean: '가로형', pos: '명사', hsk: '업계', tags: ['업계', 'SNS', '필수'], example: { hanzi: '橫式比較適合 YT。', korean: '가로형이 유튜브에 더 적합해요.' } },
      { hanzi: '因應', zhuyin: 'ㄧㄣ ㄧㄥˋ', pinyin: 'yīnyìng', korean: '맞추다, 대응하다 (격식)', pos: '동사', hsk: 5, tags: ['이메일', '업무'], example: { hanzi: '因應市場需求。', korean: '시장 수요에 맞춰.' } },
      { hanzi: '修剪', zhuyin: 'ㄒㄧㄡ ㄐㄧㄢˇ', pinyin: 'xiūjiǎn', korean: '자르다, 트리밍하다', pos: '동사', hsk: '업계', tags: ['업계', '인플루언서'], example: { hanzi: '修剪影片長度。', korean: '영상 길이 자르기.' } },
      { hanzi: '比方說', zhuyin: 'ㄅㄧˇ ㄈㄤ ㄕㄨㄛ', pinyin: 'bǐfāng shuō', korean: '예를 들면', pos: '구', hsk: 4, tags: ['회화', '업무', '필수'], example: { hanzi: '比方說，下週三可以嗎？', korean: '예를 들면, 다음 주 수요일 가능할까요?' } },
      { hanzi: '包框設計', zhuyin: 'ㄅㄠ ㄎㄨㄤ ㄕㄜˋ ㄐㄧˋ', pinyin: 'bāokuāng shèjì', korean: '프레임 디자인', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서'], example: { hanzi: '加上包框設計。', korean: '프레임 디자인 추가.' } }
    ],
    practice: [
      {
        prompt: '협력사가 "再製會不會更改原本的內容?" 라고 걱정할 때 안심시키기',
        modelAnswers: [
          { level: '자연스러움', hanzi: '請放心～再製不會更改創作者的內容，也不會加字卡，只會因應廣告形式修剪長度，加上包框設計而已。', pinyin: 'qǐng fàngxīn~ zàizhì búhuì gēnggǎi chuàngzuòzhě de nèiróng, yě búhuì jiā zìkǎ, zhǐhuì yīnyìng guǎnggào xíngshì xiūjiǎn chángdù, jiāshàng bāokuāng shèjì éryǐ.', korean: '안심하세요~ 재제작은 크리에이터 콘텐츠 변경 안 하고, 자막 카드도 안 추가하고, 광고 형식에 맞춰 길이만 자르고 프레임 디자인 추가만 합니다.' }
        ]
      }
    ]
  },

  // ============================================================
  // L17 — Yuna 협력사 소개 인사말 ⭐⭐ (인박스 2026-05-28)
  // ============================================================
  {
    id: 'L17',
    title: 'Yuna 협력사 소개 인사말 ⭐⭐ — 본인 일상 템플릿',
    subtitle: 'Yuna가 본인 대신 협력사에 자기소개한 메시지 — 그대로 외워서 활용',
    source: 'Inbox (2026-05-28 — Yuna 발송)',
    type: 'business_email_intro',
    difficulty: 'B1',
    date: '2026-05-28',
    fullText: 'Hi!! 不好意思回覆晚了 我是 UNNI 的台灣行銷窗口 Yuna!! 接下來我也會一起協助 Enbi，所以中文溝通是沒問題的唷! 之前其實已經有寄信邀約過，但因為公司在台灣市場剛起步，初步跟內部提案沒有通過，但我與 Enbi 過去和有璟合作的經驗很好，還是很希望能有機會合作，所以再次聯絡了! 想說是不是能詢問看看 YT 影片置入的可能性。',
    koreanSummary: 'Hi!! 답신 늦어서 죄송해요. UNNI의 대만 마케팅 담당 Yuna입니다!! 앞으로 저도 Enbi와 함께 도울 거라서 중국어 소통은 문제없어요! 사실 전에 이메일로 협업 제안드린 적 있는데, 회사가 대만 시장에 막 진입한 시점이라 내부 제안이 통과 안 됐어요. 그런데 저와 Enbi가 예전에 有璟과 협업한 경험이 좋아서, 다시 한번 협업하고 싶어 연락드렸어요! 유튜브 영상 콘텐츠 노출 가능성 여쭤보고 싶어서요.',
    sentences: [
      {
        id: 1,
        hanzi: 'Hi!! 不好意思回覆晚了 我是 UNNI 的台灣行銷窗口 Yuna',
        zhuyin: 'ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ˙ ㄏㄨㄟˊ ㄈㄨˋ ㄨㄢˇ ㄌㄜ˙ ㄨㄛˇ ㄕˋ ㄉㄜ˙ ㄊㄞˊ ㄨㄢ ㄒㄧㄥˊ ㄒㄧㄠ ㄔㄨㄤ ㄎㄡˇ',
        pinyin: 'Hi!! bù hǎoyìsi huífù wǎn le, wǒ shì UNNI de Táiwān xíngxiāo chuāngkǒu Yuna',
        korean: 'Hi!! 답신 늦어서 죄송해요, UNNI의 대만 마케팅 담당 Yuna입니다',
        wordBreak: '不好意思(죄송합니다·캐주얼) | 回覆(답신·답장) | 晚(늦다) | 行銷(마케팅) | 窗口(담당자·창구)',
        keyPattern: '「不好意思 + 동사 + 了」= "~해서 죄송해요" 캐주얼 사과 공식. 「行銷窗口」= 마케팅 담당자 — 본인 자기소개에 그대로 쓸 ⭐ 핵심 표현'
      },
      {
        id: 2,
        hanzi: '接下來我也會一起協助 Enbi，所以中文溝通是沒問題的唷',
        zhuyin: 'ㄐㄧㄝ ㄒㄧㄚˋ ㄌㄞˊ ㄨㄛˇ ㄧㄝˇ ㄏㄨㄟˋ ㄧˋ ㄑㄧˇ ㄒㄧㄝˊ ㄓㄨˋ ㄙㄨㄛˇ ㄧˇ ㄓㄨㄥ ㄨㄣˊ ㄍㄡ ㄊㄨㄥ ㄕˋ ㄇㄟˊ ㄨㄣˋ ㄊㄧˊ ㄉㄜ˙ ㄛ',
        pinyin: 'jiē xiàlái wǒ yě huì yīqǐ xiézhù Enbi, suǒyǐ zhōngwén gōutōng shì méi wèntí de yo',
        korean: '앞으로 저도 Enbi와 함께 도울 거라서 중국어 소통은 문제없어요',
        wordBreak: '接下來(앞으로) | 一起(함께) | 協助(돕다·협조) | 溝通(소통) | 沒問題(문제없다) | 唷(친근 어조사)',
        keyPattern: '「接下來」= "앞으로/다음부터" 비즈니스 빈출. 「~是沒問題的唷」= 안심·확인 표현 (대만 친근 톤)'
      },
      {
        id: 3,
        hanzi: '之前其實已經有寄信邀約過，但因為公司在台灣市場剛起步，初步跟內部提案沒有通過',
        zhuyin: 'ㄓ ㄑㄧㄢˊ ㄑㄧˊ ㄕˊ ㄧˇ ㄐㄧㄥ ㄧㄡˇ ㄐㄧˋ ㄒㄧㄣˋ ㄧㄠ ㄩㄝ ㄍㄨㄛˋ ㄉㄢˋ ㄧㄣ ㄨㄟˋ ㄍㄨㄥ ㄙ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄕˋ ㄔㄤˇ ㄍㄤ ㄑㄧˇ ㄅㄨˋ ㄔㄨ ㄅㄨˋ ㄍㄣ ㄋㄟˋ ㄅㄨˋ ㄊㄧˊ ㄢˋ ㄇㄟˊ ㄧㄡˇ ㄊㄨㄥ ㄍㄨㄛˋ',
        pinyin: 'zhīqián qíshí yǐjīng yǒu jì xìn yāoyuē guò, dàn yīnwèi gōngsī zài Táiwān shìchǎng gāng qǐbù, chūbù gēn nèibù tí\'àn méiyǒu tōngguò',
        korean: '사실 전에 이메일로 협업 제안드린 적 있는데, 회사가 대만 시장에 막 진입한 단계라 내부 제안이 통과 안 됐어요',
        wordBreak: '之前(예전) | 其實(사실) | 寄信(이메일 보내다) | 邀約(제안) | 過(~한 적 있다) | 剛起步(막 시작·초기 단계) | 初步(초보·1차) | 內部提案(내부 제안) | 通過(통과)',
        keyPattern: '「動詞 + 過」= 경험 표현 "~한 적 있다". 「剛起步」= "막 시작 단계" — 신규 시장 진입 설명 시 부드러운 표현. 「內部提案沒有通過」= 본인이 자주 직면할 상황 그대로'
      },
      {
        id: 4,
        hanzi: '還是很希望能有機會合作，所以再次聯絡了',
        zhuyin: 'ㄏㄞˊ ㄕˋ ㄏㄣˇ ㄒㄧ ㄨㄤˋ ㄋㄥˊ ㄧㄡˇ ㄐㄧ ㄏㄨㄟˋ ㄏㄜˊ ㄗㄨㄛˋ ㄙㄨㄛˇ ㄧˇ ㄗㄞˋ ㄘˋ ㄌㄧㄢˊ ㄌㄨㄛˋ ㄌㄜ˙',
        pinyin: 'háishì hěn xīwàng néng yǒu jīhuì hézuò, suǒyǐ zàicì liánluò le',
        korean: '그래도 협업 기회가 있길 정말 바라서, 다시 한번 연락드렸어요',
        wordBreak: '還是(그래도·여전히) | 希望(희망) | 機會(기회) | 合作(협업) | 再次(다시) | 聯絡(연락)',
        keyPattern: '「還是很希望~，所以再次~了」= 재컨택 표준 공식. 거절·지연 후 다시 다가갈 때 부담 적게 만드는 톤 ⭐'
      },
      {
        id: 5,
        hanzi: '想說是不是能詢問看看 YT 影片置入的可能性',
        zhuyin: 'ㄒㄧㄤˇ ㄕㄨㄛ ㄕˋ ㄅㄨˊ ㄕˋ ㄋㄥˊ ㄒㄩㄣˊ ㄨㄣˋ ㄎㄢˋ ㄎㄢˋ ㄧㄥˇ ㄆㄧㄢˋ ㄓˋ ㄖㄨˋ ㄉㄜ˙ ㄎㄜˇ ㄋㄥˊ ㄒㄧㄥˋ',
        pinyin: 'xiǎngshuō shì bú shì néng xúnwèn kànkàn YT yǐngpiàn zhìrù de kěnéngxìng',
        korean: 'YT 영상 콘텐츠 노출 가능성 여쭤볼 수 있을까 해서요',
        wordBreak: '想說(생각하다·대만식) | 是不是能(~할 수 있을까) | 詢問看看(한번 문의해보다) | 影片(영상) | 置入(콘텐츠 노출·간접광고 형태) | 可能性(가능성)',
        keyPattern: '「想說是不是能~看看」= 매우 부드러운 제안 공식. 「置入」= PPL과 유사하지만 더 자연스러운 콘텐츠 통합 (YT/IG 콘텐츠 안에 녹이기)'
      }
    ],
    vocab: [
      { hanzi: '回覆', zhuyin: 'ㄏㄨㄟˊ ㄈㄨˋ', pinyin: 'huífù', korean: '답신, 답장', pos: '명사·동사', hsk: 4, tags: ['업무', '이메일', '필수'], example: { hanzi: '請協助回覆。', korean: '답신 부탁드립니다.' } },
      { hanzi: '行銷', zhuyin: 'ㄒㄧㄥˊ ㄒㄧㄠ', pinyin: 'xíngxiāo', korean: '마케팅 (대만, 본토 营销)', pos: '명사', hsk: '업계', tags: ['업무', '대만식', '필수'], example: { hanzi: '我是行銷團隊的。', korean: '저는 마케팅 팀 소속이에요.' } },
      { hanzi: '窗口', zhuyin: 'ㄔㄨㄤ ㄎㄡˇ', pinyin: 'chuāngkǒu', korean: '담당자, 창구', pos: '명사', hsk: '업무', tags: ['업무', '필수'], example: { hanzi: '我是窗口。', korean: '제가 담당자예요.' } },
      { hanzi: '協助', zhuyin: 'ㄒㄧㄝˊ ㄓㄨˋ', pinyin: 'xiézhù', korean: '돕다, 협조하다', pos: '동사', hsk: 4, tags: ['업무', '이메일', '필수'], example: { hanzi: '我會協助您。', korean: '제가 도와드릴게요.' } },
      { hanzi: '溝通', zhuyin: 'ㄍㄡ ㄊㄨㄥ', pinyin: 'gōutōng', korean: '소통, 커뮤니케이션', pos: '명사·동사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '溝通沒問題。', korean: '소통 문제없어요.' } },
      { hanzi: '接下來', zhuyin: 'ㄐㄧㄝ ㄒㄧㄚˋ ㄌㄞˊ', pinyin: 'jiē xiàlái', korean: '앞으로, 다음부터', pos: '시간표현', hsk: 4, tags: ['업무', '회화', '필수'], example: { hanzi: '接下來會更忙。', korean: '앞으로 더 바빠질 거예요.' } },
      { hanzi: '寄信', zhuyin: 'ㄐㄧˋ ㄒㄧㄣˋ', pinyin: 'jì xìn', korean: '이메일/편지 보내다', pos: '동사구', hsk: 3, tags: ['업무', '이메일'], example: { hanzi: '我已寄信給您。', korean: '이메일 보내드렸어요.' } },
      { hanzi: '邀約', zhuyin: 'ㄧㄠ ㄩㄝ', pinyin: 'yāoyuē', korean: '제안, 초청', pos: '명사·동사', hsk: 5, tags: ['업무', '필수', '인플루언서'], example: { hanzi: '想跟您邀約合作。', korean: '협업 제안드리고 싶어요.' } },
      { hanzi: '起步', zhuyin: 'ㄑㄧˇ ㄅㄨˋ', pinyin: 'qǐbù', korean: '시작 단계, 출발', pos: '동사·명사', hsk: 5, tags: ['업무'], example: { hanzi: '公司剛起步。', korean: '회사가 막 시작 단계예요.' } },
      { hanzi: '初步', zhuyin: 'ㄔㄨ ㄅㄨˋ', pinyin: 'chūbù', korean: '초보, 1차, 초기', pos: '형용사·부사', hsk: 4, tags: ['업무'], example: { hanzi: '初步討論結果。', korean: '1차 논의 결과.' } },
      { hanzi: '內部提案', zhuyin: 'ㄋㄟˋ ㄅㄨˋ ㄊㄧˊ ㄢˋ', pinyin: 'nèibù tí\'àn', korean: '내부 제안', pos: '명사', hsk: '업무', tags: ['업무', '필수'], example: { hanzi: '內部提案沒通過。', korean: '내부 제안 통과 안 됐어요.' } },
      { hanzi: '通過', zhuyin: 'ㄊㄨㄥ ㄍㄨㄛˋ', pinyin: 'tōngguò', korean: '통과하다, 승인', pos: '동사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '預算通過了！', korean: '예산 승인됐어요!' } },
      { hanzi: '再次聯絡', zhuyin: 'ㄗㄞˋ ㄘˋ ㄌㄧㄢˊ ㄌㄨㄛˋ', pinyin: 'zàicì liánluò', korean: '다시 연락', pos: '구', hsk: 4, tags: ['업무', '이메일', '필수'], example: { hanzi: '我再次聯絡您。', korean: '다시 연락드려요.' } },
      { hanzi: '置入', zhuyin: 'ㄓˋ ㄖㄨˋ', pinyin: 'zhìrù', korean: '콘텐츠 노출, 자연스러운 광고 삽입', pos: '명사·동사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '想做 YT 影片置入。', korean: '유튜브 영상 콘텐츠 노출하고 싶어요.' } },
      { hanzi: '可能性', zhuyin: 'ㄎㄜˇ ㄋㄥˊ ㄒㄧㄥˋ', pinyin: 'kěnéngxìng', korean: '가능성', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '請問有合作的可能性嗎？', korean: '협업 가능성 있을까요?' } }
    ],
    practice: [
      {
        prompt: '본인이 새 협력사에게 자기소개 + 재컨택 (Yuna 메시지 변형해서)',
        modelAnswers: [
          { level: '템플릿', hanzi: 'Hi!! 您好，我是 UNNI 的台灣行銷窗口 Enbi!! 之前其實已經有寄信邀約過，但因為公司在台灣市場剛起步，初步跟內部提案沒有通過。但我們還是很希望能有機會合作，所以再次聯絡了! 想說是不是能詢問看看 [협업유형] 的可能性~', pinyin: '(템플릿)', korean: '템플릿 — [협업유형] 부분만 바꿔서 재사용 ⭐' }
        ]
      },
      {
        prompt: 'Yuna가 본인을 소개한 메시지에 협력사가 답장 안 했을 때, 한 번 더 푸시하기',
        modelAnswers: [
          { level: '자연스러움', hanzi: '想說再跟您確認一下，不知道有沒有機會聊聊 YT 影片置入呢？我們很期待和您合作!', pinyin: 'xiǎngshuō zài gēn nín quèrèn yīxià, bù zhīdào yǒu méiyǒu jīhuì liáoliáo YT yǐngpiàn zhìrù ne? wǒmen hěn qídài hé nín hézuò!', korean: '다시 한번 확인드리고 싶어서요, 유튜브 영상 노출 관련해서 얘기 나눌 기회가 있을까요? 협업 기대하고 있어요!' }
        ]
      }
    ]
  }
  ,
  {
    id: 'L18',
    title: '협업 견적·재제작 조건 안내 ⭐ — 报價/再製 템플릿',
    subtitle: '협력사가 보낸 협업 비용 견적 + 영상 재제작(再製) 조건 안내 — 본인이 받거나 보낼 표준 메시지',
    source: 'Inbox (2026-06-01 — 협력사/대행사 발송)',
    type: 'business_email_terms',
    difficulty: 'B1-B2',
    date: '2026-06-01',
    fullText: '您好，合作費用報價給您：1.圖文 $10000 2.極短篇（30秒）$12000 3.介紹影片（1分鐘）$15000 4.廣告主授權 $5000/月 5.加購平台發佈 $2000/平台（FB、Threads、TikTok、YTshorts）。再製不會更改創作者的內容，也不會另外加上字卡等等，目前廣告分成直式與橫式兩種，只會因應廣告形式修剪影片長度，比方說修改為 6 秒或 15 秒素材，另加上包框設計！以下提供相關的廣告影片給您參考，謝謝您！',
    koreanSummary: '안녕하세요, 협업 비용 견적 드립니다: 1.이미지+글(피드) 1만 2.극초단편(30초) 1.2만 3.소개 영상(1분) 1.5만 4.광고주 사용권한 5천/월 5.추가 플랫폼 게재 2천/플랫폼(FB·Threads·TikTok·YT쇼츠). 재제작 시 크리에이터 콘텐츠는 변경하지 않고, 별도 자막 카드 등도 추가하지 않아요. 현재 광고는 세로형·가로형 두 종류로 나뉘며, 광고 형식에 맞춰 영상 길이만 잘라요(예: 6초/15초 소재로 수정), 프레임(테두리) 디자인만 추가합니다! 참고용 광고 영상 첨부드려요, 감사합니다!',
    sentences: [
      {
        id: 1,
        hanzi: '您好，合作費用報價給您',
        zhuyin: 'ㄋㄧㄣˊ ㄏㄠˇ ㄏㄜˊ ㄗㄨㄛˋ ㄈㄟˋ ㄩㄥˋ ㄅㄠˋ ㄐㄧㄚˋ ㄍㄟˇ ㄋㄧㄣˊ',
        pinyin: 'nín hǎo, hézuò fèiyòng bàojià gěi nín',
        korean: '안녕하세요, 협업 비용 견적 드립니다',
        wordBreak: '合作(협업) | 費用(비용) | 報價(견적·견적가) | 給您(~께 드리다)',
        keyPattern: '「報價給您」= "견적 드립니다" 견적 메일 첫 문장 공식 ⭐. 報價는 명사(견적가)·동사(견적 내다) 모두 가능'
      },
      {
        id: 2,
        hanzi: '廣告主授權 $5000/月，加購平台發佈 $2000/平台',
        zhuyin: 'ㄍㄨㄤˇ ㄍㄠˋ ㄓㄨˇ ㄕㄡˋ ㄑㄩㄢˊ ㄐㄧㄚ ㄍㄡˋ ㄆㄧㄥˊ ㄊㄞˊ ㄈㄚ ㄅㄨˋ',
        pinyin: 'guǎnggào zhǔ shòuquán $5000/yuè, jiā gòu píngtái fābù $2000/píngtái',
        korean: '광고주 사용권한 5천/월, 추가 플랫폼 게재 2천/플랫폼',
        wordBreak: '廣告主(광고주) | 授權(사용권한·라이선스) | 加購(추가 구매) | 平台(플랫폼) | 發佈(게재·배포)',
        keyPattern: '「授權」= 광고에 콘텐츠 쓸 권리 (인플 협업 핵심 비용 항목) ⭐. 「加購」= 옵션 추가 구매, 견적서 빈출'
      },
      {
        id: 3,
        hanzi: '再製不會更改創作者的內容，也不會另外加上字卡',
        zhuyin: 'ㄗㄞˋ ㄓˋ ㄅㄨˊ ㄏㄨㄟˋ ㄍㄥ ㄍㄞˇ ㄔㄨㄤˋ ㄗㄨㄛˋ ㄓㄜˇ ㄉㄜ˙ ㄋㄟˋ ㄖㄨㄥˊ ㄧㄝˇ ㄅㄨˊ ㄏㄨㄟˋ ㄌㄧㄥˋ ㄨㄞˋ ㄐㄧㄚ ㄕㄤˋ ㄗˋ ㄎㄚˇ',
        pinyin: 'zàizhì bú huì gēnggǎi chuàngzuòzhě de nèiróng, yě bú huì lìngwài jiā shàng zìkǎ',
        korean: '재제작 시 크리에이터 콘텐츠는 변경하지 않고, 별도 자막 카드도 추가하지 않아요',
        wordBreak: '再製(재제작·재가공) | 更改(변경) | 創作者(크리에이터·창작자) | 另外(별도로) | 加上(추가하다) | 字卡(자막 카드·텍스트 카드)',
        keyPattern: '「再製」= 영상 소재 재가공 (광고용 재편집) ⭐ 업계 필수. 「不會~也不會~」= "~하지도 ~하지도 않는다" 약속·보장 톤'
      },
      {
        id: 4,
        hanzi: '目前廣告分成直式與橫式兩種，只會因應廣告形式修剪影片長度',
        zhuyin: 'ㄇㄨˋ ㄑㄧㄢˊ ㄍㄨㄤˇ ㄍㄠˋ ㄈㄣ ㄔㄥˊ ㄓˊ ㄕˋ ㄩˇ ㄏㄥˊ ㄕˋ ㄌㄧㄤˇ ㄓㄨㄥˇ ㄓˇ ㄏㄨㄟˋ ㄧㄣ ㄧㄥˋ ㄍㄨㄤˇ ㄍㄠˋ ㄒㄧㄥˊ ㄕˋ ㄒㄧㄡ ㄐㄧㄢˇ ㄧㄥˇ ㄆㄧㄢˋ ㄔㄤˊ ㄉㄨˋ',
        pinyin: 'mùqián guǎnggào fēnchéng zhíshì yǔ héngshì liǎng zhǒng, zhǐ huì yīnyìng guǎnggào xíngshì xiūjiǎn yǐngpiàn chángdù',
        korean: '현재 광고는 세로형·가로형 두 종류로 나뉘며, 광고 형식에 맞춰 영상 길이만 잘라요',
        wordBreak: '目前(현재) | 分成(~로 나뉘다) | 直式(세로형) | 橫式(가로형) | 因應(~에 맞춰·대응하여) | 修剪(잘라내다·트리밍) | 影片長度(영상 길이)',
        keyPattern: '「分成A與B兩種」= "A·B 두 종류로 나뉜다" 설명 공식. 「因應~」= "~에 맞춰" 격식 표현(=配合). 「直式/橫式」= 세로/가로 영상 — 광고 소재 필수어 ⭐'
      },
      {
        id: 5,
        hanzi: '比方說修改為 6 秒或 15 秒素材，另加上包框設計',
        zhuyin: 'ㄅㄧˇ ㄈㄤ ㄕㄨㄛ ㄒㄧㄡ ㄍㄞˇ ㄨㄟˊ ㄌㄧㄡˋ ㄇㄧㄠˇ ㄏㄨㄛˋ ㄕˊ ㄨˇ ㄇㄧㄠˇ ㄙㄨˋ ㄘㄞˊ ㄌㄧㄥˋ ㄐㄧㄚ ㄕㄤˋ ㄅㄠ ㄎㄨㄤ ㄕㄜˋ ㄐㄧˋ',
        pinyin: 'bǐfāng shuō xiūgǎi wéi 6 miǎo huò 15 miǎo sùcái, lìng jiā shàng bāokuāng shèjì',
        korean: '예를 들어 6초 또는 15초 소재로 수정하고, 프레임(테두리) 디자인만 추가해요',
        wordBreak: '比方說(예를 들면) | 修改為(~로 수정하다) | 秒(초) | 素材(소재·에셋) | 包框(프레임·테두리) | 設計(디자인)',
        keyPattern: '「比方說」= "예를 들면" 회화·설명 빈출(=例如/譬如). 「素材」= 광고 소재(영상/이미지 에셋) ⭐ 초빈출. 「包框」= 영상에 두르는 프레임 디자인'
      }
    ],
    vocab: [
      { hanzi: '報價', zhuyin: 'ㄅㄠˋ ㄐㄧㄚˋ', pinyin: 'bàojià', korean: '견적, 견적가', pos: '명사·동사', hsk: '업무', tags: ['업무', '이메일', '필수', '인플루언서'], example: { hanzi: '報價給您參考。', korean: '참고용 견적 드려요.' } },
      { hanzi: '授權', zhuyin: 'ㄕㄡˋ ㄑㄩㄢˊ', pinyin: 'shòuquán', korean: '사용권한, 라이선스', pos: '명사·동사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '廣告授權另外收費。', korean: '광고 사용권한은 별도 비용이에요.' } },
      { hanzi: '廣告主', zhuyin: 'ㄍㄨㄤˇ ㄍㄠˋ ㄓㄨˇ', pinyin: 'guǎnggào zhǔ', korean: '광고주', pos: '명사', hsk: '업계', tags: ['업계', '필수'], example: { hanzi: '廣告主授權一個月。', korean: '광고주 권한 한 달.' } },
      { hanzi: '加購', zhuyin: 'ㄐㄧㄚ ㄍㄡˋ', pinyin: 'jiāgòu', korean: '추가 구매, 옵션 추가', pos: '동사', hsk: '업무', tags: ['업무', '필수'], example: { hanzi: '可以加購平台發佈。', korean: '플랫폼 게재 추가 구매 가능해요.' } },
      { hanzi: '發佈', zhuyin: 'ㄈㄚ ㄅㄨˋ', pinyin: 'fābù', korean: '게재, 배포, 발행', pos: '동사', hsk: 4, tags: ['업무', '인플루언서'], example: { hanzi: '今晚發佈貼文。', korean: '오늘 밤 게시물 올려요.' } },
      { hanzi: '再製', zhuyin: 'ㄗㄞˋ ㄓˋ', pinyin: 'zàizhì', korean: '재제작, 재가공', pos: '명사·동사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '再製成廣告素材。', korean: '광고 소재로 재제작해요.' } },
      { hanzi: '更改', zhuyin: 'ㄍㄥ ㄍㄞˇ', pinyin: 'gēnggǎi', korean: '변경, 수정', pos: '동사', hsk: 4, tags: ['업무'], example: { hanzi: '不會更改內容。', korean: '내용은 변경하지 않아요.' } },
      { hanzi: '創作者', zhuyin: 'ㄔㄨㄤˋ ㄗㄨㄛˋ ㄓㄜˇ', pinyin: 'chuàngzuòzhě', korean: '크리에이터, 창작자', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: '尊重創作者的內容。', korean: '크리에이터 콘텐츠를 존중해요.' } },
      { hanzi: '字卡', zhuyin: 'ㄗˋ ㄎㄚˇ', pinyin: 'zìkǎ', korean: '자막 카드, 텍스트 카드', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서'], example: { hanzi: '不另外加字卡。', korean: '자막 카드는 따로 안 넣어요.' } },
      { hanzi: '直式', zhuyin: 'ㄓˊ ㄕˋ', pinyin: 'zhíshì', korean: '세로형 (세로 영상)', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: '直式適合限動。', korean: '세로형은 스토리에 어울려요.' } },
      { hanzi: '橫式', zhuyin: 'ㄏㄥˊ ㄕˋ', pinyin: 'héngshì', korean: '가로형 (가로 영상)', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: '橫式適合 YT。', korean: '가로형은 유튜브에 어울려요.' } },
      { hanzi: '因應', zhuyin: 'ㄧㄣ ㄧㄥˋ', pinyin: 'yīnyìng', korean: '~에 맞춰, 대응하여', pos: '동사', hsk: 5, tags: ['업무', '이메일', '격식'], example: { hanzi: '因應需求調整。', korean: '수요에 맞춰 조정해요.' } },
      { hanzi: '修剪', zhuyin: 'ㄒㄧㄡ ㄐㄧㄢˇ', pinyin: 'xiūjiǎn', korean: '잘라내다, 트리밍', pos: '동사', hsk: '업계', tags: ['업계', '인플루언서'], example: { hanzi: '修剪成 15 秒。', korean: '15초로 잘라요.' } },
      { hanzi: '素材', zhuyin: 'ㄙㄨˋ ㄘㄞˊ', pinyin: 'sùcái', korean: '소재, 에셋 (광고 영상/이미지)', pos: '명사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '提供廣告素材。', korean: '광고 소재 제공해요.' } },
      { hanzi: '包框', zhuyin: 'ㄅㄠ ㄎㄨㄤ', pinyin: 'bāokuāng', korean: '프레임, 테두리 (영상 둘레)', pos: '명사', hsk: '업계', tags: ['업계'], example: { hanzi: '加上包框設計。', korean: '프레임 디자인을 추가해요.' } },
      { hanzi: '比方說', zhuyin: 'ㄅㄧˇ ㄈㄤ ㄕㄨㄛ', pinyin: 'bǐfāng shuō', korean: '예를 들면', pos: '관용구', hsk: 4, tags: ['회화', '필수'], example: { hanzi: '比方說改成 6 秒。', korean: '예를 들어 6초로 바꿔요.' } }
    ],
    practice: [
      {
        prompt: '협력사에 협업 견적을 항목별로 안내하기 (見積 첫 메시지)',
        modelAnswers: [
          { level: '템플릿', hanzi: '您好，合作費用報價給您：圖文 $XXX、影片 $XXX、廣告主授權 $XXX/月。若需加購平台發佈，每個平台 $XXX。再請您參考，謝謝！', pinyin: '(템플릿)', korean: '템플릿 — 금액만 바꿔 재사용 ⭐' }
        ]
      },
      {
        prompt: '재제작 시 원본을 안 바꾼다고 안심시키기',
        modelAnswers: [
          { level: '자연스러움', hanzi: '再製不會更改您的內容，只會因應廣告形式修剪長度，請放心!', pinyin: 'zàizhì bú huì gēnggǎi nín de nèiróng, zhǐ huì yīnyìng guǎnggào xíngshì xiūjiǎn chángdù, qǐng fàngxīn!', korean: '재제작해도 콘텐츠는 변경 안 하고 광고 형식에 맞춰 길이만 잘라요, 안심하세요!' }
        ]
      }
    ]
  },
  {
    id: 'L19',
    title: '網紅 素材 언어(韓/中) 선택 내부 토론 ⭐⭐ — 의사결정 회화',
    subtitle: '한국어 강사 인플루언서를 한국어로 찍게 할지 중국어로 찍게 할지 팀에 의견 묻는 실제 대화 — 능동 산출 연습용',
    source: 'Inbox (2026-06-01 — 팀 Slack 토론)',
    type: 'casual_work_chat',
    difficulty: 'B1',
    date: '2026-06-01',
    fullText: '我有一個問題想問問大家的意見。6 月份我想找一個網紅合作，他是韓語老師、常做施術，也很常在 IG 分享韓國醫美心得，他的粉絲有 90% 以上的受眾都集中在台灣跟香港。我的苦惱是：要請老師拍攝的時候說韓文還是說中文比較好呢？過去沒有操作過講韓文的素材，所以沒有數據比較。我擔心的是퍼마(廣告投放)不知道好不好，可以幫我投票嗎？1. 說韓文搭配中文字幕 2. 說中文搭配中文字幕。他的粉絲數是 6.2 萬，reels 報價是 120 萬韓元，廣告授權本來是另外收費的，但因為我使出極致誇獎，跟他說以前我都看他的影片學韓文，所以他很爽快的說送我 1 個月的廣告授權！如果不是超級有名的網紅或藝人說韓文上中文字幕，跑廣告的時候好像真的有點危險，我請網紅說中文好了~',
    koreanSummary: '여러분 의견 묻고 싶은 게 있어요. 6월에 한 인플루언서랑 협업하려는데, 한국어 강사이고 시술도 자주 받고 IG에 한국 의료미용 후기도 자주 올려요. 팔로워의 90% 이상이 대만·홍콩에 몰려 있어요. 고민은: 촬영할 때 한국어로 말하게 할지 중국어로 할지예요. 한국어 소재는 해본 적이 없어서 비교 데이터가 없어요. 걱정되는 건 퍼마(광고 투입) 성과예요. 투표 부탁! 1.한국어+중국어 자막 2.중국어+중국어 자막. 팔로워 6.2만, 릴스 견적 120만원, 광고 사용권은 원래 별도 비용인데 제가 극찬을 쏟아부으며 "예전에 영상 보며 한국어 배웠다"고 했더니 흔쾌히 1개월 권한을 무료로 줬어요! 엄청 유명한 인플/연예인이 아닌 이상 한국어+자막은 광고 돌릴 때 좀 위험한 것 같아서, 그냥 중국어로 부탁하기로 했어요~',
    sentences: [
      {
        id: 1,
        hanzi: '我有一個問題想問問大家的意見',
        zhuyin: 'ㄨㄛˇ ㄧㄡˇ ㄧˊ ㄍㄜˋ ㄨㄣˋ ㄊㄧˊ ㄒㄧㄤˇ ㄨㄣˋ ㄨㄣˋ ㄉㄚˋ ㄐㄧㄚ ㄉㄜ˙ ㄧˋ ㄐㄧㄢˋ',
        pinyin: 'wǒ yǒu yí gè wèntí xiǎng wènwèn dàjiā de yìjiàn',
        korean: '여러분 의견을 좀 물어보고 싶은 게 하나 있어요',
        wordBreak: '問題(질문·문제) | 想(~하고 싶다) | 問問(좀 물어보다·동사 중첩) | 大家(여러분) | 意見(의견)',
        keyPattern: '「問問」= 동사 중첩 = "좀 ~해보다" 부드러운 톤 ⭐. 팀에 의견 구할 때 여는 문장으로 그대로 활용'
      },
      {
        id: 2,
        hanzi: '他的粉絲有 90% 以上的受眾都集中在台灣跟香港',
        zhuyin: 'ㄊㄚ ㄉㄜ˙ ㄈㄣˇ ㄙ ㄧㄡˇ ㄐㄧㄡˇ ㄕˊ ㄅㄞˇ ㄈㄣ ㄓ ㄧˇ ㄕㄤˋ ㄉㄜ˙ ㄕㄡˋ ㄓㄨㄥˋ ㄉㄡ ㄐㄧˊ ㄓㄨㄥ ㄗㄞˋ ㄊㄞˊ ㄨㄢ ㄍㄣ ㄒㄧㄤ ㄍㄤˇ',
        pinyin: 'tā de fěnsī yǒu 90% yǐshàng de shòuzhòng dōu jízhōng zài Táiwān gēn Xiānggǎng',
        korean: '그의 팔로워 중 90% 이상의 수용자가 대만과 홍콩에 몰려 있어요',
        wordBreak: '粉絲(팔로워·팬) | 以上(이상) | 受眾(수용자·오디언스) | 集中(집중·몰리다) | 跟(=和, ~와)',
        keyPattern: '「受眾」= 오디언스/타깃 시청자 ⭐ 마케팅 빈출. 「集中在~」= "~에 몰려 있다" 데이터 설명 공식. 대만에선 和 대신 「跟」을 회화에서 더 씀'
      },
      {
        id: 3,
        hanzi: '要請老師拍攝的時候說韓文還是說中文比較好呢？',
        zhuyin: 'ㄧㄠˋ ㄑㄧㄥˇ ㄌㄠˇ ㄕ ㄆㄞ ㄕㄜˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄕㄨㄛ ㄏㄢˊ ㄨㄣˊ ㄏㄞˊ ㄕˋ ㄕㄨㄛ ㄓㄨㄥ ㄨㄣˊ ㄅㄧˇ ㄐㄧㄠˋ ㄏㄠˇ ㄋㄜ˙',
        pinyin: 'yào qǐng lǎoshī pāishè de shíhòu shuō Hánwén háishì shuō Zhōngwén bǐjiào hǎo ne?',
        korean: '선생님께 촬영 요청할 때 한국어로 말하게 할지 중국어로 할지 어느 쪽이 나을까요?',
        wordBreak: '請(부탁하다·요청) | 拍攝(촬영) | 的時候(~할 때) | 還是(아니면·선택) | 比較好(더 낫다) | 呢(부드러운 의문)',
        keyPattern: '「A還是B比較好呢？」= "A와 B 중 어느 게 나을까요?" 선택 질문 핵심 공식 ⭐. 「請+사람+동사」= "~께 ~하시도록 요청하다"'
      },
      {
        id: 4,
        hanzi: '過去沒有操作過講韓文的素材，所以沒有數據比較',
        zhuyin: 'ㄍㄨㄛˋ ㄑㄩˋ ㄇㄟˊ ㄧㄡˇ ㄘㄠ ㄗㄨㄛˋ ㄍㄨㄛˋ ㄐㄧㄤˇ ㄏㄢˊ ㄨㄣˊ ㄉㄜ˙ ㄙㄨˋ ㄘㄞˊ ㄙㄨㄛˇ ㄧˇ ㄇㄟˊ ㄧㄡˇ ㄕㄨˋ ㄐㄩˋ ㄅㄧˇ ㄐㄧㄠˋ',
        pinyin: 'guòqù méiyǒu cāozuò guò jiǎng Hánwén de sùcái, suǒyǐ méiyǒu shùjù bǐjiào',
        korean: '예전에 한국어로 말하는 소재를 운영해본 적이 없어서, 비교할 데이터가 없어요',
        wordBreak: '過去(과거·예전) | 操作(운영·집행·돌리다) | 過(~한 적 있다) | 講(말하다) | 數據(데이터) | 比較(비교)',
        keyPattern: '「操作」= 캠페인·소재를 "운영/집행하다" ⭐ 마케팅 필수. 「動詞+過」= 경험 표현. 「沒有數據比較」= 데이터 부재 설명 빈출'
      },
      {
        id: 5,
        hanzi: '因為我使出極致誇獎，所以他很爽快的說送我 1 個月的廣告授權',
        zhuyin: 'ㄧㄣ ㄨㄟˋ ㄨㄛˇ ㄕˇ ㄔㄨ ㄐㄧˊ ㄓˋ ㄎㄨㄚ ㄐㄧㄤˇ ㄙㄨㄛˇ ㄧˇ ㄊㄚ ㄏㄣˇ ㄕㄨㄤˇ ㄎㄨㄞˋ ㄉㄜ˙ ㄕㄨㄛ ㄙㄨㄥˋ ㄨㄛˇ ㄧˊ ㄍㄜˋ ㄩㄝˋ ㄉㄜ˙ ㄍㄨㄤˇ ㄍㄠˋ ㄕㄡˋ ㄑㄩㄢˊ',
        pinyin: 'yīnwèi wǒ shǐ chū jízhì kuājiǎng, suǒyǐ tā hěn shuǎngkuài de shuō sòng wǒ yí gè yuè de guǎnggào shòuquán',
        korean: '제가 극찬을 쏟아부었더니, 그가 흔쾌히 1개월 광고 사용권을 무료로 준다고 했어요',
        wordBreak: '使出(쏟아내다·발휘하다) | 極致(극치·극도) | 誇獎(칭찬) | 爽快(흔쾌히·시원시원) | 送(공짜로 주다·선물) | 廣告授權(광고 사용권)',
        keyPattern: '「爽快」= 흔쾌히·쿨하게 (성격/응답 묘사) ⭐ 회화 빈출. 「送我~」= "공짜로 ~를 주다". 협상에서 칭찬으로 권한 따낸 실전 표현'
      },
      {
        id: 6,
        hanzi: '跑廣告的時候好像真的有點危險，我請網紅說中文好了',
        zhuyin: 'ㄆㄠˇ ㄍㄨㄤˇ ㄍㄠˋ ㄉㄜ˙ ㄕˊ ㄏㄡˋ ㄏㄠˇ ㄒㄧㄤˋ ㄓㄣ ㄉㄜ˙ ㄧㄡˇ ㄉㄧㄢˇ ㄨㄟˊ ㄒㄧㄢˇ ㄨㄛˇ ㄑㄧㄥˇ ㄨㄤˇ ㄏㄨㄥˊ ㄕㄨㄛ ㄓㄨㄥ ㄨㄣˊ ㄏㄠˇ ㄌㄜ˙',
        pinyin: 'pǎo guǎnggào de shíhòu hǎoxiàng zhēn de yǒudiǎn wéixiǎn, wǒ qǐng wǎnghóng shuō Zhōngwén hǎo le',
        korean: '광고 돌릴 때는 진짜 좀 위험한 것 같아서, 그냥 인플루언서한테 중국어로 해달라고 할래요',
        wordBreak: '跑廣告(광고 돌리다·집행) | 好像(~인 것 같다) | 有點(좀·약간) | 危險(위험) | 網紅(인플루언서) | ~好了(~하는 게 낫겠다·결정)',
        keyPattern: '「跑廣告」= 광고를 "돌리다/집행하다" ⭐ 초빈출 회화. 「~好了」= 고민 끝 결정 톤 "그냥 ~할래/하는 게 낫겠다". 「網紅」= 인플루언서(대만 표준어)'
      }
    ],
    vocab: [
      { hanzi: '受眾', zhuyin: 'ㄕㄡˋ ㄓㄨㄥˋ', pinyin: 'shòuzhòng', korean: '수용자, 오디언스, 타깃 시청자', pos: '명사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '受眾集中在台灣。', korean: '오디언스가 대만에 몰려 있어요.' } },
      { hanzi: '占比', zhuyin: 'ㄓㄢˋ ㄅㄧˇ', pinyin: 'zhànbǐ', korean: '비중, 점유 비율', pos: '명사', hsk: '업무', tags: ['업무', '인플루언서'], example: { hanzi: '台灣受眾占比 90%。', korean: '대만 오디언스 비중 90%.' } },
      { hanzi: '操作', zhuyin: 'ㄘㄠ ㄗㄨㄛˋ', pinyin: 'cāozuò', korean: '운영, 집행, (캠페인을) 돌리다', pos: '동사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '操作講韓文的素材。', korean: '한국어 소재를 운영해요.' } },
      { hanzi: '數據', zhuyin: 'ㄕㄨˋ ㄐㄩˋ', pinyin: 'shùjù', korean: '데이터', pos: '명사', hsk: 5, tags: ['업무', '필수', '인플루언서'], example: { hanzi: '沒有數據比較。', korean: '비교할 데이터가 없어요.' } },
      { hanzi: '成效', zhuyin: 'ㄔㄥˊ ㄒㄧㄠˋ', pinyin: 'chéngxiào', korean: '성과, 효과', pos: '명사', hsk: '업무', tags: ['업무', '필수', '인플루언서'], example: { hanzi: '影片成效不錯。', korean: '영상 성과가 괜찮아요.' } },
      { hanzi: '跑廣告', zhuyin: 'ㄆㄠˇ ㄍㄨㄤˇ ㄍㄠˋ', pinyin: 'pǎo guǎnggào', korean: '광고를 돌리다·집행하다', pos: '동사구', hsk: '업계', tags: ['업계', '필수', '인플루언서', '회화'], example: { hanzi: '這支素材拿來跑廣告。', korean: '이 소재로 광고 돌려요.' } },
      { hanzi: '廣告授權', zhuyin: 'ㄍㄨㄤˇ ㄍㄠˋ ㄕㄡˋ ㄑㄩㄢˊ', pinyin: 'guǎnggào shòuquán', korean: '광고 사용권', pos: '명사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '送我一個月廣告授權。', korean: '광고 사용권 한 달 무료로 줬어요.' } },
      { hanzi: '字幕', zhuyin: 'ㄗˋ ㄇㄨˋ', pinyin: 'zìmù', korean: '자막', pos: '명사', hsk: 4, tags: ['인플루언서', '필수'], example: { hanzi: '說韓文搭配中文字幕。', korean: '한국어+중국어 자막.' } },
      { hanzi: '搭配', zhuyin: 'ㄉㄚ ㄆㄟˋ', pinyin: 'dāpèi', korean: '곁들이다, 조합하다, ~와 함께', pos: '동사', hsk: 5, tags: ['회화', '인플루언서'], example: { hanzi: '韓文搭配字幕。', korean: '한국어에 자막을 곁들여요.' } },
      { hanzi: '爽快', zhuyin: 'ㄕㄨㄤˇ ㄎㄨㄞˋ', pinyin: 'shuǎngkuài', korean: '흔쾌하다, 시원시원하다', pos: '형용사', hsk: 5, tags: ['회화', '필수'], example: { hanzi: '他很爽快答應了。', korean: '그가 흔쾌히 수락했어요.' } },
      { hanzi: '誇獎', zhuyin: 'ㄎㄨㄚ ㄐㄧㄤˇ', pinyin: 'kuājiǎng', korean: '칭찬하다', pos: '동사', hsk: 5, tags: ['회화'], example: { hanzi: '使出極致誇獎。', korean: '극찬을 쏟아부었어요.' } },
      { hanzi: '苦惱', zhuyin: 'ㄎㄨˇ ㄋㄠˇ', pinyin: 'kǔnǎo', korean: '고민, 골치 아픔', pos: '명사·형용사', hsk: 5, tags: ['회화'], example: { hanzi: '我的苦惱是…', korean: '제 고민은…' } },
      { hanzi: '投票', zhuyin: 'ㄊㄡˊ ㄆㄧㄠˋ', pinyin: 'tóupiào', korean: '투표', pos: '명사·동사', hsk: 4, tags: ['회화', '업무'], example: { hanzi: '可以幫我投票嗎？', korean: '투표 도와줄 수 있어요?' } },
      { hanzi: '網紅', zhuyin: 'ㄨㄤˇ ㄏㄨㄥˊ', pinyin: 'wǎnghóng', korean: '인플루언서 (대만 표준)', pos: '명사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '想找一個網紅合作。', korean: '인플루언서랑 협업하고 싶어요.' } },
      { hanzi: '施術', zhuyin: 'ㄕ ㄕㄨˋ', pinyin: 'shīshù', korean: '시술 (시술 받다·하다)', pos: '명사·동사', hsk: '업계', tags: ['업계', '필수'], example: { hanzi: '他常做施術。', korean: '그는 시술을 자주 받아요.' } }
    ],
    practice: [
      {
        prompt: '팀에 A/B 의견을 구하며 투표 요청하기',
        modelAnswers: [
          { level: '간단', hanzi: '大家覺得說韓文還是說中文比較好？可以幫我投票嗎？', pinyin: 'dàjiā juéde shuō Hánwén háishì shuō Zhōngwén bǐjiào hǎo? kěyǐ bāng wǒ tóupiào ma?', korean: '한국어가 나아요 중국어가 나아요? 투표 도와줄 수 있어요?' },
          { level: '자연스러움', hanzi: '我有個苦惱想問大家：要請網紅說韓文搭配中文字幕，還是直接說中文呢？因為過去沒操作過韓文素材，沒有數據比較，可以幫我投票嗎？', pinyin: 'wǒ yǒu gè kǔnǎo xiǎng wèn dàjiā: yào qǐng wǎnghóng shuō Hánwén dāpèi Zhōngwén zìmù, háishì zhíjiē shuō Zhōngwén ne? yīnwèi guòqù méi cāozuò guò Hánwén sùcái, méiyǒu shùjù bǐjiào, kěyǐ bāng wǒ tóupiào ma?', korean: '고민 하나 물을게요: 인플한테 한국어+중국어 자막으로 할지, 그냥 중국어로 할지? 한국어 소재는 해본 적 없어 데이터가 없어서요, 투표 부탁해요!' }
        ]
      },
      {
        prompt: '고민 끝에 중국어로 가기로 결정 알리기',
        modelAnswers: [
          { level: '자연스러움', hanzi: '想了一下，跑廣告的話說韓文好像有點危險，我還是請網紅說中文好了，謝謝大家的意見!', pinyin: 'xiǎng le yíxià, pǎo guǎnggào dehuà shuō Hánwén hǎoxiàng yǒudiǎn wéixiǎn, wǒ háishì qǐng wǎnghóng shuō Zhōngwén hǎo le, xièxie dàjiā de yìjiàn!', korean: '생각해봤는데 광고 돌릴 땐 한국어가 좀 위험할 것 같아서, 그냥 중국어로 부탁할래요. 의견 줘서 고마워요!' }
        ]
      }
    ]
  },
  {
    id: 'L20',
    title: '醫美 광고 카피 어휘 폭격 💥 — 시술명 + 세일 패턴',
    subtitle: '대량 광고 카피에서 중복 제외하고 시술명·세일 표현·CTA 패턴만 추출 — 광고 90% 이해 KPI 직결',
    source: 'Inbox (2026-06-01 — 광고 카피 모음, 중복 제거)',
    type: 'vocab_burst',
    difficulty: 'A2-B1',
    date: '2026-06-01',
    fullText: '比台灣便宜超多! V-Line 拉提特價中｜ONDA 超微波 $1,999 起｜海芙音波 $899 起｜鳳凰電波 $22,990 起｜肉毒、水光針、消脂針特價中｜麗珠蘭黑盒、Juvelook 喬雅露、黃金微針 POTENZA｜輪廓針、手臂/大腿消脂針｜玻尿酸、雷射除毛、微整隆鼻、抽脂、眼整形、鼻整形｜韓國高評分 9.0+，滿滿好評不踩雷，大量術前術後對比照｜🇹🇼 ONDA $28,000 / 🇰🇷 ONDA $4,400（省下 84%）｜【限時】最高 51 折｜歡迎新會員｜超高 CP 值 $169 起｜立刻預約超殺優惠 / 立即查看精選診所 ＞',
    koreanSummary: '대만보다 훨씬 저렴! V라인 리프팅 특가｜온다 초음파 $1,999부터｜울쎄라(하이푸) $899부터｜텐써마(피닉스) $22,990부터｜보톡스·물광주사·지방분해주사 특가｜리쥬란 블랙·쥬베룩·포텐자 골드미세침｜윤곽주사·팔/허벅지 지방분해｜필러·레이저 제모·코필러·지방흡입·눈성형·코성형｜한국 고평점 9.0+, 후기 가득 실패 없음, 전후 비교 사진 다수｜대만 ONDA $28,000 vs 한국 $4,400(84% 절약)｜한정 최대 51%할인｜신규회원 환영｜초가성비 $169부터｜지금 예약/엄선 클리닉 보기. (※ 광고 카피라 격식 X, 패턴·시술명 암기용)',
    sentences: [
      {
        id: 1,
        hanzi: '比台灣便宜超多！V-Line 拉提特價中',
        zhuyin: 'ㄅㄧˇ ㄊㄞˊ ㄨㄢ ㄆㄧㄢˊ ㄧˊ ㄔㄠ ㄉㄨㄛ ㄌㄚ ㄊㄧˊ ㄊㄜˋ ㄐㄧㄚˋ ㄓㄨㄥ',
        pinyin: 'bǐ Táiwān piányí chāo duō! V-Line lātí tèjià zhōng',
        korean: '대만보다 훨씬 저렴! V라인 리프팅 특가 중',
        wordBreak: '比(~보다·비교) | 便宜(싸다) | 超多(엄청 많이) | 拉提(리프팅·당겨올림) | 特價中(특가 진행 중)',
        keyPattern: '「比A便宜超多」= "A보다 훨씬 싸다" 가격 비교 광고 공식 ⭐. 「超+형용사」= "엄청 ~" 대만 회화·광고 빈출. 「特價中」= 세일 중'
      },
      {
        id: 2,
        hanzi: '滿滿好評不踩雷，大量術前術後對比照',
        zhuyin: 'ㄇㄢˇ ㄇㄢˇ ㄏㄠˇ ㄆㄧㄥˊ ㄅㄨˋ ㄘㄞˇ ㄌㄟˊ ㄉㄚˋ ㄌㄧㄤˋ ㄕㄨˋ ㄑㄧㄢˊ ㄕㄨˋ ㄏㄡˋ ㄉㄨㄟˋ ㄅㄧˇ ㄓㄠˋ',
        pinyin: 'mǎnmǎn hǎopíng bù cǎiléi, dàliàng shùqián shùhòu duìbǐ zhào',
        korean: '후기 가득, 실패(지뢰) 없음, 전후 비교 사진 다수',
        wordBreak: '滿滿(가득) | 好評(호평·좋은 후기) | 踩雷(지뢰 밟다=실패·낭패) | 大量(다량) | 術前術後(시술 전후) | 對比照(비교 사진)',
        keyPattern: '「踩雷」= "지뢰 밟다" → 실패·잘못 고르다 ⭐ 리뷰·광고 초빈출 회화. 「術前術後對比照」= 비포애프터 사진 — 의료미용 광고 필수어'
      },
      {
        id: 3,
        hanzi: '🇹🇼 ONDA $28,000 / 🇰🇷 ONDA $4,400（省下 84%）',
        zhuyin: 'ㄕㄥˇ ㄒㄧㄚˋ ㄅㄞˇ ㄈㄣ ㄓ ㄅㄚ ㄕˊ ㄙˋ',
        pinyin: 'Táiwān ONDA $28,000 / Hánguó ONDA $4,400 (shěng xià 84%)',
        korean: '대만 ONDA 28,000 / 한국 ONDA 4,400 (84% 절약)',
        wordBreak: '省下(절약하다·아끼다) | 百分之 84(84%)',
        keyPattern: '「省下 N%」= "N% 절약" 가격 강조 공식 ⭐. 대만 vs 한국 가격 직접 비교는 강남언니 광고의 핵심 앵글'
      },
      {
        id: 4,
        hanzi: '【限時】最高 51 折，歡迎新會員',
        zhuyin: 'ㄒㄧㄢˋ ㄕˊ ㄗㄨㄟˋ ㄍㄠ ㄨˇ ㄕˊ ㄧ ㄓㄜˊ ㄏㄨㄢ ㄧㄥˊ ㄒㄧㄣ ㄏㄨㄟˋ ㄩㄢˊ',
        pinyin: 'xiànshí zuìgāo 51 zhé, huānyíng xīn huìyuán',
        korean: '한정! 최대 51% 할인, 신규 회원 환영',
        wordBreak: '限時(한정 시간·기간 한정) | 最高(최대) | 51 折(51% 가격=49% 할인 ※주의) | 歡迎(환영) | 新會員(신규 회원)',
        keyPattern: '⚠️ 「N折」 함정: 「51折」는 "정가의 51%만 받음" = 49% 할인! 「打折」= 할인. 「限時」= 기간 한정 — CTA 단골'
      },
      {
        id: 5,
        hanzi: '超高 CP 值 $169 起，立刻預約超殺優惠 ＞',
        zhuyin: 'ㄔㄠ ㄍㄠ CP ㄓˊ ㄑㄧˇ ㄌㄧˋ ㄎㄜˋ ㄩˋ ㄩㄝ ㄔㄠ ㄕㄚ ㄧㄡ ㄏㄨㄟˋ',
        pinyin: 'chāo gāo CP zhí $169 qǐ, lìkè yùyuē chāoshā yōuhuì >',
        korean: '초가성비 $169부터, 지금 바로 예약, 초특가 혜택 ＞',
        wordBreak: 'CP值(가성비·cost performance) | 起(~부터·최저가) | 立刻(즉시) | 預約(예약) | 超殺(초특가·파격) | 優惠(혜택·할인)',
        keyPattern: '「CP值」= 가성비 ⭐ 대만 초초빈출 (가성비 좋다=CP值高). 「$N 起」= "N부터" 최저가 표기. 「超殺」= 파격·초특가 슬랭'
      }
    ],
    vocab: [
      { hanzi: '拉提', zhuyin: 'ㄌㄚ ㄊㄧˊ', pinyin: 'lātí', korean: '리프팅 (당겨 올림)', pos: '명사·동사', hsk: '업계', tags: ['업계', '필수', '시술'], example: { hanzi: 'V-Line 拉提特價。', korean: 'V라인 리프팅 특가.' } },
      { hanzi: '超微波 (ONDA)', zhuyin: 'ㄔㄠ ㄨㄟˊ ㄆㄛ', pinyin: 'chāo wēibō', korean: '초음파(온다 ONDA) 시술', pos: '명사', hsk: '업계', tags: ['업계', '시술'], example: { hanzi: 'ONDA 超微波 $1,999 起。', korean: '온다 초음파 $1,999부터.' } },
      { hanzi: '海芙音波', zhuyin: 'ㄏㄞˇ ㄈㄨˊ ㄧㄣ ㄆㄛ', pinyin: 'hǎifú yīnbō', korean: '울쎄라/하이푸(HIFU) 음파', pos: '명사', hsk: '업계', tags: ['업계', '시술'], example: { hanzi: '海芙音波 $899 起。', korean: '하이푸 음파 $899부터.' } },
      { hanzi: '鳳凰電波', zhuyin: 'ㄈㄥˋ ㄏㄨㄤˊ ㄉㄧㄢˋ ㄆㄛ', pinyin: 'fènghuáng diànbō', korean: '피닉스(텐써마) 고주파', pos: '명사', hsk: '업계', tags: ['업계', '시술'], example: { hanzi: '鳳凰電波 $22,990 起。', korean: '피닉스 전파 $22,990부터.' } },
      { hanzi: '肉毒', zhuyin: 'ㄖㄡˋ ㄉㄨˊ', pinyin: 'ròudú', korean: '보톡스 (肉毒桿菌)', pos: '명사', hsk: '업계', tags: ['업계', '필수', '시술'], example: { hanzi: '咀嚼肌肉毒 $699 起。', korean: '교근(사각턱) 보톡스 $699부터.' } },
      { hanzi: '水光針', zhuyin: 'ㄕㄨㄟˇ ㄍㄨㄤ ㄓㄣ', pinyin: 'shuǐguāng zhēn', korean: '물광주사', pos: '명사', hsk: '업계', tags: ['업계', '필수', '시술'], example: { hanzi: '水光針特價中。', korean: '물광주사 특가 중.' } },
      { hanzi: '消脂針', zhuyin: 'ㄒㄧㄠ ㄓ ㄓㄣ', pinyin: 'xiāozhī zhēn', korean: '지방분해주사', pos: '명사', hsk: '업계', tags: ['업계', '시술'], example: { hanzi: '大腿消脂針 $888 起。', korean: '허벅지 지방분해주사 $888부터.' } },
      { hanzi: '輪廓針', zhuyin: 'ㄌㄨㄣˊ ㄎㄨㄛˋ ㄓㄣ', pinyin: 'lúnkuò zhēn', korean: '윤곽주사', pos: '명사', hsk: '업계', tags: ['업계', '시술'], example: { hanzi: '輪廓針 $449 起。', korean: '윤곽주사 $449부터.' } },
      { hanzi: '玻尿酸', zhuyin: 'ㄅㄛ ㄋㄧㄠˋ ㄙㄨㄢ', pinyin: 'bōniàosuān', korean: '히알루론산(필러)', pos: '명사', hsk: '업계', tags: ['업계', '필수', '시술'], example: { hanzi: '玻尿酸 $1,099 起。', korean: '필러 $1,099부터.' } },
      { hanzi: '雷射除毛', zhuyin: 'ㄌㄟˊ ㄕㄜˋ ㄔㄨˊ ㄇㄠˊ', pinyin: 'léishè chúmáo', korean: '레이저 제모 (雷射=레이저, 대만)', pos: '명사', hsk: '업계', tags: ['업계', '시술', '대만식'], example: { hanzi: '雷射除毛 $299 起。', korean: '레이저 제모 $299부터.' } },
      { hanzi: '隆鼻', zhuyin: 'ㄌㄨㄥˊ ㄅㄧˊ', pinyin: 'lóngbí', korean: '코 성형/융비', pos: '명사·동사', hsk: '업계', tags: ['업계', '시술'], example: { hanzi: '微整隆鼻 $19,999 起。', korean: '쁘띠 코성형 $19,999부터.' } },
      { hanzi: '抽脂', zhuyin: 'ㄔㄡ ㄓ', pinyin: 'chōuzhī', korean: '지방흡입', pos: '명사·동사', hsk: '업계', tags: ['업계', '시술'], example: { hanzi: '人氣抽脂手術。', korean: '인기 지방흡입 수술.' } },
      { hanzi: '整形', zhuyin: 'ㄓㄥˇ ㄒㄧㄥˊ', pinyin: 'zhěngxíng', korean: '성형 (鼻整形·眼整形)', pos: '명사', hsk: '업계', tags: ['업계', '필수', '시술'], example: { hanzi: '人氣眼整形特價中。', korean: '인기 눈성형 특가 중.' } },
      { hanzi: '咀嚼肌', zhuyin: 'ㄐㄩˇ ㄐㄧㄠˊ ㄐㄧ', pinyin: 'jǔjiáo jī', korean: '교근(사각턱 근육)', pos: '명사', hsk: '업계', tags: ['업계', '시술'], example: { hanzi: '咀嚼肌肉毒。', korean: '교근 보톡스.' } },
      { hanzi: '特價', zhuyin: 'ㄊㄜˋ ㄐㄧㄚˋ', pinyin: 'tèjià', korean: '특가, 세일가', pos: '명사', hsk: 4, tags: ['업무', '필수', '광고'], example: { hanzi: '水光針特價中。', korean: '물광주사 특가 중.' } },
      { hanzi: '限時', zhuyin: 'ㄒㄧㄢˋ ㄕˊ', pinyin: 'xiànshí', korean: '기간 한정, 한정 시간', pos: '명사·부사', hsk: '업무', tags: ['업무', '광고', '필수'], example: { hanzi: '限時最低 51 折。', korean: '한정 최저 51%가.' } },
      { hanzi: '折', zhuyin: 'ㄓㄜˊ', pinyin: 'zhé', korean: '할인율(N折=정가의 N0%) ⚠️', pos: '명사', hsk: 4, tags: ['업무', '광고', '필수'], example: { hanzi: '51 折≈打 5 折多。', korean: '51折 = 약 49% 할인(정가의 51%).' } },
      { hanzi: '省下', zhuyin: 'ㄕㄥˇ ㄒㄧㄚˋ', pinyin: 'shěng xià', korean: '절약하다, 아끼다', pos: '동사', hsk: 4, tags: ['광고', '필수'], example: { hanzi: '省下 84%!', korean: '84% 절약!' } },
      { hanzi: '踩雷', zhuyin: 'ㄘㄞˇ ㄌㄟˊ', pinyin: 'cǎiléi', korean: '지뢰 밟다=실패·낭패 보다', pos: '동사', hsk: '슬랭', tags: ['회화', '광고', '필수'], example: { hanzi: '好評不踩雷。', korean: '후기 좋고 실패 없어요.' } },
      { hanzi: '對比照', zhuyin: 'ㄉㄨㄟˋ ㄅㄧˇ ㄓㄠˋ', pinyin: 'duìbǐ zhào', korean: '비교 사진 (전후 비교)', pos: '명사', hsk: '업계', tags: ['업계', '광고'], example: { hanzi: '術前術後對比照。', korean: '시술 전후 비교 사진.' } },
      { hanzi: 'CP值', zhuyin: 'CP ㄓˊ', pinyin: 'CP zhí', korean: '가성비 (cost performance)', pos: '명사', hsk: '슬랭', tags: ['회화', '광고', '필수', '대만식'], example: { hanzi: '超高 CP 值!', korean: '초가성비!' } },
      { hanzi: '超殺', zhuyin: 'ㄔㄠ ㄕㄚ', pinyin: 'chāoshā', korean: '초특가, 파격 (슬랭)', pos: '형용사', hsk: '슬랭', tags: ['회화', '광고', '대만식'], example: { hanzi: '超殺優惠!', korean: '초특가 혜택!' } },
      { hanzi: '優惠', zhuyin: 'ㄧㄡ ㄏㄨㄟˋ', pinyin: 'yōuhuì', korean: '혜택, 할인 특전', pos: '명사', hsk: 4, tags: ['업무', '광고', '필수'], example: { hanzi: '立即查看優惠療程。', korean: '혜택 시술 바로 보기.' } },
      { hanzi: '療程', zhuyin: 'ㄌㄧㄠˊ ㄔㄥˊ', pinyin: 'liáochéng', korean: '시술 코스, 프로그램', pos: '명사', hsk: '업계', tags: ['업계', '필수', '시술'], example: { hanzi: '人氣療程特價中。', korean: '인기 시술 코스 특가 중.' } },
      { hanzi: '預約', zhuyin: 'ㄩˋ ㄩㄝ', pinyin: 'yùyuē', korean: '예약', pos: '명사·동사', hsk: 4, tags: ['업무', '광고', '필수'], example: { hanzi: '立刻預約優惠。', korean: '지금 혜택 예약.' } }
    ],
    practice: [
      {
        prompt: '광고 카피 한 줄 만들기 — 시술명 + 특가 + CTA (패턴 조립)',
        modelAnswers: [
          { level: '템플릿', hanzi: '🔥 [시술명]特價中 $XXX 起｜滿滿好評不踩雷｜立刻預約超殺優惠 ＞', pinyin: '(패턴 템플릿)', korean: '템플릿 — [시술명]·금액만 바꿔 카피 양산 ⭐' },
          { level: '자연스러움', hanzi: '比台灣便宜超多! 水光針 $219 起，大量術前術後對比照，限時最高 51 折，立即查看 ＞', pinyin: 'bǐ Táiwān piányí chāo duō! shuǐguāng zhēn $219 qǐ, dàliàng shùqián shùhòu duìbǐ zhào, xiànshí zuìgāo 51 zhé, lìjí chákàn >', korean: '대만보다 훨씬 저렴! 물광주사 $219부터, 전후 비교 사진 다수, 한정 최대 51%가, 바로 보기 ＞' }
        ]
      },
      {
        prompt: '카피 속 「51折」의 실제 할인율 한국어로 설명하기 (이해 체크)',
        modelAnswers: [
          { level: '이해체크', hanzi: '51 折 = 정가의 51%만 지불 = 약 49% 할인 (한국식 "반값"과 비슷). 「打5折」=50% 할인.', pinyin: '(설명)', korean: '⚠️ N折은 "N0% 할인"이 아니라 "정가의 N0%"임 — 헷갈리기 쉬운 함정' }
        ]
      }
    ]
  },
  {
    id: 'L21',
    title: '경쟁 에이전시 프로필 광고 💥 — 醫美 觀光 대행 카피',
    subtitle: '대만인 창업 한국 의료미용 대행사의 프로필 광고 — 경쟁사 포지셔닝 + 신뢰 어필 어휘 (특수 유니코드는 일반 한자로 정규화)',
    source: 'Inbox (2026-06-02 — 경쟁 에이전시 광고)',
    type: 'vocab_burst',
    difficulty: 'B1',
    date: '2026-06-02',
    fullText: '🇰🇷 韓國合法設立｜醫美整形一站式 VIP 服務。10 年專業資歷．台灣人創辦。韓星名醫團隊．醫院同價 0 加價．1 億醫療觀光保險。翻譯、陪同、酒店、接送、點餐、術後照護。⭐️ 8000+ 華人醫美首選．2024 韓國新銳公司獎。LINE 立即諮詢。',
    koreanSummary: '🇰🇷 한국 합법 설립｜의료미용·성형 원스톱 VIP 서비스. 10년 전문 경력, 대만인 창업. 한류스타 담당 명의팀, 병원과 동일가·추가요금 0, 1억 의료관광 보험. 통역·동행·호텔·픽업·주문(식사)·시술 후 케어. ⭐️ 8000+ 화교/중화권 의료미용 1순위, 2024 한국 신예기업상. LINE으로 즉시 상담. (※ 경쟁 대행사 광고 — 우리 포지셔닝 비교용으로 읽기)',
    sentences: [
      {
        id: 1,
        hanzi: '韓國合法設立，醫美整形一站式 VIP 服務',
        zhuyin: 'ㄏㄢˊ ㄍㄨㄛˊ ㄏㄜˊ ㄈㄚˇ ㄕㄜˋ ㄌㄧˋ ㄧ ㄇㄟˇ ㄓㄥˇ ㄒㄧㄥˊ ㄧˊ ㄓㄢˋ ㄕˋ ㄈㄨˊ ㄨˋ',
        pinyin: 'Hánguó héfǎ shèlì, yīměi zhěngxíng yízhànshì VIP fúwù',
        korean: '한국 합법 설립, 의료미용·성형 원스톱 VIP 서비스',
        wordBreak: '合法(합법) | 設立(설립) | 醫美(의료미용) | 整形(성형) | 一站式(원스톱) | 服務(서비스)',
        keyPattern: '「合法設立」= 합법 설립 (신뢰 어필 단골). 「一站式」= 원스톱 ⭐ 서비스 광고 빈출. 「醫美」= 醫療美容 줄임 — 우리 업계 핵심어'
      },
      {
        id: 2,
        hanzi: '10 年專業資歷，台灣人創辦',
        zhuyin: 'ㄕˊ ㄋㄧㄢˊ ㄓㄨㄢ ㄧㄝˋ ㄗ ㄌㄧˋ ㄊㄞˊ ㄨㄢ ㄖㄣˊ ㄔㄨㄤˋ ㄅㄢˋ',
        pinyin: 'shí nián zhuānyè zīlì, Táiwān rén chuàngbàn',
        korean: '10년 전문 경력, 대만인 창업',
        wordBreak: '專業(전문) | 資歷(경력·이력) | 創辦(창립·창업)',
        keyPattern: '「資歷」= 경력/이력 (자격 어필). 「台灣人創辦」= "대만인이 창업" → 대만 고객 신뢰 포인트 (경쟁사 핵심 셀링)'
      },
      {
        id: 3,
        hanzi: '韓星名醫團隊，醫院同價 0 加價，1 億醫療觀光保險',
        zhuyin: 'ㄏㄢˊ ㄒㄧㄥ ㄇㄧㄥˊ ㄧ ㄊㄨㄢˊ ㄉㄨㄟˋ ㄧ ㄩㄢˋ ㄊㄨㄥˊ ㄐㄧㄚˋ ㄌㄧㄥˊ ㄐㄧㄚ ㄐㄧㄚˋ ㄧˊ ㄧˋ ㄧ ㄌㄧㄠˊ ㄍㄨㄢ ㄍㄨㄤ ㄅㄠˇ ㄒㄧㄢˇ',
        pinyin: 'Hánxīng míngyī tuánduì, yīyuàn tóngjià líng jiājià, yí yì yīliáo guānguāng bǎoxiǎn',
        korean: '한류스타 담당 명의팀, 병원과 동일가·추가요금 0, 1억 의료관광 보험',
        wordBreak: '韓星(한류스타) | 名醫(명의) | 團隊(팀) | 同價(동일 가격) | 加價(추가 요금) | 醫療觀光(의료관광) | 保險(보험)',
        keyPattern: '「同價 0 加價」= "병원과 같은 가격, 추가요금 없음" — 대행 수수료 우려 차단 카피 ⭐. 「醫療觀光」= 의료관광 (우리 사업 핵심 키워드)'
      },
      {
        id: 4,
        hanzi: '翻譯、陪同、酒店、接送、點餐、術後照護',
        zhuyin: 'ㄈㄢ ㄧˋ ㄆㄟˊ ㄊㄨㄥˊ ㄐㄧㄡˇ ㄉㄧㄢˋ ㄐㄧㄝ ㄙㄨㄥˋ ㄉㄧㄢˇ ㄘㄢ ㄕㄨˋ ㄏㄡˋ ㄓㄠˋ ㄏㄨˋ',
        pinyin: 'fānyì, péitóng, jiǔdiàn, jiēsòng, diǎncān, shùhòu zhàohù',
        korean: '통역, 동행, 호텔, 픽업(접송), 주문(식사), 시술 후 케어',
        wordBreak: '翻譯(통역·번역) | 陪同(동행) | 酒店(호텔·대만은 飯店도) | 接送(픽업·송영) | 點餐(주문하기) | 術後照護(시술 후 케어)',
        keyPattern: '대행 서비스 풀패키지 나열 ⭐. 「陪同」= 동행, 「接送」= 픽업/데려다주기, 「術後照護」= 애프터케어 — 의료관광 서비스 필수어 묶음'
      },
      {
        id: 5,
        hanzi: '8000+ 華人醫美首選，2024 韓國新銳公司獎，LINE 立即諮詢',
        zhuyin: 'ㄏㄨㄚˊ ㄖㄣˊ ㄧ ㄇㄟˇ ㄕㄡˇ ㄒㄩㄢˇ ㄒㄧㄣ ㄖㄨㄟˋ ㄍㄨㄥ ㄙ ㄐㄧㄤˇ ㄌㄧˋ ㄐㄧˊ ㄗ ㄒㄩㄣˊ',
        pinyin: '8000+ Huárén yīměi shǒuxuǎn, 2024 Hánguó xīnruì gōngsī jiǎng, LINE lìjí zīxún',
        korean: '8000+ 중화권 의료미용 1순위, 2024 한국 신예기업상, LINE으로 즉시 상담',
        wordBreak: '華人(화교·중화권) | 首選(첫 번째 선택·1순위) | 新銳(신예·떠오르는) | 公司獎(기업상) | 立即(즉시) | 諮詢(상담·문의)',
        keyPattern: '「首選」= "1순위 선택" ⭐ 광고 단골. 「新銳」= 신예/유망. 「立即諮詢」= "즉시 상담" CTA — 우리 광고에도 그대로 쓸 표현'
      }
    ],
    vocab: [
      { hanzi: '合法設立', zhuyin: 'ㄏㄜˊ ㄈㄚˇ ㄕㄜˋ ㄌㄧˋ', pinyin: 'héfǎ shèlì', korean: '합법 설립', pos: '구', hsk: '업무', tags: ['업무', '광고'], example: { hanzi: '韓國合法設立。', korean: '한국 합법 설립.' } },
      { hanzi: '一站式', zhuyin: 'ㄧˊ ㄓㄢˋ ㄕˋ', pinyin: 'yízhànshì', korean: '원스톱', pos: '형용사', hsk: '업계', tags: ['업계', '광고', '필수'], example: { hanzi: '一站式服務。', korean: '원스톱 서비스.' } },
      { hanzi: '醫美', zhuyin: 'ㄧ ㄇㄟˇ', pinyin: 'yīměi', korean: '의료미용 (醫療美容 줄임)', pos: '명사', hsk: '업계', tags: ['업계', '필수', '시술'], example: { hanzi: '華人醫美首選。', korean: '중화권 의료미용 1순위.' } },
      { hanzi: '專業資歷', zhuyin: 'ㄓㄨㄢ ㄧㄝˋ ㄗ ㄌㄧˋ', pinyin: 'zhuānyè zīlì', korean: '전문 경력·이력', pos: '명사', hsk: '업무', tags: ['업무', '광고'], example: { hanzi: '10 年專業資歷。', korean: '10년 전문 경력.' } },
      { hanzi: '創辦', zhuyin: 'ㄔㄨㄤˋ ㄅㄢˋ', pinyin: 'chuàngbàn', korean: '창립, 창업하다', pos: '동사', hsk: 5, tags: ['업무'], example: { hanzi: '台灣人創辦。', korean: '대만인이 창업.' } },
      { hanzi: '名醫', zhuyin: 'ㄇㄧㄥˊ ㄧ', pinyin: 'míngyī', korean: '명의, 유명 의사', pos: '명사', hsk: '업계', tags: ['업계', '시술'], example: { hanzi: '韓星名醫團隊。', korean: '한류스타 담당 명의팀.' } },
      { hanzi: '團隊', zhuyin: 'ㄊㄨㄢˊ ㄉㄨㄟˋ', pinyin: 'tuánduì', korean: '팀, 단체', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '我們的團隊。', korean: '우리 팀.' } },
      { hanzi: '加價', zhuyin: 'ㄐㄧㄚ ㄐㄧㄚˋ', pinyin: 'jiājià', korean: '추가 요금, 가격 인상', pos: '명사·동사', hsk: '업무', tags: ['업무', '광고', '필수'], example: { hanzi: '醫院同價 0 加價。', korean: '병원 동일가, 추가요금 0.' } },
      { hanzi: '醫療觀光', zhuyin: 'ㄧ ㄌㄧㄠˊ ㄍㄨㄢ ㄍㄨㄤ', pinyin: 'yīliáo guānguāng', korean: '의료관광', pos: '명사', hsk: '업계', tags: ['업계', '필수'], example: { hanzi: '醫療觀光保險。', korean: '의료관광 보험.' } },
      { hanzi: '陪同', zhuyin: 'ㄆㄟˊ ㄊㄨㄥˊ', pinyin: 'péitóng', korean: '동행하다', pos: '동사', hsk: 5, tags: ['업계', '서비스'], example: { hanzi: '提供陪同服務。', korean: '동행 서비스 제공.' } },
      { hanzi: '接送', zhuyin: 'ㄐㄧㄝ ㄙㄨㄥˋ', pinyin: 'jiēsòng', korean: '픽업·송영 (데려오고 데려다줌)', pos: '동사', hsk: '업계', tags: ['업계', '서비스'], example: { hanzi: '機場接送。', korean: '공항 픽업.' } },
      { hanzi: '術後照護', zhuyin: 'ㄕㄨˋ ㄏㄡˋ ㄓㄠˋ ㄏㄨˋ', pinyin: 'shùhòu zhàohù', korean: '시술 후 케어, 애프터케어', pos: '명사', hsk: '업계', tags: ['업계', '시술', '필수'], example: { hanzi: '完整術後照護。', korean: '완벽한 애프터케어.' } },
      { hanzi: '華人', zhuyin: 'ㄏㄨㄚˊ ㄖㄣˊ', pinyin: 'Huárén', korean: '화교, 중화권 사람', pos: '명사', hsk: 4, tags: ['업무'], example: { hanzi: '華人醫美首選。', korean: '중화권 의료미용 1순위.' } },
      { hanzi: '首選', zhuyin: 'ㄕㄡˇ ㄒㄩㄢˇ', pinyin: 'shǒuxuǎn', korean: '1순위 선택, 최우선', pos: '명사', hsk: '업무', tags: ['업무', '광고', '필수'], example: { hanzi: '醫美首選。', korean: '의료미용 1순위.' } },
      { hanzi: '新銳', zhuyin: 'ㄒㄧㄣ ㄖㄨㄟˋ', pinyin: 'xīnruì', korean: '신예, 떠오르는', pos: '형용사', hsk: 5, tags: ['업무'], example: { hanzi: '新銳公司獎。', korean: '신예기업상.' } },
      { hanzi: '諮詢', zhuyin: 'ㄗ ㄒㄩㄣˊ', pinyin: 'zīxún', korean: '상담, 문의', pos: '명사·동사', hsk: 5, tags: ['업무', '광고', '필수'], example: { hanzi: 'LINE 立即諮詢。', korean: 'LINE으로 즉시 상담.' } }
    ],
    practice: [
      {
        prompt: '우리 서비스/플랫폼을 한 줄 신뢰 카피로 소개하기 (경쟁사 톤 차용)',
        modelAnswers: [
          { level: '자연스러움', hanzi: 'UNNI 是華人醫美首選平台，繁中介面、真實評價，立即諮詢!', pinyin: 'UNNI shì Huárén yīměi shǒuxuǎn píngtái, fánzhōng jièmiàn, zhēnshí píngjià, lìjí zīxún!', korean: 'UNNI는 중화권 의료미용 1순위 플랫폼, 번체 인터페이스·진짜 후기, 즉시 상담!' }
        ]
      },
      {
        prompt: '의료관광 풀패키지 서비스를 나열하기',
        modelAnswers: [
          { level: '간단', hanzi: '我們提供翻譯、接送、術後照護等一站式服務。', pinyin: 'wǒmen tígōng fānyì, jiēsòng, shùhòu zhàohù děng yízhànshì fúwù.', korean: '저희는 통역·픽업·애프터케어 등 원스톱 서비스를 제공해요.' }
        ]
      }
    ]
  },
  {
    id: 'L22',
    title: '협업 재제안 follow-up 이메일 (UNNI) ⭐⭐ — 본인 핵심 템플릿',
    subtitle: '무응답 인플루언서에게 다시 제안하는 메일 — 브랜드 소개 + 협업 형식 + 검기(檔期) 제시. 그대로 외워 활용',
    source: 'Inbox (2026-06-02 — 본인 발송 템플릿)',
    type: 'business_email_intro',
    difficulty: 'B1',
    date: '2026-06-02',
    fullText: 'Hi {인플루언서 이름}，上次有寄給妳合作邀約信，不知道是否有看到呢？😊 想再次跟妳介紹 UNNI 這個品牌～我們是韓國用戶數 No.1 的醫美平台，現在也推出繁體中文版了！希望能藉由妳的影響力，讓更多台灣用戶認識我們～合作形式其實很簡單：✨ IG Reels (90秒) + IG Story 一則帶連結。📅 檔期：6 月底前上刊（避開假日）。我們對妳的風格和受眾很感興趣，覺得是個很棒的合作機會！如果有興趣，歡迎直接回覆或加我 LINE：{라인아이디}，期待收到妳的回覆～',
    koreanSummary: 'Hi {인플루언서 이름}, 지난번에 협업 제안 메일 보냈는데 혹시 보셨을까요?😊 UNNI 브랜드를 다시 한번 소개드리고 싶어요~ 저희는 한국 사용자 수 No.1 의료미용 플랫폼이고, 지금은 번체 중국어 버전도 출시했어요! 당신의 영향력을 통해 더 많은 대만 사용자가 저희를 알게 되길 바라요~ 협업 형식은 사실 간단해요: ✨IG 릴스(90초) + IG 스토리 1건(링크 포함). 📅 검기(일정): 6월 말 전 게재(공휴일 피해서). 당신의 스타일과 오디언스에 정말 관심 있고, 멋진 협업 기회라고 생각해요! 관심 있으시면 바로 회신하시거나 LINE 추가해 주세요: {라인아이디}, 답변 기다릴게요~',
    sentences: [
      {
        id: 1,
        hanzi: '上次有寄給妳合作邀約信，不知道是否有看到呢？',
        zhuyin: 'ㄕㄤˋ ㄘˋ ㄧㄡˇ ㄐㄧˋ ㄍㄟˇ ㄋㄧˇ ㄏㄜˊ ㄗㄨㄛˋ ㄧㄠ ㄩㄝ ㄒㄧㄣˋ ㄅㄨˋ ㄓ ㄉㄠˋ ㄕˋ ㄈㄡˇ ㄧㄡˇ ㄎㄢˋ ㄉㄠˋ ㄋㄜ˙',
        pinyin: 'shàngcì yǒu jì gěi nǐ hézuò yāoyuē xìn, bù zhīdào shìfǒu yǒu kàndào ne?',
        korean: '지난번에 협업 제안 메일을 보냈는데, 혹시 보셨는지 모르겠어요?',
        wordBreak: '上次(지난번) | 寄信(메일 보내다) | 邀約信(제안 메일) | 是否(~인지 아닌지) | 看到(보다·확인하다)',
        keyPattern: '「不知道是否有~呢？」= "혹시 ~하셨는지 모르겠어요?" 무응답 정중 리마인드 공식 ⭐. 추궁 아닌 부드러운 톤'
      },
      {
        id: 2,
        hanzi: '想再次跟妳介紹 UNNI 這個品牌～',
        zhuyin: 'ㄒㄧㄤˇ ㄗㄞˋ ㄘˋ ㄍㄣ ㄋㄧˇ ㄐㄧㄝˋ ㄕㄠˋ ㄓㄜˋ ㄍㄜˋ ㄆㄧㄣˇ ㄆㄞˊ',
        pinyin: 'xiǎng zàicì gēn nǐ jièshào UNNI zhège pǐnpái~',
        korean: 'UNNI라는 브랜드를 다시 한번 소개드리고 싶어요~',
        wordBreak: '再次(다시 한번) | 跟妳介紹(당신에게 소개하다) | 品牌(브랜드)',
        keyPattern: '「想再次跟妳介紹~」= 재컨택 도입 공식 ⭐. 「跟+사람+介紹」= "~에게 소개하다"'
      },
      {
        id: 3,
        hanzi: '我們是韓國用戶數 No.1 的醫美平台，現在也推出繁體中文版了！',
        zhuyin: 'ㄨㄛˇ ㄇㄣ˙ ㄕˋ ㄏㄢˊ ㄍㄨㄛˊ ㄩㄥˋ ㄏㄨˋ ㄕㄨˋ ㄉㄜ˙ ㄧ ㄇㄟˇ ㄆㄧㄥˊ ㄊㄞˊ ㄒㄧㄢˋ ㄗㄞˋ ㄧㄝˇ ㄊㄨㄟ ㄔㄨ ㄈㄢˊ ㄊㄧˇ ㄓㄨㄥ ㄨㄣˊ ㄅㄢˇ ㄌㄜ˙',
        pinyin: 'wǒmen shì Hánguó yònghùshù No.1 de yīměi píngtái, xiànzài yě tuīchū fántǐ zhōngwén bǎn le!',
        korean: '저희는 한국 사용자 수 No.1 의료미용 플랫폼이고, 지금은 번체 중국어 버전도 출시했어요!',
        wordBreak: '用戶數(사용자 수) | 平台(플랫폼) | 推出(출시·선보이다) | 繁體中文版(번체 중국어 버전)',
        keyPattern: '「用戶數 No.1 的~平台」= 한 줄 브랜드 권위 소개 ⭐. 「推出~了」= "~를 출시했어요" 신규 런칭 알림 공식'
      },
      {
        id: 4,
        hanzi: '希望能藉由妳的影響力，讓更多台灣用戶認識我們～',
        zhuyin: 'ㄒㄧ ㄨㄤˋ ㄋㄥˊ ㄐㄧㄝˋ ㄧㄡˊ ㄋㄧˇ ㄉㄜ˙ ㄧㄥˇ ㄒㄧㄤˇ ㄌㄧˋ ㄖㄤˋ ㄍㄥ ㄉㄨㄛ ㄊㄞˊ ㄨㄢ ㄩㄥˋ ㄏㄨˋ ㄖㄣˋ ㄕˋ ㄨㄛˇ ㄇㄣ˙',
        pinyin: 'xīwàng néng jièyóu nǐ de yǐngxiǎnglì, ràng gèng duō Táiwān yònghù rènshì wǒmen~',
        korean: '당신의 영향력을 통해 더 많은 대만 사용자가 저희를 알게 되길 바라요~',
        wordBreak: '藉由(~을 통해) | 影響力(영향력) | 讓(~하게 하다) | 更多(더 많은) | 認識(알다·인지하다)',
        keyPattern: '「藉由妳的影響力，讓~認識我們」= 인플 협업 제안의 핵심 가치 문장 ⭐. 「藉由」= "~을 통해/매개로" (격식, =透過)'
      },
      {
        id: 5,
        hanzi: '合作形式其實很簡單：IG Reels (90秒) + IG Story 一則帶連結',
        zhuyin: 'ㄏㄜˊ ㄗㄨㄛˋ ㄒㄧㄥˊ ㄕˋ ㄑㄧˊ ㄕˊ ㄏㄣˇ ㄐㄧㄢˇ ㄉㄢ ㄧˋ ㄗㄜˊ ㄉㄞˋ ㄌㄧㄢˋ ㄐㄧㄝˊ',
        pinyin: 'hézuò xíngshì qíshí hěn jiǎndān: IG Reels (90 miǎo) + IG Story yì zé dài liánjié',
        korean: '협업 형식은 사실 간단해요: IG 릴스(90초) + IG 스토리 1건(링크 포함)',
        wordBreak: '合作形式(협업 형식) | 其實(사실) | 簡單(간단) | 一則(한 건·게시물 단위) | 帶連結(링크 포함·링크 달기)',
        keyPattern: '「合作形式其實很簡單：~」= 협업 부담 낮추는 제안 공식 ⭐. 「一則」= 스토리/포스트 세는 양사. 「帶連結」= 링크 포함'
      },
      {
        id: 6,
        hanzi: '檔期：6 月底前上刊（避開假日），期待收到妳的回覆～',
        zhuyin: 'ㄉㄤˇ ㄑㄧˊ ㄌㄧㄡˋ ㄩㄝˋ ㄉㄧˇ ㄑㄧㄢˊ ㄕㄤˋ ㄎㄢ ㄅㄧˋ ㄎㄞ ㄐㄧㄚˋ ㄖˋ ㄑㄧˊ ㄉㄞˋ ㄕㄡ ㄉㄠˋ ㄋㄧˇ ㄉㄜ˙ ㄏㄨㄟˊ ㄈㄨˋ',
        pinyin: 'dàngqí: 6 yuè dǐ qián shàngkān (bìkāi jiàrì), qídài shōudào nǐ de huífù~',
        korean: '검기(일정): 6월 말 전 게재(공휴일 피해서), 답변 기다릴게요~',
        wordBreak: '檔期(일정·게재 기간) | 月底(월말) | 上刊(게재·업로드) | 避開(피하다) | 假日(공휴일) | 期待(기대) | 回覆(회신)',
        keyPattern: '「檔期」= 콘텐츠 게재 일정 ⭐ 업계 필수. 「上刊」= 게재/업로드(대만식). 「期待收到妳的回覆」= 메일 맺음말 공식'
      }
    ],
    vocab: [
      { hanzi: '邀約信', zhuyin: 'ㄧㄠ ㄩㄝ ㄒㄧㄣˋ', pinyin: 'yāoyuē xìn', korean: '제안 메일, 초청장', pos: '명사', hsk: '업무', tags: ['업무', '이메일', '필수', '인플루언서'], example: { hanzi: '上次寄了邀約信。', korean: '지난번에 제안 메일 보냈어요.' } },
      { hanzi: '是否', zhuyin: 'ㄕˋ ㄈㄡˇ', pinyin: 'shìfǒu', korean: '~인지 아닌지 (격식)', pos: '부사', hsk: 5, tags: ['이메일', '격식', '필수'], example: { hanzi: '不知道是否有看到。', korean: '보셨는지 모르겠어요.' } },
      { hanzi: '品牌', zhuyin: 'ㄆㄧㄣˇ ㄆㄞˊ', pinyin: 'pǐnpái', korean: '브랜드', pos: '명사', hsk: 4, tags: ['업무', '필수', '인플루언서'], example: { hanzi: '介紹這個品牌。', korean: '이 브랜드를 소개해요.' } },
      { hanzi: '用戶數', zhuyin: 'ㄩㄥˋ ㄏㄨˋ ㄕㄨˋ', pinyin: 'yònghùshù', korean: '사용자 수', pos: '명사', hsk: '업무', tags: ['업무', '인플루언서'], example: { hanzi: '用戶數 No.1。', korean: '사용자 수 1위.' } },
      { hanzi: '平台', zhuyin: 'ㄆㄧㄥˊ ㄊㄞˊ', pinyin: 'píngtái', korean: '플랫폼', pos: '명사', hsk: 4, tags: ['업무', '필수', '인플루언서'], example: { hanzi: '醫美平台。', korean: '의료미용 플랫폼.' } },
      { hanzi: '推出', zhuyin: 'ㄊㄨㄟ ㄔㄨ', pinyin: 'tuīchū', korean: '출시하다, 선보이다', pos: '동사', hsk: 5, tags: ['업무', '필수'], example: { hanzi: '推出繁中版了。', korean: '번체 버전을 출시했어요.' } },
      { hanzi: '繁體中文', zhuyin: 'ㄈㄢˊ ㄊㄧˇ ㄓㄨㄥ ㄨㄣˊ', pinyin: 'fántǐ zhōngwén', korean: '번체 중국어 (대만식 한자)', pos: '명사', hsk: '업무', tags: ['업무', '대만식', '필수'], example: { hanzi: '繁體中文版。', korean: '번체 중국어 버전.' } },
      { hanzi: '藉由', zhuyin: 'ㄐㄧㄝˋ ㄧㄡˊ', pinyin: 'jièyóu', korean: '~을 통해·매개로 (격식, =透過)', pos: '전치사', hsk: 5, tags: ['이메일', '격식', '필수'], example: { hanzi: '藉由妳的影響力。', korean: '당신의 영향력을 통해.' } },
      { hanzi: '影響力', zhuyin: 'ㄧㄥˇ ㄒㄧㄤˇ ㄌㄧˋ', pinyin: 'yǐngxiǎnglì', korean: '영향력', pos: '명사', hsk: 5, tags: ['인플루언서', '필수'], example: { hanzi: '妳的影響力很大。', korean: '당신의 영향력이 커요.' } },
      { hanzi: '合作形式', zhuyin: 'ㄏㄜˊ ㄗㄨㄛˋ ㄒㄧㄥˊ ㄕˋ', pinyin: 'hézuò xíngshì', korean: '협업 형식·방식', pos: '명사', hsk: '업무', tags: ['업무', '인플루언서', '필수'], example: { hanzi: '合作形式很簡單。', korean: '협업 형식은 간단해요.' } },
      { hanzi: '一則', zhuyin: 'ㄧˋ ㄗㄜˊ', pinyin: 'yì zé', korean: '한 건 (게시물·메시지 양사)', pos: '양사', hsk: 5, tags: ['인플루언서'], example: { hanzi: 'IG Story 一則。', korean: 'IG 스토리 1건.' } },
      { hanzi: '帶連結', zhuyin: 'ㄉㄞˋ ㄌㄧㄢˋ ㄐㄧㄝˊ', pinyin: 'dài liánjié', korean: '링크 포함, 링크 달기', pos: '동사구', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: 'Story 帶連結。', korean: '스토리에 링크 달기.' } },
      { hanzi: '檔期', zhuyin: 'ㄉㄤˇ ㄑㄧˊ', pinyin: 'dàngqí', korean: '일정, 게재 기간', pos: '명사', hsk: '업계', tags: ['업계', '필수', '인플루언서'], example: { hanzi: '檔期 6 月底前。', korean: '일정은 6월 말 전.' } },
      { hanzi: '上刊', zhuyin: 'ㄕㄤˋ ㄎㄢ', pinyin: 'shàngkān', korean: '게재, 업로드 (대만식)', pos: '동사', hsk: '업계', tags: ['업계', '대만식', '필수', '인플루언서'], example: { hanzi: '6 月底前上刊。', korean: '6월 말 전 게재.' } },
      { hanzi: '避開', zhuyin: 'ㄅㄧˋ ㄎㄞ', pinyin: 'bìkāi', korean: '피하다', pos: '동사', hsk: 5, tags: ['업무', '회화'], example: { hanzi: '避開假日。', korean: '공휴일을 피해서.' } },
      { hanzi: '期待', zhuyin: 'ㄑㄧˊ ㄉㄞˋ', pinyin: 'qídài', korean: '기대하다', pos: '동사', hsk: 4, tags: ['이메일', '필수'], example: { hanzi: '期待妳的回覆。', korean: '답변 기다릴게요.' } }
    ],
    practice: [
      {
        prompt: '무응답 인플루언서에게 다시 제안 메일 보내기 (follow-up 도입)',
        modelAnswers: [
          { level: '템플릿', hanzi: 'Hi {이름}，上次有寄給妳合作邀約信，不知道是否有看到呢？😊 想再次跟妳介紹 UNNI～我們是韓國用戶數 No.1 的醫美平台，現在也推出繁體中文版了！', pinyin: '(템플릿)', korean: '템플릿 — 이름만 바꿔 재제안 도입에 그대로 ⭐' }
        ]
      },
      {
        prompt: '협업 형식·검기를 간단히 제시하고 회신 요청하기',
        modelAnswers: [
          { level: '자연스러움', hanzi: '合作形式很簡單：IG Reels + Story 帶連結，檔期希望 6 月底前上刊（避開假日）。有興趣的話歡迎回覆或加 LINE，期待收到妳的回覆～', pinyin: 'hézuò xíngshì hěn jiǎndān: IG Reels + Story dài liánjié, dàngqí xīwàng 6 yuè dǐ qián shàngkān (bìkāi jiàrì). yǒu xìngqù dehuà huānyíng huífù huò jiā LINE, qídài shōudào nǐ de huífù~', korean: '협업 형식 간단해요: IG 릴스+스토리 링크, 일정은 6월 말 전 게재(공휴일 피해서)요. 관심 있으면 회신하거나 LINE 추가해 주세요, 답변 기다릴게요~' }
        ]
      }
    ]
  },
  {
    id: 'L23',
    title: '협업 진행 일정표 ⭐ — 腳本→上刊→付款 단계별 용어',
    subtitle: '촬영 스크립트부터 게재·결제까지 협업 진행 스케줄 — 정산·납품 용어 위주 (시유=대행/크리에이터 측)',
    source: 'Inbox (2026-06-02 — 협업 일정표)',
    type: 'business_email_terms',
    difficulty: 'B1-B2',
    date: '2026-06-02',
    fullText: '협업 진행 일정: 시유 제공 拍攝腳本初稿 → 品牌回應腳本 → 시유 提供 Acopy + REELS 文案 → 品牌回應 Acopy → 시유 提供 Bcopy → 品牌回應 Bcopy → 시유 上刊 + 提供品牌影片原始檔 + 廣告授權代碼 → 品牌付款。',
    koreanSummary: '협업 진행 일정 흐름: ①시유(크리에이터/대행 측)가 촬영 스크립트 초안 제공 → ②브랜드가 스크립트 회신 → ③시유가 A카피+릴스 문안 제공 → ④브랜드가 A카피 회신 → ⑤시유가 B카피 제공 → ⑥브랜드가 B카피 회신 → ⑦시유 게재 + 브랜드용 영상 원본 파일·광고 사용권 코드 제공 → ⑧브랜드 결제. (※ 원문 날짜에 06/02가 화·금 두 번 표기된 오타 있음 — 순서 흐름 위주로 학습)',
    sentences: [
      {
        id: 1,
        hanzi: '시유提供拍攝腳本初稿，品牌回應腳本',
        zhuyin: 'ㄊㄧˊ ㄍㄨㄥ ㄆㄞ ㄕㄜˋ ㄐㄧㄠˇ ㄅㄣˇ ㄔㄨ ㄍㄠˇ ㄆㄧㄣˇ ㄆㄞˊ ㄏㄨㄟˊ ㄧㄥˋ ㄐㄧㄠˇ ㄅㄣˇ',
        pinyin: 'tígōng pāishè jiǎoběn chūgǎo, pǐnpái huíyìng jiǎoběn',
        korean: '촬영 스크립트 초안 제공, 브랜드가 스크립트 회신',
        wordBreak: '提供(제공) | 拍攝(촬영) | 腳本(스크립트·대본) | 初稿(초안) | 品牌(브랜드) | 回應(회신·응답)',
        keyPattern: '「腳本初稿」= 대본 초안 ⭐ 콘텐츠 제작 빈출. 「回應」= 피드백/회신 (=回覆보다 검토·반응 뉘앙스). 협업 1단계'
      },
      {
        id: 2,
        hanzi: '시유提供 Acopy + REELS 文案，品牌回應 Acopy',
        zhuyin: 'ㄊㄧˊ ㄍㄨㄥ ㄨㄣˊ ㄢˋ ㄆㄧㄣˇ ㄆㄞˊ ㄏㄨㄟˊ ㄧㄥˋ',
        pinyin: 'tígōng Acopy + REELS wén\'àn, pǐnpái huíyìng Acopy',
        korean: 'A카피 + 릴스 문안 제공, 브랜드가 A카피 회신',
        wordBreak: '文案(카피·문안) | Acopy/Bcopy(1차/2차 카피안) | 回應(회신)',
        keyPattern: '「文案」= 광고 카피/문안 ⭐ 초빈출. Acopy→Bcopy = 카피 1차안→2차안 수정 라운드 (제작 협업 표준 흐름)'
      },
      {
        id: 3,
        hanzi: '시유提供 Bcopy，品牌回應 Bcopy',
        zhuyin: 'ㄊㄧˊ ㄍㄨㄥ ㄆㄧㄣˇ ㄆㄞˊ ㄏㄨㄟˊ ㄧㄥˋ',
        pinyin: 'tígōng Bcopy, pǐnpái huíyìng Bcopy',
        korean: 'B카피 제공, 브랜드가 B카피 회신',
        wordBreak: '提供(제공) | Bcopy(2차 카피안) | 回應(회신)',
        keyPattern: '카피 수정 2라운드. 「A안 피드백 → B안 → 최종 확정」이 콘텐츠 협업의 전형적 검수 사이클 ⭐'
      },
      {
        id: 4,
        hanzi: '시유上刊，提供品牌影片原始檔 + 廣告授權代碼',
        zhuyin: 'ㄕㄤˋ ㄎㄢ ㄊㄧˊ ㄍㄨㄥ ㄆㄧㄣˇ ㄆㄞˊ ㄧㄥˇ ㄆㄧㄢˋ ㄩㄢˊ ㄕˇ ㄉㄤˋ ㄍㄨㄤˇ ㄍㄠˋ ㄕㄡˋ ㄑㄩㄢˊ ㄉㄞˋ ㄇㄚˇ',
        pinyin: 'shàngkān, tígōng pǐnpái yǐngpiàn yuánshǐ dàng + guǎnggào shòuquán dàimǎ',
        korean: '게재, 브랜드용 영상 원본 파일 + 광고 사용권 코드 제공',
        wordBreak: '上刊(게재) | 影片(영상) | 原始檔(원본 파일) | 廣告授權(광고 사용권) | 代碼(코드)',
        keyPattern: '「原始檔」= 원본 파일(raw/소스) ⭐ 납품 필수어. 「廣告授權代碼」= 광고 집행용 사용권 코드 (브랜드가 광고 돌릴 권한). 납품 단계 핵심'
      },
      {
        id: 5,
        hanzi: '品牌付款',
        zhuyin: 'ㄆㄧㄣˇ ㄆㄞˊ ㄈㄨˋ ㄎㄨㄢˇ',
        pinyin: 'pǐnpái fùkuǎn',
        korean: '브랜드 결제 (대금 지급)',
        wordBreak: '品牌(브랜드) | 付款(결제·대금 지급)',
        keyPattern: '「付款」= 결제/대금 지급 ⭐ 정산 필수어. 일반적으로 납품(上刊+원본+授權代碼) 완료 후 결제가 마지막 단계'
      }
    ],
    vocab: [
      { hanzi: '提供', zhuyin: 'ㄊㄧˊ ㄍㄨㄥ', pinyin: 'tígōng', korean: '제공하다', pos: '동사', hsk: 4, tags: ['업무', '이메일', '필수'], example: { hanzi: '提供拍攝腳本。', korean: '촬영 스크립트를 제공해요.' } },
      { hanzi: '腳本', zhuyin: 'ㄐㄧㄠˇ ㄅㄣˇ', pinyin: 'jiǎoběn', korean: '스크립트, 대본', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: '拍攝腳本初稿。', korean: '촬영 대본 초안.' } },
      { hanzi: '初稿', zhuyin: 'ㄔㄨ ㄍㄠˇ', pinyin: 'chūgǎo', korean: '초안, 초고', pos: '명사', hsk: '업무', tags: ['업무', '필수'], example: { hanzi: '先給初稿。', korean: '먼저 초안 드려요.' } },
      { hanzi: '回應', zhuyin: 'ㄏㄨㄟˊ ㄧㄥˋ', pinyin: 'huíyìng', korean: '회신, 응답, 피드백', pos: '명사·동사', hsk: 5, tags: ['업무', '이메일', '필수'], example: { hanzi: '品牌回應腳本。', korean: '브랜드가 스크립트에 피드백.' } },
      { hanzi: '文案', zhuyin: 'ㄨㄣˊ ㄢˋ', pinyin: 'wén\'àn', korean: '카피, 문안', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: 'REELS 文案。', korean: '릴스 카피(문안).' } },
      { hanzi: '原始檔', zhuyin: 'ㄩㄢˊ ㄕˇ ㄉㄤˋ', pinyin: 'yuánshǐ dàng', korean: '원본 파일 (raw/소스)', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: '提供影片原始檔。', korean: '영상 원본 파일 제공.' } },
      { hanzi: '影片', zhuyin: 'ㄧㄥˇ ㄆㄧㄢˋ', pinyin: 'yǐngpiàn', korean: '영상, 동영상 (대만식)', pos: '명사', hsk: 4, tags: ['인플루언서', '대만식', '필수'], example: { hanzi: '品牌影片原始檔。', korean: '브랜드 영상 원본.' } },
      { hanzi: '授權代碼', zhuyin: 'ㄕㄡˋ ㄑㄩㄢˊ ㄉㄞˋ ㄇㄚˇ', pinyin: 'shòuquán dàimǎ', korean: '사용권 코드 (광고 집행용)', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: '提供廣告授權代碼。', korean: '광고 사용권 코드 제공.' } },
      { hanzi: '付款', zhuyin: 'ㄈㄨˋ ㄎㄨㄢˇ', pinyin: 'fùkuǎn', korean: '결제, 대금 지급', pos: '명사·동사', hsk: 4, tags: ['업무', '정산', '필수'], example: { hanzi: '上刊後付款。', korean: '게재 후 결제.' } },
      { hanzi: '品牌', zhuyin: 'ㄆㄧㄣˇ ㄆㄞˊ', pinyin: 'pǐnpái', korean: '브랜드 (여기선 발주처)', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '品牌回應。', korean: '브랜드(발주처) 회신.' } },
      { hanzi: '拍攝', zhuyin: 'ㄆㄞ ㄕㄜˋ', pinyin: 'pāishè', korean: '촬영', pos: '동사', hsk: 5, tags: ['인플루언서', '필수'], example: { hanzi: '拍攝腳本。', korean: '촬영 대본.' } }
    ],
    practice: [
      {
        prompt: '협업 진행 일정을 단계별로 안내하기 (스케줄 공유)',
        modelAnswers: [
          { level: '템플릿', hanzi: '進行流程：① 我們提供拍攝腳本初稿 → ② 品牌回應 → ③ 提供文案 (Acopy/Bcopy) → ④ 上刊並提供影片原始檔與授權代碼 → ⑤ 品牌付款。', pinyin: '(템플릿)', korean: '템플릿 — 협업 흐름 단계별 안내에 그대로 ⭐' }
        ]
      },
      {
        prompt: '납품 완료 후 결제를 정중히 안내·요청하기',
        modelAnswers: [
          { level: '자연스러움', hanzi: '影片已上刊，原始檔與廣告授權代碼也一併提供給您了，再麻煩您安排付款，謝謝!', pinyin: 'yǐngpiàn yǐ shàngkān, yuánshǐ dàng yǔ guǎnggào shòuquán dàimǎ yě yībìng tígōng gěi nín le, zài máfan nín ānpái fùkuǎn, xièxie!', korean: '영상 게재 완료했고, 원본 파일과 광고 사용권 코드도 함께 전달드렸어요. 결제 진행 부탁드려요, 감사합니다!' }
        ]
      }
    ]
  },
  {
    id: 'L24',
    title: '醫美 앱 광고 카피 ⭐ — 價格透明·高CP值 (소비자 어필)',
    subtitle: 'UNNI 같은 의료미용 앱의 소비자 대상 광고 카피 — 가격 투명성·가성비 어필 정형 표현',
    source: '대만어 번역 채팅 corpus (2026-06-01·06-05)',
    type: 'vocab_burst',
    difficulty: 'A2-B1',
    date: '2026-06-05',
    fullText: '韓國診所的實際價格，打開就看得到。不用一間一間問，也不用怕踩雷。價格透明，還能直接按照價位高低排序。高CP值療程。',
    koreanSummary: '의료미용 앱이 소비자에게 강조하는 핵심 셀링 포인트 모음: ①한국 병원 실제 가격을 앱 열면 바로 확인 ②일일이 문의할 필요 없고 잘못 고를(踩雷) 걱정 없음 ③가격 투명 + 가격대별 정렬 가능 ④가성비(高CP值) 좋은 시술. 소비자 어필 광고 카피의 정형구를 익히는 레슨.',
    sentences: [
      {
        id: 1,
        hanzi: '韓國診所的實際價格，打開就看得到',
        zhuyin: 'ㄏㄢˊ ㄍㄨㄛˊ ㄓㄣˇ ㄙㄨㄛˇ ㄉㄜ˙ ㄕˊ ㄐㄧˋ ㄐㄧㄚˋ ㄍㄜˊ，ㄉㄚˇ ㄎㄞ ㄐㄧㄡˋ ㄎㄢˋ ㄉㄜˊ ㄉㄠˋ',
        pinyin: 'Hánguó zhěnsuǒ de shíjì jiàgé, dǎkāi jiù kàn dé dào',
        korean: '한국 병원 실제 가격, (앱을) 열면 바로 보여요',
        wordBreak: '診所(병원·의원) | 實際(실제) | 價格(가격) | 打開(열다) | 看得到(볼 수 있다)',
        keyPattern: '「打開就看得到」= 열면 바로 보인다 ⭐ 앱 편의성 어필 광고 정형구. 「就」= 곧/바로 (즉시성 강조)'
      },
      {
        id: 2,
        hanzi: '不用一間一間問，也不用怕踩雷',
        zhuyin: 'ㄅㄨˊ ㄩㄥˋ ㄧˋ ㄐㄧㄢ ㄧˋ ㄐㄧㄢ ㄨㄣˋ，ㄧㄝˇ ㄅㄨˊ ㄩㄥˋ ㄆㄚˋ ㄘㄞˇ ㄌㄟˊ',
        pinyin: 'búyòng yì jiān yì jiān wèn, yě búyòng pà cǎiléi',
        korean: '일일이 (병원마다) 물어볼 필요 없고, 잘못 고를 걱정도 없어요',
        wordBreak: '不用(~할 필요 없다) | 一間一間(한 곳 한 곳·일일이) | 問(묻다) | 怕(두려워하다) | 踩雷(지뢰 밟다→실패하다)',
        keyPattern: '「踩雷」= 지뢰를 밟다 → 잘못된 선택/지뢰 제품에 당하다 ⭐ 대만 구어 초빈출. 「不用怕…」= ~할 걱정 없다 (안심 어필)'
      },
      {
        id: 3,
        hanzi: '價格透明，還能直接按照價位高低排序',
        zhuyin: 'ㄐㄧㄚˋ ㄍㄜˊ ㄊㄡˋ ㄇㄧㄥˊ，ㄏㄞˊ ㄋㄥˊ ㄓˊ ㄐㄧㄝ ㄢˋ ㄓㄠˋ ㄐㄧㄚˋ ㄨㄟˋ ㄍㄠ ㄉㄧ ㄆㄞˊ ㄒㄩˋ',
        pinyin: 'jiàgé tòumíng, hái néng zhíjiē ànzhào jiàwèi gāodī páixù',
        korean: '가격이 투명하고, 가격대 높낮이로 바로 정렬도 가능해요',
        wordBreak: '透明(투명) | 還能(게다가 ~할 수 있다) | 直接(직접·바로) | 按照(~에 따라) | 價位(가격대) | 高低(높낮이) | 排序(정렬)',
        keyPattern: '「按照 A 排序」= A 기준으로 정렬 ⭐ 앱 기능 설명 정형구. 「還能」= 게다가/추가로 ~까지 된다 (장점 누적)'
      },
      {
        id: 4,
        hanzi: '高CP值療程',
        zhuyin: 'ㄍㄠ CP ㄓˊ ㄌㄧㄠˊ ㄔㄥˊ',
        pinyin: 'gāo CP zhí liáochéng',
        korean: '가성비 좋은 시술',
        wordBreak: '高(높다) | CP值(가성비, cost-performance) | 療程(시술·치료 코스)',
        keyPattern: '「CP值」= 가성비 ⭐⭐ 대만 광고·구어 초빈출 (영어 cost-performance에서). 「高CP值」= 가성비 갑. 「療程」= 1회성 施術보다 코스/회차 개념'
      }
    ],
    vocab: [
      { hanzi: '診所', zhuyin: 'ㄓㄣˇ ㄙㄨㄛˇ', pinyin: 'zhěnsuǒ', korean: '병원, 의원, 클리닉', pos: '명사', hsk: '업계', tags: ['업계', '의료미용', '필수'], example: { hanzi: '韓國診所價格。', korean: '한국 병원 가격.' } },
      { hanzi: '踩雷', zhuyin: 'ㄘㄞˇ ㄌㄟˊ', pinyin: 'cǎiléi', korean: '지뢰 밟다 → 잘못 골라 실패하다', pos: '동사', hsk: '대만구어', tags: ['대만식', '구어', '필수'], example: { hanzi: '不用怕踩雷。', korean: '잘못 고를 걱정 없어요.' } },
      { hanzi: '透明', zhuyin: 'ㄊㄡˋ ㄇㄧㄥˊ', pinyin: 'tòumíng', korean: '투명하다', pos: '형용사', hsk: 4, tags: ['업무', '마케팅', '필수'], example: { hanzi: '價格透明。', korean: '가격이 투명해요.' } },
      { hanzi: '按照', zhuyin: 'ㄢˋ ㄓㄠˋ', pinyin: 'ànzhào', korean: '~에 따라, ~기준으로', pos: '전치사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '按照價位排序。', korean: '가격대 기준으로 정렬.' } },
      { hanzi: '排序', zhuyin: 'ㄆㄞˊ ㄒㄩˋ', pinyin: 'páixù', korean: '정렬, 순서대로 나열', pos: '명사·동사', hsk: '업계', tags: ['업계', 'IT', '필수'], example: { hanzi: '高低排序。', korean: '높낮이로 정렬.' } },
      { hanzi: '價位', zhuyin: 'ㄐㄧㄚˋ ㄨㄟˋ', pinyin: 'jiàwèi', korean: '가격대', pos: '명사', hsk: 5, tags: ['업무', '마케팅'], example: { hanzi: '不同價位。', korean: '다양한 가격대.' } },
      { hanzi: 'CP值', zhuyin: 'CP ㄓˊ', pinyin: 'CP zhí', korean: '가성비 (cost-performance)', pos: '명사', hsk: '대만구어', tags: ['대만식', '마케팅', '필수'], example: { hanzi: '高CP值！', korean: '가성비 갑!' } },
      { hanzi: '療程', zhuyin: 'ㄌㄧㄠˊ ㄔㄥˊ', pinyin: 'liáochéng', korean: '시술, 치료 코스', pos: '명사', hsk: '업계', tags: ['업계', '의료미용', '필수'], example: { hanzi: '高CP值療程。', korean: '가성비 좋은 시술.' } },
      { hanzi: '實際', zhuyin: 'ㄕˊ ㄐㄧˋ', pinyin: 'shíjì', korean: '실제(의)', pos: '형용사', hsk: 4, tags: ['업무'], example: { hanzi: '實際價格。', korean: '실제 가격.' } }
    ],
    practice: [
      {
        prompt: '앱의 「가격 투명성」 장점을 대만 소비자에게 어필하기',
        modelAnswers: [
          { level: '간단', hanzi: '價格很透明，打開就看得到。', pinyin: 'jiàgé hěn tòumíng, dǎkāi jiù kàn dé dào.', korean: '가격이 투명해서 열면 바로 보여요.' },
          { level: '중간', hanzi: '不用一間一間問，價格透明，還能按價位排序。', pinyin: 'búyòng yì jiān yì jiān wèn, jiàgé tòumíng, hái néng àn jiàwèi páixù.', korean: '일일이 물어볼 필요 없고, 가격 투명에 가격대별 정렬까지 돼요.' },
          { level: '자연스러움', hanzi: '韓國診所的實際價格，打開App就看得到，不用怕踩雷，還能找到高CP值的療程！', pinyin: 'Hánguó zhěnsuǒ de shíjì jiàgé, dǎkāi App jiù kàn dé dào, búyòng pà cǎiléi, hái néng zhǎodào gāo CP zhí de liáochéng!', korean: '한국 병원 실제 가격을 앱 열면 바로 확인, 잘못 고를 걱정 없이 가성비 시술까지 찾을 수 있어요! ⭐' }
        ]
      }
    ]
  },
  {
    id: 'L25',
    title: '크리에이터·매니저 측 견적·협업형식 설명 ⭐ — 工商·廣告主',
    subtitle: '인플루언서/매니저가 보내오는 비즈니스 제안 — 단가 패키지, PPL(工商) 형식 설명 읽기',
    source: '대만어 번역 채팅 corpus (2026-06-02·06-05)',
    type: 'business_email_terms',
    difficulty: 'B1-B2',
    date: '2026-06-05',
    fullText: '初次合作建議您先購買一個月的廣告主，屆時看成效再決定是否加買。這邊最多能給到的優惠是 IG reels 一分鐘以內 + 一個月廣告主，費用 $18000，贈2則限動（不過稿、可帶連結）。YouTube 合作形式，是在影片主題中自然包裝工商段落的內容，影片全長大約15分鐘，其中工商段落至少約3分鐘。',
    koreanSummary: '협업 상대(크리에이터/매니저)가 보내오는 견적·형식 안내를 읽고 이해하는 레슨. ①초회 협업은 1개월 광고주(廣告主) 먼저 구매하고 성과 보고 추가 결정 권유 ②최대 할인 패키지 제시(릴스+광고주+한정스토리 증정, 不過稿=원고검토 생략) ③유튜브 협업은 영상 주제 안에 工商(=업체광고/PPL) 구간을 자연스럽게 녹이는 형식, 15분 중 최소 3분 광고. 「工商」「廣告主」「不過稿」 등 대만 업계어가 핵심.',
    sentences: [
      {
        id: 1,
        hanzi: '初次合作建議您先購買一個月的廣告主，屆時看成效再決定是否加買',
        zhuyin: 'ㄔㄨ ㄘˋ ㄏㄜˊ ㄗㄨㄛˋ ㄐㄧㄢˋ ㄧˋ ㄋㄧㄣˊ ㄒㄧㄢ ㄍㄡˋ ㄇㄞˇ ㄍㄨㄤˇ ㄍㄠˋ ㄓㄨˇ，ㄐㄧㄝˋ ㄕˊ ㄎㄢˋ ㄔㄥˊ ㄒㄧㄠˋ ㄗㄞˋ ㄐㄩㄝˊ ㄉㄧㄥˋ ㄕˋ ㄈㄡˇ ㄐㄧㄚ ㄇㄞˇ',
        pinyin: 'chūcì hézuò jiànyì nín xiān gòumǎi yí ge yuè de guǎnggàozhǔ, jièshí kàn chéngxiào zài juédìng shìfǒu jiāmǎi',
        korean: '초회 협업은 1개월 광고주 권한을 먼저 구매하시길 권하고, 그때 성과를 보고 추가 구매 여부를 결정하시면 됩니다',
        wordBreak: '初次(초회·처음) | 建議(권하다) | 購買(구매) | 廣告主(광고주 권한) | 屆時(그때) | 成效(성과) | 是否(~인지 아닌지) | 加買(추가 구매)',
        keyPattern: '「廣告主」= 광고주(권한) ⭐ — 콘텐츠를 광고로 돌릴 수 있는 사용권. 「屆時」= 그때 가서 (격식 문어). 「是否」= ~인지 (격식, =要不要)'
      },
      {
        id: 2,
        hanzi: '最多能給到的優惠是 IG reels 一分鐘以內 + 一個月廣告主，贈2則限動（不過稿、可帶連結）',
        zhuyin: 'ㄗㄨㄟˋ ㄉㄨㄛ ㄋㄥˊ ㄍㄟˇ ㄉㄠˋ ㄉㄜ˙ ㄧㄡ ㄏㄨㄟˋ … ㄗㄥˋ ㄦˋ ㄗㄜˊ ㄒㄧㄢˋ ㄉㄨㄥˋ',
        pinyin: 'zuìduō néng gěi dào de yōuhuì shì IG reels yì fēnzhōng yǐnèi + yí ge yuè guǎnggàozhǔ, zèng 2 zé xiàndòng (búguògǎo, kě dài liánjié)',
        korean: '최대로 드릴 수 있는 혜택은 IG 릴스 1분 이내 + 1개월 광고주이고, 한정스토리 2개 증정(원고 검토 없음, 링크 삽입 가능)이에요',
        wordBreak: '優惠(혜택·할인) | 以內(이내) | 贈(증정) | 則(개·건, 글 세는 단위) | 限動(한정스토리=IG스토리) | 不過稿(원고 검토 안 함) | 帶連結(링크 포함)',
        keyPattern: '「限動」= 限時動態 줄임말, IG 스토리 ⭐⭐ 대만 필수. 「不過稿」= 원고 사전검토 생략 ⭐ 업계어. 「則」= 글/스토리 세는 양사'
      },
      {
        id: 3,
        hanzi: 'YouTube 合作形式，是在影片主題中自然包裝工商段落的內容',
        zhuyin: 'ㄏㄜˊ ㄗㄨㄛˋ ㄒㄧㄥˊ ㄕˋ，ㄗㄞˋ ㄧㄥˇ ㄆㄧㄢˋ ㄓㄨˇ ㄊㄧˊ ㄓㄨㄥ ㄗˋ ㄖㄢˊ ㄅㄠ ㄓㄨㄤ ㄍㄨㄥ ㄕㄤ ㄉㄨㄢˋ ㄌㄨㄛˋ',
        pinyin: 'hézuò xíngshì, shì zài yǐngpiàn zhǔtí zhōng zìrán bāozhuāng gōngshāng duànluò de nèiróng',
        korean: '협업 형식은 영상 주제 안에 工商(광고) 구간을 자연스럽게 녹여 넣는 방식이에요',
        wordBreak: '合作形式(협업 형식) | 影片(영상) | 主題(주제) | 自然(자연스럽게) | 包裝(포장→녹여넣다) | 工商(업체광고·협찬·PPL) | 段落(구간·단락)',
        keyPattern: '「工商」= 업체 광고/협찬 구간 ⭐⭐ 대만 크리에이터 필수어 (한국 "유료광고/PPL"). 「包裝」= 직역 포장 → 콘텐츠에 자연스럽게 녹이다'
      },
      {
        id: 4,
        hanzi: '影片全長大約15分鐘，其中工商段落至少約3分鐘的完整介紹時間',
        zhuyin: 'ㄧㄥˇ ㄆㄧㄢˋ ㄑㄩㄢˊ ㄔㄤˊ ㄉㄚˋ ㄩㄝ … ㄑㄧˊ ㄓㄨㄥ ㄍㄨㄥ ㄕㄤ ㄉㄨㄢˋ ㄌㄨㄛˋ ㄓˋ ㄕㄠˇ',
        pinyin: 'yǐngpiàn quáncháng dàyuē 15 fēnzhōng, qízhōng gōngshāng duànluò zhìshǎo yuē 3 fēnzhōng de wánzhěng jièshào shíjiān',
        korean: '영상 전체 길이는 약 15분이고, 그중 광고 구간은 최소 약 3분의 완전한 소개 시간이 있어요',
        wordBreak: '全長(전체 길이) | 大約(대략) | 其中(그중) | 至少(최소) | 完整(완전한) | 介紹(소개)',
        keyPattern: '「其中…至少約」= 그중 ~만큼은 최소 (협업 보장 분량 명시 정형구). 「完整介紹」= 풀 소개분량 ⭐ 협업 견적 협상에서 노출 시간 보장 표현'
      }
    ],
    vocab: [
      { hanzi: '廣告主', zhuyin: 'ㄍㄨㄤˇ ㄍㄠˋ ㄓㄨˇ', pinyin: 'guǎnggàozhǔ', korean: '광고주 (권한), 광고 사용권', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: '一個月廣告主。', korean: '1개월 광고주 권한.' } },
      { hanzi: '工商', zhuyin: 'ㄍㄨㄥ ㄕㄤ', pinyin: 'gōngshāng', korean: '업체광고·협찬·PPL 구간', pos: '명사', hsk: '대만구어', tags: ['대만식', '인플루언서', '필수'], example: { hanzi: '工商段落3分鐘。', korean: '광고 구간 3분.' } },
      { hanzi: '限動', zhuyin: 'ㄒㄧㄢˋ ㄉㄨㄥˋ', pinyin: 'xiàndòng', korean: 'IG 스토리 (限時動態)', pos: '명사', hsk: '대만구어', tags: ['대만식', '인플루언서', '필수'], example: { hanzi: '贈2則限動。', korean: '스토리 2개 증정.' } },
      { hanzi: '不過稿', zhuyin: 'ㄅㄨˊ ㄍㄨㄛˋ ㄍㄠˇ', pinyin: 'búguògǎo', korean: '원고 사전검토 생략', pos: '동사구', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: '限動不過稿。', korean: '스토리는 원고 검토 안 함.' } },
      { hanzi: '優惠', zhuyin: 'ㄧㄡ ㄏㄨㄟˋ', pinyin: 'yōuhuì', korean: '혜택, 할인', pos: '명사', hsk: 4, tags: ['업무', '마케팅', '필수'], example: { hanzi: '最多的優惠。', korean: '최대 혜택.' } },
      { hanzi: '成效', zhuyin: 'ㄔㄥˊ ㄒㄧㄠˋ', pinyin: 'chéngxiào', korean: '성과, 효과', pos: '명사', hsk: 5, tags: ['업무', '필수'], example: { hanzi: '看成效再決定。', korean: '성과 보고 결정.' } },
      { hanzi: '建議', zhuyin: 'ㄐㄧㄢˋ ㄧˋ', pinyin: 'jiànyì', korean: '권하다, 제안하다', pos: '동사', hsk: 4, tags: ['업무', '이메일', '필수'], example: { hanzi: '建議您先購買。', korean: '먼저 구매를 권해요.' } },
      { hanzi: '屆時', zhuyin: 'ㄐㄧㄝˋ ㄕˊ', pinyin: 'jièshí', korean: '그때 (가서)', pos: '부사', hsk: 6, tags: ['업무', '격식'], example: { hanzi: '屆時看成效。', korean: '그때 성과를 봐요.' } },
      { hanzi: '包裝', zhuyin: 'ㄅㄠ ㄓㄨㄤ', pinyin: 'bāozhuāng', korean: '포장 → (콘텐츠에) 녹여넣다', pos: '동사', hsk: 5, tags: ['인플루언서', '마케팅'], example: { hanzi: '自然包裝工商。', korean: '광고를 자연스럽게 녹이다.' } },
      { hanzi: '其中', zhuyin: 'ㄑㄧˊ ㄓㄨㄥ', pinyin: 'qízhōng', korean: '그중', pos: '대명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '其中3分鐘。', korean: '그중 3분.' } }
    ],
    practice: [
      {
        prompt: '상대 견적을 받고, 조건을 한 번 더 확인·재협상하기',
        modelAnswers: [
          { level: '간단', hanzi: '請問廣告主可以延長到3個月嗎？', pinyin: 'qǐngwèn guǎnggàozhǔ kěyǐ yáncháng dào 3 ge yuè ma?', korean: '광고주 권한을 3개월로 늘릴 수 있을까요?' },
          { level: '중간', hanzi: '了解，那這個價格有包含2次加工嗎？', pinyin: 'liǎojiě, nà zhège jiàgé yǒu bāohán liǎngcì jiāgōng ma?', korean: '이해했어요, 그럼 이 가격에 2차 가공도 포함인가요?' },
          { level: '자연스러움', hanzi: '謝謝您的報價！想確認一下，工商段落能不能保留至少3分鐘？另外廣告主希望能延長到3個月～', pinyin: 'xièxie nín de bàojià! xiǎng quèrèn yíxià, gōngshāng duànluò néng bùnéng bǎoliú zhìshǎo 3 fēnzhōng? lìngwài guǎnggàozhǔ xīwàng néng yáncháng dào 3 ge yuè~', korean: '견적 감사해요! 광고 구간 최소 3분 보장 가능한지, 광고주 권한은 3개월로 늘릴 수 있는지 확인하고 싶어요~ ⭐' }
        ]
      }
    ]
  },
  {
    id: 'L26',
    title: '협업 응답 ⭐ — 수락·거절·일정조율 (구어 비즈)',
    subtitle: '인플루언서가 보내오는 협업 응답 4종 — 관심 수락, 정중한 거절, 일정 불가, 인바운드 제안',
    source: '대만어 번역 채팅 corpus (2026-06-02·06-07)',
    type: 'casual_work_chat',
    difficulty: 'B1',
    date: '2026-06-07',
    fullText: '你好～謝謝您的合邀！！我有興趣喔，工作排期由經紀人幫忙。謝謝您的合作邀約，不過該合作檔期已排滿，祝福您找到合適的創作者！日期的部分沒有辦法唷，小藍要7／8才會回到台灣，一切的拍攝工作都只能在這之後進行。你好～我目前7月會去首爾，我有使用你們app覺得喜歡，目前你們有合作項目嗎？',
    koreanSummary: '인플루언서 측에서 오는 협업 응답을 빠르게 알아듣는 레슨. ①관심 수락 + 일정은 매니저(經紀人)가 담당 ②정중한 거절: 該檔期已排滿(일정 다 참) + 祝福您(잘 되길 바람) ③일정 불가: 7/8에야 대만 복귀 → 그 이후 촬영 가능 ④인바운드 제안: 7월 서울行 + 앱 잘 써봄 → 협업 가능한지 먼저 물어옴. 구어 어조사 「喔/唷」와 경어가 섞인 비즈니스 회화체가 포인트.',
    sentences: [
      {
        id: 1,
        hanzi: '你好～謝謝您的合邀！！我有興趣喔，工作排期由經紀人幫忙',
        zhuyin: 'ㄋㄧˇ ㄏㄠˇ ㄒㄧㄝˋ ㄒㄧㄝ˙ ㄋㄧㄣˊ ㄉㄜ˙ ㄏㄜˊ ㄧㄠ，ㄨㄛˇ ㄧㄡˇ ㄒㄧㄥˋ ㄑㄩˋ ㄛ˙，ㄍㄨㄥ ㄗㄨㄛˋ ㄆㄞˊ ㄑㄧˊ ㄧㄡˊ ㄐㄧㄥ ㄐㄧˋ ㄖㄣˊ ㄅㄤ ㄇㄤˊ',
        pinyin: 'nǐ hǎo, xièxie nín de héyāo! wǒ yǒu xìngqù o, gōngzuò páiqí yóu jīngjìrén bāngmáng',
        korean: '안녕하세요~ 협업 제안 감사해요!! 관심 있어요, 작업 일정은 매니저가 담당해요',
        wordBreak: '合邀(협업 초대) | 有興趣(관심 있다) | 喔(~요, 어조사) | 排期(일정) | 由(~가) | 經紀人(매니저·에이전트) | 幫忙(돕다·담당)',
        keyPattern: '「我有興趣喔」= 관심 있어요~ ⭐ 긍정 답변. 「由 A 幫忙」= A가 담당/처리한다. 「經紀人」= 매니저 ⭐ — 일정·계약은 매니저 경유 신호'
      },
      {
        id: 2,
        hanzi: '謝謝您的合作邀約，不過該合作檔期已排滿，祝福您找到合適的創作者！',
        zhuyin: 'ㄒㄧㄝˋ ㄒㄧㄝ˙ ㄋㄧㄣˊ ㄉㄜ˙ ㄏㄜˊ ㄗㄨㄛˋ ㄧㄠ ㄩㄝ，ㄅㄨˊ ㄍㄨㄛˋ ㄍㄞ ㄏㄜˊ ㄗㄨㄛˋ ㄉㄤˋ ㄑㄧˊ ㄧˇ ㄆㄞˊ ㄇㄢˇ，ㄓㄨˋ ㄈㄨˊ ㄋㄧㄣˊ ㄓㄠˇ ㄉㄠˋ ㄏㄜˊ ㄕˋ ㄉㄜ˙ ㄔㄨㄤˋ ㄗㄨㄛˋ ㄓㄜˇ',
        pinyin: 'xièxie nín de hézuò yāoyuē, búguò gāi hézuò dàngqī yǐ páimǎn, zhùfú nín zhǎodào héshì de chuàngzuòzhě',
        korean: '협업 제안 감사합니다, 다만 해당 협업 일정이 이미 다 차서, 적합한 크리에이터 찾으시길 바랄게요!',
        wordBreak: '邀約(제안·초청) | 不過(다만·그런데) | 該(해당) | 檔期(일정·스케줄) | 已排滿(이미 가득 차다) | 祝福(축복·바라다) | 合適(적합한) | 創作者(크리에이터)',
        keyPattern: '정중한 거절 정형구 ⭐ 「該檔期已排滿」(일정 다 참) + 「祝福您找到合適的…」(잘 되길). 「檔期」= 스케줄/방영 일정 ⭐ 업계어'
      },
      {
        id: 3,
        hanzi: '日期的部分沒有辦法唷，小藍要7／8才會回到台灣，拍攝只能在這之後進行',
        zhuyin: 'ㄖˋ ㄑㄧ ㄉㄜ˙ ㄅㄨˋ ㄈㄣˋ ㄇㄟˊ ㄧㄡˇ ㄅㄢˋ ㄈㄚˇ ㄧㄡ˙，ㄒㄧㄠˇ ㄌㄢˊ ㄧㄠˋ ㄘㄞˊ ㄏㄨㄟˋ ㄏㄨㄟˊ ㄉㄠˋ ㄊㄞˊ ㄨㄢ',
        pinyin: 'rìqī de bùfen méiyǒu bànfǎ o, xiǎo Lán yào 7／8 cái huì huídào Táiwān, pāishè zhǐ néng zài zhè zhīhòu jìnxíng',
        korean: '일정 쪽은 안 돼요~ 샤오란이 7/8은 돼야 대만에 돌아와서, 촬영은 그 이후에만 가능해요',
        wordBreak: '日期(일정·날짜) | 沒有辦法(방법이 없다·안 된다) | 唷(~요, 어조사) | 才(~에야 비로소) | 回到(돌아오다) | 之後(이후) | 進行(진행)',
        keyPattern: '「沒有辦法唷」= 안 돼요~ (唷로 부드럽게). 「要 7/8 才會…」= 7/8은 돼야 비로소 ~ ⭐ 「才」= 늦게서야 (예상보다 늦음 뉘앙스)'
      },
      {
        id: 4,
        hanzi: '你好～我目前7月會去首爾，有使用你們app覺得喜歡，目前你們有合作項目嗎？',
        zhuyin: 'ㄋㄧˇ ㄏㄠˇ ㄨㄛˇ ㄇㄨˋ ㄑㄧㄢˊ ㄑㄧ ㄩㄝˋ ㄏㄨㄟˋ ㄑㄩˋ ㄕㄡˇ ㄦˇ，ㄧㄡˇ ㄕˇ ㄩㄥˋ ㄋㄧˇ ㄇㄣ˙ app ㄐㄩㄝˊ ㄉㄜ˙ ㄒㄧˇ ㄏㄨㄢ',
        pinyin: 'nǐ hǎo, wǒ mùqián 7 yuè huì qù Shǒu\'ěr, yǒu shǐyòng nǐmen app juéde xǐhuān, mùqián nǐmen yǒu hézuò xiàngmù ma?',
        korean: '안녕하세요~ 저 7월에 서울 가는데, 앱 써봤더니 마음에 들어요. 지금 협업 프로젝트 있으세요?',
        wordBreak: '目前(현재) | 會去(갈 예정) | 首爾(서울) | 使用(사용) | 覺得(느끼다·~인 것 같다) | 喜歡(좋아하다) | 合作項目(협업 프로젝트)',
        keyPattern: '인바운드(먼저 들어온) 제안 ⭐. 「有使用…覺得喜歡」= 써봤더니 좋더라 (호감 신호). 「有合作項目嗎」= 협업 건 있냐 (먼저 협업 의향 타진)'
      }
    ],
    vocab: [
      { hanzi: '經紀人', zhuyin: 'ㄐㄧㄥ ㄐㄧˋ ㄖㄣˊ', pinyin: 'jīngjìrén', korean: '매니저, 에이전트', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: '排期由經紀人。', korean: '일정은 매니저가.' } },
      { hanzi: '檔期', zhuyin: 'ㄉㄤˋ ㄑㄧˊ', pinyin: 'dàngqī', korean: '일정, 스케줄 (방영·게시)', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: '檔期已排滿。', korean: '일정이 다 찼어요.' } },
      { hanzi: '排滿', zhuyin: 'ㄆㄞˊ ㄇㄢˇ', pinyin: 'páimǎn', korean: '가득 차다 (일정)', pos: '동사', hsk: '업무', tags: ['업무', '필수'], example: { hanzi: '行程排滿了。', korean: '일정이 꽉 찼어요.' } },
      { hanzi: '邀約', zhuyin: 'ㄧㄠ ㄩㄝ', pinyin: 'yāoyuē', korean: '제안, 초청', pos: '명사·동사', hsk: '업무', tags: ['업무', '이메일', '필수'], example: { hanzi: '合作邀約。', korean: '협업 제안.' } },
      { hanzi: '創作者', zhuyin: 'ㄔㄨㄤˋ ㄗㄨㄛˋ ㄓㄜˇ', pinyin: 'chuàngzuòzhě', korean: '크리에이터, 창작자', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서'], example: { hanzi: '合適的創作者。', korean: '적합한 크리에이터.' } },
      { hanzi: '合適', zhuyin: 'ㄏㄜˊ ㄕˋ', pinyin: 'héshì', korean: '적합하다, 알맞다', pos: '형용사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '合適的人選。', korean: '적합한 인선.' } },
      { hanzi: '辦法', zhuyin: 'ㄅㄢˋ ㄈㄚˇ', pinyin: 'bànfǎ', korean: '방법, 수', pos: '명사', hsk: 4, tags: ['일상', '필수'], example: { hanzi: '沒有辦法。', korean: '방법이 없어요.' } },
      { hanzi: '項目', zhuyin: 'ㄒㄧㄤˋ ㄇㄨˋ', pinyin: 'xiàngmù', korean: '프로젝트, 항목', pos: '명사', hsk: 4, tags: ['업무', '필수'], example: { hanzi: '合作項目。', korean: '협업 프로젝트.' } },
      { hanzi: '才', zhuyin: 'ㄘㄞˊ', pinyin: 'cái', korean: '~에야 비로소 (늦음)', pos: '부사', hsk: 3, tags: ['일상', '문법', '필수'], example: { hanzi: '7號才回來。', korean: '7일은 돼야 돌아와요.' } },
      { hanzi: '喔', zhuyin: 'ㄛ˙', pinyin: 'o', korean: '~요/~네 (대만 구어 어조사)', pos: '조사', hsk: '대만구어', tags: ['대만식', '구어', '필수'], example: { hanzi: '我有興趣喔。', korean: '관심 있어요~.' } }
    ],
    practice: [
      {
        prompt: '인바운드로 들어온 협업 제안에 답하며 시술 영상 가능 여부 확인하기',
        modelAnswers: [
          { level: '간단', hanzi: '太好了！您有施術的影片嗎？', pinyin: 'tài hǎo le! nín yǒu shīshù de yǐngpiàn ma?', korean: '잘됐네요! 시술 영상 있으세요?' },
          { level: '중간', hanzi: '謝謝您主動聯絡！我們很有興趣，想確認您有沒有施術影片素材～', pinyin: 'xièxie nín zhǔdòng liánluò! wǒmen hěn yǒu xìngqù, xiǎng quèrèn nín yǒu méiyǒu shīshù yǐngpiàn sùcái~', korean: '먼저 연락 주셔서 감사해요! 관심 많고, 시술 영상 소재 있으신지 확인하고 싶어요~' },
          { level: '자연스러움', hanzi: '太好了！能直接從您這邊聽到真的很開心～想問您7月在首爾有沒有要做施術呢？我們的影片需要包含施術畫面唷！', pinyin: 'tài hǎo le! néng zhíjiē cóng nín zhèbiān tīngdào zhēnde hěn kāixīn~ xiǎng wèn nín 7 yuè zài Shǒu\'ěr yǒu méiyǒu yào zuò shīshù ne? wǒmen de yǐngpiàn xūyào bāohán shīshù huàmiàn o!', korean: '잘됐어요! 직접 연락 주셔서 기뻐요~ 7월 서울에서 시술 받으실 계획 있는지 궁금해요. 저희 영상엔 시술 장면이 꼭 들어가야 하거든요! ⭐' }
        ]
      }
    ]
  },
  {
    id: 'L27',
    title: '일상·구어 어조사 ⭐ — 唷·誒·囉·把자문',
    subtitle: '대만 구어 감각 — 어조사(唷·喔·誒·囉)와 把자문, 공동구매(團購) 멘트',
    source: '대만어 번역 채팅 corpus (2026-05-31·06-01·06-05)',
    type: 'casual_compliment',
    difficulty: 'A2-B1',
    date: '2026-06-05',
    fullText: '我馬上把銀幕線拔掉。哈囉～目前沒有要前往韓國唷。有誒，我朋友最近剛好跟我說到這個平台很方便。親愛的來囉！連結傳送門奉上，這裡通通都可以買！',
    koreanSummary: '대만 구어 특유의 어조사와 문형을 익히는 레슨. ①把자문(我把…拔掉)으로 처리·동작 강조 ②哈囉(hello)+唷로 부드러운 거절 ③有誒(있어!)의 誒, 剛好(때마침) ④인플루언서 공동구매(團購) 멘트의 來囉/通通/奉上. 어조사 喔·唷·誒·囉·啦가 문장 끝에서 만드는 뉘앙스 차이가 핵심.',
    sentences: [
      {
        id: 1,
        hanzi: '我馬上把銀幕線拔掉',
        zhuyin: 'ㄨㄛˇ ㄇㄚˇ ㄕㄤˋ ㄅㄚˇ ㄧㄣˊ ㄇㄨˋ ㄒㄧㄢˋ ㄅㄚˊ ㄉㄧㄠˋ',
        pinyin: 'wǒ mǎshàng bǎ yínmù xiàn bádiào',
        korean: '나 지금 바로 모니터 선을 뽑을게',
        wordBreak: '馬上(곧·바로) | 把(~을, 처치문) | 銀幕(스크린·모니터) | 線(선·케이블) | 拔掉(뽑아버리다)',
        keyPattern: '「把 A 拔掉」= A를 뽑아버리다 ⭐ 把자문 — 「대상을 어떻게 처리한다」 강조. 「動詞+掉」= ~해버리다 (완료·제거). 대만 구어 빈출'
      },
      {
        id: 2,
        hanzi: '哈囉～目前沒有要前往韓國唷',
        zhuyin: 'ㄏㄚ ㄌㄨㄛ˙ ㄇㄨˋ ㄑㄧㄢˊ ㄇㄟˊ ㄧㄡˇ ㄧㄠˋ ㄑㄧㄢˊ ㄨㄤˇ ㄏㄢˊ ㄍㄨㄛˊ ㄧㄡ˙',
        pinyin: 'hāluō, mùqián méiyǒu yào qiánwǎng Hánguó o',
        korean: '안녕하세요~ 지금은 한국 갈 계획 없어요~',
        wordBreak: '哈囉(헬로·hello) | 目前(현재) | 沒有要(~할 (계획이) 없다) | 前往(향하다·가다) | 唷(~요, 부드러운 어조사)',
        keyPattern: '「唷」= 문장 끝 부드러운 어조사 ⭐ (=喔, 거절·안내를 덜 딱딱하게). 「沒有要+동사」= ~할 생각/계획 없다. 「哈囉」= 캐주얼 인사'
      },
      {
        id: 3,
        hanzi: '有誒，我朋友最近剛好跟我說到這個平台很方便',
        zhuyin: 'ㄧㄡˇ ㄟ˙ ㄨㄛˇ ㄆㄥˊ ㄧㄡˇ ㄗㄨㄟˋ ㄐㄧㄣˋ ㄍㄤ ㄏㄠˇ ㄍㄣ ㄨㄛˇ ㄕㄨㄛ ㄉㄠˋ ㄓㄜˋ ㄍㄜ˙ ㄆㄧㄥˊ ㄊㄞˊ ㄏㄣˇ ㄈㄤ ㄅㄧㄢˋ',
        pinyin: 'yǒu ei, wǒ péngyǒu zuìjìn gānghǎo gēn wǒ shuōdào zhège píngtái hěn fāngbiàn',
        korean: '있어요! 제 친구가 마침 요즘 이 플랫폼 진짜 편하다고 얘기했어요',
        wordBreak: '有誒(있어!·맞아!) | 最近(요즘) | 剛好(때마침·딱) | 跟我說(나에게 말하다) | 說到(언급하다) | 平台(플랫폼) | 方便(편하다)',
        keyPattern: '「誒」(ei) = 가벼운 감탄 어조사 ⭐ (有誒=있어!의 발랄한 톤). 「剛好」= 때마침/공교롭게 ⭐ 구어 필수. 입소문(口碑) 신호'
      },
      {
        id: 4,
        hanzi: '親愛的來囉！連結傳送門奉上，這裡通通都可以買！',
        zhuyin: 'ㄑㄧㄣ ㄞˋ ㄉㄜ˙ ㄌㄞˊ ㄌㄨㄛ˙ ㄌㄧㄢˊ ㄐㄧㄝˊ ㄔㄨㄢˊ ㄙㄨㄥˋ ㄇㄣˊ ㄈㄥˋ ㄕㄤˋ ㄓㄜˋ ㄌㄧˇ ㄊㄨㄥ ㄊㄨㄥ ㄉㄡ ㄎㄜˇ ㄧˇ ㄇㄞˇ',
        pinyin: 'qīn\'ài de lái lo! liánjié chuánsòngmén fèngshàng, zhèlǐ tōngtōng dōu kěyǐ mǎi!',
        korean: '여러분 왔어요~! 링크 띄워드려요, 여기서 전부 다 살 수 있어요!',
        wordBreak: '親愛的(여러분·애칭) | 來囉(왔어요~) | 連結(링크) | 傳送門(포털·바로가기) | 奉上(올려드리다) | 通通(전부·몽땅) | 都可以買(다 살 수 있다)',
        keyPattern: '공동구매(團購) 멘트 정형구 ⭐. 「來囉」의 囉(lo)= 등장·완료 알리는 발랄한 어조사. 「通通」= 전부·몽땅 ⭐ 구어. 「傳送門」= (게임용어→) 링크 바로가기'
      }
    ],
    vocab: [
      { hanzi: '把', zhuyin: 'ㄅㄚˇ', pinyin: 'bǎ', korean: '~을 (처치문 표지)', pos: '전치사', hsk: 3, tags: ['문법', '필수'], example: { hanzi: '把線拔掉。', korean: '선을 뽑아버려요.' } },
      { hanzi: '拔掉', zhuyin: 'ㄅㄚˊ ㄉㄧㄠˋ', pinyin: 'bádiào', korean: '뽑아버리다', pos: '동사', hsk: '업무', tags: ['일상', '구어'], example: { hanzi: '把插頭拔掉。', korean: '플러그를 뽑아버려요.' } },
      { hanzi: '前往', zhuyin: 'ㄑㄧㄢˊ ㄨㄤˇ', pinyin: 'qiánwǎng', korean: '향하다, 가다 (격식)', pos: '동사', hsk: 5, tags: ['업무', '격식'], example: { hanzi: '前往韓國。', korean: '한국으로 가다.' } },
      { hanzi: '剛好', zhuyin: 'ㄍㄤ ㄏㄠˇ', pinyin: 'gānghǎo', korean: '때마침, 딱, 공교롭게', pos: '부사', hsk: 4, tags: ['일상', '구어', '필수'], example: { hanzi: '剛好跟我說。', korean: '마침 나한테 말했어.' } },
      { hanzi: '通通', zhuyin: 'ㄊㄨㄥ ㄊㄨㄥ', pinyin: 'tōngtōng', korean: '전부, 몽땅', pos: '부사', hsk: '대만구어', tags: ['대만식', '구어', '필수'], example: { hanzi: '通通都可以買。', korean: '전부 다 살 수 있어요.' } },
      { hanzi: '方便', zhuyin: 'ㄈㄤ ㄅㄧㄢˋ', pinyin: 'fāngbiàn', korean: '편하다, 편리하다', pos: '형용사', hsk: 3, tags: ['일상', '필수'], example: { hanzi: '這個平台很方便。', korean: '이 플랫폼 편해요.' } },
      { hanzi: '奉上', zhuyin: 'ㄈㄥˋ ㄕㄤˋ', pinyin: 'fèngshàng', korean: '올려드리다 (공손)', pos: '동사', hsk: '업무', tags: ['구어', '마케팅'], example: { hanzi: '連結奉上。', korean: '링크 올려드려요.' } },
      { hanzi: '唷', zhuyin: 'ㄧㄡ˙', pinyin: 'yo', korean: '~요 (부드러운 어조사)', pos: '조사', hsk: '대만구어', tags: ['대만식', '구어', '필수'], example: { hanzi: '沒有要去唷。', korean: '안 갈 거예요~.' } },
      { hanzi: '囉', zhuyin: 'ㄌㄨㄛ˙', pinyin: 'lo', korean: '~네/~어요 (완료·발랄)', pos: '조사', hsk: '대만구어', tags: ['대만식', '구어', '필수'], example: { hanzi: '來囉！', korean: '왔어요~!' } },
      { hanzi: '誒', zhuyin: 'ㄟ˙', pinyin: 'ei', korean: '어!/있어! (감탄 어조사)', pos: '조사', hsk: '대만구어', tags: ['대만식', '구어'], example: { hanzi: '有誒！', korean: '있어!' } }
    ],
    practice: [
      {
        prompt: '어조사로 같은 거절을 톤만 바꿔 말해보기 (딱딱함 → 부드러움)',
        modelAnswers: [
          { level: '딱딱함', hanzi: '目前沒有要去韓國。', pinyin: 'mùqián méiyǒu yào qù Hánguó.', korean: '지금 한국 갈 계획 없습니다. (건조)' },
          { level: '부드러움', hanzi: '哈囉～目前沒有要去韓國唷！', pinyin: 'hāluō, mùqián méiyǒu yào qù Hánguó o!', korean: '안녕하세요~ 지금은 한국 갈 계획 없어요~ (唷로 부드럽게) ⭐' },
          { level: '발랄함', hanzi: '哈囉哈囉～最近沒有要飛韓國啦，下次有機會再約囉！', pinyin: 'hāluō hāluō, zuìjìn méiyǒu yào fēi Hánguó la, xiàcì yǒu jīhuì zài yuē lo!', korean: '안녕안녕~ 요즘 한국 갈 일 없어요~ 다음에 기회되면 또 얘기해요! (啦·囉 활용)' }
        ]
      }
    ]
  },
  {
    id: 'L28',
    title: '협업 세부개념 ⭐ — 2次加工·授權·施術商談',
    subtitle: '협업 실무 핵심 개념어 — 2차 가공(재편집)의 정의, 영상 소재·후반작업·시술 상담',
    source: '대만어 번역 채팅 corpus (2026-06-04·06-07)',
    type: 'business_email_terms',
    difficulty: 'B1-B2',
    date: '2026-06-07',
    fullText: '2次加工的意思是：您提供原始影片素材，我們會對該影片進行特定部分的剪切、編輯等後製工作。針對施術內容商談。因為還有授權廣告的部分。',
    koreanSummary: '협업 계약에서 반복되는 핵심 개념어를 정리하는 레슨. ①2次加工(2차 가공)=인플루언서가 原始素材(원본 소재)를 주면 브랜드가 剪切·編輯·後製(컷·편집·후반작업)하는 것 ②針對…商談=~을 대상으로 상담/협의 ③授權廣告=광고 사용권 부분. 정산·계약 협상 시 정확히 알아야 하는 업계 용어 묶음.',
    sentences: [
      {
        id: 1,
        hanzi: '2次加工的意思是：您提供原始影片素材，我們會對該影片進行剪切、編輯',
        zhuyin: 'ㄦˋ ㄘˋ ㄐㄧㄚ ㄍㄨㄥ ㄉㄜ˙ ㄧˋ ㄙ˙ ㄕˋ ㄋㄧㄣˊ ㄊㄧˊ ㄍㄨㄥ ㄩㄢˊ ㄕˇ ㄧㄥˇ ㄆㄧㄢˋ ㄙㄨˋ ㄘㄞˊ',
        pinyin: 'liǎngcì jiāgōng de yìsi shì: nín tígōng yuánshǐ yǐngpiàn sùcái, wǒmen huì duì gāi yǐngpiàn jìnxíng jiǎnqiē, biānjí',
        korean: '2차 가공이란: 원본 영상 소재를 주시면, 저희가 그 영상을 컷 편집·편집하는 거예요',
        wordBreak: '2次加工(2차 가공·재편집) | 意思(뜻·의미) | 提供(제공) | 原始(원본) | 影片素材(영상 소재) | 進行(진행) | 剪切(컷·자르기) | 編輯(편집)',
        keyPattern: '「2次加工」= 2차 가공 ⭐⭐ — 원본을 받아 브랜드가 재편집. 「A 的意思是…」= A란 ~라는 뜻이다 (개념 정의 정형구). 「對 A 進行 B」= A에 B를 가하다'
      },
      {
        id: 2,
        hanzi: '針對施術內容商談',
        zhuyin: 'ㄓㄣ ㄉㄨㄟˋ ㄕ ㄕㄨˋ ㄋㄟˋ ㄖㄨㄥˊ ㄕㄤ ㄊㄢˊ',
        pinyin: 'zhēnduì shīshù nèiróng shāngtán',
        korean: '시술 내용에 대한 상담',
        wordBreak: '針對(~을 대상으로·~에 관해) | 施術(시술) | 內容(내용) | 商談(상담·협의)',
        keyPattern: '「針對 A」= A를 겨냥/대상으로 ⭐ 비즈니스 격식 (=關於보다 초점 강조). 「商談」= 상담/협의 (=洽談). 앱 UI·문의 카테고리에도 자주 등장'
      },
      {
        id: 3,
        hanzi: '因為還有授權廣告的部分',
        zhuyin: 'ㄧㄣ ㄨㄟˋ ㄏㄞˊ ㄧㄡˇ ㄕㄡˋ ㄑㄩㄢˊ ㄍㄨㄤˇ ㄍㄠˋ ㄉㄜ˙ ㄅㄨˋ ㄈㄣˋ',
        pinyin: 'yīnwèi háiyǒu shòuquán guǎnggào de bùfen',
        korean: '아직 광고 사용권 부분이 남아 있어서요',
        wordBreak: '因為(~때문에) | 還有(아직 ~있다) | 授權(사용권·권한 부여) | 廣告(광고) | 部分(부분)',
        keyPattern: '「還有…的部分」= 아직 ~ 부분이 남아 있다 ⭐ 미해결 항목 짚는 정형구. 「授權」= 사용권 부여 ⭐ 계약 핵심어 (廣告主授權=광고 집행권)'
      }
    ],
    vocab: [
      { hanzi: '2次加工', zhuyin: 'ㄦˋ ㄘˋ ㄐㄧㄚ ㄍㄨㄥ', pinyin: 'liǎngcì jiāgōng', korean: '2차 가공, 재편집', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: '需要2次加工。', korean: '2차 가공이 필요해요.' } },
      { hanzi: '原始', zhuyin: 'ㄩㄢˊ ㄕˇ', pinyin: 'yuánshǐ', korean: '원본의, 원시의', pos: '형용사', hsk: 5, tags: ['업계', '필수'], example: { hanzi: '原始影片素材。', korean: '원본 영상 소재.' } },
      { hanzi: '素材', zhuyin: 'ㄙㄨˋ ㄘㄞˊ', pinyin: 'sùcái', korean: '소재, 자료(원본)', pos: '명사', hsk: '업계', tags: ['업계', '인플루언서', '필수'], example: { hanzi: '提供影片素材。', korean: '영상 소재 제공.' } },
      { hanzi: '剪切', zhuyin: 'ㄐㄧㄢˇ ㄑㄧㄝ', pinyin: 'jiǎnqiē', korean: '컷, 잘라내기', pos: '동사', hsk: '업계', tags: ['업계', '영상편집'], example: { hanzi: '進行剪切。', korean: '컷 편집을 해요.' } },
      { hanzi: '編輯', zhuyin: 'ㄅㄧㄢ ㄐㄧˊ', pinyin: 'biānjí', korean: '편집(하다)', pos: '동사·명사', hsk: 5, tags: ['업계', '영상편집', '필수'], example: { hanzi: '剪切、編輯。', korean: '컷, 편집.' } },
      { hanzi: '後製', zhuyin: 'ㄏㄡˋ ㄓˋ', pinyin: 'hòuzhì', korean: '후반 작업 (post-production)', pos: '명사', hsk: '업계', tags: ['업계', '영상편집', '필수'], example: { hanzi: '後製工作。', korean: '후반 작업.' } },
      { hanzi: '針對', zhuyin: 'ㄓㄣ ㄉㄨㄟˋ', pinyin: 'zhēnduì', korean: '~을 대상으로, ~에 관해', pos: '전치사', hsk: 5, tags: ['업무', '이메일', '필수'], example: { hanzi: '針對內容商談。', korean: '내용에 대해 상담.' } },
      { hanzi: '商談', zhuyin: 'ㄕㄤ ㄊㄢˊ', pinyin: 'shāngtán', korean: '상담, 협의', pos: '명사·동사', hsk: '업무', tags: ['업무', '이메일'], example: { hanzi: '進一步商談。', korean: '추가 협의.' } },
      { hanzi: '授權', zhuyin: 'ㄕㄡˋ ㄑㄩㄢˊ', pinyin: 'shòuquán', korean: '사용권 부여, 권한 위임', pos: '명사·동사', hsk: '업계', tags: ['업계', '계약', '필수'], example: { hanzi: '授權廣告。', korean: '광고 사용권.' } }
    ],
    practice: [
      {
        prompt: '인플루언서에게 「2차 가공」 조건을 정확히 설명하고 동의 구하기',
        modelAnswers: [
          { level: '간단', hanzi: '2次加工就是我們會幫您剪輯影片。', pinyin: 'liǎngcì jiāgōng jiùshì wǒmen huì bāng nín jiǎnjí yǐngpiàn.', korean: '2차 가공은 저희가 영상을 편집해드리는 거예요.' },
          { level: '중간', hanzi: '2次加工是指您提供原始素材，我們進行剪切和編輯，這樣可以嗎？', pinyin: 'liǎngcì jiāgōng shì zhǐ nín tígōng yuánshǐ sùcái, wǒmen jìnxíng jiǎnqiē hé biānjí, zhèyàng kěyǐ ma?', korean: '2차 가공은 원본 소재를 주시면 저희가 컷·편집하는 건데, 괜찮으세요?' },
          { level: '자연스러움', hanzi: '想再確認一下2次加工的部分：您提供原始影片素材後，我們會針對特定段落進行剪切、編輯等後製，這樣的合作方式您OK嗎？', pinyin: 'xiǎng zài quèrèn yíxià liǎngcì jiāgōng de bùfen: nín tígōng yuánshǐ yǐngpiàn sùcái hòu, wǒmen huì zhēnduì tèdìng duànluò jìnxíng jiǎnqiē, biānjí děng hòuzhì, zhèyàng de hézuò fāngshì nín OK ma?', korean: '2차 가공 부분 다시 확인하고 싶어요: 원본 영상 소재 주시면 특정 구간을 컷·편집 등 후반작업하는 방식인데, 이런 협업 괜찮으세요? ⭐' }
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
