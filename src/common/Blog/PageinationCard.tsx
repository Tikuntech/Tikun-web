import React from 'react';
import Image from 'next/image';
import CardImg1 from '../../../public/Blog/ImageCard1.png';
import CardImg2 from '../../../public/Blog/imgCard2.png';
import CardImg3 from '../../../public/Blog/ImgCard3.png';

const PageinationCard: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-6 p-4 ">
        {[
          {
            src: CardImg1,
            title: "The Benefits of Responsive Web Design for Business",
            description: "This article explores the advantages of implementing a responsive web design for businesses.",
            author: "Rajnish",
            date: "August 25, 2023",
            comments: 150
          },
          {
            src: CardImg2,
            title: "Digital Marketing Strategies for Small Businesses",
            description: "This article discusses the importance of developing a digital marketing strategy for small businesses.",
            author: "Dheeraj",
            date: "June 10, 2023",
            comments: 200
          },
          {
            src: CardImg3,
            title: "The Future of Web Development: 2023 Trends to Watch",
            description: "This article explores the top trends that are expected to shape the landscape of web development in 2023.",
            author: "Himahsu",
            date: "January 9, 2023",
            comments: 300
          }
        ].map((post, index) => (
          <div key={index} className="bg-white rounded-md shadow-md overflow-hidden ">
            <Image
              src={post.src}
              alt={post.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                  <p className="text-gray-600 text-sm">{post.author}</p>
                </div>
                <p className="text-gray-600 text-sm">{post.date}</p>
              </div>
              <div className="flex items-center justify-end mt-2">
                <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-gray-600 text-sm">
                  {post.comments}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex pl-20 mt-12 " >
        {[1, 2, 3].map(num => (
          <button key={num} className="bg-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md text-gray-600 text-sm mr-2 border border-black ">
            {num}
          </button>
        ))}
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-gray-600 text-sm">
          &#8594;
        </button>
      </div>
    </>
  );
};

export default PageinationCard;
