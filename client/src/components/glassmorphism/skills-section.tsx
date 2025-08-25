import { motion } from "framer-motion";
import { Code, Wifi, Cloud, Gavel, Award } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "C++", "JavaScript", "Shell Scripting"]
    },
    {
      title: "Protocols", 
      icon: Wifi,
      skills: ["LoRaWAN", "Modbus RS485", "MQTT", "TCP/IP & BLE"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud, 
      skills: ["AWS (EC2, S3, IoT)", "DigitalOcean", "Docker", "Terraform"]
    },
    {
      title: "Platforms",
      icon: Gavel,
      skills: ["ThingsBoard", "ChirpStack", "Node-RED", "n8n Automation"]
    }
  ];

  const certifications = [
    { name: "AWS IoT Core", provider: "AWS", year: "2025", icon: "fab fa-aws" },
    { name: "Cybersecurity", provider: "Google", year: "2024", icon: "fas fa-shield-alt" },
    { name: "Web Development", provider: "Udemy", year: "2024", icon: "fas fa-code" },
    { name: "Hardware Repair", provider: "Certified", year: "2019", icon: "fas fa-wrench" }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-testid="skills-title">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="skills-subtitle">
            Comprehensive skill set spanning IoT protocols, cloud platforms, and development technologies
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                data-testid={`skill-category-${index}`}
              >
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4" data-testid={`skill-category-title-${index}`}>
                  {category.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} data-testid={`skill-${index}-${skillIndex}`}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8" data-testid="certifications-title">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
                  data-testid={`certification-${index}`}
                >
                  <Award className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-800" data-testid={`cert-name-${index}`}>
                    {cert.name}
                  </p>
                  <p className="text-xs text-gray-500" data-testid={`cert-provider-${index}`}>
                    {cert.provider}
                  </p>
                  <p className="text-xs text-gray-400" data-testid={`cert-year-${index}`}>
                    {cert.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
