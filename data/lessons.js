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
