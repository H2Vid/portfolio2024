"use client"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0)
  const [randomRotation, setRandomRotation] = useState(null)

  useEffect(() => {
    setRandomRotation(Math.floor(Math.random() * 21) - 10)
  }, [])

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const isActive = (index) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  return (
    <div className="md:w-[90%] mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-10 overflow-hidden">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-[500px] w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotation,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotation,
                    zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotation,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image src={testimonial.src} alt={testimonial.name} width={500} height={500} priority={true} draggable={false} className="h-auto p-5 bg-slate-200 dark:bg-slate-900 w-full rounded-3xl object-cover object-center" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4 md:ml-12">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">{testimonials[active].name}</h3>
            <Link href={testimonials[active].designation || "#"} className="text-sm text-gray-700 dark:text-neutral-500">
              {testimonials[active].secAlt || testimonials[active].designation}
            </Link>
            <motion.p className="text-lg text-gray-800 mt-4 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="border-gray-700  w-full flex flex-wrap gap-2">
            {testimonials[active].tech.map((tech, index) => (
              <div key={index} className="drop-shadow-sm inline px-3 py-1 rounded-md bg-neutral-200 dark:bg-slate-900 text-sm text-black dark:text-white">
                {tech}
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-2 md:pb-20 md:pt-0">
            <button onClick={handlePrev} className="h-7 w-7 rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center group/button">
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button onClick={handleNext} className="h-7 w-7 rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center group/button">
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
