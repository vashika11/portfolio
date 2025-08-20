import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Positionofresponsibility from "./sections/Positionofresponsibility";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import StarCanvas from "./components/StarField";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Positionofresponsibility/>
      <Projects />
      <Contact />
      <Footer />
      <CursorGlow />
      <StarCanvas />
    </>
  );
}
