import Hero from "./section/Hero";
import Projects from "./section/Projects";
import Navbar from "./components/Navbar";
import Skills from "./section/Skills";
import About from "./section/About";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
