'use client';

import { Check } from 'lucide-react';

const BetCard = ({ title, subtitle, amount, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-[272px] h-[152px] cursor-pointer rounded-[16px] p-[2px] transition duration-200 ${
        selected ? 'bg-blue-500' : 'bg-transparent'
      }`}
    >
      {/* Inner card */}
      <div
        className={`relative w-full h-full rounded-[16px] bg-gradient-to-b ${
          selected
            ? 'from-[#111C5E]/90 to-[#0A0D33]/90'
            : 'from-[#0F1A4C] to-[#081028]'
        }`}
      >
        {/* Overlay background */}
        <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-[#16205F]/50 to-transparent" />

        {/* Tick icon on selected */}
        {selected && (
          <div className="absolute -top-3 -right-2 bg-blue-500 w-7 h-7 rounded-full flex items-center justify-center z-20 shadow-lg">
            <Check className="text-white w-4 h-4" />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div className="text-white font-semibold text-[16px]">{title}</div>
          <div className="text-white/40 text-[14px]  mb-2">{subtitle}</div>

          <div className="flex items-center">
            <div className="bg-yellow-400 w-5 h-5 rounded-full mr-2 shadow-md"></div>
            <div className="text-[#FFC825] font-semibold text-[16px]">{amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetCard;
