import React from 'react';
import Image from 'next/image';
import ServiceLine from '../../../public/Project/Line (2).svg';
import BgImg from '../../../public/Project/Rectangle (3).png';
import { FaArrowRightLong } from "react-icons/fa6";

const BlogSection: React.FC = () => {
  return (
    <main className="py-12 px-6 md:px-12 bg-[#D5D9E5] h-screen">
      <section className="container mx-auto relative">

        <div className="flex justify-center mt-10">
          <p className="font-bold text-6xl mb-8">Blog</p>
        </div>

        <p className='text-center text-sm mb-2'>Stay up to date with the latest trends and insights in technology with our informative blog.</p>
        <p className='text-center text-sm'>From industry news to expert tips, we've got you covered.</p>

        <div className='flex flex-wrap relative mt-20 gap-4'>
          {/* First Blog Card */}
          <div className='flex flex-col items-center w-full md:w-1/3'>
            <Image src={ServiceLine} alt='ServiceLine' />
            <p className='text-left'>T E C H</p>
            <h1 className='text-base text-left mt-4 font-bold w-1/2'>Why Cloud Computing is Essential for Your Business in 2023</h1>
            <p className='text-right mt-4'>01.03</p>
            <Image src={ServiceLine} alt='ServiceLine' />
          </div>

          {/* Blog Card with Background Image */}
          <div className='relative w-full md:w-1/3 h-[300px]'>
            <Image src={BgImg} alt='bgBlue' className='absolute inset-0 w-full h-full object-cover' />
            <div className='absolute inset-0 flex flex-col justify-center items-center text-center bg-[#11112B] bg-opacity-40 rounded-lg'>
              <p className='text-white text-lg'>T I P S</p>
              <p className='text-white font-bold text-lg mt-2'>How to Protect Business from Cybersecurity Threats</p>
              <p className='text-white font-thin text-sm mt-5'>12 April 2023 | Dheeraj</p>
              <button className='bg-[#92DEED] mt-4 text-white px-4 py-2 rounded'>READ MORE</button>
            </div>
          </div>

          {/* Third Blog Card */}
          <div className='flex flex-col items-center w-full md:w-1/3'>
            <Image src={ServiceLine} alt='ServiceLine' />
            <p>R E V I E W</p>
            <h1 className='text-left text-base font-bold mt-4 w-1/2'>5 Ways Software Developers Can Boost Your Business Quicker Than Ever</h1>
            <p className='mt-4'>20.05</p>
            <Image src={ServiceLine} alt='ServiceLine' />
          </div>
        </div>

        {/* Centered Button */}
        <div className='text-center mt-20'>
          <button className='text-[#11112B] bg-white p-3 rounded-lg border border-[#000000] flex items-center justify-center mx-auto'>
            READ MORE ARTICLES <FaArrowRightLong className='ml-3 w-5 h-5' />
          </button>
        </div>
      </section>
    </main>
  );
};

export default BlogSection;
