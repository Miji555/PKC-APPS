
import React from 'react';
import { CATEGORIES, CONTACT_IG } from './constants.ts';
import { CategorySection } from './components/CategorySection.tsx';
import { Header } from './components/Header.tsx';
import { ContactInfo } from './components/ContactInfo.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Header Section */}
        <Header />

        {/* Contact Alert Box */}
        <div className="mb-6">
          <ContactInfo igHandle={CONTACT_IG} />
        </div>

        {/* App Lists */}
        <div className="space-y-6">
          {CATEGORIES.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-[#d0d7de] text-center text-[#636c76] text-sm">
          <p>© {new Date().getFullYear()} PKC APPS • ระบบดาวน์โหลดและอัปเดตอัตโนมัติ</p>
        </footer>
      </div>
    </div>
  );
}

export default App;