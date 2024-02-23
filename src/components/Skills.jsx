import html5 from "../assets/html5.png";
import css3 from "../assets/css-3.png";
import js from "../assets/js.png";
import java from "../assets/java.png";
import react from "../assets/react.png";
import tail from "../assets/Tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import py from "../assets/python.png";
import php from "../assets/php.png";
import fire from "../assets/firebase.png";
import sql from "../assets/sql.png";

function Skills() {
  const techSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JAVA", logo: java },
        { name: "JAVASCRIPT", logo: js },
        { name: "PYTHON", logo: py },
        { name: "PHP", logo: php },
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML", logo: html5 },
        { name: "CSS", logo: css3 },
        { name: "REACT", logo: react },
        { name: "FIREBASE", logo: fire },
        { name: "MySQL", logo: sql },
        { name: "TAILWIND", logo: tail },
        { name: "BOOTSTRAP", logo: bootstrap },
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
                          <h4 className="text-lg font-bold mb-1">
                            {skill.name}
                          </h4>
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
                          <h4 className="text-lg font-bold mb-1">
                            {skill.name}
                          </h4>
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
