import React from 'react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-8 border-b border-[#d0d7de] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex-grow">
        <h1 className="text-2xl font-semibold text-[#1f2328] mb-1">
          PKC APPS
        </h1>
        <p className="text-[#636c76] text-sm">
          Download และ Updates แอปพลิเคชัน สำหรับ iPad ของโรงเรียน
        </p>
      </div>
      
      <div className="relative w-full md:w-64">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-4 w-4 text-[#636c76]" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10.68 11.74a6 6 0 1 1 1.06-1.06l3.91 3.91a.75.75 0 1 1-1.06 1.06l-3.91-3.91zM11 7a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="ค้นหาแอพ..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="block w-full pl-10 pr-3 py-1.5 text-sm bg-[#f6f8fa] border border-[#d0d7de] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0969da] focus:border-transparent transition-all placeholder:text-[#636c76]"
        />
        {searchTerm && (
          <button 
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#636c76] hover:text-[#1f2328]"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};