import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <hr className="border-gray-700 border-t-1" />
      <nav className=" flex items-center justify-evenly space-x-4 bg-slate-950 text-yellow-500  py-2">
        <Link to="/" className="px-2 hover:text-yellow-300 transition-colors">
          About
        </Link>
        <Link
          to="/projects"
          className="px-2 hover:text-yellow-300 transition-colors"
        >
          Projects
        </Link>
        <Link
          to="/skills"
          className="px-2 hover:text-yellow-300 transition-colors"
        >
          Skills
        </Link>
        <Link
          to="/contact"
          className="px-2 hover:text-yellow-300 transition-colors"
        >
          Contact
        </Link>
      </nav>
    </>
  );
}

export default Nav;
