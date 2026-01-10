import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="mb-8 flex flex-col items-center text-center pt-8 relative">
      <div className="mb-6 h-28 w-28 glass-card rounded-[2.5rem] flex items-center justify-center relative group transition-all duration-500 hover:scale-105 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] edge-shine">
         <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-[2.5rem] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
         <svg className="w-14 h-14 text-blue-600 drop-shadow-sm relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
         </svg>
      </div>
      <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">
        Download & Updates
      </h1>
      <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/40 border border-white/50 backdrop-blur-md">
        <p className="text-slate-500 font-medium text-sm">
          ศูนย์รวมแอปพลิเคชันสำหรับคุณ
        </p>
      </div>
    </div>
  );
};