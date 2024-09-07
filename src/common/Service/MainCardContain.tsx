"use client"
import { useState } from "react";

const services = [
  {
    icon: "globe-alt",
    title: "Web Development",
    description: "Create websites that are both visually appealing and functional for users.",
  },
  {
    icon: "mobile",
    title: "Mobile Development",
    description:
      "Create or enhance mobile applications, ensuring optimized user experience.",
  },
  {
    icon: "shield-check",
    title: "Cyber Security",
    description:
      "Provides advanced protection for your data and systems against threats.",
  },
  {
    icon: "megaphone",
    title: "Digital Marketing",
    description:
      "Create solutions to help businesses achieve their digital marketing goals.",
  },
  {
    icon: "cloud",
    title: "Cloud Computing",
    description:
      "Provides access to scalable computing resources to optimize their operations.",
  },
  {
    icon: "code",
    title: "Software Development",
    description:
      "Provides customized solutions to create and maintain software applications.",
  },
  {
    icon: "rocket-launch",
    title: "IT Project Management",
    description:
      "Provides businesses with expert guidance and support for IT projects.",
  },
  {
    icon: "magnifying-glass",
    title: "Data Analysis",
    description:
      "Provide data analysis for varied categories to help client businesses.",
  },
  {
    icon: "network",
    title: "Network Management",
    description:
      "Provide management of network infrastructure design for clients.",
  },
];

export default function MainCardContain() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <>
    {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100"> */}
     
      <div className=" flex justify-evenly gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-4 cursor-pointer ${
              selectedService === index &&
              "bg-blue-100 border-blue-500 border-2"
            }`}
            onClick={() => setSelectedService(index)}
          >
            <div className="flex items-center mb-2">
              <svg
                className="w-6 h-6 text-blue-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={`M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z`}
                />
              </svg>
              <h3 className="text-xl font-bold  ">{service.title}</h3>
            </div>
            <p className="text-gray-600  ">{service.description}</p>
          </div>
        ))}
      </div>
      {selectedService !== null && (
        <div className="mt-8 p-4 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold mb-4">
            {services[selectedService].title}
          </h2>
          <p className="text-">
            {services[selectedService].description}
          </p>
        </div>
      )}
   {/* </div> */}
    </>
  );
}
