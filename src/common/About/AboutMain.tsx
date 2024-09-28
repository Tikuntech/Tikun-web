import React from 'react'
import Image from 'next/image'
import ExpertiesImg from '/public/aboutus/Expert.svg'
import TechnologyImg from '/public/aboutus/technology.svg'
import SolutionImg from '/public/aboutus/solution.svg'
import ResultImg from '/public/aboutus/result.svg'

const items = [
  {
    src: ExpertiesImg,
    alt: 'Expertise',
    width: 150,
    height: 150,
    heading: 'Expertise',
    description:
      'Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.',
  },
  {
    src: TechnologyImg,
    alt: 'Technology',
    width: 100,
    height: 100,
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
    width: 130,
    height: 130,
    heading: 'Results',
    description:
      "Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.",
  },
]

const AboutMain: React.FC = () => {
  return (
    <div className=" md:h-full md:p-1  ">
      <div className="md:pl-4">
        <div className="md:flex md:flex-row flex-wrap justify-between ">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start w-full sm:w-1/2 md:w-1/4 p-4 bg-white  rounded-lg"
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
              <div className="text-center md:text-left">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.heading}
                </h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutMain
