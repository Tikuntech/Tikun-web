'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import ProjectCard1 from '/public/Home/projectImg-1.png'
import ProjectCard2 from '/public/Home/projectImg-2.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaPlus,FaMinus } from 'react-icons/fa6'
import ServiceLine from '/public/Project/Line (3).svg'
import { CgMathMinus } from 'react-icons/cg'
import HomeArrowIcon from '/public/Home/HomeArrowIcon.svg'
import ProjectLine from '/public/Home/ProjectLine.svg'
import Link from 'next/link'

const ProjectSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index); // Toggle current selection
  };


  return (
    <div className="bg-[#11112B]  md:h-full  ">
      <div className="flex flex-col md:flex-row justify-between md:items-center  md:pt-10 p-4  ">
        <h1 className="text-white font-bold text-3xl md:text-6xl md:pl-24 p-4 ">
          Projects
        </h1>
        <p className="text-white w-full md:w-1/2  md:mt-0 text-xs md:text-sm  p-4">
          As an IT company, we pride ourselves on delivering customized
          solutions that meet our clients' unique needs. Our projects highlight
          our expertise in web & mobile development, cloud computing,
          cybersecurity, and digital marketing.
        </p>
      </div>

      <div className="md:flex md:flex-wrap md:gap-6 justify-center md:mt-10 p-8">
        <div className="bg-[#D9D9D9] md:p-2  rounded-3xl shadow-lg flex items-left justify-left relative">
          <Image
            src={ProjectCard1}
            alt="Project Card 1"
            className="object-cover"
            width={600}
            height={300}
          />
          <div className="absolute bottom-0 left-0 md:p-10 p-4">
            <h1 className="text-sm text-left md:mb-2">2 0 2 2</h1>
            <h1 className="text-3xl mb-5 font-bold">Uwang Corp.</h1>
          </div>
        </div>

        <div className=" relative bg-[#92DEED] shadow-lg shadow-[#FFFFFF80] rounded-3xl p-6 mt-5 md:mt-0 flex items-center justify-center">
          <Image
            src={ProjectCard2}
            alt="Project Card 2"
            className="object-cover"
            width={600}
            height={300}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
            <p className="text-center md:text-sm md:mb-10">
              C Y B E R S E C U R I T Y
            </p>
            <p className="text-center font-medium md:mb-4 md:text-6xl text-xl">
              Mika
            </p>
            <p className="text-center font-medium  md:text-6xl text-xl">
              Medika
            </p>
            <p className="text-center md:text-sm text-xs mt-2">
              Mika Medika Healthcare, a large hospital network, was concerned
              about the security of their patient data.
            </p>
            <button className="bg-white text-black font-bold mt-10 px-4 py-2 rounded-lg">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-between md:mt-5 md:pl-20 p-5 ">
        <div className=" justify-center text-center">
          <h1 className="text-white md:text-6xl text-2xl md:w-1/2  text-left mt-20 font-medium">
            Got Any Questions?
          </h1>
          <Link href={"/contactUs"}>
            <div className='hidden md:block'>
              <button className="cursor-pointer flex mt-5  md:mt-48 text-white p-3 bg-[#11112B]   rounded-lg border border-white  items-center justify-center">
                ASK A QUESTION
                <Image src={HomeArrowIcon} alt="HomeArrowIcon" className="pl-4" />
              </button>

            </div>
          </Link>
        </div>


       
         <div className="md:pr-20 md:w-1/2">
      {/* Accordion Item 1 */}
      <h1
        className="flex text-white mt-20 justify-between font-bold md:mb-10 mb-5 md:pl-2 cursor-pointer"
        onClick={() => handleToggle(1)}
      >
        What services does Tikuntech offer? 
        {expanded === 1 ? <FaMinus className="ml-10" /> : <FaPlus className="ml-10" />}
      </h1>
      {expanded === 1 && (
        <div className="text-white text-sm md:pl-2 mb-5">
          {/* Add expanded content here */}
          <p>Tikuntech offers a variety of IT solutions, including software development, IT consulting, and more.</p>
          {/* <Image src={ProjectLine} alt="ServiceLine" /> */}
        </div>
      )}
      <div className="hidden md:block">
        <Image src={ServiceLine} alt="ServiceLine" />
      </div>

      {/* Accordion Item 2 */}
      <h1
        className="flex text-white mt-5 justify-between font-bold mb-10 md:pl-2 cursor-pointer"
        onClick={() => handleToggle(2)}
      >
        Which IT solution is for my business?
        {expanded === 2 ? <FaMinus className="ml-10" /> : <FaPlus className="ml-10" />}
      </h1>
      {expanded === 2 && (
        <div className="text-white text-sm md:pl-2 mb-5">
          {/* Add expanded content here */}
          <p>Our solutions are tailored to fit various business needs. Contact us for a custom recommendation.</p>
          {/* <Image src={ProjectLine} alt="ServiceLine" /> */}
        </div>
      )}
      <div className="hidden md:block">
        <Image src={ServiceLine} alt="ServiceLine" />
      </div>

      {/* Accordion Item 3 */}
      <h1
        className="flex  mt-5 justify-between font-bold md:pl-2 text-custom-blue cursor-pointer"
        onClick={() => handleToggle(3)}
      >
        How much do the services cost?
        {expanded === 3 ? <FaMinus className="ml-10" /> : <FaPlus className="ml-10" />}
      </h1>
      {expanded === 3 && (
        <p className="text-white mt-5 text-sm mb-10 md:pl-2 md:w-2/3">
          Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. Contact us to learn more.
        </p>
      )}
      <div className="hidden md:block">
        <Image src={ServiceLine} alt="ServiceLine" />
      </div>

      {/* Accordion Item 4 */}
      <h1
        className="flex text-white mt-5 justify-between font-bold mb-10 md:pl-2 cursor-pointer"
        onClick={() => handleToggle(4)}
      >
        How do I get started with the IT solutions?
        {expanded === 4 ? <FaMinus className="ml-10" /> : <FaPlus className="ml-10" />}
      </h1>
      {expanded === 4 && (
        <div className="text-white text-sm md:pl-2 mb-5">
          {/* Add expanded content here */}
          <p>Getting started is simple. Contact us to discuss your project requirements and we'll help you with the onboarding process.</p>
          {/* <Image src={ProjectLine} alt="ServiceLine" /> */}
        </div>
      )}
      <div className="hidden md:block">
        <Image src={ServiceLine} alt="ServiceLine" />
      </div>
    </div>

        <button className=" md:hidden border border-white text-white flex p-3 rounded-md md:mt-40 items-center justify-center ">
          ASK A QUESTION
          <Image src={HomeArrowIcon} alt="HomeArrowIcon" className="pl-4" />
        </button>
      </div>
    </div>
  )
}

export default ProjectSection
