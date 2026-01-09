import { Category } from './types.ts';

export const CATEGORIES: Category[] = [
  {
    id: 'games',
    title: 'Games',
    apps: [
      {
        id: 'minecraft',
        name: 'Minecraft: สร้างโลกของคุณ',
        subtitle: 'เกมจำลองการสร้างบล็อก',
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
        subtitle: 'Adventure, Action, Creation',
        url: 'https://apps.apple.com/th/app/roblox/id1056524660'
      },
      {
        id: 'genshin',
        name: 'Genshin Impact',
        subtitle: 'Open-world adventure RPG',
        url: 'https://apps.apple.com/th/app/genshin-impact/id1517783697?l=th'
      },
      {
        id: 'honkai',
        name: 'Honkai: Star Rail',
        subtitle: 'Space Fantasy RPG',
        url: 'https://apps.apple.com/th/app/honkai-star-rail/id1599719154?l=th'
      },
      {
        id: 'hayday',
        name: 'Hay Day',
        subtitle: 'Farm Building Game',
        url: 'https://apps.apple.com/th/app/hay-day/id506627515?l=th'
      },
      {
        id: 'goose-duck',
        name: 'Goose Goose Duck',
        subtitle: 'A Game of Social Deduction',
        url: 'https://apps.apple.com/th/app/goose-goose-duck/id1558248707?l=th'
      },
      {
        id: 'among-us',
        name: 'Among Us',
        subtitle: 'Social deduction and teamwork',
        url: 'https://apps.apple.com/th/app/among-us/id1351168404?l=th'
      },
      {
        id: 'cod-mobile',
        name: 'Call of Duty: Mobile - Garena',
        subtitle: 'Action, Shooter, Battle Royale',
        url: 'https://apps.apple.com/th/app/call-of-duty-mobile-garena/id1465688043?l=th'
      },
      {
        id: 'pubg-mobile',
        name: 'PUBG MOBILE',
        subtitle: 'Original Battle Royale',
        url: 'https://apps.apple.com/th/app/pubg-mobile/id1330123889?l=th'
      },
      {
        id: 'golden-spatula',
        name: 'Golden Spatula',
        subtitle: 'Auto-chess battle game',
        url: 'https://apps.apple.com/th/app/golden-spatula/id6661023265'
      }
    ]
  },
  {
    id: 'social',
    title: 'Social',
    apps: [
      { id: 'facebook', name: 'Facebook', subtitle: 'Connect with friends & family', url: 'https://apps.apple.com/th/app/facebook/id284882215?l=th' },
      { id: 'messenger', name: 'Messenger', subtitle: 'Free text and video chat', url: 'https://apps.apple.com/th/app/messenger/id454638411?l=th' },
      { id: 'instagram', name: 'Instagram', subtitle: 'Photo & Video Sharing', url: 'https://apps.apple.com/th/app/instagram/id389801252?l=th' },
      { id: 'tiktok', name: 'TikTok', subtitle: 'Videos, Music & Live Streams', url: 'https://apps.apple.com/th/app/tiktok/id1235601864?l=th' },
      { id: 'x', name: 'X', subtitle: 'The global digital town square', url: 'https://apps.apple.com/th/app/x/id333903271' },
      { id: 'pinterest', name: 'Pinterest', subtitle: 'Find and save ideas', url: 'https://apps.apple.com/th/app/pinterest/id429047995' },
      { id: 'discord', name: 'Discord', subtitle: 'Chat, Talk & Hangout', url: 'https://apps.apple.com/th/app/discord-chat-talk-hangout/id985746746' },
      { id: 'threads', name: 'Threads', subtitle: 'An Instagram app', url: 'https://apps.apple.com/th/app/threads-an-instagram-app/id6446901002' },
      { id: 'messages', name: 'ข้อความ', subtitle: 'แอปส่งข้อความจาก Apple', url: 'https://apps.apple.com/th/app/%E0%B8%82-%E0%B8%AD%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1/id1146560473?l=th' }
    ]
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    apps: [
      { id: 'youtube', name: 'YouTube', subtitle: 'Watch, Listen, Stream', url: 'https://apps.apple.com/th/app/youtube/id544007664?l=th' },
      { id: 'bilibili', name: 'Bilibili', subtitle: 'Anime, Videos & Community', url: 'https://apps.apple.com/th/app/bilibili-%E0%B8%AD%E0%B8%99-%E0%B9%80%E0%B8%A1%E0%B8%B0-hd-%E0%B8%A7-%E0%B8%94-%E0%B9%82%E0%B8%AD/id1548857482?l=th' },
      { id: 'netflix', name: 'Netflix', subtitle: 'Movies & TV Shows', url: 'https://apps.apple.com/th/app/netflix/id363590051' },
      { id: 'iqiyi', name: 'iQIYI', subtitle: 'Drama, Anime, Show', url: 'https://apps.apple.com/th/app/iqiyi-%E0%B8%8B-%E0%B8%A3-%E0%B8%AA-%E0%B8%A7%E0%B8%B2%E0%B9%84%E0%B8%A3%E0%B8%95-%E0%B9%82%E0%B8%8A%E0%B8%A7/id1461999674?l=th' },
      { id: 'viu', name: 'Viu', subtitle: 'Korean Drama & Variety', url: 'https://apps.apple.com/th/app/viu/id1036095179?l=th' },
      { id: 'spotify', name: 'Spotify', subtitle: 'Music and Podcasts', url: 'https://apps.apple.com/th/app/spotify-music-and-podcasts/id324684580' }
    ]
  },
  {
    id: 'utility',
    title: 'Utility',
    apps: [
      { id: 'shopee', name: 'Shopee TH: ซื้อของออนไลน์', subtitle: 'ช้อปสนุก ส่งฟรี* ทั่วไทย', url: 'https://apps.apple.com/th/app/shopee-th-%E0%B8%8B-%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99-%E0%B8%AA-%E0%B8%87%E0%B9%84%E0%B8%A7/id959841453?l=th' },
      { id: 'meitu', name: 'Meitu', subtitle: 'Photo & Video Editor', url: 'https://apps.apple.com/th/app/meitu-photo-video-editor/id416048305' },
      { id: 'notes-plus', name: 'Notes+', subtitle: 'Simple & Creative Notes', url: 'https://apps.apple.com/th/app/notes/id1609361989?l=th' }
    ]
  }
];