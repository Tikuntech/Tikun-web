import React from 'react';
import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';

const ContactBreadcrumb: React.FC = () => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-4 text-gray-300">
        <li>
          <Link href="/">
            <span className="flex items-center text-sm font-medium hover:text-white transition-colors duration-300">
              Home
            </span>
          </Link>
        </li>
        <li>
          <RiArrowRightSLine className="text-gray-500" />
        </li>
        <li className="text-gray-500 text-sm font-medium">
          Contact Us
        </li>
      </ol>
    </nav>
  );
};

export default ContactBreadcrumb;
