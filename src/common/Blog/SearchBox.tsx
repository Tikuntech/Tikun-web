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
        className="md:w-full  w-full flex md:items-center mt-2"
      >
        <div className="  relative w-full max-w-md">
          <input
            type="text"
            className=" w-full flex-grow px-4 py-3  border-b-2 bottom-1 border-b-custom-black  bg-[#D5D9E5] focus:border-transparent  border border-[#D5D9E5]"
            placeholder="Enter your keywords..."
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            type="submit"
            aria-label="Search"
            className="  absolute right-3 top-1/2 transform -translate-y-1/2 ml-2 text-black font-bold px-4 py-2 rounded-md  flex items-center"
          >
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  )
}

export default BlogSearchBar
