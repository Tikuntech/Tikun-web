import Image from "next/image";
import { Tabs } from "../../components/ui/tabs";
import { ProjectCards } from "./ProjectsCards";

export function ProjectTabs() {
  const tabs = [
    {
      title: "All",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <ProjectCards />
        </div>
      ),
    },
    {
      title: "Development",
      value: "Development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Development tab content</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Management",
      value: "Management",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Management tab content</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Data & Marketing",
      value: "Data & Marketing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Data & Marketing tab content</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => (
  <Image
    src="/linear.webp"
    alt="dummy image"
    width="1000"
    height="1000"
    className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 md:w-[90%] rounded-xl mx-auto"
  />
);
