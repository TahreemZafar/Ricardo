"use client";

import React, { createContext, useContext, useState } from "react";
import { SectionName } from "@/lib/types";



type Props = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}


export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

function ActiveSectionContextProvider({ children }: Props) {

  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)


  return (

     <ActiveSectionContext.Provider value={{
          activeSection,
          setActiveSection, 
          timeOfLastClick,
          setTimeOfLastClick,
     }} >
        {children}
     </ActiveSectionContext.Provider>

  )
}



export function useActiveSectionContext () {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        )
    }

    return context;

}



export default ActiveSectionContextProvider;
