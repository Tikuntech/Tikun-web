'use client'
import LightNavbar from '@/components/LightNavbar'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import BoxImg from '/public/Blog/colorblog.svg'
import BlogBreadCrumb from '@/common/BreadCrumb/BlogBreadCrumb'
import PageinationCard from '@/common/Blog/PageinationCard'
import BlogFooterWire from '/public/Blog/BlogFooterWire.svg'
import FlexSection from '@/common/Blog/FlexSection'
import BlogFooter from '@/common/Blog/BlogFooter'
import ReadyCard from '@/common/Blog/ReadyCard'
import Mobiledevlopmemnt from '@/common/BreadCrumb/mobiledevlopmemnt'
import MobileDevImg from '/public/Mobiledevlopment/Image Placeholder (7).png'

import PointsSection from '@/common/MobileDevlopment/PointsSection'
import MobileFlexSection from '@/common/MobileDevlopment/MobileFlexSection'

const images = [
  { src: BoxImg, alt: 'Graphic 1', width: 30, height: 40 },
  { src: BoxImg, alt: 'Graphic 2', width: 40, height: 40 },
  { src: BoxImg, alt: 'Graphic 3', width: 40, height: 40 },
  // Add more images as needed
]

const randomPosition = () => ({
  top: `${Math.random() * 60 + 10}%`,
  left: `${Math.random() * 50 + 10}%`,
})

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <main className="min-h-screen bg-[#D5D9E5] md:pt-20">
        <LightNavbar />
        <div className="pt-16 md:pt-5 p-5 md:p-0">
          <div className="md:ml-32">
            <Mobiledevlopmemnt />
          </div>

          <div className="flex flex-col md:flex-row items-start space-y-8 md:space-x-8 md:space-y-0">
            <h1 className="text-4xl md:text-6xl text-[#11112B] font-bold flex-shrink-0 md:ml-32 mt-5">
              Mobile Development
            </h1>
          </div>
        </div>
        <div className="md:flex md:justify-around md:p-20 gap-10 ">
          <div className="md:w-full mt-5 p-5 md:p-0 md:ml-12">
            <Image src={MobileDevImg} alt="Img " />
            <p className="mt-10">
              Mobile development is a crucial service for any IT company. As
              technology evolves, more and more people are using mobile devices
              to access the internet and carry out daily activities. Therefore,
              having a mobile presence is essential for businesses to reach
              their target audience. Mobile development involves creating
              applications or software specifically designed for mobile devices
              such as smartphones and tablets. These applications can be
              developed for various operating systems such as iOS, Android, or
              Windows.
            </p>
            <p className="mt-10">
              Our IT company specializes in mobile development, providing
              high-quality and user-friendly applications to our clients. Our
              team of developers has expertise in various programming languages
              such as Java, Swift, and Kotlin, among others. We work closely
              with our clients to understand their needs and requirements,
              ensuring that the application we develop meets their expectations.
              We also provide ongoing support and maintenance for the
              applications to ensure they continue to function optimally. Our
              mobile development services enable businesses to increase their
              reach, improve customer engagement, and ultimately grow their
              business.
            </p>
            <p className="mt-10">
              One of the key benefits of mobile development is the ability to
              offer personalized experiences for users. With the use of mobile
              applications, businesses can collect valuable data on user
              behavior and preferences, allowing them to tailor their offerings
              to meet specific needs. This personalized approach not only
              enhances user experience but also increases customer loyalty and
              retention.
            </p>
            <p>
              Our team of developers has experience in building custom
              applications that offer personalized experiences, helping our
              clients to stand out in a crowded market.
            </p>
          </div>
          <div className="md:w-1/2 p-5 md:p-0 md:pr-12">
            <MobileFlexSection />
          </div>
        </div>
        <div className='md:pl-10 md:pr-10'>
        <PointsSection />
        </div>
     
        <div className="items-center justify-center p-5 md:p-0">
          <ReadyCard />
        </div>
        <div className="p-5 md:p-0">
          <BlogFooter />
        </div>
      </main>
    </>
  )
}
