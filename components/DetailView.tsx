import React from 'react';
import { CATEGORIES } from '../constants.ts';

interface DetailViewProps {
  appId: string;
}

export const DetailView: React.FC<DetailViewProps> = ({ appId }) => {
  const allApps = CATEGORIES.flatMap(c => c.apps);
  const app = allApps.find(a => a.url.includes(`id${appId}`));

  const getBgColor = (name: string) => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
  };

  if (!app) return <div className="text-center py-20"><p>ไม่พบแอปที่ต้องการ</p><a href="/" className="text-blue-500 hover:underline">กลับไปหน้าแรก</a></div>;

  return (
    <div className="flex flex-col items-center pt-8 px-4 text-center animate-in">
      <div className={`w-28 h-28 rounded-[24px] mb-6 shadow-xl border border-black/5 flex items-center justify-center ${getBgColor(app.name)}`}>
        <span className="text-white text-5xl font-bold">{app.name.charAt(0).toUpperCase()}</span>
      </div>
      <h1 className="text-3xl font-bold text-[#1f2328] mb-1">{app.name}</h1>
      <h2 className="text-xl font-semibold text-[#0969da] mb-10">Download & update</h2>

      <div className="w-full max-w-md bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 text-left shadow-sm">
        <div className="flex gap-4">
          <svg className="w-6 h-6 text-amber-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-amber-900 text-sm font-bold leading-relaxed">
            กรุณาใช้ <span className="underline decoration-2">Safari</span> เท่านั้น หากแถบดาวน์โหลดไม่ปรากฏ ให้ลองเข้า Safari ใหม่ หรือรีสตาร์ทเครื่อง iPad ของคุณ และตรวจสอบว่าได้ทำการ <span className="text-rose-600">Sign in Apple ID</span> แล้ว
          </p>
        </div>
      </div>
      
      <a href="/" className="text-sm text-[#0969da] hover:underline flex items-center font-bold bg-blue-50 px-10 py-3 rounded-full transition-all hover:bg-blue-100">
        ย้อนกลับ
      </a>
    </div>
  );
};