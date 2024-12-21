import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export function Project() {
  const testimonials = [
    {
      quote:
        "This car rental website has been designed to offer comprehensive information about the services provided, with seamless access for visitors to directly contact the rental owner for reservations or inquiries. The responsive and user-friendly design ensures an efficient and pleasant experience for all users.",
      name: "Sejahtera Mobil",
      designation: "https://darkgrey-oryx-863258.hostingersite.com/",
      secAlt: "",
      tech: ["WordPress", "Elementor"],
      src: "/project/Port1.png",
    },
    {
      quote:
        "This health clinic website provides detailed information about pulmonary, dental, and general healthcare services with a simple and user-friendly design. Visitors can easily access information and make appointment bookings through a convenient system. The responsive design ensures a comfortable browsing experience on all devices.",
      name: "Klinik Hanara",
      designation: "https://www.klinikhanara.com/",
      secAlt: "",
      tech: ["NextJs", "React", "TailwindCss"],
      src: "/project/Port6.png",
    },
    {
      quote: "An anime streaming platform offers a complete collection of anime films and series with an easy-to-use interface. The responsive design ensures a comfortable viewing experience across all devices.",
      name: "VIDS Anime",
      designation: "https://vidsanime.vercel.app/",
      secAlt: "",
      tech: ["NextJs", "React", "TailwindCss", "react-youtube", "framer-motion", "Jikan API"],
      src: "/project/Port4.png",
    },
    {
      quote: "A website for recording community centing data streamlines data collection with a simple and accessible interface. Users can quickly enter data and view relevant information efficiently.",
      name: "Information System",
      designation: "",
      secAlt: "Centing Record",
      tech: ["CodeIgniter 3", "Bootstrap", "Mysql", "Laragon"],
      src: "/project/Port5.png",
    },
    {
      quote:
        "The UI of this mobile sports app is designed with an intuitive and user-friendly interface, ensuring a seamless and efficient user experience. Users can quickly access various sports features, from activity tracking to performance statistics, with a responsive design that runs smoothly on mobile devices.",
      name: "Sport App",
      designation: "",
      secAlt: "Design System",
      tech: ["Mobile Design", "Figma"],
      src: "/project/Port3.png",
    },
    {
      quote:
        "The UI of this e-learning system offers two customizable modes, providing flexibility for users to choose between an interactive or simplified learning experience. The intuitive interface makes it easy to access materials, exams, and interact with instructors across various devices.",
      name: "Elearning App",
      designation: "",
      secAlt: "Design System",
      tech: ["Desktop Design", "Figma"],
      src: "/project/Port2.png",
    },
  ]
  return (
    <div className="mt-40">
      <h1 className="text-center text-[24px] md:text-[42px] lg:text-[60px] font-bold text-black dark:text-white">My Project</h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  )
}
