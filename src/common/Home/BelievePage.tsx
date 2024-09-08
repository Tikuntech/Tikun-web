import React from 'react';
import BopxImg from '../../../public/Home/Vector (7).svg';
import Image from 'next/image';
import LineImg from '../../../public/Home/Line.svg'

const BelievePage: React.FC = () => {
  return (
    <main className="py-12 px-6 md:px-12 bg-[#D5D9E5] md:h-screen">
      <section className="container mx-auto">
        {/* Logo Section */}
        <div className="md:flex justify-center hidden ">
          <Image src={BopxImg} alt="BoxImg" className="w-10 h-10 mt-20" />
        </div>

        {/* Main Text Section */}
        <div className="text-center ">
          <p className="md:text-6xl text-2xl text-[#11112B] font-light md:mt-20 pt-10">
            <span className="font-bold ">We believe that </span>
            <span className="font-light italic">technology</span>
            <br />
            can <span className="font-bold">change</span> the world.
          </p>
          <p className="text-lg text-gray-800 mt-20">
            That's why we're committed to delivering innovative IT solutions to businesses of all sizes. Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-row md:flex-row items-center justify-center mt-20">
          <div className="flex-1 md:p-6 md:text-center border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black">
            <h2 className="md:text-4xl md:font-semibold font-bold  text-gray-800">500+</h2>
            <p className="text-black  mt-2 md:text-sm text-xs">Successful Projects</p>
          </div>
    
       <Image src={LineImg} alt='Line'className='h-2 w-5'/>
   
       
          <div className="flex-1 md:p-6 text-center border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black">
            <h2 className="md:text-4xl md:font-semibold font-bold text-lg text-gray-800">98%</h2>
            <p className="text-black   mt-2 md:text-sm text-xs">Satisfied Clients</p>
          </div>
          
          <Image src={LineImg} alt='Line' className='h-2 w-5' />

          <div className="flex-1 p-6 text-center border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black">
            <h2 className="md:text-4xl md:font-semibold font-bold  text-gray-800">35+</h2>
            <p className="text-black  mt-2 md:text-sm text-xs">Handled Countries</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BelievePage;
