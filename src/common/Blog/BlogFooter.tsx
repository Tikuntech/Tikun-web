import React from 'react';
import Image from 'next/image';
import BlogFooterWire from '../../../public/Blog/Wireframe Vector (1).png';
import CtaButton from '../../../public/Blog/CTA Button.svg';
import instagramIcon from '../../../public/Blog/Instagram Icon.svg';
import FacebookIcon from '../../../public/Blog/Facebook Icon.svg';
import TwiterIcon from '../../../public/Blog/Twitter Icon.svg';

const BlogFooter: React.FC = () => {
  return (
    <footer className="relative h-full flex flex-col items-center justify-center px-4 py-10 bg-gray-100">
      <div className="relative w-full h-full max-w-screen-lg mx-auto">
        <Image
          src={BlogFooterWire}
          alt='BlogFooterWire'
          layout='fill'
          quality={100}
          objectFit='cover' 
          priority
          className='absolute inset-0'
        />
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0 md:space-x-10">
          <div className="flex flex-col items-center md:items-start space-y-6 md:order-1">
            <h3 className="font-bold text-2xl">tikuntech</h3>
            <Image
              src={CtaButton}
              alt="CTA Button"
              width={100}
              height={100}
              className='hidden md:block'
            />
          </div>

          <div className="flex flex-col items-center md:items-start space-y-6 md:order-4">
            <h3 className="font-bold text-xl">Newsletter</h3>
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gao-5 mt-10">
              <a href="#" className="flex items-center justify-center w-6 h-6">
                <Image
                  src={instagramIcon}
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="flex items-center justify-center w-6 h-6">
                <Image
                  src={FacebookIcon}
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="flex items-center justify-center w-6 h-6">
                <Image
                  src={TwiterIcon}
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-6 md:order-2">
            <h3 className="font-bold text-xl">Explore</h3>
            <ul className="list-none space-y-2">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Services</a></li>
              <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-6 md:order-3">
            <h3 className="font-bold text-xl">Contact</h3>
            <ul className="list-none space-y-2">
              <li><a href="#" className="hover:text-blue-500">Email</a></li>
              <li><a href="#" className="hover:text-blue-500">Phone</a></li>
              <li><a href="#" className="hover:text-blue-500">Address</a></li>
              <li><a href="#" className="hover:text-blue-500">Social Media</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
