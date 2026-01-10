import React from 'react';

export const InstructionBanner: React.FC = () => {
  return (
    <div className="w-full bg-white border border-blue-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-xl flex-shrink-0 text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-blue-900 font-bold text-lg mb-3">คำแนะนำการใช้งาน</h3>
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="text-blue-400 font-bold">•</span>
              <p className="text-gray-600 text-sm leading-relaxed">
                ต้องทำการ <span className="font-bold text-blue-600">Sign in Apple ID</span> ให้เรียบร้อยก่อนจึงจะสามารถดาวน์โหลดแอปได้
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-400 font-bold">•</span>
              <p className="text-gray-600 text-sm leading-relaxed">
                หากดาวน์โหลดแล้ว <span className="text-red-500 font-bold">จะไม่สามารถลบแอปออกจากเครื่องได้</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};