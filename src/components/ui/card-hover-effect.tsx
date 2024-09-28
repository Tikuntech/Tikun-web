'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import HoverIcon from '/public/Project/ProjectIsHoverd.svg'
import { FiSlack } from 'react-icons/fi'
import { useDataContext } from '@/context/DataProjectContext'
import Image from 'next/image'
import BackgroundImage from './BackgroundImage'


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    Link: string
    _id: string
    thumbnail: string,
    images: any[]
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const { setData } = useDataContext()
  const handleTouchStart = (index: number) => {
    setActiveIndex(index)
    // Remove active state after touch
    setTimeout(() => setActiveIndex(null), 2000)
  }


  const CardGrid: React.FC = () => {
    // Array to render
    const cardItems = [1, 2, 3];
  
    return (
      <div className="container mx-auto p-4">
      {/* Responsive grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 justify-center">
        {cardItems.map((item) => (
          <div
            key={item}
            className="w-full max-w-[400px] h-[400px] bg-red-500 flex items-center justify-center rounded-lg shadow-md mx-auto"
          >
            <h2 className="text-white text-xl">Card {item}</h2>
          </div>
        ))}
      </div>
    </div>
    );
  };
  


  return (
    // <CardGrid/>
    <div className={cn('w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-4 lg:gap-5 md:gap-5 sm:gap-5 ', className)}>
      {items.map((item, idx) => (
        <Link
          onClick={() => {
            setData(item)
          }}
          href={`/project/${item._id}`}

          key={item?.Link}
          // className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onTouchStart={() => handleTouchStart(idx)}
        >
          {hoveredIndex === idx ? (
            <Card>
              <h1 className="text-black font-normal text-center">
                {item.title}
              </h1>
              <FiSlack className="text-white text-center block mx-auto mt-4" />
              <h1 className="text-white font-bold mt-4 text-center text-3xl">
                {item.title}
              </h1>

              <p className="text-xs text-center mt-10 line-clamp-3">
                {item.description}
              </p>
              <div className="flex justify-center mt-6">
                <button className="bg-black text-white p-2 rounded-md">
                  READ MORE
                </button>
              </div>
            </Card>
          ) : (
            <BackgroundImage
              // className='my-4'
              url={item?.thumbnail ? item?.thumbnail : ""}
            // className="bg-contain bg-center "
            // className={`${bg-[url()]}`}
            // className={` relative overflow-hidden bg-[linear-gradient(to_right,#CBD5E1D9,#768190D9,#1E293BD9)] `}
            >
              {/* <Image
            
                src={item?.thumbnail ? item?.thumbnail : ""}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
              
                className="z-[0]    " // Ensure the image is behind the content
              /> */}

              <div className="h-80 flex flex-col justify-end p-4 w-full">
                <div className="text-black font-normal text-left">
                  <CardDescription>{item.description}</CardDescription>
                  <CardTitle className=' mt-2'>{item.title}</CardTitle>
                </div>
              </div>
            </BackgroundImage>
          )}
        </Link>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
  bgImage
}: {
  bgImage?: string
  className?: string
  children: React.ReactNode
}) => {

  return (
    <div
    //  className="w-full max-w-[400px] h-[400px] bg-red-500 flex items-center justify-center rounded-lg shadow-md mx-auto"
      className={
        cn(
          '  text-white   rounded-md  hover:bg-custom-blue transition-colors duration-300 hover:shadow-lg  cursor-pointer  flex items-center justify-center bg-cover bg-center h-[300px] sm:h-[350px] md:h-[400px] lg:h-[370px] 1366px:h-[370px] 1470px:h-[420px] 2xl:h-[450px]',
          className
        )
      }
    >
      <div className="">{children}</div>
    </div>
  )
}




export const CardGradient = ({
  className,
  children,
  bgImage
}: {
  bgImage?: string
  className?: string
  children: React.ReactNode
}) => {

  return (
    <div

    // className='h-96 w-full'
    // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        // style={{
        //   backgroundImage: `url(${bgImage})`, // Dynamic background image
        // }}
        // style={{ backgroundImage: `url(${bgImage})` }}
        className={
          cn(
            '  bg-gradient-to-b from-gray-300/85 via-gray-500/85 to-gray-900/85 text-white h-96  w-full rounded-md hover:bg-custom-blue transition-colors  hover:shadow-lg cursor-pointer flex items-center justify-center  bg-cover bg-center   ',
            className
          )

        }
      >
        <div className="relative  bg-gradient-to-b from-gray-300/85 via-gray-500/85 to-gray-900/85 w-full h-full rounded-md ">
          <div className="">{children}</div>
        </div>

      </div>
    </div>
  )
}


export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4
      className={cn('text-white text-3xl font-bold tracking-wide', className)}
    >
      {children}
    </h4>
  )
}

export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        ' text-white tracking-wide leading-relaxed text-sm  line-clamp-3',
        className
      )}
    >
      {children}
    </p>
  )
}



