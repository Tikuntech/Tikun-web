import React from 'react'
import Image from 'next/image'
import BopxImg from '/public/Home/Vector (7).svg'
import LineImg from '/public/Home/Line.svg'
import BelieveLineImg from '../../../public/Home/BelieveLine.svg'

const BelievePage: React.FC = () => {
  return (
    <main className=" px-6 md:px-12 bg-[#D5D9E5] md:h-screen w-full">
      <section className="container mx-auto">
        {/* Logo Section */}
        <div className=" justify-center hidden md:flex  ">
          <Image src={BopxImg} alt="BoxImg" className="w-20 h-20 mt-20 mb-10" />
        </div>

        {/* Main Text Section */}
        <div className="text-center pt-10  ">
          <p className="md:text-6xl text-2xl text-[#11112B]  ">
            <span className="font-bold">We believe that </span>
            <span className=" font-extralight" style={{ fontStyle: 'italic' }}>
              technology
            </span>
            <br />
            <span className="font-bold "> can </span>
            <span className="relative md:text-6xl text-transparent text-2xl font-bold stroke-text stroke-cyan-500">change </span>
            <span className="font-bold">the world.</span>
          </p>
          <div className="flex justify-center items-center">
  <p className="md:text-lg text-sm text-gray-800 mt-10 md:mt-20 md:w-2/3 text-center">
    That's why we're committed to delivering innovative IT solutions to
    businesses of all sizes. Our team of experienced professionals is
    dedicated to helping you achieve your goals and thrive in a rapidly
    evolving digital landscape.
  </p>
</div>
        </div>

        {/* Stats Section */}
        <div className="flex  md:flex-row items-center justify-center mt-20 pb-10 gap-4 ">
          <div className=" flex-1 text-center ">
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800">
              500+
            </h2>
            <p className="text-black mt-2 md:text-sm text-xs">Successful Projects</p>
          </div>

          <div className="hidden md:flex items-center">
            <Image src={LineImg} alt="Line" />
          </div>
          <div className="flex items-center">
            <Image src={BelieveLineImg} alt="Line" />
          </div>


          <div className="flex-1  text-center ">
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800">
              98%
            </h2>
            <p className="text-black mt-2  md:text-sm text-xs">Satisfied Clients</p>
          </div>

          <div className="hidden md:flex items-center">
            <Image src={LineImg} alt="Line" />
          </div>
          <div className="flex items-center">
            <Image src={BelieveLineImg} alt="Line" />
          </div>

          <div className="flex-1  text-center ">
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800">
              35+
            </h2>
            <p className="text-black mt-2  md:text-sm text-xs">Handled Countries</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BelievePage


// flex-1 p-6 text-center border-t border-black md:border-t-0 md:border-r md:border-b-0 md:border-black