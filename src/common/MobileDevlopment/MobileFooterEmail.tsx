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
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
        className="flex-1 p-2 md:pl-4 pr-12 border border-black rounded-lg bg-[#D5D9E5] text-[#11112B] placeholder-gray-400"
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
