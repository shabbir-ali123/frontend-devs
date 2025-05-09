'use client';

import Background from './Background';
import Image from 'next/image';
import MatchProgress from './MatchProgress';
import BetQuestion from './BetQuestion';
import BetOptions from './BetOptions';
import NavigationButtons from './NavigationButtons';
import MatchInfo from './MatchInfo';
import HistoryStats from './HistoryStats';
import NavButton from './Navbuttons';
import { CiCircleChevLeft } from "react-icons/ci";
import CircularProgress from './ProgressBar';
import GameProgressMobile from './MatchInfoMobile';
import VarDecisionCardMobile from './VarMobile';


const Dashboard = () => {
  return (
    <div className="relative  flex flex-col">
      <Background />
      
      <div className="relative z-10 flex-1 md:mt-[50px] flex flex-col items-center justify-between py-8 px-4  mx-auto w-full">
        <div className="w-full flex flex-col items-center">
          <div className="mb-4  fixed top-26 left-5 max-md:hidden">
            <button className="flex items-center gap-2 justify-start cursor-pointer  ">
           <CiCircleChevLeft className=' w-[36px] h-[36px] text-white' />

              <p className=' text-white hover:text-white'>Back</p>
            </button>
          </div>

          <GameProgressMobile />
          <VarDecisionCardMobile />

          <div className='max-md:hidden'>

          <MatchInfo />
          </div>
          {/* <MatchProgress /> */}
          <div className='max-md:hidden'>

          <BetQuestion />
          </div>
          <div className='max-md:hidden'>

          <BetOptions />
          </div>
          
         <div className="mt-6 w-full max-w-4xl">
  <div className="flex justify-between max-md:hidden items-center px-4 py-3 rounded-md border border-blue-600 bg-gradient-to-t from-blue-900 to-blue-800 text-white shadow-md">
    
    {/* Left Section */}
    <div className="flex items-center">
      <span className="text-[14px] font-semibold">Total Potential Win:</span>
      <span className="ml-2 text-[#FFC825] text-[16px] font-bold">0 Coins</span>
    </div>

    {/* Right Section */}
    <div className="flex items-center text-[12px] bg-white/10 py-1.5 px-4 rounded-full shadow-inner">
      <svg className="w-3 h-3 mr-2 text-white opacity-70" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8V5H9v6h5v-2h-3z" />
      </svg>
      <span>
        Pick Window <span className="text-green-400">open</span> till 0d: 03h: 59m
      </span>
    </div>
  </div>
</div>

          
          <NavigationButtons />
        </div>
        <div className='max-md:hidden'>

        <HistoryStats />
        </div>
        <div>
    <div className="mt-[40px] flex items-start md:hidden  left-6 bottom-0">
                  <Image src="/images/Cards.png" alt="coin" width={100} height={120} />
                  
                </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 