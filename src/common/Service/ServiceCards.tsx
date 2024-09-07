import { ServiceHoverEffect } from "@/components/ui/CardHoverService";
import  GlobeIcon  from '../../../public/Service/Web Icon.svg'
import MobileIcon from '../../../public/Service/mobile.svg';
import SecurityIcon from '../../../public/Service/Security Icon.svg';
import MarketingIcon from '../../../public/Service/digitalMarketing.svg';
import CloudIcon from '../../../public/Service/Cloud Icon.svg';
import SoftwareIcon from '../../../public/Service/Coding Icon (1).svg';
import ManagementIcon from '../../../public/Service/Planner Icon.svg';
import DataAnalysisIcon from '../../../public/Service/Analysis Icon.svg';
import NetworkIcon from '../../../public/Service/Network Icon.svg';
import { IoGlobeOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

export function ServiceCards() {
  return (
    <div className="max-w-lg mx-auto px-3">
      <ServiceHoverEffect items={services} />
    </div>
  );
}

export const services = [
  {
    icon: (
      <div className="flex justify-between  w-full">
        <IoGlobeOutline style={{ height: 60, width: 60 }} />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: "Web Development",
    description: "Create websites that are both visually appealing and functional for users.",
    link: "/web-development",
  },
  {
    icon: (
      <div className="flex justify-between space-x-2">
        <IoGlobeOutline style={{ height: 60, width: 60 }} />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: "Mobile Development",
    description: "Create or enhance mobile applications, ensuring optimized user experience.",
    link: "/mobile-development",
  },
  {
    icon:(
      <div className="flex justify-between space-x-2">
        <IoGlobeOutline style={{ height: 60, width: 60 }} />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: "Cyber Security",
    description: "Provides advanced protection for your data and systems against threats.",
    link: "/cyber-security",
  },
  {
    icon: (
      <div className="flex justify-between space-x-2">
        <IoGlobeOutline style={{ height: 60, width: 60 }} />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: "Digital Marketing",
    description: "Create solutions to help businesses achieve their digital marketing goals.",
    link: "/digital-marketing",
  },
  {
    icon:(
      <div className="flex justify-between space-x-2">
        <IoGlobeOutline style={{ height: 60, width: 60 }} />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: "Cloud Computing",
    description: "Provides access to scalable computing resources to optimize their operations.",
    link: "/cloud-computing",
  },
  {
    icon:(
      <div className="flex justify-between space-x-2">
        <IoGlobeOutline style={{ height: 60, width: 60 }} />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: "Software Development",
    description: "Provides customized solutions to create and maintain software applications.",
    link: "/software-development",
  },
  {
    icon: (
      <div className="flex justify-between space-x-2">
        <IoGlobeOutline style={{ height: 60, width: 60 }} />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: "IT Project Management",
    description: "Provides businesses with expert guidance and support for IT projects.",
    link: "/it-project-management",
  },
  {
    icon: (
      <div className="flex justify-between space-x-2">
        <IoGlobeOutline style={{ height: 60, width: 60 }} />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: "Data Analysis",
    description: "Provide data analysis for varied categories to help client businesses.",
    link: "/data-analysis",
  },
  {
    icon: (
      <div className="flex justify-between space-x-2">
        <IoGlobeOutline style={{ height: 60, width: 60 }} />
        <FaArrowRightLong style={{ height: 60, width: 60 }} />
      </div>
    ),
    title: "Network Management",
    description: "Provide management of network infrastructure design for clients.",
    link: "/network-management",
  },
];
