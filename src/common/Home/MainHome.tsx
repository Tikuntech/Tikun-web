import React from 'react';
import Image from 'next/image';
import BoxImg from '/public/aboutus/Vector.svg'; 
import backgroundImg from '../../../public/Home/Wireframe Vector.png';
import ChooseUs from '@/common/Home/ChooseUs';
import { FaArrowRightLong } from 'react-icons/fa6';
import MainTextImg from '/public/Home/YOUR BEST.png';
import SubTextImg from '/public/Home/Frame 2.png';
import BelievePage from '@/common/Home/BelievePage';

// Array of image properties
const images = [
  { src: BoxImg, alt: 'Decorative graphic 1', width: 30, height: 40 },
  { src: BoxImg, alt: 'Decorative graphic 2', width: 40, height: 40 },
  // Add more images as needed
];

// Function to generate random position
const getRandomPosition = () => ({
  top: `${Math.random() * 10 + 10}%`,
  left: `${Math.random() * 20 + 10}%`,
});

const MainHome: React.FC = () => {
  return (
    <div className=' bg-[#11112B] overflow-hidden flex flex-col items-center justify-center mt-80'>
      
      <div className='text-center -mt-28'>
        <div className='relative inline-block'>
          <Image
            src={MainTextImg}
            alt='Main promotional text'
            layout='intrinsic'
            quality={100}
            className='w-full h-auto'
          />
        </div>
        <Image
          src={SubTextImg}
          alt='Subtext highlighting benefits'
          layout='intrinsic'
          quality={100}
          className='w-[700px] h-auto mt-4 ml-56 '
        />

        <p className='text-white text-base w-1/2 mx-auto mt-5'>
          From custom software development to cybersecurity, our team of experts is dedicated
          to delivering solutions that are tailored to your unique needs.
        </p>
      </div>
      
      <button className='mt-20 text-white bg-[#11112B] p-3 rounded-lg border border-white flex items-center justify-center'>
        EXPLORE NOW <FaArrowRightLong className='ml-3 w-5 h-5' />
      </button>
      
      {/* Background Image */}
      <Image 
        src={backgroundImg} 
        alt='Background pattern' 
        layout='fill' 
        objectFit='cover' 
        quality={100} 
        priority 
        className='absolute '
      />
      
      {/* Overlay images with random positions */}
      {images.map((image, index) => (
        <div 
          key={index} 
          className='absolute'
          style={getRandomPosition()}
        >
          <Image 
            src={image.src} 
            alt={image.alt} 
            width={image.width} 
            height={image.height} 
          />
        </div>
      ))}
      </div>
  )}

  export default  MainHome;