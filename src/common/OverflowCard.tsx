import Image from 'next/image';
import React from 'react';
import LineImg from '../../public/Home/Line.svg';

const OverflowCard: React.FC = () => {
  return (
    <div className="rounded-2xl shadow-md p-8 bg-[#11112B] h-48 w-80 flex flex-col items-center text-white">
      <div className="flex  md:flex-row items-center justify-between gap-4 md:gap-8 w-full">
        
        <StatCard 
          number="500+" 
          description="Successful Projects" 
        />
        
        <div className="hidden md:flex items-center">
          <Image src={LineImg} alt="Line" />
        </div>

        <StatCard 
          number="98%" 
          description="Satisfied Clients" 
        />
        
        <div className="hidden md:flex items-center">
          <Image src={LineImg} alt="Line" />
        </div>

        <StatCard 
          number="35+" 
          description="Handled Countries" 
        />
      </div>
    </div>
  );
};

// StatCard Component to encapsulate repeated code
const StatCard: React.FC<{ number: string; description: string }> = ({ number, description }) => {
  return (
    <div className="flex-1 md:p-6 text-center border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black">
      <h2 className="md:text-4xl text-lg font-bold text-[#92DEED]">{number}</h2>
      <p className="text-white mt-2 md:text-base text-xs md:w-full">{description}</p>
    </div>
  );
};

export default OverflowCard;
