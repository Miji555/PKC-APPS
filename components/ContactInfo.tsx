
import React from 'react';

interface ContactInfoProps {
  igHandle: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ igHandle }) => {
  return (
    <div className="p-5 rounded-2xl border border-blue-100 bg-blue-50/50 flex items-center space-x-4 shadow-sm">
      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-500 p-[2px] flex-shrink-0">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-sm font-medium">อยากได้แอปเพิ่มเติม หรือแจ้งปัญหา</p>
        <p className="text-[#1f2328] font-bold">
          ติดต่อ <a href={`https://instagram.com/${igHandle}`} target="_blank" rel="noopener noreferrer" className="text-[#0969da] hover:underline">IG: {igHandle}</a>
        </p>
      </div>
      <a 
        href={`https://instagram.com/${igHandle}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white border border-[#d0d7de] px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors shadow-sm"
      >
        ติดตาม
      </a>
    </div>
  );
};
