import { motion } from "framer-motion";
import { Building, GraduationCap, Laptop, BookOpen } from "lucide-react";

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
      icon: Laptop,
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

  const education = [
    {
      degree: "Bachelor of Computer Science Engineering",
      institution: "Anna University",
      period: "2016 - 2020",
      grade: "1st Division",
      icon: GraduationCap,
      highlights: [
        "Ranked in top 1% of State Board Examination",
        "Selected for INSPIRE Award"
      ]
    },
    {
      course: "Core Expertise",
      icon: BookOpen,
      highlights: [
        "End-to-end industrial automation solutions",
        "LoRaWAN, Modbus RS485, MQTT protocols",
        "Cloud integrations (AWS, DigitalOcean)",
        "Scalable IIoT systems using Docker & ThingsBoard"
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
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-800 mb-6" data-testid="about-title">
            About Me
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto" data-testid="about-subtitle">
            Passionate IoT Engineer with expertise in industrial automation and smart solutions
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-8"
          >
            <h3 className="text-2xl font-light text-gray-800 mb-6 flex items-center gap-2">
              <Building className="w-6 h-6 text-gray-600" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="glass-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">{exp.role}</h4>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{exp.description}</p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-gray-400">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Expertise Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-2xl p-8"
          >
            <h3 className="text-2xl font-light text-gray-800 mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-gray-600" />
              Education & Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <edu.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">
                        {edu.degree || edu.course}
                      </h4>
                      {edu.institution && (
                        <p className="text-gray-600 text-sm">{edu.institution}</p>
                      )}
                      {edu.period && (
                        <p className="text-sm text-gray-500">{edu.period}</p>
                      )}
                      {edu.grade && (
                        <p className="text-sm text-gray-500">{edu.grade}</p>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-1.5 mt-3">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-gray-400 mt-1">•</span>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
