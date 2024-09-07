import BelievePage from "@/common/Home/BelievePage";
import BlogSection from "@/common/Home/BlogSection";
import ClientStory from "@/common/Home/ClientStory";
import ProjectSection from "@/common/Home/ProjectSection";
import ServiceSection from "@/common/Home/ServiceSection";
import NeedItSolution from "@/common/NeedItSolution";
import HomePage from "@/components/Home";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HomePage/>
    <BelievePage/>
    <ClientStory/>
    <ServiceSection/>
    <ProjectSection/>
    <BlogSection/>
    <NeedItSolution/>
    </>
  );
}
