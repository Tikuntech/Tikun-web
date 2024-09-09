import React from 'react';
import Image from 'next/image';
import BoxImg from '/public/aboutus/Vector.svg'; 
import backgroundImg from '/public/Home/Wireframe Vector.png';
import ChooseUs from '@/common/Home/ChooseUs';
import { FaArrowRightLong } from 'react-icons/fa6';
import MainTextImg from '/public/Home/YOUR BEST.png';
import SubTextImg from '/public/Home/Frame 2.png';
import BelievePage from '@/common/Home/BelievePage';
import MainHome from '@/common/Home/MainHome';

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

const HeroPage: React.FC = () => {
  return (

    <>

{/* <MainHome/> */}
    <div className='relative md:h-[1300px] bg-[#11112B] overflow-hidden flex flex-col items-center justify-center '>
      
      <div className='text-center mt-12 md:mt-0 md:w-1/2 '>
        <div className='relative inline-block w-72 md:w-full '>
          <Image
            src={MainTextImg}
            alt='Main promotional text'
            layout='intrinsic'
            quality={100}
            className='items-center justify-center'
          />
        </div>
        <div className='text-center w-64 inline-block  md:w-auto'>
        <Image
          src={SubTextImg}
          alt='Subtext highlighting benefits'
          layout='intrinsic'
          quality={100}
          className='w-full h-auto mt-4   '
        />

        </div>
        
        <p className='text-white md:text-base text-sm md:w-full mx-auto mt-5 w-3/4'>
          From custom software development to cybersecurity, our team of experts is dedicated
          to delivering solutions that are tailored to your unique needs.
        </p>
      </div>
      
      <button className='mt-20 text-white bg-[#11112B] p-3 rounded-lg border border-white flex items-center justify-center'>
        EXPLORE NOW <FaArrowRightLong className='ml-3 w-5 h-5' />
      </button>
      
    <div className=''>
       <Image 
        src={backgroundImg} 
        alt='Background pattern' 
        layout='fill' 
        objectFit='cover' 
        quality={100} 
        priority 
       className='absolute inset-0 '
      />
    </div>
     
    
    
    
     <div className='hidden md:flex sm:flex'>
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

      <div className='md:mt-14   mt-10'>
        <div className=' hidden md:text-left mb-10 md:flex gap-2 md:gap-0 md:flex-col '>
          <p className='text-white md:text-6xl font-bold mb-2 md:pl-20  '>Why</p>
          <p className='text-white md:text-6xl font-bold md:pl-20'>Choose Us?</p>
          {/* <h1 className='text-white font-bold  text-2xl md:hidden'> Why Choose Us?</h1> */}
        </div>

        <h1 className='text-white font-bold text-center text-2xl md:hidden'> Why Choose Us?</h1>
        <ChooseUs/>
      </div>


     

    </div>

    </>
  );
};

export default HeroPage;
