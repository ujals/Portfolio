import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-start justify-start relative overflow-hidden pt-24 md:pt-32">
      <div className="container mx-auto px-6 text-center z-10">
        {/* Profile Picture */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto relative group">
            <div className="relative w-full h-full">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEKyzBi8MRacQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719932364779?e=1758758400&v=beta&t=gmT56HkmrIZeFqIt9ykX7hGD-VRN-8eMMuHyxkz4wko"
                alt="Profile Photo"
                className="w-full h-full object-cover rounded-full relative z-10 transition-transform duration-300 group-hover:scale-110"
                style={{
                  objectPosition: 'center',
                  transform: 'scale(1.1)'
                }}
              />
              
              {/* Glass Layer */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"
                  style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      animation: 'shimmer 3s infinite linear',
                      backgroundSize: '200% 200%',
                      transform: 'rotate(30deg) translateX(-25%) translateY(-25%)',
                      width: '200%',
                      height: '200%'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-extralight mb-2 text-gray-900"
          data-testid="hero-title"
        >
          Kshetrimayum Ujal Singh
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl font-light text-gray-800 mb-4"
          data-testid="hero-subtitle"
        >
          IoT Engineer & Solutions Architect
        </motion.p>

        {/* Experience */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg font-light text-gray-600 mb-8 max-w-2xl mx-auto"
          data-testid="hero-description"
        >
          3+ years of experience in end-to-end industrial automation solutions. Expert in Modbus, LoRaWAN, MQTT, and cloud integrations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            data-testid="button-view-work"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            data-testid="button-contact"
          >
            Get In Touch
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
