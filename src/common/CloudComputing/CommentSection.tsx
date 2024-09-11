'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

export default function CommentSection() {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <h1 className="text-4xl pt-10 font-semibold">Comments</h1>

      <div className="p-4">
        <div className="bg-white rounded-2xl  ">
          <div className="  shadow-md mt-10 p-5  md:p-8">
            <p className="md:text-sm text-xs text-gray-500  pl-4 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex">
              <div className="rounded-full shadow-md md:p-5 w-14 h-14 bg-[#D5D9E5]  mt-4 flex  items-start text-gray-600" />
              <div className="mt-5">
                <h3 className="md:text-lg text-sm font-bold text-gray-800  pl-4">
                  Rachelle Beaudry
                </h3>
                <p className="text-gray-600 md:text-sm  text-xs pl-4">
                  August 5, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 md:pl-32">
        <div className="bg-gray-200 rounded-xl p-4">
          <div className=" rounded-2xl md:pt-5  mx-auto p-5">
            <div className="">
              <p className="md:text-sm text-gray-500  text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="flex">
                <div className="rounded-full shadow-md md:p-5 md:w-14 w-14 h-14 bg-[#D5D9E5] mt-4 flex items-start text-gray-600" />
                <div className="mt-5">
                  <h3 className="md:text-lg text-sm font-bold text-gray-800 pl-4">
                    Nathan Atkinson
                  </h3>
                  <p className="text-gray-600 md:text-sm text-xs pl-4">
                    September 24, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
