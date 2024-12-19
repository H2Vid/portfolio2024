"use client"
import React from "react"
import * as Fa from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"

export function SetTools() {
  return (
    <>
      <div className="py-20 grid grid-cols-6 items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto">
        <Card title="Dribbble" icon={<Fa.FaDribbble size={30} color="#EA4C89" />}>
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
        </Card>
      </div>
    </>
  )
}

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-[130px] w-full mx-auto p-4 h-[4rem] relative"
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
