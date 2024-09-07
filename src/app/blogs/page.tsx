import ProjectBreadCrumb from "@/common/BreadCrumb/ProjectBreadCrumb";
import ServiceBreadCrumb from "@/common/BreadCrumb/ServiceBreadCrumb";
import LogoIcon from "@/common/LogoIcons";
import NeedItSolution from "@/common/NeedItSolution";
import Image from "next/image";
import BoxImg from '../../../public/aboutus/Vector (1).svg'; 
import { ProjectTabs } from "@/common/project/ProjectTabs";
import { ProjectCards } from "@/common/project/ProjectsCards";
import BlogBreadCrumb from "@/common/BreadCrumb/BlogBreadCrumb";
import LightNavbar from "@/components/LightNavbar";

const images = [
  { src: BoxImg, alt: "Graphic 1", width: 30, height: 40 },
  { src: BoxImg, alt: "Graphic 2", width: 40, height: 40 },

  // Add more images as needed
];

const randomPosition = () => ({
  top: `${Math.random() * 60 + 10}%`, 
  left: `${Math.random() * 50 + 10}%`, 
});

export default function Page() {
  return (
    <>
     <LightNavbar/>
      <div className="bg-[#D5D9E5]">
       <div className='bg-[#D5D9E5]  pl-4 relative'>
        <div className='pt-10 md:pt-20'>
          <div className='md:ml-32'>
        <BlogBreadCrumb/>
          </div>

          <div className='flex flex-col md:flex-row items-start space-y-8 md:space-x-8 md:space-y-0'>
            <h1 className='text-4xl md:text-7xl text-[#11112B] font-bold flex-shrink-0 md:ml-32 mt-5'>
              Blog
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
       <ProjectTabs/>
       <ProjectCards/>
</div>
      <div className="bg-[#11112B] py-8">
        <LogoIcon />
      </div>
      <NeedItSolution />
      </div>
    </>
  );
}
