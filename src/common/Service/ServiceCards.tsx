import { ServiceHoverEffect } from '@/components/ui/CardHoverService'
import MobileIcon from '/public/Service/mobile.svg'
import SecurityIcon from '/public/Service/Security Icon.svg'
import MarketingIcon from '/public/Service/digitalMarketing.svg'
import CloudIcon from '/public/Service/Cloud Icon.svg'
import SoftwareIcon from '/public/Service/Coding Icon (1).svg'
import ManagementIcon from '/public/Service/Rocket Icon.svg'
import DataAnalysisIcon from '/public/Service/Analysis Icon.svg'
import NetworkIcon from '/public/Service/Network Icon.svg'
import { IoGlobeOutline } from 'react-icons/io5'
import { FaArrowRightLong } from 'react-icons/fa6'
import { ArrowActive } from '@/components/icons/ArrowActive'
import Image from 'next/image'
import Link from 'next/link'

export function ServiceCards() {
  return (
    <div className="md:p-14 mx-auto px-3 relative md:pl-20 md:pr-20 ">
      <ServiceHoverEffect items={services} />
    </div>
  )
}

export const services = [
  {
    icon: (
      <div className="flex justify-between  w-full">
        <IoGlobeOutline style={{ height: 60, width: 60 }} />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: 'Web Development',
    description:
      'Create websites that are both visually appealing and functional for users.',
    link: '/webDevelopment',
    activeIcon: (
      <div className="flex justify-between  w-full">
        <IoGlobeOutline style={{ height: 60, width: 60 }} />
        <ArrowActive />
      </div>
    ),
  },
  {
    icon: (
      <div className="flex justify-between space-x-2">
        <Image src={MobileIcon} alt="icon" />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: 'Mobile Development',
    description:
      'Create or enhance mobile applications, ensuring optimized user experience.',
    link: '/mobileDevelopment',
    activeIcon: (
      <div className="flex justify-between  w-full">
        <Image src={MobileIcon} alt="icon" />
        <Link href={'/mobileDevelopment'}>
          <ArrowActive />
        </Link>
      </div>
    ),
  },
  // {
  //   icon: (
  //     <div className="flex justify-between space-x-2">
  //       <Image src={SecurityIcon} alt="icon" />
  //       {/* <BsShieldLock style={{ height: 60, width: 60 }} /> */}
  //       <FaArrowRightLong style={{ height: 60, width: 60 }} />
  //     </div>
  //   ),
  //   title: 'Cyber Security',
  //   description:
  //     'Provides advanced protection for your data and systems against threats.',
  //   link: '/cyber-security',
  //   activeIcon: (
  //     <div className="flex justify-between  w-full">
  //       <Image src={SecurityIcon} alt="icon" />
  //       <ArrowActive />
  //     </div>
  //   ),
  // },
  {
    icon: (
      <div className="flex justify-between space-x-2">
        <Image src={MarketingIcon} alt="icon" />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: ' Digital Marketing',
    description:
      'Create solutions to help businesses achieve their digital marketing goals.',
    link: '/digitalMarketing',
    activeIcon: (
      <div className="flex justify-between  w-full">
        <Image src={MarketingIcon} alt="icon" />
        <ArrowActive />
      </div>
    ),
  },
  {
    icon: (
      <div className="flex justify-between space-x-2">
        <Image src={CloudIcon} alt="icon" />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: 'Cloud Computing',
    description:
      'Provides access to scalable computing resources to optimize their operations.',
    link: '/cloudComputing',
    activeIcon: (
      <div className="flex justify-between  w-full">
        <Image src={CloudIcon} alt="icon" />

        <ArrowActive />
      </div>
    ),
  },
  {
    icon: (
      <div className="flex justify-between space-x-2">
        <Image src={SoftwareIcon} alt="icon" />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: 'Software Development',
    description:
      'Provides customized solutions to create and maintain software applications.',
    link: '/softwereDevelopment',
    activeIcon: (
      <div className="flex justify-between  w-full">
        <Image src={SoftwareIcon} alt="icon" />
        <ArrowActive />
      </div>
    ),
  },
  // {
  //   icon: (
  //     <div className="flex justify-between space-x-2">
  //       <Image src={ManagementIcon} alt="icon" />
  //       <FaArrowRightLong style={{ height: 60, width: 60 }} />
  //     </div>
  //   ),
  //   title: 'IT Project Management',
  //   description:
  //     'Provides businesses with expert guidance and support for IT projects.',
  //   link: '/it-project-management',
  //   activeIcon: (
  //     <div className="flex justify-between  w-full">
  //       <Image src={ManagementIcon} alt="icon" />
  //       <ArrowActive />
  //     </div>
  //   ),
  // },
  {
    icon: (
      <div className="flex justify-between space-x-2">
        <Image src={DataAnalysisIcon} alt="icon" />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: 'Data Analysis',
    description:
      'Provide data analysis for varied categories to help client businesses.',
    link: '/dataAnalysis',
    activeIcon: (
      <div className="flex justify-between  w-full">
        <Image src={DataAnalysisIcon} alt="icon" />
        <ArrowActive />
      </div>
    ),
  },
  // {
  //   icon: (
  //     <div className="flex justify-between space-x-2">
  //       <Image src={NetworkIcon} alt="icon" />
  //       <FaArrowRightLong style={{ height: 60, width: 60 }} />
  //     </div>
  //   ),
  //   title: 'Network Management',
  //   description:
  //     'Provide management of network infrastructure design for clients.',
  //   link: '/network-management',
  //   activeIcon: (
  //     <div className="flex justify-between  w-full">
  //       <Image src={NetworkIcon} alt="icon" />
  //       <ArrowActive />
  //     </div>
  //   ),
  // },
]
