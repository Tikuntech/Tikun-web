'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import TikcunteckIcon from '../icons/TikcunteckIcon'
import Image from 'next/image'
import HomeArrowIcon from '/public/Home/HomeArrowIcon.svg'
import { usePathname } from 'next/navigation'

const NavbarHeader: React.FC = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeMenu()
    }
  }

  return (
    <nav className="bg-[#11112B] text-white fixed top-0 w-full z-50 ">
      <div className="container mx-auto md:py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 pl-5 md:pl-0 1366px:pl-24 1470px:pl-20 1470px:ml-3 1536px:pl-20">
            <Link href="/">
              <TikcunteckIcon />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex space-x-8 justify-center items-center flex-grow">
            <NavLink href="/aboutUs" pathname={pathname}>
              ABOUT US
            </NavLink>
            <NavLink href="/services" pathname={pathname}>
              SERVICES
            </NavLink>
            <NavLink href="/projects" pathname={pathname}>
              PROJECTS
            </NavLink>
            <NavLink href="/contactUs" pathname={pathname}>
              CONTACT
            </NavLink>
          </div>

          {/* Desktop Schedule Call Button */}
          <div className="hidden sm:block 1366px:pr-20 1470px:mr-4">
            <Link href="/contactUs">
              <span className="text-white border border-white flex px-3 py-2 rounded-md text-sm font-medium hover:text-black hover:bg-[#92DEED] transition-colors duration-300">
                SCHEDULE CALL
                <Image
                  src={HomeArrowIcon}
                  alt="White Arrow"
                  className="pl-4 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden pr-3">
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-transform duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
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
              ) : (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={handleClickOutside}
      >
        <div
          className="relative w-64 max-w-full bg-[#11112B] h-full z-50 overflow-y-auto p-10"
          onClick={(e) => e.stopPropagation()}
        >
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
          <div className="mt-12 space-y-6">
            <NavLink href="/aboutUs" pathname={pathname} onClick={closeMenu}>
              ABOUT US
            </NavLink>
            <NavLink href="/services" pathname={pathname} onClick={closeMenu}>
              SERVICES
            </NavLink>
            <NavLink href="/projects" pathname={pathname} onClick={closeMenu}>
              PROJECTS
            </NavLink>
            <NavLink href="/contactUs" pathname={pathname} onClick={closeMenu}>
              CONTACT
            </NavLink>
            <Link href="/contactUs">
              <span
                className="block text-gray-300 border border-white hover:bg-gray-700 hover:text-white px-3 py-2 mt-3 rounded-md text-base font-medium"
                onClick={closeMenu}
              >
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

const NavLink: React.FC<{
  href: string;
  pathname: string;
  onClick?: () => void;
  children: React.ReactNode; // Define children prop
}> = ({ href, pathname, children, onClick }) => (
  <Link href={href}>
    <span
      className={`block px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
        pathname === href ? 'bg-[#92DEED] text-black' : 'text-gray-300 hover:bg-[#92DEED] hover:text-black'
      }`}
      onClick={onClick}
    >
      {children}
    </span>
  </Link>
);