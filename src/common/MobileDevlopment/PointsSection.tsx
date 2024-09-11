import React, { useState } from 'react'
import MobileImage from '/public/Mobiledevlopment/Frame Photo.svg'
import Image from 'next/image'
import EasyIcon from '/public/Mobiledevlopment/Easy Icon.svg'
import PersonalIcon from '/public/Mobiledevlopment/Heart Icon.svg'
import HighEngagementIcon from '/public/Mobiledevlopment/Share Icon.svg'
import IncreaseIcon from '/public/Mobiledevlopment/Increase Icon.svg'
import OverMobileImg from '/public/Mobiledevlopment/mobileImg.svg'

const PointsSection = () => {
  return (
    <>
      <div
        className="p-6 md:p-12 lg:p-24 flex justify-between flex-col bg-[#D5D9E5]  md:flex-row  w-full "
        style={{ padding: 90 }}
      >
        <div className="flex flex-col w-full md:w-1/2 ">
          <div className="rounded-2xl mt-10 shadow-md  p-6 bg-[#D5D9E5]      flex flex-col items-start">
            <Image src={EasyIcon} alt="EasyIcon" />
            <h2 className="md:text-2xl text-xl mt-10 md:font-semibold font-bold mb-2 text-black">
              Easy Access
            </h2>
            <p className="text-gray-600 md:text-base text-xs ">
              Mobile development services for business to provide convenient
              access to their products and services.
            </p>
          </div>
          <div className="rounded-2xl shadow-md p-6 bg-[#D5D9E5] flex flex-col items-start mt-10">
            <Image src={PersonalIcon} alt="PersonalIcon" />
            <h2 className="md:text-2xl text-xl mt-10  md:font-semibold font-bold mb-2 text-black">
              Personal Experience
            </h2>
            <p className="text-gray-600 md:text-base text-xs">
              Our team builds custom mobile apps for personalized user
              experiences that match with your business goals.
            </p>
          </div>
        </div>

        <div></div>
        <div className="relative w-full    mt-10">
          {/* Image Container */}
          <div className="relative w-full">
            <Image
              src={MobileImage}
              alt="MobileImage"
              layout="responsive"
              width={900}
              height={600}
            />

            {/* Centered Text */}
            <h1 className="absolute inset-0 flex items-center justify-center text-black md:text-4xl font-bold bg-opacity-50  rounded-lg">
              tikuntech
            </h1>
          </div>
        </div>

        <div className="flex flex-col space-y-6 w-full md:w-1/2">
          <div className="rounded-2xl mt-10 shadow-md  p-6 bg-[#D5D9E5]  flex flex-col items-start">
            <Image src={HighEngagementIcon} alt="HighEngagementIcon" />
            <h2 className="md:text-2xl text-xl mt-10  md:font-semibold font-bold mb-2 text-black">
              High Engagement
            </h2>
            <p className="text-gray-600 md:text-base text-xs">
              Our mobile development services enhance user engagement and
              retention for apps usage.
            </p>
          </div>
          <div className="rounded-2xl mt-10 shadow-md  p-6 bg-[#D5D9E5]  flex flex-col items-start">
            <Image src={IncreaseIcon} alt="IncreaseIcon" />
            <h2 className="md:text-2xl text-xl mt-10  md:font-semibold font-bold mb-2 text-black">
              Increase Efficiency
            </h2>
            <p className="text-gray-600 md:text-base text-xs">
              Our mobile development solutions increase efficiency by automating
              processes and streamlining operations.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PointsSection

;<div className="p-6 md:p-12 lg:p-24 flex flex-col md:flex-row justify-between w-full">
  {/* Left Column */}
  <div className="flex flex-col w-full md:w-1/2 space-y-6">
    <div className="rounded-2xl shadow-md p-6 bg-[#D5D9E5] flex flex-col items-start">
      <Image src={EasyIcon} alt="EasyIcon" width={40} height={40} />
      <h2 className="text-xl md:text-2xl mt-4 font-semibold mb-2 text-black">
        Easy Access
      </h2>
      <p className="text-gray-600 text-base">
        Mobile development services for business to provide convenient access to
        their products and services.
      </p>
    </div>
    <div className="rounded-2xl shadow-md p-6 bg-[#D5D9E5] flex flex-col items-start">
      <Image src={PersonalIcon} alt="PersonalIcon" width={40} height={40} />
      <h2 className="text-xl md:text-2xl mt-4 font-semibold mb-2 text-black">
        Personal Experience
      </h2>
      <p className="text-gray-600 text-base">
        Our team builds custom mobile apps for personalized user experiences
        that match with your business goals.
      </p>
    </div>
  </div>

  {/* Mobile Image Section */}
  <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
    <div className="relative">
      <Image
        src={MobileImage}
        alt="MobileImage"
        layout="responsive"
        width={900}
        height={600}
      />
      <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
        tikuntech
      </h1>
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col w-full md:w-1/2 space-y-6 mt-10 md:mt-0">
    <div className="rounded-2xl shadow-md p-6 bg-[#D5D9E5] flex flex-col items-start">
      <Image
        src={HighEngagementIcon}
        alt="HighEngagementIcon"
        width={40}
        height={40}
      />
      <h2 className="text-xl md:text-2xl mt-4 font-semibold mb-2 text-black">
        High Engagement
      </h2>
      <p className="text-gray-600 text-base">
        Our mobile development services enhance user engagement and retention
        for apps usage.
      </p>
    </div>
    <div className="rounded-2xl shadow-md p-6 bg-[#D5D9E5] flex flex-col items-start">
      <Image src={IncreaseIcon} alt="IncreaseIcon" width={40} height={40} />
      <h2 className="text-xl md:text-2xl mt-4 font-semibold mb-2 text-black">
        Increase Efficiency
      </h2>
      <p className="text-gray-600 text-base">
        Our mobile development solutions increase efficiency by automating
        processes and streamlining operations.
      </p>
    </div>
  </div>
</div>
