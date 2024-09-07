import React from 'react';
import BoxImg from '../../../public/aboutus/Vector (1).svg';
import Image from 'next/image';

import ServiceBreadCrumb from '@/common/BreadCrumb/ServiceBreadCrumb';
import MainCardContain from '@/common/Service/MainCardContain';
import ServiceWorks from '@/common/Service/ServiceWorks';
import { ServiceCards } from '@/common/Service/ServiceCards';






const images = [
  { src: BoxImg, alt: "Graphic 1", width: 30, height: 40 },
  { src: BoxImg, alt: "Graphic 2", width: 40, height: 40 },

  // Add more images as needed
];

const randomPosition = () => ({
  top: `${Math.random() * 10 + 10}%`,
  left: `${Math.random() * 80 + 10}%`,
});

const cardData = Array.from({ length: 9 }, (_, index) => ({
  title: `Card ${index + 1}`,
  description: `Description for card ${index + 1}`,
  imageUrl: BoxImg.src,
}));

const Page: React.FC = () => {
  return (
    <>
      <div className='bg-[#11112B]  pl-4 relative'>
        <div className='pt-10 md:pt-20'>
          <div className='md:ml-32'>
            <ServiceBreadCrumb />
          </div>

          <div className='flex flex-col md:flex-row items-start space-y-8 md:space-x-8 md:space-y-0'>
            <h1 className='text-4xl md:text-7xl text-white font-bold flex-shrink-0 md:ml-32'>
              Services
            </h1>
            <div className='relative hidden md:block w-full  '>
              {images.map((img, index) => (
                <div
                  key={index}
                  className='absolute'
                  style={randomPosition()}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className='object-contain'
                  />
                </div>
              ))}
            </div>
            </div>
     </div>
       </div>  

       {/* <MainCardContain/> */}
       <div className='bg-[#11112B] p-28'>
        
    <ServiceCards/>
   </div> 
   <div className='bg-[#11112B]'>
   <ServiceWorks/>
   </div>
       
    </>
  );
}

export default Page;
