import { Code, Wifi, Cloud, Gavel, ExternalLink } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "C++", "JavaScript", "Shell Scripting", "TypeScript", "HTML/CSS"],
    },
    {
      title: "Protocols", 
      icon: Wifi,
      skills: ["LoRaWAN", "Modbus RS485", "MQTT", "TCP/IP", "BLE", "WebSocket"],
    },
    {
      title: "Cloud & DevOps", 
      icon: Cloud, 
      skills: ["AWS (EC2, S3, IoT)", "DigitalOcean", "Docker", "Terraform", "GitHub Actions", "Kubernetes"],
    },
    {
      title: "Platforms",
      icon: Gavel,
      skills: ["ThingsBoard", "ChirpStack", "Node-RED", "n8n Automation", "Grafana", "Prometheus"],
    }
  ];

  const certifications = [
    { 
      name: "AWS IoT Core", 
      provider: "AWS", 
      year: "2025",
      link: "#"
    },
    { 
      name: "Cybersecurity", 
      provider: "Google", 
      year: "2024",
      link: "#"
    },
    { 
      name: "Web Development", 
      provider: "Udemy", 
      year: "2024",
      link: "#"
    },
    { 
      name: "Hardware Repair", 
      provider: "Certified", 
      year: "2019",
      link: "#"
    }
  ];

  return (
    <section id="skills" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning IoT protocols, cloud platforms, and development technologies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-100 
                          hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full
                          shadow-md"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <category.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-light text-gray-800 text-center mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex} 
                      className="text-gray-600 text-sm text-center hover:bg-gray-50 rounded-lg py-1.5 px-2 transition-colors duration-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-light text-gray-800 text-center mb-8">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-100 
                            hover:shadow-lg transition-all duration-300 hover:-translate-y-1 
                            flex flex-col h-full group shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-light text-gray-800 group-hover:text-gray-900 transition-colors">
                      {cert.name}
                    </h4>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <div className="mt-auto pt-2">
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                      {cert.provider}
                    </p>
                    <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                      {cert.year}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
