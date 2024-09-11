'use client'
import { useState } from 'react'
import LightNavbar from '@/components/LightNavbar'
import Head from 'next/head'
import Image from 'next/image'
import BoxImg from '/public/Blog/colorblog.svg'
import BlogBreadCrumb from '@/common/BreadCrumb/BlogBreadCrumb'
import PageinationCard from '@/common/Blog/PageinationCard'
import BlogFooterWire from '/public/Blog/BlogFooterWire.svg'
import FlexSection from '@/common/Blog/FlexSection'
import BlogFooter from '@/common/Blog/BlogFooter'
import ReadyCard from '@/common/Blog/ReadyCard'
import { fetchBlogs } from '@/services/api'
import { useQuery } from 'react-query'
import Loading from './loading'
import BackgroundImg from '../../../public/Blog/BlogFooterWire.svg'

const images = [
  { src: BoxImg, alt: 'Graphic 1', width: 30, height: 40 },
  { src: BoxImg, alt: 'Graphic 2', width: 40, height: 40 },
  { src: BoxImg, alt: 'Graphic 3', width: 40, height: 40 },
  // Add more images as needed
]

const randomPosition = () => ({
  top: `${Math.random() * 60 + 10}%`,
  left: `${Math.random() * 50 + 10}%`,
})

export default function page() {
  return (
    <>
      <main className="min-h-screen bg-[#D5D9E5] relative">
        <LightNavbar />
        <div className="pt-10 md:pt-20 p-5">
          <div className="md:ml-20">
            <BlogBreadCrumb />
          </div>

          <div className="flex flex-col md:flex-row items-start space-y-8 md:space-x-8 md:space-y-0">
            <h1 className="text-4xl md:text-7xl text-[#11112B] font-bold flex-shrink-0 md:ml-20 mt-5">
              Blog
            </h1>
            <div className="relative hidden md:block w-full">
              {images.map((img, index) => (
                <div key={index} className="absolute" style={randomPosition()}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-around md:p-20 gap-10 ">
          <div className="md:w-full">
            <PageinationCard />
          </div>
          <div className="md:w-1/2 p-6">
            <FlexSection />
          </div>
        </div>

        <div className="items-center justify-center p-6">
          <ReadyCard />
        </div>

        <BlogFooter />
      </main>
    </>
  )
}
