import AboutMe from "@/components/aboutMe/AboutMe"
import Contact from "@/components/contact/Contact"
import Experience from "@/components/experience/Experience"
import HeroSection from "@/components/heroSection/HeroSection"
import { Project } from "@/components/proyek/Project"
import { SetTools } from "@/components/setTools/SetTools"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Experience />
      <Project />
      <SetTools />
      <Contact />
    </>
  )
}
