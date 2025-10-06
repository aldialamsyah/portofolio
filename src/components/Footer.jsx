import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: personalInfo.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      href: personalInfo.github,
      icon: Github,
      color: 'hover:text-gray-600'
    },
    {
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: 'hover:text-cyan-600'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 tracking-wider">
              4LD1
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {personalInfo.role} passionate about building robust network infrastructure and scalable IT solutions.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-cyan-400">Email:</span> {personalInfo.email}
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400">Phone:</span> {personalInfo.phone}
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400">Location:</span> {personalInfo.location}
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm uppercase tracking-wide"
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Social Links & Professional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 ${link.color} transition-all duration-300 hover:scale-110 group`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-cyan-400">Specialization:</span><br />
                Network Engineering & IT Infrastructure
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400">Currently:</span><br />
                Server & Storage Technician
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} {personalInfo.name} • Made with
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              by AI
            </p>
            <div className="flex items-center space-x-6 text-xs text-gray-500 uppercase tracking-wide">
              <span>Network Engineer Portfolio</span>
              <span>•</span>
              <span>GitHub Managed</span>
              <span>•</span>
              <span>Auto Deploy</span>
            </div>
          </div>
          
          {/* Tech Note */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              This portfolio is managed through GitHub repository. 
              Project data and content updates are deployed automatically via Vercel integration.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;