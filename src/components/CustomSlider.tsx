// import React, { useState } from 'react';
// import { CustomModalImage } from './CustomModalImage';
// import { BackwardIcon } from '@heroicons/react/24/solid';
// import { RiArrowRightSLine } from "react-icons/ri";
// import { MdKeyboardArrowLeft } from "react-icons/md";

// interface CustomSliderProps {
//   images: string[]; // Array of image URLs
// }

// const CustomSlider: React.FC<CustomSliderProps> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isOpen, setOpen] = useState({
//     isVisible: false,
//     imageurl: ""

//   });

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative w-full max-w-3xl mx-auto">
//       {/* Main Slider */}
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {images.map((image, index) => (
//             <div key={index} className="w-full flex-shrink-0"  >
//               <img

//                 src={image} alt={`Slide ${index}`} className="w-full h-[700px] object-cover" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         className="absolute top-1/2 transform -translate-y-1/2 bg-white text-black p-1 md:-ml-5  rounded-full"
//         onClick={handlePrev}
//       >
//       <MdKeyboardArrowLeft className='w-6 h-6'/>
//       </button>
//       <button
//         // className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded"
//          className="absolute md:-right-5 top-1/2 transform -translate-y-1/2 bg-white text-black p-1  rounded-full flex items-center"
//         onClick={handleNext}
//       >
//         <RiArrowRightSLine className='w-6 h-6'/>
//       </button>

//       {/* Thumbnail Navigation */}
//       <div className="mt-4 flex space-x-2 overflow-x-auto">
//         {images.map((image, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`flex-shrink-0 w-16 h-16 border-4 rounded-md ${index === currentIndex ? 'border-white' : 'border-transparent'}`}
//           >
//             <img src={image} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
//           </button>
//         ))}
//       </div>

//       {/* <CustomModalImage
//         imageUrl={isOpen?.imageurl}
//         isOpen={true} onClose={() => {
//           setOpen({ isVisible: false, imageurl: "" })
//         }} /> */}
//     </div>
//   );
// };

// export default CustomSlider;

import React, { useState, useRef, useEffect } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { MdKeyboardArrowLeft } from 'react-icons/md'

interface CustomSliderProps {
  images: string[] // Array of image URLs
}

const CustomSlider: React.FC<CustomSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const thumbnailContainerRef = useRef<HTMLDivElement>(null) // Ref for thumbnail container

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Scroll thumbnails into view whenever `currentIndex` changes
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumbnail =
        thumbnailContainerRef.current.children[currentIndex]
      if (activeThumbnail) {
        // Scroll the selected thumbnail into view
        activeThumbnail.scrollIntoView({
          behavior: 'smooth',
          inline: 'center', // Scroll horizontally to the center
          block: 'nearest', // No vertical scroll needed
        })
      }
    }
  }, [currentIndex])

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Main Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-[700px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 bg-white text-black p-1 md:-ml-5 rounded-full"
        onClick={handlePrev}
      >
        <MdKeyboardArrowLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute md:-right-5 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full flex items-center"
        onClick={handleNext}
      >
        <RiArrowRightSLine className="w-6 h-6" />
      </button>

      {/* Thumbnail Navigation */}
      <div
        ref={thumbnailContainerRef} // Attach ref to the container
        className="mt-4 flex space-x-2 overflow-x-auto scrollbar-hide"
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 w-16 h-16 border-4 rounded-md ${index === currentIndex ? 'border-white' : 'border-transparent'}`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default CustomSlider
