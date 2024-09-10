import BelievePage from '@/common/Home/BelievePage'
import BlogSection from '@/common/Home/BlogSection'
import ClientStory from '@/common/Home/ClientStory'
import ProjectSection from '@/common/Home/ProjectSection'
import ServiceSection from '@/common/Home/ServiceSection'
import NeedItSolution from '@/common/NeedItSolution'
import Footer from '@/components/Footer'
import HeroPage from '@/components/Home'
import NavbarHeader from '@/components/Navbar'
import './globals.css'
export default function Home() {
  return (
    <main>
      <NavbarHeader />
      <HeroPage />
      <BelievePage />
      <ClientStory />
      <ServiceSection />
      <ProjectSection />
      <BlogSection />
      <NeedItSolution />
      <Footer />
    </main>
  )
}
