import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="mb-8 flex flex-col items-center text-center pt-8 relative">
      <div className="mb-6 h-28 w-28 glass-card rounded-[2rem] flex items-center justify-center relative group transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
         <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         <svg className="w-14 h-14 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
         </svg>
      </div>
      <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white/80 mb-3 tracking-tight text-glow">
        Download & Updates
      </h1>
      <p className="text-blue-200/80 font-medium text-lg tracking-wide glass-pill px-6 py-2 rounded-full border-none">
        ศูนย์รวมแอปพลิเคชันสำหรับคุณ
      </p>
    </div>
  );
};