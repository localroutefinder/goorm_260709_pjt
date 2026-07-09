(function () {
  "use strict";

  const I18N = {
    ko: {
      title: "Pixel Grug — Tiny Pixel Stories for Better Days",
      nav: {
        about: "소개",
        features: "주요 기능",
        gallery: "픽셀 갤러리",
        audience: "타겟",
        tech: "기술 스택",
        cta: "시작하기"
      },
      hero: {
        eyebrow: "Tiny Pixel Stories for Better Days",
        title: "매일 한 문장,<br />한 개의 <span class=\"accent\">픽셀 친구</span>,<br />그리고 작은 미소.",
        lead: "<strong>Pixel Grug</strong>는 AI가 생성하는 픽셀 아트 캐릭터와 함께 매일 새로운 짧은 메시지를 전달하는 감성 마이크로 저널 앱입니다. 하루 10초, 그것이면 충분합니다.",
        primaryCta: "기능 둘러보기",
        secondaryCta: "픽셀 갤러리 보기",
        stats: { timeValue: "10초", timeLabel: "하루 루틴", dailyValue: "매일", dailyLabel: "새로운 캐릭터", aiLabel: "AI 변주" }
      },
      daily: { label: "TODAY'S PIXEL", shuffle: "다른 친구 만나기" },
      about: {
        eyebrow: "앱 소개",
        title: "우리는 하루에도 수천 개의 정보를 소비합니다.",
        sub: "하지만 하루를 바꾸는 것은 긴 글보다 짧은 한 문장, 그리고 작은 이미지일지도 모릅니다.",
        quote1: "작은 용이 꽃을 들고 있을 수도 있고,",
        quote2: "모험을 떠나는 슬라임이 등장할 수도 있으며,",
        quote3: "작은 로봇이 오늘의 용기를 건네줄 수도 있습니다.",
        step1: "오늘의 픽셀 친구를 만나고",
        step2: "짧은 문장을 읽고",
        step3: "오늘 하루를 시작합니다"
      },
      concept: {
        eyebrow: "핵심 컨셉",
        title: "\"AI가 매일 새로운 픽셀 친구를 만들어 준다.\"",
        desc: "매일의 메시지는 AI가 생성한 아래 요소 중 하나와 함께 제공됩니다.",
        tag1: "캐릭터",
        tag2: "아이템",
        tag3: "작은 풍경",
        tag4: "몬스터",
        tag5: "식물",
        tag6: "우주 생명체",
        note: "모든 이미지는 <strong>Gemini Nano Banana Image API</strong>를 이용하여 실시간 또는 사전 생성됩니다."
      },
      features: {
        eyebrow: "주요 기능",
        title: "작지만 매일 다시 찾게 되는 경험",
        daily: "매일 하나의 픽셀아트가 생성됩니다. 작은 용, 선인장 친구, 구름 고래, 모험 개구리, 우주 감자처럼 귀여운 캐릭터가 등장합니다.",
        wisdom: "복잡한 자기계발 대신 하루의 작은 생각을 담은 매우 짧은 한 문장을 전합니다.",
        collection: "매일 생성된 캐릭터는 자동으로 컬렉션에 저장됩니다. \"오늘 만난 친구들\"이라는 감성 도감을 완성해 보세요.",
        variation: "같은 문장이라도 AI는 다른 표정, 다른 색상, 다른 소품, 다른 계절 버전을 생성합니다. 매일 조금씩 새로운 경험입니다.",
        widget: "홈 화면에서도 오늘의 캐릭터와 오늘의 한 문장을 바로 만날 수 있습니다.",
        share: "오늘의 픽셀 친구를 SNS 카드 형태로 저장하고 공유할 수 있습니다."
      },
      gallery: {
        eyebrow: "AI 이미지 생성",
        title: "Gemini Nano Banana가 그리는 픽셀 세계",
        sub: "캐릭터부터 사물, 자연, 감정까지 — AI가 매일 새로운 스타일을 생성합니다."
      },
      philosophy: {
        eyebrow: "디자인 철학",
        title: "복잡한 기능보다<br /><span class=\"accent\">감정 경험</span>을 디자인합니다.",
        desc: "우리는 사용자가 앱을 오래 사용하는 것이 아니라, 매일 다시 찾아오는 경험을 만들고 싶습니다.",
        big: "하루 10초. 그것이면 충분합니다."
      },
      audience: {
        eyebrow: "타겟 사용자",
        title: "이런 분들을 위해 만들었어요",
        card1Title: "따뜻한 감성을 원하는 사람",
        card1Desc: "AI 시대에도 사람의 온기와 감성을 그리워하는 분들을 위해.",
        card2Title: "게임과 픽셀아트를 좋아하는 사람",
        card2Desc: "이런 감성을 사랑하는 분들에게.",
        card3Title: "기분 좋게 하루를 시작하고 싶은 직장인",
        card3Desc: "복잡한 생산성 앱보다 간단한 루틴을 선호하는 분들에게.",
        card4Title: "감성 디자인을 좋아하는 사람",
        card4Desc: "미니멀한 서비스를 선호하는 분들에게."
      },
      diff: {
        eyebrow: "차별화 포인트",
        title: "기존 명언 앱과 무엇이 다를까요?",
        oldTitle: "기존 명언 앱",
        old1: "텍스트 중심",
        old2: "고정 이미지",
        old3: "단순 명언",
        old4: "이미지 없음",
        old5: "읽고 끝",
        new1: "AI 생성 픽셀 캐릭터 중심",
        new2: "매일 새로운 AI 이미지",
        new3: "이야기와 캐릭터가 있는 경험",
        new4: "Pixel Collection 제공",
        new5: "수집하는 재미"
      },
      tech: { eyebrow: "기술 스택", title: "탄탄한 기술 위에 세운 감성" },
      vision: {
        eyebrow: "장기 비전",
        quote: "\"Duolingo가 학습 습관을 만들었다면,<br />Pixel Grug는 <span class=\"accent\">작은 행복의 습관</span>을 만든다.\"",
        desc: "장기적으로 캐릭터는 사용자의 감정과 취향을 반영해 성장하는 <strong>AI Companion</strong>으로 확장됩니다. 생성형 AI + 감성 UX + 수집형 콘텐츠를 결합한, 나만의 작은 세계를 만들어 갑니다.",
        cta: "오늘의 픽셀 친구 만나기"
      },
      footer: { copy: "&copy; 2026 Pixel Grug. 하루 10초의 작은 행복." },
      friends: [
        { img: "assets/hero-dragon.png", name: "🐉 작은 용", alt: "오늘의 픽셀 친구, 작은 용", quote: "today small step become tomorrow mountain" },
        { img: "assets/char-fox.png", name: "🦊 작은 여우", alt: "오늘의 픽셀 친구, 작은 여우", quote: "kind word grow biggest tree" },
        { img: "assets/char-spacecat.png", name: "🚀 우주 고양이", alt: "오늘의 픽셀 친구, 우주 고양이", quote: "brave hearts start with small steps" },
        { img: "assets/char-robot.png", name: "🤖 로봇 가드너", alt: "오늘의 픽셀 친구, 로봇 가드너", quote: "grow slow, bloom sure" },
        { img: "assets/char-slime.png", name: "🟢 모험 슬라임", alt: "오늘의 픽셀 친구, 모험 슬라임", quote: "small joy make a big smile" },
        { img: "assets/char-cloudwhale.png", name: "☁️ 구름 고래", alt: "오늘의 픽셀 친구, 구름 고래", quote: "float light, dream big" }
      ]
    },
    en: {
      title: "Pixel Grug — Tiny Pixel Stories for Better Days",
      nav: { about: "About", features: "Features", gallery: "Gallery", audience: "Audience", tech: "Tech Stack", cta: "Get Started" },
      hero: {
        eyebrow: "Tiny Pixel Stories for Better Days",
        title: "One short line each day,<br />one <span class=\"accent\">pixel friend</span>,<br />and one small smile.",
        lead: "<strong>Pixel Grug</strong> is an emotional micro-journal app that delivers a fresh short message every day alongside an AI-generated pixel art character. Ten seconds a day is enough.",
        primaryCta: "Explore Features",
        secondaryCta: "View Pixel Gallery",
        stats: { timeValue: "10 sec", timeLabel: "daily ritual", dailyValue: "Daily", dailyLabel: "new character", aiLabel: "AI variations" }
      },
      daily: { label: "TODAY'S PIXEL", shuffle: "Meet another friend" },
      about: {
        eyebrow: "About",
        title: "We consume thousands of pieces of information every day.",
        sub: "But what changes a day may be a short sentence and a small image, not a long article.",
        quote1: "A tiny dragon might be holding a flower,",
        quote2: "an adventurous slime might appear,",
        quote3: "or a little robot might hand you today's courage.",
        step1: "Meet today's pixel friend",
        step2: "Read one short line",
        step3: "Start your day"
      },
      concept: {
        eyebrow: "Core Concept",
        title: "\"AI creates a new pixel friend for you every day.\"",
        desc: "Each daily message arrives with one of the AI-generated elements below.",
        tag1: "Character",
        tag2: "Item",
        tag3: "Tiny Scene",
        tag4: "Monster",
        tag5: "Plant",
        tag6: "Space Creature",
        note: "All images are generated in real time or prepared in advance using the <strong>Gemini Nano Banana Image API</strong>."
      },
      features: {
        eyebrow: "Features",
        title: "A small experience you'll want to return to every day",
        daily: "One pixel artwork is created every day. Cute friends like a baby dragon, cactus buddy, cloud whale, adventure frog, and space potato can appear.",
        wisdom: "Instead of overwhelming self-help, it gives you one very short line with a small thought for the day.",
        collection: "Every generated character is saved automatically. Build your own emotional codex of \"friends I met today.\"",
        variation: "Even with the same sentence, AI creates versions with different expressions, colors, props, and seasons. The experience shifts a little every day.",
        widget: "You can meet today's character and today's line directly from your home screen.",
        share: "Save and share today's pixel friend as a social card."
      },
      gallery: {
        eyebrow: "AI Image Generation",
        title: "A pixel world drawn by Gemini Nano Banana",
        sub: "From characters and objects to nature and emotions, AI creates a new style every day."
      },
      philosophy: {
        eyebrow: "Design Philosophy",
        title: "We design an <span class=\"accent\">emotional experience</span><br />before complex features.",
        desc: "We do not want users to stay in the app longer. We want them to come back every day.",
        big: "Ten seconds a day. That is enough."
      },
      audience: {
        eyebrow: "Audience",
        title: "Made for people like these",
        card1Title: "People who want warmth in the AI era",
        card1Desc: "For people who still miss human warmth and gentle emotions.",
        card2Title: "People who love games and pixel art",
        card2Desc: "For people who love this kind of cozy aesthetic.",
        card3Title: "Professionals who want a better start to the day",
        card3Desc: "For people who prefer simple rituals over complex productivity apps.",
        card4Title: "People who love emotional design",
        card4Desc: "For people who prefer minimal and thoughtful services."
      },
      diff: {
        eyebrow: "What Makes It Different",
        title: "How is it different from classic quote apps?",
        oldTitle: "Classic Quote Apps",
        old1: "Text-centered",
        old2: "Static images",
        old3: "Simple quotes",
        old4: "No visual companion",
        old5: "Read and leave",
        new1: "Centered on AI pixel characters",
        new2: "A new AI image every day",
        new3: "An experience with story and character",
        new4: "Includes Pixel Collection",
        new5: "Fun to collect"
      },
      tech: { eyebrow: "Tech Stack", title: "Warm emotion built on solid technology" },
      vision: {
        eyebrow: "Long-Term Vision",
        quote: "\"If Duolingo built a habit of learning,<br />Pixel Grug builds a <span class=\"accent\">habit of small happiness</span>.\"",
        desc: "Over time, the characters can grow into an <strong>AI Companion</strong> that reflects each user's feelings and taste. It can become a personal little world that blends generative AI, emotional UX, and collectible content.",
        cta: "Meet today's pixel friend"
      },
      footer: { copy: "&copy; 2026 Pixel Grug. A small daily habit of happiness." },
      friends: [
        { img: "assets/hero-dragon.png", name: "🐉 Baby Dragon", alt: "Today's pixel friend, baby dragon", quote: "today small step become tomorrow mountain" },
        { img: "assets/char-fox.png", name: "🦊 Little Fox", alt: "Today's pixel friend, little fox", quote: "kind word grow biggest tree" },
        { img: "assets/char-spacecat.png", name: "🚀 Space Cat", alt: "Today's pixel friend, space cat", quote: "brave hearts start with small steps" },
        { img: "assets/char-robot.png", name: "🤖 Robot Gardener", alt: "Today's pixel friend, robot gardener", quote: "grow slow, bloom sure" },
        { img: "assets/char-slime.png", name: "🟢 Adventure Slime", alt: "Today's pixel friend, adventure slime", quote: "small joy make a big smile" },
        { img: "assets/char-cloudwhale.png", name: "☁️ Cloud Whale", alt: "Today's pixel friend, cloud whale", quote: "float light, dream big" }
      ]
    },
    zh: {
      title: "Pixel Grug — Tiny Pixel Stories for Better Days",
      nav: { about: "介绍", features: "主要功能", gallery: "像素画廊", audience: "目标用户", tech: "技术栈", cta: "开始体验" },
      hero: {
        eyebrow: "Tiny Pixel Stories for Better Days",
        title: "每天一句短短的话，<br />一个<span class=\"accent\">像素朋友</span>，<br />再加一个小小微笑。",
        lead: "<strong>Pixel Grug</strong> 是一款情感向微日记应用，每天都会和 AI 生成的像素角色一起送来一句新的短消息。一天只要十秒，就已经足够。",
        primaryCta: "查看功能",
        secondaryCta: "浏览像素画廊",
        stats: { timeValue: "10秒", timeLabel: "每日仪式", dailyValue: "每天", dailyLabel: "新角色", aiLabel: "AI 变化" }
      },
      daily: { label: "TODAY'S PIXEL", shuffle: "换一个朋友" },
      about: {
        eyebrow: "应用介绍",
        title: "我们每天都会接收成千上万条信息。",
        sub: "但真正改变一天心情的，也许不是长文章，而是一句短短的话和一张小小的图片。",
        quote1: "也许是一只拿着花的小龙，",
        quote2: "也许是一个踏上冒险的史莱姆，",
        quote3: "也许是一个把今日勇气递给你的小机器人。",
        step1: "遇见今天的像素朋友",
        step2: "读一句短句",
        step3: "开始今天"
      },
      concept: {
        eyebrow: "核心概念",
        title: "“AI 每天都会为你创造一个新的像素朋友。”",
        desc: "每天的消息都会搭配下面某一种 AI 生成元素一起出现。",
        tag1: "角色",
        tag2: "道具",
        tag3: "小场景",
        tag4: "怪物",
        tag5: "植物",
        tag6: "宇宙生物",
        note: "所有图片都通过 <strong>Gemini Nano Banana Image API</strong> 实时生成或预先生成。"
      },
      features: {
        eyebrow: "主要功能",
        title: "虽小，却让人想每天回来一次的体验",
        daily: "每天生成一张像素画。你可能会遇见小龙、仙人掌朋友、云鲸、冒险青蛙，甚至宇宙土豆这样的可爱角色。",
        wisdom: "它不会给你复杂的自我提升内容，而是每天送来一句非常短、却很有感觉的话。",
        collection: "每天生成的角色都会自动保存进收藏。你可以慢慢完成一本“今天遇见的朋友们”的感性图鉴。",
        variation: "即使是同一句话，AI 也会生成不同表情、不同配色、不同道具和不同季节版本。每天都会有一点点新鲜感。",
        widget: "在主屏幕小组件里，也能直接看到今天的角色和今天的一句话。",
        share: "你可以把今天的像素朋友保存成社交分享卡片并分享出去。"
      },
      gallery: {
        eyebrow: "AI 图像生成",
        title: "Gemini Nano Banana 描绘的像素世界",
        sub: "从角色、物件到自然与情绪，AI 每天都会生成新的风格。"
      },
      philosophy: {
        eyebrow: "设计哲学",
        title: "比起复杂功能，<br />我们更重视<span class=\"accent\">情绪体验</span>。",
        desc: "我们不希望用户在应用里待得更久，而是希望他们每天都愿意再回来。",
        big: "一天十秒。这样就够了。"
      },
      audience: {
        eyebrow: "目标用户",
        title: "这是为这样的人准备的",
        card1Title: "想在 AI 时代保有温度的人",
        card1Desc: "献给仍然怀念人情味与柔和感受的人。",
        card2Title: "喜欢游戏和像素艺术的人",
        card2Desc: "献给喜欢这种治愈氛围的人。",
        card3Title: "想愉快开始一天的上班族",
        card3Desc: "献给更喜欢简单日常仪式，而不是复杂效率工具的人。",
        card4Title: "喜欢感性设计的人",
        card4Desc: "献给偏爱极简且有温度服务的人。"
      },
      diff: {
        eyebrow: "差异化亮点",
        title: "它和传统名言应用有什么不同？",
        oldTitle: "传统名言应用",
        old1: "以文字为中心",
        old2: "固定图片",
        old3: "单纯名言",
        old4: "没有图像陪伴",
        old5: "看完就结束",
        new1: "以 AI 像素角色为中心",
        new2: "每天都有新的 AI 图片",
        new3: "带有故事与角色的体验",
        new4: "提供 Pixel Collection",
        new5: "收藏也很好玩"
      },
      tech: { eyebrow: "技术栈", title: "建立在扎实技术之上的温柔体验" },
      vision: {
        eyebrow: "长期愿景",
        quote: "“如果 Duolingo 养成了学习习惯，<br />Pixel Grug 就会养成<span class=\"accent\">小小幸福的习惯</span>。”",
        desc: "从长期来看，这些角色会成长为能反映用户情绪与偏好的 <strong>AI Companion</strong>。它将生成式 AI、情感 UX 与收藏式内容结合起来，逐渐形成属于你的微小世界。",
        cta: "去见今天的像素朋友"
      },
      footer: { copy: "&copy; 2026 Pixel Grug. 每天十秒的小小幸福。" },
      friends: [
        { img: "assets/hero-dragon.png", name: "🐉 小龙", alt: "今天的像素朋友，小龙", quote: "today small step become tomorrow mountain" },
        { img: "assets/char-fox.png", name: "🦊 小狐狸", alt: "今天的像素朋友，小狐狸", quote: "kind word grow biggest tree" },
        { img: "assets/char-spacecat.png", name: "🚀 宇宙猫", alt: "今天的像素朋友，宇宙猫", quote: "brave hearts start with small steps" },
        { img: "assets/char-robot.png", name: "🤖 机器人园丁", alt: "今天的像素朋友，机器人园丁", quote: "grow slow, bloom sure" },
        { img: "assets/char-slime.png", name: "🟢 冒险史莱姆", alt: "今天的像素朋友，冒险史莱姆", quote: "small joy make a big smile" },
        { img: "assets/char-cloudwhale.png", name: "☁️ 云鲸", alt: "今天的像素朋友，云鲸", quote: "float light, dream big" }
      ]
    },
    ja: {
      title: "Pixel Grug — Tiny Pixel Stories for Better Days",
      nav: { about: "紹介", features: "主な機能", gallery: "ピクセルギャラリー", audience: "ターゲット", tech: "技術スタック", cta: "はじめる" },
      hero: {
        eyebrow: "Tiny Pixel Stories for Better Days",
        title: "毎日ひとつの短い言葉、<br />ひとりの<span class=\"accent\">ピクセルフレンド</span>、<br />そして小さな笑顔。",
        lead: "<strong>Pixel Grug</strong> は、AI が生成したピクセルアートのキャラクターと一緒に、毎日新しい短いメッセージを届ける感性マイクロジャーナルアプリです。1日10秒で十分です。",
        primaryCta: "機能を見る",
        secondaryCta: "ピクセルギャラリーを見る",
        stats: { timeValue: "10秒", timeLabel: "毎日の習慣", dailyValue: "毎日", dailyLabel: "新しいキャラクター", aiLabel: "AI バリエーション" }
      },
      daily: { label: "TODAY'S PIXEL", shuffle: "別の友だちに会う" },
      about: {
        eyebrow: "アプリ紹介",
        title: "私たちは毎日、何千もの情報を消費しています。",
        sub: "でも、一日を変えるのは長い文章ではなく、短いひと言と小さなイメージかもしれません。",
        quote1: "小さなドラゴンが花を持っている日もあれば、",
        quote2: "冒険に出るスライムが現れる日もあり、",
        quote3: "小さなロボットが今日の勇気を渡してくれる日もあります。",
        step1: "今日のピクセルフレンドに会う",
        step2: "短いひと言を読む",
        step3: "一日を始める"
      },
      concept: {
        eyebrow: "コアコンセプト",
        title: "\"AI が毎日、新しいピクセルフレンドをつくってくれる。\"",
        desc: "毎日のメッセージには、以下の AI 生成要素のどれかが添えられます。",
        tag1: "キャラクター",
        tag2: "アイテム",
        tag3: "小さな風景",
        tag4: "モンスター",
        tag5: "植物",
        tag6: "宇宙生命体",
        note: "すべての画像は <strong>Gemini Nano Banana Image API</strong> を使ってリアルタイムまたは事前生成されます。"
      },
      features: {
        eyebrow: "主な機能",
        title: "小さいのに、毎日また戻りたくなる体験",
        daily: "毎日ひとつのピクセルアートが生成されます。小さなドラゴン、サボテンの友だち、雲クジラ、冒険カエル、宇宙ポテトのようなかわいいキャラクターが登場します。",
        wisdom: "難しい自己啓発の代わりに、その日の小さな気づきを込めた、とても短いひと言を届けます。",
        collection: "毎日生成されたキャラクターは自動でコレクションに保存されます。『今日出会った友だち』という感性図鑑を育ててみましょう。",
        variation: "同じ文でも、AI は違う表情、違う色、違う小物、違う季節のバージョンを生成します。毎日少しずつ新しい体験です。",
        widget: "ホーム画面でも、今日のキャラクターと今日のひと言にすぐ出会えます。",
        share: "今日のピクセルフレンドを SNS カードとして保存してシェアできます。"
      },
      gallery: {
        eyebrow: "AI 画像生成",
        title: "Gemini Nano Banana が描くピクセルの世界",
        sub: "キャラクターからモノ、自然、感情まで、AI が毎日新しいスタイルを生み出します。"
      },
      philosophy: {
        eyebrow: "デザイン哲学",
        title: "複雑な機能より先に、<br /><span class=\"accent\">感情体験</span>をデザインします。",
        desc: "私たちは、ユーザーに長く使ってもらうことよりも、毎日また戻ってきたくなる体験をつくりたいのです。",
        big: "1日10秒。それで十分です。"
      },
      audience: {
        eyebrow: "ターゲットユーザー",
        title: "こんな人のためにつくりました",
        card1Title: "AI 時代にも温かさを求める人",
        card1Desc: "人のぬくもりややさしい感情を恋しく思う人のために。",
        card2Title: "ゲームやピクセルアートが好きな人",
        card2Desc: "こうした世界観が好きな人のために。",
        card3Title: "気持ちよく一日を始めたい会社員",
        card3Desc: "複雑な生産性アプリより、シンプルな習慣を好む人のために。",
        card4Title: "感性のあるデザインが好きな人",
        card4Desc: "ミニマルで心地よいサービスを好む人のために。"
      },
      diff: {
        eyebrow: "差別化ポイント",
        title: "従来の名言アプリと何が違うのでしょうか？",
        oldTitle: "従来の名言アプリ",
        old1: "テキスト中心",
        old2: "固定画像",
        old3: "単純な名言",
        old4: "画像なし",
        old5: "読んで終わり",
        new1: "AI 生成ピクセルキャラクター中心",
        new2: "毎日新しい AI 画像",
        new3: "物語とキャラクターのある体験",
        new4: "Pixel Collection を提供",
        new5: "集める楽しさ"
      },
      tech: { eyebrow: "技術スタック", title: "しっかりした技術の上にある、やわらかな体験" },
      vision: {
        eyebrow: "長期ビジョン",
        quote: "\"Duolingo が学習習慣をつくったなら、<br />Pixel Grug は<span class=\"accent\">小さな幸せの習慣</span>をつくる。\"",
        desc: "長期的には、キャラクターはユーザーの感情や好みを反映しながら成長する <strong>AI Companion</strong> へと広がっていきます。生成 AI、感性 UX、収集型コンテンツを組み合わせた、自分だけの小さな世界を育てていけます。",
        cta: "今日のピクセルフレンドに会う"
      },
      footer: { copy: "&copy; 2026 Pixel Grug. 1日10秒の小さな幸せ。" },
      friends: [
        { img: "assets/hero-dragon.png", name: "🐉 小さなドラゴン", alt: "今日のピクセルフレンド、小さなドラゴン", quote: "today small step become tomorrow mountain" },
        { img: "assets/char-fox.png", name: "🦊 小さなキツネ", alt: "今日のピクセルフレンド、小さなキツネ", quote: "kind word grow biggest tree" },
        { img: "assets/char-spacecat.png", name: "🚀 宇宙ネコ", alt: "今日のピクセルフレンド、宇宙ネコ", quote: "brave hearts start with small steps" },
        { img: "assets/char-robot.png", name: "🤖 ロボットガーデナー", alt: "今日のピクセルフレンド、ロボットガーデナー", quote: "grow slow, bloom sure" },
        { img: "assets/char-slime.png", name: "🟢 冒険スライム", alt: "今日のピクセルフレンド、冒険スライム", quote: "small joy make a big smile" },
        { img: "assets/char-cloudwhale.png", name: "☁️ 雲クジラ", alt: "今日のピクセルフレンド、雲クジラ", quote: "float light, dream big" }
      ]
    }
  };

  const DEFAULT_LANG = "ko";
  const LANGS = ["ko", "en", "zh", "ja"];

  /* ===== Mobile menu toggle ===== */
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      const open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ===== Nav background on scroll ===== */
  const nav = document.getElementById("nav");
  const onScroll = function () {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ===== Language and theme ===== */
  const root = document.documentElement;
  const langSwitch = document.getElementById("langSwitch");
  const langToggle = document.getElementById("langToggle");
  const langButtons = Array.from(document.querySelectorAll(".lang-option"));
  const themeToggle = document.getElementById("themeToggle");
  const textNodes = document.querySelectorAll("[data-i18n]");
  const htmlNodes = document.querySelectorAll("[data-i18n-html]");
  const dailyImg = document.getElementById("dailyImg");
  const dailyName = document.getElementById("dailyName");
  const dailyQuote = document.getElementById("dailyQuote");
  const shuffleBtn = document.getElementById("shuffleBtn");
  let idx = 0;

  const getByPath = function (obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && typeof acc === "object" ? acc[key] : undefined;
    }, obj);
  };

  const resolveInitialLang = function () {
    const saved = localStorage.getItem("pg-lang");
    if (saved && LANGS.indexOf(saved) >= 0) return saved;
    const browserLang = (navigator.language || "").slice(0, 2).toLowerCase();
    return LANGS.indexOf(browserLang) >= 0 ? browserLang : DEFAULT_LANG;
  };

  let currentLang = resolveInitialLang();
  let currentTheme = root.getAttribute("data-theme") || "light";

  const updateFriend = function (index) {
    const friends = I18N[currentLang].friends;
    const friend = friends[index];
    if (!friend || !dailyImg || !dailyName || !dailyQuote) return;
    dailyImg.src = friend.img;
    dailyImg.alt = friend.alt;
    dailyName.textContent = friend.name;
    dailyQuote.textContent = friend.quote;
  };

  const applyLanguage = function (lang) {
    currentLang = lang;
    const dict = I18N[lang];
    if (!dict) return;

    textNodes.forEach(function (el) {
      const value = getByPath(dict, el.getAttribute("data-i18n"));
      if (typeof value === "string") el.textContent = value;
    });

    htmlNodes.forEach(function (el) {
      const value = getByPath(dict, el.getAttribute("data-i18n-html"));
      if (typeof value === "string") el.innerHTML = value;
    });

    document.title = dict.title;
    root.setAttribute("lang", lang);
    localStorage.setItem("pg-lang", lang);

    langButtons.forEach(function (btn) {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-checked", String(active));
    });

    updateFriend(idx);
  };

  const applyTheme = function (theme) {
    currentTheme = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", currentTheme);
    localStorage.setItem("pg-theme", currentTheme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", currentTheme === "dark" ? "라이트 테마로 전환" : "다크 테마로 전환");
    }
  };

  if (langToggle && langSwitch) {
    langToggle.addEventListener("click", function () {
      const open = langSwitch.classList.toggle("is-open");
      langToggle.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", function (event) {
      if (!langSwitch.contains(event.target)) {
        langSwitch.classList.remove("is-open");
        langToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"));
      if (langSwitch && langToggle) {
        langSwitch.classList.remove("is-open");
        langToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }

  applyLanguage(currentLang);
  applyTheme(currentTheme);

  /* ===== Scroll reveal ===== */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ===== Daily Pixel demo ===== */
  const preload = function () {
    I18N.en.friends.forEach(function (f) {
      const im = new Image();
      im.src = f.img;
    });
  };
  preload();

  if (shuffleBtn && dailyImg && dailyName && dailyQuote) {
    shuffleBtn.addEventListener("click", function () {
      const friends = I18N[currentLang].friends;
      idx = (idx + 1) % friends.length;
      const f = I18N[currentLang].friends[idx];

      dailyImg.style.opacity = "0";
      dailyImg.style.transform = "scale(0.92)";

      window.setTimeout(function () {
        dailyImg.src = f.img;
        dailyImg.alt = f.alt;
        dailyName.textContent = f.name;
        dailyQuote.textContent = f.quote;
        dailyImg.style.opacity = "1";
        dailyImg.style.transform = "scale(1)";
      }, 220);
    });
  }

  /* ===== Footer year ===== */
  const yearEls = document.querySelectorAll("[data-year]");
  yearEls.forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
