import Image from 'next/image'
import React from 'react'
import ProjectCard1 from '/public/Home/projectImg-1.png'
import ProjectCard2 from '/public/Home/projectImg-2.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa6'
import ServiceLine from '/public/Project/Line (3).svg'
import { CgMathMinus } from 'react-icons/cg'
import HomeArrowIcon from '/public/Home/HomeArrowIcon.svg'
import ProjectLine from '/public/Home/ProjectLine.svg'

const ProjectSection: React.FC = () => {
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
          <h1 className="text-white md:text-6xl text-2xl w-1/2  text-left mt-20 font-medium">
            Got Any Questions?
          </h1>

          <button className=" cursor-pointer mt-5  md:mt-48 text-white p-3 bg-[#11112B]   rounded-lg border border-white flex items-center justify-center">
            ASK A QUESTION
            <Image src={HomeArrowIcon} alt="HomeArrowIcon" className="pl-4" />
          </button>
        </div>

        <div className="md:pr-20 md:w-1/2 ">
          <h1 className="flex text-white mt-20 justify-between font-bold md:mb-10 mb-5 md:pl-2">
            What services does Tikuntech offer? <FaPlus className="ml-10" />
          </h1>
          <div className="hidden md:block">
            <Image src={ServiceLine} alt="ServiceLine" />
          </div>

          <div>
            <Image src={ProjectLine} alt="ServiceLine" />
          </div>

          <h1 className="flex text-white mt-5 justify-between font-bold mb-10 md:pl-2">
            Which IT solution is for my business? <FaPlus className="ml-10" />
          </h1>
          <div className="hidden md:block">
            <Image src={ServiceLine} alt="ServiceLine" />
          </div>

          <div>
            <Image src={ProjectLine} alt="ServiceLine" />
          </div>
          <h1 className="flex mt-5 justify-between font-bold md:pl-2  text-custom-blue">
            How much do the services cost? <CgMathMinus className="ml-10" />
          </h1>
          <p className="text-white mt-5 text-sm mb-10 md:pl-2 md:w-2/3">
            Our pricing varies based on the specific services and needs of your
            business. We offer flexible pricing options to suit your budget and
            requirements. Contact us to learn more.
          </p>
          <div className="hidden md:block">
            <Image src={ServiceLine} alt="ServiceLine" />
          </div>

          <div>
            <Image src={ProjectLine} alt="ServiceLine" />
          </div>
          <h1 className="flex text-white mt-5 justify-between font-bold  mb-10 md:pl-2">
            How do I get started with the IT solutions?{' '}
            <FaPlus className="ml-10" />
          </h1>
          <div className="hidden md:block">
            <Image src={ServiceLine} alt="ServiceLine" />
          </div>

          <div>
            <Image src={ProjectLine} alt="ServiceLine" />
          </div>
        </div>

        <button className=" hidden border border-white text-white flex p-3 rounded-md md:mt-40 items-center justify-center ">
          ASK A QUESTION <FaArrowRightLong className=" pl-5" />
        </button>
      </div>
    </div>
  )
}

export default ProjectSection
