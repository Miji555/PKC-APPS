import React from 'react';
import { Category } from '../types';

interface MenuBarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="sticky top-4 z-40 mb-8 flex justify-center">
      <div className="glass-panel rounded-full p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl border border-white/60">
        <div className="flex space-x-1 overflow-x-auto no-scrollbar relative">
          <button
            onClick={() => onSelectCategory('all')}
            className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative z-10 ${
              selectedCategory === 'all'
                ? 'text-black bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-black/5'
                : 'text-gray-500 hover:text-black hover:bg-white/40'
            }`}
          >
            ทั้งหมด
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative z-10 ${
                selectedCategory === category.id
                ? 'text-black bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-black/5'
                : 'text-gray-500 hover:text-black hover:bg-white/40'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};