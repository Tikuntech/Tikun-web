
import React from 'react';



const ReadyCard: React.FC = () => {
  return (



<div className="bg-[#11112B] rounded-2xl mt-12 p-20  h-full justify-center  items-center  ">
    <div className='flex justify-evenly'>
    <div className=" font-bold text-white mb-4 w-1/2" style={{fontSize:60}}>
           <span className=''>Ready to take </span>
           <span>your Business' IT </span>  
           <span>to the next level?</span> 
          </div>
          <div>
          <button className="bg-white text-blue-900 px-8  py-2 rounded-lg font-bold   text-xl "style={{marginTop:200}} >
            GET FREE CONSULTATION
            <span className="ml-2">&#8594;</span>
          </button>
          </div>
         
    </div>
          
        </div>
  )}

  export default ReadyCard;

