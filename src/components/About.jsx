function About() {
  return (
    <section className="bg-gray-900 py-12 text-white">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden shadow-md mr-4">
          <img
            src="https://picsum.photos/id/1015/400/400"
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Varadaraj Acharya</h3>
          <p className="text-gray-400">Full Stack Developer</p>
        </div>
      </div>
      <hr className="border-gray-700 mt-4 p-2 border-t-2" />
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed mb-6">
              Hi, I am Your Name. I am a Full Stack Developer with a passion for
              creating user-friendly and efficient web applications. I have a
              strong background in JavaScript, React, Node.js, and Python. My
              career goal is to become a Full Stack Engineer and contribute to
              the development of innovative and impactful web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
