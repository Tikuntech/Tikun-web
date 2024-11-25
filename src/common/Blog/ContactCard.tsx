import React from 'react'
import CallIcon from '/public/Blog/Call.svg'
import MailIcon from '/public/Blog/Mail Icon.svg'
import LocationIcon from '/public/Blog/Location Icon.svg'
import Image from 'next/image'
import BoxImg from '/public/aboutus/Vector.svg'
import WireImg from '/public/Blog/WireframeBlog.svg'
import Link from 'next/link'

const images = [
  { src: BoxImg, alt: 'Graphic 1', width: 20, height: 20 },
  { src: BoxImg, alt: 'Graphic 2', width: 30, height: 30 },
  // Add more images as needed
]

const randomPosition = () => ({
  top: `${Math.random() * 20 + 10}%`,
  left: `${Math.random() * 80 + 10}%`,
})

const ContactCard = () => {
  return (
    <div className="relative rounded-2xl shadow-md p-8  h-[500px] bg-[#11112B] mt-4 flex flex-col items-start text-white overflow-hidden ">
      {/* Wireframe image background */}
      <div className="absolute inset-0 z-0 -mt-40">
        <Image
          src={WireImg}
          alt="wireframe"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="relative z-10  space-y-8">
        <h1 className="text-white font-bold text-2xl ">Contact Card</h1>

        <Link href="tel:+14709099027">
          <div className="flex w-full mt-10 items-center">
            <Image src={CallIcon} alt="Call Icon" className="w-12 h-12" />
            <div className="flex flex-col">
              <span className="md:pl-4 pl-3 ">+1 470-909-9027</span>
            </div>
          </div>
        </Link>

        <Link href="mailto:business@tikuntech.com">
          <div className="flex w-full mt-4 items-center">
            <Image src={MailIcon} alt="Mail Icon" className="w-12 h-12" />
            <div className="flex flex-col">
              <span className="md:pl-4 pl-3">business@tikuntech.com</span>
            </div>
          </div>
        </Link>

        <Link href="https://www.google.com/maps?q=702+Lakeshore+Circle+NE,+Atlanta,+GA+30324">
          <div className="flex w-full mt-4 items-center">
            <Image
              src={LocationIcon}
              alt="Location Icon"
              className="w-12 h-12"
            />
            <div className="flex flex-col">
              <span className=" w-full md:pl-4 pl-3">
                702 Lakeshore Circle NE Atlanta GA 30324
              </span>
            </div>
          </div>
        </Link>

        <div className="relative hidden md:block w-full">
          {/* {images.map((img, index) => (
            <div key={index} className="absolute" style={randomPosition()}>
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="object-contain"
              />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default ContactCard
