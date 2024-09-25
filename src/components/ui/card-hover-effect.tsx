'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import HoverIcon from '/public/Project/ProjectIsHoverd.svg'
import { FiSlack } from 'react-icons/fi'
import { useDataContext } from '@/context/DataProjectContext'
import Image from 'next/image'

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    Link: string
    _id: string
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




  return (
    <div className={cn('w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10', className)}>
      {items.map((item, idx) => (
        <Link
          onClick={() => {
            setData(item)
          }}
          href={`/project/${item._id}`}

          key={item?.Link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onTouchStart={() => handleTouchStart(idx)}
        >
          {hoveredIndex === idx ? (
            <Card>
              <h1 className="text-black font-normal mt-4 text-center">
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
            <Card className={`bg-[url(${item?.images?.length ? item?.images[0] : ""})] bg-cover bg-center`}>
              <Image
                src={item?.images?.length ? item?.images[0] : ""}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-[-1] opacity-80" // Ensure the image is behind the content
              />
              <div className="h-80 flex flex-col justify-end p-4 w-full">
                <div className="text-black font-normal text-left">
                  <CardDescription>{item.description}</CardDescription>
                  <CardTitle>{item.title}</CardTitle>
                </div>
              </div>
            </Card>
          )}
        </Link>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      //   className={cn(
      //     "rounded-2xl h-80 w-96 p-4 overflow-hidden bg-gradient-to-b from-slate-300 to-slate-800 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20  hover:bg-custom-blue transition-colors duration-300",
      //     className
      //   )}
      className={
        isHovered
          ? cn(
            '  text-white md:h-96  px-4 py-2 rounded-md  hover:bg-custom-blue transition-colors duration-300 hover:shadow-lg  cursor-pointer',
            className
          )
          : cn(
            ' bg-gradient-to-b from-slate-300 to-slate-800 text-white px-4 py-2 md:h-96  w-full rounded-md hover:bg-custom-blue transition-colors  hover:shadow-lg cursor-pointer ',
            className
          )
      }

    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
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
