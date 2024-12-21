"use client"
import React, { useState, useEffect } from "react"
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision"

const HeroSection = () => {
  // Default mode adalah dark
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Cek localStorage untuk pengaturan dark mode yang disimpan
    const savedMode = localStorage.getItem("darkMode")

    // Jika ada pengaturan sebelumnya di localStorage
    if (savedMode === "false") {
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else {
      setDarkMode(false)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem("darkMode", newMode.toString())

    // Sesuaikan kelas pada <html> berdasarkan mode
    if (newMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Hi There I&apos;m David Sitompul
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">a Web Developer</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">a Web Developer</span>
            </div>
          </div>
        </h1>
        <div className="flex space-x-5 justify-center">
          <a href="/cv/DAVID SITOMPUL-CV.pdf" download={true}>
            <button className="bg-[#368B85] px-5 py-2 mt-6 lg:mt-12 rounded-lg shadow-md text-white font-semibold">Download My CV</button>
          </a>
          <button onClick={toggleDarkMode} className="bg-[#368B85] px-5 py-2 mt-6 lg:mt-12 rounded-lg shadow-md text-white font-semibold">
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}

export default HeroSection
