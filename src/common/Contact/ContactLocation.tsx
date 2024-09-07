 "use client"
import React from 'react';
import Image from 'next/image';
import LocationImg from '../../../public/Contact/Image Placeholder (1).png';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactLocation: React.FC = () => {
  return (
    <div className='flex justify-center mt-8 h-full'>
      {/* Card Container */}
      <div className='relative w-full max-w-xl'>
        {/* Image */}
        <Image
          src={LocationImg}
          alt="Location"
          width={600}
          height={400}
          className='object-cover rounded-lg'
        />


<div className="absolute inset-0 flex justify-center items-start top-4">
<FaMapMarkerAlt className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl" />
</div>
        
        {/* Overlay card */}
        
        <div className="absolute inset-0 flex justify-start items-center ">
       <div className="relative p-8 bg-black bg-opacity-50 rounded-lg w-2/3 h-24 ">
            {/* <FaMapMarkerAlt className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl" /> */}
            <p className="text-left text-white  text-xs">
              CHANDIGARH UNIVERSITY GHARUAN MOHALI PUNJAB - 140413
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
