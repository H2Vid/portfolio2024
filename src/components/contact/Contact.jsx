"use client"
import React from "react"
import * as Fa from "react-icons/fa"
import * as Ai from "react-icons/ai"
const Contact = () => {
  const datacontact = [
    {
      label: "Email",
      icon: <Ai.AiOutlineMail size={30} />,
      link: "mailto:dstmpl17@gmail.com",
      to: "dstmpl17@gmail.com",
    },
    {
      label: "Github",
      icon: <Fa.FaGithub size={30} />,
      link: "https://github.com/H2Vid",
      to: "H2Vid",
    },
    {
      label: "Linkedin",
      icon: <Fa.FaLinkedin size={30} />,
      link: "https://www.linkedin.com/in/david-sitompul-94a71333b",
      to: "David Sitompul",
    },
    {
      label: "WhatsApp",
      icon: <Fa.FaWhatsapp size={30} />,
      to: "0822 7649 2526",
    },
    {
      label: "Location",
      icon: <Fa.FaLocationArrow size={30} />,
      to: "Medan, Sumatera Utara, Indonesia",
    },
  ]
  return (
    <>
      <section className="mt-10">
        <div className="lg:flex  px-6 py-12 mx-auto">
          <div className="lg:w-[30%]">
            <p className="font-semibold text-green-500 dark:text-green-400 text-3xl"> {`Let's Connect !!!`} </p>

            <h1 className="mt-2 text-sm text-white">you can contact me with this</h1>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:w-[70%] mt-10 lg:mt-0">
            {datacontact.map((info, i) => {
              return (
                <div key={i} className="flex space-x-5 items-center text-green-500 font-normal">
                  <span>{info.icon}</span>
                  <div>
                    <h2 className="text-green-500">{info.label}</h2>
                    <a href={info.link}>{info.to}</a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
