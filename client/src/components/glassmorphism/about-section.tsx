import { motion } from "framer-motion";
import { Building, Cog, Laptop } from "lucide-react";

export default function AboutSection() {
  const experiences = [
    {
      company: "Energeia Microgrid Pvt Ltd",
      role: "IoT Engineer", 
      period: "Jul 2024 - Present",
      location: "Delhi, India",
      description: "IoT Engineer specializing in industrial energy monitoring and SCADA systems.",
      icon: Building,
      highlights: [
        "Integrated 58+ RS485 meters at forging plant EMS",
        "Built real-time SCADA-style dashboards for water quality",
        "Optimized MQTT/LoRa pipelines across industrial energy systems"
      ]
    },
    {
      company: "Nibiaa Devices Pvt. Ltd.",
      role: "IoT Engineer",
      period: "Jun 2022 - Jun 2024", 
      location: "Imphal, India",
      description: "Led LoRaWAN infrastructure and water treatment monitoring systems.",
      icon: Cog,
      highlights: [
        "Led LoRaWAN-based water treatment monitoring across Andaman & Islands",
        "Automated ChirpStack deployment using Python & Docker (60% faster rollout)",
        "Created IoT solution for asset tracking - Golf Cart Management for Singapore Client"
      ]
    },
    {
      company: "Freelance IoT Solutions",
      role: "IoT Solutions Architect",
      period: "Jun 2022 - Present",
      location: "Remote",
      description: "Custom IoT solutions, embedded firmware, and cloud integrations.",
      icon: Laptop,
      highlights: [
        "Developed embedded firmware and Modbus decoders for EV and energy sensors",
        "Integrated Stripe API in ThingsBoard for meter credit using n8n and Webhooks",
        "White-label ThingsBoard with custom dashboard designs and advanced rule chains"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-testid="about-title">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="about-subtitle">
            Passionate IoT Engineer with expertise in industrial automation and smart solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6" data-testid="summary-title">
              Professional Summary
            </h3>
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Education</h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Bachelor of Computer Science Engineering</strong></p>
                  <p>Anna University | 2020 | 1st Division</p>
                  <p className="text-sm">Ranked in top 1% of State Board Examination; selected for INSPIRE Award</p>
                </div>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Core Expertise</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• End-to-end industrial automation solutions</li>
                  <li>• LoRaWAN, Modbus RS485, MQTT protocols</li>
                  <li>• Cloud integrations (AWS, DigitalOcean)</li>
                  <li>• Scalable IIoT systems using Docker & ThingsBoard</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                data-testid={`experience-card-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center flex-shrink-0">
                    <exp.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{exp.company}</h4>
                    <p className="text-sm text-gray-600 font-medium">{exp.role}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.period} | {exp.location}</p>
                    <p className="text-gray-600 text-sm mb-3">{exp.description}</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
