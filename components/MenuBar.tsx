import React from 'react';
import { Category } from '../types';

interface MenuBarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="sticky top-4 z-50 mb-8 animate-in" style={{ animationDelay: '0.05s' }}>
      <div className="glass-panel rounded-full p-1.5 flex space-x-1 overflow-x-auto no-scrollbar shadow-xl shadow-blue-900/5 mx-auto max-w-full">
        <button
          onClick={() => onSelectCategory('all')}
          className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ease-out ${
            selectedCategory === 'all'
              ? 'bg-white shadow-md text-slate-800 scale-100'
              : 'text-slate-500 hover:bg-white/40 hover:text-slate-700'
          }`}
        >
          ทั้งหมด
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ease-out ${
              selectedCategory === category.id
                ? 'bg-white shadow-md text-slate-800 scale-100'
                : 'text-slate-500 hover:bg-white/40 hover:text-slate-700'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
};