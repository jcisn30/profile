import React from "react";
import About from "./components/About";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-white bg-indigo-400 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
