import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'games',
    title: 'Games',
    apps: [
      // --- Top Hits / Popular ---
      {
        id: 'minecraft',
        name: 'Minecraft: สร้างโลกของคุณ',
        subtitle: 'สร้างและสำรวจโลกไร้ขีดจำกัด',
        url: 'https://apps.apple.com/th/app/minecraft/id479516143'
      },
      {
        id: 'rov',
        name: 'Garena RoV: 5v5 Festival',
        subtitle: 'สุดยอดเกม MOBA 5v5 บนมือถือ',
        url: 'https://apps.apple.com/th/app/garena-rov-5v5-festival/id1150337432'
      },
      {
        id: 'freefire',
        name: 'Garena Free Fire: The Chaos',
        subtitle: 'เกมยิงปืนเอาตัวรอดอันดับ 1',
        url: 'https://apps.apple.com/th/app/garena-free-fire-the-chaos/id1300146617'
      },
      {
        id: 'roblox',
        name: 'Roblox',
        subtitle: 'โลกแห่งจินตนาการเสมือนจริง',
        url: 'https://apps.apple.com/th/app/roblox/id1056524660'
      },
      // --- New & Trending ---
      {
        id: 'zenless-zone-zero',
        name: 'Zenless Zone Zero',
        subtitle: 'แอ็คชั่นแฟนตาซีในเมืองใหม่',
        url: 'https://apps.apple.com/th/app/zenless-zone-zero/id1606356123'
      },
      {
        id: 'wuthering-waves',
        name: 'Wuthering Waves',
        subtitle: 'เกม Action RPG โอเพ่นเวิลด์',
        url: 'https://apps.apple.com/th/app/wuthering-waves/id6449293479'
      },
      {
        id: 'solo-leveling',
        name: 'Solo Leveling:Arise',
        subtitle: 'ปลุกพลังนักล่าเงา',
        url: 'https://apps.apple.com/th/app/solo-leveling-arise/id1662742277'
      },
      {
        id: 'golden-spatula',
        name: 'Golden Spatula',
        subtitle: 'ประลองกลยุทธ์ทีมไฟท์',
        url: 'https://apps.apple.com/th/app/golden-spatula/id6661023265'
      },
      // --- RPG / Anime Style ---
      {
        id: 'genshin',
        name: 'Genshin Impact',
        subtitle: 'ผจญภัยในโลกกว้างแฟนตาซี',
        url: 'https://apps.apple.com/th/app/genshin-impact/id1517783697?l=th'
      },
      {
        id: 'honkai',
        name: 'Honkai: Star Rail',
        subtitle: 'การเดินทางข้ามดวงดาวครั้งใหม่',
        url: 'https://apps.apple.com/th/app/honkai-star-rail/id1599719154?l=th'
      },
      {
        id: 'nikke',
        name: 'GODDESS OF VICTORY: NIKKE',
        subtitle: 'เกมยิงสาวน้อยไซไฟ RPG',
        url: 'https://apps.apple.com/th/app/goddess-of-victory-nikke/id1585915174'
      },
      {
        id: 'blue-archive',
        name: 'Blue Archive',
        subtitle: 'เรื่องราววัยใสในเมืองคิโวทอส',
        url: 'https://apps.apple.com/th/app/blue-archive/id1572996987'
      },
      {
        id: 'ragnarok-origin',
        name: 'Ragnarok Origin Global',
        subtitle: 'ตำนาน MMORPG ฉบับมือถือ',
        url: 'https://apps.apple.com/th/app/ragnarok-origin-global/id1661507061'
      },
      {
        id: 'cookie-run-kingdom',
        name: 'Cookie Run: Kingdom',
        subtitle: 'สร้างอาณาจักรคุกกี้และต่อสู้',
        url: 'https://apps.apple.com/th/app/cookie-run-kingdom/id1509450845'
      },
      // --- Casual / Puzzle ---
      {
        id: 'hayday',
        name: 'Hay Day',
        subtitle: 'สร้างฟาร์มในฝันของคุณ',
        url: 'https://apps.apple.com/th/app/hay-day/id506627515?l=th'
      },
      {
        id: 'candy-crush',
        name: 'Candy Crush Saga',
        subtitle: 'เกมจับคู่ลูกกวาดในตำนาน',
        url: 'https://apps.apple.com/th/app/candy-crush-saga/id553834731'
      },
      {
        id: 'royal-match',
        name: 'Royal Match',
        subtitle: 'ช่วยพระราชาตกแต่งปราสาท',
        url: 'https://apps.apple.com/th/app/royal-match/id1482155847'
      },
      {
        id: 'coin-master',
        name: 'Coin Master',
        subtitle: 'โจมตี หมุนสล็อต และขโมยทอง',
        url: 'https://apps.apple.com/th/app/coin-master/id406889139'
      },
      {
        id: 'monopoly-go',
        name: 'Monopoly GO!',
        subtitle: 'ทอยลูกเต๋า สร้างเมืองเศรษฐี',
        url: 'https://apps.apple.com/th/app/monopoly-go/id1621328561'
      },
      {
        id: 'gardenscapes',
        name: 'Gardenscapes',
        subtitle: 'ตกแต่งสวนและไขปริศนา',
        url: 'https://apps.apple.com/th/app/gardenscapes/id1105855019'
      },
      {
        id: 'homescapes',
        name: 'Homescapes',
        subtitle: 'ตกแต่งบ้านแสนอบอุ่น',
        url: 'https://apps.apple.com/th/app/homescapes/id1195621598'
      },
      {
        id: 'fishdom',
        name: 'Fishdom',
        subtitle: 'สร้างตู้ปลาและเล่นพัซเซิล',
        url: 'https://apps.apple.com/th/app/fishdom/id664575829'
      },
      {
        id: 'township',
        name: 'Township',
        subtitle: 'สร้างเมืองและทำฟาร์ม',
        url: 'https://apps.apple.com/th/app/township/id638689075'
      },
      // --- Party / Social Games ---
      {
        id: 'goose-duck',
        name: 'Goose Goose Duck',
        subtitle: 'เกมสืบสวนหาคนร้ายสุดปั่น',
        url: 'https://apps.apple.com/th/app/goose-goose-duck/id1558248707?l=th'
      },
      {
        id: 'among-us',
        name: 'Among Us',
        subtitle: 'เกมจับโกหกยอดนิยม',
        url: 'https://apps.apple.com/th/app/among-us/id1351168404?l=th'
      },
      {
        id: 'eggy-party',
        name: 'Eggy Party',
        subtitle: 'ปาร์ตี้ไข่จอมป่วน',
        url: 'https://apps.apple.com/th/app/eggy-party/id1603504825'
      },
      {
        id: 'uno',
        name: 'UNO!™',
        subtitle: 'เกมไพ่ยอดฮิตเล่นกับเพื่อน',
        url: 'https://apps.apple.com/th/app/uno/id1344023642'
      },
      {
        id: 'ludo-king',
        name: 'Ludo King',
        subtitle: 'เกมกระดานคลาสสิกออนไลน์',
        url: 'https://apps.apple.com/th/app/ludo-king/id993090598'
      },
      // --- Action / FPS / Battle Royale ---
      {
        id: 'cod-mobile',
        name: 'Call of Duty: Mobile - Garena',
        subtitle: 'เกมยิง FPS ระดับโลก',
        url: 'https://apps.apple.com/th/app/call-of-duty-mobile-garena/id1465688043?l=th'
      },
      {
        id: 'pubg-mobile',
        name: 'PUBG MOBILE',
        subtitle: 'ต้นฉบับ Battle Royale บนมือถือ',
        url: 'https://apps.apple.com/th/app/pubg-mobile/id1330123889?l=th'
      },
      {
        id: 'blood-strike',
        name: 'Blood Strike',
        subtitle: 'FPS แบทเทิลรอยัลสุดเดือด',
        url: 'https://apps.apple.com/th/app/blood-strike/id1633543163'
      },
      {
        id: 'arena-breakout',
        name: 'Arena Breakout',
        subtitle: 'เกมยิงปืนเชิงกลยุทธ์',
        url: 'https://apps.apple.com/th/app/arena-breakout/id1626493630'
      },
      {
        id: 'farlight-84',
        name: 'Farlight 84',
        subtitle: 'แบทเทิลรอยัลไซไฟสุดมันส์',
        url: 'https://apps.apple.com/th/app/farlight-84/id1673713581'
      },
      {
        id: 'sausage-man',
        name: 'Sausage Man',
        subtitle: 'ไส้กรอกป่วนสนามรบ',
        url: 'https://apps.apple.com/th/app/sausage-man/id1563750315'
      },
      {
        id: 'mobile-legends',
        name: 'Mobile Legends: Bang Bang',
        subtitle: 'เกม MOBA 5v5 บนมือถือ',
        url: 'https://apps.apple.com/th/app/mobile-legends-bang-bang/id1160056295?l=th'
      },
      {
        id: 'brawl-stars',
        name: 'Brawl Stars',
        subtitle: 'ต่อสู้ 3v3 และแบทเทิลรอยัล',
        url: 'https://apps.apple.com/th/app/brawl-stars/id1229016807'
      },
      // --- Strategy / Simulation ---
      {
        id: 'clash-of-clans',
        name: 'Clash of Clans',
        subtitle: 'วางแผนสร้างหมู่บ้านและรบ',
        url: 'https://apps.apple.com/th/app/clash-of-clans/id529479190'
      },
      {
        id: 'clash-royale',
        name: 'Clash Royale',
        subtitle: 'เกมการ์ดวางแผนแบบเรียลไทม์',
        url: 'https://apps.apple.com/th/app/clash-royale/id1053012308'
      },
      {
        id: 'last-war',
        name: 'Last War:Survival',
        subtitle: 'เอาชีวิตรอดจากซอมบี้',
        url: 'https://apps.apple.com/th/app/last-war-survival/id6448786147'
      },
      {
        id: 'whiteout-survival',
        name: 'Whiteout Survival',
        subtitle: 'กลยุทธ์เอาตัวรอดในแดนหิมะ',
        url: 'https://apps.apple.com/th/app/whiteout-survival/id6446638982'
      },
      {
        id: 'rise-of-kingdoms',
        name: 'Rise of Kingdoms',
        subtitle: 'สร้างอารยธรรมและพิชิตโลก',
        url: 'https://apps.apple.com/th/app/rise-of-kingdoms/id1354260888'
      },
      // --- Sports / Racing ---
      {
        id: 'efootball',
        name: 'eFootball™',
        subtitle: 'สุดยอดเกมฟุตบอลระดับโลก',
        url: 'https://apps.apple.com/th/app/efootball/id1117270703?l=th'
      },
      {
        id: 'fc-mobile',
        name: 'EA SPORTS FC™ Mobile',
        subtitle: 'ฟุตบอลสมจริงลิขสิทธิ์แท้',
        url: 'https://apps.apple.com/th/app/ea-sports-fc-mobile/id1094930513'
      },
      {
        id: '8-ball-pool',
        name: '8 Ball Pool™',
        subtitle: 'เกมพูลออนไลน์อันดับ 1',
        url: 'https://apps.apple.com/th/app/8-ball-pool/id543186847'
      },
      {
        id: 'asphalt-legends',
        name: 'Asphalt Legends Unite',
        subtitle: 'แข่งรถอาร์เคดสุดเร้าใจ',
        url: 'https://apps.apple.com/th/app/asphalt-legends-unite/id1235624042'
      },
      {
        id: 'carx-street',
        name: 'CarX Street',
        subtitle: 'แข่งรถโอเพ่นเวิลด์บนถนนจริง',
        url: 'https://apps.apple.com/th/app/carx-street/id1458863319'
      },
      // --- Arcade / Classic ---
      {
        id: 'subway-surfers',
        name: 'Subway Surfers',
        subtitle: 'วิ่งหลบรถไฟสุดมันส์',
        url: 'https://apps.apple.com/th/app/subway-surfers/id512939461?l=th'
      },
      {
        id: 'temple-run-2',
        name: 'Temple Run 2',
        subtitle: 'วิ่งหนีปีศาจลิง',
        url: 'https://apps.apple.com/th/app/temple-run-2/id572395608'
      },
      {
        id: 'magic-tiles-3',
        name: 'Magic Tiles 3: Piano Game',
        subtitle: 'เกมดนตรีเปียโนยอดฮิต',
        url: 'https://apps.apple.com/th/app/magic-tiles-3-piano-game/id1104247197'
      },
      {
        id: 'fruit-ninja-2',
        name: 'Fruit Ninja 2',
        subtitle: 'ฟันผลไม้แอ็คชั่นสุดมันส์',
        url: 'https://apps.apple.com/th/app/fruit-ninja-2/id1025304621'
      },
      {
        id: 'jetpack-joyride',
        name: 'Jetpack Joyride',
        subtitle: 'บินตะลุยแล็บด้วยเจ็ทแพ็ค',
        url: 'https://apps.apple.com/th/app/jetpack-joyride/id457446957'
      },
      {
        id: 'plants-vs-zombies-2',
        name: 'Plants vs. Zombies™ 2',
        subtitle: 'พืชปะทะซอมบี้ข้ามกาลเวลา',
        url: 'https://apps.apple.com/th/app/plants-vs-zombies-2/id597986893'
      },
      {
        id: 'angry-birds-2',
        name: 'Angry Birds 2',
        subtitle: 'นกโกรธถล่มหมูเขียว',
        url: 'https://apps.apple.com/th/app/angry-birds-2/id880047117'
      },
      // --- Horror / Survival ---
      {
        id: 'identity-v',
        name: 'Identity V',
        subtitle: 'หนีล่าท้าผี 1 ต่อ 4',
        url: 'https://apps.apple.com/th/app/identity-v/id1347780764'
      },
      {
        id: 'dead-by-daylight',
        name: 'Dead by Daylight Mobile',
        subtitle: 'เกมสยองขวัญเอาตัวรอด',
        url: 'https://apps.apple.com/th/app/dead-by-daylight-mobile/id1617066991'
      },
      // --- Others ---
      {
        id: 'pokemon-go',
        name: 'Pokémon GO',
        subtitle: 'จับโปเกมอนในโลกความจริง',
        url: 'https://apps.apple.com/th/app/pok%C3%A9mon-go/id1094591345'
      },
      {
        id: 'pokemon-unite',
        name: 'Pokémon UNITE',
        subtitle: 'โปเกมอนแบทเทิลทีม 5v5',
        url: 'https://apps.apple.com/th/app/pok%C3%A9mon-unite/id1512321575'
      }
    ]
  },
  {
    id: 'social',
    title: 'Social',
    apps: [
      { id: 'line', name: 'LINE', subtitle: 'แชทและโทรฟรี สะดวกง่ายดาย', url: 'https://apps.apple.com/th/app/line/id443904275?l=th' },
      { id: 'facebook', name: 'Facebook', subtitle: 'เชื่อมต่อกับสิ่งที่สนใจ', url: 'https://apps.apple.com/th/app/facebook/id284882215?l=th' },
      { id: 'messenger', name: 'Messenger', subtitle: 'ส่งข้อความและวิดีโอคอลฟรี', url: 'https://apps.apple.com/th/app/messenger/id454638411?l=th' },
      { id: 'instagram', name: 'Instagram', subtitle: 'แชร์รูปภาพและวิดีโอ', url: 'https://apps.apple.com/th/app/instagram/id389801252?l=th' },
      { id: 'tiktok', name: 'TikTok', subtitle: 'วิดีโอสั้นและไลฟ์สตรีม', url: 'https://apps.apple.com/th/app/tiktok/id1235601864?l=th' },
      { id: 'x', name: 'X', subtitle: 'บทสนทนาที่เกิดขึ้นทั่วโลก', url: 'https://apps.apple.com/th/app/x/id333903271' },
      { id: 'pinterest', name: 'Pinterest', subtitle: 'ค้นหาไอเดียและแรงบันดาลใจ', url: 'https://apps.apple.com/th/app/pinterest/id429047995' },
      { id: 'discord', name: 'Discord', subtitle: 'พูดคุยและแฮงก์เอาท์', url: 'https://apps.apple.com/th/app/discord-chat-talk-hangout/id985746746' },
      { id: 'threads', name: 'Threads', subtitle: 'แอปสนทนาข้อความจาก Instagram', url: 'https://apps.apple.com/th/app/threads-an-instagram-app/id6446901002' },
      { id: 'telegram', name: 'Telegram Messenger', subtitle: 'แชทที่รวดเร็วและปลอดภัย', url: 'https://apps.apple.com/th/app/telegram-messenger/id686449807?l=th' }
    ]
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    apps: [
      { id: 'youtube', name: 'YouTube', subtitle: 'ดู ฟัง และสตรีมสิ่งที่คุณชอบ', url: 'https://apps.apple.com/th/app/youtube/id544007664?l=th' },
      { id: 'bilibili', name: 'Bilibili', subtitle: 'แหล่งรวมอนิเมะและวิดีโอ', url: 'https://apps.apple.com/th/app/bilibili-%E0%B8%AD%E0%B8%99-%E0%B9%80%E0%B8%A1%E0%B8%B0-hd-%E0%B8%A7-%E0%B8%94-%E0%B9%82%E0%B8%AD/id1548857482?l=th' },
      { id: 'netflix', name: 'Netflix', subtitle: 'ภาพยนตร์และซีรีส์ระดับโลก', url: 'https://apps.apple.com/th/app/netflix/id363590051' },
      { id: 'iqiyi', name: 'iQIYI', subtitle: 'ซีรีส์เอเชียยอดนิยม', url: 'https://apps.apple.com/th/app/iqiyi-%E0%B8%8B-%E0%B8%A3-%E0%B8%AA-%E0%B8%A7%E0%B8%B2%E0%B9%84%E0%B8%A3%E0%B8%95-%E0%B9%82%E0%B8%8A%E0%B8%A7/id1461999674?l=th' },
      { id: 'viu', name: 'Viu', subtitle: 'ซีรีส์เกาหลีและเอเชียใหม่ล่าสุด', url: 'https://apps.apple.com/th/app/viu/id1036095179?l=th' },
      { id: 'spotify', name: 'Spotify', subtitle: 'ฟังเพลงและพอดแคสต์', url: 'https://apps.apple.com/th/app/spotify-music-and-podcasts/id324684580' }
    ]
  },
  {
    id: 'utility',
    title: 'Utility',
    apps: [
      { id: 'shopee', name: 'Shopee TH: ซื้อของออนไลน์', subtitle: 'ช้อปสนุก ส่งฟรีทั่วไทย', url: 'https://apps.apple.com/th/app/shopee-th-%E0%B8%8B-%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99-%E0%B8%AA-%E0%B8%87%E0%B9%84%E0%B8%A7/id959841453?l=th' },
      { id: 'meitu', name: 'Meitu', subtitle: 'แต่งรูปและวิดีโอสวยเป๊ะ', url: 'https://apps.apple.com/th/app/meitu-photo-video-editor/id416048305' },
      { id: 'notes-plus', name: 'Notes+', subtitle: 'จดบันทึกง่ายๆ และสร้างสรรค์', url: 'https://apps.apple.com/th/app/notes/id1609361989?l=th' },
      { id: 'procreate', name: 'Procreate', subtitle: 'วาดภาพ ระบายสี สร้างสรรค์', url: 'https://apps.apple.com/th/app/procreate/id425073498?l=th' },
      { id: '1-1-1-1', name: '1.1.1.1: Faster Internet', subtitle: 'อินเทอร์เน็ตที่เร็วและปลอดภัยขึ้น', url: 'https://apps.apple.com/th/app/1-1-1-1-faster-internet/id1423538627?l=th' },
      { id: 'capcut', name: 'CapCut', subtitle: 'โปรแกรมตัดต่อวิดีโอ', url: 'https://apps.apple.com/th/app/capcut-%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%95-%E0%B8%94%E0%B8%95-%E0%B8%AD%E0%B8%A7-%E0%B8%94-%E0%B9%82%E0%B8%AD/id1500855883?l=th' }
    ]
  }
];