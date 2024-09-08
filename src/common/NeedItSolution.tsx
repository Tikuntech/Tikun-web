import React from 'react';
import Image from 'next/image';
import BoxImg from '../../public/aboutus/Vector (1).svg'; 
import backgroundImg from '../../public/Footer/WireframeLine.svg';
import { FaArrowRightLong } from 'react-icons/fa6';

// Array of image properties
const images = [
  { src: BoxImg, alt: 'Decorative graphic 1', width: 30, height: 40 },
  { src: BoxImg, alt: 'Decorative graphic 2', width: 40, height: 40 },
  // Add more images as needed
];

// Function to generate random position
const getRandomPosition = () => ({
  top: `${Math.random() * 10 + 10}%`, 
  left: `${Math.random() * 80 + 10}%`, 
});

const NeedItSolution: React.FC = () => {
  return (
    <div className='relative h-screen overflow-hidden flex flex-col items-center justify-center bg-[#11112B]'>
      <Image 
        src={backgroundImg} 
        alt='Background pattern' 
        layout='fill' 
        objectFit='cover' 
        quality={100} 
        priority 
        className='absolute inset-0 '
      />
      <h1 className="relative z-10 text-white md:text-6xl text-3xl font-bold text-center md:mb-10 pt-10">
        Need IT Solutions?
      </h1>
      <h1 className="relative z-10 md:text-6xl font-bold mt-5 text-white text-center text-3xl ">
        Let’s <span className='font-thin italic '>start now.</span>
      </h1>
     
     <div className='mt-20'>
      <button className=' text-white bg-[#11112B] p-3   rounded-lg border border-white flex items-center justify-center'>
        GET FREE CONSULTATION <FaArrowRightLong className='ml-3 w-5 h-5' />
      </button>

      <div className='hidden md:flex'>
    
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
      </div>
    </div>
  );
};

export default NeedItSolution;
