import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import BlogSearchBar from '../Blog/SearchBox'
import CategorySection from '../Blog/CategorySection'
import LetestPost from '../Blog/LetestPost'
import ContactCard from '../Blog/ContactCard'
import MobileService from './MobileService'

const MobileFlexSection = () => {
  return (
    <>
      {/* <BlogSearchBar /> */}
      {/* <CategorySection/> */}
      {/* <LetestPost/> */}
      <MobileService />
      <ContactCard />
    </>
  )
}

export default MobileFlexSection
