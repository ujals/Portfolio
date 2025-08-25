import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ujalsingh1997@gmail.com",
      href: "mailto:ujalsingh1997@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 6009857163",
      href: "tel:+916009857163"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/kshetrimayum-ujal-singh-b41860228/"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-testid="contact-title">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="contact-subtitle">
            Ready to discuss IoT solutions and automation projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8" data-testid="contact-info-title">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                    data-testid={`contact-info-${index}`}
                  >
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                          data-testid={`contact-link-${index}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8" data-testid="contact-form-title">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 glass-input rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-800 placeholder-gray-500"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 glass-input rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-800 placeholder-gray-500"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-4 glass-input rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-800 placeholder-gray-500"
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 glass-input rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-800 placeholder-gray-500 resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-4 glass-button rounded-xl text-gray-800 font-semibold hover:bg-white/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="button-send-message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
