import React from 'react';
import CallIcon from '/public/Blog/call.svg';
import MailIcon from '/public/Blog/Mail Icon.svg';
import LocationIcon from '/public/Blog/Location Icon.svg';
import Image from 'next/image';
import BoxImg from '/public/aboutus/Vector.svg';  
import WireImg from '/public/Blog/WireframeBlog.svg';

const images = [
  { src: BoxImg, alt: "Graphic 1", width: 20, height: 20 },
  { src: BoxImg, alt: "Graphic 2", width: 30, height: 30 },
  // Add more images as needed
];

const randomPosition = () => ({
  top: `${Math.random() * 20 + 10}%`, 
  left: `${Math.random() * 80 + 10}%`, 
});

const ContactCard = () => {
  return (
    <div className="relative rounded-2xl shadow-md p-8  bg-[#11112B] mt-4 flex flex-col items-start text-white overflow-hidden h-screen"  style={{ height:550}}> 
      {/* Wireframe image background */}
      <div className="absolute inset-0 z-0 -mt-40">
        <Image
          src={WireImg}
          alt="wireframe"
          fill
          style={{ objectFit: 'cover',}}
        />
      </div>

      <div className="relative z-10">
        <h1 className='text-white font-bold text-2xl '>Contact Card</h1>
        
        <div className='flex w-full mt-10 items-center'>
          <Image src={CallIcon} alt="Call Icon" className="w-12 h-12" />
          <div className='flex flex-col'>
            <span className="pl-20 " style={{marginLeft:20}}>+XXXXXXXXXXX</span>
          </div>
        </div>
        <div className='flex w-full mt-4 items-center'>
          <Image src={MailIcon} alt="Mail Icon" className="w-12 h-12" />
          <div className='flex flex-col'>
            <span className="pl-20"style={{marginLeft:20}}>hello@TIKUNTECH</span>
          </div>
        </div>
        <div className='flex w-full mt-4 items-center'>
          <Image src={LocationIcon} alt="Location Icon" className="w-12 h-12" />
          <div className='flex flex-col'>
            <span className="pl-20 w-1/2"style={{marginLeft:20}}>XXXXXXXXXXXXXXXXXXXXXX</span>
            <span className="pl-20 w-1/2"style={{marginLeft:20}}>XXXXXXXXXXXXXXXXXX</span>
          </div>
        </div>

        <div className='relative hidden md:block w-full'>
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
  );
};

export default ContactCard;
