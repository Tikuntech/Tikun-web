import React from 'react'

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col items-start self-center px-3.5 py-3.5 mt-12 w-full bg-teal-200 rounded-lg text-slate-900 h-full">
      <h2 className="text-xl font-bold">Send Us Message</h2>
      <p className="mt-1.5 text-xs leading-normal text-white">
        Have any questions regarding our services? Send us your message.
      </p>
      <div className="flex gap-5 justify-between mt-3.5 max-w-full text-xs font-bold leading-none whitespace-nowrap w-[182px]">
        <label htmlFor="name">Name</label>
        <label htmlFor="email">Email</label>
      </div>
      <div className="flex gap-2 self-stretch mt-1 text-xs leading-normal">
        <input
          type="text"
          id="name"
          className="flex flex-col justify-center items-start px-3.5 py-2 bg-white rounded-md"
          placeholder="Enter Your Name ..."
          aria-label="Enter Your Name"
        />
        <input
          type="email"
          id="email"
          className="flex flex-col justify-center items-start px-3.5 py-2 bg-white rounded-md"
          placeholder="Enter Your Email Address ..."
          aria-label="Enter Your Email Address"
        />
      </div>
      <label
        htmlFor="message"
        className="z-10 mt-2 text-xs font-bold leading-3"
      >
        Message
      </label>
      <textarea
        id="message"
        className="flex flex-col items-start self-stretch px-3.5 pt-2 pb-12 text-xs leading-normal bg-white rounded-md"
        placeholder="Enter Your Message ..."
        aria-label="Enter Your Message"
      ></textarea>
      <div className="flex gap-10 mt-2 ml-3 text-white">
        <label className="text-xs leading-loose">
          <input type="checkbox" className="sr-only" />
          <span className="ml-2">
            By ticking this box, I am consenting to be sent monthly articles and
            promotions through tickuntech newsletter.
          </span>
        </label>
        <button
          type="submit"
          className="px-4 py-2.5 text-xs font-bold leading-none whitespace-nowrap rounded-md bg-slate-900"
        >
          SUBMIT
        </button>
      </div>
    </form>
  )
}

export default ContactForm
