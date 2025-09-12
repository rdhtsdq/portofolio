"use client"
import {Inter} from 'next/font/google'
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Award,
  Calendar,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const inter = Inter({ subsets: ['latin'] })

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const skills = {
    languages: ['JavaScript', 'PHP', 'Dart', 'Python'],
    frameworks: ['Laravel', 'Node.js', 'React.js', 'Express.js', 'Flutter'],
    databases: ['MySQL'],
    concepts: ['REST API', 'Web Development', 'Linux Server', 'SDLC']
  };

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'PT Agung Kemuningwijaya',
      period: 'Nov 2023 - Present',
      achievements: [
        'Developed responsive web application for logistics management using PHP, Laravel, Node.js, React, and MySQL',
        'Optimized database queries, improving API response times by 40%',
        'Collaborated with product managers and UI/UX designers',
        'Led debugging efforts, reducing reported bugs by 25%'
      ]
    },
    {
      title: 'Android Developer',
      company: 'PT Gestalt Center Indonesia',
      period: 'Sep 2022 - Aug 2023',
      achievements: [
        'Built cross-platform mobile app using Flutter with Node.js backend',
        'Served over 1000 active users',
        'Owned full SDLC from design to deployment',
        'Delivered high-performance, secure, and stable application'
      ]
    }
  ];

  const projects = [
    {
      name: 'CAMS',
      description: 'Internal ERP System for business management',
      tech: ['Laravel', 'MySQL', 'React'],
      type: 'Web Development'
    },
    {
      name: 'Pinmyloc',
      description: 'Mobile attendance app with location tracking',
      tech: ['Flutter', 'Node.js'],
      type: 'Mobile Development'
    },
    {
      name: 'Pustakaan.ID',
      description: 'Mobile Library App with modern design',
      tech: ['Flutter', 'UI/UX Design'],
      type: 'Mobile Development'
    },
    {
      name: 'MyLib',
      description: 'Static Mobile library application',
      tech: ['Flutter'],
      type: 'Mobile Development'
    }
  ];

  const certifications = [
    {
      name: 'Basic AI, Machine Learning and Python',
      issuer: 'Dicoding',
      date: 'Oct 2024'
    },
    {
      name: 'Javascript',
      issuer: 'Dicoding', 
      date: 'Sep 2023'
    },
    {
      name: 'Flutter',
      issuer: 'Dicoding',
      date: 'Sep 2022'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="{} min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Raditya Syidqi
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/20 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y: yPos }} className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hello! I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                Raditya Syidqi
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Results-driven Full-stack Software Engineer with over 2 years of experience delivering scalable web and mobile applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-white/50" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-400 mx-auto"></motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm an enthusiastic developer with a profound passion for technology. 
                With over 2 years of experience, I specialize in building scalable web and mobile applications 
                that solve complex business challenges.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I focus on creating clean, high-performance code and have proven ability to optimize systems, 
                boost API response times by up to 40%, and reduce bug reports by 25%.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={20} className="text-cyan-400" />
                  Bandung, Indonesia
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar size={20} className="text-cyan-400" />
                  2+ Years Experience
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-6"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-cyan-400" size={24} />
                  <h3 className="text-xl font-semibold text-white">Web Development</h3>
                </div>
                <p className="text-gray-300">
                  Proficient in developing responsive web applications using Laravel, React, and Node.js 
                  with focus on performance and user experience.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="text-cyan-400" size={24} />
                  <h3 className="text-xl font-semibold text-white">Mobile Development</h3>
                </div>
                <p className="text-gray-300">
                  Expert in Flutter development, creating cross-platform apps with intuitive 
                  and captivating user interfaces for Android platforms.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="text-cyan-400" size={24} />
                  <h3 className="text-xl font-semibold text-white">Backend Development</h3>
                </div>
                <p className="text-gray-300">
                  Mastery of Node.js and PHP to build reliable backend systems with 
                  SQL databases and frameworks like Express.js and Laravel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-400 mx-auto"></motion.div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-cyan-400 font-medium">{exp.company}</h4>
                  </div>
                  <div className="text-gray-300 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div> */}

          {/* Education */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Education</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">Bachelor of Technology - Computer Science</h4>
                <p className="text-cyan-400 font-medium mb-2">Bandung University of Technology</p>
                <p className="text-gray-300">2024 - Present</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">Software Engineering</h4>
                <p className="text-cyan-400 font-medium mb-2">Bandung Vocational High School 11</p>
                <p className="text-gray-300">2019 - 2022</p>
              </div>
            </div>
          </motion.div> */}
        {/* </div>
      </section> */}

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & Technologies
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-400 mx-auto"></motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-cyan-400" size={24} />
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>
              <div className="space-y-3">
                {skills.languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{lang}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-cyan-400" size={24} />
                <h3 className="text-xl font-bold text-white">Frameworks</h3>
              </div>
              <div className="space-y-3">
                {skills.frameworks.map((framework, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{framework}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-cyan-400" size={24} />
                <h3 className="text-xl font-bold text-white">Databases</h3>
              </div>
              <div className="space-y-3">
                {skills.databases.map((db, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{db}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Server className="text-cyan-400" size={24} />
                <h3 className="text-xl font-bold text-white">Concepts & Tools</h3>
              </div>
              <div className="space-y-3">
                {skills.concepts.map((concept, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{concept}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Award className="text-cyan-400 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                      <p className="text-cyan-400 font-medium">{cert.issuer}</p>
                      <p className="text-gray-300 text-sm">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-400 mx-auto"></motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-400 mx-auto mb-6"></motion.div>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to work together!
            </motion.p>
          </motion.div>

          {/* Centering Container */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a 
                    href="mailto:rsidqir01@gmail.com" 
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    rsidqir01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <a 
                    href="tel:+6289617435097" 
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    +62 896 1743 5097
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Bandung, Indonesia</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <motion.a
                  href="https://linkedin.com/in/raditya-syidqi-rusnandar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="text-white" size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/rdhtsdq"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="text-white" size={20} />
                </motion.a>
                <motion.a
                  href="mailto:rsidqir01@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-cyan-600 hover:bg-cyan-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Mail className="text-white" size={20} />
                </motion.a>
              </div>
            </motion.div>
            
            {/* The contact form is still here if you want to use it later.
            To re-enable it, you would change the parent div to something like:
            <div className="grid md:grid-cols-2 gap-12 items-start">
            ...and uncomment the block below.
            */}

            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div> 
            */}
          </div>

          {/* CV Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-sky-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Raditya Syidqi Rusnandar. Built with Next.js, React, and Framer Motion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;