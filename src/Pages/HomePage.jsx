import React, { useEffect } from "react";
import NavSection from "../components/NavSection";
import MainSection from "../components/MainSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import { useLocation } from "react-router-dom";
import FooterSection from "../components/FooterSection";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to the corresponding section
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location])
  return (
    <>
    <MainSection/>
    <AboutSection/>
    <ServiceSection/>
    <ProjectSection/>
    <SkillSection/>
    <FaqSection/>
    <ContactSection/>
    </>
  );
};

export default HomePage;
