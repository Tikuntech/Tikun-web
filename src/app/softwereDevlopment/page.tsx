'use client'

import Mobiledevlopmemnt from '@/common/BreadCrumb/mobiledevlopmemnt'
import LightNavbar from '@/components/LightNavbar'
import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import SoftwareDevelopmentImg from '/public/softwaredevlopment/softwareDev.webp'
import LightFooter from '@/common/Blog/BlogFooter'
import ReadyCard from '@/common/Blog/ReadyCard'
import DigitalMarketingBrad from '@/common/BreadCrumb/DigitalMarketingBread'
import SoftwareDevlopment from '@/common/BreadCrumb/SoftwareDevlopment'
import NeedItSolution from '@/common/NeedItSolution'

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

      <div className="pt-10 md:pt-20 p-5 md:p-0">
        <div className="md:ml-20">
          <SoftwareDevlopment />
        </div>

        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-x-8 md:space-y-0">
          <h1 className="text-4xl md:text-6xl text-[#11112B] font-bold flex-shrink-0 md:ml-20 mt-5">
            Software Development
          </h1>
        </div>
      </div>
      <div className="md:mt-14 md:p-10 p-5 ">
        <Image
          src={SoftwareDevelopmentImg}
          alt="Img "
          className="md:w-screen rounded-lg"
        />
      </div>

     
      <div className="md:p-10 p-5">
     
        <p className="md:text-base text-xs text-slate-700 mb-4">
        At Tikunteck, we pride ourselves on delivering innovative and customized software solutions that drive business success and transform operations. Our software development services are meticulously designed to address the unique needs of each client, harnessing the power of cutting-edge technology and best practices to create scalable, efficient, and reliable applications. With a dedicated team of software engineers, project managers, and quality assurance experts, we ensure that every project is executed with precision and excellence, resulting in software that not only meets but exceeds expectations.


        </p>
        <p className="md:text-base text-xs text-slate-700 mb-4">
        Understanding that every business is unique, we start by gaining a deep understanding of your objectives, processes, and challenges. Our approach begins with comprehensive consultations and needs assessments to identify the core requirements and desired outcomes of your software project. This initial phase is critical as it allows us to design a solution that aligns perfectly with your business goals, whether it’s a custom enterprise application, a specialized tool, or an integrated system.
        </p>
        <p className="md:text-base text-xs text-slate-700 mb-4">
        Our development team is proficient in a diverse array of technologies and frameworks, enabling us to deliver solutions that are both innovative and robust. We work with modern programming languages and platforms such as Java, Python, C#, and JavaScript, as well as frameworks and libraries like React, Angular, and Django. By leveraging these technologies, we create software that is not only powerful but also adaptable to future technological advancements. Our commitment to using the latest tools and methodologies ensures that your software remains competitive and relevant in an ever-evolving digital landscape.        </p>
        <p className="md:text-base text-xs text-slate-700 mb-4">
        Security is a fundamental aspect of our software development process. We implement robust security measures to protect your software from vulnerabilities and threats. This includes secure coding practices, data encryption, and regular security audits. Additionally, we ensure that our solutions comply with relevant industry standards and regulations, safeguarding your data and maintaining compliance with legal requirements.

</p>
<p className="md:text-base text-xs text-slate-700 mb-4">At Tikunteck, our commitment to excellence in software development drives our approach to every project. We combine technical expertise with a customer-centric focus to deliver solutions that not only solve problems but also create opportunities for growth and innovation. Whether you’re looking to develop a new software application or enhance an existing one, our team is dedicated to providing the expertise and support you need to achieve success in the digital world.</p>
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
       

        <div className="items-center justify-center p-5 mt-20 md:mb-20 md:p-0">
          <ReadyCard />
        </div>
      </main>
      <NeedItSolution/>
      <LightFooter />
    </div>
  )
}
