import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from 'next/image'
import SmasungImg from '/public/Home/SAMSUNG.svg'
import GoogleImg from '/public/Home/GOGGLE.svg'
import AmazonImg from '/public/Home/AMAZON.svg'
import WindowsImg from '/public/Home/WINDOWS.svg'
import SonyImg from '/public/Home/SONY.svg'
import DividerLine from '/public/Blog/VerticalLine.svg'
import LogoIcon from '../LogoIcons'
import harsha from '/public/Home/Harshag.jpg'
import kamal from '/public/Home/kamal.png'
import HomeLogoIcons from './HomeLogoIcons'

const ClientStory: React.FC = () => {
  return (
    <>
      <div className="bg-[#11112B]  flex flex-col  md:pl-12 md:pr-12 1470px:pl-14 1366px:pl-16">
        {/* Header */}
        <header className="text-white flex md:justify-between md:items-center p-8 md:pt-20 md:-mb-20  ">
          <h1 className="text-4xl md:text-6xl  font-semibold">
            Client Stories
          </h1>
          {/* <FaArrowRightLong className="hidden md:block text-2xl" /> */}
        </header>

        {/* Main Content */}
        <main className="flex flex-col md:flex-row p-10 md:pt-10  gap-8  items-center justify-center ">
          {/* Story Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 md:mt-20">
            {/* Story 1 */}
            <div className="text-white flex flex-col md:items-start md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#92DEED] mb-4">
                Amazing!
              </h2>
              <p className="text-sm md:text-lg mb-4 md:text-left  text-white">
                “Tikuntech elevated our brand with exceptional marketing strategies that delivered real results—all within our budget. They made growing our business both effective and affordable!”
              </p>
              <div className="flex items-end justify-end w-full">
                <div className="flex text-right md:gap-2">
                  <div className="text-white">
                    <span className="block md:text-lg font-semibold">
                    Kamal K
                    </span>
                    <span className="block md:text-sm text-xs">
                    CEO Maidencube
                    </span>
                  </div>
                  {/* <div className="h-12 w-12 rounded-full bg-white ml-5"></div> */}
                  <Image
                    // className="h-12 w-12 rounded-full  ml-5"
                    src={kamal}
                    // layout='responsive'
                    quality={100}
                    alt="kamal k"
                    width={15} // Set the width of the image
                    height={15} // Set the height of the image
                    // objectFit="cover"
                    className="h-12 w-12 rounded-full  ml-5 object-cover object-center"
                    sizes="150px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Divider Line */}
            {/* <Image src={DividerLine} alt="divider" className="hidden md:flex md:h-72" /> */}
            <div className="  w-0.5 h-64 bg-white hidden md:block"></div>

            {/* Story 2 */}
            <div className="text-white flex flex-col md:items-start md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#92DEED] mb-4">
                Best Service
              </h2>
              <p className="text-sm md:text-lg mb-4 md:text-left">
                “Tikuntech expertly managed a high-level IT team tailored to our unique technical needs, all at a fraction of the cost. This allowed us to reallocate resources toward marketing and brand growth, fueling our success without stretching our budget”
              </p>
              <div className="flex items-end justify-end w-full">
                <div className="flex items-center justify-end w-full md:gap-2">
                  <div className="text-right ">
                    <span className="block text-lg font-semibold">
                    Harsha G.
                    </span>
                    <span className="block md:text-sm text-xs">
                    CEO Bixcube
                    </span>
                  </div>
                  {/* <div className="h-12 w-12 rounded-full bg-white ml-5"></div> */}
                  <Image
                    // className="h-12 w-12 rounded-full  ml-5"
                    src={harsha}
                    // layout='responsive'
                    quality={100}
                    alt="harsha"
                    width={15} // Set the width of the image
                    height={15} // Set the height of the image
                    // objectFit="cover"
                    className="h-12 w-12 rounded-full  ml-5 object-cover object-center"
                    sizes="150px"
                    priority
                  
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="md:hidden flex flex-col items-center  mt-10 bg-[#11112B]">
          {/* First Row: 3 logos */}
          <div className="p-10">
            <div className="flex justify-center gap-8 mb-4 ">
              <div className="w-20 h-12 ">
                <Image src={SmasungImg} alt="Samsung logo" />
              </div>
              <div className="w-20 h-12">
                <Image src={GoogleImg} alt="Google logo" />
              </div>
              <div className="w-20 h-12">
                <Image src={AmazonImg} alt="Amazon logo" />
              </div>
            </div>

            {/* Second Row: 2 logos */}
            <div className="flex justify-center gap-8">
              <div className="w-24 h-12">
                <Image src={WindowsImg} alt="Windows logo" />
              </div>
              <div className="w-24 h-12">
                <Image src={SonyImg} alt="Sony logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block  ">
        <HomeLogoIcons />
      </div>
    </>
  )
}

export default ClientStory
