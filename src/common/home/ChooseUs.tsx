import React from 'react'
import Image from 'next/image'
import ExpertiesImg from '/public/Home/Vector (3).svg'
import TechnologyImg from '/public/Home/Vector (4).svg'
import SolutionImg from '/public/Home/Vector (5).svg'
import ResultImg from '/public/Home/Vector (6).svg'

const items = [
  {
    src: ExpertiesImg,
    alt: 'Expertise',
    width: 130,
    height: 130,
    heading: 'Expertise',
    description:
      'Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.',
  },
  {
    src: TechnologyImg,
    alt: 'Technology',
    width: 90,
    height: 90,
    heading: 'Technology',
    description:
      'We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.',
  },
  {
    src: SolutionImg,
    alt: 'Solution',
    width: 160,
    height: 160,
    heading: 'Solutions',
    description:
      'We take a personalized approach to every project, working closely with you to understand your business and create solutions.',
  },
  {
    src: ResultImg,
    alt: 'Result',
    width: 120,
    height: 120,
    heading: 'Results',
    description:
      "Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.",
  },
]

const ChooseUs: React.FC = () => {
  return (
    <div className=" py-12 px-4">
      <div className="flex flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-6 flex flex-col md:items-start md:text-left text-center items-center "
            >
              <div className="mb-4">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="object-contain"
                />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-white mb-2 mt-5">
                {item.heading}
              </h2>
              <p className="text-sm md:text-base text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
