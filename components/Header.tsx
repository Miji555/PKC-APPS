import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="mb-8 border-b border-[#d0d7de] pb-8 flex flex-col items-center text-center">
      <img 
        src="logo.png" 
        alt="PKC APPS Logo" 
        className="h-28 w-auto mb-4 object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <h1 className="text-2xl font-bold text-[#1f2328] mb-1">
        Download and Updates
      </h1>
      <p className="text-[#636c76]">
        Download and update เท่านั้น
      </p>
    </div>
  );
};