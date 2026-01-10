
import React from 'react';
import { Category } from '../types.ts';

interface CategorySectionProps {
  category: Category;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  if (category.apps.length === 0) return null;

  // Helper to extract Apple ID
  const getAppleId = (url: string) => {
    if (!url) return null;
    const match = url.match(/id(\d+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="border border-[#d0d7de] rounded-md overflow-hidden">
      {/* Category Header Bar */}
      <div className="bg-[#f6f8fa] px-4 py-3 border-b border-[#d0d7de] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-[#636c76]" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.25z"></path>
          </svg>
          <span className="font-semibold text-[#1f2328] text-sm">{category.title}</span>
        </div>
        <span className="text-xs text-[#636c76]">{category.apps.length} items</span>
      </div>
      
      {/* App Rows */}
      <div className="divide-y divide-[#d0d7de]">
        {category.apps.map((app) => {
          const appleId = getAppleId(app.url);
          const href = appleId ? `?appId=${appleId}` : app.url;

          return (
            <div 
              key={app.id}
              className="px-4 py-3 hover:bg-[#f6f8fa] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3 overflow-hidden">
                {app.icon ? (
                  <img 
                    src={app.icon} 
                    alt="" 
                    className="w-5 h-5 rounded-sm flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <svg className="w-4 h-4 text-[#636c76] flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l3.25 3.25c.33.328.513.773.513 1.237v9.25A1.75 1.75 0 0113.586 16H3.75A1.75 1.75 0 012 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.836a.25.25 0 00.25-.25V5.25H10.25a.75.75 0 01-.75-.75V1.5H3.75zM11 4.25h2.336L11 1.914v2.336z"></path>
                  </svg>
                )}
                <div className="flex flex-col truncate">
                  <a 
                    href={href}
                    className="text-[#0969da] font-medium hover:underline text-sm truncate"
                  >
                    {app.name}
                  </a>
                  {app.subtitle && (
                    <span className="text-[11px] text-[#636c76] truncate">
                      {app.subtitle}
                    </span>
                  )}
                </div>
              </div>
              
              <a 
                href={href}
                className="text-xs font-medium text-[#1f2328] bg-white border border-[#d0d7de] px-2 py-1 rounded shadow-sm hover:bg-[#f3f4f6] transition-colors whitespace-nowrap opacity-0 group-hover:opacity-100 focus:opacity-100"
              >
                Download
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
