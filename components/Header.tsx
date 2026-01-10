import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-start mb-6 px-2 animate-in">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 shadow-lg shadow-blue-300/30 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
             <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
        </div>
        <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">App Store</span>
      </div>
      <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-800 to-slate-500">
        Download<br/>& Updates
      </h1>
      <p className="mt-2 text-slate-500 font-medium text-sm">
        ศูนย์รวมแอปพลิเคชันสำหรับคุณ
      </p>
    </div>
  );
};