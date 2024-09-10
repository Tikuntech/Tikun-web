import React from 'react'
import BoxImg from '/public/aboutus/Vector.svg'
import Image from 'next/image'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const LetsGetTouch: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8">
      {/* Heading Section */}
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/2">
        <Image
          src={BoxImg}
          alt="Box Image"
          width={40}
          height={40}
          className="object-contain mb-4 md:mb-6"
        />
        <h2 className="text-2xl md:text-4xl text-white font-bold md:mt-14 text-center md:text-left mt-20">
          Let’s get in touch!
        </h2>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 md:w-1/2">
        {/* Phone Card */}
        <div className="rounded-2xl shadow-md p-6 bg-gradient-to-b from-slate-500 to-slate-800 flex flex-col items-center text-white w-full md:w-2/3">
          <FaPhoneAlt className="w-12 h-12 border border-white rounded-full p-3 text-white" />
          <p className="mt-4 text-lg">Phone</p>
          <p className="text-center text-sm">+123 456 7890</p>
        </div>

        {/* Email Card */}
        <div className="rounded-2xl shadow-md p-6 bg-gradient-to-b from-slate-500 to-slate-800 flex flex-col items-center text-white w-full md:w-5/6">
          <MdEmail className="w-12 h-12 border border-white rounded-full p-3 text-white" />
          <p className="mt-4 text-lg">Email</p>
          <p className="text-center text-sm">contact@example.com</p>
        </div>
      </div>
    </div>
  )
}

export default LetsGetTouch
