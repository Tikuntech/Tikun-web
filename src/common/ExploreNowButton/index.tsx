import Image from 'next/image'
import HomeArrowIcon from '/public/Home/HomeArrowIcon.svg'
import Link from 'next/link'
export const ExploreNowButton = () => {
  return (
    <Link href="/contactUs">
      <button className="cursor-pointer hover:bg-custom-blue hover:text-black hover:border-black  mt-20 text-white p-3 bg-[#11112B]   rounded-lg border border-white flex items-center justify-center">
        EXPLORE NOW
        <Image src={HomeArrowIcon} alt="HomeArrowIcon" className="pl-4" />
      </button>
    </Link>
  )
}
