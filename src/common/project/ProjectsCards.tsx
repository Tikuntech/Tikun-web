import { useQuery } from 'react-query'
import { HoverEffect } from '../../components/ui/card-hover-effect'
import { fetchProjects } from '@/services/api'
import Loading from '@/components/Loading/Loading'
import { useEffect, useState } from 'react'

interface ProjectCardProps {
  isHome: boolean
}


export function ProjectCards({ isHome = false }: ProjectCardProps) {
  const { data, error, isLoading } = useQuery('project', fetchProjects)

  const [isTrue, setIsTrue] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(4); // Default to 4 items per row


  // useEffect(() => {
  //   const checkResolution = () => {
  //     const currentWidth = window.innerWidth; // or use window.screen.width
  //     setIsTrue(currentWidth === 1536  || currentWidth === 1920 );
  //   };

  //   // Check the resolution on mount
  //   checkResolution();

  //   // Add resize event listener to check resolution on window resize
  //   window.addEventListener('resize', checkResolution);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', checkResolution);
  //   };
  // }, []);



  const updateItemsPerRow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setItemsPerRow(4); // Show 5 items for larger screens
    } else {
      setItemsPerRow(3); // Show 4 items for smaller screens
    }
  };

  useEffect(() => {
    updateItemsPerRow();
    window.addEventListener('resize', updateItemsPerRow); // Update on resize
    return () => window.removeEventListener('resize', updateItemsPerRow); // Cleanup on unmount
  }, []);


  return isLoading ? (
    <Loading />
  ) : (
    <div className=" mx-auto px-3">
      {/* {isHome ? <HoverEffect items={data?.data?.slice(0, 3) ? data?.data?.slice(0, 3) : []} /> : <HoverEffect items={data?.data ? data?.data : []} />} */}
      {/* { <HoverEffect items={data?.data ? data?.data : []} />} */}


      {/* {isHome && isTrue &&
        <HoverEffect items={data?.data?.slice(0, 4) ? data?.data?.slice(0, 4) : []} />
      } */}



      {itemsPerRow && isHome &&
        <HoverEffect items={data?.data?.slice(0, itemsPerRow) ? data?.data?.slice(0, itemsPerRow) : []} />
      }
      {itemsPerRow && !isHome &&
        <HoverEffect items={data?.data ? data?.data : []} />
      }


      {/* {!isHome && !isTrue &&
        <HoverEffect items={data?.data ? data?.data : []} />
      } */}



    </div>
  )
}
export const projects = [
  {
    description: '2 0 2 2',
    title: 'Uwang Corp.',

    link: '/projectdetailPage',
  },
  {
    description: '2 0 2 2',
    title: 'DEF Manu.',

    link: 'https://netflix.com',
  },
  {
    description: '2 0 2 2',
    title: 'Markland Corp.',

    link: 'https://google.com',
  },
  {
    description: '2 0 2 2',
    title: 'Kings Ent.',

    link: 'https://meta.com',
  },
  {
    description: '2 0 2 2',
    title: 'Amazon',

    link: 'https://amazon.com',
  },
  {
    description: '2 0 2 2',
    title: 'Gojun Retail',

    link: 'https://microsoft.com',
  },
  {
    description: '2 0 2 2',
    title: 'Digital.Co',

    link: 'https://meta.com',
  },
  {
    description: '2 0 2 2',
    title: 'Luxury Inc.',

    link: 'https://amazon.com',
  },
  {
    description: '2 0 2 2',
    title: 'Buddy & Co.',

    link: 'https://microsoft.com',
  },
]
