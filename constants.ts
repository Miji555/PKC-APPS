
import { Category } from './types.ts';

export const CATEGORIES: Category[] = [
  {
    id: 'games',
    title: 'Games (เกม)',
    apps: [
      {
        id: 'minecraft',
        name: 'Minecraft',
        subtitle: 'สร้างโลกและจินตนาการ',
        url: 'https://apps.apple.com/th/app/minecraft/id479516143',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/91/9e/7b/919e7b30-c831-50e5-7973-206e0176f183/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'rov',
        name: 'Garena RoV',
        subtitle: 'สุดยอดเกม MOBA 5v5',
        url: 'https://apps.apple.com/th/app/garena-rov-5v5-festival/id1150337432',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/21/92/8a/21928ab1-2a6c-e06a-9351-831518f9746b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'efootball',
        name: 'eFootball™',
        subtitle: 'ที่สุดของเกมฟุตบอลสมจริง',
        url: 'https://apps.apple.com/th/app/efootball/id1117270703?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/10/7c/82/107c828c-482a-9e2c-6330-84c68023758b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      }
    ]
  },
  {
    id: 'sns',
    title: 'Social Media (โซเชียลมีเดีย)',
    apps: [
      {
        id: 'facebook',
        name: 'Facebook',
        subtitle: 'เชื่อมต่อกับทุกคน',
        url: 'https://apps.apple.com/th/app/facebook/id284882215?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8d/62/1d/8d621d74-2c26-5384-6330-84c68023758b/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'messenger',
        name: 'Messenger',
        subtitle: 'แชทและวิดีโอคอล',
        url: 'https://apps.apple.com/th/app/messenger/id454638411?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/55/26/d7/5526d787-84c1-657d-6c1c-96b5278c5208/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'instagram',
        name: 'Instagram',
        subtitle: 'แชร์รูปภาพและสตอรี่',
        url: 'https://apps.apple.com/th/app/instagram/id389801252?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c7/2b/96/c72b9631-f18b-6677-789a-6c174358826d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'line',
        name: 'LINE',
        subtitle: 'ส่งข้อความและโทรฟรี',
        url: 'https://apps.apple.com/th/app/line/id443904275?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c3/13/26/c31326c9-f1c5-0912-320d-88b17b6a6711/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'x',
        name: 'X (Twitter)',
        subtitle: 'ติดตามข่าวสารทันใจ',
        url: 'https://apps.apple.com/th/app/x/id333903271?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/71/66/f2/7166f272-a083-0599-4d6d-68e3128913b4/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'threads',
        name: 'Threads',
        subtitle: 'ชุมชนคนเล่าเรื่อง',
        url: 'https://apps.apple.com/th/app/threads/id6446901002?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/44/21/72/44217272-a083-0599-4d6d-68e3128913b4/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'telegram',
        name: 'Telegram',
        subtitle: 'แชทที่ปลอดภัยและรวดเร็ว',
        url: 'https://apps.apple.com/th/app/telegram-messenger/id686449807?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3c/d6/d7/3cd6d787-84c1-657d-6c1c-96b5278c5208/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'lemon8',
        name: 'Lemon8',
        subtitle: 'ไอเดียไลฟ์สไตล์',
        url: 'https://apps.apple.com/th/app/lemon8/id1498607143?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/21/62/1d/21621d74-2c26-5384-6330-84c68023758b/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'discord',
        name: 'Discord',
        subtitle: 'ชุมชนคนเล่นเกมและคุยกัน',
        url: 'https://apps.apple.com/th/app/discord/id985746746?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4a/04/00/4a040082-9092-23c5-6804-06927d118933/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'pinterest',
        name: 'Pinterest',
        subtitle: 'รวมไอเดียสร้างสรรค์',
        url: 'https://apps.apple.com/th/app/pinterest/id429047995?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/31/34/a9/3134a974-9f20-802c-8067-828c828c828c/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      }
    ]
  },
  {
    id: 'entertainment',
    title: 'ความบันเทิง (Entertainment)',
    apps: [
      {
        id: 'tiktok',
        name: 'TikTok',
        subtitle: 'วิดีโอสั้นสุดฮิต',
        url: 'https://apps.apple.com/th/app/tiktok/id1235601864?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/18/d8/67/18d867c2-9e2c-47d0-1498-5c493c403330/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'youtube',
        name: 'YouTube',
        subtitle: 'วิดีโอและสตรีมมิ่ง',
        url: 'https://apps.apple.com/th/app/youtube/id544007664?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/97/3d/8e/973d8e33-2895-4632-411a-3e3e4043e066/logo_youtube_color-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220.png/100x100bb.png'
      },
      {
        id: 'netflix',
        name: 'Netflix',
        subtitle: 'ดูหนังและซีรีส์',
        url: 'https://apps.apple.com/th/app/netflix/id363590051?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/80/7e/4d/807e4d82-e56d-543e-c852-6c92989b6b69/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'spotify',
        name: 'Spotify',
        subtitle: 'ฟังเพลงและพอดแคสต์',
        url: 'https://apps.apple.com/th/app/spotify-music-and-podcasts/id324684580',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7e/f0/a0/7ef0a012-70b1-129a-2481-2090875e656d/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'yt-music',
        name: 'YouTube Music',
        subtitle: 'ฟังเพลงโปรดแบบไม่มีโฆษณา',
        url: 'https://apps.apple.com/th/app/youtube-music/id1017492454?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/97/3d/8e/973d8e33-2895-4632-411a-3e3e4043e066/logo_youtube_music_color-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220.png/100x100bb.png'
      }
    ]
  },
  {
    id: 'work',
    title: 'การทำงาน (Productivity)',
    apps: [
      {
        id: 'apple-notes',
        name: 'Notes',
        subtitle: 'จดบันทึกและจัดการไอเดีย',
        url: 'https://apps.apple.com/th/app/notes/id1609361989?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/44/21/72/44217272-a083-0599-4d6d-68e3128913b4/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'notability',
        name: 'Notability',
        subtitle: 'จดบันทึกและทำเครื่องหมาย PDF',
        url: 'https://apps.apple.com/th/app/notability-smarter-ai-notes/id360593530?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/80/7e/4d/807e4d82-e56d-543e-c852-6c92989b6b69/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'gmail',
        name: 'Gmail',
        subtitle: 'อีเมลเพื่อการทำงาน',
        url: 'https://apps.apple.com/th/app/gmail/id422689480?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/80/7e/61/807e6153-f761-9c60-a15e-448496156545/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'google-drive',
        name: 'Google Drive',
        subtitle: 'ที่เก็บไฟล์ออนไลน์',
        url: 'https://apps.apple.com/th/app/google-drive/id507874739?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/93/81/4f/93814f31-893d-4c3e-8c3e-43f6c88f7b7f/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'google-docs',
        name: 'Google Docs',
        subtitle: 'สร้างและแก้ไขเอกสาร',
        url: 'https://apps.apple.com/th/app/google-docs/id842842640?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e0/75/f0/e075f0da-271d-a417-09f1-f76156e52c80/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'google-meet',
        name: 'Google Meet',
        subtitle: 'ประชุมวิดีโอคอล',
        url: 'https://apps.apple.com/th/app/google-meet/id1096918571?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/0c/84/82/0c84828c-482a-9e2c-6330-84c68023758b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'zoom',
        name: 'Zoom',
        subtitle: 'วิดีโอคอนเฟอเรนซ์',
        url: 'https://apps.apple.com/th/app/zoom/id546505307?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/21/92/8a/21928ab1-2a6c-e06a-9351-831518f9746b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'goodnotes',
        name: 'Goodnotes',
        subtitle: 'จดบันทึกดิจิทัล',
        url: 'https://apps.apple.com/th/app/goodnotes/id1444383602?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/91/9e/7b/919e7b30-c831-50e5-7973-206e0176f183/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'canva',
        name: 'Canva',
        subtitle: 'ออกแบบกราฟิกง่ายๆ',
        url: 'https://apps.apple.com/th/app/canva/id897446215?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/82/8c/82/828c828c-482a-9e2c-6330-84c68023758b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        subtitle: 'AI ช่วยเหลืออัจฉริยะ',
        url: 'https://apps.apple.com/th/app/chatgpt/id6448311069?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7e/67/82/7e67828c-482a-9e2c-6330-84c68023758b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'google-translate',
        name: 'แปลภาษา',
        subtitle: 'ตัวช่วยแปลระดับโลก',
        url: 'https://apps.apple.com/th/app/google-translate/id414706506?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/84/67/82/8467828c-482a-9e2c-6330-84c68023758b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'capcut',
        name: 'CapCut',
        subtitle: 'ตัดต่อวิดีโอมืออาชีพ',
        url: 'https://apps.apple.com/th/app/capcut/id1500855883?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a4/0c/84/a40c8482-e56d-543e-c852-6c92989b6b69/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'meitu',
        name: 'Meitu',
        subtitle: 'แต่งรูปสวยทันตา',
        url: 'https://apps.apple.com/th/app/meitu-photo-video-editor/id416048305',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4a/04/00/4a040082-9092-23c5-6804-06927d118933/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      }
    ]
  },
  {
    id: 'utility',
    title: 'เครื่องมืออื่นๆ (Utility/Shopping)',
    apps: [
      {
        id: 'google-maps',
        name: 'Google Maps',
        subtitle: 'แผนที่และเนวิเกเตอร์',
        url: 'https://apps.apple.com/th/app/google-maps/id585027354?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/91/9f/61/919f6104-e53b-f63b-640f-7b7f94156641/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'chrome',
        name: 'Chrome',
        subtitle: 'เว็บเบราว์เซอร์เร็วทันใจ',
        url: 'https://apps.apple.com/th/app/google-chrome/id535886823?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d7/55/d6/d755d612-4011-859a-243e-c6896263d91f/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'google',
        name: 'Google',
        subtitle: 'ค้นหาทุกสิ่งที่คุณต้องการ',
        url: 'https://apps.apple.com/th/app/google/id284815942?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e0/75/f0/e075f0da-271d-a417-09f1-f76156e52c80/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'shopee',
        name: 'Shopee',
        subtitle: 'ช้อปออนไลน์สุดคุ้ม',
        url: 'https://apps.apple.com/th/app/shopee-th/id959841453?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c2/f0/a0/c2f0a012-70b1-129a-2481-2090875e656d/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'lazada',
        name: 'Lazada',
        subtitle: 'ดีลเด็ด ช้อปกระจาย',
        url: 'https://apps.apple.com/th/app/lazada/id785385147?l=th',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c7/2b/96/c72b9631-f18b-6677-789a-6c174358826d/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      }
    ]
  }
];

export const CONTACT_IG = 'ddddddni._o';
