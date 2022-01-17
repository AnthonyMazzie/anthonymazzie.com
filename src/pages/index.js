import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import ProjectsSection from "../components/ProjectsSection";
import { homeObjOne } from "../components/InfoSection/Data";
import { projectsObj } from "../components/ProjectsSection/Data";
import SoftSkills from "../components/SoftSkills";
import TechSkills from "../components/TechSkills";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { contactObjOne } from "../components/Contact/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div style={{ width: "auto", overflowX: "hidden" }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <ProjectsSection {...projectsObj} />
        <SoftSkills />
        <TechSkills />
        <Contact {...contactObjOne} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
