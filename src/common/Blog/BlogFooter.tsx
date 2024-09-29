import Link from 'next/link'
import Image from 'next/image'

import CtaButton from '/public/Blog/CTAButton.svg'
import BackgroundImg from '/public/Blog/BlogFooterWire.svg'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import MobileFooterEmail from '../MobileDevlopment/MobileFooterEmail'

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
        <div className="relative mx-auto md:px-4 flex flex-col md:flex-row justify-between md:pl-24 md:pr-24">
          {/* Logo and Call to Action Button */}
          <div className="flex flex-col items-center md:items-start space-y-4 mb-8 md:mb-0 md:space-y-28 ">
            <h1 className="font-bold text-2xl">Tikuntech</h1>
            <Image
              src={CtaButton}
              alt="CtaButton"
              className="w-24 hidden md:block"
            />
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:space-x-16 ">
            {/* Newsletter Section */}
            <div className="flex flex-col md:w-64 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Newsletter</h3>
              <div className="flex items-center md:-ml-2 mt-10">
                <MobileFooterEmail />
              </div>
              <div className="flex mt-10 space-x-8">
                <Link href="https://instagram.com/tikuntech">
                  <AiFillInstagram className="h-8 w-8 hover:text-[#92DEED]" />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61564258707403">
                  <FaFacebookF className="h-8 w-8 hover:text-[#92DEED]" />
                </Link>
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
                  <Link href="mailto:business@tikuntech.com">
                    <span className="hover:text-[#92DEED]">
                      Email - business@tikuntech.com
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="tel:+14709099027">
                    <span className="hover:text-[#92DEED]">
                      Phone - 470-909-9027
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.google.com/maps?q=702+Lakeshore+Circle+NE,+Atlanta,+GA+30324">
                    <span className="hover:text-[#92DEED]">
                      Address: 702 Lakeshore Circle NE Atlanta, GA 30324
                    </span>
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
