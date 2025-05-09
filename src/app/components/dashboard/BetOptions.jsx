'use client';

import { useState } from 'react';
import BetCard from './BerCard';

const BetOptions = () => {
const [selectedOption, setSelectedOption] = useState(null);


  return (
    <div className="flex gap-4">
      <BetCard
        title="YES"
        subtitle="VAR will Cancel"
        amount={210}
        selected={selectedOption === 'yes'}
        onClick={() => setSelectedOption('yes')}
      />
      <BetCard
        title="NO"
        subtitle="VAR will not Cancel"
        amount={10}
        selected={selectedOption === 'no'}
        onClick={() => setSelectedOption('no')}
      />
    </div>
  );
};

export default BetOptions;
