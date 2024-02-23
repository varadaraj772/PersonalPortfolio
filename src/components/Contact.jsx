import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email)
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-tr from-slate-950 to-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        {submitted ? (
          <p className="text-green-500 text-center">
            Thank you for your message!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow-sm p-2 rounded-md focus:ring-indigo-500 focus:outline-none text-white block w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm p-2 rounded-md focus:ring-indigo-500 focus:outline-none text-white block w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow-sm p-2 rounded-md focus:ring-indigo-500 focus:outline-none text-white block w-full"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-3 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
