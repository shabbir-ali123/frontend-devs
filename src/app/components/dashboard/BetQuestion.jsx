'use client';

import Image from 'next/image';

const BetQuestion = () => {
  return (
    <div className="w-full max-w-5xl my-[45px] flex justify-center">
      <div className="relative w-[693.75px] h-[71.18px]">
        <Image
          src="/images/Vector.png"
          alt="Bet question background"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-semibold text-lg text-center">
            Will a goal be cancelled by VAR?
          </span>
        </div>
      </div>
    </div>
  );
};

export default BetQuestion;
