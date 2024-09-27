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
import joshua from '/public/Home/joshua.png'

const ClientStory: React.FC = () => {
  return (
    <>
    <div className="bg-[#11112B] flex flex-col min-h-screen md:pl-9 md:pr-5">
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
                {/* <div className="h-12 w-12 rounded-full bg-white ml-5"></div> */}
                <Image
                  className="h-12 w-12 rounded-full bg-white ml-5"
                  src={joshua}
                  alt="Joshua"
                  width={15} // Set the width of the image
                  height={15} // Set the height of the image
                  quality={90} // Adjust quality if needed
                />
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
                  <span className="block md:text-sm text-xs">
                    COO of Manufacturing
                  </span>
                </div>
                {/* <div className="h-12 w-12 rounded-full bg-white ml-5"></div> */}
                <Image
                  className="h-12 w-12 rounded-full bg-white ml-5"
                src={"data:image/jpeg;base64,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"}
                  alt="Joshua"
                  width={15} // Set the width of the image
                  height={15} // Set the height of the image
                  quality={90} // Adjust quality if needed
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="md:hidden flex flex-col items-center  mt-10 bg-[#11112B]">
        {/* First Row: 3 logos */}
        <div className='p-10'>
        <div className="flex justify-center gap-8 mb-4 ">
          <div className="w-20 h-12 ">
            <Image src={SmasungImg} alt="Samsung logo"  />
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
            <Image src={WindowsImg} alt="Windows logo"  />
          </div>
          <div className="w-24 h-12">
            <Image src={SonyImg} alt="Sony logo" />
          </div>
        </div>
        </div>
       
      </div>

     
    </div>

    <div className="hidden md:block md:-mt-80  ">
        <LogoIcon />
      </div>
    </>
  )
}

export default ClientStory
