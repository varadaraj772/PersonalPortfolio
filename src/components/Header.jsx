import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-slate-950 text-white px-8 py-4 flex justify-between shadow-md">
      <div className="flex items-center space-x-4">
        <h1
          className={`${
            isOpen ? "hidden" : "block"
          } text-2xl font-bold text-white font-mono`}
        >
          Hello World!
        </h1>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:block flex items-end space-x-4`}
      >
        <Link to="/" className="px-2 hover:text-gray-300 transition-colors">
          About
        </Link>
        <Link
          to="/projects"
          className="px-2 hover:text-gray-300 transition-colors"
        >
          Projects
        </Link>
        <Link
          to="/skills"
          className="px-2 hover:text-gray-300 transition-colors"
        >
          Skills
        </Link>
        <Link
          to="/contact"
          className="px-2 hover:text-gray-300 transition-colors"
        >
          Contact
        </Link>
      </nav>
      <button
        className="md:hidden block px-2 py-1 rounded-md hover:bg-gray-700 transition-colors"
        onClick={() => setOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-gray-300"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </header>
  );
}

export default Header;
