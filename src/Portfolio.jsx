import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin, Code, Server, Database, Monitor, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: "Current Position - Operator IT",
      period: "2024 - Present",
      role: "Server & Storage Operations",
      details: [
        "Monitor 271 HPE servers dan XP8 Storage 24/7",
        "Report monitoring setiap 4 jam & 6 jam ke Data Center",
        "Handle ticket support untuk issue beginner hingga expert",
        "Analisa server alerts (NIC, HBA, Memory, Disk)",
        "Troubleshoot PSOD menggunakan ILO Amplifier",
        "Collect data untuk AHS dan IML analysis"
      ]
    },
    // ...tambahkan pengalaman lain sesuai kebutuhan...
  ];

  const skills = [
    { category: "Server Management", items: ["HPE Server (271 units)", "Storage XP8", "ILO Amplifier", "24/7 Monitoring"] },
    { category: "System Administration", items: ["Linux Backup", "Windows 7/10/11", "Acronis Cloning", "Database Backup"] },
    { category: "Network & Hardware", items: ["Mikrotik & Cisco", "Troubleshooting Hardware", "CCTV Installation", "POS Systems"] },
    { category: "Development", items: ["IoT Systems", "Smart Watering", "Hardware Assembly", "System Integration"] }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">4LD1</div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-purple-400 transition-colors">{item}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold">AA</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ALDI ALAMSYAH</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">IT Professional | Server Operations | System Administrator</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full"><Server className="w-5 h-5 text-purple-400" /><span>271 Servers Monitoring</span></div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full"><Database className="w-5 h-5 text-pink-400" /><span>Storage XP8</span></div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full"><Monitor className="w-5 h-5 text-blue-400" /><span>24/7 Operations</span></div>
            </div>
          </div>
          <button onClick={() => scrollToSection('about')} className="animate-bounce mt-8"><ChevronDown className="w-8 h-8 text-purple-400" /></button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">IT Professional Journey</h3>
              <p className="text-gray-300 mb-6">Started from SMK Wikrama Bogor (Computer Network Engineering) and currently pursuing Teknik Informatika at Institut Teknologi Bisnis dan Swadharma.</p>
              <p className="text-gray-300 mb-6">Specialized in server operations, managing 271 HPE servers and XP8 storage systems with 24/7 monitoring responsibilities. Expert in troubleshooting, system administration, and IoT development.</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-purple-400"><MapPin className="w-5 h-5" /><span>Bogor Timur, Indonesia</span></div>
                <div className="flex items-center gap-2 text-pink-400"><Code className="w-5 h-5" /><span>Born July 5, 2003</span></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-purple-400">Current Focus</h4>
                <p className="text-gray-300">Server Operations & Infrastructure Management</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2 text-pink-400">Education</h4>
                <p className="text-gray-300">Teknik Informatika (2023 - Present)</p>
                <p className="text-gray-300">SMK TKJ Graduate (2019-2022)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Experience</h2>
          <div className="max-w-6xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">{exp.company}</h3>
                    <p className="text-xl text-gray-300">{exp.role}</p>
                  </div>
                  <div className="text-pink-400 font-semibold">{exp.period}</div>
                </div>
                <ul className="space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technical Skills</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-gray-300 text-sm">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Get In Touch</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/50">
              <Phone className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-300">081294754677</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/50">
              <Mail className="w-8 h-8 mx-auto mb-4 text-pink-400" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">aldialmsyahh@gmail.com</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/50">
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-300">aldi-alamsyah-a0b7b322b</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 py-8 text-center">
        <p className="text-gray-400">© 2024 Aldi Alamsyah. Built with React & passion for technology.</p>
      </footer>
    </div>
  );
};

export default Portfolio;