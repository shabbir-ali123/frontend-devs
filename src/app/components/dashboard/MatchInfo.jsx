'use client';

const MatchInfo = () => {
  return (
    <div className="w-full max-w-4xl bg-gradient-to-r from-[#0A0D33]/80 via-[#111C5E]/80 to-[#0A0D33]/80 rounded-xl p-1.5 mb-8">
      <div className="relative flex justify-between items-center px-8 py-4">
        {/* Left Team */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#151F5E] to-[#06093B] p-0.5 flex items-center justify-center">
            <div className="bg-gradient-to-b from-[#202865] to-[#06093B] rounded-full w-full h-full flex items-center justify-center">
              <img 
                src="/images/team1-logo.png" 
                alt="Team 1" 
                className="w-12 h-12"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/100x100?text=Team+1";
                }}
              />
            </div>
          </div>
        </div>

        {/* Center Match Details */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 rounded-full bg-gradient-to-b from-[#0F1458]/90 to-[#070A33]/90 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-[#57B72A]/80 flex items-center justify-center flex-col text-white">
              <div className="text-xl font-bold">10th - 30th</div>
              <div className="text-xs text-center opacity-70">Minute of the Game</div>
            </div>
          </div>
        </div>

        {/* Right Team */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#151F5E] to-[#06093B] p-0.5 flex items-center justify-center">
            <div className="bg-gradient-to-b from-[#202865] to-[#06093B] rounded-full w-full h-full flex items-center justify-center">
              <img 
                src="/images/team2-logo.png" 
                alt="Team 2" 
                className="w-12 h-12"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/100x100?text=Team+2";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchInfo; 