import React, { useState } from 'react'
import Image from 'next/image'
import MassgImg from '/public/Contact/Rectangle (1).png'

const ContacMassage: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState(null)
  return (
    <>
      <div className="relative w-full h-full md:max-w-xl  bg-sky-400 ">
        {/* Image */}
        <Image
          src={MassgImg}
          alt="Location"
          width={600}
          height={400}
          className="object-cover rounded-lg "
        />
        {/* Form Overlay */}
        <div className="absolute inset-0 md:p-10 md:flex md:flex-col items-center justify-center">
          <div className="md:max-w-4xl md:mx-auto p-20 ">
            <h2 className="md:text-4xl font-bold md:mb-6 text-black">
              Send Us Message
            </h2>

            <h3 className=" mt-5 text-white">
              Have any questions regarding our services? Send us your message.
            </h3>
            <form onSubmit={() => {}} className="space-y-4 mt-5">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                <div>
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
                <div>
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
                disabled={isSubmitting}
                className={`w-full px-4 py-2 text-white font-semibold rounded-lg shadow-md  ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#11112B] hover:bg-[#11112B] focus:ring-2 focus:ring-blue-500'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              {submissionStatus === 'success' && (
                <p className="text-green-500 mt-4">
                  Thank you for your message! We will get back to you soon.
                </p>
              )}
              {submissionStatus === 'error' && (
                <p className="text-red-500 mt-4">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContacMassage
