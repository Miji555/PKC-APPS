import React, { useState, useEffect } from 'react';
import { CATEGORIES } from './constants.ts';
import { CategorySection } from './components/CategorySection.tsx';
import { Header } from './components/Header.tsx';

const DetailView: React.FC<{ appId: string }> = ({ appId }) => {
  const allApps = CATEGORIES.flatMap(c => c.apps);
  // Helper to extract Apple ID
  const getAppleId = (url: string) => {
    if (!url) return null;
    const match = url.match(/id(\d+)/);
    return match ? match[1] : null;
  };
  
  const app = allApps.find(a => getAppleId(a.url) === appId);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = window.location.pathname;
  };

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <p className="text-lg text-gray-600">ไม่พบแอปพลิเคชัน</p>
        <a href="/" onClick={handleBack} className="text-[#0969da] hover:underline font-medium">กลับสู่หน้าหลัก</a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-8 px-4 text-center animate-in fade-in duration-500">
      <img 
        src={app.icon} 
        className="w-24 h-24 rounded-[22px] mb-6 shadow-md border border-gray-100" 
        alt={app.name} 
        referrerPolicy="no-referrer"
      />
      
      <h1 className="text-2xl font-bold text-[#1f2328] mb-2">
        {app.name}
      </h1>
      
      <h2 className="text-xl font-semibold text-[#0969da] mb-6">
        Download และ Updates
      </h2>

      <div className="w-full max-w-md bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-left">
        <div className="flex gap-3">
          <div className="text-yellow-600 flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-yellow-800 text-sm font-medium leading-relaxed">
            ใช้ Safari เท่านั้น ถ้าแอพไม่ขึ้นให้ Download ลองเข้าออก Safari ใหม่ หรือ Restart iPad ของคุณ
          </p>
        </div>
      </div>
      
      <div className="w-full max-w-md bg-[#f6f8fa] border border-[#d0d7de] rounded-lg p-6 mb-8 text-left">
        <p className="text-[#1f2328] text-sm leading-relaxed mb-4 font-medium">
          คำแนะนำ (Instructions)
        </p>
        <ul className="text-[#636c76] text-sm space-y-2 list-disc list-inside">
          <li>หากเปิดใน <strong>Safari</strong> แบนเนอร์สำหรับดาวน์โหลดจะปรากฏที่ด้านบนสุดของหน้าจอ</li>
          <li>If opened in <strong>Safari</strong>, the download banner will appear at the very top of the screen.</li>
        </ul>
      </div>

      <a 
        href="/"
        onClick={handleBack}
        className="text-sm text-[#0969da] hover:underline flex items-center font-medium px-4 py-2 rounded-full hover:bg-blue-50 transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        กลับไปหน้ารวมแอป
      </a>
    </div>
  );
};

const App: React.FC = () => {
  const [appId, setAppId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAppId(params.get('appId'));
  }, []);

  const filteredCategories = CATEGORIES.map(category => ({
    ...category,
    apps: category.apps.filter(app => 
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (app.subtitle && app.subtitle.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(category => category.apps.length > 0);

  return (
    <div className="min-h-screen bg-white py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {!appId ? (
          <>
            <div className="w-full bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex gap-3">
                <div className="text-yellow-600 flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-yellow-800 text-sm font-medium leading-relaxed">
                  <p className="font-bold mb-1">การใช้งาน (Usage)</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>หากต้องการดาวน์โหลดแอปพลิเคชันที่ต้องชำระเงิน ต้องกดซื้อใน App store บน iPhone หรือ iPad ที่ใช้ Apple ID เดียวกับ iPad ของโรงเรียนก่อน จึงจะสามารถดาวน์โหลดแอปพลิเคชันได้</li>
                    <li>ต้องเข้าสู่ระบบ Apple ID ก่อนเท่านั้น จึงจะสามารถดาวน์โหลดแอปพลิเคชันได้</li>
                    <li>เมื่อดาวน์โหลดแอปพลิเคชันแล้วจะไม่สามารถลบแอปพลิเคชันได้</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <CategorySection key={category.id} category={category} />
                ))
              ) : (
                <div className="text-center py-12 border border-dashed border-[#d0d7de] rounded-md">
                  <svg className="w-12 h-12 text-[#636c76] mx-auto mb-3 opacity-50" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M10.68 11.74a6 6 0 1 1 1.06-1.06l3.91 3.91a.75.75 0 1 1-1.06 1.06l-3.91-3.91zM11 7a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
                  </svg>
                  <p className="text-[#636c76]">ไม่พบแอปที่คุณค้นหา</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <DetailView appId={appId} />
        )}

        <footer className="mt-12 pt-8 border-t border-[#d0d7de] text-center text-[#636c76] text-sm">
          <p>© {new Date().getFullYear()} PKC APPS • ระบบดาวน์โหลดและอัปเดตแอปพลิเคชัน</p>
        </footer>
      </div>
    </div>
  );
}

export default App;