import React from 'react';
import ServiceLine from '../../../public/Home/ServiceLine.svg';
import Image from 'next/image';
import CyberImg from '../../../public/Home/Image Placeholder (2).png'

import { FaArrowRightLong } from "react-icons/fa6";

const ServiceSection: React.FC = () => {
  return (
    <main className=" bg-[#D5D9E5] h-[1800px] ">
      <section className="container mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center ">
          <p className="font-bold text-6xl mt-20">Service</p>
        </div>
        <div>
          <div className='flex justify-between mt-20 font-extralight '>
            <h1 className='text-4xl mb-8 font-thin'>Web Development</h1>
            <FaArrowRightLong className='text-4xl' />
          </div>

          <Image src={ServiceLine} alt='Line' />

        </div>

        <div>
          <div className='flex justify-between mt-14 font-extralight '>
            <h1 className='text-4xl mb-8 '>Mobile Development</h1>
            <FaArrowRightLong className='text-4xl' />
          </div>

          <Image src={ServiceLine} alt='Line' />
        </div>
        <div className='flex '>
          <div className='pt-10'>
            <h1 className='font-semibold text-2xl'>Cyber Security</h1>
            <p className='mt-5'>Our cyber security service provides advanced protection for your data and systems against potential threats and attacks, ensuring your business
              operates securely and efficiently.</p>
            <FaArrowRightLong className='text-4xl mt-5' />
          </div>
          <Image src={CyberImg} alt='cyberImg' className='mt-5 ' />
        </div>
        <Image src={ServiceLine} alt='Line' className='mt-5' />

        <div className='flex justify-between mt-20 font-extralight '>
          <h1 className='text-4xl mb-8 font-thin'>Digital Marketing</h1>
          <FaArrowRightLong className='text-4xl' />
          
        </div>

        <Image src={ServiceLine} alt='Line' />

      </section>
    </main>
  );
};

export default ServiceSection;
