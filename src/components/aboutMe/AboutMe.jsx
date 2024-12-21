"use client"
import React from "react"
import { TextGenerateEffect } from "../ui/text-generate-effect"

const AboutMe = () => {
  const word = `Hi, I'm a Web Developer with experience in building web applications using a variety of technologies. I am skilled in HTML, CSS, JavaScript, ReactJs, NextJs, and backend development with Laravel, PHP, and CodeIgniter 3. I also have
        experience working with MySQL, Firebase. For design, I use Bootstrap, TailwindCSS, and Material UI, along with design tools like Figma and Adobe XD. I'm familiar with Git/GitHub for version control and
        often use Vercel for deployment. For CMS solutions, I also work with WordPress Elementor.I am always open to new opportunities for collaboration, whether it's joining exciting projects or exploring potential job openings. If you have a project in mind or are looking for a web developer, feel free to reach out. Let’s build something amazing together!

 `
  return (
    <div className="w-[80%] mx-auto overflow-hidden">
      <h1 className="text-center text-[32px] md:text-[42px] lg:text-[60px] font-bold text-black dark:text-white">About Me</h1>
      <TextGenerateEffect words={word} />
    </div>
  )
}

export default AboutMe
