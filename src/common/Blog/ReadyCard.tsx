import React from 'react'

const ReadyCard: React.FC = () => {
  return (
    <div className="bg-[#11112B]  flex   justify-between rounded-2xl ">


      <div className=" ">
        <h2 className="font-bold text-white text-2xl md:text-6xl lg:text-6xl md:w-1/2">
          <span>Ready to take your </span>
          <span className="font-thin" style={{ fontStyle: 'italic' }}>
            {' '}
            Business' IT{' '}
          </span>
          <span>to the next level?</span>
        </h2>
      </div>



      <div className=" ">
        <button
          className="bg-white mt-5 text-blue-900 px-6 py-4 p-3 rounded-lg  font-bold text-lg flex transition-transform transform hover:scale-105"
          aria-label="Get free consultation"
        >
          GET FREE CONSULTATION
          <span className="ml-2" aria-hidden="true">
            &#8594;
          </span>
        </button>
      </div>


    </div>
  )
}

export default ReadyCard
