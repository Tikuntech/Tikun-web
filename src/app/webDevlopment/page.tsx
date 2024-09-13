'use client'
import LightNavbar from '@/components/LightNavbar'

import Image from 'next/image'
import { useState } from 'react'
import BoxImg from '/public/Blog/colorblog.svg'

import BlogFooter from '@/common/Blog/BlogFooter'
import ReadyCard from '@/common/Blog/ReadyCard'
import Mobiledevlopmemnt from '@/common/BreadCrumb/mobiledevlopmemnt'
import WebDevImg from '/public/WebDevlopment/web_development.jpg'
import MobileFlexSection from '@/common/MobileDevlopment/MobileFlexSection'
import PointsSection from '@/common/MobileDevlopment/PointsSection'
import Webdevlopmemnt from '@/common/BreadCrumb/WebDevlopment'

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
      <main className="min-h-screen bg-[#D5D9E5]">
        <LightNavbar />
        <div className="pt-10 md:pt-10 p-5 md:p-0">
          <div className="md:ml-20">
            <Webdevlopmemnt />
          </div>

          <div className="flex flex-col md:flex-row items-start space-y-8 md:space-x-8 md:space-y-0">
            <h1 className="text-4xl md:text-6xl text-[#11112B] font-bold flex-shrink-0 md:ml-20 mt-5">
              Web Development
            </h1>
          </div>
        </div>
        <div className="md:flex md:justify-around md:p-20 gap-10 ">
          <div className="md:w-full mt-10 p-5 md:p-0">
            <Image src={WebDevImg} alt="Img " className="rounded-lg" />
            <p className="mt-10">
              At Tikunteck, we specialize in creating high-performance,
              user-centric web applications that drive business growth and
              enhance online presence. Our web development services are designed
              to meet the evolving needs of businesses in the digital age,
              leveraging the latest technologies and industry best practices to
              deliver solutions that are not only functional but also innovative
              and engaging. Our team of experienced developers and designers
              work collaboratively to turn your vision into a reality, ensuring
              that every aspect of your website is crafted with precision and
              purpose.
            </p>
            <p className="mt-10">
              We begin by deeply understanding your business objectives and
              target audience. This initial phase is crucial as it lays the
              foundation for the entire project. By engaging in thorough
              consultations, we gather insights into your brand, goals, and the
              specific challenges you face. This enables us to tailor our
              approach to align with your unique requirements and ensure that
              the final product effectively addresses your needs.
            </p>
            <p className="mt-10">
              Our approach to web development emphasizes the importance of
              design and user experience (UX). We believe that a website should
              be visually appealing, intuitive to navigate, and optimized for
              performance. Our design team employs the latest UI/UX principles
              to create user interfaces that are both aesthetically pleasing and
              highly functional. We use wireframes and prototypes to visualize
              the design early in the process, allowing for iterative feedback
              and refinements to ensure that the end result meets your
              expectations.
            </p>
            <p>
              We utilize a diverse range of technologies and frameworks to build
              robust web applications. Whether you need a custom-built website,
              a content management system (CMS), or an e-commerce platform, we
              have the expertise to deliver high-quality solutions. Our
              development stack includes popular technologies such as React,
              Angular, Node.js, and PHP, as well as content management systems
              like WordPress and Drupal. By staying current with the latest
              trends and advancements in web development, we ensure that our
              solutions are both cutting-edge and reliable.
            </p>
          </div>
          <div className="md:w-1/2 p-5 md:p-0">
            <MobileFlexSection />
          </div>
        </div>
        {/* <PointsSection /> */}
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
