import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import Skills from "../skills/Skills";
import Project from "../projects/Project";
import About from "../about/About";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="bg-gray-950 text-white">

      <Navbar />

      <div id="home"  data-aos="fade-down">
        <Hero />
      </div>

      <div id="skills"  data-aos="fade-right">
        <Skills />
      </div>

      <div id="project"  data-aos="fade-right">
        <Project />
      </div>

      <div id="about" data-aos="fade-right" >
        <About />
      </div>

      <div id="contact"  data-aos="fade-down">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
