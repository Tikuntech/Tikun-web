'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import ProjectCard1 from '/public/Home/projectImg-1.png'
import ProjectCard2 from '/public/Home/projectImg-2.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import ServiceLine from '/public/Project/Line (3).svg'
import { CgMathMinus } from 'react-icons/cg'
import HomeArrowIcon from '/public/Home/HomeArrowIcon.svg'
import ProjectLine from '/public/Home/ProjectLine.svg'
import Link from 'next/link'
import { ProjectCards } from '../project/ProjectsCards'

const ProjectSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index) // Toggle current selection
  }

  return (
    <div className="bg-[#11112B]  p-5 md:h-full md:pl-20 md:pr-20 ">
      <div className="flex flex-col md:flex-row justify-between md:items-center  md:pt-10 p-4  ">
        <h1 className="text-white font-bold text-3xl md:text-6xl  ">
          Projects
        </h1>
        <p className="text-white w-full md:w-1/2  md:mt-0 text-xs md:text-sm   pt-4">
          As an IT company, we pride ourselves on delivering customized
          solutions that meet our clients' unique needs. Our projects highlight
          our expertise in web & mobile development, cloud computing,
          cybersecurity, and digital marketing.
        </p>
      </div>
      <div className=" p-0  pt-10">
        <ProjectCards isHome={true} />
      </div>

      <div className="md:flex md:justify-between md:mt-5 p-5 ">
        <div className=" justify-center text-center">
          <h1 className="text-white md:text-6xl text-2xl md:w-1/2  text-left mt-20 font-medium">
            Got Any Questions?
          </h1>
          <Link href={'/contactUs'}>
            <div className="hidden md:block">
              <button className="cursor-pointer hover:bg-custom-blue hover:text-black hover:border-black flex mt-5  md:mt-40 text-white p-3 bg-[#11112B]   rounded-lg border border-white  items-center justify-center">
                ASK A QUESTION
                <Image
                  src={HomeArrowIcon}
                  alt="HomeArrowIcon"
                  className="pl-4"
                />
              </button>
            </div>
          </Link>
        </div>
        <div className=" md:w-[500px]">
          {/* Accordion Item 1 */}
          <h1
            className={`flex mt-20 justify-between font-bold md:mb-10 mb-5  cursor-pointer ${
              expanded === 1 ? 'text-custom-blue' : 'text-white'
            }`}
            onClick={() => handleToggle(1)}
          >
            What services does Tikuntech offer?
            {expanded === 1 ? (
              <FaMinus className="ml-10" />
            ) : (
              <FaPlus className="ml-10" />
            )}
          </h1>
          {expanded === 1 && (
            <div className="text-white text-sm md:pl-2 mb-5">
              <p>
                Tikuntech offers a variety of IT solutions, including software
                development, IT consulting, and more.
              </p>
            </div>
          )}

          {/* Accordion Item 2 */}
          <h1
            className={`flex mt-5 justify-between font-bold mb-10 md:pl-2 cursor-pointer md:pt-6 ${
              expanded === 2 ? 'text-custom-blue' : 'text-white'
            }`}
            onClick={() => handleToggle(2)}
          >
            Which IT solution is for my business?
            {expanded === 2 ? (
              <FaMinus className="ml-10" />
            ) : (
              <FaPlus className="ml-7" />
            )}
          </h1>
          {expanded === 2 && (
            <div className="text-white text-sm  mb-5">
              <p>
                Our solutions are tailored to fit various business needs.
                Contact us for a custom recommendation.
              </p>
            </div>
          )}

          {/* Accordion Item 3 */}
          <h1
            className={`flex mt-5 justify-between font-bold cursor-pointer md:pt-8 ${
              expanded === 3 ? 'text-custom-blue' : 'text-white'
            }`}
            onClick={() => handleToggle(3)}
          >
            How much do the services cost?
            {expanded === 3 ? (
              <FaMinus className="ml-10" />
            ) : (
              <FaPlus className="ml-8" />
            )}
          </h1>
          {expanded === 3 && (
            <p className="text-white mt-5 text-sm mb-10 md:pl-2 md:w-2/3">
              Our pricing varies based on the specific services and needs of
              your business. We offer flexible pricing options to suit your
              budget and requirements. Contact us to learn more.
            </p>
          )}

          {/* Accordion Item 4 */}
          <h1
            className={`flex mt-5 justify-between font-bold mb-10 md:pl-2 cursor-pointer md:pt-7 ${
              expanded === 4 ? 'text-custom-blue' : 'text-white'
            }`}
            onClick={() => handleToggle(4)}
          >
            How do I get started with the IT solutions?
            {expanded === 4 ? (
              <FaMinus className="ml-10" />
            ) : (
              <FaPlus className="ml-7" />
            )}
          </h1>
          {expanded === 4 && (
            <div className="text-white text-sm md:pl-2 mb-5">
              <p>
                Getting started is simple. Contact us to discuss your project
                requirements and we'll help you with the onboarding process.
              </p>
            </div>
          )}
        </div>

        <button className=" md:hidden hover:bg-custom-blue hover:text-black hover:border-black border border-white text-white flex p-3 rounded-md md:mt-40 items-center justify-center ">
          ASK A QUESTION
          <Image src={HomeArrowIcon} alt="HomeArrowIcon" className="pl-4" />
        </button>
      </div>
    </div>
  )
}

export default ProjectSection
