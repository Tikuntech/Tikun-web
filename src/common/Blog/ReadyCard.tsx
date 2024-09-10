import React from 'react'

const ReadyCard: React.FC = () => {
  return (
    <div className="md:flex md:items-center md:justify-center p-4 ">
      <div className="bg-[#11112B] md:w-3/4  md:flex md:items-center md:justify-between rounded-2xl md:p-20 p-10">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="font-bold text-white text-2xl md:text-6xl">
            <span>Ready to take your </span>
            <span className="font-thin italic">Business' IT </span>
            <span>to the next level?</span>
          </h2>
        </div>

        {/* Button Section */}
        <div className="ml-6 md:mt-32 mt-10">
          <button
            className="bg-white text-blue-900 py-3 px-6 rounded-lg font-bold md:text-lg text-xs flex items-center"
            aria-label="Get free consultation"
          >
            GET FREE CONSULTATION
            <span className="ml-2" aria-hidden="true">
              &#8594;
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReadyCard
