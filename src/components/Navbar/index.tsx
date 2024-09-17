'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import TikcunteckIcon from '../icons/TikcunteckIcon'
import Image from 'next/image'
import HomeArrowIcon from '/public/Home/HomeArrowIcon.svg'
import HomeArrowBlackIcon from '/public/Home/HomeArrowIconBlack.svg'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

const NavbarHeader: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname

  const [isOpen, setIsOpen] = useState(false)
  

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  console.log('pathnamepathname:',pathname);




  return (
    <nav className="bg-[#11112B] text-white relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 md:p-10">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden ">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo and Navigation Links */}
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/">
                <TikcunteckIcon />
              </Link>
            </div>
            <div className="hidden sm:flex sm:space-x-8 flex-grow justify-center">
              <Link href="/aboutUs">
                <span 
                
                // className="text-gray-300 hover:bg-[#92DEED] hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/aboutUs'
                    ? 'bg-[#92DEED] text-black' // Highlight when active
                    : 'text-gray-300 hover:bg-[#92DEED] hover:text-black'
                }`}
                >
                  ABOUT US
                </span>
              </Link>
              <Link href="/services">
                <span 
                // className="text-gray-300 hover:bg-[#92DEED] hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/services'
                    ? 'bg-[#92DEED] text-black' // Highlight when active
                    : 'text-gray-300 hover:bg-[#92DEED] hover:text-black'
                }`}>
                  SERVICES
                </span>
              </Link>
              <Link href="/projects">
                <span 
                // className="text-gray-300 hover:bg-[#92DEED] hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/projects'
                    ? 'bg-[#92DEED] text-black' // Highlight when active
                    : 'text-gray-300 hover:bg-[#92DEED] hover:text-black'
                }`}>
                  PROJECT
                </span>
              </Link>
              <Link href="/blogs">
                <span 
                // className="text-gray-300 hover:bg-[#92DEED] hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/blogs'
                    ? 'bg-[#92DEED] text-black' // Highlight when active
                    : 'text-gray-300 hover:bg-[#92DEED] hover:text-black'
                }`}>
                  BLOG
                </span>
              </Link>
              <Link href="/contactUs">
                <span 
                // className="text-gray-300 hover:bg-[#92DEED] hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/blogs'
                    ? 'bg-[#92DEED] text-black' // Highlight when active
                    : 'text-gray-300 hover:bg-[#92DEED] hover:text-black'
                }`}>
                  CONTACT
                </span>
              </Link>
            </div>
            <div className="hidden sm:block">
              <Link href="/contactUs">
                <span className="text-white border border-white flex px-3 py-2 rounded-md text-sm font-medium hover:text-black hover:bg-[#92DEED] transition-colors duration-300">
                  SCHEDULE CALL
                  <Image
                    src={HomeArrowIcon}
                    alt="White Arrow"
                    className="pl-4 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  />
                  {/* <Image src={HomeArrowBlackIcon} alt="Black Arrow" className="pl-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100" /> */}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed drawer inset-0 bg-black bg-opacity-50 z-40 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        id="mobile-menu"
      >
        <div className="relative w-64 bg-[#11112B] h-full z-50">
          {' '}
          {/* High z-index for the drawer */}
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            onClick={closeMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="px-4 py-12 space-y-8 p-10 pl-9">
            <Link href="/aboutUs">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                ABOUT US
              </span>
            </Link>
            <Link href="/services">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                SERVICES
              </span>
            </Link>
            <Link href="/projects">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                PROJECT
              </span>
            </Link>
            <Link href="/blogs">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                BLOG
              </span>
            </Link>
            <Link href="/contactUs">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                CONTACT
              </span>
            </Link>
            <Link href="/contactUs">
              <span className="text-gray-300 border border-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                SCHEDULE CALL
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarHeader
