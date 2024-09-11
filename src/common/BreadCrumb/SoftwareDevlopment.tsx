import React from 'react'
import Link from 'next/link'
import { RiArrowRightSLine } from 'react-icons/ri'

const SoftwareDevlopment: React.FC = () => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-4 text-[#11112B]">
        <li>
          <Link href="/">
            <span className="flex items-center text-sm  text-[#11112B] font-medium transition-colors duration-300">
              Home
            </span>
          </Link>
        </li>
        <li>
          <RiArrowRightSLine className="text-[#11112B]" />
        </li>
        <li className="text-[#11112B] text-sm font-medium">Services</li>
        <li>
          <RiArrowRightSLine className="text-[#11112B]" />
        </li>
        <li className="text-[#11112B] text-sm font-medium">
          Software Devlopment
        </li>
      </ol>
    </nav>
  )
}

export default SoftwareDevlopment
