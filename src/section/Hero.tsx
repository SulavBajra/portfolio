import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="profile"
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20 min-h-[80vh]"
    >
      {/* Profile Picture */}
      <div className="flex-shrink-0 w-64 h-64 md:w-96 md:h-96">
        <img
          src={profile}
          alt="Sulav Bajracharya profile picture"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
        <p className="text-lg font-semibold ">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold">Sulav Bajracharya</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-700">
          Web Developer
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={() => window.open("/assets/resume-example.pdf")}
            className="px-6 py-2 border border-gray-700 text-black rounded-lg hover:bg-black hover:text-white transition"
          >
            Download CV
          </button>
          <button
            onClick={() => (window.location.href = "#contact")}
            className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-black transition"
          >
            Contact Info
          </button>
        </div>

        {/* Socials */}
        <div className="flex gap-4 mt-6">
          <img
            src="src/assets/linkedin.png"
            alt="LinkedIn"
            className="h-8 w-8 cursor-pointer hover:scale-110 transition-transform"
            onClick={() =>
              window.open("https://linkedin.com/in/SulavBajracharya", "_blank")
            }
          />
          <a href="https://github.com/SulavBajra" target="_blank">
            <img
              src="src/assets/github.png"
              alt="Github"
              className="h-8 w-8 cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
