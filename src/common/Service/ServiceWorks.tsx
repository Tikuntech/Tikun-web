import React from 'react';
import { TbWorld } from 'react-icons/tb';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoIosPhonePortrait } from 'react-icons/io';
import Image from 'next/image';
import ServiceRectangle from '../../../public/Service/steperRectangle.svg'

const ServiceWorks: React.FC = () => {
  return (
    <div className=" bg-gray-900 text-white py-12 px-4 flex justify-center ">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-20">How It Works</h1>
        <ol className="relative ">
          {/* Step 1 */}
          {/* <div className="rounded-xl shadow-md p-4  h-48 bg-gradient-to-b from-slate-500 to-slate-800  items-start text-white">
  ..
</div> */}
<div className="flex justify-center items-center h-screen">
  <Image src={ServiceRectangle} alt="rectangle" />
</div>



          <li className="relative flex justify-center items-center after:content-[''] after:w-0.5 after:h-full after:bg-indigo-600 after:absolute after:-bottom-8 after:left-1/2 after:transform after:-translate-x-1/2">
            <div className="flex items-center justify-center gap-8 w-full max-w-sm">
              <div className="flex items-center gap-3.5 bg-indigo-50 p-3.5 rounded-xl relative z-10 border border-indigo-600 w-full">
                <div className="rounded-lg bg-indigo-600 flex items-center justify-center">
                  <span className="text-white p-3">
                    <TbWorld size={24} />
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <h6 className="text-base font-semibold text-black mb-0.5">Discovery</h6>
                  <p className="text-xs font-normal text-gray-500">We'll conduct a thorough analysis of your operations, market, and competition to identify the best solutions for you.</p>
                </div>
              </div>
            </div>
          </li>

          {/* Step 2 */}
          <li className="relative flex justify-center items-center after:content-[''] after:w-0.5 after:h-full after:bg-gray-200 after:absolute after:-bottom-8 after:left-1/2 after:transform after:-translate-x-1/2">
            <div className="flex items-center justify-center gap-8 w-full max-w-sm">
              <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-xl relative z-10 border border-gray-50 w-full">
                <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 p-3">
                    <FaArrowRightLong size={24} />
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <h6 className="text-base font-semibold text-black mb-0.5">Planning</h6>
                  <p className="text-xs font-normal text-gray-500">Once we have a clear understanding, we develop a customized plan for the services and solutions we provide.</p>
                </div>
              </div>
            </div>
          </li>

          {/* Step 3 */}
          <li className="relative flex justify-center items-center">
            <div className="flex items-center justify-center gap-8 w-full max-w-sm">
              <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-xl relative z-10 border border-gray-50 w-full">
                <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 p-3">
                    <IoIosPhonePortrait size={24} />
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <h6 className="text-base font-semibold text-black mb-0.5">Implementation</h6>
                  <p className="text-xs font-normal text-gray-500">We implement our solution into your business operations and integrate them with other systems and platforms.</p>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ServiceWorks;
