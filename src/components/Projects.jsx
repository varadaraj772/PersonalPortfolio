import nexus from "../assets/nexus.jpg";
import portfolio from "../assets/portfolio.png";
import clock from "../assets/clock.png";
import nise from "../assets/nise.png";
import passw from "../assets/password.png";
import x from "../assets/x.png";
import quote from "../assets/quote.png";
import capcraft from "../assets/captioncraft.png";
import inkbloom from "../assets/inkbloom.png";

function Projects() {
  const projects = [
    {
      title: "NEXUS",
      description: "Aesthetic Ai wrapped social media app",
      link: "https://github.com/varadaraj772/nexus",
      technologies: ["React Native", "Firebase", "TypeScript"],
      img: nexus,
    },
    {
      title: "Inkbloom",
      description:
        "Transforming book discovery with a modern and responsive web experience.",
      link: "https://github.com/varadaraj772/inkbloom",
      technologies: ["M E R N", "React-Router", "NodeMailer", "Tailwind CSS"],
      img: inkbloom,
    },
    {
      title: "CaptionCraft.AI",
      description: "Ai caption generator for images",
      link: "https://captioncraftai-varadaraj-s-projects.vercel.app/",
      technologies: ["React Js", "Gen AI", "Tailwind CSS"],
      img: capcraft,
    },
    {
      title: "Personal Portfolio",
      description: "My portfolio website",
      link: "https://personal-portfolio-varadaraj-s-projects.vercel.app/",
      technologies: ["React Js", "Tailwind CSS", "React Router"],
      img: portfolio,
    },
    {
      title: "Nise Computer Education",
      description:
        "A simple website for Nise Computer Education Institute, Udupi",
      link: "https://nise-computers.vercel.app/",
      technologies: ["React Js", "Tailwind CSS", "React Router"],
      img: nise,
    },
    {
      title: "Twitter Clone",
      description: "Twitter clone with basic functionalities",
      link: "https://github.com/varadaraj772/TWITTER-CLONE.git",
      technologies: ["PHP", "MySQL", "BootStrap", "JavaScript"],
      img: x,
    },
    {
      title: "Password Generator & Manager",
      description:
        "One stop solution where you can generate password and save it to your account",
      link: "https://github.com/varadaraj772/Password_generator_manager.git",
      technologies: ["HTML", "Bootstrap", "Firebase"],
      img: passw,
    },

    {
      title: "Random Quote Generator",
      description:
        "Gives you a random Quote every time you hit generate button and one click to copy code",
      link: "https://random-quote-generator-ivory.vercel.app/",
      technologies: ["React Js", "RandomQuote API", "JavaScript"],
      img: quote,
    },
    {
      title: "CLOCK",
      description: "A Simple Clock with Timer & Stopwatch functionality",
      link: "https://varadaraj772.github.io/CLOCK/",
      technologies: ["HTML", "CSS", "JavaScript"],
      img: clock,
    },
  ];

  return (
    <section className="bg-gradient-to-tr from-slate-900 to-gray-950 py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-green-500 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="shadow-lg rounded-lg overflow-hidden bg-slate-800 hover:shadow-xl transition transform hover:scale-105 duration-300 ease-in-out"
            >
              <img
                src={project.img}
                alt={`${project.title} Screenshot`}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-green-500">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-col sm:flex-row sm:justify-between text-gray-500">
                  <span className="mb-2 sm:mb-0">
                    {project.technologies.join(", ")}
                  </span>
                  <a
                    href={project.link}
                    className="underline hover:text-green-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
