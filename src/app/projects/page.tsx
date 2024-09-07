"use client"
import ProjectBreadCrumb from "@/common/BreadCrumb/ProjectBreadCrumb";
import ServiceBreadCrumb from "@/common/BreadCrumb/ServiceBreadCrumb";
import LogoIcon from "@/common/LogoIcons";
import NeedItSolution from "@/common/NeedItSolution";
import Image from "next/image";
import BoxImg from '../../../public/aboutus/Vector (1).svg';
import { ProjectTabs } from "@/common/project/ProjectTabs";
import { ProjectCards } from "@/common/project/ProjectsCards";
import NavbarHeader from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { httpService } from "@/services/httpService";
import { fetchProjects, projectRoute, usersRoute } from "@/services/api";
import { json } from "stream/consumers";
// import { apiCall } from "@/network";

const images = [
  { src: BoxImg, alt: "Graphic 1", width: 30, height: 40 },
  { src: BoxImg, alt: "Graphic 2", width: 40, height: 40 },

  // Add more images as needed
];

const randomPosition = () => ({
  top: `${Math.random() * 60 + 10}%`,
  left: `${Math.random() * 50 + 10}%`,
});


export default function Project() {


  const { data, error, isLoading } = useQuery('project', fetchProjects);
  // useEffect(()=>{
  //   const {data} = useQuery({
  //     queryFn:async () => {
  //         const res = await httpService.get(projectRoute)
  //         console.log(res)
  //         return res
  //     },
  //     queryKey:['project']
  //   })

  // },[])

  console.log("ddddddd", JSON.stringify(data?.data))
  return (
    <>
      {/* <div className="flex flex-col h-full bg-[#11112B] p-6 md:p-12 ">
        <div className="ml-16">
        <ServiceBreadCrumb />
        </div>

        
        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-x-8 md:space-y-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold flex-shrink-0 ml-16">
          Project
          </h1>
          <div className="relative hidden md:block w-full h-64 md:h-96">
            {images.map((img, index) => (
              <div
                key={index}
                className="absolute"
                style={randomPosition()}
              >
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

        <div className="flex flex-col md:flex-row justify-between items-start mt-8 md:mt-16">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/2">
            <Image 
              src={BoxImg} 
              alt="Box Image" 
              width={40} 
              height={40}
              className="object-contain mb-4 md:mb-2 hidden md:block"
            />
           
          </div>
<ProjectTabs/>
         
        </div>
      </div> */}
      <NavbarHeader />
      <div className="bg-[#11112B]">
        <div className='bg-[#11112B]  pl-4 relative'>
          <div className='pt-10 md:pt-20'>
            <div className='md:ml-32'>
              <ProjectBreadCrumb />
            </div>

            <div className='flex flex-col md:flex-row items-start space-y-8 md:space-x-8 md:space-y-0'>
              <h1 className='text-4xl md:text-7xl text-white font-bold flex-shrink-0 md:ml-32'>
                Project
              </h1>
              <div className='relative hidden md:block w-full  '>
                {images.map((img, index) => (
                  <div
                    key={index}
                    className='absolute'
                    style={randomPosition()}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className='object-contain'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="ml-32 mt-20">
          <ProjectTabs />
          <ProjectCards />
        </div>
        <div className="bg-[#11112B] py-8">
          <LogoIcon />
        </div>
        <NeedItSolution />
      </div>
      <Footer />
    </>
  );
}
