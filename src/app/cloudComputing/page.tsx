'use client'
import LightNavbar from '@/components/LightNavbar'
import Image from 'next/image'
import { useState } from 'react'
import BlogBreadCrumb from '@/common/BreadCrumb/BlogBreadCrumb'
import FlexSection from '@/common/Blog/FlexSection'
import BlogFooter from '@/common/Blog/BlogFooter'
import ReadyCard from '@/common/Blog/ReadyCard'
import CloudImg from '../../../public/cloudcomputing/ImagePlaceholder.png'
import InvetedIcon from '/public/cloudcomputing/invertred.svg'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaArrowRightLong } from 'react-icons/fa6'

import AuthorCard from '@/common/CloudComputing/AuthorBio'
import CommentSection from '@/common/CloudComputing/CommentSection'
import LeaveComment from '@/common/CloudComputing/LeaveComment'
import CloudComuputingBread from '@/common/BreadCrumb/CloudComuputingBread'

export default function page() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <main className="min-h-screen bg-[#D5D9E5] ">
        <LightNavbar />
        <div className="pt-16 md:pt-28 p-4">
          <div className="md:ml-20">
            <CloudComuputingBread />
          </div>

          <div className="flex flex-col md:flex-row items-start space-y-8 md:space-x-8 md:space-y-0">
            <h1 className="text-2xl md:text-4xl text-[#11112B] font-bold flex-shrink-0 md:ml-20 mt-5">
              Cloud Computing: A Game-Changer for Small Businesses
            </h1>
          </div>
        </div>

        <div className="md:flex md:justify-around md:p-20 gap-10 ">
          <div className="md:w-full p-4">
            <Image src={CloudImg} alt="img" />

            <div className="flex justify-between p-4">
              <div>
                <p className="font-bold">Dheeraj</p>
                <p>July 10, 2023</p>
              </div>
              <div>
                <button className="bg-[#11112B] text-white p-3 rounded-lg">
                  DEVELOPMENT
                </button>
              </div>
            </div>

            <div className="p-4">
              <p className="md:text-base text-xs text-slate-700 md:mb-4">
                For small businesses, the ability to access enterprise-level
                technology has long been a challenge. Historically, small
                businesses have had limited access to the resources needed to
                compete with larger companies. However, cloud computing has
                changed the game for small businesses, providing access to
                affordable, scalable technology solutions that were previously
                out of reach. One of the biggest advantages of cloud computing
                for small businesses is the cost savings. By moving their IT
                infrastructure to the cloud, businesses can avoid the upfront
                costs associated with purchasing and maintaining physical
                servers and hardware. Cloud computing also eliminates the need
                for in-house IT staff, reducing labor costs.
              </p>
              <p className="md:text-base text-xs text-slate-700">
                In addition to cost savings, cloud computing also provides small
                businesses with greater flexibility and scalability. With
                cloud-based solutions, businesses can easily add or remove
                users, applications, and services as needed, without having to
                invest in additional hardware or software.
              </p>
            </div>
            <div className="p-3">
              <div className="bg-[#92DEED] md:p-5 rounded-xl p-5">
                <Image src={InvetedIcon} alt="InvetedIcon " />
                <p className="font-semibold p-5 md:text-xl text-sm">
                  Cloud computing provides affordable, scalable, & cheap
                  technology solutions for small business.
                </p>
                <p className="pl-5 text-xs md:text-base">
                  - Nathalie Birkinson
                </p>
                <p className="pl-5 text-xs md:text-base">Ceo of Tech Tuck</p>
              </div>
            </div>

            <p className="p-4 text-slate-700 md:mt-3 text-xs md:text-base">
              In summary, cloud computing is a game-changer for small
              businesses, providing access to affordable, scalable, and secure
              technology solutions that were previously out of reach. By moving
              their IT infrastructure to the cloud, small businesses can reduce
              costs, increase flexibility, and stay competitive in today's
              fast-paced business environment.
            </p>

            <div className="mt-7">
              <AuthorCard />
            </div>

            {/* Left and Right Arrow Navigation */}
            <div className="hidden md:flex justify-between items-center mt-5">
              <button className="text-slate-500 p-3 rounded-full h-20 w-20">
                {/* Increase icon size using Tailwind */}
                <FaArrowLeftLong className="text-4xl" />
              </button>
              <button className="text-[#11112B] p-3 rounded-full h-20 w-20">
                <FaArrowRightLong className="text-4xl" />
              </button>
            </div>

            <CommentSection />
            <div className="">
              <LeaveComment />
            </div>
          </div>

          <div className="md:w-1/2 p-4">
            <FlexSection />
          </div>
        </div>

        <div className="items-center justify-center p-4">
          <ReadyCard />
        </div>

        <BlogFooter />
      </main>
    </>
  )
}
