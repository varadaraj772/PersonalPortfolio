import nexus from "../assets/nexus.jpg";
import portfolio from "../assets/portfolio.png";
import clock from "../assets/clock.png";
import nise from "../assets/nise.png";
import passw from "../assets/password.png";
import x from "../assets/x.png";
import quote from "../assets/quote.png";
import capcraft from "../assets/captioncraft.png";

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
      title: "CaptionCraft.AI",
      description: "Ai caption generator for images",
      link: "https://captioncraftai-varadaraj-s-projects.vercel.app/",
      technologies: ["React Js", "Gen AI", "Tailwind CSS"],
      img: capcraft,
    },
    {
      title: "Personal Portfolio",
      description: "My perosnal portfolio website",
      link: "https://personal-portfolio-varadaraj-s-projects.vercel.app/",
      technologies: ["React Js", "Tailwind CSS", "React Router"],
      img: portfolio,
    },
    {
      title: "Nise Computer Education",
      description:
        "A simple website for Nise Computer Eduation Institute,Udupi",
      link: "https://nise-computers.vercel.app/",
      technologies: ["React Js", "Tailwind CSS", "React Router"],
      img: nise,
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
      title: "Basic Twitter Clone",
      description: "Replica of Twitter",
      link: "https://github.com/varadaraj772/TWITTER-CLONE.git",
      technologies: ["PHP", "MySQL", "BootStrap", "JavaScript"],
      img: x,
    },
    {
      title: "Random Quote Generator",
      description:
        "Gives you a random Quote everytime you hit generate button and one click to copy code",
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
        <h2 className="text-4xl font-bold mb-8 text-green-500">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="shadow rounded-lg overflow-hidden bg-slate-800 hover:shadow-md hover:scale-101 transition duration-300 ease-in-out"
            >
              <img
                src={project.img}
                alt="Project Screenshot"
                className="w-full h-50 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-green-500">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-gray-500">
                  <span>{project.technologies.join(", ")}</span>
                  <a
                    href={project.link}
                    className="underline hover:text-green-300"
                  >
                    {project.link === "#"
                      ? "View Project (coming soon)"
                      : "View Project"}
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
