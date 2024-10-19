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

  const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  // Handle device tilt
  useEffect(() => {
    const handleOrientation = (event) => {
      const x = event.beta ? event.beta / 180 : 0; // Convert to normalized value
      const y = event.gamma ? event.gamma / 90 : 0; // Convert to normalized value
      setTiltValues({ x, y });
    };

    // Check if device orientation is supported
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, []);

  // Handle mouse movement for desktop
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientY / window.innerHeight - 0.5) * 2;
      const y = (event.clientX / window.innerWidth - 0.5) * 2;
      setTiltValues({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating animation
  useEffect(() => {
    const startFloating = async () => {
      await controls.start("visible"); // First complete the entrance animation

      // Then start the floating animation
      controls.start((i) => ({
        x: `${Math.sin((Date.now() + i * 1000) / 2000) * 100 + tiltValues.y * 50}px`,
        y: `${Math.cos((Date.now() + i * 1000) / 2000) * 100 + tiltValues.x * 50}px`,
        transition: {
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }));
    };

    startFloating();
  }, [controls, tiltValues]);

  // Variants for animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: {
      y: 1000,
      opacity: 0,
    },
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
    <section className="bg-transparent text-white h-screen overflow-hidden relative">
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
        className="flex justify-center items-center flex-wrap gap-8 relative h-[70vh]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            custom={index}
            variants={skillVariants}
            className="absolute"
            style={{
              left: `${(index % 5) * 20 + 10}%`,
              top: `${Math.floor(index / 5) * 25 + 20}%`,
            }}
            whileHover={{
              scale: 1.2,
              zIndex: 10,
              transition: { duration: 0.3 },
            }}
          >
            <div className="group relative">
              <motion.div
                className="absolute -inset-1 rounded-lg  blur-sm group-hover:opacity-75 transition duration-300"
              />
              <div className="relative bg-transparent rounded-lg p-2">
                <motion.img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                <motion.p
                  className="text-center mt-2 font-semibold text-sm text-green-400"
                >
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