import BelievePage from "@/common/Home/BelievePage";
import BlogSection from "@/common/Home/BlogSection";
import ClientStory from "@/common/Home/ClientStory";
import ProjectSection from "@/common/Home/ProjectSection";
import ServiceSection from "@/common/Home/ServiceSection";
import NeedItSolution from "@/common/NeedItSolution";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home";
import NavbarHeader from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <NavbarHeader/>
    <HomePage/>
    <BelievePage/>
    <ClientStory/>
    <ServiceSection/>
    <ProjectSection/>
    <BlogSection/>
    <NeedItSolution/>
    <Footer/>
    </>
  );
}
