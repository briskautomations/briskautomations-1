"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Hexagon, 
  ArrowRight, 
  Menu, 
  X, 
  Users, 
  UserCheck, 
  Cloud, 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield,
  CheckCircle,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  FileText,
  Book,
  HelpCircle,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const BriskAutomationLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      icon: Users,
      title: "Lead Generation",
      description: "AI-powered lead identification and qualification systems that convert prospects into customers automatically.",
      features: ["Smart prospect targeting", "Automated outreach", "Lead scoring", "CRM integration"]
    },
    {
      icon: UserCheck,
      title: "Recruiting AI",
      description: "Streamline your hiring process with intelligent candidate screening and automated interview scheduling.",
      features: ["Resume parsing", "Skill assessment", "Interview automation", "Candidate matching"]
    },
    {
      icon: Cloud,
      title: "Cloud Orchestration",
      description: "Optimize your cloud infrastructure with automated scaling, monitoring, and cost management solutions.",
      features: ["Auto-scaling", "Cost optimization", "Performance monitoring", "Multi-cloud support"]
    },
    {
      icon: Brain,
      title: "Custom Models",
      description: "Bespoke AI models tailored to your specific business needs and industry requirements.",
      features: ["Custom training", "Domain expertise", "Model optimization", "Continuous learning"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Sales",
      company: "TechFlow Solutions",
      content: "Brisk Automations transformed our lead generation process. We've seen a 300% increase in qualified leads and our sales team is more productive than ever.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of HR",
      company: "InnovateCorp",
      content: "The recruiting AI solution cut our time-to-hire by 60%. The quality of candidates has improved significantly, and our HR team can focus on strategic initiatives.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Watson",
      role: "CTO",
      company: "CloudScale Inc",
      content: "Their cloud orchestration platform saved us 40% on infrastructure costs while improving performance. The automated scaling is incredibly intelligent.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Automated" },
    { number: "2M+", label: "Tasks Processed Daily" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
        className="relative z-50 bg-white/85 backdrop-blur-20 border-b border-[#2D1A53]/8"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div
                className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
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
                  className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Hexagon size={10} className="text-white sm:w-3 sm:h-3" />
                </motion.div>
              </motion.div>
              <span className="text-lg sm:text-2xl font-bold text-[#2D1A53]">BRISK AUTOMATIONS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium">Services</a>
              <a href="#about" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium">About</a>
              <a href="#testimonials" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium">Testimonials</a>
              <a href="#contact" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium">Contact</a>
              
              <motion.button
                className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#2D1A53]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#2D1A53]/8"
            >
              <div className="px-4 py-4 space-y-4">
                <a href="#services" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium py-2">Services</a>
                <a href="#about" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium py-2">About</a>
                <a href="#testimonials" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium py-2">Testimonials</a>
                <a href="#contact" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium py-2">Contact</a>
                <motion.button
                  className="w-full bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 pt-12 sm:pt-20 pb-16 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center space-y-6 sm:space-y-8"
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#2D1A53]" />
              <span className="text-xs sm:text-sm font-semibold text-[#2D1A53]">AI-Powered Business Automation</span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight px-4"
              style={{
                background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 1px 2px rgba(45, 26, 83, 0.1)',
                filter: 'contrast(1.1) brightness(1.05)',
              }}
            >
              Automate Everything,
              <br />
              <span className="relative">
                Scale Infinitely
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#C89BA1] to-[#2D1A53] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-[#8B9299] leading-relaxed max-w-3xl mx-auto px-4"
            >
              Transform your business with cutting-edge AI automation solutions. From lead generation to cloud orchestration, we build intelligent systems that work 24/7 so you don't have to.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-8 px-4"
            >
              <motion.button
                className="w-full sm:w-auto bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl flex items-center justify-center gap-3 group"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(45, 26, 83, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, #2D1A53 0%, #4A3B7A 50%, #8B6B8F 100%)',
                }}
              >
                Start Automating Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <motion.button
                className="w-full sm:w-auto bg-white/20 backdrop-blur-xl border border-white/30 text-[#2D1A53] px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <div className="text-2xl sm:text-4xl font-bold text-[#2D1A53] mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-[#8B9299] font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-16 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-2xl mb-6 sm:mb-8">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-[#2D1A53]" />
              <span className="text-xs sm:text-sm font-semibold text-[#2D1A53]">Our Services</span>
            </div>
            
            <h2
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 px-4"
              style={{
                background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AI Solutions That
              <br />
              Transform Business
            </h2>
            
            <p className="text-lg sm:text-xl text-[#8B9299] leading-relaxed max-w-3xl mx-auto px-4">
              From intelligent lead generation to sophisticated cloud orchestration, our AI-powered solutions are designed to scale with your ambitions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="relative bg-white/40 backdrop-blur-xl border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/5 to-[#C89BA1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#2D1A53]">{service.title}</h3>
                    </div>
                    
                    <p className="text-[#8B9299] leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D1A53] flex-shrink-0" />
                          <span className="text-[#8B9299] text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <motion.button
                      className="mt-6 sm:mt-8 flex items-center gap-2 text-[#2D1A53] font-semibold group-hover:gap-3 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-16 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-2xl mb-6 sm:mb-8">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#2D1A53]" />
              <span className="text-xs sm:text-sm font-semibold text-[#2D1A53]">Client Success Stories</span>
            </div>
            
            <h2
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 px-4"
              style={{
                background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Trusted by Industry
              <br />
              Leaders Worldwide
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="bg-white/40 backdrop-blur-xl border border-white/30 p-6 sm:p-12 shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <div className="text-center">
                    <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-[#2D1A53] mx-auto mb-4 sm:mb-6" />
                    
                    <p className="text-lg sm:text-xl text-[#2D1A53] leading-relaxed mb-6 sm:mb-8 font-medium">
                      "{testimonials[currentTestimonial].content}"
                    </p>
                    
                    <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
                      <img
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white/50"
                      />
                      <div className="text-left">
                        <div className="font-bold text-[#2D1A53] text-sm sm:text-base">{testimonials[currentTestimonial].name}</div>
                        <div className="text-[#8B9299] text-xs sm:text-sm">{testimonials[currentTestimonial].role}</div>
                        <div className="text-[#8B9299] text-xs sm:text-sm">{testimonials[currentTestimonial].company}</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#2D1A53] text-[#2D1A53]" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 sm:p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-[#2D1A53] hover:bg-white/30 transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      index === currentTestimonial ? 'bg-[#2D1A53]' : 'bg-[#2D1A53]/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 sm:p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-[#2D1A53] hover:bg-white/30 transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 sm:p-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-[#2D1A53] hover:bg-white/30 transition-all duration-200"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-2xl sm:rounded-3xl blur-xl" />
            
            <div 
              className="relative bg-white/40 backdrop-blur-xl border border-white/30 rounded-2xl sm:rounded-3xl p-8 sm:p-16 text-center shadow-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/5 to-[#C89BA1]/5" />
              
              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-xl border border-white/40 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg mb-6 sm:mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#2D1A53]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#2D1A53]">Ready to Scale?</span>
                </motion.div>
                
                <h2
                  className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 px-4"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Start Your Automation
                  <br />
                  Journey Today
                </h2>
                
                <p className="text-lg sm:text-xl text-[#8B9299] leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                  Join hundreds of forward-thinking companies that have already transformed their operations with our AI-powered automation solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
                  <motion.button
                    className="w-full sm:w-auto bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl flex items-center justify-center gap-3 group"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(45, 26, 83, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                  
                  <motion.button
                    className="w-full sm:w-auto bg-white/30 backdrop-blur-xl border border-white/40 text-[#2D1A53] px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Schedule Consultation
                  </motion.button>
                </div>
                
                <div className="flex items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-12 text-[#8B9299] text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Enterprise Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>99.9% Uptime</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white/20 backdrop-blur-xl border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <motion.div
                  className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
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
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Hexagon size={10} className="text-white sm:w-3 sm:h-3" />
                  </motion.div>
                </motion.div>
                <span className="text-lg sm:text-xl font-bold text-[#2D1A53]">BRISK AUTOMATIONS</span>
              </div>
              <p className="text-[#8B9299] leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                © 2025 Brisk Automations. All rights reserved.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[#2D1A53] font-bold mb-4 sm:mb-6 text-sm sm:text-base">Services</h3>
              <ul className="space-y-2 sm:space-y-3 text-[#8B9299] text-sm sm:text-base">
                <li><a href="#" className="hover:text-[#2D1A53] transition-colors duration-200">Lead Generation</a></li>
                <li><a href="#" className="hover:text-[#2D1A53] transition-colors duration-200">Recruiting AI</a></li>
                <li><a href="#" className="hover:text-[#2D1A53] transition-colors duration-200">Cloud Orchestration</a></li>
                <li><a href="#" className="hover:text-[#2D1A53] transition-colors duration-200">Custom Models</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[#2D1A53] font-bold mb-4 sm:mb-6 text-sm sm:text-base">Company</h3>
              <ul className="space-y-2 sm:space-y-3 text-[#8B9299] text-sm sm:text-base">
                <li><a href="#" className="hover:text-[#2D1A53] transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-[#2D1A53] transition-colors duration-200">Case Studies</a></li>
                <li><Link to="/privacy" className="hover:text-[#2D1A53] transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-[#2D1A53] transition-colors duration-200">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Resources & Connect */}
            <div>
              <h3 className="text-[#2D1A53] font-bold mb-4 sm:mb-6 text-sm sm:text-base">Resources</h3>
              <ul className="space-y-2 sm:space-y-3 text-[#8B9299] mb-6 sm:mb-8 text-sm sm:text-base">
                <li><a href="#" className="hover:text-[#2D1A53] transition-colors duration-200 flex items-center gap-2"><Book className="w-3 h-3 sm:w-4 sm:h-4" />Documentation</a></li>
                <li><a href="#" className="hover:text-[#2D1A53] transition-colors duration-200 flex items-center gap-2"><FileText className="w-3 h-3 sm:w-4 sm:h-4" />API Reference</a></li>
                <li><a href="#" className="hover:text-[#2D1A53] transition-colors duration-200 flex items-center gap-2"><HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />Support</a></li>
                <li><a href="#" className="hover:text-[#2D1A53] transition-colors duration-200 flex items-center gap-2"><MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />Blog</a></li>
              </ul>

              <h3 className="text-[#2D1A53] font-bold mb-4 text-sm sm:text-base">Connect</h3>
              <div className="flex gap-3 sm:gap-4">
                <a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200">
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BriskAutomationLanding;