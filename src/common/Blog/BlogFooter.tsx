import Link from 'next/link'
import Image from 'next/image'
import MobileFooterEmail from '../MobileDevlopment/MobileFooterEmail'
import CtaButton from '/public/Blog/CTAButton.svg'
import BackgroundImg from '/public/Blog/BlogFooterWire.svg'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer>
    

      <div className="relative bg-[#D5D9E5] text-[#11112B] py-8 px-4 mt-20 h-full md:h-80">
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
            <Image
              src={CtaButton}
              alt="CtaButton"
              className="w-24 hidden md:block"
            />
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
                <AiFillInstagram className="h-8 w-8 hover:text-[#92DEED]" />
                <FaFacebookF className="h-8 w-8 hover:text-[#92DEED]" />
                <FaTwitter className="h-8 w-8 hover:text-[#92DEED]" />
              </div>
            </div>

            {/* Explore Section */}
            <div className="flex flex-col mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/aboutUs">
                    <span className="hover:text-[#92DEED]">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <span className="hover:text-[#92DEED]">Services</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="hover:text-[#92DEED]">Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blogs">
                    <span className="hover:text-[#92DEED]">Blog</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contactUs">
                    <span className="hover:text-[#92DEED]">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-2">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">
                    <span className="hover:text-[#92DEED]">Email</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="hover:text-[#92DEED]">Phone</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="hover:text-[#92DEED]">Address</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="hover:text-[#92DEED]">Social Media</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Background Image */}
    </footer>
  )
}
