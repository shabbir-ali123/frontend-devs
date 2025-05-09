import React from 'react';

const CircularProgress = ({ percentage, labelTop, labelBottom }) => {
  const radius = 90;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-[252px] h-[252px] flex items-center justify-center">
      {/* OUTERMOST BORDER RING */}
      <div className="absolute w-full h-full rounded-full border-[2px] border-[#1E2D57] opacity-70 z-0" />

      {/* SVG Progress Circle */}
      <svg
        className="absolute top-[5px] left-[5px] w-[240px] h-[240px] rotate-[-90deg] z-10"
        viewBox="0 0 200 200"
      >
       
        <circle
          cx="100"
          cy="100"
          r={normalizedRadius}
          stroke="#1A2A4A"
          strokeWidth={stroke}
          fill="transparent"
        />
        {/* Progress stroke */}
        <circle
          cx="100"
          cy="100"
          r={normalizedRadius}
          stroke="#5FFF47"
          strokeWidth={stroke}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            // filter: 'drop-shadow(0 0 6px #5FFF47)',
            transition: 'stroke-dashoffset 0.5s ease',
          }}
        />
      </svg>

      {/* INNER CONTENT CIRCLE */}
      <div className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#0B1F59] to-[#061139] z-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-lg font-bold">{labelTop}</p>
          <p className="text-gray-400 text-sm">{labelBottom}</p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
