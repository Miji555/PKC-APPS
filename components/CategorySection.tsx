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

  // Soft pastel gradients for icons
  const getIconGradient = (name: string) => {
    const gradients = [
      'bg-gradient-to-br from-blue-400 to-indigo-500',
      'bg-gradient-to-br from-sky-400 to-blue-500',
      'bg-gradient-to-br from-violet-400 to-purple-500',
      'bg-gradient-to-br from-fuchsia-400 to-pink-500',
      'bg-gradient-to-br from-cyan-400 to-teal-500'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return gradients[Math.abs(hash) % gradients.length];
  };

  return (
    <div className="glass-card rounded-[2rem] overflow-hidden mb-8 transition-transform duration-300 edge-shine">
      <div className="px-6 py-4 border-b border-gray-100/50 flex items-center justify-between bg-white/40 backdrop-blur-xl">
        <h2 className="font-bold text-slate-800 text-xl tracking-wide">{category.title}</h2>
        <span className="text-xs font-bold text-slate-500 bg-white/50 px-3 py-1 rounded-full border border-white/60">
          {category.apps.length}
        </span>
      </div>
      
      <div className="divide-y divide-gray-100/50">
        {category.apps.map((app) => {
          const appleId = getAppleId(app.url);
          const href = appleId ? `?appId=${appleId}` : app.url;

          return (
            <div 
              key={app.id}
              className="px-5 py-5 hover:bg-white/40 transition-all duration-300 flex items-center justify-between group cursor-pointer"
              onClick={() => window.location.href = href}
            >
              <div className="flex items-center space-x-5 overflow-hidden flex-1">
                <div className={`w-16 h-16 rounded-2xl flex-shrink-0 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)] flex items-center justify-center ${getIconGradient(app.name)} ring-1 ring-black/5`}>
                  <span className="text-white text-2xl font-bold drop-shadow-md select-none">
                    {getFirstLetter(app.name)}
                  </span>
                </div>
                <div className="flex flex-col truncate pr-4">
                  <span className="text-slate-900 font-bold text-lg truncate group-hover:text-blue-600 transition-colors">
                    {app.name}
                  </span>
                  {app.subtitle && (
                    <span className="text-sm text-slate-500 truncate mt-1 font-normal">
                      {app.subtitle}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="pl-2">
                <button 
                  className="text-xs font-bold text-blue-600 bg-blue-50 px-6 py-2 rounded-full hover:bg-blue-100 transition-all duration-300 whitespace-nowrap active:scale-95 uppercase tracking-wide"
                >
                  GET
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};