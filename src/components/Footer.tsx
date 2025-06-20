import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: Mail, 
      href: "mailto:edmill@outlook.com", 
      label: "Email",
      color: "hover:text-vibe-blue"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/edmill/", 
      label: "LinkedIn",
      color: "hover:text-vibe-blue"
    },
    { 
      icon: Github, 
      href: "https://github.com/edmill", 
      label: "GitHub",
      color: "hover:text-vibe-gray"
    },
  ];

  return (
    <footer className="py-20 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h3
            className="text-3xl font-bold mb-6 text-vibe-gray"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-vibe-sienna to-vibe-blue bg-clip-text text-transparent">
              Let's Create Something Amazing
            </span>
          </motion.h3>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always open to discussing new opportunities, collaborations, or just chatting about design.
          </motion.p>
          <motion.a
            href="mailto:edmill@outlook.com"
            className="inline-block px-10 py-5 bg-gradient-to-r from-vibe-blue to-vibe-purple rounded-full font-bold text-lg text-white shadow-2xl hover:shadow-3xl transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-vibe-blue/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-label="Send email to Ed Miller"
          >
            Get In Touch
          </motion.a>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:border-vibe-blue hover:bg-vibe-blue transition-all duration-300 ${link.color}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <motion.p
            className="text-gray-600 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Made in the ⛰ with <Heart className="w-4 h-4 text-vibe-sienna" /> and lots of coffee!
          </motion.p>
          <motion.p
            className="text-sm text-gray-500 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            © 2025 Ed Miller. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;