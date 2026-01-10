import React from 'react';

export const InstructionBanner: React.FC = () => {
  return (
    <div className="w-full glass-card rounded-3xl p-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex items-start gap-5 relative z-10">
        <div className="bg-white/10 p-3 rounded-2xl flex-shrink-0 text-blue-300 backdrop-blur-md shadow-inner border border-white/10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg mb-3 tracking-wide">คำแนะนำการใช้งาน</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                ต้องทำการ <span className="font-bold text-white shadow-blue-500/50 drop-shadow-sm">Sign in Apple ID</span> ให้เรียบร้อยก่อนจึงจะสามารถดาวน์โหลดแอปได้
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                หากดาวน์โหลดแล้ว <span className="text-red-300 font-bold drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]">จะไม่สามารถลบแอปออกจากเครื่องได้</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};