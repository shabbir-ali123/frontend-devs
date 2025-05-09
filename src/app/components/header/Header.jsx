'use client';

import { useState } from 'react';
import { FaTrophy, FaGlobeEurope } from 'react-icons/fa';
import { RiHome6Fill } from "react-icons/ri";
import { PiShootingStarFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#080B36] text-white shadow-md">
      <div className="py-[26px] px-4 max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/Union.png" alt="Logo" className="h-[30px] w-[30px]" />
          <span className="font-semibold text-white">Wizzy</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-between gap-8 text-white/40 text-[14px] font-medium">
          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-400">
              <RiHome6Fill className="w-[16px] h-[16px]" />
              <span>Home</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-400">
              <FaTrophy className="w-[16px] h-[16px]" />
              <span>Leaderboard</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-400">
              <PiShootingStarFill className="w-[16px] h-[16px]" />
              <span>All Battle Picks</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="bg-[#0B83D0] hover:bg-blue-600 text-white text-[12px] px-4 md:w-[137px] py-2 rounded-full">
              LOG IN
            </button>
            <div className="flex items-center space-x-1 text-sm cursor-pointer hover:text-blue-400">
              <FaGlobeEurope className="text-blue-400 w-[16px] h-[16px]" />
              <span>ENG</span>
            </div>
            <IoNotifications className="text-white/40 hover:text-blue-400 w-[16px] h-[16px] cursor-pointer" />
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 text-white/90">
          <div className="flex flex-col space-y-4 border-t border-white/10 pt-4">
            <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
              <RiHome6Fill className="w-[16px] h-[16px]" />
              <span>Home</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
              <FaTrophy className="w-[16px] h-[16px]" />
              <span>Leaderboard</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
              <PiShootingStarFill className="w-[16px] h-[16px]" />
              <span>All Battle Picks</span>
            </div>
            
            <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
              <FaGlobeEurope className="text-blue-400 w-[16px] h-[16px]" />
              <span>ENG</span>
            </div>
              <div className='flex items-center  space-x-2 '>

            <IoNotifications className="text-white/40 hover:text-blue-400 w-[18px] h-[18px] cursor-pointer" />
              <span>Notifications</span>
            </div>
            <button className="bg-[#0B83D0] max-sm:w-full max-sm:py-4 hover:bg-blue-600 text-white text-[12px] px-4 py-2 rounded-full w-fit">
              LOG IN
            </button>
          

          </div>
        </div>
      )}
    </header>
  );
}
