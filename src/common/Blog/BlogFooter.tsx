import React from 'react';
import Image from 'next/image';
import BlogFooterWire from '../../../public/Blog/BlogFooterWire.svg'


const BlogFooter: React.FC = () => {
  return (
    <>
<footer className="bg-gray-100 mt-12 ">
        <div className="container mx-auto flex justify-between items-center px-4">  
          <div>
            <h3 className="font-bold text-xl mb-4">tikuntech</h3>
            <Image
              src="/tikuntech-logo.svg"
              alt="Tikuntech Logo"
              width={100}
              height={100}
            />
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Newsletter</h3>
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end mt-4">
              <a href="#" className="mr-4">
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="mr-4">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="mr-4">
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Explore</h3>
            <ul className="list-none">
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Contact</h3>
            <ul className="list-none">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Phone
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Address
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Social Media
                </a>
              </li>
            </ul>
          </div>
        
        </div>
        <Image src={BlogFooterWire} alt='BlogFooterWire'/>
      </footer>


     </>
  );
};

export default BlogFooter;
