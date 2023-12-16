import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6">

        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />

        <div className="bg-[#fbe2e3] absolute bottom-[4rem] -z-10 -left-6 sm:-left-[12rem] lg:left-[1rem] xl:left-[4rem] 2xl:left-[10rem] h-[31.25rem] w-[28.25rem] rounded-full blur-[10rem] sm:w-[50.75rem] dark:blur-[11rem] dark:bg-[#946263]"></div>

        <Footer />

    
        
    </main>
  )
}
