"use client"
import { useEffect, useState } from "react";


import { CgMenuRight } from "react-icons/cg";

// import DentalistLogo from "../../assets/svg/logo.png";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

// import NavLinkItems from "./NavLinkItems";
// import MobileMenu from "./MobileMenu";
// import VioletButton from "../UI/VioletButton";


const HeaderCustomerNavbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const openMobileMenu = () => setMobileMenu(true);
  const closeMobileMenu = () => setMobileMenu(false);

  // to add shadow on Header when scrolling
  const [showShadow, setShowShadow] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 20 ? setShowShadow(true) : setShowShadow(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [showShadow]);

  return (
    <>
      {/* MobileMenu */}
      <MobileMenu isOpen={mobileMenu} onClose={closeMobileMenu} />

      {/* Header itself */}
      <header
        className={
          showShadow
            ? `sticky top-0 bg-red-500 backdrop-blur-md z-30 pt-6 pb-8 px-5 
            shadow-[#0000001a_0px_1px_3px_0px,_#0000000f_0px_1px_2px_0px] duration-300`
            : `sticky top-0  bg-red-500 backdrop-blur-md z-30 pt-6 pb-8 px-5 duration-300`
        }
      >
        <nav
          className="max-w-screen-laptopM w-full mx-auto min-h-12 flex
          items-center justify-between gap-x-6 whitespace-nowrap"
        >
          {/* site logo */}
          <Link
            href="/navy-landing-page"
            className="hover:opacity-70 active:scale-[.98] duration-300"
          >
            {/* <img 
              src={DentalistLogo}
              alt="NavyRoute"
              className="rounded-full w-20 h-20"
             
            /> */}
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
          </Link>

          {/* nav-links */}
          <menu
            className="hidden tablet:flex items-center justify-center
            text-violet-dark font-bold text-base laptop:text-lg
            gap-x-5 laptop:gap-x-7 laptopM:gap-x-10"
          >
            {/* <NavLinkItems /> */}
          </menu>

          {/* Book an appointment Button */}
          {/* <VioletButton
            isLink={true}
            link="/navy-landing-page#book-appointment"
            addStyles="hidden laptopM:block text-sm laptop:text-base
            px-6 py-4 rounded-xl after:rounded-xl mr-5"
          >
            Book an Route
          </VioletButton> */}

          {/* btn show mobile menu */}
          <button
            onClick={openMobileMenu}
            className="bg-violet text-white rounded-xl text-xl px-[10px] py-2 
            mobileM:px-3 mobileM:text-2xl tablet:text-xl laptop:text-3xl laptopM:hidden
            hover:bg-white hover:shadow-[0_0_0_2.5px_#0284C7] hover:text-violet 
            active:shadow-[0_0_0_2.5px_#0284C7,#6523d766_0px_-50px_36px_-28px_inset] 
            duration-300"
          >
            <CgMenuRight />
          </button>
        </nav>
      </header>
    </>
  );
};

export default HeaderCustomerNavbar;