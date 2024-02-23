import html5 from "../assets/html5.png";

function Skills() {
  const techSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "HTML", proficiency: "Expert", logo: html5 },
        { name: "CSS", proficiency: "Advanced", logo: html5 },
        {
          name: "JavaScript",
          proficiency: "Proficient",
          logo: html5,
        },
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "React", proficiency: "Intermediate", logo: html5 },
        { name: "Node.js", proficiency: "Beginner", logo: html5 },
      ],
    },
  ];
return (
  <section className="bg-gradient-to-tr from-slate-950 to-gray-900 text-yellow-600 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-4">Programming Languages</h3>
          <div>
            {techSkills
              .filter(
                (category) => category.category === "Programming Languages"
              )
              .map((category) => (
                <div key={category.category}>
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center mb-4">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-bold mb-1">{skill.name}</h4>
                        <p className="text-sm text-gray-600">
                          {skill.proficiency}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
        <div className="p-4 flex flex-col items-end">
          <h3 className="text-2xl font-bold mb-4">Web Technologies</h3>
          <div className="text-right">
            {techSkills
              .filter((category) => category.category === "Web Technologies")
              .map((category) => (
                <div key={category.category}>
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center mb-4">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-bold mb-1">{skill.name}</h4>
                        <p className="text-sm text-gray-600">
                          {skill.proficiency}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);


}

export default Skills;
