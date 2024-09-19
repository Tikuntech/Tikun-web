import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const items = [
  { name: 'Web Development', url: '/webDevelopment' },
  { name: 'Mobile Development', url: '/mobileDevelopment' },
  // { name: 'Cyber Security', url: '/cyber-security' },
  { name: 'Digital Marketing', url: '/digitalMarketing' },
  { name: 'Cloud Computing', url: '/cloudComputing' },
  { name: 'Software Development', url: '/softwereDevlopment' },
  // { name: 'IT Project Management', url: '/it-project-management' },
  { name: 'Data Analysis', url: '/dataAnalysis' },
  // { name: 'Network Management', url: '/network-management' },
]

const MobileService = () => {
  return (
    <div className="rounded-2xl shadow-md p-8 bg-[#D5D9E5] mt-4 flex flex-col items-start text-black">
      <h1 className="text-black font-bold text-2xl">Service</h1>

      <ul className="list-none p-0 m-0">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center text-lg py-2 relative group transition-transform duration-300 ease-in-out hover:translate-x-2"
          >
            <a
              href={item.url}
              className="flex items-center text-lg py-2 relative group transition-transform duration-300 ease-in-out hover:translate-x-2"
            >
              <span className="mr-2 text-gray-600 group-hover:text-[#92DEED] transition-transform duration-300 ease-in-out">
                <FaAngleRight />
              </span>
              <span className="transition-transform duration-300 group-hover:text-[#92DEED] ease-in-out group-hover:translate-x-1">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileService
