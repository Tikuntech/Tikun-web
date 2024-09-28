import React, { useState } from 'react'
import Image from 'next/image'
import MassgImg from '/public/Contact/Rectangle (1).png'

const ContacMobile: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className="relative  h-screen   bg-sky-400">
      {/* Image */}
      <Image
        src={MassgImg}
        alt="Location"
        layout="responsive"
        width={600}
        height={400}
        className="object-cover rounded-lg"
      />
      {/* Form Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-full  mx-auto">
          <h2 className="text-2xl  font-bold  text-black text-center">
            Send Us a Message
          </h2>

          <h3 className=" text-white text-xs text-center">
            Have any questions regarding our services? Send us your message.
          </h3>

          <form onSubmit={handleSubmit} className="">
            <div className="">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-custom-black"
                >
                  Name
                </label>
                <input
                  placeholder="Enter Your Name ..."
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-custom-black"
                >
                  Email
                </label>
                <input
                  placeholder="Enter Your Email Address ..."
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-custom-black"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
           
              className={`w-full px-4 py-2 text-white font-semibold rounded-lg shadow-md ${
                'bg-[#11112B] hover:bg-[#11112B] focus:ring-2 focus:ring-blue-500'
              }`}
            >
              {'Submit'}
            </button>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContacMobile
