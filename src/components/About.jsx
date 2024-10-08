import { motion } from "framer-motion";
import { useState } from "react"; // Import useState
import { FaFileDownload, FaReact } from "react-icons/fa"; // Importing React icon
import varada from "../assets/varada.jpg";

function About() {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-transparent py-8 md:py-16 text-white flex flex-col items-center relative"
    >
      {/* Background Image with opacity only when hovered */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${varada})`,
            opacity: 0.3, // Low opacity for background
            zIndex: -1, // Behind other content
          }}
          initial={{ scale: 1.5, opacity: 0 }} // Start scale and opacity
          animate={{ scale: 1, opacity: 0.3 }} // Animate to full scale and opacity
          transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration and easing
        />
      )}

      {/* Image and Title Section */}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="flex flex-col items-center mb-10"
      >
        {/* Image Hover Animation */}
        <motion.div
          onHoverStart={() => setIsHovered(true)} // Set hover state
          onHoverEnd={() => setIsHovered(false)} // Reset hover state
          className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg mb-6 cursor-pointer" // Responsive image size
        >
          {/* Show your image normally */}
          <motion.img
            src={varada}
            alt="Varadaraj"
            className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`} // Change opacity on hover
          />
          {/* Show React icon on hover */}
          <motion.div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`} // Change opacity on hover
          >
            <FaReact className="text-5xl md:text-6xl text-blue-500" />
          </motion.div>
        </motion.div>

        {/* Text Hover Animation */}
        <motion.h3
          whileHover={{ scale: 1.2, color: "#f6e58d" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-2xl md:text-3xl font-extrabold" // Responsive text size
        >
          Varadaraj Acharya
        </motion.h3>
        <p className="text-yellow-300 text-base md:text-lg">Tech Enthusiast & Developer</p>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center max-w-3xl px-4" // Add padding for mobile
      >
        <p className="text-base md:text-lg mb-8">
          Hey! I'm Varadaraj, a passionate React Native Developer. I love
          exploring new technologies and building apps that push boundaries!
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl px-4"> {/* Adjusted gap */}
        {/* Hover Animation on Skill Cards */}
        {[
          { title: "Mobile Development", desc: "Engaging mobile experiences with React Native app development." },
          { title: "Front-End Development", desc: "Beautiful, interactive interfaces using React.js, Bootstrap, and Tailwind CSS." },
          { title: "Back-End Development", desc: "Seamless data handling and logic with Node.js and PHP." },
          { title: "Database Management", desc: "Efficiently managing data with Firebase, MongoDB, and MySQL." },
        ].map((skill, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? '-100vw' : '100vw', opacity: 0 }} // Load from opposite sides
            animate={{ x: 0, opacity: 1 }} // Animate to center
            transition={{ type: "spring", stiffness: 60, delay: 0.7 + index * 0.2 }} // Delay based on index
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 100, duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            className={`p-4 rounded-lg shadow-md cursor-pointer ${isHovered ? "bg-black bg-opacity-20" : "bg-transparent"}`} // Adjust blending effect
            style={{ opacity: isHovered ? 0.3 : 1 }} // Change opacity on hover
          >
            <h3 className="text-lg md:text-xl font-bold mb-2">{skill.title}</h3> {/* Responsive text size */}
            <p className="text-sm md:text-base">{skill.desc}</p> {/* Responsive text size */}
          </motion.div>
        ))}
      </motion.div>

      {/* Resume Download */}
      <motion.div
        whileHover={{
          scale: 1.2,
          boxShadow: "0px 0px 15px red",
          backgroundColor: "rgba(255, 0, 0, 0.5)",
          borderRadius: "9999px",
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="mt-8" // Adjusted margin for mobile
      >
        <a
          href="https://drive.google.com/file/d/1iFSXvGfO63UyQRqV_xZmk6OXl-e4mPKW/view?usp=drive_link"
          className="flex items-center px-4 py-2 md:px-6 md:py-3 bg-red-700 bg-opacity-50 text-white font-bold rounded-full shadow-lg cursor-pointer"
        >
          <FaFileDownload className="mr-2" />
          Download My Resume
        </a>
      </motion.div>
    </motion.section>
  );
}

export default About;
