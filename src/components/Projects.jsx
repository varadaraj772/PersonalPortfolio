function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Brief project description",
      link: "https://example.com",
      image: "chrome://branding/content/about-logo@2x.png", // Placeholder image for Project 1
      technologies: [
        {
          name: "React",
          icon: "chrome://branding/content/about-logo@2x.png",
        },
        {
          name: "Tailwind CSS",
          icon: "chrome://branding/content/about-logo@2x.png",
        },
      ],
    },
    // Add other projects...
  ];

  return (
    <section className="bg-gradient-to-tr from-slate-950 to-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ul className="grid gap-4 auto-fit min-max(300px, 1fr)">
          {projects.map((project) => (
            <li
              key={project.title}
              className="bg-gray-800 shadow rounded-md p-4 hover:bg-gray-700"
            >
              <h3 className="text-lg font-bold mb-2 text-indigo-500">
                {project.title}
              </h3>
              <img
                src={project.image}
                alt={project.title}
                className="w-20 h-20 mb-2 rounded-md"
              />
              <p className="text-gray-300">{project.description}</p>
              <div className="flex items-center">
                {project.technologies.map((tech) => (
                  <span key={tech.name} className="mr-2 text-gray-400">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 mr-1"
                    />
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
