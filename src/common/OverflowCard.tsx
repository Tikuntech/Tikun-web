import Image from 'next/image'
import React from 'react'
import LineImg from '/public/Home/Line.svg'

const OverflowCard: React.FC = () => {
  return (
    <div className="p-4">
      <div className="rounded-2xl shadow-md bg-[#11112B] md:h-48 w-full flex flex-col items-center p-5 text-white md:p-8">
        <div className="flex md:flex-row items-center justify-between gap-4 md:gap-8 ">
          <StatCard number="500+" description="Successful Projects" />

          <div className="hidden md:flex items-center">
            {/* <Image src={LineImg} alt="Line" /> */}
            <div className="h-2 w-2 rounded-full bg-[#92deed]"></div>
          </div>

          <StatCard number="98%" description="Satisfied Clients" />

          <div className="hidden md:flex items-center">
            {/* <Image src={LineImg} alt="Line" /> */}
            <div className="h-2 w-2 rounded-full bg-[#92deed]"></div>
          </div>

          <StatCard number="35+" description="Handled Countries" />
        </div>
      </div>
    </div>
  )
}

// StatCard Component to encapsulate repeated code
const StatCard: React.FC<{ number: string; description: string }> = ({
  number,
  description,
}) => {
  return (
    <div className="flex-1 md:p-6 text-center md:max-w-full">
      <h2 className="md:text-4xl text-lg font-bold text-[#92DEED]">{number}</h2>
      <p className="text-white mt-2 md:text-base text-xs 1470px:w-80 1366px:w-72 1366px:-ml-5">
        {description}
      </p>
    </div>
  )
}

export default OverflowCard
