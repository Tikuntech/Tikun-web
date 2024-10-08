import React from 'react'
import Image from 'next/image'
import CardImg1 from '/public/Blog/ImageCard1.png'
import CardImg2 from '/public/Blog/imgCard2.png'
import CardImg3 from '/public/Blog/ImgCard3.png'
import { FaRegHeart } from 'react-icons/fa'

import { fetchBlogs } from '@/services/api'
import { useQuery } from 'react-query'
import Loading from '@/components/Loading/Loading'
const moment = require('moment')
const PageinationCard: React.FC = () => {
  const { data, error, isLoading } = useQuery('blog', fetchBlogs)
  console.log('datadatadata', JSON.stringify(data?.data))
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="flex flex-col gap-6 p-4">
        {// [
        //   {
        //     src: CardImg1,
        //     title: "The Benefits of Responsive Web Design for Business",
        //     description:
        //       "This article explores the advantages of implementing a responsive web design for businesses.",
        //     author: "",
        //     date: "August 25, 2023",
        //     comments: 150,
        //   },
        //   {
        //     src: CardImg2,
        //     title: "Digital Marketing Strategies for Small Businesses",
        //     description:
        //       "This article discusses the importance of developing a digital marketing strategy for small businesses.",
        //     author: "",
        //     date: "June 10, 2023",
        //     comments: 200,
        //   },
        //   {
        //     src: CardImg3,
        //     title: "The Future of Web Development: 2023 Trends to Watch",
        //     description:
        //       "This article explores the top trends that are expected to shape the landscape of web development in 2023.",
        //     author: "",
        //     date: "January 9, 2023",
        //     comments: 300,
        //   },
        // ].

        data?.data?.map((post: any, index: any) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md overflow-hidden relative"
          >
            <div className="relative">
              <Image
                src={CardImg1}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="absolute bottom-4 left-4 flex space-x-2 gap-2 p-4  ">
                <button className="bg-[#11112B] text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 ">
                  DESIGN
                </button>
                <button className="bg-[#11112B] text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600">
                  DEVELOPMENT
                </button>
              </div>
            </div>

            <div className="p-4 mt-12">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4 ">{post.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                  <p className="text-gray-600 text-sm">{post.author}</p>
                </div>
                {/* <p className="text-gray-600 text-sm">{post.date}</p> */}
              </div>

              {/* <div className="flex items-center justify-end mt-2">
                <FaRegHeart/>
                <button className=" hover:bg-gray-300 px-4 py-2 rounded-md text-gray-600 text-sm">
                  {post.comments}
                </button>
              </div> */}
              <div className="flex justify-between">
                <div className="flex min-w-0 gap-5 mt-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {'Dheeraj'}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {moment(post?.createdAt).format('MMMM D, YYYY')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-2">
                  <FaRegHeart />
                  <button className=" hover:bg-gray-300 px-4 py-2 rounded-md text-gray-600 text-sm">
                    {post.comments}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex pl-20 mt-12">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className="bg-[#D5D9E5] px-4 py-2 rounded-md text-gray-600 text-sm mr-2 border border-black"
          >
            {num}
          </button>
        ))}
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-gray-600 text-sm">
          &#8594;
        </button>
      </div>
    </>
  )
}

export default PageinationCard
