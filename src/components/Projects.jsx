import nexus from "../assets/nexus.jpg";
import portfolio from "../assets/portfolio.png";
import clock from "../assets/clock.png";
import nise from "../assets/nise.png";
import passw from "../assets/password.png";
import x from "../assets/x.png";
import quote from "../assets/quote.png";
import capcraft from "../assets/captioncraft.png";
import inkbloom from "../assets/inkbloom.png";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJava,
  FaBootstrap,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "NEXUS",
      description: "Aesthetic AI wrapped social media app",
      link: "https://github.com/varadaraj772/nexus",
      technologies: ["React Native", "Firebase", "TypeScript"],
      img: nexus,
      icons: [<FaReact />, <FaNodeJs />],
    },
    {
      title: "Inkbloom",
      description:
        "Transforming book discovery with a modern and responsive web experience.",
      link: "https://github.com/varadaraj772/inkbloom",
      technologies: ["M E R N", "React-Router", "NodeMailer", "Tailwind CSS"],
      img: inkbloom,
      icons: [<FaReact />, <FaNodeJs />, <FaHtml5 />],
    },
    {
      title: "CaptionCraft.AI",
      description: "AI caption generator for images",
      link: "https://captioncraftai-varadaraj-s-projects.vercel.app/",
      technologies: ["React Js", "Gen AI", "Tailwind CSS"],
      img: capcraft,
      icons: [<FaReact />],
    },
    {
      title: "Personal Portfolio",
      description: "My portfolio website",
      link: "https://personal-portfolio-varadaraj-s-projects.vercel.app/",
      technologies: ["React Js", "Tailwind CSS", "React Router"],
      img: portfolio,
      icons: [<FaReact />, <FaCss3 />],
    },
    {
      title: "Nise Computer Education",
      description:
        "A simple website for Nise Computer Education Institute, Udupi",
      link: "https://nise-computers.vercel.app/",
      technologies: ["React Js", "Tailwind CSS", "React Router"],
      img: nise,
      icons: [<FaReact />, <FaCss3 />],
    },
    {
      title: "Twitter Clone",
      description: "Twitter clone with basic functionalities",
      link: "https://github.com/varadaraj772/TWITTER-CLONE.git",
      technologies: ["PHP", "MySQL", "BootStrap", "JavaScript"],
      img: x,
      icons: [<FaJava />, <FaBootstrap />],
    },
    {
      title: "Password Generator & Manager",
      description:
        "One-stop solution where you can generate password and save it to your account",
      link: "https://github.com/varadaraj772/Password_generator_manager.git",
      technologies: ["HTML", "Bootstrap", "Firebase"],
      img: passw,
      icons: [<FaHtml5 />, <FaBootstrap />],
    },
    {
      title: "Random Quote Generator",
      description:
        "Gives you a random Quote every time you hit generate button and one click to copy code",
      link: "https://random-quote-generator-ivory.vercel.app/",
      technologies: ["React Js", "RandomQuote API", "JavaScript"],
      img: quote,
      icons: [<FaReact />],
    },
    {
      title: "CLOCK",
      description: "A Simple Clock with Timer & Stopwatch functionality",
      link: "https://varadaraj772.github.io/CLOCK/",
      technologies: ["HTML", "CSS", "JavaScript"],
      img: clock,
      icons: [<FaHtml5 />, <FaCss3 />],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-transparent py-12 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span
            id="gradient-text"
            className="bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent transition-all duration-300 ease-out"
          >
            My Projects
          </span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-lg overflow-hidden bg-gray-800 shadow-lg transform transition-transform duration-500 hover:scale-105"
              variants={itemVariants}
            >
              <motion.img
                src={project.img}
                alt={`${project.title} Screenshot`}
                className="w-full h-56 sm:h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4 text-center"
                whileHover={{ opacity: 1 }}
              >
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-green-400 mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-sm md:text-base text-gray-300 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="flex space-x-3 sm:space-x-4 text-2xl sm:text-3xl text-green-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.icons.map((icon, index) => (
                    <motion.div
                      key={index}
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {icon}
                    </motion.div>
                  ))}
                </motion.div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-3 sm:px-4 py-2 border border-green-400 rounded-full text-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  View Project
                </motion.a>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
