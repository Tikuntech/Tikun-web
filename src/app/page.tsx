import BelievePage from '@/common/home/BelievePage'
import BlogSection from '@/common/home/BlogSection'
import ClientStory from '@/common/home/ClientStory'
import ProjectSection from '@/common/home/ProjectSection'
import ServiceSection from '@/common/home/ServiceSection'
import NeedItSolution from '@/common/NeedItSolution'
import Footer from '@/components/Footer'
import HeroPage from '@/components/Home'
import NavbarHeader from '@/components/Navbar'

export default function Home() {
  return (
    <div>
      <NavbarHeader />

      <HeroPage />
      <BelievePage />
      <ClientStory />
      <ServiceSection />
      <ProjectSection />

      <NeedItSolution />

      <Footer />
    </div>
  )
}
