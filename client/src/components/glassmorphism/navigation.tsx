import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];
  const socialIcons = [
    { 
      icon: <Phone size={14} className="text-gray-700 hover:text-gray-900" />, 
      href: "tel:+1234567890",
      label: "Call me"
    },
    { 
      icon: <Github size={14} className="text-gray-700 hover:text-gray-900" />, 
      href: "https://github.com/ujals",
      label: "GitHub"
    },
    { 
      icon: <Linkedin size={14} className="text-gray-700 hover:text-gray-900" />, 
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    { 
      icon: <Mail size={14} className="text-gray-700 hover:text-gray-900" />, 
      href: "mailto:ujal@example.com",
      label: "Email"
    },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-between px-6 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left side navigation */}
      <div className="flex items-center space-x-1">
        {navItems.map((item, index) => (
          <motion.button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="px-3 py-1 text-sm font-light text-gray-700 hover:text-gray-900 relative group"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </motion.button>
        ))}
      </div>

      {/* Right side social icons */}
      <div className="flex items-center space-x-4">
        {socialIcons.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-sm text-gray-700 hover:text-gray-900 transition-colors"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={item.label}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
