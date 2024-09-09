"use client"
import ProjectBreadCrumb from "@/common/BreadCrumb/ProjectBreadCrumb";
import ServiceBreadCrumb from "@/common/BreadCrumb/ServiceBreadCrumb";
import LogoIcon from "@/common/LogoIcons";
import NeedItSolution from "@/common/NeedItSolution";
import BoxImg from '../../../public/aboutus/Vector (1).svg';
import { ProjectTabs } from "@/common/project/ProjectTabs";
import { ProjectCards } from "@/common/project/ProjectsCards";
import NavbarHeader from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import SmasungImg from '../../../public/Home/SAMSUNG.svg';
import GoogleImg from '../../../public/Home/GOGGLE.svg';
import AmazonImg from '../../../public/Home/AMAZON.svg';
import WindowsImg from '../../../public/Home/WINDOWS.svg';
import SonyImg from '../../../public/Home/SONY.svg';
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

  // console.log("ddddddd", JSON.stringify(data?.data))
  return (
    <>
      
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
        <div className="md:ml-20 md:mt-20">
          <ProjectTabs />
          <ProjectCards />
        </div>
       
        <footer className='md:hidden flex flex-col items-center gap-5 mt-10 p-4 bg-[#11112B]'>
  {/* First Row: 3 logos */}
  <div className='flex justify-center gap-8 mb-4'>
    <div className='w-24 h-12'>
      <Image src={SmasungImg} alt='Samsung logo' width={70} height={50} />
    </div>
    <div className='w-24 h-12'>
      <Image src={GoogleImg} alt='Google logo' width={70} height={50} />
    </div>
    <div className='w-24 h-12'>
      <Image src={AmazonImg} alt='Amazon logo' width={70} height={50} />
    </div>
  </div>

  {/* Second Row: 2 logos */}
  <div className='flex justify-center gap-8'>
    <div className='w-24 h-12'>
      <Image src={WindowsImg} alt='Windows logo' width={70} height={50} />
    </div>
    <div className='w-24 h-12'>
      <Image src={SonyImg} alt='Sony logo' width={70} height={50} />
    </div>
  </div>
</footer>


<div className='hidden md:block'>
<LogoIcon />
</div>
        <NeedItSolution />
      </div>
      <Footer />
    </>
  );
}
