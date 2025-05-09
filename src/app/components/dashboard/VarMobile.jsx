'use client';

import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Image from 'next/image';
import { TiTick } from "react-icons/ti";



export default function VarDecisionCardMobile() {
  const [selected, setSelected] = useState('yes');

  const options = {
    yes: { label: 'YES', value: 10 },
    no: { label: 'NO', value: 400 },
  };

  return (
    <div className="md:hidden bg-gradient-to-b from-[#071745] to-[#000D2A] text-white rounded-2xl p-4  w-[100%] mx-auto shadow-lg">
      {/* Question */}
      <div className="bg-[#101E4C] rounded-xl text-center text-sm font-semibold py-3 mb-4">
        Will a goal be cancelled by VAR?
      </div>

      {/* Options */}
      <div className="flex justify-between items-center gap-4 mb-4">
        {/* YES */}
        <div
          onClick={() => setSelected('yes')}
          className={`flex-1 rounded-xl p-4 cursor-pointer border ${
            selected === 'yes'
              ? 'border-blue-400 bg-[#0A1E4A] shadow-md'
              : 'border-[#1E2D57]'
          } relative`}
        >
          {/* Checkmark */}
          {selected === 'yes' && (
            <div className="absolute -top-3 -right-2 bg-[#0B83D0] rounded-full p-2">
              <TiTick className="text-white text-sm" />
            </div>
          )}
          <div className="flex flex-col items-center space-y-2">
            <FaCheckCircle className="text-blue-400 text-xl" />
            <span className="font-semibold text-sm">YES</span>
            <div className="flex items-center space-x-1">
              <Image src="/images/coin.png" alt="coin" width={22} height={22} />
              <span className="text-yellow-400 text-sm">{options.yes.value}</span>
            </div>
          </div>
        </div>

        {/* NO */}
        <div
          onClick={() => setSelected('no')}
          className={`flex-1 rounded-xl p-4 cursor-pointer border ${
            selected === 'no'
              ? 'border-blue-400  shadow-md'
              : 'border-[#1E2D57]'
          } relative`}
        >
          {selected === 'no' && (
            <div className="absolute -top-3 -right-2 bg-[#0B83D0] rounded-full p-2">
              <TiTick className=" text-sm" />
            </div>
          )}
          <div className="flex flex-col items-center space-y-2">
            <FaTimesCircle className="text-blue-400 text-xl" />
            <span className="font-semibold text-sm">NO</span>
            <div className="flex items-center space-x-1">
              <Image src="/images/coin.png" alt="coin" width={22} height={22} />
              <span className="text-yellow-400 text-sm">{options.no.value}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0C1A3C] text-sm py-2 px-4 rounded-xl text-center">
        Total Potential Win: <span className="text-yellow-400">0 Coins</span>
      </div>
    </div>
  );
}
