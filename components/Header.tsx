import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="mb-2 flex flex-col items-center text-center pt-4">
      <div className="mb-4 h-24 w-24 bg-white rounded-3xl shadow-lg shadow-blue-100 flex items-center justify-center border border-blue-50">
         <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
         </svg>
      </div>
      <h1 className="text-3xl font-black text-blue-900 mb-2 tracking-tight">
        Download & Updates
      </h1>
    </div>
  );
};