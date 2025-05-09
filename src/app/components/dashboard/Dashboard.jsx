'use client';

import Background from './Background';
import MatchProgress from './MatchProgress';
import BetQuestion from './BetQuestion';
import BetOptions from './BetOptions';
import NavigationButtons from './NavigationButtons';
import MatchInfo from './MatchInfo';
import HistoryStats from './HistoryStats';

const Dashboard = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Background />
      
      <div className="relative z-10 flex-1 flex flex-col items-center justify-between py-8 px-4 max-w-6xl mx-auto w-full">
        <div className="w-full flex flex-col items-center">
          <div className="mb-4">
            <button className="flex items-center text-white/80 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span>Back</span>
            </button>
          </div>
          
          <MatchInfo />
          <MatchProgress />
          <BetQuestion />
          <BetOptions />
          
          <div className="mt-6 w-full max-w-4xl">
            <div className="flex justify-between items-center text-white py-2 px-4 bg-black/20 rounded-lg">
              <div className="flex items-center">
                <span className="text-sm">Total Potential Win:</span>
                <span className="ml-4 font-bold">0 Coins</span>
              </div>
              <div className="flex items-center text-xs bg-black/30 py-1 px-3 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>Pick Window open till 03h 03m 59s</span>
              </div>
            </div>
          </div>
          
          <NavigationButtons />
        </div>
        
        <HistoryStats />
      </div>
    </div>
  );
};

export default Dashboard; 