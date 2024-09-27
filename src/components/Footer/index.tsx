import { Button, Input } from '@nextui-org/react'
import Link from 'next/link'
import TikcunteckLogo from '../icons/TikcunteckIcon'
import footerline from '../../../public/Footer/Line (4).svg'
import Image from 'next/image'
import FooterEmailInput from '@/common/footer/EmailInput'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer className="bg-[#11112B] text-white    md:pl-20  pl-8 ">
        <div className="container w-full  flex flex-col items-center md:flex-row md:justify-between">
          <div className="hidden md:flex flex-col items-center md:items-start md:space-y-28 space-y-2 mb-10 md:mb-0">
            <TikcunteckLogo />

            <div className="flex flex-row gap-8">
              <Link href="https://instagram.com/tikuntech">
                <AiFillInstagram className="h-10 w-10 hover:text-[#92DEED] cursor-pointer" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61564258707403">
                <FaFacebookF className="h-8 w-8 mt-1 hover:text-[#92DEED] cursor-pointer" />
              </Link>
              <FaTwitter className="h-10 w-10 pt-1 hover:text-[#92DEED] cursor-pointer" />
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:space-x-10 space-y- md:space-y-0 w-full md:w-auto   md:mb-5">
            {/* Explore Section */}
            <div className="flex flex-col w-full md:w-20 mb-8 md:mb-0 m">
              <h3 className="text-lg font-bold mb-4">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/aboutUs">
                    <span className="hover:text-[#92deed] font-thin">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <span className="hover:text-[#92deed] font-thin">
                      Services
                    </span>
                  </Link>
                </li>
                {/* <li>
                  <Link href="#">
                    <span className="hover:text-[#92deed] font-thin">
                      Pricing
                    </span>
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="/blogs">
                    <span className="hover:text-[#92deed] font-thin">Blog</span>
                  </Link>
                </li> */}
                <li>
                  <Link href="/contactUs">
                    <span className="hover:text-[#92deed] font-thin">
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col w-full md:w-96 mb-8 md:mb-0 md:pl-16">
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="mailto:business@tikuntech.com">
                    <span className="hover:text-[#92deed] font-thin">
                      Email - business@tikuntech.com
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="tel:+14709099027">
                    <span className="hover:text-[#92deed] font-thin">
                      Phone - 470-909-9027
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.google.com/maps?q=702+Lakeshore+Circle+NE,+Atlanta,+GA+30324">
                    <span className="hover:text-[#92deed] font-thin">
                      Address: 702 Lakeshore Circle NE Atlanta, GA 30324
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.yoursocialmedia.com">
                    <span className="font-thin">
                      <div className="flex flex-row gap-8">
                        <Link href="https://instagram.com/tikuntech">
                          <AiFillInstagram className="h-7 w-7 hover:text-[#92DEED] cursor-pointer" />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61564258707403">
                          <FaFacebookF className="h-6 w-6 mt-1 hover:text-[#92DEED] cursor-pointer" />
                        </Link>
                        <FaTwitter className="h-7 w-7 pt-1 hover:text-[#92DEED] cursor-pointer" />
                      </div>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Newsletter Section */}
            <div className="flex flex-col w-full md:w-80 md:pl-10">
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-sm mb-4">
                Subscribe to our newsletter to stay informed about our latest
                products, services, and promotions. Feel free to unsubscribe
                anytime!
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4  ">
                <FooterEmailInput />
              </div>
            </div>
          </div>
        </div>
<div className='md:pr-16 pb-5'>
<Image src={footerline} alt="ServiceLine" className="" />

<div className=" md:flex justify-between md:pb-5 pt-4 md:pt-5   ">
  <p className="md:text-sm text-xs ">Copyright © Tikuntech</p>

  <p className="md:text-sm  text-xs ">
    <Link href={'/termsCondition'}>
      <span className="hover:text-[#92deed]"> Terms & Conditions </span>
      |
    </Link>
    <Link href={'/privacyPolicy'}>
      <span className="hover:text-[#92deed]"> Privacy Policy</span>
    </Link>
  </p>
</div>
</div>
        
      </footer>
    </>
  )
}
