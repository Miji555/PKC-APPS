
import React from 'react';

interface ContactInfoProps {
  igHandle: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ igHandle }) => {
  return (
    <div className="p-4 rounded-md border border-[#d0d7de] bg-[#f6f8fa] flex items-start space-x-3">
      <div className="mt-1">
        <svg className="w-5 h-5 text-[#0969da]" viewBox="0 0 16 16" fill="currentColor">
          <path d="M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM6.5 7.75A.75.75 0 017.25 7h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM8.25 10a.75.75 0 00-1.5 0v1.25a.75.75 0 001.5 0V10zM8 4a1 1 0 110 2 1 1 0 010-2z"></path>
        </svg>
      </div>
      <div>
        <p className="text-[#1f2328] font-medium">
          อยากได้แอพไหน ติดต่อ <a href={`https://instagram.com/${igHandle}`} target="_blank" rel="noopener noreferrer" className="text-[#0969da] hover:underline font-bold tracking-wide">IG: {igHandle}</a>
        </p>
      </div>
    </div>
  );
};
