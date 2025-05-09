'use client';

const Background = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#080B28] opacity-95"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#0F1656] via-transparent to-transparent opacity-30"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-[url('/images/field-bg.webp')] bg-bottom bg-no-repeat bg-cover opacity-30"></div>
      <div className="absolute inset-0 bg-[url('/images/stars.webp')] bg-repeat opacity-30"></div>
    </div>
  );
};

export default Background; 