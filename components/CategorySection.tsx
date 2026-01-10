import React from 'react';
import { Category } from '../types';

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

  // ปรับสีพื้นหลังไอคอนให้เป็นโทนฟ้าพาสเทลและสีสดใส
  const getBgColor = (name: string) => {
    const colors = [
      'bg-blue-500', 'bg-sky-500', 'bg-cyan-500', 'bg-indigo-500', 
      'bg-blue-400', 'bg-sky-400', 'bg-teal-400', 'bg-indigo-400'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="border border-blue-100 rounded-2xl overflow-hidden bg-white shadow-sm mb-6 hover:shadow-md transition-shadow duration-300">
      <div className="bg-blue-50/50 px-4 py-3 border-b border-blue-100 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-blue-500" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.25z"></path>
          </svg>
          <span className="font-bold text-blue-900 text-base">{category.title}</span>
        </div>
        <span className="text-xs font-medium text-blue-400 bg-blue-50 px-2 py-1 rounded-md">{category.apps.length} items</span>
      </div>
      
      <div className="divide-y divide-blue-50">
        {category.apps.map((app) => {
          const appleId = getAppleId(app.url);
          const href = appleId ? `?appId=${appleId}` : app.url;

          return (
            <div 
              key={app.id}
              className="px-4 py-4 hover:bg-blue-50/30 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center space-x-4 overflow-hidden">
                <div className={`w-14 h-14 rounded-2xl flex-shrink-0 shadow-sm border border-blue-100/50 flex items-center justify-center ${getBgColor(app.name)}`}>
                  <span className="text-white text-2xl font-bold drop-shadow-sm">
                    {getFirstLetter(app.name)}
                  </span>
                </div>
                <div className="flex flex-col truncate pr-2">
                  <a 
                    href={href}
                    className="text-gray-800 font-bold hover:text-blue-600 transition-colors text-base truncate"
                  >
                    {app.name}
                  </a>
                  {app.subtitle && (
                    <span className="text-xs text-gray-500 truncate mt-0.5 group-hover:text-blue-400 transition-colors">
                      {app.subtitle}
                    </span>
                  )}
                </div>
              </div>
              
              <a 
                href={href}
                className="text-xs font-bold text-blue-600 bg-white border border-blue-200 px-4 py-2 rounded-xl shadow-sm hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-200 whitespace-nowrap active:scale-95"
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