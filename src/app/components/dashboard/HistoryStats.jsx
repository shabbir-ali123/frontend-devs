'use client';

import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

const HistoryStats = () => {
  return (
    <div className="fixed bottom-6 left-25 z-50">
      <div className="relative w-[350px] rounded-[20px] px-5 py-4 bg-gradient-to-r from-[#07092B00] to-[#122C84] text-white shadow-md border border-[#1C2B85]/30">
        {/* Glowing ice-like question mark on the right */}
        <img
          src="/images/question.png" // update path as needed
          alt="decorative question mark"
          className="absolute right-[-12px] top-[-23px] z-0 w-28 pointer-events-none select-none"
        />

        <div className=" z-10 relative">
          {/* Icon bubble */}
          <div className="flex items-center gap-2">
            <BsFillQuestionCircleFill className="text-[#95A5F7] text-sm" />
            <div className="flex items-center mb-1 gap-1">
              <span className="text-sm font-semibold text-[#95A5F7]">History Stats</span>
              <FaChevronRight className="text-xs text-[#95A5F7]" />
            </div>
          </div>

          {/* Text content */}
          <div>
            
            <p className="text-xs text-[#B2B9E1] leading-snug">
              Find some relevant and helpful <br /> stats to guide your prediction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryStats;
