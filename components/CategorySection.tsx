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

  // Vivid gradient backgrounds for icons
  const getIconGradient = (name: string) => {
    const gradients = [
      'bg-gradient-to-br from-blue-400 to-indigo-500',
      'bg-gradient-to-br from-cyan-400 to-blue-500',
      'bg-gradient-to-br from-violet-400 to-fuchsia-500',
      'bg-gradient-to-br from-emerald-400 to-teal-500',
      'bg-gradient-to-br from-rose-400 to-pink-500',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return gradients[Math.abs(hash) % gradients.length];
  };

  return (
    <div className="mb-8">
      <div className="flex items-baseline justify-between px-2 mb-4">
        <h2 className="text-xl font-bold text-slate-800">{category.title}</h2>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{category.apps.length} APPS</span>
      </div>
      
      <div className="glass-card rounded-[32px] overflow-hidden p-2">
        {category.apps.map((app, index) => {
          const appleId = getAppleId(app.url);
          const href = appleId ? `?appId=${appleId}` : app.url;
          const isLast = index === category.apps.length - 1;

          return (
            <div 
              key={app.id}
              className={`relative p-3 transition-all duration-300 hover:bg-white/50 rounded-[24px] group cursor-pointer flex items-center gap-4 ${!isLast ? 'mb-1' : ''}`}
              onClick={() => window.location.href = href}
            >
              {/* App Icon */}
              <div className={`w-16 h-16 rounded-[18px] flex-shrink-0 shadow-lg shadow-indigo-500/10 flex items-center justify-center ${getIconGradient(app.name)} group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-white text-2xl font-bold">{app.name.charAt(0).toUpperCase()}</span>
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0 pr-2">
                <h3 className="text-slate-800 font-bold text-[17px] truncate leading-snug group-hover:text-blue-600 transition-colors">
                  {app.name}
                </h3>
                <p className="text-slate-500 text-[13px] truncate font-medium leading-tight mt-0.5">
                  {app.subtitle}
                </p>
              </div>

              {/* Button */}
              <div className="flex-shrink-0">
                <button className="bg-slate-100 text-blue-600 font-bold text-xs py-2 px-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
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