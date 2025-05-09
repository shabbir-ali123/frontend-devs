'use client';

import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

const NavButton = ({ direction, onClick }) => {
  const isLeft = direction === 'left';

  return (
    <button
      onClick={onClick}
      className="bg-[#1E40F3] max-w-[170px]  w-full hover:bg-[#1632C4] cursor-pointer text-white py-[15px] px-8 rounded-[8px] shadow-[0_4px_0_#1632C4] transition-colors duration-200 flex items-center justify-center"
    >
      {isLeft ? (
        <HiOutlineArrowLeft className="h-5 w-5 mr-1" />
      ) : (
        <HiOutlineArrowRight className="h-5 w-5 ml-1" />
      )}
    </button>
  );
};

export default NavButton;
