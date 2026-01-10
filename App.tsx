import React, { useState, useEffect, useMemo } from 'react';
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

  const displayedContent = useMemo(() => {
    if (selectedCategory === 'all') {
      return CATEGORIES;
    } else {
      return CATEGORIES.filter(c => c.id === selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen py-6 px-4 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <Header />

        {!appId ? (
          <>
            <MenuBar 
              categories={CATEGORIES} 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            
            <div className="space-y-8 animate-in pb-20">
              {selectedCategory === 'all' && <InstructionBanner />}
              
              {displayedContent.map((section) => (
                <CategorySection 
                  key={section.id} 
                  title={section.title}
                  apps={section.apps}
                  isFeatured={selectedCategory === 'all'}
                />
              ))}
              
              {displayedContent.length === 0 && (
                <div className="text-center py-24 glass-card rounded-3xl edge-shine mx-auto max-w-2xl">
                  <div className="mb-4 text-6xl">🤔</div>
                  <p className="text-slate-500 font-medium text-lg">ไม่พบรายการในหมวดหมู่นี้</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <DetailView appId={appId} />
        )}

        <footer className="mt-12 pt-8 border-t border-slate-200/60 text-center text-slate-400 text-xs font-medium pb-8">
          <p>© {new Date().getFullYear()} PKC APPS • Liquid Glass OS v26 White</p>
        </footer>
      </div>
    </div>
  );
}

export default App;