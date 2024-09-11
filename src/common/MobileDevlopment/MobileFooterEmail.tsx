'use client'
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const MobileFooterEmail: React.FC = () => {
  const [email, setEmail] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center w-full">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
        className="w-full flex-grow px-4 py-3  border-b-2 bottom-1 border-b-custom-black  bg-[#D5D9E5] focus:border-transparent  border border-[#D5D9E5]"
        required
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center justify-center p-2"
      >
        <FaArrowRightLong className="text-[#11112B]" />
      </button>
    </form>
  )
}

export default MobileFooterEmail
