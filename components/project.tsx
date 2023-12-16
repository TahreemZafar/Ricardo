"use client";

import { projectsData } from '@/lib/data'
import Image from 'next/image'
import React, { useRef } from 'react'
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";


type ProjectProps = typeof projectsData[number];

function Project({
    title,
    description,
    tags,
    imageUrl
} : ProjectProps ) {


    const ref = useRef<HTMLDivElement>(null);

     const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })

     const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
     const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  return (

       <motion.div 
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress
       }}
        
          className='mb-4 sm:mb-8 last:mb-0 group'
        >

    <section
     className=' bg-gray-100 max-w-[42rem] sm:h-[20rem] border-gray-400/90 border-[1px] overflow-hidden pr-8 relative  sm:group-even:pl-8  hover:bg-gray-200 transition dark:bg-opacity-10 dark:border-gray-400/40 dark:hover:bg-opacity-20 ' >

          <div className='pt-5 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[16rem] md:group-even:ml-[18rem]'>

         <h3 className='text-[22px] dark:text-white font-[550]'>{title}</h3>
         <p className='mt-2 leading-relaxed dark:text-gray-300 text-gray-700'>{description}</p>

          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto  text-center'>
            { tags.map((tag, index) => (
                <li key={index} className='bg-gray-700 pt-2 opacity-90 px-[14px] py-[5px] dark:bg-gray-900 text-[0.7rem] uppercase tracking-wider text-white rounded-full' >{tag}</li>
            )) }
          </ul>

          </div>


          <Image src={imageUrl} alt="project's images" quality={95} className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-xl shadow-2xl group-even:right-[initial] group-even:-left-40
          group-hover:-translate-x-3 group-hover:translate-y-3 
          group-hover:scale-[1.04] group-hover:-rotate-2 transition
          
              group-even:group-hover:rotate-2
              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3 
          ' />
        
     </section>

     </motion.div>
    
  )
}

export default Project