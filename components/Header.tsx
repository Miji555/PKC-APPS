
import React from 'react';
import { CONTACT_IG } from '../constants.ts';

export const Header: React.FC = () => {
  return (
    <div className="mb-8 border-b border-[#d0d7de] pb-6">
      <h1 className="text-2xl font-semibold text-[#1f2328] mb-2">
        Download and Updates
      </h1>
      <p className="text-[#636c76]">
        Download and update เท่านั้นนะครับ อยากได้แอพไหนแจ้ง 
        <a 
          href={`https://instagram.com/${CONTACT_IG}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-1 text-[#0969da] font-medium hover:underline"
        >
          ig {CONTACT_IG}
        </a>
      </p>
    </div>
  );
};