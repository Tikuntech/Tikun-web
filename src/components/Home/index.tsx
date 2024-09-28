import React from 'react'
import Image from 'next/image'
import BoxImg from '/public/aboutus/Vector.svg'
import backgroundImg from '/public/Home/WireframeHeroPage.svg'
import ChooseUs from '@/common/home/ChooseUs'
import { FaArrowRightLong } from 'react-icons/fa6'
import MainTextImg from '/public/Home/YOUR BEST.png'
import SubTextImg from '/public/Home/Frame 2.png'
import BelievePage from '@/common/home/BelievePage'
// import MainHome from '@/common/Home/MainHome'
import HomeArrowIcon from '/public/Home/HomeArrowIcon.svg'
import { ExploreNowButton } from '@/common/ExploreNowButton'

// Array of image properties
const images = [
  { src: BoxImg, alt: 'Decorative graphic 1', width: 30, height: 40 },
  { src: BoxImg, alt: 'Decorative graphic 2', width: 50, height: 50 },
]

// Function to generate random position
const getRandomPosition = () => ({
  top: `${Math.random() * 10 + 10}%`,
  left: `${Math.random() * 90 + 10}%`,
})

// const HeroPage: React.FC = () => {
//   return (
//     <>
//       {/* <MainHome/> */}
//       <div className="relative  bg-[#11112B]   flex-col items-center  justify-center ">
//         <div className="text-center pt-32 md:mt-0 md:w-1/2 ">
//           <div className="relative inline-block w-72 md:w-full ">
//             <Image
//               src={MainTextImg}
//               alt="Main promotional text"
//               layout="intrinsic"
//               quality={100}
//               className="items-center justify-center"
//             />
//           </div>
//           <div className="text-center w-64 inline-block  md:w-auto">
//             <Image
//               src={SubTextImg}
//               alt="Subtext highlighting benefits"
//               layout="intrinsic"
//               quality={100}
//               className="w-full h-auto mt-4   "
//             />
//           </div>

//           <p className="text-white md:text-base text-sm md:w-full mx-auto mt-5 w-3/4">
//             From custom software development to cybersecurity, our team of
//             experts is dedicated to delivering solutions that are tailored to
//             your unique needs.
//           </p>
//         </div>

//         <div className="hidden md:block md:pt-10">
//           <Image
//             src={backgroundImg}
//             alt="Background pattern"
//             layout="fill"
//             objectFit="cover"
//             quality={100}
//             priority
//             className="absolute inset-0 "
//           />
//         </div>
//         {/* Explore Now Button */}
//         <div className="relative z-10 md:-top-14">
//           <ExploreNowButton />
//         </div>

//         <div className="hidden md:flex sm:flex">
//           {images.map((image, index) => (
//             <div key={index} className="absolute" style={getRandomPosition()}>
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={image.width}
//                 height={image.height}
//               />
//             </div>
//           ))}
//         </div>

//         <div className="md:mt-14 p-1  mt-10 md:pl-16">
//           <div className=" hidden md:text-left mb-10 md:flex gap-2 md:gap-0 md:flex-col ">
//             <p className="text-white md:text-6xl font-bold mb-2   ">
//               Why
//             </p>
//             <p className="text-white md:text-6xl font-bold ">
//               Choose Us?
//             </p>
//           </div>

//           <h1 className="text-white font-bold text-center text-2xl md:hidden">
//             {' '}
//             Why Choose Us?
//           </h1>
//           <ChooseUs />
//         </div>
//       </div>
//     </>
//   )
// }


const HeroPage: React.FC = () => {
  return (
    <>
      {/* <MainHome/> */}
      <div className="relative bg-[#11112B] flex flex-col items-center justify-center p-4 md:p-8 1366px:pt-40">
  <div className="text-center pt-32 md:pt-0 md:mt-0 md:w-1/2 max-w-screen-lg mx-auto">
    <div className="relative inline-block w-72 md:w-full">
      <Image
        src={MainTextImg}
        alt="Main promotional text"
        layout="intrinsic"
        quality={100}
        className="items-center justify-center"
      />
    </div>
    <div className="text-center w-64 inline-block md:w-auto">
      <Image
        src={SubTextImg}
        alt="Subtext highlighting benefits"
        layout="intrinsic"
        quality={100}
        className="w-full h-auto mt-4"
      />
    </div>

    <p className="text-white md:text-base text-sm md:w-full mx-auto mt-5 w-3/4">
      From custom software development to cybersecurity, our team of experts is dedicated to delivering solutions that are tailored to your unique needs.
    </p>
  </div>

  <div className="hidden md:block md:pt-10">
    <Image
      src={backgroundImg}
      alt="Background pattern"
      layout="fill"
      objectFit="cover"
      quality={100}
      priority
      className="absolute inset-0"
    />
  </div>

  {/* Explore Now Button */}
  <div className="relative z-10 md:-top-14">
    <ExploreNowButton />
  </div>

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

  <div className="md:mt-14 p-1 mt-10 md:pl-16">
    <div className="hidden md:text-left mb-10 md:flex gap-2 md:gap-0 md:flex-col">
      <p className="text-white md:text-6xl font-bold mb-2">Why</p>
      <p className="text-white md:text-6xl font-bold">Choose Us?</p>
    </div>

    <h1 className="text-white font-bold text-center text-2xl md:hidden">
      Why Choose Us?
    </h1>
    <ChooseUs />
  </div>
</div>

    </>
  )
}

export default HeroPage
