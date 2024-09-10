import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const BlogSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Perform search logic here using searchTerm
    console.log('Search term:', searchTerm)
  }

  return (
    <div className="rounded-2xl shadow-md p-8 bg-[#D5D9E5] h-44 mt-4 flex flex-col items-start text-black">
      <p className="text-black font-semibold text-lg">Search</p>
      <form
        onSubmit={handleSubmit}
        className="md:w-full flex md:items-center mt-2"
      >
        <input
          type="text"
          className="flex-grow px-4 py-3 rounded-md border-b-2 border-black focus:outline-none ring ring-blue-300 md:ring-blue-500"
          placeholder="Enter your keywords..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          type="submit"
          aria-label="Search"
          className="ml-2 text-black font-bold px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  )
}

export default BlogSearchBar
