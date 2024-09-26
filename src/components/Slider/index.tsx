'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CarouselState } from 'react-responsive-carousel/lib/ts/components/Carousel/types';
import './slider.css';
import CustomSlider from '../CustomSlider';
type LinksProps = {
  ios: string,
  playstore: string,
  website: string,
}
type MyComponentProps = {
  data: {
    images: string[];
    title: string;
    description: string;
    Links: LinksProps,
    yearOfProject: string
  };
};

const Slider: React.FC<MyComponentProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);





;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + data.images.length) % data.images.length
    );
  };

  const handleChange = (index: number) => {
    setActiveIndex(index);
  };





  const renderThumbs = () => {
    return data?.images.map((image, index) => (
      <div key={index} >
        <Image
        
        src={image}
        alt={`Slide ${currentIndex}`}
        className={`w-30 h-30 object-cover border-5 ${activeIndex === index ? 'border-white' : 'border-gray-500 object-contain'
          }`}
        width={100}
        height={50}
        
        loading="lazy" // Optional: adds lazy loading
        placeholder="blur"
        layout="responsive"
        blurDataURL="https://media.istockphoto.com/id/1226328533/vector/black-and-white-loading-circle-indicator-on-white-background.jpg"
      />
        </div>

    ));
  };

  return data.images.length ? (
    <div className="bg-gradient-to-br from-[#0A0A23] to-[#11112B] p-6 md:p-12 flex flex-col md:flex-row md:space-x-10 rounded-lg shadow-xl items-center justify-center space-y-6 md:space-y-0">
      {/* Image Slider Section */}
      <div className="flex items-center justify-between w-full md:w-auto relative">
        {/* <button
          onClick={prevSlide}
          className="text-white bg-white/10  md:mr-10 hover:bg-white/20 p-7 rounded-full w-8 h-8 md:w-10 md:h-10 text-2xl md:text-3xl transition-all flex items-center justify-center"
          aria-label="Previous Slide"
        >
          ❮
        </button> */}

        <div
          className="w-full md:w-[350px] relative"
        >
          {/* <Image
          //  loader={localImageLoader}
            src={data.images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out"
            width={350}
            height={200}
              loading="lazy" // Optional: adds lazy loading
        placeholder="blur"
            layout="responsive"
            blurDataURL="https://media.istockphoto.com/id/1226328533/vector/black-and-white-loading-circle-indicator-on-white-background.jpg"
          />
          <div className="absolute top-2 right-2 bg-white/80 px-2 py-1 text-sm font-semibold text-gray-800 rounded-md shadow">
            {`${currentIndex + 1} / ${data.images.length}`}
          </div> */}



          {/* <Carousel
          //  className="h-64"
            onClickThumb={() => { }}
            showArrows={true}
            infiniteLoop={true}
            dynamicHeight={false}
            showThumbs={true}
            thumbWidth={100}
            
           
            
// animationHandler={myAnimationHandler}


            selectedItem={activeIndex}   // Set the selected slide
            onChange={handleChange}      // Handle slide changes


            renderArrowNext={() => {
              return null
            }}
            renderArrowPrev={() => {
              return null
            }}
         
            renderThumbs={renderThumbs}
          >


            {data.images?.map((items, index) => {
              return (<div>
                <Image
                 style={{
                  maxWidth: "513px",
                  objectFit: "contain",
                  maxHeight: "300px",
                }}
                  src={items}
                  alt={`Slide ${currentIndex}`}
                  className="rounded-lg shadow-lg  transition-transform duration-700 ease-in-out object-contain "
                  width={350}
                  height={200}
                  loading="lazy" // Optional: adds lazy loading
                  placeholder="blur"
                  layout="responsive"
                  blurDataURL="https://media.istockphoto.com/id/1226328533/vector/black-and-white-loading-circle-indicator-on-white-background.jpg"
                />

              </div>
              )
            })}




          </Carousel> */}

          <CustomSlider images={data?.images}/>


        </div>

        {/* <button
          onClick={nextSlide}
          className="text-white bg-white/10 md:ml-10 p-7 hover:bg-white/20 rounded-full w-8 h-8 md:w-10 md:h-10 text-2xl md:text-3xl transition-all flex items-center justify-center"
          aria-label="Next Slide"
        >
          ❯
        </button> */}
      </div>

      {/* Text Content Section */}
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          {data?.title}
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          {data?.description}
        </p>


        <p className=" md:text-xl font-extrabold text-white">
          {`Year Of Project   :  ${data?.yearOfProject}`}
        </p>

        {data?.Links?.playstore && <Link href={data?.Links?.playstore}>
          <button className="border border-white hover:bg-custom-blue  mt-10 hover:text-black text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-md shadow-lg transition-all">
            Android Link
          </button>
        </Link>}
        {data?.Links?.ios && <Link href={data?.Links?.ios}>
          <button className=" ml-2 border border-white hover:bg-custom-blue  mt-10 hover:text-black text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-md shadow-lg transition-all">
            IOS Link
          </button>
        </Link>}
        {data?.Links?.website && <Link href={data?.Links?.website}>
          <button className=" ml-2 border border-white hover:bg-custom-blue  mt-10 hover:text-black text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-md shadow-lg transition-all">
            Web Link
          </button>
        </Link>}
      </div>
    </div>
  ) : null;
};

export default Slider;
