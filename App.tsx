
import React from 'react';
import { CATEGORIES, CONTACT_IG } from './constants.ts';
import { CategorySection } from './components/CategorySection.tsx';
import { Header } from './components/Header.tsx';
import { ContactInfo } from './components/ContactInfo.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Header Section */}
        <Header />

        {/* Warning Banner - High Emphasis */}
        <div className="w-full bg-red-50 border-2 border-red-100 rounded-xl p-5 mb-6 shadow-sm">
          <div className="flex gap-4">
            <div className="text-red-500 flex-shrink-0 mt-1">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <div className="text-red-900 leading-relaxed">
              <p className="font-bold text-lg mb-2 flex items-center">
                คำเตือนสำคัญ (Important Warning)
              </p>
              <ul className="space-y-2 text-[15px] font-semibold">
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">•</span>
                  ต้องเข้าสู่ระบบ Apple ID ก่อนเท่านั้น จึงจะสามารถดาวน์โหลดแอปพลิเคชันได้
                </li>
                <li className="flex items-start text-red-700">
                  <span className="mr-2 text-red-600">•</span>
                  เมื่อดาวน์โหลดแอปพลิเคชันแล้วจะไม่สามารถลบแอปพลิเคชันได้
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact for Requests */}
        <div className="mb-8">
          <ContactInfo igHandle={CONTACT_IG} />
        </div>

        {/* App Lists */}
        <div className="space-y-6">
          {CATEGORIES.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#d0d7de] text-center text-[#636c76] text-sm pb-10">
          <p className="font-medium">© {new Date().getFullYear()} PKC APPS</p>
          <p className="mt-1">ระบบดาวน์โหลดและอัปเดตแอปพลิเคชันสำหรับ iPad</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
