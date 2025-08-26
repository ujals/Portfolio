import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Forging Plant EMS",
      description: "Integrated 58+ RS485 meters for real-time energy monitoring ",
      image: "https://cdn-ildejcp.nitrocdn.com/QKAwqLuyCXDkCJSUGVHFHpBBjhUSZqPh/assets/images/optimized/rev-3a7e48c/www.energeia.in/wp-content/uploads/2025/07/EMS-Forging-Factory-Cover-Photo.webp",
      technologies: ["Modbus RS485", "MQTT", "Realtime"],
      link: "https://www.energeia.in/case-study/forging-plant-energy-monitoring-system-noida",
      type: "Case Study"
    },
    {
      title: "Water Treatment Monitoring",
      description: "LoRaWAN-based water quality monitoring across Andaman & Islands with real-time pH and TDS tracking.",
      image: "https://teltonika-networks.com/cdn/extras/11783/enabling-control-over-a-wastewater-treatment-plantjpe.webp",
      technologies: ["LoRaWAN", "Water Quality", "IoT Sensors"],
      type: "Enterprise Project"
    },
    {
      title: "Golf Cart Asset Tracking",
      description: "IoT solution for real-time asset tracking and management system for Singapore client.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["Asset Tracking", "GPS", "Fleet Management"],
      type: "International Client"
    },
    {
      title: "Helium Network Mapper",
      description: "Flask-based web application for LoRaWAN coverage diagnostics and network optimization.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["Flask", "Helium", "Network Analysis"],
      type: "Open Source"
    },
    {
      title: "ChirpStack Automation",
      description: "Automated ChirpStack deployment using Python & Docker with 60% faster rollout time.",
      image: "https://images.unsplash.com/photo-1667984391517-01bb69c83bd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["Docker", "Python", "ChirpStack"],
      type: "DevOps"
    },
    {
      title: "White-label ThingsBoard",
      description: "Custom dashboard designs and advanced rule chain implementations with Stripe API integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["ThingsBoard", "Stripe API", "n8n"],
      type: "Custom Platform"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-800 mb-6" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto" data-testid="projects-subtitle">
            Industrial IoT solutions that drive efficiency and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:scale-105 transition-all duration-300"
              data-testid={`project-card-${index}`}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/5 transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-light text-gray-800 mb-3" data-testid={`project-title-${index}`}>
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm" data-testid={`project-description-${index}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="glass-panel px-3 py-1 rounded-full text-xs text-gray-600"
                    data-testid={`project-tech-${index}-${techIndex}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm" data-testid={`project-type-${index}`}>
                  {project.type}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-gray-900 font-light transition-colors duration-300"
                    data-testid={`project-link-${index}`}
                  >
                    View <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
