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
    <div className="min-h-screen py-6 px-4 flex flex-col items-center relative overflow-hidden">
      {/* Abstract Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="w-full max-w-3xl z-10">
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
                <div className="text-center py-12 glass rounded-3xl">
                  <p className="text-white/50 font-medium">ไม่พบรายการในหมวดหมู่นี้</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <DetailView appId={appId} />
        )}

        <footer className="mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-xs font-medium">
          <p>© {new Date().getFullYear()} PKC APPS • Liquid Glass OS v26</p>
        </footer>
      </div>
    </div>
  );
}

export default App;