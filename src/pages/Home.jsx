import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../sections/Hero.jsx";
import Stats from "../sections/Stats.jsx";
import ProjectsSection from "../sections/ProjectsSection.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import ProcessSection from "../sections/ProcessSection.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import ArchitectureSection from "../sections/ArchitectureSection.jsx";
import ClientSection from "../sections/ClientSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
    }
  }, [hash]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <Hero />
      <Stats />
      <ProjectsSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <ArchitectureSection />
      <ClientSection />
      <ContactSection />
    </motion.div>
  );
}
