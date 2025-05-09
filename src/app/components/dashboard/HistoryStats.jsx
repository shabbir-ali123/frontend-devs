'use client';

const HistoryStats = () => {
  return (
    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#0A0D33]/80 via-[#111C5E]/80 to-[#0A0D33]/80 rounded-xl p-3 text-white max-w-xs">
      <div className="flex items-start">
        <div className="w-10 h-10 mr-3">
          <img 
            src="/images/avatar.png" 
            alt="History stats" 
            className="w-full h-full"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/100x100?text=Stats";
            }}
          />
        </div>
        <div>
          <div className="flex items-center space-x-1 text-sm font-semibold mb-1">
            <span>History Stats</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-xs text-gray-300">Find game, collect live match data and make your prediction.</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryStats; 