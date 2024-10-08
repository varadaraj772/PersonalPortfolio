import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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

// Define initial positions for floating skills
const getRandomPosition = () => ({
  x: Math.random() * window.innerWidth - 100,
  y: Math.random() * window.innerHeight - 100,
});

function Skills() {
  const [skills] = useState([
    { name: "JAVA", logo: java },
    { name: "JAVASCRIPT", logo: js },
    { name: "PYTHON", logo: py },
    { name: "PHP", logo: php },
    { name: "REACT NATIVE", logo: react_native },
    { name: "MERN", logo: mern },
    { name: "FIREBASE", logo: fire },
    { name: "MySQL", logo: sql },
    { name: "TAILWIND CSS", logo: tail },
    { name: "BOOTSTRAP", logo: bootstrap },
  ]);

  const [activeSkill, setActiveSkill] = useState(null);
  const controls = useAnimation();

  // Effect for random floating movement, starts immediately on mount
  useEffect(() => {
    // Immediately start floating animation when page loads
    controls.start((i) => ({
      x: getRandomPosition().x,
      y: getRandomPosition().y,
      transition: { duration: 5, ease: "easeInOut" },
    }));

    // Continue to move icons every 5 seconds
    const interval = setInterval(() => {
      if (!activeSkill) {
        controls.start((i) => ({
          x: getRandomPosition().x,
          y: getRandomPosition().y,
          transition: { duration: 5, ease: "easeInOut" },
        }));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSkill, controls]);

  // Handle hover/click to bring skill to center
  const handleSkillClick = (skill) => {
    if (activeSkill === skill.name) {
      setActiveSkill(null); // Deselect skill
    } else {
      setActiveSkill(skill.name); // Activate skill
      controls.start({
        x: window.innerWidth / 2 - 50, // Move to center
        y: window.innerHeight / 2 - 50,
        scale: 1.5, // Scale up
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  };

  return (
    <section className="bg-transparent text-white h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
          My Skillset
        </h2>

        {/* Floating Skills */}
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            custom={index}
            className="absolute cursor-pointer"
            animate={controls}
            initial={{
              x: getRandomPosition().x,
              y: getRandomPosition().y,
            }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            onClick={() => handleSkillClick(skill)}
            style={
              activeSkill === skill.name
                ? { zIndex: 999 } // Bring active skill to front
                : {}
            }
          >
            <motion.img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 object-contain rounded-lg shadow-lg transform transition-all duration-300"
            />
            <motion.p
              className="text-center mt-2 font-semibold text-sm text-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
