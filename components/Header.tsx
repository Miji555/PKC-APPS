import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="mb-4 flex flex-col items-center text-center">
      <div className="mb-4 h-28 flex items-center justify-center">
        <img 
          src="logo.png" 
          alt="PKC APPS Logo" 
          className="max-h-full w-auto object-contain drop-shadow-md"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <h1 className="text-3xl font-bold text-blue-900 mb-2 tracking-tight">
        Download และ Updates
      </h1>
      <p className="text-blue-600 text-lg font-medium">
        ศูนย์รวมแอปพลิเคชันสำหรับคุณ
      </p>
    </div>
  );
};