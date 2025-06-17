"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Hexagon, 
  Menu, 
  X, 
  ArrowRight, 
  Zap, 
  Users, 
  Cloud, 
  Brain,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Target,
  Sparkles,
  ChevronRight,
  Play,
  Award,
  BarChart3,
  Lightbulb,
  Rocket,
  Globe,
  Database,
  Cpu,
  Network,
  Bot,
  Code,
  Settings,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react";
import { Link } from "react-router-dom";

const BriskAutomationLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen bg-[#F0F0F5] relative overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='6' seed='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, rgba(212, 160, 167, 0.06) 30%, rgba(45, 26, 83, 0.04) 70%, rgba(45, 26, 83, 0.08) 100%)',
        }}
      />

      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 
            ? 'bg-white/95 backdrop-blur-20 border-b border-[#2D1A53]/8 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="relative w-10 h-10 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 border-2 border-[#2D1A53]/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div
                  className="w-6 h-6 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Hexagon size={12} className="text-white" />
                </motion.div>
              </motion.div>
              <span className="text-2xl font-bold text-[#2D1A53]">BRISK AUTOMATIONS</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {['Services', 'About', 'Case Studies', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              
              <motion.button
                className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
                <ArrowRight size={16} />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#2D1A53] hover:bg-[#2D1A53]/10 rounded-lg transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden border-t border-[#2D1A53]/10 bg-white/95 backdrop-blur-20"
              >
                <div className="py-4 space-y-2">
                  {['Services', 'About', 'Case Studies', 'Contact'].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="block px-4 py-3 text-[#8B9299] hover:text-[#2D1A53] hover:bg-[#2D1A53]/5 transition-colors duration-200 font-medium rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <motion.button
                    className="w-full mt-4 bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center justify-center gap-2"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Let's Talk
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-6 py-3 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-[#2D1A53]" />
              <span className="text-sm font-semibold text-[#2D1A53]">AI-Powered Business Automation</span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-6xl lg:text-7xl font-extrabold leading-tight max-w-5xl mx-auto"
              style={{
                background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 1px 2px rgba(45, 26, 83, 0.1)',
                filter: 'contrast(1.1) brightness(1.05)',
              }}
            >
              Transform Your Business with{' '}
              <motion.span
                className="relative inline-block"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{
                  background: 'linear-gradient(90deg, #2D1A53, #C89BA1, #2D1A53)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Intelligent Automation
              </motion.span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-xl text-[#8B9299] leading-relaxed max-w-3xl mx-auto"
            >
              Harness the power of AI to streamline operations, boost productivity, and unlock unprecedented growth. 
              From lead generation to cloud orchestration, we build custom automation solutions that scale with your ambitions.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <motion.button
                className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: '0 10px 40px rgba(45, 26, 83, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                }}
              >
                <Rocket className="w-5 h-5" />
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="bg-white/80 backdrop-blur-xl text-[#2D1A53] px-8 py-4 rounded-full font-semibold text-lg border border-white/40 hover:bg-white/90 transition-all duration-300 flex items-center gap-3 shadow-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: '0 8px 32px rgba(45, 26, 83, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-[#C89BA1]/20 to-[#D4A0A7]/20 rounded-full blur-xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute top-1/3 right-16 w-32 h-32 bg-gradient-to-br from-[#2D1A53]/10 to-[#4A3B7A]/10 rounded-full blur-2xl"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 }
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-[#8B6B8F]/15 to-[#C89BA1]/15 rounded-full blur-xl"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 }
          }}
        />
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "500+", label: "Processes Automated", icon: Bot },
              { number: "98%", label: "Efficiency Increase", icon: TrendingUp },
              { number: "24/7", label: "System Monitoring", icon: Shield },
              { number: "50+", label: "Happy Clients", icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#2D1A53] mb-2">{stat.number}</div>
                  <div className="text-[#8B9299] font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-6 py-3 shadow-2xl mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Settings className="w-4 h-4 text-[#2D1A53]" />
              <span className="text-sm font-semibold text-[#2D1A53]">Our Services</span>
            </motion.div>

            <h2
              className="text-5xl font-extrabold mb-6"
              style={{
                background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Comprehensive Automation Solutions
            </h2>
            <p className="text-xl text-[#8B9299] leading-relaxed max-w-3xl mx-auto">
              From intelligent lead generation to sophisticated cloud orchestration, 
              we deliver end-to-end automation that transforms how you do business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Lead Generation & Customer Acquisition",
                description: "AI-powered systems that identify, qualify, and nurture prospects automatically, turning cold leads into warm opportunities while you focus on closing deals.",
                features: ["Smart prospect identification", "Automated outreach sequences", "Lead scoring & qualification", "CRM integration"],
                gradient: "from-[#2D1A53] to-[#4A3B7A]"
              },
              {
                icon: Brain,
                title: "Recruiting Automation & AI Screening",
                description: "Streamline your hiring process with intelligent candidate screening, automated interview scheduling, and AI-powered resume analysis.",
                features: ["Resume parsing & analysis", "Automated candidate screening", "Interview scheduling", "Skills assessment automation"],
                gradient: "from-[#8B6B8F] to-[#C89BA1]"
              },
              {
                icon: Cloud,
                title: "Cloud Infrastructure Orchestration",
                description: "Optimize your cloud resources with intelligent scaling, cost management, and automated deployment pipelines that adapt to your business needs.",
                features: ["Auto-scaling infrastructure", "Cost optimization", "Deployment automation", "Performance monitoring"],
                gradient: "from-[#C89BA1] to-[#D4A0A7]"
              },
              {
                icon: Code,
                title: "Custom AI Model Development",
                description: "Bespoke AI solutions tailored to your specific business challenges, from predictive analytics to natural language processing.",
                features: ["Custom model training", "API development", "Model deployment", "Performance optimization"],
                gradient: "from-[#4A3B7A] to-[#2D1A53]"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ y: -8 }}
              >
                <div 
                  className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 h-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#2D1A53] mb-4 group-hover:text-[#4A3B7A] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#8B9299] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-[#8B9299]">
                        <CheckCircle className="w-5 h-5 text-[#2D1A53] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className="flex items-center gap-2 text-[#2D1A53] font-semibold group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-6 py-3 shadow-2xl mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Target className="w-4 h-4 text-[#2D1A53]" />
              <span className="text-sm font-semibold text-[#2D1A53]">Our Process</span>
            </motion.div>

            <h2
              className="text-5xl font-extrabold mb-6"
              style={{
                background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              How We Transform Your Business
            </h2>
            <p className="text-xl text-[#8B9299] leading-relaxed max-w-3xl mx-auto">
              Our proven methodology ensures seamless integration and maximum ROI from your automation investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We dive deep into your current processes, identifying bottlenecks and opportunities for automation that will deliver the highest impact.",
                icon: Lightbulb,
                color: "from-[#2D1A53] to-[#4A3B7A]"
              },
              {
                step: "02",
                title: "Custom Solution Design",
                description: "Our experts craft tailored automation strategies that align perfectly with your business goals and existing infrastructure.",
                icon: Settings,
                color: "from-[#8B6B8F] to-[#C89BA1]"
              },
              {
                step: "03",
                title: "Implementation & Optimization",
                description: "We deploy, test, and continuously optimize your automation systems to ensure peak performance and scalability.",
                icon: Rocket,
                color: "from-[#C89BA1] to-[#D4A0A7]"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div 
                  className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 text-center h-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2D1A53] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#2D1A53] mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#8B9299] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#2D1A53]/30 to-[#C89BA1]/30 transform -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-6 py-3 shadow-2xl mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-[#2D1A53]" />
              <span className="text-sm font-semibold text-[#2D1A53]">Client Success</span>
            </motion.div>

            <h2
              className="text-5xl font-extrabold mb-6"
              style={{
                background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              What Our Clients Say
            </h2>
            <p className="text-xl text-[#8B9299] leading-relaxed max-w-3xl mx-auto">
              Don't just take our word for it. Here's how we've transformed businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Brisk Automations transformed our lead generation process. We're now capturing 300% more qualified leads with half the manual effort.",
                author: "Sarah Chen",
                role: "VP of Sales",
                company: "TechFlow Solutions",
                rating: 5,
                avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
              },
              {
                quote: "Their recruiting automation cut our time-to-hire by 60% while improving candidate quality. It's been a game-changer for our HR team.",
                author: "Michael Rodriguez",
                role: "Head of Talent",
                company: "InnovateCorp",
                rating: 5,
                avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
              },
              {
                quote: "The cloud orchestration solution saved us $50K annually while improving system reliability. Exceptional ROI and support.",
                author: "Emily Watson",
                role: "CTO",
                company: "DataDrive Inc",
                rating: 5,
                avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ y: -5 }}
              >
                <div 
                  className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 h-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#2D1A53] text-[#2D1A53]" />
                    ))}
                  </div>
                  
                  <blockquote className="text-[#8B9299] leading-relaxed mb-6 text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-[#2D1A53]">{testimonial.author}</div>
                      <div className="text-sm text-[#8B9299]">{testimonial.role}</div>
                      <div className="text-sm text-[#8B9299]">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl" />
            
            <div 
              className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                boxShadow: '0 8px 32px rgba(45, 26, 83, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
              }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-6 py-3 shadow-2xl mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-4 h-4 text-[#2D1A53]" />
                <span className="text-sm font-semibold text-[#2D1A53]">Ready to Transform?</span>
              </motion.div>

              <h2
                className="text-5xl font-extrabold mb-6"
                style={{
                  background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Let's Automate Your Success
              </h2>
              
              <p className="text-xl text-[#8B9299] leading-relaxed mb-8 max-w-2xl mx-auto">
                Ready to unlock the full potential of AI automation? Let's discuss how we can transform your business operations and drive unprecedented growth.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: '0 10px 40px rgba(45, 26, 83, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                  }}
                >
                  <MessageSquare className="w-5 h-5" />
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  className="bg-white/80 backdrop-blur-xl text-[#2D1A53] px-8 py-4 rounded-full font-semibold text-lg border border-white/40 hover:bg-white/90 transition-all duration-300 flex items-center gap-3 shadow-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 lg:px-8 border-t border-[#2D1A53]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <motion.div
                  className="relative w-10 h-10 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="absolute inset-0 border-2 border-[#2D1A53]/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Hexagon size={12} className="text-white" />
                  </motion.div>
                </motion.div>
                <span className="text-xl font-bold text-[#2D1A53]">BRISK AUTOMATIONS</span>
              </div>
              <p className="text-[#8B9299] leading-relaxed">
                Transforming businesses through intelligent automation and AI-powered solutions.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Github, href: "#" },
                  { icon: Youtube, href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-[#2D1A53]/10 hover:bg-[#2D1A53] text-[#2D1A53] hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-[#2D1A53] mb-4">Services</h3>
              <ul className="space-y-3">
                {['Lead Generation', 'Recruiting AI', 'Cloud Orchestration', 'Custom Models'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-[#2D1A53] mb-4">Company</h3>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', href: '#about' },
                  { name: 'Case Studies', href: '#case-studies' },
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' }
                ].map((item) => (
                  <li key={item.name}>
                    {item.href.startsWith('/') ? (
                      <Link to={item.href} className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200">
                        {item.name}
                      </Link>
                    ) : (
                      <a href={item.href} className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200">
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-[#2D1A53] mb-4">Resources</h3>
              <ul className="space-y-3">
                {['Documentation', 'API Reference', 'Support', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold text-[#2D1A53] mb-4">Connect</h3>
              <ul className="space-y-3">
                {[
                  { icon: Linkedin, text: 'LinkedIn' },
                  { icon: Twitter, text: 'Twitter' },
                  { icon: Github, text: 'GitHub' },
                  { icon: Youtube, text: 'YouTube' }
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="flex items-center gap-2 text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200">
                      <item.icon size={16} />
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2D1A53]/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[#8B9299] text-sm">
                © 2025 Brisk Automations. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link to="/privacy" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BriskAutomationLanding;