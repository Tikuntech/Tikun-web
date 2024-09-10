import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import BlogSearchBar from './SearchBox'
import CategorySection from './CategorySection'
import LetestPost from './LetestPost'

import BlogContactCard from './ContactCard'

const FlexSection = () => {
  return (
    <>
      <BlogSearchBar />
      <CategorySection />
      <LetestPost />
      <BlogContactCard />
    </>
  )
}

export default FlexSection
