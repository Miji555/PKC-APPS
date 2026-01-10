import React from 'react';

export const InstructionBanner: React.FC = () => {
  return (
    <div className="w-full bg-rose-50 border-2 border-rose-200 rounded-2xl p-5 mb-8 shadow-sm animate-in">
      <div className="flex items-start gap-4">
        <div className="bg-rose-500 p-2 rounded-xl flex-shrink-0 mt-0.5">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-rose-900 font-bold text-lg mb-1">ประกาศสำคัญ!</h3>
          <p className="text-rose-800 text-base leading-relaxed">
            ต้องทำการ <span className="bg-rose-200 px-1.5 py-0.5 rounded font-black text-rose-700 underline decoration-2 underline-offset-2">Sign in Apple ID</span> ในเครื่องของคุณให้เรียบร้อยก่อนเท่านั้น จึงจะสามารถดาวน์โหลดแอปพลิเคชันได้
          </p>
        </div>
      </div>
    </div>
  );
};