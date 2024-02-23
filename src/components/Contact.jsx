import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gradient-to-tr from-slate-950 to-gray-900 py-12 text-white">
      <div className=" mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-start">Contact Me</h2>
        <div className="text-center">
          <p className="text-gray-300">
            Reach out to me through the following channels:
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4">
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
    </section>
  );
}

export default Contact;
