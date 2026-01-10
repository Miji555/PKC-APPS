
import React from 'react';

interface ContactInfoProps {
  igHandle: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ igHandle }) => {
  return (
    <div className="p-4 rounded-xl border border-[#d0d7de] bg-[#f6f8fa] flex items-center justify-between group hover:border-[#0969da] transition-colors">
      <div className="flex items-center space-x-3">
        <div className="bg-[#0969da] p-2 rounded-lg">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </div>
        <div>
          <p className="text-[#1f2328] font-semibold text-sm">
            ต้องการแอปเพิ่มเติม?
          </p>
          <p className="text-[#636c76] text-xs">
            ส่งข้อความขอแอปที่คุณต้องการได้ทันที
          </p>
        </div>
      </div>
      <a 
        href={`https://instagram.com/${igHandle}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center space-x-1 bg-white border border-[#d0d7de] hover:border-[#0969da] hover:text-[#0969da] px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-all active:scale-95"
      >
        <span>IG: {igHandle}</span>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </a>
    </div>
  );
};
