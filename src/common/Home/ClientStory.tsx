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

const ClientStory: React.FC = () => {
  return (
    <div className="bg-[#11112B] flex flex-col min-h-screen ">
      {/* Header */}
      <header className="text-white flex md:justify-between md:items-center p-8 md:pt-20 md:-mb-20  ">
        <h1 className="text-4xl md:text-6xl md:pl-7 font-semibold">Client Stories</h1>
        {/* <FaArrowRightLong className="hidden md:block text-2xl" /> */}
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row p-8 md:p-16 gap-8  items-center justify-center">
        {/* Story Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Story 1 */}
          <div className="text-white flex flex-col md:items-start md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#92DEED] mb-4">
              Amazing!
            </h2>
            <p className="text-sm md:text-lg mb-4 md:text-left  text-white">
              “Tikuntech’s cybersecurity solution gave us the peace of mind we
              needed to focus on our business. They took the time to understand
              our unique needs and created a solution that protected our
              sensitive data and ensured compliance with industry regulations.”
            </p>
            <div className="flex items-end justify-end w-full">
              <div className="flex text-right md:gap-2">
                <div className="text-white">
                  <span className="block md:text-lg font-semibold">
                    Tom Johnson
                  </span>
                  <span className="block md:text-sm text-xs">
                    CIO of Mika Medika Healthcare
                  </span>
                </div>
                <div className="h-12 w-12 rounded-full bg-white ml-5"></div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <Image src={DividerLine} alt="divider" className="hidden md:flex" />

          {/* Story 2 */}
          <div className="text-white flex flex-col md:items-start md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#92DEED] mb-4">
              Best Service
            </h2>
            <p className="text-sm md:text-lg mb-4 md:text-left">
              “We were struggling to keep up with the demands of our growing
              business until we partnered with Tikuntech. Their custom software
              development solution has helped us streamline our operations and
              improve efficiency, saving us time and money.”
            </p>
            <div className="flex items-end justify-end w-full">
              <div className="flex items-center justify-end w-full md:gap-2">
                <div className="text-right ">
                  <span className="block text-lg font-semibold">Jane Doe</span>
                  <span className="block md:text-sm text-xs">COO of Manufacturing</span>
                </div>
                <div className="h-12 w-12 rounded-full bg-white ml-5"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="md:hidden flex flex-col items-center gap-2 mt-10  bg-[#11112B]">
        {/* First Row: 3 logos */}
        <div className="flex justify-center gap-8 mb-4 ml">
          <div className="w-24 h-12">
            <Image src={SmasungImg} alt="Samsung logo" width={90} height={70} />
          </div>
          <div className="w-24 h-12">
            <Image src={GoogleImg} alt="Google logo" width={90} height={70} />
          </div>
          <div className="w-24 h-12">
            <Image src={AmazonImg} alt="Amazon logo" width={90} height={70} />
          </div>
        </div>

        {/* Second Row: 2 logos */}
        <div className="flex justify-center gap-8">
          <div className="w-24 h-12">
            <Image src={WindowsImg} alt="Windows logo" width={70} height={50} />
          </div>
          <div className="w-24 h-12">
            <Image src={SonyImg} alt="Sony logo" width={70} height={50} />
          </div>
        </div>
      </footer>

      <div className="hidden md:block -mt-28">
        <LogoIcon />
      </div>
    </div>
  )
}

export default ClientStory
