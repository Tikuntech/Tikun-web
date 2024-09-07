// components/HowItWorks.tsx
import React from 'react';
import { TbWorld } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: (
      <TbWorld/>
    ),
    title: 'Discovery',
    description: "We'll conduct a thorough analysis of your operations, market, and competition to identify the best solutions for you.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
        <path d="M5.5 7a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"/>
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/>
        <path d="M4.5 10a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5h-7z"/>
      </svg>
    ),
    title: 'Planning',
    description: 'Once we have a clear understanding, we develop a customized plan for the services and solutions we provide.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
        <path d="M10.478 1.647a.5.5 0 0 1 .47.412l-2.013 6.04a.5.5 0 0 1-.47.412l2.013 6.04a.5.5 0 0 1-.47.413l-2.013-6.039a.5.5 0 0 1 .47-.413l2.013-6.041zm-6.5 0a.5.5 0 0 1 .47.412l-2.013 6.04a.5.5 0 0 1-.47.412l2.013 6.04a.5.5 0 0 1-.47.413l-2.013-6.039a.5.5 0 0 1 .47-.413l2.013-6.041zm-6 10a.5.5 0 0 1-.47.412l2.013 6.04a.5.5 0 0 1 .47.412l-2.013 6.04a.5.5 0 0 1 .47.413l2.013-6.039a.5.5 0 0 1-.47-.413l-2.013-6.041zm6.5-10a.5.5 0 0 1 .47.412l2.013 6.04a.5.5 0 0 1-.47.412l-2.013 6.04a.5.5 0 0 1 .47.413l-2.013-6.039a.5.5 0 0 1-.47-.413l2.013-6.041z"/>
        <path d="M10.867 2.825a.5.5 0 0 1 .433-.412l-2.013 6.04a.5.5 0 0 1-.433.412l2.013 6.04a.5.5 0 0 1-.433.413l-2.013-6.039a.5.5 0 0 1 .433-.413l2.013-6.041zm-6.5 0a.5.5 0 0 1 .433-.412l-2.013 6.04a.5.5 0 0 1-.433.412l2.013 6.04a.5.5 0 0 1-.433.413l-2.013-6.039a.5.5 0 0 1 .433-.413l2.013-6.041zm-6 10a.5.5 0 0 1-.433.412l2.013 6.04a.5.5 0 0 1 .433.412l-2.013 6.04a.5.5 0 0 1 .433.413l-2.013-6.039a.5.5 0 0 1-.433-.413l2.013-6.041zm6.5-10a.5.5 0 0 1 .433-.412l2.013 6.04a.5.5 0 0 1-.433.412l-2.013 6.04a.5.5 0 0 1 .433.413l-2.013-6.039a.5.5 0 0 1-.433-.413l2.013-6.041z"/>
      </svg>
    ),
    title: 'Development',
    description: 'We begin the design and development process, creating custom solutions for your specific business needs.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1.196 3.148a.5.5 0 0 0 .708.708L8 10.293l2.898 2.898a.5.5 0 0 0 .708-.708l-3.5-3.5zm-4.646-3.148A.5.5 0 0 0 8 9.293l-2.898-2.898a.5.5 0 0 0-.708.708l3.5 3.5zm-1.5 1.5a.5.5 0 0 1-.5-.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5v2z"/>
      </svg>
    ),
    title: 'Implementation',
    description: 'We implement our solution into your business operations and integrate them with other systems and platforms.',
  },
];

const ServiceWorks: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">How It Works</h1>
      <div className="flex flex-col items-center text-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="bg-gray-800 p-6 rounded-lg mb-8 w-80">
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-lg">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <>
                <div className="w-1 h-36 bg-white mb-6"></div>
                <div className="w-5 h-5 bg-white rounded-full mb-6"></div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServiceWorks;
