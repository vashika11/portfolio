import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import PositionOfResponsibility from "./sections/PositionOfResponsibility";
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
      <main>
        <Hero />
        <Skills />
        <PositionOfResponsibility />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      <CursorGlow />
      <StarCanvas />
    </>
  );
}