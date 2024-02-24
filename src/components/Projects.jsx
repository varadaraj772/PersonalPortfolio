function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "My peerosnal portfolio website",
      link: "https://personal-portfolio-varadaraj-s-projects.vercel.app/",
      technologies: ["React Js - ", "Tailwind CSS - ", "React Router"],
    },
    {
      title: "Nise Computer Education",
      description:
        "A simple website for Nise Computer Eduation Institute,Udupi",
      link: "https://nise-computers.vercel.app/",
      technologies: ["React Js - ", "Tailwind CSS - ", "React Router"],
    },
    {
      title: "Password Generator & Manager",
      description:
        "One stop solution where you can generate password and save it to your account",
      link: "https://github.com/varadaraj772/Password_generator_manager.git",
      technologies: ["HTML - ", "Bootstrap - ", "Firebase"],
    },
    {
      title: "Basic Twitter Clone",
      description: "Replica of Twitter",
      link: "https://github.com/varadaraj772/TWITTER-CLONE.git",
      technologies: ["PHP -", "MySQL -", "BootStrap -", "JavaScript"],
    },
    {
      title: "Random Quote Generator",
      description:
        "Gives you a random Quote everytime you hit generate button and one click to copy code",
      link: "https://random-quote-generator-ivory.vercel.app/",
      technologies: ["React Js - ", "RandomQuote API - ", "JavaScript"],
    },
    {
      title: "CLOCK",
      description: "A Simple Clock with Timer & Stopwatch functionality",
      link: "https://varadaraj772.github.io/CLOCK/",
      technologies: ["HTML - ", "CSS - ", "JavaScript"],
    },
  ];
  return (
    <section className="bg-gradient-to-tr from-slate-900 to-gray-950 py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ul className="grid gap-4 auto-fit min-max(300px, 1fr)">
          {projects.map((project) => (
            <li
              key={project.title}
              className="bg-gray-800 shadow rounded-t-xl p-4 hover:bg-gray-700"
            >
              <h3 className="text-lg font-bold mb-2 text-green-500">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex items-center">
                {project.technologies.map((name) => (
                  <span key={name} className="mr-2 text-gray-400">
                    {name}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="underline text-blue-500 mt-2 hover:text-blue-700"
              >
                {project.link === "#"
                  ? "View Project (coming soon)"
                  : "View Project"}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
