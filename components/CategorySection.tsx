import React, { useState } from 'react';
import { AppItem } from '../types.ts';

interface CategorySectionProps {
  title: string;
  apps: AppItem[];
  isFeatured?: boolean;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ title, apps, isFeatured = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (apps.length === 0) return null;

  const getAppleId = (url: string) => {
    if (!url) return null;
    const match = url.match(/id(\d+)/);
    return match ? match[1] : null;
  };

  const getFirstLetter = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const getIconGradient = (name: string) => {
    const gradients = [
      'bg-gradient-to-br from-blue-400 to-indigo-500',
      'bg-gradient-to-br from-sky-400 to-blue-500',
      'bg-gradient-to-br from-violet-400 to-purple-500',
      'bg-gradient-to-br from-fuchsia-400 to-pink-500',
      'bg-gradient-to-br from-cyan-400 to-teal-500',
      'bg-gradient-to-br from-rose-400 to-orange-500',
      'bg-gradient-to-br from-emerald-400 to-teal-500'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return gradients[Math.abs(hash) % gradients.length];
  };

  // Logic: ถ้าไม่ได้กดดูทั้งหมด ให้โชว์แค่ 6 แอพ
  const displayApps = isExpanded ? apps : apps.slice(0, 6);
  const hasMore = apps.length > 6;

  return (
    <div className="mb-10 animate-in">
      <div className="px-2 mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
          {title}
          {!isExpanded && hasMore && (
             <span className="text-xs font-bold text-slate-400 bg-slate-200/50 px-2 py-0.5 rounded-full">
               Top 6
             </span>
          )}
        </h2>
        {hasMore && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 text-base font-semibold hover:text-blue-600 transition-colors"
          >
            {isExpanded ? 'ย่อลง' : 'ดูทั้งหมด'}
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayApps.map((app, index) => {
          const appleId = getAppleId(app.url);
          const href = appleId ? `?appId=${appleId}` : app.url;

          return (
            <div 
              key={app.id}
              className="glass-card rounded-[1.5rem] p-4 flex items-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-lg ring-1 ring-white/50"
              onClick={() => window.location.href = href}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-20 h-20 rounded-[1.2rem] flex-shrink-0 shadow-md flex items-center justify-center ${getIconGradient(app.name)} ring-1 ring-black/5 group-hover:shadow-xl transition-all duration-300`}>
                <span className="text-white text-3xl font-bold drop-shadow-sm select-none">
                  {getFirstLetter(app.name)}
                </span>
              </div>
              
              <div className="flex-1 min-w-0 flex flex-col justify-center h-full py-1">
                <h3 className="text-slate-900 font-bold text-[17px] leading-snug truncate pr-1 group-hover:text-blue-600 transition-colors">
                  {app.name}
                </h3>
                <p className="text-slate-500 text-[13px] truncate mt-0.5 font-medium">
                  {app.subtitle || 'Application'}
                </p>
                <div className="mt-2.5">
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider group-hover:bg-blue-100 transition-colors">
                    Get
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {hasMore && !isExpanded && (
         <div className="mt-4 text-center md:hidden">
            <button 
              onClick={() => setIsExpanded(true)}
              className="w-full py-3 rounded-xl bg-white/50 text-blue-500 font-semibold border border-white/60 shadow-sm"
            >
              ดูแอพที่เหลืออีก {apps.length - 6} รายการ
            </button>
         </div>
      )}
    </div>
  );
};