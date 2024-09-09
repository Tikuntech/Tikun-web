import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import Image from "next/image";
import ServiceRectangle from "../../../public/Service/steperRectangle.svg";
const ServiceWorks: React.FC = () => {
  return (
    <div className=" bg-gray-900 text-white py-12 px-4 flex justify-center ">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-20">How It Works</h1>

   
        {/* 
        <div className="w-[400pxw-1/2 bg-blue-500">
      <ol className=" overflow-hidden space-y-8">
      <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-indigo-600 after:inline-block after:absolute after:-bottom-11 after:left-1/2">
      <div className="flex items-center justify-center gap-8 w-full max-w-sm">
      <div className="flex items-center gap-3.5 bg-indigo-50 p-3.5 rounded-xl relative z-10 border border-indigo-600 w-full">
      <div className="rounded-lg bg-indigo-600 flex items-center justify-center">
          <span className="text-white p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" viewBox="0 0 24 24" fill="none">
                  <path
                      d="M15.9998 7C15.9998 9.20914 14.2089 11 11.9998 11C9.79067 11 7.99981 9.20914 7.99981 7C7.99981 4.79086 9.79067 3 11.9998 3C14.2089 3 15.9998 4.79086 15.9998 7Z"
                      stroke="currentColor" stroke-width="1.6" />
                  <path
                      d="M11.9998 14C9.15153 14 6.65091 15.3024 5.23341 17.2638C4.48341 18.3016 4.10841 18.8204 4.6654 19.9102C5.2224 21 6.1482 21 7.99981 21H15.9998C17.8514 21 18.7772 21 19.3342 19.9102C19.8912 18.8204 19.5162 18.3016 18.7662 17.2638C17.3487 15.3024 14.8481 14 11.9998 14Z"
                      stroke="currentColor" stroke-width="1.6" />
              </svg>
          </span>
          <div
          className=" flex items-start rounded-md justify-center flex-col ">
          <h6 className="text-base font-semibold text-black mb-0.5">
              Personal
              Info</h6>
          <p className="text-xs font-normal text-gray-500">Just your
              personal
              information</p>
      </div>
      </div>
      </div>
      </div>
      </li>
      </ol>
      </div> */}






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
                  <h6 className="text-base font-semibold text-black mb-0.5">
                    Discovery
                  </h6>
                  <p className="text-xs font-normal text-gray-500">
                    We'll conduct a thorough analysis of your operations,
                    market, and competition to identify the best solutions for
                    you.
                  </p>
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
                  <h6 className="text-base font-semibold text-black mb-0.5">
                    Planning
                  </h6>
                  <p className="text-xs font-normal text-gray-500">
                    Once we have a clear understanding, we develop a customized
                    plan for the services and solutions we provide.
                  </p>
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
                  <h6 className="text-base font-semibold text-black mb-0.5">
                    Implementation
                  </h6>
                  <p className="text-xs font-normal text-gray-500">
                    We implement our solution into your business operations and
                    integrate them with other systems and platforms.
                  </p>
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
