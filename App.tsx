
import React, { useState, useEffect } from 'react';
import { CATEGORIES } from './constants.ts';
import { CategorySection } from './components/CategorySection.tsx';
import { Header } from './components/Header.tsx';
import { AppDetail } from './components/AppDetail.tsx';

const App: React.FC = () => {
  const [currentAppId, setCurrentAppId] = useState<string | null>(null);

  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      setCurrentAppId(params.get('appId'));
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleBack = () => {
    window.history.pushState({}, '', window.location.pathname);
    setCurrentAppId(null);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <Header />

        <main className="animate-in">
          {currentAppId ? (
            <AppDetail appId={currentAppId} onBack={handleBack} />
          ) : (
            <div className="space-y-6">
              {CATEGORIES.map((category) => (
                <CategorySection key={category.id} category={category} />
              ))}
            </div>
          )}
        </main>

        <footer className="mt-12 pt-8 border-t border-[#d0d7de] text-center text-[#636c76] text-xs">
          <p>© {new Date().getFullYear()} PKC APPS • ระบบดาวน์โหลดและอัปเดต</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
