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
  const { data } = useDataContext();
  return (
    <>
      <NavbarHeader />
      <div className="bg-[#11112B] md:h-screen  md:pl-20 relative p-4">
        <div className="pt-10 ">
          <div className="pl-4 md:pl-0">
            {' '}
            <AboutBreadcrumbs />
          </div>

          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-8 md:space-y-0">
            <h1 className="text-4xl md:text-7xl text-white font-bold flex-shrink-0 pl-4">
              {data?.title ? data?.title : 'Project Details Page'}
            </h1>
            <div className="relative hidden md:block w-full  ">
              {images.map((img, index) => (
                <div key={index} className="absolute" style={randomPosition()}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:mt-56 p-5 ">
            <div className="flex flex-col items-center md:items-start mb-8  md:w-1/2">
              <Image
                src={BoxImg}
                alt="Box Image"
                width={40}
                height={40}
                className="object-contain mb-4 md:mb-2 hidden md:block"
              />
              <h1 className="text-2xl md:text-4xl text-white font-medium md:mt-20   line-clamp-3 ">
                {data?.description
                  ? data?.description
                  : 'We believe that technology can change the world.'}
              </h1>
            </div>

            <div className="text-white md:w-1/2 ">
              <p className="mb-4 text-sm md:text-base">
                {data?.description
                  ? data?.description
                  : " That's why we're committed to delivering innovative IT solutions to businesses of all sizes. Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape."}
              </p>

              <p className="text-sm md:text-base">
                We are an IT company that offers a wide range of services to
                help businesses succeed in the digital world. Our expertise
                includes web development, mobile development, cloud computing,
                cybersecurity, and digital marketing. We provide customized
                solutions to meet the unique needs of each of our clients’
                business from every size and nation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12">
        <AboutMain />
      </div>

      <div className="relative">
        <AboutVideo />
        <div className="absolute inset-0 flex items-center justify-center md:-mt-[700px] -mt-44  ">
          <OverflowCard />
        </div>
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
