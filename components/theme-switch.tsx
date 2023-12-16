"use client";

import { useTheme } from '@/context/theme-context';
import React, { useContext } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'



function ThemeSwitch() {

   const { theme, toogleTheme } = useTheme();


  return (
    <button className='fixed bottom-8 right-8 bg-white w-[58px] h-[58px] bg-opacity-80 backdrop:blur-[0.5rem] border-[1px] border-black/70 hover:border-black/60 shadow-2xl rounded-full flex items-center justify-center hover:scale-105 transition-all active:scale-105 dark:bg-gray-950 dark:border-white/80 '
       onClick={toogleTheme}
    >

          { 
            theme === "light" ?  <BsMoon size={19} /> :
             <BsSun size={19} />
          }
     

    </button>
  )
}

export default ThemeSwitch