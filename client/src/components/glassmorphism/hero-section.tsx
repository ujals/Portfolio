import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-20 w-32 h-32 glass-floating rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: -2 }}
          className="absolute top-40 right-32 w-24 h-24 glass-floating rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: -4 }}
          className="absolute bottom-32 left-1/3 w-20 h-20 glass-floating rounded-full opacity-50"
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-glass-panel rounded-3xl p-12 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 rounded-full mx-auto mb-6 glass-card overflow-hidden">
              <img
                src="@assets/1719932364779_1756105042363.jpg"
                alt="Kshetrimayum Ujal Singh - IoT Engineer"
                className="w-full h-full object-cover"
                data-testid="hero-profile-image"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-extralight mb-6 hero-gradient"
            data-testid="hero-title"
          >
            Kshetrimayum Ujal Singh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl font-light text-gray-600 mb-4"
            data-testid="hero-subtitle"
          >
            IoT Engineer & Solutions Architect
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-lg font-light text-gray-500 mb-8 max-w-2xl mx-auto"
            data-testid="hero-description"
          >
            3+ years of experience in end-to-end industrial automation solutions. Expert in Modbus, LoRaWAN, MQTT, and cloud integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="glass-button group"
              data-testid="button-view-work"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="glass-button group"
              data-testid="button-contact"
            >
              Get In Touch
              <Mail className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
