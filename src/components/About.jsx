/* eslint-disable react/no-unescaped-entities */
import varada from "../assets/varada.jpg";
import { FaFileDownload } from "react-icons/fa";

function About() {
  return (
    <section className="bg-gradient-to-tr from-slate-900 to-gray-950 py-12 text-white">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center md:items-start">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md mb-4 md:mb-0 md:mr-6">
          <img
            src={varada}
            alt="Varadaraj"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-2">Varadaraj Acharya</h3>
          <p className="text-gray-400">Tech Enthusiastic Student</p>
        </div>
      </div>

      <hr className="border-gray-700 mt-4 border-t-2" />

      <div className="container mx-auto p-6 bg-slate-900 rounded-b-xl">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-green-500">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            Hey there! I'm Varadaraj Acharya, a BCA student at Mahathma Gandhi
            Memorial College, Udupi. I'm passionate about web development and
            currently diving deep into the MERN stack and REACT NATIVE.
          </p>
          <section className="about-me">
            <p className="text-lg leading-relaxed mb-6">
              <ul className="space-y-4">
                <li>
                  <span className="font-bold">Mobile Development:</span>
                  Creating engaging mobile experiences that extend your web
                  presence with React Native app development.
                </li>
                <li>
                  <span className="font-bold">Front-End Development:</span>
                  Building beautiful and interactive user interfaces with
                  React.js, Bootstrap, and Tailwind CSS.
                </li>
                <li>
                  <span className="font-bold">Back-End Development:</span>
                  Ensuring seamless data handling and application logic with
                  Node.js and PHP.
                </li>
                <li>
                  <span className="font-bold">Database Management:</span>
                  Effectively storing and managing application data using
                  Firebase, MongoDB, and MySQL.
                </li>
              </ul>
              Constant learning fuels my exploration of new tech, pushing
              boundaries to deliver exceptional applications that exceed
              expectations.
            </p>
          </section>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="https://drive.google.com/file/d/1iFSXvGfO63UyQRqV_xZmk6OXl-e4mPKW/view?usp=drive_link"
          className="px-4 py-2 bg-transparent text-red-500 font-bold rounded-md shadow-md underline"
        >
          <FaFileDownload className="inline-block mr-1" />
          Download My Resume
        </a>
      </div>
    </section>
  );
}

export default About;
