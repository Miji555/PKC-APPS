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

  // Modern neon gradients for icons
  const getIconGradient = (name: string) => {
    const gradients = [
      'bg-gradient-to-br from-blue-400 to-blue-600',
      'bg-gradient-to-br from-purple-400 to-purple-600',
      'bg-gradient-to-br from-cyan-400 to-cyan-600',
      'bg-gradient-to-br from-pink-400 to-pink-600',
      'bg-gradient-to-br from-indigo-400 to-indigo-600'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return gradients[Math.abs(hash) % gradients.length];
  };

  return (
    <div className="glass-card rounded-[2rem] overflow-hidden mb-8 transition-transform duration-300">
      <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/5 backdrop-blur-xl">
        <h2 className="font-bold text-white text-xl tracking-wide">{category.title}</h2>
        <span className="text-xs font-bold text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
          {category.apps.length}
        </span>
      </div>
      
      <div className="divide-y divide-white/5">
        {category.apps.map((app) => {
          const appleId = getAppleId(app.url);
          const href = appleId ? `?appId=${appleId}` : app.url;

          return (
            <div 
              key={app.id}
              className="px-5 py-5 hover:bg-white/5 transition-all duration-300 flex items-center justify-between group cursor-pointer"
              onClick={() => window.location.href = href}
            >
              <div className="flex items-center space-x-5 overflow-hidden flex-1">
                <div className={`w-16 h-16 rounded-2xl flex-shrink-0 shadow-lg shadow-black/20 flex items-center justify-center ${getIconGradient(app.name)} ring-1 ring-white/20`}>
                  <span className="text-white text-2xl font-bold drop-shadow-md select-none">
                    {getFirstLetter(app.name)}
                  </span>
                </div>
                <div className="flex flex-col truncate pr-4">
                  <span className="text-white font-bold text-lg truncate group-hover:text-blue-300 transition-colors">
                    {app.name}
                  </span>
                  {app.subtitle && (
                    <span className="text-sm text-white/50 truncate mt-1 font-light">
                      {app.subtitle}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="pl-2">
                <button 
                  className="text-xs font-bold text-black bg-white/90 px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:bg-white hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 whitespace-nowrap active:scale-95 border border-white/50"
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