"use client";

import React, { createContext, useContext, useEffect, useState } from 'react'


type Theme = "light" | "dark";


type ThemeContextType = {
    theme: Theme;
    toogleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextType | null >(null);

type ThemeProps = {
    children: React.ReactNode;
}


function ThemeContextProvider({ children }: ThemeProps) {
    
    const [ theme, setTheme ] = useState<Theme>("light");

     
       const toogleTheme = () => {

          if (theme === 'light') {
             setTheme('dark');
             window.localStorage.setItem("theme", "dark");
             document.documentElement.classList.add("dark");


          } else {
             setTheme('light');
             window.localStorage.setItem("theme", "light");
             document.documentElement.classList.remove("dark");

          }

       }


       useEffect(() => {

          const localTheme = window.localStorage.getItem("theme") as Theme | null ;

          if (localTheme) {
            setTheme(localTheme);

            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");

            }

          } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

             setTheme('dark');
             document.documentElement.classList.add("dark");


          }
          
       },[])
 

  return (
    
       <ThemeContext.Provider value={{
          theme,
          toogleTheme
       }} > { children } </ThemeContext.Provider>
      
  )
}



export const useTheme = () => {

    const context = useContext(ThemeContext);

      if (context === null) {
          throw new Error("useTheme must be used within a ThemeContextProvider!");
      }

      return context;

}





export default ThemeContextProvider