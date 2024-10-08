import React from 'react'
import { TbWorld } from 'react-icons/tb'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoIosPhonePortrait } from 'react-icons/io'
import Image from 'next/image'
import ServiceRectangle from '/public/Service/steperRectangle.svg'
import { Stepper } from '../stepper'
import { ExploreNowButton } from '../ExploreNowButton'
const ServiceWorks: React.FC = () => {
  return (
    <div className=" bg-[#11112B] text-white  px-4 flex justify-center ">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center ">How It Works</h1>
        <Stepper />
      </div>
    </div>
  )
}

export default ServiceWorks
