'use client';

import { IoIosArrowBack } from 'react-icons/io';
import CircularProgress from './ProgressBar';
import Image from 'next/image';
import { FaClock } from "react-icons/fa";
import { CiCircleChevLeft } from "react-icons/ci";



export default function GameProgressMobile() {
  return (
    <div className="md:hidden w-full  bg-[#020926] flex flex-col items-center justify-start py-6  relative">
        <div className='flex items-center gap-4 '>

        <CiCircleChevLeft className='text-white text-[30px]'/>
      {/* Top Row */}
      <div className="flex items-center justify-center gap-2 bg-[#101741] rounded-full px-4 py-2 text-sm text-white/80">
        <FaClock className="text-white  " />
        <span>
          Pick Window <span className="text-green-400 text-[12px] ">open</span> till 06d: 03h: 59m
        </span>
        </div>
      </div>

      {/* Circular Progress */}
      <div className="my-6">
        <CircularProgress
          percentage={30}
          labelTop="10th - 30th"
          labelBottom="Minute of the Game"
        />
      </div>

      {/* Team Logos */}
      <div className="absolute bottom-6 left-0 flex flex-col items-center gap-1">
        <div className="w-16 h-16 bg-[#101741] rounded-full p-1 flex items-center justify-center">
          <Image
            src="/images/image1.png"
            alt="Team A"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
      
      </div>

      <div className="absolute bottom-6 right-0 flex flex-col items-center gap-1">
        <div className="w-16 h-16 bg-[#101741] rounded-full p-1 flex items-center justify-center">
          <Image
            src="/images/image2.png"
            alt="Team B"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        
      </div>
    </div>
  );
}
