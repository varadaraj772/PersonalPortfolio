import { FaEnvelope, FaPhone, FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="bg-gradient-to-tr from-slate-950 to-gray-900 py-12 text-white">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
        <div className="text-center">
          <p className="text-gray-300">
            Reach out to me through the following channels
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4 flex-col md:flex-row">
            <a
              href="mailto:varadaraj277@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaEnvelope className="inline-block mr-1" />
              varadaraj277@gmail.com
            </a>
            <a
              href="tel:8722593540"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaPhone className="inline-block mr-1" />
              8722593540
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://drive.google.com/file/d/1AGQ87Wq057N0fNQ-JJTgfzp6s2hxjzuh/view?usp=sharing/"
          className="px-4 py-2 bg-transparent text-red-500 font-bold rounded-md shadow-md underline"
        >
          <FaFileDownload className="inline-block mr-1" />
          Download My Resume
        </a>
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
    </section>
  );
}

export default Contact;
