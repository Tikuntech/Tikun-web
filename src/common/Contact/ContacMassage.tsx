import React from 'react';
import Image from 'next/image';
import MassgImg from '../../../public/Contact/Rectangle (1).png';

const ContacMassage: React.FC = () => {
  return (
    <>
    {/* <div className='flex justify-center mt-8 h-full bg-sky-400'> */}
      {/* Card Container */}
      <div className='relative w-full max-w-xl bg-sky-400'>
        {/* Image */}
        <Image
          src={MassgImg}
          alt="Location"
          width={600}
          height={400}
          className='object-cover rounded-lg'
        />
        {/* Form Overlay */}
        <div className='absolute inset-0 p-10 flex flex-col items-center justify-center'>
          <div className="text-left ">
            <h1 className='text-2xl font-bold mb-2'>Send Us Message</h1>
            <p className='text-sm text-white'>Have any questions regarding our services? Send us your message.</p>
          </div>
          <form className="flex flex-col space-y-4 bg-white  rounded-lg w-2/3">
            {/* Row Layout for Name and Email */}
            <div className="flex ">

              <div className='flex flex-col pl-10'>
              <p className='font-semibold'>Name</p>
              <input
                type="text"
                placeholder="Name"
                className="flex-1 p-2 rounded-md border border-gray-300"
              />
              </div>
              <div className='flex flex-col'>
              <p  className='font-semibold'>Email</p>
              <input
                type="email"
                placeholder="Email"
                className="flex-1 p-2 rounded-md border border-gray-300"
              />
              </div>
              
            </div>
            {/* Message Field */}
            <p>Message</p>
            <textarea
              placeholder="Message"
              rows={4}
              className="p-2 rounded-md border border-gray-300"
            ></textarea>
<div className='flex items-center space-x-'>
              <input
                type="checkbox"
                id="consent"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            <p className='text-sm'>By ticking this box, I am consenting to be sent monthly articles and
            promotions through tickuntech newsletter.</p>
            <button
              type="submit"
              className=" text-white p-2 rounded-md bg-black "
            >
              Send
            </button>
            </div>
          </form>
        </div>
      </div>
     {/* </div> */}

     </>
  );
};

export default ContacMassage;
