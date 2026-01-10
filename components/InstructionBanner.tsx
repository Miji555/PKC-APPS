import React from 'react';

export const InstructionBanner: React.FC = () => {
  return (
    <div className="w-full glass-card rounded-3xl p-6 relative overflow-hidden group edge-shine">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-100"></div>
      <div className="flex items-start gap-5 relative z-10">
        <div className="bg-blue-100/50 p-3 rounded-2xl flex-shrink-0 text-blue-600 backdrop-blur-md shadow-sm border border-blue-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-slate-800 font-bold text-lg mb-3 tracking-wide">คำแนะนำการใช้งาน</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <p className="text-slate-600 text-sm leading-relaxed">
                ต้องทำการ <span className="font-bold text-slate-800">Sign in Apple ID</span> ให้เรียบร้อยก่อนจึงจะสามารถดาวน์โหลดแอปได้
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-500 font-bold mt-1">•</span>
              <p className="text-slate-600 text-sm leading-relaxed">
                หากดาวน์โหลดแล้ว <span className="text-red-500 font-bold">จะไม่สามารถลบแอปออกจากเครื่องได้</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};