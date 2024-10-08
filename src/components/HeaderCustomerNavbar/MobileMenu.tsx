import { useEffect } from 'react'

import { CgClose } from 'react-icons/cg'
// import NavLinkItems from "./NavLinkItems";
// import VioletButton from "./../UI/VioletButton";

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible')
  }, [isOpen])

  return (
    <menu
      className={
        isOpen
          ? `fixed w-full h-full pt-16 flex flex-col gap-y-6 items-center font-bold 
          text-lg mobileXL:text-xl laptop:text-2xl gap-x-6 bg-violet-light/50 
          text-violet-dark backdrop-blur-md laptopM:hidden z-50
          transition-transform duration-500`
          : `fixed w-full h-full pt-16 flex flex-col gap-y-6 items-center font-bold 
          text-lg mobileXL:text-xl laptop:text-2xl gap-x-6 bg-violet-light/50 
          text-violet-dark backdrop-blur-md laptopM:hidden z-50
          transition-transform duration-500 translate-x-[100%]`
      }
    >
      {/* btn to close */}
      <button
        onClick={onClose}
        className="absolute right-3 top-2 bg-[#f4f4f4] rounded-full p-[6px] hover:bg-violet-dark
        hover:text-white active:shadow-[#6523d766_0px_-50px_36px_-28px_inset] duration-300"
      >
        <CgClose size={28} />
      </button>

      {/* nav-links */}
      {/* <NavLinkItems hideMobileMenu={onClose} /> */}

      {/* btn to Book an appointment */}
      {/* <VioletButton
        isLink={true}
        link="/navy-landing-page#book-appointment"
        onClick={onClose}
        addStyles="mt-4 text-sm laptop:text-base px-6 py-4 rounded-xl 
        after:rounded-xl"
      >
        Book an Route
      </VioletButton> */}
    </menu>
  )
}

export default MobileMenu
