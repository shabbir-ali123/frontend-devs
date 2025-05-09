'use client';

const MatchProgress = () => {
  // In a real app, this would be dynamic based on match data
  const progressPercentage = 65; // Just for demonstration

  return (
    <div className="w-full max-w-4xl mb-8">
      <div className="w-full h-3 bg-[#0A0D33]/80 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#44B700] to-[#7FFF00]" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MatchProgress; 