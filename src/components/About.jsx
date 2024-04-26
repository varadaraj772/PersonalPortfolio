/* eslint-disable react/no-unescaped-entities */
import varada from "../assets/varada.jpg";
import { FaFileDownload } from "react-icons/fa";

function About() {
  return (
    <section className="bg-gradient-to-tr from-slate-900 to-gray-950 py-12 text-white">
      <div className="items-start p-6 md:p-1 flex flex-col ">
        <div className="w-20 h-20 rounded-full overflow-hidden shadow-md mr-4">
          <img
            src={varada}
            alt="Varadaraj"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow: 1">
          <h3 className="text-xl font-bold mb-2">Varadaraj Acharya</h3>
          <p className="text-gray-400">Tech Enthusiastic Student</p>
        </div>
      </div>

      <hr className="border-gray-700 mt-4 border-t-2" />
      <div className="container p-3 bg-slate-900 rounded-b-xl w-full">
        <div className="container p-3 bg-slate-900 rounded-b-xl w-full">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full ">
              <h2 className="text-4xl font-bold mb-4 text-green-500">
                About Me
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Hey there! I'm Varadaraj Acharya, a BCA student at Mahathma
                Gandhi Memorial College, Udupi. I'm passionate about web
                development and currently diving deep into the MERN stack and
                REACT NATIVE.
              </p>
              <section className="about-me">
                <p className="text-lg leading-relaxed mb-6">
                  <br />
                  <hr />
                  <ul>
                    <li>
                      <span className=" font-bold"> Mobile Development : </span>
                      Creating engaging mobile experiences that extend your web
                      presence with React Native app development.
                    </li>
                    <hr />
                    <li>
                      <span className=" font-bold">
                        Front-End Development :{" "}
                      </span>
                      Building beautiful and interactive user interfaces with
                      React.js, Bootstrap, and Tailwind CSS.
                    </li>
                    <hr />
                    <li>
                      <span className=" font-bold">
                        Back-End Development :{" "}
                      </span>
                      Ensuring seamless data handling and application logic with
                      Node.js and PHP.
                    </li>
                    <hr />
                    <li>
                      <span className=" font-bold">Database Management : </span>
                      Effectively storing and managing application data using
                      Firebase, MongoDB, and MySQL.
                    </li>
                    <hr />
                    Constant learning fuels my exploration of new tech, pushing
                    boundaries to deliver exceptional applications that exceed
                    expectations.
                  </ul>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="https://drive.google.com/file/d/1aNgdmeUDGa-yI4S94EZHAh7RtMLOCNAc/view?usp=sharing"
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
