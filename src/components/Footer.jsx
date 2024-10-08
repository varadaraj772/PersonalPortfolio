import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-transparent text-white py-8 flex flex-col items-center justify-center text-sm"
    >
      <motion.div variants={iconVariants} className="mb-4 text-center">
        <p className="text-gray-300">
          Copyright © {new Date().getFullYear()} Varadaraj Acharya
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        className="flex flex-wrap items-center justify-center space-x-6 p-4 text-center"
      >
        <motion.a
          variants={iconVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/varada-raj-8b76a5270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2"
        >
          <FaLinkedin className="text-xl" />
          <span>Varada</span>
        </motion.a>
        <motion.a
          variants={iconVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/varadaraj772"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2"
        >
          <FaGithub className="text-xl" />
          <span>varadaraj772</span>
        </motion.a>
        <motion.a
          variants={iconVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.instagram.com/__varadaraj__?igsh=MWR2d2FkcjYxOTdnMw=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center space-x-2"
        >
          <FaInstagram className="text-xl" />
          <span>__varadaraj__</span>
        </motion.a>
        <motion.a
          variants={iconVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.instagram.com/_.macro_world._?igsh=MW93Zmg5MnJwNHdteA=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center space-x-2"
        >
          <FaInstagram className="text-xl" />
          <span>_.macro_world._</span>
        </motion.a>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
