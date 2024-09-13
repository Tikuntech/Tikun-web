'use client'
import React from 'react'
import Image from 'next/image'
import LocationImg from '/public/Contact/Image Placeholder (1).png'
import { FaMapMarkerAlt } from 'react-icons/fa'

const ContactLocation: React.FC = () => {
  return (
    <div className="flex justify-center w-full pt-10">
      {/* Card Container */}
      <div className="relative w-full">
        {/* Image */}
        <Image
          src={LocationImg}
          alt="Location"
          width={700}
          height={450}
          className="object-cover rounded-lg"
        />

        {/* Map Marker Icon */}
        <div className="absolute inset-0 flex justify-center items-start top-4">
          <FaMapMarkerAlt className="absolute md:top-20 top-5 md:left-80 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl" />
        </div>

        {/* Overlay card (Bottom left position) */}
        <div className="absolute -mt-20 left-4 bg-white bg-opacity-50 rounded-lg p-2 w-48">
          <p className="text-left text-black text-xs">
          702 Lakeshore Circle NE Atlanta GA 30324
          </p>
        
        </div>
      </div>
    </div>
  )
}

export default ContactLocation
