
import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="mb-10 border-b border-[#d0d7de] pb-8 flex flex-col items-center text-center">
      <div className="mb-4 h-32 flex items-center justify-center">
        <img 
          src="logo.png" 
          alt="PKC APPS Logo" 
          className="max-h-full w-auto object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <h1 className="text-3xl font-bold text-[#1f2328] mb-2 tracking-tight">
        Download and Updates
      </h1>
      <p className="text-[#636c76] text-lg">
        Download and update เท่านั้น
      </p>
    </div>
  );
};
