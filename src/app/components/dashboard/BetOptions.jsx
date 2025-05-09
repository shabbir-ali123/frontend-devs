'use client';

import { useState } from 'react';

const BetOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full max-w-4xl flex space-x-4 mb-6">
      {/* YES Option */}
      <div 
        className={`flex-1 bg-gradient-to-b from-[#111C5E]/90 to-[#0A0D33]/90 rounded-xl cursor-pointer hover:opacity-95 transition-all duration-200 ${selectedOption === 'yes' ? 'ring-2 ring-blue-500' : ''}`}
        onClick={() => handleSelect('yes')}
      >
        <div className="bg-gradient-to-b from-[#16205F]/50 to-transparent rounded-xl px-6 py-8 flex flex-col items-center">
          <div className="text-white font-bold mb-2">YES</div>
          <div className="text-gray-400 text-sm mb-4">VAR will Cancel</div>
          
          <div className="flex items-center">
            <div className="bg-yellow-500 rounded-full w-4 h-4 mr-2"></div>
            <div className="text-yellow-500 font-bold">210</div>
          </div>
        </div>
      </div>
      
      {/* NO Option */}
      <div 
        className={`flex-1 bg-gradient-to-b from-[#111C5E]/90 to-[#0A0D33]/90 rounded-xl cursor-pointer hover:opacity-95 transition-all duration-200 ${selectedOption === 'no' ? 'ring-2 ring-blue-500' : ''}`}
        onClick={() => handleSelect('no')}
      >
        <div className="bg-gradient-to-b from-[#16205F]/50 to-transparent rounded-xl px-6 py-8 flex flex-col items-center">
          <div className="text-white font-bold mb-2">NO</div>
          <div className="text-gray-400 text-sm mb-4">VAR will not Cancel</div>
          
          <div className="flex items-center">
            <div className="bg-yellow-500 rounded-full w-4 h-4 mr-2"></div>
            <div className="text-yellow-500 font-bold">10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetOptions; 