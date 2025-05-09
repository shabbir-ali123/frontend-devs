'use client';
import Image from 'next/image';
import CircularProgress from './ProgressBar';

const MatchInfo = () => {
  return (
    <div className="w-full max-w-7xl  mx-auto my-12 px-4">
      <div className="relative z-10 flex items-center justify-center">
        {/* Left Team Panel */}
        <div className="relative w-[1000px] h-[107px] flex items-center">
          <Image
            src="/images/Subtract.png"
            alt="Left Panel"
            layout="fill"
            objectFit="contain"
            className="z-0"
          />
          <div className="absolute left-30 w-[56px] h-[56px] rounded-full bg-gradient-to-b from-[#202865] to-[#06093B] flex items-center justify-center shadow-md">
            <Image
              src="/images/image1.png"
              alt="Nashville SC"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Game Time Ring - Use Custom Progress Component */}
        <div className="absolute right-92 flex items-center justify-center">
          <CircularProgress
            percentage={90}
            labelTop="10th - 30th"
            labelBottom="Minute of the Game"
          />
        </div>

        {/* Right Team Panel */}
        <div className="relative flex items-center justify-end">
          <div className="absolute right-30 w-[60px] h-[60px] rounded-full flex items-center justify-center">
            <Image
              src="/images/image2.png"
              alt="New England Revolution"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchInfo;
