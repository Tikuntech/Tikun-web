'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'

export default function AuthorCard() {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <div className="p-4">
        <div className="bg-gray-200 shadow-md rounded-xl flex flex-col sm:flex-row p-5 sm:p-10">
          <div className="flex w-full justify-between sm:items-center">
            <div className="flex">
              <div className="rounded-full shadow-md p-10 md:p-10 w-40 h-20  sm:w-40 bg-[#D5D9E5] mt-4 flex flex-col items-start text-black" />
              <div className="md:mt-5 mt-10">
                <p className="text-gray-600 text-xs sm:text-sm pl-4">
                  A U T H O R
                </p>
                <h3 className="text-md sm:text-lg font-bold text-gray-800 pt-3 sm:pt-5 pl-4">
                  Dheeraj
                </h3>
                <p className="hidden md:block text-xs text-gray-500 sm:w-1/2 w-full pl-4 mt-3 sm:mt-5">
                  Dheeraj is a seasoned cloud computing expert and blogger with
                  years of experience in the field. Currently, he works as a
                  Cloud Solutions Architect at a leading tech company in Silicon
                  Valley and contributes several articles to our technology
                  blog.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center mt-5 sm:mt-0">
              <FaFacebookF className="text-lg sm:text-xl" />
              <FaTwitter className="text-lg sm:text-xl" />
            </div>
          </div>
          <p className=" md:hidden text-xs text-gray-500  w-full pl-4 mt-3 sm:mt-5">
            Dheeraj is a seasoned cloud computing expert and blogger with years
            of experience in the field. Currently, he works as a Cloud Solutions
            Architect at a leading tech company in Silicon Valley and
            contributes several articles to our technology blog.
          </p>
        </div>
      </div>
    </>
  )
}
