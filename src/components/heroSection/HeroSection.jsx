import React from "react"
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision"

const HeroSection = () => {
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
        <div>
          <button>tes</button>
          <button>tes</button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}

export default HeroSection
