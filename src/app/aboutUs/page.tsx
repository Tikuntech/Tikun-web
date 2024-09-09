"use client";
import React from 'react';
import Image from 'next/image';
import BoxImg from '../../../public/aboutus/Vector (1).svg'; 
import OverflowCard from '@/common/OverflowCard';
import AboutBreadcrumbs from '@/common/BreadCrumb/BreadCrumbAbout';
import AboutMain from '@/common/About/AboutMain';
import AboutVideo from '@/common/About/AboutVideo';
import NeedItSolution from '@/common/NeedItSolution';
import LogoIcon from '@/common/LogoIcons';
import NavbarHeader from '@/components/Navbar';
import Footer from '@/components/Footer';

const images = [
  { src: BoxImg, alt: "Graphic 1", width: 30, height: 40 },
  { src: BoxImg, alt: "Graphic 2", width: 40, height: 40 },
  { src: BoxImg, alt: "Graphic 3", width: 70, height: 50 },
  // Add more images as needed
];

const randomPosition = () => ({
  top: `${Math.random() * 60 + 10}%`, 
  left: `${Math.random() * 50 + 10}%`, 
});

const Page: React.FC = () => {
  return (
    <>
      <NavbarHeader/>
      <div className='bg-[#11112B] h-screen pl-4 md:pl-32 relative'>
        <div className='pt-10 md:pt-20'>
          <AboutBreadcrumbs/>
          <div className='flex flex-col md:flex-row items-start space-y-8 md:space-x-8 md:space-y-0'>
            <h1 className='text-4xl md:text-7xl text-white font-bold flex-shrink-0'>
              About Us
            </h1>
            <div className='relative hidden md:block w-full h-64 md:h-96'>
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

          <div className='flex flex-col md:flex-row justify-between items-start mt-8'>
            <div className='flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/2'>
              <Image 
                src={BoxImg} 
                alt="Box Image" 
                width={40} 
                height={40}
                className='object-contain mb-4 md:mb-2 hidden md:block'
              />
              <h1 className='text-2xl md:text-xl text-white font-bold mt-8 md:mt-24'>
                We believe that technology can change the world.
              </h1>
            </div>

            <div className='text-white md:w-1/2'>
              <p className='mb-4 text-sm md:text-base'>
                That's why we're committed to delivering innovative IT solutions to businesses of all sizes. Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape.
              </p>

              <p className='text-sm md:text-base'>
                We are an IT company that offers a wide range of services to help businesses succeed in the digital world. Our expertise includes web development, mobile development, cloud computing, cybersecurity, and digital marketing. We provide customized solutions to meet the unique needs of each of our clients’ business from every size and nation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 mb-20'>
        <AboutMain />
      </div>

      <div className='relative'>
        <AboutVideo />
        <div className='absolute inset-0 flex items-center justify-center md:-mt-[700px] -mt-[200px] '>
          <OverflowCard />
        </div>
      </div>

      <div className='text-center '>
        <LogoIcon />
      </div>

      <NeedItSolution />
      
      <Footer />
    </>
  );
};

export default Page;
