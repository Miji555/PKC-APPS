import React from 'react';

export const InstructionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-[28px] p-6 glass-card border-none shadow-lg shadow-indigo-500/10 group">
      {/* Abstract decorative circle */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-100/80 flex items-center justify-center text-blue-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-slate-800 font-bold text-lg">คำแนะนำการใช้งาน</h3>
        </div>

        <div className="space-y-3 pl-2">
          <div className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              ต้องทำการ <span className="text-slate-900 font-bold bg-white/50 px-1 rounded">Sign in Apple ID</span> ให้เรียบร้อยก่อนจึงจะสามารถดาวน์โหลดแอปได้
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              หากดาวน์โหลดแล้ว <span className="text-red-500 font-bold">จะไม่สามารถลบแอปออกจากเครื่องได้</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};