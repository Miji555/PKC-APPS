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

  const getIconColor = (name: string) => {
    const colors = ['bg-blue-500', 'bg-sky-500', 'bg-cyan-500', 'bg-indigo-500'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
  };

  if (!app) {
    return (
      <div className="text-center py-20 animate-in flex flex-col items-center">
        <div className="bg-gray-100 p-4 rounded-full mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </div>
        <p className="text-gray-500 mb-6 font-medium">ไม่พบแอปที่คุณต้องการ</p>
        <a href="/" className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
            กลับหน้าหลัก
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-6 px-4 text-center animate-in w-full max-w-lg mx-auto">
      <div className={`w-32 h-32 rounded-[28px] mb-6 shadow-xl shadow-blue-200/50 flex items-center justify-center ${getIconColor(app.name)}`}>
        <span className="text-white text-6xl font-bold drop-shadow-md select-none">{app.name.charAt(0).toUpperCase()}</span>
      </div>
      
      <h1 className="text-2xl font-black text-gray-900 mb-2 leading-tight">{app.name}</h1>
      <p className="text-gray-500 mb-6 font-medium">{app.subtitle || 'Application'}</p>
      
      <div className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-8 inline-flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
        พร้อมดาวน์โหลด
      </div>

      <div className="w-full space-y-3 mb-10">
        <a 
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-lg py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all duration-200 flex items-center justify-center gap-3"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          ดาวน์โหลดเลย
        </a>

        <a 
          href="/" 
          className="block w-full bg-white border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 text-blue-600 font-bold text-lg py-3 rounded-2xl transition-all duration-200"
        >
          เลือกแอปอื่น
        </a>
      </div>

      <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 text-left shadow-sm">
        <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
            หมายเหตุ
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          หากกดปุ่มดาวน์โหลดแล้วไม่มีอะไรเกิดขึ้น ให้ลองรีเฟรชหน้าจอ หรือเปิดผ่าน <strong>Safari</strong> บนอุปกรณ์ของคุณโดยตรง
        </p>
      </div>
    </div>
  );
};