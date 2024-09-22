'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface DataContextType {
  data: any
  // setData: (data: any) => void,
  setData: React.Dispatch<React.SetStateAction<any>>;
  
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<any>(null)

  // useEffect(()=>{
   
  // },[])
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataProvider')
  }
  return context
}
