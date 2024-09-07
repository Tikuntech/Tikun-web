import { ServiceHoverEffect } from "@/components/ui/CardHoverService";
import { HoverEffect } from "../../components/ui/card-hover-effect";

export function ServiceCards() {
  return (
    <div className="max-w-lg mx-auto px-3">
      <ServiceHoverEffect items={services} />
    </div>
  );
}

export const services = [
  {
    icon: "globe-alt",
    title: "Web Development",
    description: "Create websites that are both visually appealing and functional for users.",
    link: "/web-development",
  },
  {
    icon: "mobile",
    title: "Mobile Development",
    description: "Create or enhance mobile applications, ensuring optimized user experience.",
    link: "/mobile-development",
  },
  {
    icon: "shield-check",
    title: "Cyber Security",
    description: "Provides advanced protection for your data and systems against threats.",
    link: "/cyber-security",
  },
  {
    icon: "megaphone",
    title: "Digital Marketing",
    description: "Create solutions to help businesses achieve their digital marketing goals.",
    link: "/digital-marketing",
  },
  {
    icon: "cloud",
    title: "Cloud Computing",
    description: "Provides access to scalable computing resources to optimize their operations.",
    link: "/cloud-computing",
  },
  {
    icon: "code",
    title: "Software Development",
    description: "Provides customized solutions to create and maintain software applications.",
    link: "/software-development",
  },
  {
    icon: "rocket-launch",
    title: "IT Project Management",
    description: "Provides businesses with expert guidance and support for IT projects.",
    link: "/it-project-management",
  },
  {
    icon: "magnifying-glass",
    title: "Data Analysis",
    description: "Provide data analysis for varied categories to help client businesses.",
    link: "/data-analysis",
  },
  {
    icon: "network",
    title: "Network Management",
    description: "Provide management of network infrastructure design for clients.",
    link: "/network-management",
  },
];
