"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Hexagon, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Users, 
  Cloud, 
  Brain, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock, 
  Star,
  Menu,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const BriskAutomationLanding: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const services = [
    {
      icon: Target,
      title: "Lead Generation",
      description: "AI-powered systems that identify and qualify prospects automatically, turning cold leads into warm opportunities.",
      features: ["Smart prospect identification", "Automated outreach sequences", "Lead scoring & qualification"]
    },
    {
      icon: Users,
      title: "Recruiting AI",
      description: "Streamline your hiring process with intelligent candidate screening and automated interview scheduling.",
      features: ["Resume parsing & ranking", "Automated screening calls", "Interview coordination"]
    },
    {
      icon: Cloud,
      title: "Cloud Orchestration",
      description: "Optimize your cloud infrastructure with intelligent resource management and cost optimization.",
      features: ["Auto-scaling solutions", "Cost optimization", "Performance monitoring"]
    },
    {
      icon: Brain,
      title: "Custom Models",
      description: "Bespoke AI models tailored to your specific business needs and industry requirements.",
      features: ["Domain-specific training", "Custom data pipelines", "Model fine-tuning"]
    }
  ];

  const stats = [
    { number: "500+", label: "Automations Deployed", icon: Zap },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "2.5M+", label: "Tasks Automated", icon: CheckCircle },
    { number: "24/7", label: "System Uptime", icon: Clock }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Operations, TechFlow",
      content: "Brisk Automations transformed our lead generation process. We're now capturing 3x more qualified leads with half the manual effort.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Talent, InnovateCorp",
      content: "Their recruiting AI cut our time-to-hire by 60%. The quality of candidates has never been better.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "CTO, CloudScale",
      content: "The cloud orchestration solution saved us $50K monthly on infrastructure costs while improving performance.",
      rating: 5
    }
  ];

  const navigationItems = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

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

      {/* Navigation Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-20 border-b border-[#2D1A53]/8 shadow-lg' 
            : 'bg-white/85 backdrop-blur-20 border-b border-[#2D1A53]/8'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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
              <span className="text-xl sm:text-2xl font-bold text-[#2D1A53]">BRISK AUTOMATIONS</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.button
                className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(45, 26, 83, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
                <ArrowRight size={16} />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#2D1A53] hover:bg-[#2D1A53]/10 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden border-t border-[#2D1A53]/8 bg-white/95 backdrop-blur-20"
              >
                <div className="px-4 py-4 space-y-3">
                  {navigationItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center justify-center gap-2 mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
            >
              <motion.div
                animate={floatingAnimation}
                className="w-2 h-2 bg-[#2D1A53] rounded-full"
              />
              <span className="text-xs sm:text-sm font-semibold text-[#2D1A53]">Stop Wasting Time. Start Automating.</span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight max-w-5xl mx-auto"
              style={{
                background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 1px 2px rgba(45, 26, 83, 0.1)',
                filter: 'contrast(1.1) brightness(1.05)',
              }}
            >
              Deploy AI Systems.
              <br />
              Not Just Models.
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-[#8B9299] leading-relaxed max-w-3xl mx-auto px-4"
            >
              From lead gen to model training—AI infrastructure that works while you sleep.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-8"
            >
              <motion.button
                className="w-full sm:w-auto bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(45, 26, 83, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                className="w-full sm:w-auto text-[#2D1A53] px-8 py-4 rounded-full text-lg font-semibold border-2 border-[#2D1A53]/20 hover:border-[#2D1A53]/40 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(45, 26, 83, 0.05)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
                <TrendingUp size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                  className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D1A53] mb-1 sm:mb-2">{stat.number}</h3>
                  <p className="text-sm sm:text-base text-[#8B9299] font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1A53] mb-4 sm:mb-6">
              AI That Actually Works
            </h2>
            <p className="text-lg sm:text-xl text-[#8B9299] max-w-3xl mx-auto leading-relaxed">
              We don't just build models. We deploy complete AI systems that integrate seamlessly with your existing workflows.
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
                  className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2D1A53] mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-[#8B9299] mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D1A53] flex-shrink-0" />
                        <span className="text-sm sm:text-base text-[#8B9299]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1A53] mb-4 sm:mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg sm:text-xl text-[#8B9299] max-w-3xl mx-auto leading-relaxed">
              See how we've transformed businesses across industries with our AI automation solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <div className="flex items-center gap-1 mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#2D1A53] text-[#2D1A53]" />
                    ))}
                  </div>
                  
                  <p className="text-[#8B9299] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-[#2D1A53] text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-[#8B9299] text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl" />
            
            <div 
              className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
              }}
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8"
                animate={floatingAnimation}
              >
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1A53] mb-4 sm:mb-6">
                Ready to Automate?
              </h2>
              
              <p className="text-lg sm:text-xl text-[#8B9299] mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
                Stop wasting time on repetitive tasks. Let's build AI systems that work for your business 24/7.
              </p>
              
              <motion.button
                className="w-full sm:w-auto bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(45, 26, 83, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Automation Journey
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/40 backdrop-blur-xl border-t border-white/20 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <motion.div
                  className="w-8 h-8 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Hexagon size={16} className="text-white" />
                </motion.div>
                <span className="text-lg sm:text-xl font-bold text-[#2D1A53]">BRISK AUTOMATIONS</span>
              </div>
              <p className="text-[#8B9299] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                AI infrastructure that works while you sleep. From lead generation to model training.
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#8B9299]">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Enterprise-grade security</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D1A53] mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li><a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">Lead Generation</a></li>
                <li><a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">Recruiting AI</a></li>
                <li><a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">Cloud Orchestration</a></li>
                <li><a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">Custom Models</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D1A53] mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li><a href="#about" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">About Us</a></li>
                <li><a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">Case Studies</a></li>
                <li><Link to="/privacy" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D1A53] mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li><a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">Documentation</a></li>
                <li><a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">API Reference</a></li>
                <li><a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">Support</a></li>
                <li><a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2D1A53]/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-[#8B9299] text-center sm:text-left">
              © 2025 Brisk Automations. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BriskAutomationLanding;