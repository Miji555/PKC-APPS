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

  const getIconGradient = (name: string) => {
    const gradients = [
        'bg-gradient-to-br from-blue-400 to-indigo-500',
        'bg-gradient-to-br from-sky-400 to-blue-500',
        'bg-gradient-to-br from-violet-400 to-purple-500'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return gradients[Math.abs(hash) % gradients.length];
  };

  if (!app) {
    return (
      <div className="text-center py-20 animate-in flex flex-col items-center">
        <div className="glass-panel p-6 rounded-full mb-6 text-slate-400">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </div>
        <p className="text-slate-500 mb-8 font-medium text-lg">ไม่พบแอปที่คุณต้องการ</p>
        <a href="/" className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            กลับหน้าหลัก
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-10 px-4 text-center animate-in w-full max-w-lg mx-auto">
      <div className={`w-40 h-40 rounded-[2.5rem] mb-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex items-center justify-center ${getIconGradient(app.name)} ring-4 ring-white`}>
        <span className="text-white text-7xl font-bold drop-shadow-md select-none">{app.name.charAt(0).toUpperCase()}</span>
      </div>
      
      <h1 className="text-3xl font-black text-slate-900 mb-3 leading-tight tracking-tight">{app.name}</h1>
      <p className="text-slate-500 mb-8 font-medium text-lg tracking-wide">{app.subtitle || 'Application'}</p>
      
      <div className="bg-blue-50 px-6 py-2 rounded-full text-sm font-bold mb-10 inline-flex items-center gap-3 border border-blue-100 text-blue-600">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
        </span>
        <span>พร้อมดาวน์โหลด</span>
      </div>

      <div className="w-full space-y-4 mb-12">
        <a 
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-5 rounded-[2rem] shadow-[0_10px_30px_-5px_rgba(37,99,235,0.3)] transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          ดาวน์โหลดเลย
        </a>

        <a 
          href="/" 
          className="block w-full glass-button hover:bg-white text-slate-700 font-bold text-lg py-4 rounded-[2rem] transition-all duration-300"
        >
          เลือกแอปอื่น
        </a>
      </div>

      <div className="w-full glass-card rounded-3xl p-8 text-left edge-shine">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-3 text-lg">
            <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
            หมายเหตุ
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          หากกดปุ่มดาวน์โหลดแล้วไม่มีอะไรเกิดขึ้น ให้ลองรีเฟรชหน้าจอ หรือเปิดผ่าน <strong className="text-slate-900 font-bold">Safari</strong> บนอุปกรณ์ของคุณโดยตรง
        </p>
      </div>
    </div>
  );
};