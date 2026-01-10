import React, { useState, useEffect } from 'react';
import { CATEGORIES } from './constants';
import { CategorySection } from './components/CategorySection';
import { Header } from './components/Header';
import { DetailView } from './components/DetailView';
import { InstructionBanner } from './components/InstructionBanner';
import { MenuBar } from './components/MenuBar';

const App: React.FC = () => {
  // ใช้ URL Search Params เพื่อตรวจสอบว่าผู้ใช้เลือกแอปใดหรือไม่
  const [appId, setAppId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('appId');
    setAppId(id);
  }, []);

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
                <div className="text-center py-12">
                  <p className="text-blue-400 font-medium">ไม่พบรายการในหมวดหมู่นี้</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <DetailView appId={appId} />
        )}

        <footer className="mt-16 pt-8 border-t border-blue-100 text-center text-blue-400 text-xs font-medium">
          <p>© {new Date().getFullYear()} PKC APPS • ระบบดาวน์โหลดและอัปเดต</p>
        </footer>
      </div>
    </div>
  );
}

export default App;