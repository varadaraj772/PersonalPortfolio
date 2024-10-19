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
import reactjs from "../assets/reactjs.png";
import node from "../assets/node.png";
import react_native from "../assets/react_native.png";
import mongodb from "../assets/mongodb.png";
import expressjs from "../assets/express.png";
import go from "../assets/go.png";

const getRandomPosition = () => ({
  x: Math.random() * window.innerWidth - 100,
  y: Math.random() * window.innerHeight - 100,
});

function Skills() {
  const [skills] = useState([
    { name: "JAVA", logo: java },
    { name: "JAVASCRIPT", logo: js },
    { name: "GO", logo: go },
    { name: "PYTHON", logo: py },
    { name: "PHP", logo: php },
    { name: "EXPRESS", logo: expressjs },
    { name: "NODE", logo: node },
    { name: "REACT NATIVE", logo: react_native },
    { name: "MONGODB", logo: mongodb },
    { name: "REACT JS", logo: reactjs },
    { name: "FIREBASE", logo: fire },
    { name: "MySQL", logo: sql },
    { name: "TAILWIND CSS", logo: tail },
    { name: "BOOTSTRAP", logo: bootstrap },
  ]);


  const controls = useAnimation();

  // Effect for random floating movement, starts immediately on mount
  useEffect(() => {
    // Immediately start floating animation when page loads
    controls.start((i) => ({
      x: getRandomPosition().x,
      y: getRandomPosition().y,
      transition: { duration: 5, ease: "easeInOut", },
    }));

    // Continue to move icons every 5 seconds
    const interval = setInterval(() => {
        controls.start((i) => ({
          x: getRandomPosition().x,
          y: getRandomPosition().y,
          transition: { duration: 5, ease: "easeInOut",  },
        }));
    }, 5000);

    return () => clearInterval(interval);
  }, [ controls]);

  return (
    <section className="bg-transparent text-white h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center mt-2"
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
        {/* Floating Skills */}
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            custom={index}
            className="absolute cursor-pointer border-none"
            animate={controls}
            initial={{
              x: getRandomPosition().x,
              y: getRandomPosition().y,
            }}
            whileHover={{
              scale: 2,
              transition: { duration: 0.3 },
            }
            }

          >
            <motion.img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 object-contain rounded-lg  transform transition-all duration-300"
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
