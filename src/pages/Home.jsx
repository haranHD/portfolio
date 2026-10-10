import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO.jsx";
import Hero from "../sections/Hero.jsx";
import Stats from "../sections/Stats.jsx";
import DeveloperIdentitySection from "../sections/DeveloperIdentitySection.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import ProjectsSection from "../sections/ProjectsSection.jsx";
import SkillsSection from "../sections/SkillsSection.jsx";
import ProcessSection from "../sections/ProcessSection.jsx";
import ArchitectureSection from "../sections/ArchitectureSection.jsx";
import ClientSection from "../sections/ClientSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 90);
    }
  }, [hash]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full overflow-hidden"
    >
      <SEO
        title="Hari Haran — Full-Stack Developer | Freelance Software Solutions"
        description="Professional portfolio of Hari Haran, a Full-Stack Freelance Software Developer specializing in modern web applications, REST APIs, business software, and systems integration using Java, Spring Boot, React, Node.js, MongoDB & MySQL."
        canonical="https://hariharan.dev/"
        ogImage="https://hariharan.dev/hariharan-banner.png"
      />
      <Hero />
      <Stats />
      <DeveloperIdentitySection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <ProcessSection />
      <ArchitectureSection />
      <ClientSection />
      <ContactSection />
    </motion.div>
  );
}
