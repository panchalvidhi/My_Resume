import { useEffect } from "react";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import AwardsSection from "./components/AwardsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import useClickAnimation from "./hooks/useClickAnimation";

// Import animations CSS
import "./styles/animations.css";

function App() {
  // Use the click animation hook with custom options
  useClickAnimation({
    size: 100,
    color: 'rgba(99, 102, 241, 0.4)', // Using primary color from theme
    duration: 800
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <ProfileSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <AwardsSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
