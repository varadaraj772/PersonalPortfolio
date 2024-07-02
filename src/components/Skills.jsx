import js from "../assets/js.png";
import java from "../assets/java.png";
import tail from "../assets/Tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import py from "../assets/python.png";
import php from "../assets/php.png";
import fire from "../assets/firebase.png";
import sql from "../assets/sql.png";
import mern from "../assets/MERN-logo.png";
import react_native from "../assets/react_native.png";

function Skills() {
  const techSkills = [
    {
      category: "Languages",
      skills: [
        { name: "JAVA", logo: java },
        { name: "JAVASCRIPT", logo: js },
        { name: "PYTHON", logo: py },
        { name: "PHP", logo: php },
      ],
    },
    {
      category: "Technologies",
      skills: [
        { name: "REACT NATIVE", logo: react_native },
        { name: "MERN", logo: mern },
        { name: "FIREBASE", logo: fire },
        { name: "MySQL", logo: sql },
        { name: "TAILWIND CSS", logo: tail },
        { name: "BOOTSTRAP", logo: bootstrap },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-tr from-slate-950 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-green-500">
          My Skillset
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techSkills.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-lg shadow-lg  bg-slate-800"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-300">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-16 h-16 mr-4 object-contain rounded"
                    />
                    <h4 className="text-lg font-bold text-green-400">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
