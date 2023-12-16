"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion';


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Skills() {

  const { ref } = useSectionInView("Skills", 0.75);


  return (
    <section 
         ref={ref}
         id='skills'
         className='mb-28 max-w-[53rem] scroll-mt-32 text-center sm:mb-40 '
       >
        <SectionHeading>My Skills</SectionHeading>

          <ul className='flex dark:text-white/90 flex-wrap justify-center gap-3 text-lg text-gray-800' >

             {
              skillsData.map((skills, index) => (
                 <motion.li
                  key={index}
                  className='bg-white dark:bg-opacity-10 border border-gray-400 dark:border-gray-400/30 dark:hover:border-gray-400/90 transition hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg px-5 py-3'
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                > {skills} </motion.li>
              ))
             }

          </ul>

    </section>
  )
}

export default Skills