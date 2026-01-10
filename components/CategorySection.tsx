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

  const getIconColor = (name: string) => {
    // สุ่มสีฟ้าหลายเฉดตามชื่อแอป
    const colors = [
      'bg-blue-500', 'bg-sky-500', 'bg-cyan-600', 'bg-indigo-500', 
      'bg-blue-600', 'bg-sky-600', 'bg-teal-500', 'bg-indigo-600'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="border border-blue-100 rounded-2xl overflow-hidden bg-white shadow-sm mb-6 hover:shadow-md transition-shadow duration-300">
      <div className="bg-gradient-to-r from-blue-50 to-white px-5 py-3 border-b border-blue-100 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="font-bold text-blue-900 text-lg tracking-tight">{category.title}</h2>
        </div>
        <span className="text-xs font-bold text-blue-500 bg-blue-100/50 px-2 py-1 rounded-lg">
          {category.apps.length} แอป
        </span>
      </div>
      
      <div className="divide-y divide-blue-50">
        {category.apps.map((app) => {
          const appleId = getAppleId(app.url);
          const href = appleId ? `?appId=${appleId}` : app.url;

          return (
            <div 
              key={app.id}
              className="px-4 py-4 hover:bg-blue-50/40 transition-colors flex items-center justify-between group cursor-pointer"
              onClick={() => window.location.href = href}
            >
              <div className="flex items-center space-x-4 overflow-hidden flex-1">
                <div className={`w-14 h-14 rounded-2xl flex-shrink-0 shadow-sm flex items-center justify-center ${getIconColor(app.name)}`}>
                  <span className="text-white text-2xl font-bold drop-shadow-sm select-none">
                    {getFirstLetter(app.name)}
                  </span>
                </div>
                <div className="flex flex-col truncate pr-2">
                  <span className="text-gray-800 font-bold group-hover:text-blue-700 transition-colors text-base truncate">
                    {app.name}
                  </span>
                  {app.subtitle && (
                    <span className="text-xs text-gray-500 truncate mt-0.5 group-hover:text-blue-500 transition-colors">
                      {app.subtitle}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="pl-2">
                <button 
                  className="text-xs font-bold text-blue-600 bg-white border border-blue-200 px-4 py-2 rounded-xl shadow-sm hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-200 whitespace-nowrap active:scale-95"
                >
                  Download
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};