import Image from 'next/image';
import React from 'react';

interface BackgroundProps {
  children: React.ReactNode;
  url:string
}

const BackgroundImage: React.FC<BackgroundProps> = ({ children ,url}) => {
  return (
    <div className="relative w-full  rounded-lg shadow-lg overflow-hidden transition-colors duration-300 hover:shadow-lg  cursor-pointer  flex items-center justify-center bg-cover bg-center h-80  md:h-[430px]">
    {/* Next.js Image Background */}
    <Image
      src={url}
      alt="Card Background"
    //   layout="fill"
      objectFit="cover"
      className="pointer-events-none"
      height={400}
      width={500}
    //   fill
    //   priority
    />
    <div className="absolute inset-0 bg-gradient-to-b from-gray-300/85 via-gray-500/85 to-gray-900/85 bg-fixed"></div>

    {/* Card Content */}
    <div className="absolute inset-0 flex items-center justify-center text-white">
      {children}
    </div>
  </div>
  );
};

export default BackgroundImage;
