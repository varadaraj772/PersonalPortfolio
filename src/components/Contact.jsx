import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-transparent text-white h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        {/* Animated Header */}
        <motion.h2
          className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{
            transition: { duration: 0.4 },
          }}
          style={{
            backgroundImage: "linear-gradient(45deg, #22c55e, #16a34a, #065f46)",
            backgroundSize: "200%",
            animation: "gradient-animation 3s ease infinite",
          }}
        >
          Get In Touch
        </motion.h2>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email and Phone */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-400 mb-4">
              Feel free to reach out using the information below:
            </p>
            <div className="flex items-center mb-4">
              <FaEnvelope className="inline-block mr-2 text-gray-300" />
              <a
                href="mailto:varadaraj277@gmail.com"
                className="text-gray-300 hover:text-green-300 transition-colors duration-200"
              >
                varadaraj277@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="inline-block mr-2 text-gray-300" />
              <a
                href="tel:8722593540"
                className="text-gray-300 hover:text-green-300 transition-colors duration-200"
              >
                8722593540
              </a>
            </div>
            <div className="flex items-center mb-4">
              <FaWhatsapp className="inline-block mr-2 text-gray-300" />
              <a
                href="https://wa.me/918722593540"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-300 transition-colors duration-200"
              >
                WhatsApp Chat
              </a>
            </div>
          </motion.div>

          {/* LinkedIn Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-400 mb-4">Let's connect on LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/varada-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-300 hover:text-green-100 transition-colors duration-200"
            >
              <FaLinkedin className="inline-block mr-2" />
              Varadaraj Acharya
            </a>
          </motion.div>
        </div>
      </div>

      {/* Gradient Animation Style */}
      <style>
        {`
          @keyframes gradient-animation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Contact;
