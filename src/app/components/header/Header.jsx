'use client';

import { FaTrophy } from 'react-icons/fa';
import { MdOutlineEmojiEvents } from 'react-icons/md';
// import { IoMdHome } from 'react-icons/io';
import { RiHome6Fill } from "react-icons/ri";
import { PiShootingStarFill } from "react-icons/pi";



import { FaGlobeEurope } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#080B36] text-white  py-3 flex items-center justify-around  shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center gap-2  w-[50%]">
        <img src="/images/Union.png" alt="Logo" className="h-[30px] w-[30px]" />
        <span className="font-semibold text-white">Wizzy</span>
      </div>

      {/* Center: Navigation */}
      <nav className="flex items-center justify-between gap-2  text-[14px] font-medium">
        <div className='flex items-center justify-between gap-4'>

       
        <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-400">
          <RiHome6Fill className="text-blue-400  w-[16px] h-[16px]" />
          <span>Home</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-400">
          <FaTrophy className="text-blue-400  w-[16px] h-[16px]" />
          <span>Leaderboard</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-400">
          <PiShootingStarFill className="text-blue-400  w-[16px] h-[16px]" />
          <span>All Battle Picks</span>
        </div>
         </div>
         {/* Right: Actions */}
      <div className="flex items-center space-x-4">
        <button className="bg-[#0B83D0] hover:bg-blue-600 text-white text-[12px] px-4 md:w-[137px] py-2 rounded-full">
          LOG IN
        </button>
        <div className="flex items-center space-x-1 text-sm cursor-pointer hover:text-blue-400">
          <FaGlobeEurope className="text-blue-400  w-[16px] h-[16px]" />
          <span>ENG</span>
        </div>
        <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center text-xs">0</div>
      </div>
      </nav>

     
    </header>
  );
}
