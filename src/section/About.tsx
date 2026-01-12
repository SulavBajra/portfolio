export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 max-w-6xl mx-auto">
      {/* Section Header */}
      <p className="text-indigo-400 font-semibold text-lg mb-2 text-center md:text-left">
        Get To Know More
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center md:text-left">
        About Me
      </h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Profile Image */}
        <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0">
          <img
            src="src/assets/about.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Cards */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 bg-gray-100 dark:bg-gray-500 p-4 rounded-lg flex flex-col items-center text-center shadow-md">
              <img
                src="src/assets/experience.png"
                alt="Experience"
                className="h-12 w-12 mb-2"
              />
              <h3 className="font-semibold text-lg">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                2+ years <br /> Web Development
              </p>
            </div>
            <div className="flex-1 bg-gray-100 dark:bg-gray-500 p-4 rounded-lg flex flex-col items-center text-center shadow-md">
              <img
                src="src/assets/education.png"
                alt="Education"
                className="h-12 w-12 mb-2"
              />
              <h3 className="font-semibold text-lg">Education</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Bachelors of Information Management
              </p>
            </div>
          </div>

          {/* About Text */}
          <div>
            <p className="text--700 dark:text-black leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
