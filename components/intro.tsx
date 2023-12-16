"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

function Intro() {

   const { ref } = useSectionInView("Home", 0.5);
   const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

 
  return (
    <section 
        ref={ref}
        className='mb-28 max-w-[50rem] text-center sm:-mb-3 scroll-mt-36'
        id='home'>

        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                     type: "tween",
                     duration: 0.3,
                  }}
                 >
                <Image src="https://img.freepik.com/premium-photo/girl-with-light-colored-sweater-sweater_662214-161725.jpg" alt='profile image' width='250' height='250' quality="95" priority={true} className='h-[10rem] -mt-2 w-[10rem] sm:h-44 sm:w-44 lg:w-48 lg:h-48 rounded-full border-white border-[0.35rem] object-cover shadow-xl ' />
                </motion.div>

                <motion.span className='text-4xl absolute bottom-1 right-2 '
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{  opacity: 1, scale: 1 }}
                   transition={{ 
                        type: "spring",
                        stiffness: 125,
                        delay: 0.4,
                        duration: 0.7,
                    }}
                 >👋</motion.span>

            </div>
        </div>



        <motion.h1
        className="mb-8 mt-5 px-4 text-[1.38rem] font-medium !leading-[1.5] sm:text-[1.6rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>


      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 font-medium '
         initial={{ y: 100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.1 }}
      >

          <Link href="#contact" className='bg-gray-800 hover:bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 transition group dark:bg-[#161D2D] dark:border dark:border-white/80 dark:hover:bg-gray-900 '
             onClick={() => {
                 setActiveSection("Contact");
                 setTimeOfLastClick(Date.now())
             } }
           >
              Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' />
          </Link>

          <a href="/CV.pdf" download className='bg-white text-black dark:bg-white/20 dark:border-gray-400/30 px-7 py-3 flex items-center gap-2 dark:text-white rounded-full border-gray-400 border-[1px] hover:scale-110 transition group ' >Download CV <HiDownload className='group-hover:translate-y-1 transition' /></a>

          <a href="https://www.linkedin.com" target='_blank'  className='bg-white text-lg text-gray-800 p-4 flex items-center  dark:text-gray-300/90   dark:bg-white/20 dark:border-gray-400/30 gap-2 rounded-full border-gray-400 border-[1px]  hover:scale-110 transition' ><BsLinkedin /></a>

          <a href="https://github.com" target='_blank' className='bg-white text-xl text-gray-800 p-4 flex items-center gap-2 rounded-full  dark:bg-white/20 dark:text-gray-300/90 dark:border-gray-400/30 border-gray-400 border-[1px]  hover:scale-110 transition' ><FaGithub /></a>

          

      </motion.div>


    </section>
  )
}

export default Intro