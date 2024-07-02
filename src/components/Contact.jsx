import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gradient-to-tr from-slate-950 to-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-green-500">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
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
          </div>
          <div>
            <p className="text-gray-400 mb-4">
              Let's connect in LinkedIn 
            </p>
            <a
              href="https://www.linkedin.com/in/varada-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-300 hover:text-green-100 transition-colors duration-200"
            >
              <FaInstagram className="inline-block mr-2" />
              Varadaraj Acharya 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
