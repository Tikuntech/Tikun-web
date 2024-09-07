"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TikcunteckIcon from '../icons/LightTikcunteckIcon';

const LightNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
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
                <span className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">ABOUT US</span>
              </Link>
              <Link href="/services">
                <span className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">SERVICES</span>
              </Link>
              <Link href="/projects">
                <span className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">PROJECT</span>
              </Link>
              <Link href="/blogs"> 
                <span className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">BLOG</span>
              </Link>
              <Link href="/contactUs"> 
                <span className="text-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">CONTACT</span>
              </Link>
            </div>
            <div className="hidden sm:block">
              <Link href="/signup">
                <span className="text-black border border-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">SIGN IN</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white bg-opacity-90 z-40 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} id="mobile-menu">
        <div className="relative w-64 bg-white h-full">
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
            onClick={closeMenu}
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="px-4 py-6 space-y-4">
            <Link href="/aboutUs">
              <span className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium">ABOUT US</span>
            </Link>
            <Link href="/services">
              <span className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium">SERVICES</span>
            </Link>
            <Link href="/projects">
              <span className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium">PROJECT</span>
            </Link>
            <Link href="/blogs">
              <span className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium">BLOG</span>
            </Link>
            <Link href="/contactUs">
              <span className="text-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium">CONTACT</span>
            </Link>
            <Link href="/signup">
              <span className="text-black border border-black hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium">SIGN IN</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LightNavbar;
