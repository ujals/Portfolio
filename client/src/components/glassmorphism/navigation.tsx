import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav-scrolled" : "glass-nav"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-gray-800"
            data-testid="nav-logo"
          >
            Ujal Singh
          </motion.div>

          {!isMobile && (
            <div className="flex space-x-8">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium"
                  data-testid={`nav-link-${item.toLowerCase()}`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          )}

          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 p-2"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? "auto" : 0,
            }}
            className="overflow-hidden"
          >
            <div className="glass-card rounded-2xl mt-4 p-6">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                  data-testid={`mobile-nav-link-${item.toLowerCase()}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
