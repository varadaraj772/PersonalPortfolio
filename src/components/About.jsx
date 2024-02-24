/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import varada from "../assets/varada.jpg";
import { Link } from "react-router-dom";
function About() {
  return (
    <motion.section
      className="bg-gradient-to-tr from-slate-900 to-gray-950 py-12 text-white"
      initial={{ backgroundColor: "#333" }}
      animate={{ backgroundColor: "#111" }}
      transition={{ duration: 1 }}
    >
      <div className="items-center p-4 md:p-1">
        <motion.div
          className="w-16 h-16 rounded-full overflow-hidden shadow-md mr-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <img
            src={varada}
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div>
          <motion.h3
            className="text-xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Varadaraj Acharya
          </motion.h3>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            Tech Enthusiastic Student
          </motion.p>
        </div>
      </div>
      <hr className="border-gray-700 mt-4 border-t-2" />
      <motion.div
        className="container p-3 bg-slate-900 rounded-b-xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <div className="container p-3 bg-slate-900 rounded-b-xl w-full">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl font-bold mb-4 text-green-500">About Me</h2>
              <p className="text-lg leading-relaxed mb-6">
                Hey there! I'm Varadaraj Acharya, a BCA student at Mahathma
                Gandhi Memorial College, Udupi. I'm passionate about web
                development and currently diving deep into the MERN stack -
                that's MongoDB, Express.js, React.js, and Node.js.
              </p>{" "}
              <p className="text-lg leading-relaxed mb-6">
                Driven by curiosity and fueled by a relentless desire to learn,
                I thrive on challenges and embrace new technologies with
                enthusiasm. My journey as a developer has honed my adaptability,
                allowing me to seamlessly integrate new tools and concepts into
                my repertoire. Whether it's crafting elegant front-end
                experiences with React.js or architecting robust back-end
                solutions with Node.js, I'm always eager to push boundaries and
                explore the ever-evolving landscape of web development.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center mt-8">
        <Link
          to="/projects"
          className="px-4 py-2 bg-green-200 text-slate-900 font-bold rounded-md shadow-md hover:bg-gray-200 transition-colors"
        >
          View My Projects
        </Link>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="https://www.instagram.com/_.macro_world._?igsh=MW93Zmg5MnJwNHdteA=="
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-transparent text-slate-500 font-bold rounded-md shadow-md underline"
        >
          &#129431; Visit My Macro Photography Page &#129431;
        </Link>
      </div>
    </motion.section>
  );
}

export default About;
