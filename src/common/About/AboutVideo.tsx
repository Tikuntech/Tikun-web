"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import VideoImg from '../../../public/aboutus/Image Placeholder.png'; 
import { FaPlay } from "react-icons/fa";

const AboutVideo: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);

  return (
    <div className='relative'>
      <Image
        src={VideoImg}
        alt="Video Section"
        layout='responsive'
        className='object-cover'
      />
      <div 
        className='absolute inset-0 flex items-center justify-center cursor-pointer'
        onClick={handleOpen}
      >
        <FaPlay className='text-white text-4xl' />
      </div>
    </div>
  );
};

export default AboutVideo;
