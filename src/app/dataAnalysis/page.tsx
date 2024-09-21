'use client'
import LightNavbar from '@/components/LightNavbar'

import Image from 'next/image'
import { useState } from 'react'
import BoxImg from '/public/Blog/colorblog.svg'

import BlogFooter from '@/common/Blog/BlogFooter'
import ReadyCard from '@/common/Blog/ReadyCard'

import DataAnalysismg from '../../../public/dataAnalysis/DataAnalysis.webp'

import DataAnalysis from '@/common/BreadCrumb/DataAnalysis'
import MobileFlexSection from '@/common/MobileDevlopment/MobileFlexSection'

const images = [
  { src: BoxImg, alt: 'Graphic 1', width: 30, height: 40 },
  { src: BoxImg, alt: 'Graphic 2', width: 40, height: 40 },
  { src: BoxImg, alt: 'Graphic 3', width: 40, height: 40 },
  // Add more images as needed
]

const randomPosition = () => ({
  top: `${Math.random() * 60 + 10}%`,
  left: `${Math.random() * 50 + 10}%`,
})

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <main className="min-h-screen bg-[#D5D9E5]">
        <LightNavbar />
        <div className="pt-16 md:pt-28 p-5 md:p-0">
          <div className="md:ml-32">
            <DataAnalysis />
          </div>

          <div className="flex flex-col md:flex-row items-start space-y-8 md:space-x-8 md:space-y-0">
            <h1 className="text-4xl md:text-6xl text-[#11112B] font-bold flex-shrink-0 md:ml-32 mt-5">
              Data Analysis
            </h1>
          </div>
        </div>
        <div className="md:flex md:justify-around md:p-20 gap-10 ">
          <div className="md:w-full mt-10 p-5 md:p-0">
            <Image src={DataAnalysismg} alt="Img " className="rounded-lg" />
            <p className="mt-10">
              Define the Objectives Determine what you want to achieve with the
              analysis. This might involve understanding trends, making
              predictions, or answering specific questions. Collect Data Gather
              the data required for analysis. This can be done through various
              methods such as surveys, experiments, web scraping, or accessing
              existing databases. Prepare Data Cleaning: Remove or correct any
              inaccuracies, missing values, or inconsistencies in the data.
              Transformation: Convert data into a suitable format for analysis
              (e.g., normalizing values, aggregating data). Explore Data Use
              exploratory data analysis (EDA) to understand the basic features
              of the data. This includes: Descriptive Statistics: Mean, median,
              mode, variance, and standard deviation. Visualization: Charts,
              graphs, and plots to identify patterns and relationships. Analyze
              Data Apply statistical or machine learning techniques to uncover
              insights. This can include: Regression Analysis: Identifying
              relationships between variables. Hypothesis Testing: Testing
              assumptions or theories about the data. Clustering: Grouping
              similar data points. Classification: Categorizing data into
              predefined classes. Interpret Results
            </p>
            <p className="mt-10">
              Techniques and Methods Descriptive Statistics: Summarizes data
              (e.g., mean, median, mode). Inferential Statistics: Makes
              predictions or inferences about a population based on sample data
              (e.g., confidence intervals, hypothesis tests). Machine Learning:
              Algorithms and models for predictive analytics (e.g., regression
              models, decision trees, clustering algorithms). Time Series
              Analysis: Analyzes data points collected or recorded at specific
              time intervals. Data Mining: Extracts useful information from
              large datasets (e.g., association rules, anomaly detection).
            </p>
            <p className="mt-10">
              Best Practices Ensure Data Quality: Reliable analysis depends on
              high-quality data. Use the Right Tools: Choose tools and
              techniques appropriate for the size and nature of the data. Be
              Transparent: Document your methods and decisions to ensure the
              analysis can be replicated and understood. Stay Updated: Data
              analysis techniques and tools evolve rapidly, so stay informed
              about new developments.
            </p>
          </div>
          <div className="md:w-1/2 p-5 md:p-0">
            <MobileFlexSection />
          </div>
        </div>
        {/* <PointsSection /> */}
        <div className="items-center justify-center p-5 md:p-0">
          <ReadyCard />
        </div>
        <div className="p-5 md:p-0">
          <BlogFooter />
        </div>
      </main>
    </>
  )
}
