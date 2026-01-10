import React, { useEffect } from 'react';
import { CATEGORIES } from '../constants';

interface DetailViewProps {
  appId: string;
}

export const DetailView: React.FC<DetailViewProps> = ({ appId }) => {
  const allApps = CATEGORIES.flatMap(c => c.apps);
  const app = allApps.find(a => a.url.includes(`id${appId}`));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getBgColor = (name: string) => {
    const colors = ['bg-blue-500', 'bg-sky-500', 'bg-cyan-500', 'bg-indigo-500'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
  };

  if (!app) {
    return (
      <div className="text-center py-20 animate-in">
        <p className="text-gray-500 mb-4 text-lg">ไม่พบแอปที่ต้องการ</p>
        <a href="/" className="text-blue-600 hover:underline font-bold text-lg">กลับไปหน้าแรก</a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-8 px-4 text-center animate-in w-full">
      <div className={`w-32 h-32 rounded-[28px] mb-6 shadow-xl shadow-blue-100 border-4 border-white flex items-center justify-center ${getBgColor(app.name)}`}>
        <span className="text-white text-6xl font-bold drop-shadow-md">{app.name.charAt(0).toUpperCase()}</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{app.name}</h1>
      <h2 className="text-lg font-medium text-blue-500 mb-8 bg-blue-50 px-4 py-1 rounded-full">พร้อมดาวน์โหลดและอัปเดต</h2>

      <div className="w-full max-w-md space-y-4 mb-10">
        {/* ปุ่มดาวน์โหลดหลัก */}
        <a 
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 active:scale-95 text-white font-bold text-xl py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          ดาวน์โหลดเลย
        </a>

        {/* ปุ่มย้อนกลับ */}
        <a 
          href="/" 
          className="block w-full bg-white border-2 border-blue-100 hover:bg-blue-50 hover:border-blue-200 text-blue-600 font-bold text-lg py-3 rounded-2xl transition-all duration-200"
        >
          เลือกแอปอื่น
        </a>
      </div>

      <div className="w-full max-w-md bg-white border border-blue-100 rounded-2xl p-6 text-left shadow-sm">
        <div className="flex gap-4 items-start">
          <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600 flex-shrink-0">
             <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-1">คำแนะนำ</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              กรุณาใช้ <strong>Safari</strong> ในการดาวน์โหลด หากแถบดาวน์โหลดไม่ขึ้น ให้ลองเข้าใหม่ หรือ Restart iPad ของคุณ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};