import React, { useState } from "react";
import Image from "next/image";
import MassgImg from "../../../public/Contact/Rectangle (1).png";

const ContacMassage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  return (
    <>
      {/* <div className='flex justify-center mt-8 h-full bg-sky-400'> */}
      {/* Card Container */}
      <div className="relative w-full max-w-xl bg-sky-400 ">
        {/* Image */}
        <Image
          src={MassgImg}
          alt="Location"
          width={600}
          height={400}
          className="object-cover rounded-lg"
        />
        {/* Form Overlay */}
        <div className="absolute inset-0 p-10 flex flex-col items-center justify-center">
          {/* <form className="flex flex-col space-y-4 bg-custom-black  rounded-lg w-2/3">
           
            <div className="flex gap-6">
              <div className="flex flex-col pl-10">
                <p className="font-semibold text-black">Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 p-2 rounded-md border border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-black">Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 p-2 rounded-md border border-gray-300"
                />
              </div>
            </div>
           
            <p className=" text-black">Message</p>
            <textarea
              placeholder="Message"
              rows={4}
              className="p-2 rounded-md border border-gray-300"
            ></textarea>
            <div className="flex items-center space-x-">
              <input
                type="checkbox"
                id="consent"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <p className="text-sm">
                By ticking this box, I am consenting to be sent monthly articles
                and promotions through tickuntech newsletter.
              </p>
              <button
                type="submit"
                className=" text-white p-2 rounded-md bg-black "
              >
                Send
              </button>
            </div>
          </form> */}





<div className="max-w-4xl mx-auto ">
      <h2 className="text-2xl font-bold mb-6">Send Us Message</h2>

      <h3 className=" mt-5 text-white">Have any questions regarding our services? Send us your message.</h3>
      <form onSubmit={()=>{}} className="space-y-4 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-custom-black">
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
            <label htmlFor="email" className="block text-sm font-medium text-custom-black">
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
          <label htmlFor="message" className="block text-sm font-medium text-custom-black">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter Your Message ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
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
          <p className="text-green-500 mt-4">Thank you for your message! We will get back to you soon.</p>
        )}
        {submissionStatus === 'error' && (
          <p className="text-red-500 mt-4">Something went wrong. Please try again later.</p>
        )}
      </form>
    </div>



        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ContacMassage;
