// import React from 'react';
// import Image from 'next/image';
// import BlogFooterWire from '../../../public/Blog/Wireframe Vector (1).png';
// import CtaButton from '../../../public/Blog/CTA Button.svg';
// import instagramIcon from '../../../public/Blog/Instagram Icon.svg';
// import FacebookIcon from '../../../public/Blog/Facebook Icon.svg';
// import TwiterIcon from '../../../public/Blog/Twitter Icon.svg';

// const BlogFooter: React.FC = () => {
//   return (
//     <footer className="relative h-full flex flex-col items-center justify-center px-4 py-10 bg-gray-100">
//       <div className="relative w-full h-full max-w-screen-lg mx-auto">
//         <Image
//           src={BlogFooterWire}
//           alt='BlogFooterWire'
//           layout='fill'
//           quality={100}
//           objectFit='cover' 
//           priority
//           className='absolute inset-0'
//         />
//         <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0 md:space-x-10">
//           <div className="flex flex-col items-center md:items-start space-y-6 md:order-1">
//             <h3 className="font-bold text-2xl">tikuntech</h3>
//             <Image
//               src={CtaButton}
//               alt="CTA Button"
//               width={100}
//               height={100}
//               className='hidden md:block'
//             />
//           </div>

//           <div className="flex flex-col items-center md:items-start space-y-6 md:order-4">
//             <h3 className="font-bold text-xl">Newsletter</h3>
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <div className="flex gao-5 mt-10">
//               <a href="#" className="flex items-center justify-center w-6 h-6">
//                 <Image
//                   src={instagramIcon}
//                   alt="Instagram"
//                   width={24}
//                   height={24}
//                 />
//               </a>
//               <a href="#" className="flex items-center justify-center w-6 h-6">
//                 <Image
//                   src={FacebookIcon}
//                   alt="Facebook"
//                   width={24}
//                   height={24}
//                 />
//               </a>
//               <a href="#" className="flex items-center justify-center w-6 h-6">
//                 <Image
//                   src={TwiterIcon}
//                   alt="Twitter"
//                   width={24}
//                   height={24}
//                 />
//               </a>
//             </div>
//           </div>

//           <div className="flex flex-col items-center md:items-start space-y-6 md:order-2">
//             <h3 className="font-bold text-xl">Explore</h3>
//             <ul className="list-none space-y-2">
//               <li><a href="#" className="hover:text-blue-500">About Us</a></li>
//               <li><a href="#" className="hover:text-blue-500">Services</a></li>
//               <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
//               <li><a href="#" className="hover:text-blue-500">Blog</a></li>
//               <li><a href="#" className="hover:text-blue-500">Contact</a></li>
//             </ul>
//           </div>

//           <div className="flex flex-col items-center md:items-start space-y-6 md:order-3">
//             <h3 className="font-bold text-xl">Contact</h3>
//             <ul className="list-none space-y-2">
//               <li><a href="#" className="hover:text-blue-500">Email</a></li>
//               <li><a href="#" className="hover:text-blue-500">Phone</a></li>
//               <li><a href="#" className="hover:text-blue-500">Address</a></li>
//               <li><a href="#" className="hover:text-blue-500">Social Media</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default BlogFooter;
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
// import TikcunteckLogo from "../icons/TikcunteckIcon";
import footerline from '/public/Footer/Line (4).svg'
import Image from "next/image";
import FooterEmailInput from "@/common/footer/EmailInput";
import MobileFooterEmail from "../MobileDevlopment/MobileFooterEmail";

export default function Footer() {
    return (
        <footer className="bg-[#D5D9E5] text-[#11112B] py-8 p-4">
            <div className="container mx-auto md:px-4 flex flex-col items-center md:flex-row md:justify-between">
                {/* Logo and Copyright Section */}
                <div className="hidden md:flex flex-col items-center md:items-start md:space-y-28 space-y-2 mb-10 md:mb-0">
                    {/* <TikcunteckLogo /> */}
                    <h1 className="font-bold text-2xl">Tikcunteck</h1>
                    <p className="text-sm">Copyright © Tarun Dixit</p>
                </div>

                {/* Links Section */}
                <div className="flex flex-col md:flex-row md:space-x-10 space-y-8 md:space-y-0 w-full md:w-auto md:ml-96 md:mb-5">
                    {/* Explore Section */}
                    <div className="flex flex-col w-full md:w-24 mb-8 md:mb-0">
                        <h3 className="text-lg font-bold mb-4">Explore</h3>
                        <ul className="space-y-3">
                            <li><Link href="#"><span className="hover:text-blue-500 font-thin">About Us</span></Link></li>
                            <li><Link href="#"><span className="hover:text-blue-500 font-thin">Services</span></Link></li>
                            <li><Link href="#"><span className="hover:text-blue-500 font-thin">Pricing</span></Link></li>
                            <li><Link href="#"><span className="hover:text-blue-500 font-thin">Blog</span></Link></li>
                            <li><Link href="#"><span className="hover:text-blue-500 font-thin">Contact</span></Link></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col w-full md:w-24 mb-8 md:mb-0">
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li><Link href="#"><span className="hover:text-blue-500 font-thin">Email</span></Link></li>
                            <li><Link href="#"><span className="hover:text-blue-500 font-thin">Phone</span></Link></li>
                            <li><Link href="#"><span className="hover:text-blue-500 font-thin">Address</span></Link></li>
                            <li><Link href="#"><span className="hover:text-blue-500 font-thin">Social Media</span></Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="flex flex-col w-full md:w-64">
                        <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                        <p className="text-sm mb-4">Subscribe to our newsletter to stay informed about our latest products, services, and promotions. Feel free to unsubscribe anytime!</p>
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                            {/* Email Input and Button */}
                            <MobileFooterEmail />
                        </div>
                    </div>
                </div>
            </div>

            <Image src={footerline} alt='ServiceLine' className="" />
            <p className="text-center mt-5">Terms & Conditions | Privacy Policy</p>
        </footer>
    );
}
