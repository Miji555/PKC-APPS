import React from 'react';
import { CATEGORIES } from '../constants.ts';

interface DetailViewProps {
  appId: string | null;
}

export const DetailView: React.FC<DetailViewProps> = ({ appId }) => {
  if (!appId) return null;

  const allApps = CATEGORIES.flatMap(c => c.apps);
  const getAppleIdFromUrl = (url: string) => {
    const match = url.match(/id(\d+)/);
    return match ? match[1] : null;
  };
  const app = allApps.find(a => getAppleIdFromUrl(a.url) === appId);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', window.location.pathname);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <p className="text-lg text-gray-600">App not found</p>
        <a href="/" onClick={handleBack} className="text-[#0969da] hover:underline font-medium">Back to Home</a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-8 px-4 text-center">
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
        Download & updates
      </h2>

      {/* Warning Box */}
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
          <li>
            หากเปิดใน <strong>Safari</strong> แบนเนอร์สำหรับดาวน์โหลดจะปรากฏที่ด้านบนสุดของหน้าจอ
          </li>
          <li>
            If opened in <strong>Safari</strong>, the download banner will appear at the very top of the screen.
          </li>
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
        Back to Apps
      </a>
    </div>
  );
};