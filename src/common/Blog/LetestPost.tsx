import React from 'react'

const LetestPost = () => {
  return (
    <>
      <div className="rounded-2xl shadow-md p-8 bg-[#D5D9E5]  mt-4 flex flex-col items-start text-black">
        <h1 className="text-black font-bold text-2xl">Latest Post</h1>

        <div className="flex  w-full mt-4 gap-5">
          <div className="rounded-2xl shadow-md p-8 w-20 bg-[#11112B]  mt-4 flex flex-col items-start text-black" />
          <div className="flex flex-col mt-5 md:pl-20">
            <span className="text-[#11112B] text-sm md:text-base">
              10 July 2023
            </span>
            <span className="font-bold text-sm md:text-base">
              Cloud Computing: A{' '}
            </span>
            <span className="font-bold text-sm md:text-base">Game-Changer</span>
          </div>
        </div>
        <div className="flex  w-full mt-4 gap-5">
          <div className="rounded-2xl shadow-md p-8 w-20 bg-[#11112B]  mt-4 flex flex-col items-start text-black" />
          <div className="flex flex-col mt-5 md:pl-20">
            <span className="text-[#11112B] text-sm md:text-base">
              29 March 2023
            </span>
            <span className="font-bold text-sm md:text-base">
              Cybersecurity Threats{' '}
            </span>
            <span className="font-bold text-sm md:text-base">
              Need to Know in 2023
            </span>
          </div>
        </div>
        <div className="flex  w-full mt-4 gap-5">
          <div className="rounded-2xl shadow-md p-8 w-20 bg-[#11112B]  mt-4 flex flex-col items-start text-black" />
          <div className="flex flex-col mt-5 md:pl-20">
            <span className="text-[#11112B] text-sm md:text-base">
              10 December 2023
            </span>
            <span className="font-bold font-poppins text-sm md:text-base">
              How to Do Mobile App{' '}
            </span>
            <span className="font-bold text-sm md:text-base">
              User Acquisition?
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default LetestPost
