import { Category } from './types.ts';

export const CONTACT_IG = 'pkc.apps';

export const CATEGORIES: Category[] = [
  {
    id: 'games',
    title: 'Games (10 อันดับเกมยอดนิยม)',
    apps: [
      {
        id: 'rov',
        name: 'Garena RoV',
        subtitle: 'สุดยอดเกม MOBA 5v5 อันดับ 1 ในไทย',
        url: 'https://apps.apple.com/th/app/garena-rov-5v5-festival/id1150337432',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/21/92/8a/21928ab1-2a6c-e06a-9351-831518f9746b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png',
        isNew: true
      },
      {
        id: 'efootball',
        name: 'eFootball™ 2025',
        subtitle: 'สัมผัสประสบการณ์ฟุตบอลระดับโลก',
        url: 'https://apps.apple.com/th/app/efootball/id1117270703',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/91/9f/61/919f6104-e53b-f63b-640f-7b7f94156641/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png',
        isNew: true
      },
      {
        id: 'freefire',
        name: 'Free Fire',
        subtitle: 'เกมเอาตัวรอดสุดมันส์บนมือถือ',
        url: 'https://apps.apple.com/th/app/free-fire-the-chaos/id1300146617',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c7/2b/96/c72b9631-f18b-6677-789a-6c174358826d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'roblox',
        name: 'Roblox',
        subtitle: 'จักรวาลเสมือนจริงแห่งการสร้างสรรค์',
        url: 'https://apps.apple.com/th/app/roblox/id431946152',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e0/75/f0/e075f0da-271d-a417-09f1-f76156e52c80/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'pubgm',
        name: 'PUBG MOBILE',
        subtitle: 'ต้นฉบับเกม Battle Royale ระดับโลก',
        url: 'https://apps.apple.com/th/app/pubg-mobile-th/id1330123889',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/80/7e/61/807e6153-f761-9c60-a15e-448496156545/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'mlbb',
        name: 'Mobile Legends: Bang Bang',
        subtitle: 'เกม MOBA 5v5 เล่นง่าย จบไว',
        url: 'https://apps.apple.com/th/app/mobile-legends-bang-bang/id1163138213',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3c/d6/d7/3cd6d787-84c1-657d-6c1c-96b5278c5208/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'codm',
        name: 'Call of Duty: Mobile',
        subtitle: 'เกมยิง FPS ระดับตำนาน',
        url: 'https://apps.apple.com/th/app/call-of-duty-mobile/id1287282214',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/84/67/82/8467828c-482a-9e2c-6330-84c68023758b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'genshin',
        name: 'Genshin Impact',
        subtitle: 'เกม Open-world RPG ภาพสวยระดับ AAA',
        url: 'https://apps.apple.com/th/app/genshin-impact/id1517783697',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/18/d8/67/18d867c2-9e2c-47d0-1498-5c493c403330/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png'
      },
      {
        id: 'hayday',
        name: 'Hay Day',
        subtitle: 'เกมทำฟาร์มสุดน่ารักที่ทุกคนหลงรัก',
        url: 'https://apps.apple.com/th/app/hay-day/id506627515',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c2/f0/a0/c2f0a012-70b1-129a-2481-2090875e656d/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'minecraft',
        name: 'Minecraft',
        subtitle: 'สร้างโลกและผจญภัยตามจินตนาการ',
        url: 'https://apps.apple.com/th/app/minecraft/id479516143',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/91/9e/7b/919e7b30-c831-50e5-7973-206e0176f183/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      }
    ]
  },
  {
    id: 'social',
    title: 'Social Media (โซเชียลมีเดีย)',
    apps: [
      { id: 'facebook', name: 'Facebook', subtitle: 'เชื่อมต่อกับเพื่อนและครอบครัว', url: 'https://apps.apple.com/th/app/facebook/id284882215', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8d/62/1d/8d621d74-2c26-5384-6330-84c68023758b/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png' },
      { id: 'messenger', name: 'Messenger', subtitle: 'แชทและวิดีโอคอลฟรี', url: 'https://apps.apple.com/th/app/messenger/id454638411', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/55/26/d7/5526d787-84c1-657d-6c1c-96b5278c5208/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png' },
      { id: 'instagram', name: 'Instagram', subtitle: 'แชร์รูปภาพและวิดีโอ', url: 'https://apps.apple.com/th/app/instagram/id389801252', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c7/2b/96/c72b9631-f18b-6677-789a-6c174358826d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png' },
      { id: 'line', name: 'LINE', subtitle: 'แชทและโทรฟรีทั่วโลก', url: 'https://apps.apple.com/th/app/line/id443904275', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c3/13/26/c31326c9-f1c5-0912-320d-88b17b6a6711/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png' },
      { id: 'discord', name: 'Discord', subtitle: 'คอมมูนิตี้สำหรับเกมเมอร์', url: 'https://apps.apple.com/th/app/discord/id985746746', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4a/04/00/4a040082-9092-23c5-6804-06927d118933/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png' }
    ]
  },
  {
    id: 'work',
    title: 'Education & Productivity (การศึกษาและทำงาน)',
    apps: [
      {
        id: 'notes-plus',
        name: 'Notes+',
        subtitle: 'จดบันทึกและจัดการเอกสารระดับโปร',
        url: 'https://apps.apple.com/th/app/free-fire/id1300146617',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/8e/3c/6e/8e3c6e93-6c17-4358-6c1c-96b5278c5208/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png',
        isNew: true
      },
      { id: 'chatgpt', name: 'ChatGPT', subtitle: 'ผู้ช่วยอัจฉริยะ AI', url: 'https://apps.apple.com/th/app/chatgpt/id6448311069', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7e/67/82/7e67828c-482a-9e2c-6330-84c68023758b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png' },
      { id: 'goodnotes', name: 'Goodnotes 6', subtitle: 'จดบันทึกและเขียน PDF', url: 'https://apps.apple.com/th/app/goodnotes/id1444383602', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/91/9e/7b/919e7b30-c831-50e5-7973-206e0176f183/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png' },
      { id: 'gdocs', name: 'Google Docs', subtitle: 'สร้างและแก้ไขเอกสารออนไลน์', url: 'https://apps.apple.com/th/app/google-docs/id842842640', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e0/75/f0/e075f0da-271d-a417-09f1-f76156e52c80/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100bb.png' }
    ]
  }
];