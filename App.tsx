import React from 'react';
import { CATEGORIES } from './constants.ts';
import { CategorySection } from './components/CategorySection.tsx';
import { Header } from './components/Header.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Header Section */}
        <Header />

        {/* Warning Banner */}
        <div className="w-full bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <div className="text-yellow-600 flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-yellow-800 text-sm font-medium leading-relaxed">
              <p className="font-bold mb-1">คำเตือน (Warning)</p>
              <ul className="list-disc list-inside space-y-1">
                <li>ต้องเข้าสู่ระบบ Apple ID ก่อนเท่านั้น จึงจะสามารถดาวน์โหลดแอปพลิเคชันได้</li>
                <li>เมื่อดาวน์โหลดแอปพลิเคชันแล้วจะไม่สามารถลบแอปพลิเคชันได้</li>
              </ul>
            </div>
          </div>
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