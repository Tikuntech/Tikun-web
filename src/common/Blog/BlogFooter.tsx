import Link from 'next/link';
import Image from 'next/image';
import MobileFooterEmail from '../MobileDevlopment/MobileFooterEmail';
import CtaButton from '/public/Blog/CTAButton.svg';
import BackgroundImg from '/public/Blog/BlogFooterWire.svg';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer >


{/* <div className="relative w-80 h-80">
    <div className="absolute inset-0 bg-blue-500 opacity-75 z-10 flex items-center justify-center">
      <p className="text-white font-bold">Background 1</p>
    </div>

 
    <div className="absolute inset-0 bg-red-500 opacity-75 z-20 flex items-center justify-center">
      <p className="text-white font-bold">Background 2</p>
    </div>
  </div> */}
        
      <div className="relative bg-[#D5D9E5] text-[#11112B] py-8 px-4 mt-20 h-screen  md:h-80">


           
      <div className="absolute bottom-0 left-0   p-4  ">
        <Image
          src={BackgroundImg}
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
          quality={100}

          priority
         
          className=" hidden md:block  " 
        />
      </div>


      {/* Footer Content */}
      <div className="relative z-10 container mx-auto md:px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Call to Action Button */}
        <div className="flex flex-col items-center md:items-start space-y-4 mb-8 md:mb-0 md:space-y-28">
          <h1 className="font-bold text-2xl">Tikcunteck</h1>
          <Image src={CtaButton} alt="CtaButton" className="w-24 hidden md:block" />
        </div>



        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:space-x-16 w-full md:w-auto">
          {/* Newsletter Section */}
          <div className="flex flex-col md:w-64 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Newsletter</h3>
            <div className="flex items-center md:-ml-2 mt-10">
              <MobileFooterEmail />
            </div>
            <div className="flex mt-10 space-x-8 ">
              <AiFillInstagram className="h-8 w-8 hover:text-blue-500" />
              <FaFacebookF className="h-8 w-8 hover:text-blue-500" />
              <FaTwitter className="h-8 w-8 hover:text-blue-500" />
            </div>
          </div>


          

          {/* Explore Section */}
          <div className="flex flex-col mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="#"><span className="hover:text-blue-500">About Us</span></Link></li>
              <li><Link href="#"><span className="hover:text-blue-500">Services</span></Link></li>
              <li><Link href="#"><span className="hover:text-blue-500">Pricing</span></Link></li>
              <li><Link href="#"><span className="hover:text-blue-500">Blog</span></Link></li>
              <li><Link href="#"><span className="hover:text-blue-500">Contact</span></Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <ul className="space-y-2">
              <li><Link href="#"><span className="hover:text-blue-500">Email</span></Link></li>
              <li><Link href="#"><span className="hover:text-blue-500">Phone</span></Link></li>
              <li><Link href="#"><span className="hover:text-blue-500">Address</span></Link></li>
              <li><Link href="#"><span className="hover:text-blue-500">Social Media</span></Link></li>
            </ul>
          </div>
        </div>
      
      </div>



      </div>
      {/* Background Image */}
    

    </footer>
  );
}
