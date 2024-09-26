import { Dialog } from '@headlessui/react';
import Image from 'next/image';

export  const CustomModalImage =({ isOpen, onClose , imageUrl}: { isOpen: boolean; onClose: () => void,imageUrl:string })=> {
  return (
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        {/* Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg overflow-hidden shadow-xl">
            <div className="relative w-full h-full">
              {/* Close button */}
              <button 
                onClick={onClose} 
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                &times; {/* Close Icon */}
              </button>
              
              {/* Image */}
              <Image
                src={imageUrl} // Replace with your image path
                alt="Full Size Image"
                layout="responsive"
                width={800}  // Set the desired width
                height={600} // Set the desired height
                className="object-contain" // or "object-cover" depending on your requirement
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

  );
}
