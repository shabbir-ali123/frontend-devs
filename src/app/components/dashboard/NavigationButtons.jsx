'use client';

import NavButton from './Navbuttons';

const NavigationButtons = () => {
  return (
    <div className="w-full max-w-4xl  flex justify-center space-x-4  mt-6">
      <NavButton direction="left" />
      <NavButton direction="right" />
    </div>
  );
};

export default NavigationButtons;
