import React from 'react';

const CategorySection = () => {
  return (
    <>
      <div className="rounded-2xl shadow-md p-8 bg-[#D5D9E5]  mt-4 flex flex-col items-start text-black">
        <h1 className='text-black font-bold text-2xl'>Category</h1>
        
        <div className='flex justify-between w-full mt-4'>
          <span className='font-bold'>Design</span>
          <span>120</span>
        </div>
        <div className='flex justify-between w-full mt-4'>
          <span className='font-bold'>Development</span>
          <span>100</span>
        </div>
        <div className='flex justify-between w-full mt-4'>
          <span className='font-bold'>Tips</span>
          <span>80</span>
        </div>
        <div className='flex justify-between w-full mt-4'>
          <span className='font-bold'>Review</span>
          <span>60</span>
        </div>
        <div className='flex justify-between w-full mt-4'>
          <span className='font-bold'>Events</span>
          <span>40</span>
        </div>
        <div className='flex justify-between w-full mt-4'>
          <span className='font-bold'>Collaboration</span>
          <span>20</span>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
