import React, { useEffect, useState } from 'react';
import { CATEGORIES } from './constants.ts';
import { CategorySection } from './components/CategorySection.tsx';
import { Header } from './components/Header.tsx';
import { InstructionBanner } from './components/InstructionBanner.tsx';
import { DetailView } from './components/DetailView.tsx';

const App: React.FC = () => {
  const [appId, setAppId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('appId');
    if (id) {
      setAppId(id);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <Header />

        {!appId ? (
          <>
            {/* คำแนะนำเรื่อง Apple ID */}
            <InstructionBanner />

            {/* รายการแอป */}
            <div className="space-y-6">
              {CATEGORIES.map((category) => (
                <CategorySection key={category.id} category={category} />
              ))}
            </div>
          </>
        ) : (
          <DetailView appId={appId} />
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#d0d7de] text-center text-[#636c76] text-sm">
          <p>© {new Date().getFullYear()} PKC APPS • ระบบดาวน์โหลดและอัปเดต</p>
        </footer>
      </div>
    </div>
  );
}

export default App;