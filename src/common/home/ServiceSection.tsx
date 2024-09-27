import React from 'react'
import ServiceLine from '/public/Home/ServiceLine.svg'
import Image from 'next/image'
import CyberImg from '/public/Home/ImagePlaceholder.png'
import ServiceArrowIcon from '/public/Service/ServiceArrowIcon.svg'

import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'

const ServiceSection: React.FC = () => {
  return (
    <main className=" bg-[#D5D9E5]  md:p-0 w-full md:pl-8 md:pr-4 pl-7 pr-4 ">
      <section className="md:p-10">
        {/* Logo Section */}
        <div className="flex justify-center ">
          <p className="font-bold md:text-6xl mt-20 text-4xl">Service</p>
        </div>
        <div className=''>
          <Link href="/webDevelopment">
            <div className="flex justify-between mt-10 font-extralight ">
              <h1 className="md:text-4xl hover:text-custom-blue mb-8 font-thin text-2xl ">
                Web Development
              </h1>

              <div className="text-black pr-3">
                <Image src={ServiceArrowIcon} alt="HomeArrowIcon" />
              </div>
            </div>
          </Link>
          <Image src={ServiceLine} alt="Line" />
        </div>

        <div className=''>
          <Link href="/mobileDevelopment">
            <div className="flex justify-between md:mt-14 font-extralight ">
              <h1 className="md:text-4xl text-2xl hover:text-custom-blue  mb-8 ">
                Mobile Development
              </h1>
              <Image src={ServiceArrowIcon} alt="HomeArrowIcon" />
            </div>
          </Link>
          <Image src={ServiceLine} alt="Line" />
        </div>
        <div className="md:flex ' ">
          <div className="md:pt-10">
            <p className="font-semibold text-3xl ">Cyber Security</p>
            <p className="mt-5 w-2/3 ">
              Our cyber security service provides advanced protection for your
              data and systems against potential threats and attacks, ensuring
              your business operates securely and efficiently.
            </p>
            <FaArrowRightLong className="text-4xl mt-5" />
          </div>
          <Image src={CyberImg} alt="cyberImg" className="mt-5  " />
        </div>
        <Image src={ServiceLine} alt="Line" className="mt-5 " />

        <Link href="/digitalMarketing">
          <div className="flex justify-between md:mt-20 font-extralight  ">
            <h1 className="md:text-4xl text-2xl hover:text-custom-blue   mb-10 font-thin ">
              Digital Marketing
            </h1>
            <Image src={ServiceArrowIcon} alt="HomeArrowIcon" />
          </div>
        </Link>
        <Image src={ServiceLine} alt="Line" className="pb-10 " />
      </section>
    </main>
  )
}

export default ServiceSection
