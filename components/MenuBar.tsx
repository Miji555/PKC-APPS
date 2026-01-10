import React from 'react';
import { Category } from '../types';

interface MenuBarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const allItems = [{ id: 'all', title: 'วันนี้' }, ...categories];

  return (
    <div className="sticky top-4 z-40 mb-10 flex justify-center px-4">
      {/* ใช้ CSS ง่ายๆ ที่ไม่มีวันพัง */}
      <div className="glass-panel rounded-full p-1.5 flex gap-1 max-w-full overflow-x-auto no-scrollbar shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
        {allItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectCategory(item.id)}
            className={`flex-shrink-0 px-6 py-2.5 rounded-full text-[15px] font-bold transition-all duration-300 whitespace-nowrap select-none ${
              selectedCategory === item.id
                ? 'bg-white text-slate-900 shadow-sm scale-105'
                : 'text-slate-500 hover:text-slate-700 hover:bg-white/40'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};