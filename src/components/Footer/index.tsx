import { Button, Input } from '@nextui-org/react'
import Link from 'next/link'
import TikcunteckLogo from '../icons/TikcunteckIcon'
import footerline from '../../../public/Footer/Line (4).svg'
import Image from 'next/image'
import FooterEmailInput from '@/common/footer/EmailInput'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



export default function Footer() {
  return (

    <>

    <footer className="bg-[#11112B] text-white py-8 p-4     ">

      
      <div className="container mx-auto md:px-4 flex flex-col items-center md:flex-row md:justify-between">
        {/* Logo and Copyright Section */}
        <div className="hidden md:flex flex-col items-center md:items-start md:space-y-28 space-y-2 mb-10 md:mb-0">
          <TikcunteckLogo />
          {/* <p className="text-sm">Copyright © Tarun Dixit</p> */}

          <div className='flex flex-row gap-8'>
          <AiFillInstagram className='h-10 w-10'/>
          <FaFacebookF className='h-8 w-8 mt-1'/>
          <FaTwitter className='h-10 w-10 pt-1'/>
          </div>
         
        </div>

      
        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-8 md:space-y-0 w-full md:w-auto   md:mb-5">
          {/* Explore Section */}
          <div className="flex flex-col w-full md:w-24 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#">
                  <span className="hover:text-blue-500 font-thin">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:text-blue-500 font-thin">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:text-blue-500 font-thin">Pricing</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:text-blue-500 font-thin">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:text-blue-500 font-thin">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col w-full md:w-24 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#">
                  <span className="hover:text-blue-500 font-thin">Email</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:text-blue-500 font-thin">Phone</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:text-blue-500 font-thin">Address</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:text-blue-500 font-thin">
                    Social Media
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter Section */}
          <div className="flex flex-col w-full md:w-80">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to stay informed about our latest
              products, services, and promotions. Feel free to unsubscribe
              anytime!
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 ">
             
              <FooterEmailInput />
            </div>
          </div>
        </div>
      </div>

      <Image src={footerline} alt="ServiceLine" className="" />

      <div className=' flex justify-between p-5 '>
      <p className="text-sm">Copyright © Tarun Dixit</p>
      <p className="text-sm ">Terms & Conditions | Privacy Policy</p>
      </div>

    </footer>

    </>
  )
}
