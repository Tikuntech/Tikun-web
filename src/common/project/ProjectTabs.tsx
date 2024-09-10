import Image from 'next/image'
import { Tabs } from '../../components/ui/tabs'
import { ProjectCards } from './ProjectsCards'

export function ProjectTabs() {
  const tabs = [
    {
      title: 'All',
      value: 'product',
      content: (
        <div className="w-full ">
          {/* <ProjectCards /> */}
        </div>
      ),
    },
    {
      title: 'Development',
      value: 'Development',
      content: (
        <div className="w-full  ">
          {/* <p>Development tab content</p> */}
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Management',
      value: 'Management',
      content: (
        <div className="w-full ">
          {/* <p>Management tab content</p> */}
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Data & Marketing',
      value: 'Data & Marketing',
      content: (
        <div className="w-full ">
          {/* <p>Data & Marketing tab content</p> */}
          {/* <DummyContent /> */}
        </div>
      ),
    },
  ]

  return (
    <div className=" md:h-[40rem] [perspective:1000px] text-xs md:text-lg relative flex flex-col  mx-auto md:w-full items-start justify-start my-5">
      <Tabs tabs={tabs} />
    </div>
  )
}

const DummyContent = () => (
 
 <></>
)
