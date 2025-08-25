import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 glass-nav mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4" data-testid="footer-name">
              Kshetrimayum Ujal Singh
            </h3>
            <p className="text-gray-600 mb-6" data-testid="footer-title">
              IoT Engineer & Solutions Architect
            </p>
            
            <div className="flex justify-center space-x-6 mb-6">
              <motion.a
                href="mailto:ujalsingh1997@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glass-panel w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                data-testid="footer-email"
              >
                <Mail className="w-5 h-5 text-gray-600" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/kshetrimayum-ujal-singh-b41860228/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glass-panel w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                data-testid="footer-linkedin"
              >
                <Linkedin className="w-5 h-5 text-gray-600" />
              </motion.a>
              
              <motion.a
                href="tel:+916009857163"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glass-panel w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                data-testid="footer-phone"
              >
                <Phone className="w-5 h-5 text-gray-600" />
              </motion.a>
            </div>
            
            <p className="text-sm text-gray-500" data-testid="footer-copyright">
              © 2024 Kshetrimayum Ujal Singh. Crafted with glassmorphism design.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
