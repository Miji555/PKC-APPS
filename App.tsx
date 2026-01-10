import React from 'react';
import { CATEGORIES } from './constants.ts';
import { CategorySection } from './components/CategorySection.tsx';
import { Header } from './components/Header.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-7xl animate-in">
        {/* Header Section */}
        <Header />

        {/* App Lists */}
        <div className="space-y-12">
          {CATEGORIES.map((category, index) => (
            <CategorySection 
              key={category.id} 
              title={category.title} 
              apps={category.apps}
              isFeatured={index === 0} 
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-300/50 text-center text-slate-500 text-[11px] font-medium tracking-wide uppercase">
          <p>© {new Date().getFullYear()} PKC APPS • ระบบดาวน์โหลดและอัปเดต</p>
        </footer>
      </div>
    </div>
  );
}

export default App;