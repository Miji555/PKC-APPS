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
        'bg-gradient-to-br from-blue-400 to-blue-600',
        'bg-gradient-to-br from-purple-400 to-purple-600',
        'bg-gradient-to-br from-cyan-400 to-cyan-600'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return gradients[Math.abs(hash) % gradients.length];
  };

  if (!app) {
    return (
      <div className="text-center py-20 animate-in flex flex-col items-center">
        <div className="glass-pill p-6 rounded-full mb-6">
            <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </div>
        <p className="text-white/60 mb-8 font-medium text-lg">ไม่พบแอปที่คุณต้องการ</p>
        <a href="/" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            กลับหน้าหลัก
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-10 px-4 text-center animate-in w-full max-w-lg mx-auto">
      <div className={`w-40 h-40 rounded-[2.5rem] mb-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] flex items-center justify-center ${getIconGradient(app.name)} ring-2 ring-white/20 backdrop-blur-xl`}>
        <span className="text-white text-7xl font-bold drop-shadow-lg select-none">{app.name.charAt(0).toUpperCase()}</span>
      </div>
      
      <h1 className="text-3xl font-black text-white mb-3 leading-tight tracking-tight drop-shadow-lg">{app.name}</h1>
      <p className="text-blue-200/70 mb-8 font-medium text-lg tracking-wide">{app.subtitle || 'Application'}</p>
      
      <div className="glass-pill px-6 py-2 rounded-full text-sm font-bold mb-10 inline-flex items-center gap-3 border border-blue-500/30">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
        <span className="text-blue-200">พร้อมดาวน์โหลด</span>
      </div>

      <div className="w-full space-y-4 mb-12">
        <a 
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xl py-5 rounded-[2rem] shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 border border-white/20"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          ดาวน์โหลดเลย
        </a>

        <a 
          href="/" 
          className="block w-full glass-pill hover:bg-white/10 text-white font-bold text-lg py-4 rounded-[2rem] transition-all duration-300 border border-white/10"
        >
          เลือกแอปอื่น
        </a>
      </div>

      <div className="w-full glass-card rounded-3xl p-8 text-left">
        <h3 className="font-bold text-white mb-4 flex items-center gap-3 text-lg">
            <svg className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
            หมายเหตุ
        </h3>
        <p className="text-white/60 text-sm leading-relaxed font-light">
          หากกดปุ่มดาวน์โหลดแล้วไม่มีอะไรเกิดขึ้น ให้ลองรีเฟรชหน้าจอ หรือเปิดผ่าน <strong className="text-white font-bold">Safari</strong> บนอุปกรณ์ของคุณโดยตรง
        </p>
      </div>
    </div>
  );
};