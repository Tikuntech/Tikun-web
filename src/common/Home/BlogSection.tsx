import React from 'react'
import Image from 'next/image'
import ServiceLine from '/public/Project/Line (2).svg'
import BgImg from '/public/Project/Rectangle (3).png'
import { FaArrowRightLong } from 'react-icons/fa6'
import HomeArrowIcon from '../../../public/Home/HomeArrowIconBlack.svg'

const BlogSection: React.FC = () => {
  return (
    <main className=" bg-[#D5D9E5] md:h-screen h-full ">
      {/* Blog Heading */}
      <p className="font-bold md:text-6xl text-5xl mb-8 pt-20 text-center">
        Blog
      </p>
      <p className="md:text-base text-xs w-full text-center">
        Stay up to date with the latest trends and insights in technology with
        our informative blog.
      </p>
      <p className="md:text-base text-xs w-full text-center">
        From industry news to expert tips, we've got you covered.
      </p>

      {/* Blog Cards Section */}
      <div className="flex flex-row gap-8 md:mt-8 justify-evenly p-4">
        {/* First Blog Card (Hidden on Mobile) */}
        <div className="hidden md:block flex-shrink-0 flex flex-col w-96">
          <Image src={ServiceLine} alt="ServiceLine" className="mb-4" />
          <p className="text-left text-lg text-gray-700 pl-10">T E C H</p>
          <h1 className="text-left text-lg font-bold mt-4 pl-10 w-2/3">
            Why Cloud Computing is Essential for Your Business in Year 2023
          </h1>
          <p className="text-right mt-4 text-4xl text-black pr-8 font-medium">
            01.03
          </p>
          <Image src={ServiceLine} alt="ServiceLine" className="mt-4" />
        </div>

        {/* Blog Card with Background Image (Always Visible) */}
        <div className="relative md:flex-shrink-0 w-full md:w-96 bg-[#11112B] rounded-2xl mt-5  ">
          <div className="md:absolute inset-0 flex flex-col p-10 justify-center items-center text-center  rounded-lg">
            <p className="text-white text-lg tracking-wide">T I P S</p>
            <h1 className="text-white font-medium text-xl md:mt-4">
              How to Protect Business from Cybersecurity Threats
            </h1>
            <p className="text-white font-thin text-sm mt-5">
              12 April 2023 | Dheeraj
            </p>
            <button className="bg-[#92deed] md:mt-8 mt-5 text-[#11112B] px-6 py-2 rounded-lg shadow-md">
              READ MORE
            </button>
          </div>
        </div>

        {/* Third Blog Card (Hidden on Mobile) */}
        <div className="hidden md:block flex-shrink-0 flex flex-col w-96">
          <Image src={ServiceLine} alt="ServiceLine" className="mb-4" />
          <p className="text-left text-lg text-gray-700 ml-10">R E V I E W</p>
          <h1 className="text-left text-lg font-bold mt-4 ml-10 w-2/3">
            5 Ways Software Developers Can Boost Your Business Quicker Than Ever
          </h1>
          <p className="text-right mt-4 text-4xl text-black mr-5 pr-8 font-medium">
            20.05
          </p>
          <Image src={ServiceLine} alt="ServiceLine" className="mt-4" />
        </div>
      </div>

      {/* Centered Button */}
      <div className="text-center md:mt-10  md:mb-20 mt-5 pb-10">
        <button className="text-[#11112B] bg-[#D5D9E5] py-3 px-6 rounded-lg border border-[#000000] flex items-center justify-center mx-auto text-base">
          READ MORE ARTICLES
          <Image src={HomeArrowIcon} alt="HomeArrowIcon" className="pl-4" />
        </button>
      </div>
    </main>
  )
}

export default BlogSection
