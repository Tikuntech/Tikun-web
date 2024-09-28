'use client'
import React from 'react'
import Image from 'next/image'
import BoxImg from '../../../public/aboutus/Vector.svg'
import ContactBreadcrumb from '@/common/BreadCrumb/ContactBreadCrumb'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import ContactLocation from '@/common/Contact/ContactLocation'
import ContacMassage from '@/common/Contact/ContacMassage'
import NeedItSolution from '@/common/NeedItSolution'
import NavbarHeader from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactMobile from '@/common/Contact/contactMobile'
import Link from 'next/link'

const images = [
  { src: BoxImg, alt: 'Graphic 1', width: 30, height: 40 },
  { src: BoxImg, alt: 'Graphic 3', width: 70, height: 50 },
]

const randomPosition = () => ({
  top: `${Math.random() * 20 + 10}%`,
  left: `${Math.random() * 90 + 10}%`,
})

const Page: React.FC = () => {
  return (
    <>
      <NavbarHeader />
      <div className="bg-[#11112B] h-full p-5 md:p-4 relative md:pl-20 md:pr-20 ">
        <div className="  md:pt-20 pt-8 pl-2">
          <ContactBreadcrumb />
          <div className="flex flex-col md:flex-row items-start space-y-2 md:space-x-3 md:space-y-0">
            <h1 className="hidden md:block text-4xl md:text-7xl text-white font-bold flex-shrink-0">
              Contact Us
            </h1>
            <div className="relative hidden md:block w-full h-64 md:h-40">
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

          <div className="flex flex-col md:flex-row gap-8  h-full">
            <div className=" flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/2">
              <Image
                src={BoxImg}
                alt="Box Image"
                width={40}
                height={40}
                className="object-contain  md:mb-6 hidden md:block"
              />
              <h2 className="text-4xl md:text-4xl text-white font-bold mt-4 md:mt-14 text-center md:text-left">
                Let’s get in touch!
              </h2>
            </div>

            <div className="md:flex flex-row gap-6 md:w-1/2 ">
              <div className="bg-gradient-to-b from-slate-500 to-slate-800 w-2/3 rounded-2xl ">
                <Link href="tel:+14709099027">
                  <div className="rounded-2xl hover:bg-custom-blue shadow-md p-8 h-44 flex flex-col hover:text-black items-start text-white">
                    <PhoneIcon className="w-12 h-12 border border-white  hover:border-black rounded-full p-2" />

                    <p className="mt-4">Phone</p>
                    <p className="text-center">+1 470-909-9027</p>
                  </div>
                </Link>
              </div>

              <div className="bg-gradient-to-b from-slate-500 to-slate-800 w-full rounded-2xl ">
                <Link href="mailto:business@tikuntech.com">
                  <div className="mt-10 md:mt-0 rounded-2xl shadow-md p-8 hover:bg-custom-blue  h-44 hover:text-black flex flex-col items-start text-white">
                    <EnvelopeIcon className="w-12 h-12 border border-white  hover:border-black rounded-full p-2" />

                    <p className="mt-5 ">Email</p>
                    <p className="text-center">business@tikuntech.com</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
<div className='h-screen '>
<div className="relative md:flex md:mt-20   ">
            <ContactLocation />
            <div className="absolute 1470px:pl-[500px] 1366px:pl-[400px]  md:mt-60    ">
              <ContacMassage />
            </div>
          </div>
</div>

        </div>
<div className='pt-28  md:pt-0 1366px:mt-40'>
<NeedItSolution />
</div>
       
      </div>

       
       
      <Footer />
    </>
  )
}

export default Page
