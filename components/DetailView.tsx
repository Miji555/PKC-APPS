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
        'bg-gradient-to-br from-blue-500 to-indigo-600',
        'bg-gradient-to-br from-cyan-500 to-blue-600',
        'bg-gradient-to-br from-violet-500 to-fuchsia-600',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return gradients[Math.abs(hash) % gradients.length];
  };

  if (!app) {
    return (
      <div className="glass-card rounded-3xl p-10 text-center animate-in">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </div>
        <p className="text-slate-500 mb-6 font-medium">ไม่พบแอปที่คุณต้องการ</p>
        <a href="/" className="inline-block px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all hover:scale-105 shadow-lg shadow-slate-900/20">
            กลับหน้าหลัก
        </a>
      </div>
    );
  }

  return (
    <div className="w-full animate-in">
      {/* Navigation */}
      <div className="mb-6">
        <a href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors font-semibold text-sm bg-white/40 px-4 py-2 rounded-full backdrop-blur-md">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            ย้อนกลับ
        </a>
      </div>

      {/* Main Glass Card */}
      <div className="glass-card rounded-[40px] p-8 sm:p-10 relative overflow-hidden border-white/60">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
            {/* App Icon */}
            <div className={`w-40 h-40 rounded-[32px] mb-8 shadow-2xl shadow-indigo-500/20 flex items-center justify-center ${getIconGradient(app.name)} ring-4 ring-white/50`}>
                <span className="text-white text-7xl font-bold select-none">{app.name.charAt(0).toUpperCase()}</span>
            </div>
            
            {/* Title & Subtitle */}
            <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-3 leading-tight tracking-tight">{app.name}</h1>
            <p className="text-slate-500 text-lg font-medium mb-8">{app.subtitle || 'Application'}</p>
            
            {/* Status Pill */}
            <div className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-10 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                พร้อมดาวน์โหลด
            </div>

            {/* Actions */}
            <div className="w-full space-y-4 mb-10 max-w-sm">
                <a 
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 rounded-[20px] shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    ดาวน์โหลดเลย
                </a>
            </div>
            
            {/* Note */}
            <div className="w-full bg-slate-50/50 rounded-2xl p-5 text-left border border-slate-100">
                <h3 className="font-bold text-slate-700 mb-2 flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                    หมายเหตุ
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                หากกดปุ่มดาวน์โหลดแล้วไม่มีอะไรเกิดขึ้น ให้ลองรีเฟรชหน้าจอ หรือเปิดผ่าน <strong>Safari</strong> บนอุปกรณ์ของคุณโดยตรง
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};