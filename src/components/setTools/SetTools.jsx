"use client"
import React from "react"
import * as Fa from "react-icons/fa"
import * as Io from "react-icons/io5"
import * as Ri from "react-icons/ri"
import * as Si from "react-icons/si"
import { AnimatePresence, motion } from "framer-motion"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"

export function SetTools() {
  const tools = [
    {
      title: "HTML5",
      icon: <Fa.FaHtml5 size={30} color="#ff5733" />,
    },
    {
      title: "Css",
      icon: <Io.IoLogoCss3 size={30} color="#1572B6" />,
    },
    {
      title: "JavaScript",
      icon: <Io.IoLogoJavascript size={30} color="#F7DF1E" />,
    },
    {
      title: "ReactJs",
      icon: <Io.IoLogoReact size={30} color="#61DAFB" />,
    },
    {
      title: "NextJs",
      icon: <Ri.RiNextjsFill size={30} className=" dark:bg-white" />,
    },
    {
      title: "Bootstrap",
      icon: <Fa.FaBootstrap size={30} color="#7952B3" />,
    },
    {
      title: "TailwindCss",
      icon: <Ri.RiTailwindCssFill size={30} color="#06B6D4" />,
    },
    {
      title: "Material Ui",
      icon: (
        <svg role="img" viewBox="-30 -15 84 84" fill="#007FFF" xmlns="http://www.w3.org/2000/svg">
          <title>MUI</title>
          <path d="M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z" />
        </svg>
      ),
    },
    {
      title: "PHP",
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="#777BB4" xmlns="http://www.w3.org/2000/svg">
          <title>PHP</title>
          <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
        </svg>
      ),
    },
    {
      title: "Laravel",
      icon: <Fa.FaLaravel size={30} color="#FF2D20" />,
    },
    {
      title: "CodeIgniter",
      icon: <Si.SiCodeigniter size={30} color="#EF4223" />,
    },
    {
      title: "Mysql",
      icon: <Si.SiMysql size={35} color="#4479A1" />,
    },
    {
      title: "Git&Github",
      icon: <Fa.FaGithub size={30} className="dark:bg-white" />,
    },
    {
      title: "Firebase",
      icon: <Si.SiFirebase size={30} color="#DD2C00" />,
    },
    {
      title: "Vercel",
      icon: <Si.SiVercel size={30} className="dark:bg-white" />,
    },

    {
      title: "Figma",
      icon: <Si.SiFigma size={30} color="#EA4C89" />,
    },
    {
      title: "Dribbble",
      icon: <Fa.FaDribbble size={30} color="#EA4C89" />,
    },
    {
      title: "WordPress",
      icon: <Fa.FaWordpress size={30} color="#21759B" />,
    },
  ]
  return (
    <div className="mt-40">
      <h1 className="text-center text-[24px] md:text-[42px] lg:text-[60px] font-bold text-black dark:text-white">Skill & Tools</h1>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-6 w-[80%] md:w-[70%] items-center justify-center gap-4 mx-auto">
        {tools.map((tool, i) => {
          return (
            <div key={i}>
              <Card title={tool.title} icon={tool.icon}>
                <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-[130px] w-full md:w-[150px] mx-auto p-4 h-[4rem] relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="absolute top-1 left-0 right-0 mx-auto  text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 flex items-center justify-center">{icon}</div>
        <h2 className="dark:text-white text-xl mt-2 opacity-0 group-hover/canvas-card:opacity-100 relative text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">{title}</h2>
      </div>
    </div>
  )
}
