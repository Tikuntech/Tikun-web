import React from 'react';
import Image from 'next/image';
import ExpertiesImg from '../../../public/Home/Vector (3).svg'; 
import TechnologyImg from '../../../public/Home/Vector (4).svg'; 
import SolutionImg from '../../../public/Home/Vector (5).svg'; 
import ResultImg from '../../../public/Home/Vector (6).svg'; 

const items = [
  { 
    src: ExpertiesImg, 
    alt: "Expertise", 
    width: 130, 
    height: 130, 
    heading: "Expertise", 
    description: "Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs." 
  },
  { 
    src: TechnologyImg, 
    alt: "Technology", 
    width: 100, 
    height: 100, 
    heading: "Technology", 
    description: "We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available." 
  },
  { 
    src: SolutionImg, 
    alt: "Solution", 
    width: 130, 
    height: 130, 
    heading: "Solutions", 
    description: "We take a personalized approach to every project, working closely with you to understand your business and create solutions." 
  },
  { 
    src: ResultImg, 
    alt: "Result", 
    width: 100, 
    height: 100, 
    heading: "Results", 
    description: "Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions." 
  },
];

const ChooseUs: React.FC = () => {
  return (
    <div className='bg-[#11112B] md:py-12 md:px-4  '>
   

      <div className='md:flex md:flex-row md:flex-wrap md:justify-center gap-8'>
        {items.map((item, index) => (
          <div 
            key={index} 
            className='rounded-lg bg-[#1A1A3D] p-6 w-full sm:w-80 md:w-96 lg:w-80  items-center md:text-left'
          >
            <div className='md:flex-shrink-0 md:mr-4  '>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className='object-contain '
              />
            </div>
            <div className='flex-grow mt-10'>
              <h2 className='text-lg md:text-xl font-semibold text-white mb-2'>{item.heading}</h2>
              <p className='text-sm md:text-base text-white'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
