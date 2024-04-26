/* eslint-disable react/no-unescaped-entities */
import varada from "../assets/varada.jpg";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";

function About() {
  return (
    <section className="bg-gradient-to-tr from-slate-900 to-gray-950 py-12 text-white">
      <div className="items-center p-4 md:p-1 flex flex-col md:flex-row">
        <div className="w-16 h-16 rounded-full overflow-hidden shadow-md mr-4">
          <img
            src={varada}
            alt="Varadaraj"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Varadaraj Acharya</h3>
          <p className="text-gray-400">Tech Enthusiastic Student</p>
        </div>
      </div>
      <hr className="border-gray-700 mt-4 border-t-2" />
      <div className="container p-3 bg-slate-900 rounded-b-xl w-full">
        <div className="container p-3 bg-slate-900 rounded-b-xl w-full">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl font-bold mb-4 text-green-500">
                About Me
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Hey there! I'm Varadaraj Acharya, a BCA student at Mahathma
                Gandhi Memorial College, Udupi. I'm passionate about web
                development and currently diving deep into the MERN stack
                (MongoDB, Express.js, React.js, and Node.js).
              </p>
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
