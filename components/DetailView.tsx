import React from 'react';
import { CATEGORIES } from '../constants';

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

  if (!app) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 mb-4">ไม่พบแอปที่ต้องการ</p>
        <a href="/" className="text-blue-500 hover:underline font-bold">กลับไปหน้าแรก</a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-8 px-4 text-center animate-in">
      <div className={`w-28 h-28 rounded-[24px] mb-6 shadow-xl border border-black/5 flex items-center justify-center ${getBgColor(app.name)}`}>
        <span className="text-white text-5xl font-bold">{app.name.charAt(0).toUpperCase()}</span>
      </div>
      <h1 className="text-3xl font-bold text-[#1f2328] mb-1">{app.name}</h1>
      <h2 className="text-xl font-semibold text-[#0969da] mb-8">Download และ Updates</h2>

      <div className="w-full max-w-md space-y-4 mb-10">
        {/* ปุ่มดาวน์โหลดหลัก */}
        <a 
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#007AFF] hover:bg-[#0062cc] active:scale-95 text-white font-bold text-lg py-4 rounded-xl shadow-md transition-all duration-200"
        >
          ดาวน์โหลด
        </a>

        {/* ปุ่มย้อนกลับ */}
        <a 
          href="/" 
          className="block w-full bg-white border border-[#d0d7de] hover:bg-gray-50 text-[#1f2328] font-bold py-3 rounded-xl transition-colors"
        >
          ย้อนกลับ
        </a>
      </div>

      <div className="w-full max-w-md bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-left shadow-sm">
        <div className="flex gap-4">
          <svg className="w-6 h-6 text-yellow-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-yellow-900 text-sm font-bold leading-relaxed">
            ใช้ Safari เท่านั้น ถ้าแถบดาวน์โหลดด้านบนไม่ขึ้น ให้ลองเข้าออก Safari ใหม่ หรือ Restart iPad ของคุณ
          </p>
        </div>
      </div>
    </div>
  );
};