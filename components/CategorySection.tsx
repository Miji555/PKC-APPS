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
    <div className="border border-[#d0d7de] rounded-xl overflow-hidden shadow-sm bg-white">
      {/* Category Header Bar */}
      <div className="bg-[#f6f8fa] px-5 py-4 border-b border-[#d0d7de] flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <svg className="w-5 h-5 text-[#636c76]" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.25z"></path>
          </svg>
          <span className="font-bold text-[#1f2328] text-base">{category.title}</span>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 bg-[#eff1f3] text-[#636c76] rounded-full">
          {category.apps.length} แอป
        </span>
      </div>
      
      {/* App Rows */}
      <div className="divide-y divide-[#d0d7de]">
        {category.apps.map((app) => {
          const appleId = getAppleId(app.url);
          const href = appleId ? `?appId=${appleId}` : app.url;

          return (
            <div 
              key={app.id}
              className="px-5 py-4 hover:bg-[#f6f8fa] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center space-x-4 overflow-hidden">
                <div className="relative flex-shrink-0">
                  {app.icon ? (
                    <img 
                      src={app.icon} 
                      alt="" 
                      className="w-12 h-12 rounded-xl border border-gray-100 shadow-sm object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
                      <svg className="w-6 h-6 text-[#636c76]" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l3.25 3.25c.33.328.513.773.513 1.237v9.25A1.75 1.75 0 0113.586 16H3.75A1.75 1.75 0 012 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.836a.25.25 0 00.25-.25V5.25H10.25a.75.75 0 01-.75-.75V1.5H3.75zM11 4.25h2.336L11 1.914v2.336z"></path>
                      </svg>
                    </div>
                  )}
                  {app.isNew && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                  )}
                </div>
                
                <div className="flex flex-col truncate">
                  <div className="flex items-center space-x-2">
                    <a 
                      href={href}
                      className="text-[#1f2328] font-bold hover:text-[#0969da] text-[15px] truncate"
                    >
                      {app.name}
                    </a>
                    {app.isNew && (
                      <span className="text-[9px] font-bold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded tracking-tight">NEW</span>
                    )}
                  </div>
                  {app.subtitle && (
                    <span className="text-[12px] text-[#636c76] truncate font-medium">
                      {app.subtitle}
                    </span>
                  )}
                </div>
              </div>
              
              <a 
                href={href}
                className="text-xs font-bold text-[#0969da] bg-[#f0f6ff] border border-transparent hover:bg-[#0969da] hover:text-white px-5 py-2 rounded-full transition-all active:scale-95 whitespace-nowrap shadow-sm"
              >
                GET
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};