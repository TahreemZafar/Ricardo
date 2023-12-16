"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

function Experience() {

    const { inView, ref } = useSectionInView("Experience", 0.30);

    const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-32 mb-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>

      <VerticalTimeline lineColor="">

           { 
             experiencesData.map((item, index) => (
                 <React.Fragment key={index}>
                <VerticalTimelineElement
                    
                    visible={inView}
                    contentStyle={{
                        background:  theme === "light" ? '#f3f4f6' : '#252C3B',
                        boxShadow: "none",
                        border: "1px solid rgba(0,0,0,0.22)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                        
                    }}

                    contentArrowStyle={{
                      borderRight:
                      theme === "light"
                        ? "0.4rem solid #9ca3af"
                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                  }}

                  iconStyle={{
                    background:
                      theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                    fontSize: "1.5rem",
                  }}
                      date={item.date}
                      icon={item.icon}

                      

                    >

                    <h3 className="font-semibold capitalize" >{item.title}</h3>
                    <p className="font-normal !mt-[2px]">{item.location}</p>
                    <p className="font-normal !mt-[10px] text-gray-600 dark:text-white/60 " >{item.description}</p>

                </VerticalTimelineElement>
                </React.Fragment>
             ))
           }
         
      </VerticalTimeline>

    </section>
  );
}

export default Experience;
