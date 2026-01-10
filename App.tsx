import React, { useState, useEffect } from 'react';
import { CATEGORIES } from './constants';
import { CategorySection } from './components/CategorySection';
import { Header } from './components/Header';
import { DetailView } from './components/DetailView';
import { InstructionBanner } from './components/InstructionBanner';
import { MenuBar } from './components/MenuBar';

const App: React.FC = () => {
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
    <div className="min-h-screen py-8 px-4 sm:px-6 flex flex-col items-center relative z-10">
      <div className="w-full max-w-[680px]"> {/* iOS style width constraint */}
        
        {!appId ? (
          <>
            <Header />
            
            <MenuBar 
              categories={CATEGORIES} 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            
            <div className="space-y-8 animate-in" style={{ animationDelay: '0.1s' }}>
              {selectedCategory === 'all' && <InstructionBanner />}
              
              {displayedCategories.map((category, index) => (
                <div key={category.id} style={{ animationDelay: `${0.1 + (index * 0.1)}s` }} className="animate-in">
                  <CategorySection category={category} />
                </div>
              ))}
              
              {displayedCategories.length === 0 && (
                <div className="glass-card rounded-3xl p-12 text-center">
                  <p className="text-slate-400 font-medium">ไม่พบรายการในหมวดหมู่นี้</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <DetailView appId={appId} />
        )}

        <footer className="mt-20 pb-8 text-center">
          <p className="text-slate-400/80 text-[10px] font-semibold tracking-wider uppercase">
            © {new Date().getFullYear()} PKC APPS • ระบบดาวน์โหลดและอัปเดต
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;