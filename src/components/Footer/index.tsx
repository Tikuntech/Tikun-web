import { Button, Input } from '@nextui-org/react'
import Link from 'next/link'
import TikcunteckLogo from '../icons/TikcunteckIcon'
import footerline from '../../../public/Footer/Line (4).svg'
import Image from 'next/image'
import FooterEmailInput from '@/common/footer/EmailInput'

export default function Footer() {
  return (
    <footer className="bg-[#11112B] text-white py-8 p-4     ">
      <div className="container mx-auto md:px-4 flex flex-col items-center md:flex-row md:justify-between">
        {/* Logo and Copyright Section */}
        <div className="hidden md:flex flex-col items-center md:items-start md:space-y-28 space-y-2 mb-10 md:mb-0">
          <TikcunteckLogo />
          <p className="text-sm">Copyright © Tarun Dixit</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-8 md:space-y-0 w-full md:w-auto md:ml-96  md:mb-5">
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
          <div className="flex flex-col w-full md:w-64">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to stay informed about our latest
              products, services, and promotions. Feel free to unsubscribe
              anytime!
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              {/* <input
                                type="email"
                                className="bg-gray-700 rounded-l-lg px-4 py-2 text-gray-300 placeholder-gray-500 w-full md:w-auto"
                                placeholder="Enter Your Email Address ..."
                            />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg w-full md:w-auto">
                                Subscribe
                            </button> */}
              <FooterEmailInput />
            </div>
          </div>
        </div>
      </div>

      <Image src={footerline} alt="ServiceLine" className="" />
      <p className="text-center mt-5">Terms & Conditions | Privacy Policy</p>
    </footer>
  )
}
