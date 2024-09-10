import Image from "next/image"
import HomeArrowIcon from '/public/Home/HomeArrowIcon.svg'
export const ExploreNowButton = () => {

  return (<button 

    style={{cursor:'pointer'}}
    
  
  className="cursor-pointer hover:bg-white hover:text-black  mt-20 text-white p-3 bg-[#11112B]   rounded-lg border border-white flex items-center justify-center"
  
  >
    EXPLORE NOW
    <Image src={HomeArrowIcon} alt='HomeArrowIcon' className='pl-4' />

  </button>)
}