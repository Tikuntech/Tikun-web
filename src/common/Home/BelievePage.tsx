import React from 'react';
import Image from 'next/image';
import BopxImg from '../../../public/Home/Vector (7).svg';
import LineImg from '../../../public/Home/Line.svg';


const BelievePage: React.FC = () => {
  return (
    <main className=" px-6 md:px-12 bg-[#D5D9E5] md:h-screen">
      <section className="container mx-auto">
        {/* Logo Section */}
        <div className=" justify-center hidden md:flex ">
          <Image src={BopxImg} alt="BoxImg" className="w-10 h-10 mt-10" />
        </div>

        {/* Main Text Section */}
        <div className="text-center pt-10">
          <p className="md:text-6xl text-2xl text-[#11112B]  ">
            <span className="font-bold">We believe that </span>
            <span className=" font-extralight" style={{fontStyle:'italic'}}>technology</span>
            <br />
            <span className='font-bold'> can </span>
            <span className="text-gray-400 font-bold text-xl ">change </span>
          <span className='font-bold'>the world.</span>
          </p>
          <p className="text-lg text-gray-800 mt-10 md:mt-20 px-4">
            That's why we're committed to delivering innovative IT solutions to businesses of all sizes. Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex  md:flex-row items-center justify-center mt-20 gap-4 md:gap-8">
          <div className="flex-1 p-6 text-center border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black">
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800">500+</h2>
            <p className="text-black mt-2 text-sm">Successful Projects</p>
          </div>
          
          <div className="flex items-center">
            <Image src={LineImg} alt='Line'  />
          </div>

          <div className="flex-1 p-6 text-center border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black">
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800">98%</h2>
            <p className="text-black mt-2 text-sm">Satisfied Clients</p>
          </div>

          <div className="flex items-center">
            <Image src={LineImg} alt='Line'  />
          </div>

          <div className="flex-1 p-6 text-center border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black">
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800">35+</h2>
            <p className="text-black mt-2 text-sm">Handled Countries</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BelievePage;
