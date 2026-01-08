
import React from 'react';
import { Category } from '../types.ts';

interface CategorySectionProps {
  category: Category;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  if (category.apps.length === 0) return null;

  const getAppleId = (url: string) => {
    if (!url) return null;
    const match = url.match(/id(\d+)/);
    return match ? match[1] : null;
  };

  const getFirstLetter = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const getBgColor = (name: string) => {
    const colors = [
      'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
      'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500',
      'bg-teal-500', 'bg-cyan-500'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="border border-[#d0d7de] rounded-xl overflow-hidden bg-white shadow-sm mb-6">
      <div className="bg-[#f6f8fa] px-4 py-3 border-b border-[#d0d7de] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-[#636c76]" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.25z"></path>
          </svg>
          <span className="font-semibold text-[#1f2328] text-sm">{category.title}</span>
        </div>
        <span className="text-xs text-[#636c76]">{category.apps.length} items</span>
      </div>
      
      <div className="divide-y divide-[#d0d7de]">
        {category.apps.map((app) => {
          const appleId = getAppleId(app.url);
          const href = appleId ? `?appId=${appleId}` : app.url;

          return (
            <div 
              key={app.id}
              className="px-4 py-4 hover:bg-[#f6f8fa] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center space-x-4 overflow-hidden">
                <div className={`w-14 h-14 rounded-[12px] flex-shrink-0 shadow-sm border border-black/5 flex items-center justify-center ${getBgColor(app.name)}`}>
                  <span className="text-white text-2xl font-bold">
                    {getFirstLetter(app.name)}
                  </span>
                </div>
                <div className="flex flex-col truncate">
                  <a 
                    href={href}
                    className="text-[#0969da] font-semibold hover:underline text-base truncate"
                  >
                    {app.name}
                  </a>
                  {app.subtitle && (
                    <span className="text-xs text-[#636c76] truncate mt-0.5">
                      {app.subtitle}
                    </span>
                  )}
                </div>
              </div>
              
              <a 
                href={href}
                className="text-xs font-bold text-[#1f2328] bg-white border border-[#d0d7de] px-4 py-2 rounded-lg shadow-sm hover:bg-[#f3f4f6] transition-colors whitespace-nowrap"
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
