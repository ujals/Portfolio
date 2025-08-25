import { motion } from "framer-motion";
import Navigation from "@/components/glassmorphism/navigation";
import HeroSection from "@/components/glassmorphism/hero-section";
import AboutSection from "@/components/glassmorphism/about-section";
import ProjectsSection from "@/components/glassmorphism/projects-section";
import SkillsSection from "@/components/glassmorphism/skills-section";
import ContactSection from "@/components/glassmorphism/contact-section";
import Footer from "@/components/glassmorphism/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
