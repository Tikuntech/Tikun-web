import Image from 'next/image'
import NotePadBox from '/public/Service/notepad.svg'
import DescoveryIcon from '/public/Service/descovery_icon.svg'
import PlanningIcon from '/public/Service/planningIcon.svg'
import ConfirmIcon from '/public/Service/confirmIcon.svg'

export const Stepper = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[screen-xl] md:px-24 lg:px-8 lg:py-20 bg-[#11112B]">
      <div className="flex flex-col items-center">
        <div className="w-7 h-7 bg-custom-blue rounded-full"></div>

        <div className="w-1 h-32 bg-custom-blue"></div>

        <div className="w-7 h-7 bg-custom-blue rounded-full "></div>

        <div className="bg-gradient-to-r from-[#505063] to-[#2d2d43] p-10 mt-10  rounded-md">
          <Image
            src={DescoveryIcon}
            alt="Location"
            width={70}
            height={70}
            className="object-cover rounded-lg "
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-7 text-white mt-10">
          01
        </h2>
        <h1 className="text-4xl font-bold text-center mb-8 text-custom-blue">
          Discovery
        </h1>

        <h2 className="text-base  text-center mb-14  text-gray-200 md:w-1/2">
          We'll conduct a thorough analysis of your operations, market, and
          competition to identify the best solutions for you.
        </h2>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-7 h-7 bg-white rounded-full"></div>

        <div className="w-1 h-32 bg-white"></div>

        <div className="w-7 h-7 bg-white rounded-full "></div>

        <div className="bg-gradient-to-r from-[#505063] to-[#2d2d43] p-10 mt-10  rounded-md">
          <Image
            src={NotePadBox}
            alt="Location"
            width={70}
            height={70}
            className="object-cover rounded-lg "
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-5 text-white mt-10">
          02
        </h2>
        <h1 className="text-4xl font-bold text-center mb-8 text-custom-blue">
          Planning
        </h1>

        <h2 className="text-base  text-center mb-10 md:w-1/2 text-gray-200">
          Once we have a clear understanding, we develop a customized plan for
          the services and solutions we provide.
        </h2>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-7 h-7 bg-white rounded-full"></div>

        <div className="w-1 h-32 bg-white"></div>

        <div className="w-7 h-7 bg-white rounded-full "></div>

        <div className="bg-gradient-to-r from-[#505063] to-[#2d2d43] p-10 mt-10  rounded-md">
          <Image
            src={PlanningIcon}
            alt="Location"
            width={70}
            height={70}
            className="object-cover rounded-lg "
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-5 text-white mt-10">
          03
        </h2>
        <h1 className="text-4xl font-bold text-center mb-8 text-custom-blue">
          Development
        </h1>

        <h2 className="text-base  text-center mb-10 md:w-1/2  text-gray-200">
          We begin the design and development process, creating custom solutions
          for your specific business needs.
        </h2>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-7 h-7 bg-white rounded-full"></div>

        <div className="w-1 h-32 bg-white"></div>

        <div className="w-7 h-7 bg-white rounded-full "></div>

        <div className="bg-gradient-to-r from-[#505063] to-[#2d2d43] p-10 mt-10  rounded-md">
          <Image
            src={ConfirmIcon}
            alt="Location"
            width={70}
            height={70}
            className="object-cover rounded-lg "
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-5 text-white mt-10">
          04
        </h2>
        <h1 className="text-4xl font-bold text-center mb-10 text-custom-blue">
          Implementation
        </h1>

        <h2 className=" text-base md:w-1/2 text-center mb-20  text-gray-200">
          We implement our solution into your business operations and integrate
          them with other systems and platforms.
        </h2>
      </div>
    </div>
  )
}
