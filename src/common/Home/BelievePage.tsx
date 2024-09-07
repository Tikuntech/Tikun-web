import React from 'react';
import BopxImg from '../../../public/Home/Vector (7).svg';
import Image from 'next/image';
import LineImg from '../../../public/Home/Line.svg'

const BelievePage: React.FC = () => {
  return (
    <main className="py-12 px-6 md:px-12 bg-[#D5D9E5] h-screen">
      <section className="container mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center ">
          <Image src={BopxImg} alt="BoxImg" className="w-10 h-10 mt-20" />
        </div>

        {/* Main Text Section */}
        <div className="text-center ">
          <p className="text-6xl text-[#11112B] font-light mt-20">
            <span className="font-bold">We believe that </span>
            <span className="font-light italic">technology</span>
            <br />
            can <span className="font-bold">change</span> the world.
          </p>
          <p className="text-lg text-gray-800 mt-20">
            That's why we're committed to delivering innovative IT solutions to businesses of all sizes. Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-20">
          <div className="flex-1 p-6 text-center border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black">
            <h2 className="text-4xl font-semibold text-gray-800">500+</h2>
            <p className="text-gray-600 mt-2 text-sm">Successful Projects</p>
          </div>
        <Image src={LineImg} alt='Line'/>
          <div className="border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black"></div>
          <div className="flex-1 p-6 text-center border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black">
            <h2 className="text-4xl font-semibold text-gray-800">98%</h2>
            <p className="text-gray-600 mt-2 text-sm">Satisfied Clients</p>
          </div>
          <Image src={LineImg} alt='Line'/>
          <div className="border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black"></div>
          <div className="flex-1 p-6 text-center border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black">
            <h2 className="text-4xl font-semibold text-gray-800">35+</h2>
            <p className="text-gray-600 mt-2 text-sm">Handled Countries</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BelievePage;
