import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/glassmorphism/navigation";
import HeroSection from "@/components/glassmorphism/hero-section";
import AboutSection from "@/components/glassmorphism/about-section";
import ProjectsSection from "@/components/glassmorphism/projects-section";
import SkillsSection from "@/components/glassmorphism/skills-section";
import ContactSection from "@/components/glassmorphism/contact-section";
import Footer from "@/components/glassmorphism/footer";

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function Home() {
  useEffect(() => {
    let vantaEffect: any = null;
    
    const initVanta = () => {
      if (window.VANTA && window.VANTA.NET) {
        vantaEffect = window.VANTA.NET({
          el: "#vanta-background",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3f81ff,
          backgroundColor: 0xffffff,
          points: 10,
          maxDistance: 20,
          spacing: 15,
          showDots: true
        });
      }
    };

    // Check if Vanta is already loaded
    if (window.VANTA) {
      initVanta();
    } else {
      // Wait for scripts to load
      const checkVanta = setInterval(() => {
        if (window.VANTA) {
          initVanta();
          clearInterval(checkVanta);
        }
      }, 100);

      // Cleanup interval after 5 seconds
      setTimeout(() => clearInterval(checkVanta), 5000);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative">
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
