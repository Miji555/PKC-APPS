import React, { useRef, useState, useEffect } from 'react';
import { Category } from '../types';

interface MenuBarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const allItems = [{ id: 'all', title: 'วันนี้' }, ...categories];

  useEffect(() => {
    const index = allItems.findIndex(c => c.id === selectedCategory);
    setActiveIndex(index >= 0 ? index : 0);
  }, [selectedCategory, categories]);

  useEffect(() => {
    // คำนวณตำแหน่งของ Pill background
    if (containerRef.current) {
      const activeBtn = containerRef.current.children[activeIndex] as HTMLElement;
      if (activeBtn) {
        // เพิ่ม padding เล็กน้อยเพื่อให้ pill ดูลอยตัว
        setPillStyle({
          left: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
          opacity: 1
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="sticky top-4 z-40 mb-10 flex justify-center px-4">
      {/* ใช้ liquid-glass class แทน glass-panel */}
      <div className="liquid-glass rounded-full p-1.5 backdrop-blur-2xl border border-white/40 max-w-full overflow-hidden transition-all duration-500">
        <div 
          className="flex relative items-center overflow-x-auto no-scrollbar"
          ref={containerRef}
        >
          {/* Liquid Pill Background */}
          <div 
            className="absolute top-0 bottom-0 my-auto h-full rounded-full liquid-pill transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ 
              left: `${pillStyle.left}px`, 
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity,
            }}
          />

          {allItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full text-[15px] font-bold transition-all duration-300 relative z-10 select-none whitespace-nowrap ${
                selectedCategory === item.id
                  ? 'text-slate-900 scale-105'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};