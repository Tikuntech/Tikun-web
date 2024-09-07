import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import SmasungImg from '../../../public/Home/SAMSUNG.svg';
import GoogleImg from '../../../public/Home/GOGGLE.svg';
import AmazonImg from '../../../public/Home/AMAZON.svg';
import WindowsImg from '../../../public/Home/WINDOWS.svg';
import SonyImg from '../../../public/Home/SONY.svg';

const ClientStory: React.FC = () => {
  return (
    <div className='bg-[#11112B] h-screen flex flex-col'>
      <header className='text-white flex text-6xl justify-between items-center p-8 md:p-20 font-semibold '>
        <span>Client Stories</span>
        <FaArrowRightLong />
      </header>

      <main className='flex flex-col md:flex-row p-8 md:p-20'>
        <div className='text-white md:w-1/2 mb-8 md:mb-0'>
          <h1 className='text-4xl mb-4'>Amazing!</h1>
          <p className='text-lg mb-4'>
            “Tikuntech’s cybersecurity solution gave us the peace of mind we needed to focus on our business. They took the time to understand our unique needs and created a solution that protected our sensitive data and ensured compliance with industry regulations.”
          </p>
          <div className='flex items-center'>
            <div className='h-20 w-20 rounded-full bg-white mr-4'></div>
            <div>
              <span className='block text-lg font-semibold'>Tom Johnson</span>
              <span className='block text-sm'>CIO of Mika Medika Healthcare</span>
            </div>
          </div>
        </div>

        <div className='text-white md:w-1/2'>
          <h1 className='text-4xl text-[#92DEED] mb-4'>Best Service</h1>
          <p className='text-lg mb-4'>
            “We were struggling to keep up with the demands of our growing business until we partnered with Tukintech. Their custom software development solution has helped us streamline our operations and improve efficiency, saving us time and money.”
          </p>
          <div className='flex items-center'>
            <div className='h-20 w-20 rounded-full bg-white mr-4'></div>
            <div>
              <span className='block text-lg font-semibold'>Jane Doe</span>
              <span className='block text-sm'>COO of DEF Manufacturing</span>
            </div>
          </div>
        </div>
      </main>

      <footer className='flex justify-center gap-10 p-8 md:p-20 items-center flex-wrap mt-20'>
        <Image src={SmasungImg} alt='Samsung logo' width={200} height={40} />
        <Image src={GoogleImg} alt='Google logo' width={200} height={40} />
        <Image src={AmazonImg} alt='Amazon logo' width={200} height={40}  className='mt-10'/>
        <Image src={WindowsImg} alt='Windows logo' width={200} height={80} />
        <Image src={SonyImg} alt='Sony logo' width={200} height={40} />
      </footer>
    </div>
  );
}

export default ClientStory;
