import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-6 flex flex-col items-center justify-center text-sm">
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <p className="text-gray-300">
          Copyright © {new Date().getFullYear()} Varadaraj Acharya
        </p>
      </div>
      <div className="flex items-center space-x-4 p-2 text-center">
        <a
          href="https://www.linkedin.com/in/varada-raj-8b76a5270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          <FaLinkedin className="inline-block mr-1" /><p></p>Varada
        </a>
        <a
          href="https://github.com/varadaraj772"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          <FaGithub className="inline-block mr-1" />
          varadaraj772
        </a>
        <a
          href="https://www.instagram.com/__varadaraj__?igsh=MWR2d2FkcjYxOTdnMw=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          <FaInstagram className="inline-block mr-1" />
          __varadaraj__
        </a>
        <a
          href="https://www.instagram.com/_.macro_world._?igsh=MW93Zmg5MnJwNHdteA=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          <FaInstagram className="inline-block mr-1" />
          _.macro_world._
        </a>
      </div>
    </footer>
  );
}

export default Footer;
