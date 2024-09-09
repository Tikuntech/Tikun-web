"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { FiSlack } from "react-icons/fi";



export const ServiceHoverEffect = ({
  items,
  className,
}: {
  items: {
      icon: JSX.Element;
      title: string;
      description: string;
      link: string;
      activeIcon: JSX.Element;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
      <div
          className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
              className
          )}
      >
          {items.map((item, idx) => (
              <Link
                  href={item.link}
                  key={item.link}
                  className="relative group block p-2 h-full w-full"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
              >
                  {hoveredIndex === idx ? (
                      <Card>
                          {/* <h1 className="text-black font-normal mt-4 text-center">C Y B E R   S E C U R I T Y.</h1>
                          <FiSlack className="text-white text-center block mx-auto mt-4" />
                          <h1 className="text-white font-bold mt-4 text-center text-3xl">{item.title}</h1>
                          <h1 className="text-white font-bold text-center text-3xl">Computing</h1>
                          <p className="text-xs text-center mt-10">
                          Provides access to scalable computing resources to optimize their operations.
                          </p>
                          <div className="flex justify-center mt-6">
                              <button className="bg-black text-white p-2 rounded-md">
                                  READ MORE
                              </button>
                          </div> */}
                           <CardIcon className="mb-4">
                              {item.activeIcon}
                          </CardIcon>
                          <div className="h-80 flex flex-col justify-end p-4">
                              <div className="text-black font-normal text-left">
                                  <CardTitle>{item.title}</CardTitle>
                                  <CardDescription>{item.description}</CardDescription>
                              </div>
                          </div>
                      </Card>
                  ) : (
                      <Card>
                          <CardIcon className="mb-4">
                              {item.icon}
                          </CardIcon>
                          <div className="h-80 flex flex-col justify-end p-4">
                              <div className="text-black font-normal text-left">
                                  <CardTitle>{item.title}</CardTitle>
                                  <CardDescription>{item.description}</CardDescription>
                              </div>
                          </div>
                      </Card>
                  )}
              </Link>
          ))}
      </div>
  );
};


export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
              isHovered
                  ? "text-white px-4 py-2 rounded-md h-full hover:bg-custom-blue transition-colors duration-300 hover:shadow-lg hover:scale-105  cursor-pointer "
                  : "bg-gradient-to-b from-slate-400 to-slate-800 text-white px-4 py-2 rounded-md hover:bg-custom-blue transition-colors duration-300 hover:shadow-lg  cursor-pointer",
              className
          )}
      >
          <div className="relative z-50">
              <div className="p-4">{children}</div>
          </div>
      </div>
  );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-white text-3xl font-bold tracking-wide", className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p className={cn("text-white tracking-wide leading-relaxed ", className)}>
            {children}
        </p>
    );
};

export const CardIcon = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div className={`text-white   ${className}`}>
            {children}
        </div>
    );
};