import React from 'react';

export const Header: React.FC = () => {
  const today = new Date().toLocaleDateString('th-TH', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="mb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 px-2">
      <div className="flex flex-col">
        <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">
          {today}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight drop-shadow-sm">
          Updates
        </h1>
      </div>
      
      <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
          P
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-800">PKC APPS</span>
          <span className="text-[10px] text-slate-500">Available Now</span>
        </div>
      </div>
    </div>
  );
};