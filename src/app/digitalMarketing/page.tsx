'use client'

import Mobiledevlopmemnt from '@/common/BreadCrumb/mobiledevlopmemnt'
import LightNavbar from '@/components/LightNavbar'
import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import DigitalMarketingImg from '../../../public/DigitalMarketingIcons/ImagePlaceholder.svg'
import LightFooter from '@/common/Blog/BlogFooter'
import ReadyCard from '@/common/Blog/ReadyCard'
import DigitalMarketingBrad from '@/common/BreadCrumb/DigitalMarketingBread'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-[#D5D9E5]">
      <LightNavbar />

      <div className="pt-16 md:pt-20 p-5 ">
        <div className="md:ml-20">
          <DigitalMarketingBrad />
        </div>

        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-8 md:space-y-0">
          <h1 className="text-4xl md:text-6xl text-[#11112B] font-bold flex-shrink-0 md:ml-20 mt-5">
            Digital Marketing
          </h1>
        </div>
      </div>
      <div className="md:mt-14 md:p-10 p-5">
        <Image src={DigitalMarketingImg} alt="Img " />
      </div>

      <div className=" hidden md:flex justify-between pl-12 pr-12">
        <div>
          <p className="text-xs">Y E A R</p>
          <p className="text-gray-500 font-medium">2022 - 2023</p>
        </div>

        <div>
          <p className="text-xs">C L I E N T</p>
          <p className="text-gray-500 font-medium">CU</p>
        </div>
        <div>
          <p className="text-xs">I N D U S T R Y</p>
          <p className="text-gray-500 font-medium">Retail</p>
        </div>
        <div>
          <p className="text-xs">S E R V I C E S</p>
          <p className="text-gray-500 font-medium">
            Marketing Strategy, Data Analysis, Paid Ads
          </p>
        </div>
      </div>
      <div className="md:p-10 p-5 md:pl-14">
        <p className="font-bold text-2xl mb-4">Challenge</p>
        <p className="md:text-base text-xs text-slate-700 mb-4">
          In today's digital age, having a strong online presence is crucial for
          businesses to succeed. CU, a national retail chain, understands the
          importance of expanding their digital footprint to reach a wider
          audience and compete in the modern marketplace. However, they face the
          challenge of increasing their online presence and driving more traffic
          to their website. This challenge requires a comprehensive digital
          marketing strategy that utilizes data analysis and paid ads to target
          specific demographics and drive traffic to their website.
        </p>
        <p className="md:text-base text-xs text-slate-700">
          One of the main challenges for CU is to stand out from the competition
          in the crowded online marketplace. With so many businesses vying for
          attention, it can be difficult to attract and retain customers. This
          is where digital marketing comes in - by utilizing data analysis and
          paid ads, our team aims to target specific demographics and increase
          engagement with Gojun Retail's customers. Another challenge is to
          enhance CU’s online visibility in the mobile era. With more and more
          people accessing websites through their mobile devices, it is crucial
          to have a mobile-friendly website and an effective mobile marketing
          strategy. Our team will work to ensure that CU’s online presence is
          optimized for mobile devices, allowing them to reach more customers.
        </p>
      </div>

      <div className="md:grid md:grid-cols-2 md:p-20 md:gap-10 p-2">
        <div className=" rounded-lg p-10">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Solutions</h3>
          <ul className="list-disc text-gray-600">
            <li>
              Developing a comprehensive digital marketing strategy that
              utilizes data analysis and paid ads to target specific
              demographics.
            </li>
            <li>
              Optimizing the website for mobile devices to ensure a seamless
              user experience.
            </li>
            <li>
              Implementing a mobile-friendly website and an effective mobile
              marketing strategy to reach a wider audience.
            </li>
          </ul>
        </div>
        <div className=" rounded-xl shadow-md p-4 md:p-10">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 ">Strategy</h3>
          <ul className="list-disc text-xl text-[#2D646E] p-6">
            <li>Marketing Data Analysis</li>
            <li>Search Engine Optimization</li>
            <li>Social Media Marketing</li>
            <li>Paid Digital Ads</li>
          </ul>
        </div>
      </div>

      <main className="container mx-auto ">
        <section>
          <h2 className="md:text-3xl text-2xl font-bold mb-4 text-gray-800 mt-10 p-4">
            Results
          </h2>
          <div className="md:grid md:grid-cols-3 md:gap-8">
            <div className="rounded-lg  p-6 text-center">
              <div className="flex justify-center items-center h-20 w-20 rounded-full bg-[#16A4C0] text-white font-bold text-3xl">
                01
              </div>
              <h3 className="text-xl w-1/2 text-left font-bold mb-4 mt-5 text-gray-800 ml-20">
                Increased Web Traffic
              </h3>
              <p className="text-gray-600 text-left ml-20">
                We were able to increase website traffic by 40% within the first
                6 months of the campaign.
              </p>
            </div>
            <div className=" rounded-lg p-6 text-center">
              <div className="flex justify-center items-center h-20 w-20 rounded-full bg-[#16A4C0] text-white font-bold text-3xl">
                02
              </div>
              <h3 className="text-xl w-1/2 text-left font-bold mb-4 mt-5 text-gray-800 ml-20">
                Higher Search Engine Ranking
              </h3>
              <p className="text-gray-600 text-left ml-20">
                We were able to improve the website's search engine rankings
                significantly to the first page.
              </p>
            </div>
            <div className=" rounded-lg  p-6 text-center">
              <div className="flex justify-center items-center h-20 w-20 rounded-full bg-[#16A4C0] text-white font-bold text-3xl">
                03
              </div>
              <h3 className="text-xl w-1/2 text-left font-bold mb-4 mt-5 text-gray-800 ml-20">
                Improved Engagement
              </h3>
              <p className="text-gray-600 text-left ml-20">
                Our social media and email marketing campaigns led to 80%
                increase in engagement rates.
              </p>
            </div>
          </div>
        </section>


      </main>

      <div className="items-center justify-center p-5 mt-20 md:p-0">
          <ReadyCard />
        </div>
      <LightFooter />
    </div>
  )
}
