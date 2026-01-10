import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-start mb-6 px-2 animate-in">
      <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-800 to-slate-500">
        Download<br/>& Updates
      </h1>
      <p className="mt-2 text-slate-500 font-medium text-sm">
        ศูนย์รวมแอปพลิเคชันสำหรับคุณ
      </p>
    </div>
  );
};