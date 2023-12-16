'use client';

import React from 'react'
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

function Header() {

 const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


  return (
    <header className='z-[999] relative ' >
        <motion.div className='fixed top-0 left-1/2 h-[5rem] -translate-x-1/2 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-xl shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-8 sm:h-[3.60rem] sm:shadow-lg sm:w-[36rem] lg:w-[38rem] sm:rounded-full dark:bg-white/60 dark:border-black '
         initial={{ y: -100, x: '-50%', opacity: 0 }}
         animate={{ y: 0, x: '-50%', opacity: 1 }}
        ></motion.div>

        <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[2.3rem] sm:h-[initial] sm:py-0 '>
            <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 gap-5 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 '>
                {
                   links.map((link) => (
                     
                      <motion.li key={link.hash} className='h-3/4 flex items-center justify-center relative '
                        initial={{ y: -100, opacity: 0 }}
                        animate={{  y: 0, opacity: 1 }}
                       >
                         <Link href={link.hash} className={clsx('flex w-full items-center justify-center px-2 lg:px-3 pt-1 sm:py-3 hover:text-gray-950 transition dark:text-gray-700 dark:hover:text-gray-950 ', {
                            "text-black dark:text-black font-[600]" : activeSection === link.name,
                         })} 

                         onClick={() => {
                          setActiveSection(link.name);
                          setTimeOfLastClick(Date.now())
                        }}

                         >
                          
                          {link.name}


                          {
                            link.name === activeSection && (

                              
                          <motion.span className='md-gray  dark:bg-gray-500 rounded-full absolute inset-0 -z-10 '

                            layoutId='activeSection'
                            transition={{
                                type: 'spring',
                                stiffness: 380,
                                damping: 30,
                            }}
                          
                          ></motion.span>

                            )
                          }


                         </Link>
                      </motion.li>

                   ) )
                }
            </ul>
        </nav>

    </header>
  )
}

export default Header