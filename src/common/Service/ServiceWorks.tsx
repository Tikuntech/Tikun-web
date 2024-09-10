import React from 'react'
import { TbWorld } from 'react-icons/tb'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoIosPhonePortrait } from 'react-icons/io'
import Image from 'next/image'
import ServiceRectangle from '../../../public/Service/steperRectangle.svg'
import { Stepper } from '../stepper'
const ServiceWorks: React.FC = () => {
  return (
    <div className=" bg-gray-900 text-white py-12 px-4 flex justify-center ">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-20">How It Works</h1>
        <Stepper/>

       

       
      </div>
    </div>
  )
}

export default ServiceWorks
