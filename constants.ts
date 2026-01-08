
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
        url: 'https://apps.apple.com/th/app/minecraft/id479516143',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/91/9e/7b/919e7b30-c831-50e5-7973-206e0176f183/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      },
      {
        id: 'rov',
        name: 'Garena RoV: 5v5 Festival',
        subtitle: 'สุดยอดเกม MOBA 5v5 บนมือถือ',
        url: 'https://apps.apple.com/th/app/garena-rov-5v5-festival/id1150337432',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/21/92/8a/21928ab1-2a6c-e06a-9351-831518f9746b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/100x100bb.png'
      }
    ]
  },
  {
    id: 'sns',
    title: 'SNS',
    apps: []
  },
  {
    id: 'utility',
    title: 'Utility',
    apps: []
  }
];

export const CONTACT_IG = 'ddddddni._o';
