'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import BoxImg from '/public/aboutus/Vector.svg'
import OverflowCard from '@/common/OverflowCard'
import AboutBreadcrumbs from '@/common/BreadCrumb/BreadCrumbAbout'
import AboutMain from '@/common/About/AboutMain'
import AboutVideo from '@/common/About/AboutVideo'
import NeedItSolution from '@/common/NeedItSolution'
import LogoIcon from '@/common/LogoIcons'
import NavbarHeader from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmasungImg from '/public/Home/SAMSUNG.svg'
import GoogleImg from '/public/Home/GOGGLE.svg'
import AmazonImg from '/public/Home/AMAZON.svg'
import WindowsImg from '/public/Home/WINDOWS.svg'
import SonyImg from '/public/Home/SONY.svg'
import { useDataContext } from '@/context/DataProjectContext'
import Slider from '@/components/Slider'
import BreadCrumbProjectdetails from '@/common/BreadCrumb/BreadCrumbProjectdetails'
const images = [
  { src: BoxImg, alt: 'Graphic 1', width: 30, height: 40 },

  { src: BoxImg, alt: 'Graphic 3', width: 70, height: 50 },
  // Add more images as needed
]

const randomPosition = () => ({
  top: `${Math.random() * 60 + 10}%`,
  left: `${Math.random() * 50 + 10}%`,
})

const Page: React.FC = () => {
  const { data } = useDataContext()
  return (
    <>
      <NavbarHeader />
      <div className="bg-[#11112B]   md:pl-20 relative p-4">
        <div className="pt-10 ">
          <div className="pl-4 md:pl-9  md:pt-10">
            {' '}
            <BreadCrumbProjectdetails />
          </div>
          {
            data?.images?.length &&
            <Slider data={data} />
          }


        </div>
      </div>



      <div className="relative">
        <AboutVideo />
      </div>

      <footer className="md:hidden flex flex-col items-center gap-5  p-10 bg-[#11112B] -mb-10 md:-mb-0 ">
        {/* First Row: 3 logos */}
        <div className="flex justify-center gap-8 mb-4 ml">
          <div className="w-24 h-12">
            <Image src={SmasungImg} alt="Samsung logo" width={90} height={70} />
          </div>
          <div className="w-24 h-12">
            <Image src={GoogleImg} alt="Google logo" width={90} height={70} />
          </div>
          <div className="w-24 h-12">
            <Image src={AmazonImg} alt="Amazon logo" width={90} height={70} />
          </div>
        </div>

        {/* Second Row: 2 logos */}
        <div className="flex justify-center gap-8">
          <div className="w-24 h-12">
            <Image src={WindowsImg} alt="Windows logo" width={70} height={50} />
          </div>
          <div className="w-24 h-12">
            <Image src={SonyImg} alt="Sony logo" width={70} height={50} />
          </div>
        </div>
      </footer>

      <div className="hidden md:block md:-mb-20 -mb-20 md:-mt-10">
        <LogoIcon />
      </div>
      <NeedItSolution />

      <Footer />
    </>
  )
}

export default Page
