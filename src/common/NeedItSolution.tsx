import React from 'react'
import Image from 'next/image'
import BoxImg from '/public/aboutus/Vector.svg'
import backgroundImg from '/public/Footer/WireframeLine.svg'
import { FaArrowRightLong } from 'react-icons/fa6'
import HomeArrowIcon from '/public/Home/HomeArrowIcon.svg'
import Link from 'next/link'

// Array of image properties
const images = [
  { src: BoxImg, alt: 'Decorative graphic 1', width: 20, height: 20 },
  { src: BoxImg, alt: 'Decorative graphic 2', width: 40, height: 40 },

  // Add more images as needed
]

// Function to generate random position
const getRandomPosition = () => ({
  top: `${Math.random() * 10 + 10}%`,
  left: `${Math.random() * 80 + 10}%`,
})

const NeedItSolution: React.FC = () => {
  return (
    <div className="relative md:h-full overflow-hidden flex flex-col items-center justify-center bg-[#11112B]">
      <Image
        src={backgroundImg}
        alt="Background pattern"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 "
      />
      <h1 className="relative z-10 text-white md:text-7xl text-3xl font-medium text-center md:mb-5 pt-20">
        Need IT Solutions?
      </h1>
      <h1 className="relative z-10 md:text-7xl font-medium  text-white text-center text-3xl ">
        Let’s <span className="font-thin italic ">start now.</span>
      </h1>

      <div className="hidden md:flex sm:flex">
        {images.map((image, index) => (
          <div key={index} className="absolute" style={getRandomPosition()}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
      <Link href={'/contactUs'}>
        <div className="relative z-10">
          <button className="cursor-pointer mt-14  md:mb-28  text-white p-4 bg-[#11112B]   rounded-md border border-white flex items-center justify-center">
            GET FREE CONSULTATION
            <Image src={HomeArrowIcon} alt="HomeArrowIcon" className="pl-4" />
          </button>
        </div>
      </Link>
    </div>
  )
}

export default NeedItSolution
