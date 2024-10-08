import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HeaderNav() {
  return (
    <nav className="flex items-center justify-evenly space-x-8 bg-transparent backdrop-blur-lg text-yellow-500 py-4 relative z-10 shadow-lg">
      {[
        { name: "About", to: "/" },
        { name: "Projects", to: "/projects" },
        { name: "Skills", to: "/skills" },
        { name: "Contact", to: "/contact" },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="relative group cursor-pointer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        >
          {/* Link Text with unique effect */}
          <Link to={item.to} className="px-2 py-1 text-lg font-bold relative z-10">
            <motion.span
              className="relative z-10"
              whileHover={{
                color: "#FFD700",
                textShadow: "0px 0px 20px #FFD700, 0px 0px 30px #FFD700",
                transition: { duration: 0.3 },
              }}
            >
              {item.name}
            </motion.span>
          </Link>

          {/* Animated Underline Effect */}
          <motion.div
            className="absolute bottom-0 left-1/2 h-1 w-full bg-yellow-300 rounded transition-all duration-300 ease-in-out origin-center"
            style={{ transform: "translateX(-50%) scaleY(0)" }}
            initial={{ scaleY: 0 }}
            whileHover={{ scaleY: 1.5 }}
          />
        </motion.div>
      ))}
    </nav>
  );
}

export default HeaderNav;
