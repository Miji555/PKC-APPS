
import React from 'react';
import { CATEGORIES } from '../constants.ts';

interface AppDetailProps {
  appId: string;
  onBack: () => void;
}

export const AppDetail: React.FC<AppDetailProps> = ({ appId, onBack }) => {
  const getAppleId = (url: string) => {
    const match = url.match(/id(\d+)/);
    return match ? match[1] : null;
  };

  const app = CATEGORIES.flatMap(c => c.apps).find(a => getAppleId(a.url) === appId);

  if (!app) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 mb-4">ไม่พบข้อมูลแอปพลิเคชัน</p>
        <button onClick={onBack} className="text-[#0969da] font-bold hover:underline">กลับหน้าหลัก</button>
      </div>
    );
  }

  const getBgColor = (name: string) => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="flex flex-col items-center pt-8 px-4 text-center">
      <div className={`w-28 h-28 rounded-[24px] mb-6 shadow-xl border border-black/5 flex items-center justify-center ${getBgColor(app.name)}`}>
        <span className="text-white text-5xl font-bold">
          {app.name.charAt(0).toUpperCase()}
        </span>
      </div>
      <h1 className="text-3xl font-bold text-[#1f2328] mb-1">{app.name}</h1>
      <h2 className="text-xl font-semibold text-[#0969da] mb-12 text-blue-600">Download & Update</h2>

      <div className="w-full max-w-md bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-12 text-left shadow-sm">
        <div className="flex gap-4">
          <svg className="w-6 h-6 text-yellow-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-yellow-900 text-sm font-bold leading-relaxed">
            ใช้ Safari เท่านั้น หากแถบดาวน์โหลดด้านบนไม่ปรากฏ ให้ลองปิด Safari แล้วเปิดใหม่ หรือรีสตาร์ทเครื่อง iPad ของคุณ
          </p>
        </div>
      </div>

      <button 
        onClick={onBack} 
        className="text-sm text-white bg-[#0969da] hover:bg-[#085bc3] px-10 py-3 rounded-full font-bold transition-all shadow-md"
      >
        กลับไปที่หน้ารายการแอป
      </button>
    </div>
  );
};
