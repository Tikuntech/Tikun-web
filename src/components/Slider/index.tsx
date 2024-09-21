'use client'
import React, {  useState } from 'react'
import Image from 'next/image'
import SliderImg1 from '/public/Slider/sliderImg1.jpg'
import SliderImg2 from '/public/Slider/sliderImg2.jpg'
import SliderImg3 from '/public/Slider/SliderImg3.webp'
import SliderImg4 from '/public/Slider/slierImg4.jpeg'

const images = [
  { src: SliderImg1, alt: 'Slider Image 1' },
  { src: SliderImg2, alt: 'Slider Image 2' },
  { src: SliderImg3, alt: 'Slider Image 3' },
  { src: SliderImg4, alt: 'Slider Image 4' },
]

const Slider: React.FC = (data:any) => {
//   useEffect(()=>{
// console.log(data)
//   },[data?.data?.images])

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  
  
  return data?.data?.images?.length ?
  
  
  (

    
  <div className="bg-[#11112B] p-2 md:p-10 flex flex-col items-center md:flex-row">
    <div className="flex items-center justify-between w-full md:w-auto">
      <button
        onClick={prevSlide}
        className="text-white  text-xl md:text-5xl "
      >
        ❮
      </button>

      <div className="flex-shrink-0 w-80 md:w-3/4 p-4 md:p-4">
        <Image
          src={data?.data?.images[currentIndex]}
          alt={"images[currentIndex]"}
          className="rounded-lg shadow-lg object-cover"
          width={300}
          height={300}
        />
      </div>

      <button
        onClick={nextSlide}
        className="text-white text-xl md:text-5xl md:mr-20"
      >
        ❯
      </button>
    </div>

    <div className="text-white  p-5 max-w-full md:max-w-2xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {data?.data?.title}
        {/* Beautiful Design for Your Inspiration */}
      </h2>
      <p className="leading-relaxed text-base md:text-lg">
      {data?.data?.description}
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi a
        consequuntur cum quos itaque... */}
      </p>
    </div>
  </div>
) : null
 
}

export default Slider
