import React from 'react';
import { Category } from '../types';

interface MenuBarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="sticky top-4 z-40 mb-8">
      <div className="glass-pill rounded-full p-1.5 mx-auto max-w-fit shadow-2xl backdrop-blur-xl">
        <div className="flex space-x-1 overflow-x-auto no-scrollbar">
          <button
            onClick={() => onSelectCategory('all')}
            className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-100'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            ทั้งหมด
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                selectedCategory === category.id
                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-100'
                : 'text-white/60 hover:text-white hover:bg-white/10'
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