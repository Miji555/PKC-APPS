import React, { useState } from 'react';
import { CATEGORIES } from './constants';
import { CategorySection } from './components/CategorySection';
import { Header } from './components/Header';
import { DetailView } from './components/DetailView';
import { InstructionBanner } from './components/InstructionBanner';
import { MenuBar } from './components/MenuBar';

const App: React.FC = () => {
  // อ่านค่าจาก URL ทันทีที่เริ่มทำงาน
  const [appId] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('appId');
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const displayedCategories = selectedCategory === 'all' 
    ? CATEGORIES 
    : CATEGORIES.filter(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f0f9ff] py-6 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <Header />

        {!appId ? (
          <>
            <MenuBar 
              categories={CATEGORIES} 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            
            <div className="space-y-6 animate-in">
              {selectedCategory === 'all' && <InstructionBanner />}
              
              {displayedCategories.map((category) => (
                <CategorySection key={category.id} category={category} />
              ))}
              
              {displayedCategories.length === 0 && (
                <div className="text-center py-10 text-gray-500">
                  ไม่พบรายการในหมวดหมู่นี้
                </div>
              )}
            </div>
          </>
        ) : (
          <DetailView appId={appId} />
        )}

        <footer className="mt-16 pt-8 border-t border-blue-100 text-center text-blue-400 text-sm">
          <p>© {new Date().getFullYear()} PKC APPS • ระบบดาวน์โหลดและอัปเดต</p>
        </footer>
      </div>
    </div>
  );
}

export default App;