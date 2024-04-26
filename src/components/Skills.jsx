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
        { name: "REACT JS", logo: react },
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
              className="p-4 rounded-lg shadow shadow-gray-700 bg-slate-800"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-300">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-14 h-14 mr-4 object-cover rounded"
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
