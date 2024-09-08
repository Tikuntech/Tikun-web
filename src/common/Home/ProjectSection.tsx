import Image from 'next/image';
import React from 'react';
import ProjectCard1 from '../../../public/Home/projectImg-1.png';
import ProjectCard2 from '../../../public/Home/projectImg-2.png';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaPlus } from "react-icons/fa6";
import ServiceLine from '../../../public/Project/Line (3).svg';
import { CgMathMinus } from "react-icons/cg";

const ProjectSection: React.FC = () => {
  return (
  
      <div className='bg-[#11112B] md:py-12  md:px-4 md:h-[1300px]  h-full ' style={{padding:30}}>
      <div className='flex flex-col md:flex-row justify-between md:items-center md:p-20  '>
        <h1 className='text-white font-bold text-3xl md:text-6xl md:pl-20 '>Projects</h1>
        <p className='text-white w-full md:w-1/2 mt-4 md:mt-0 text-xs md:text-xl'>
          As an IT company, we pride ourselves on delivering customized solutions that meet our clients' unique needs. Our projects highlight our expertise in web & mobile development, cloud computing, cybersecurity, and digital marketing.
        </p>
      </div>

      <div className='md:flex md:flex-wrap gap-6 justify-center'>
      <div className='w-32 h-32 bg-[#D9D9D9] p-2 rounded-lg shadow-lg flex items-center justify-center relative'>
  <Image src={ProjectCard1} alt="Project Card 1" className='object-cover' width={400} height={300} />
  <div className='absolute  '>
    <h1 className='text-sm text-left'>2 0 2 2</h1>
    <h1 className='text-3xl font-bold'>Uwang Corp.</h1>
  </div>
</div>


        <div className='w-32 h-32 bg-[#92DEED] p-2 rounded-lg shadow-lg flex items-center justify-center relative'>
          <Image src={ProjectCard2} alt="Project Card 2" className='object-cover' width={400} height={300} />
          <div className='absolute inset-0 flex flex-col items-center justify-center p-4 text-white'>
            <p className='text-center text-sm mb-2'>C Y B E R   S E C U R I T Y</p>
            <p className='text-center font-bold text-4xl'>Mika</p>
            <p className='text-center font-bold text-4xl'>Medika</p>
            <p className='text-center text-sm mt-2'>Mika Medika Healthcare, a large hospital network, was concerned about the security of their patient data.</p>
            <button className='bg-white text-black font-bold mt-4 px-4 py-2 rounded'>
              READ MORE
            </button>
          </div>
        </div>
      </div>


      <div className='md:flex md:justify-between'>

<div className='md:pl-20 justify-center text-center'>
  <h1 className='text-white md:text-4xl text-2xl p-40 mt-20 font-bold'>Got Any Questions?</h1>
 
  <button className='hidden border border-white text-white md:flex p-3 rounded-md mt-40'>ASK A QUESTION  <FaArrowRightLong className=' pl-5' /></button>
  </div>


<div className='md:pr-20 md:w-1/2 '>
<h1 className='flex text-white mt-20 justify-between font-bold mb-10'>What services does Tikuntech offer? < FaPlus className='ml-10'/></h1>

<Image src={ServiceLine} alt='ServiceLine'/>
<h1 className='flex text-white mt-5 justify-between font-bold mb-10'>Which IT solution is for my business? < FaPlus className='ml-10'/></h1>
<Image src={ServiceLine} alt='ServiceLine'/>
<h1 className='flex text-white mt-5 justify-between font-bold '>How much do the services cost? < CgMathMinus className='ml-10'/></h1>
<p className='text-white mt-5 text-sm w-2/12 mb-10'>Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. Contact us to learn more.</p>
<Image src={ServiceLine} alt='ServiceLine'/>  
<h1 className='flex text-white mt-5 justify-between font-bold  mb-10'>How do I get started with the IT solutions? < FaPlus className='ml-10'/></h1>
<Image src={ServiceLine} alt='ServiceLine'/>
</div>

<button className='hidden border border-white text-white flex p-3 rounded-md md:mt-40 items-center justify-center '>ASK A QUESTION  <FaArrowRightLong className=' pl-5' /></button>
      </div>
    </div>
    
    
  );
};

export default ProjectSection;
