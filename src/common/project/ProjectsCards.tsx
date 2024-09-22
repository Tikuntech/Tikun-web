import { useQuery } from 'react-query'
import { HoverEffect } from '../../components/ui/card-hover-effect'
import { fetchProjects } from '@/services/api'
import Loading from '@/components/Loading/Loading'

interface ProjectCardProps {
  isHome:boolean
}


export function ProjectCards({isHome=false}:ProjectCardProps) {
  const { data, error, isLoading } = useQuery('project', fetchProjects)

  
  return isLoading ? (
    <Loading />
  ) : (
    <div className=" mx-auto px-3">
      {isHome ? <HoverEffect items={data?.data?.slice(0, 2) ? data?.data?.slice(0, 2) : []} /> : <HoverEffect items={data?.data ? data?.data : []} />}
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
