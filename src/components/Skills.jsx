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

const Skills = () => {
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

  const [isEntranceComplete, setIsEntranceComplete] = useState(false);
  const [positions, setPositions] = useState([]);
  const controls = Array(skills.length).fill(null).map(() => useAnimation());

  // Initialize random positions
  useEffect(() => {
    const newPositions = skills.map(() => ({
      x: Math.random() * (window.innerWidth - 200),
      y: Math.random() * (window.innerHeight - 200),
    }));
    setPositions(newPositions);
  }, []);

  // Handle device tilt
  useEffect(() => {
    if (!isEntranceComplete) return;

    const handleTilt = (event) => {
      if (!event.gamma || !event.beta) return;

      const tiltX = event.gamma / 90; // -1 to 1
      const tiltY = event.beta / 180; // -1 to 1

      skills.forEach((_, index) => {
        const newX = positions[index].x + (tiltX * 15);
        const newY = positions[index].y + (tiltY * 15);

        controls[index].start({
          x: Math.max(0, Math.min(window.innerWidth - 100, newX)),
          y: Math.max(0, Math.min(window.innerHeight - 100, newY)),
          transition: { duration: 0.1 }
        });
      });
    };

    // Handle mouse movement for desktop
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = (event.clientY / window.innerHeight) * 2 - 1;

      skills.forEach((_, index) => {
        const newX = positions[index].x + (mouseX * 30);
        const newY = positions[index].y + (mouseY * 30);

        controls[index].start({
          x: Math.max(0, Math.min(window.innerWidth - 100, newX)),
          y: Math.max(0, Math.min(window.innerHeight - 100, newY)),
          transition: { duration: 0.5 }
        });
      });
    };

    window.addEventListener('deviceorientation', handleTilt);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('deviceorientation', handleTilt);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isEntranceComplete, positions, controls]);

  // Start floating animation after entrance
  useEffect(() => {
    if (!isEntranceComplete) return;

    const startFloating = () => {
      skills.forEach((_, index) => {
        const randomX = Math.random() * (window.innerWidth - 200);
        const randomY = Math.random() * (window.innerHeight - 200);

        controls[index].start({
          x: randomX,
          y: randomY,
          transition: {
            duration: 5 + Math.random() * 5,
            ease: "easeInOut",
          },
        });
      });
    };

    const floatingInterval = setInterval(startFloating, 5000);
    startFloating(); // Initial floating

    return () => clearInterval(floatingInterval);
  }, [isEntranceComplete, controls]);

  // Entrance animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const skillVariants = {
    hidden: { y: 1000, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="bg-gray-900 text-white h-screen overflow-hidden relative">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold pt-8 mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="bg-gradient-to-r from-green-300 via-green-500 to-green-700 bg-clip-text text-transparent">
          My SkillSet
        </span>
      </motion.h2>

      <motion.div
        className="relative h-[70vh]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setIsEntranceComplete(true)}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="absolute left-1/2 top-1/2"
            variants={skillVariants}
            animate={controls[index]}
            whileHover={{
              scale: 1.2,
              zIndex: 50,
              transition: { duration: 0.3 },
            }}
            drag
            dragConstraints={{
              left: -50,
              right: 50,
              top: -50,
              bottom: 50,
            }}
            dragElastic={0.1}
          >
            <div className="group relative">
              <motion.div
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-600 to-green-400 opacity-0 blur-sm group-hover:opacity-75 transition duration-300"
              />
              <div className="relative bg-gray-900 rounded-lg p-2">
                <motion.img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                <motion.p className="text-center mt-2 font-semibold text-sm text-green-400">
                  {skill.name}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;