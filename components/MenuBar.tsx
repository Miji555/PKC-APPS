import React from 'react';
import { Category } from '../types';

interface MenuBarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="sticky top-0 z-40 bg-[#f0f9ff]/90 backdrop-blur-md py-3 -mx-4 px-4 border-b border-blue-100 mb-6 shadow-sm">
      <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-1 max-w-3xl mx-auto">
        <button
          onClick={() => onSelectCategory('all')}
          className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200 transform scale-105'
              : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300'
          }`}
        >
          ทั้งหมด
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200 transform scale-105'
                : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
};