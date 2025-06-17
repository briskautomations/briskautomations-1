"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Hexagon, Phone, Calendar, CheckCircle, Star, Users, PhoneCall, ArrowRight, Play, Target, Zap, BarChart3, Settings, Clock, Shield, Building, ShoppingCart, Home, Heart, Palette, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const CalebBPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const industries = [
    { name: "Professional Services", icon: Building, image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "E-commerce Stores", icon: ShoppingCart, image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Real Estate", icon: Home, image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Healthcare Practices", icon: Heart, image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Home Services", icon: Settings, image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Digital Agencies", icon: Palette, image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ];

  const testimonials = [
    {
      quote: "Caleb increased our appointment booking rate by 340% in just 2 months. Our sales team can now focus on closing deals instead of chasing leads.",
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "We went from 20 sales calls per week to 200+ qualified appointments. Caleb handles the heavy lifting while we focus on high-value prospects.",
      name: "Marcus Rodriguez",
      company: "Elite Real Estate Group",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The ROI is incredible. Caleb pays for himself within the first week by booking just 3 qualified appointments. Game changer for our agency.",
      name: "Jennifer Walsh",
      company: "Digital Marketing Pro",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const faqs = [
    {
      question: "How quickly can Caleb start making calls for my business?",
      answer: "Caleb can be set up and making calls within 24-48 hours. We'll configure his scripts, integrate with your CRM, and train him on your specific sales process during the setup phase."
    },
    {
      question: "What happens if a prospect wants to speak to a human?",
      answer: "Caleb seamlessly transfers qualified prospects to your human sales team. He can schedule immediate callbacks or transfer calls in real-time based on your preferences."
    },
    {
      question: "Can Caleb integrate with my existing CRM and tools?",
      answer: "Yes! Caleb integrates with all major CRMs including Salesforce, HubSpot, Pipedrive, and 50+ other platforms. All call data and appointments sync automatically."
    },
    {
      question: "How does Caleb handle objections and complex questions?",
      answer: "Caleb is trained on advanced objection handling and can navigate complex sales conversations. For highly technical questions, he intelligently escalates to your human team while maintaining the relationship."
    },
    {
      question: "What's the difference between Caleb and other AI calling solutions?",
      answer: "Caleb is specifically designed for sales conversations with advanced natural language processing, emotional intelligence, and industry-specific training. He sounds human and builds genuine rapport with prospects."
    },
    {
      question: "Can I customize Caleb's scripts and conversation flow?",
      answer: "Absolutely! Caleb's scripts, personality, and conversation flows are fully customizable to match your brand voice and sales methodology. We provide ongoing optimization based on performance data."
    }
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
        className="relative z-50 bg-white/85 backdrop-blur-20 border-b border-[#2D1A53]/8"
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-3">
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
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-20 py-20"
          >
            {/* AI Specialist Intro Section */}
            <motion.section variants={staggerItem} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-6 py-3 shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="w-4 h-4 text-[#2D1A53]" />
                  <span className="text-sm font-semibold text-[#2D1A53]">AI Sales Call & Booking Specialist</span>
                </motion.div>

                <div className="space-y-6">
                  <h1
                    className="text-4xl lg:text-6xl font-extrabold leading-tight"
                    style={{
                      background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 1px 2px rgba(45, 26, 83, 0.1)',
                      filter: 'contrast(1.1) brightness(1.05)',
                    }}
                  >
                    Meet Caleb B.,<br />
                    your AI Sales Specialist
                  </h1>

                  <div className="space-y-4">
                    <p className="text-xl text-[#8B9299] leading-relaxed">
                      As soon as a lead enters your pipeline,<br />
                      <span className="font-semibold text-[#2D1A53]">Caleb handles the sales process by:</span>
                    </p>

                    <div className="space-y-3">
                      {[
                        "Making personalized outbound calls within minutes of lead capture",
                        "Qualifying prospects with intelligent conversation and objection handling",
                        "Booking qualified appointments directly into your calendar automatically"
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <CheckCircle className="w-6 h-6 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                          <span className="text-[#2D1A53] font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button
                      className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get a Call from Caleb
                      <Phone className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      className="bg-white/40 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/60 transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className="w-5 h-5" />
                      Watch Demo
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className="relative w-full max-w-md mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/20 to-[#C89BA1]/20 rounded-3xl blur-2xl" />
                  
                  <div 
                    className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                      boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                    }}
                  >
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center shadow-2xl mb-6">
                      <PhoneCall size={80} className="text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-[#2D1A53] mb-2">Caleb B.</h3>
                      <p className="text-[#8B9299]">AI Sales Specialist</p>
                      <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-[#8B9299]">Available 24/7</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* How Caleb Works Section */}
            <motion.section variants={staggerItem} className="space-y-12">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-5xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  How Caleb Works
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  A simple 5-step process that turns leads into booked appointments automatically
                </p>
              </div>

              <div className="grid md:grid-cols-5 gap-6">
                {[
                  {
                    number: "1",
                    icon: Target,
                    title: "Lead Detected",
                    description: "New lead enters your CRM or fills out a form on your website"
                  },
                  {
                    number: "2",
                    icon: Zap,
                    title: "Caleb Responds",
                    description: "In under 60 seconds, Caleb initiates contact via phone call"
                  },
                  {
                    number: "3",
                    icon: PhoneCall,
                    title: "Qualification Call",
                    description: "Caleb conducts natural conversation to qualify the prospect"
                  },
                  {
                    number: "4",
                    icon: Calendar,
                    title: "Appointment Booked",
                    description: "Qualified prospects get scheduled directly into your calendar"
                  },
                  {
                    number: "5",
                    icon: BarChart3,
                    title: "Data Synced",
                    description: "Caleb updates your CRM with call notes and next steps"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#C89BA1]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    
                    <div 
                      className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#2D1A53] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                        {step.number}
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-lg flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-[#2D1A53] mb-2">{step.title}</h3>
                      <p className="text-[#8B9299] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Experience Caleb in Action Section */}
            <motion.section variants={staggerItem} className="space-y-12">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-5xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Experience Caleb in Action
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  See how Caleb can boost your sales for one of the sample businesses below
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    className={`relative group cursor-pointer ${selectedIndustry === industry.name ? 'ring-2 ring-[#8B5CF6]' : ''}`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedIndustry(industry.name)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    
                    <div 
                      className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${industry.image})` }}>
                        <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                          <industry.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-[#2D1A53] text-center">{industry.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl" />
                
                <div 
                  className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#2D1A53] mb-2">First Name*</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white/40 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all duration-300"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2D1A53] mb-2">Last Name*</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white/40 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all duration-300"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#2D1A53] mb-2">Phone Number*</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-white/40 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all duration-300"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2D1A53] mb-2">Email Address*</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-white/40 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="recaptcha" className="w-5 h-5 text-[#8B5CF6]" />
                      <label htmlFor="recaptcha" className="text-sm text-[#8B9299]">I'm not a robot</label>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get a Call from Caleb
                      <Phone className="w-5 h-5" />
                    </motion.button>

                    <p className="text-xs text-[#8B9299] text-center">
                      By submitting this form, you agree to receive a call from our AI Assistant.
                    </p>
                  </form>
                </div>
              </div>
            </motion.section>

            {/* Caleb is Built for Performance Section */}
            <motion.section variants={staggerItem} className="space-y-12">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-5xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Caleb is Built for Performance
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Advanced AI capabilities designed to maximize your sales results
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Zap,
                    title: "Instant Response",
                    description: "Contacts leads within 60 seconds of capture for maximum conversion rates"
                  },
                  {
                    icon: Target,
                    title: "Smart Qualification",
                    description: "Uses advanced AI to identify and prioritize high-value prospects"
                  },
                  {
                    icon: Calendar,
                    title: "Automated Booking",
                    description: "Schedules appointments directly into your calendar without human intervention"
                  },
                  {
                    icon: ArrowRight,
                    title: "Follow-Up & Nurturing",
                    description: "Maintains relationships with prospects through intelligent follow-up sequences"
                  },
                  {
                    icon: Settings,
                    title: "CRM & Platform Integration",
                    description: "Seamlessly connects with 50+ CRMs and business tools"
                  },
                  {
                    icon: Clock,
                    title: "24/7 Coverage",
                    description: "Never misses a lead with round-the-clock availability and instant response"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    
                    <div 
                      className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#2D1A53] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#2D1A53] mb-2">{feature.title}</h3>
                      <p className="text-[#8B9299] leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Client Testimonials Section */}
            <motion.section variants={staggerItem} className="space-y-12">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-5xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  What Our Clients Say about Caleb
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Real results from businesses using Caleb to scale their sales
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    
                    <div 
                      className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#8B5CF6] text-[#8B5CF6]" />
                        ))}
                      </div>
                      
                      <blockquote className="text-[#2D1A53] mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-[#2D1A53]">{testimonial.name}</div>
                          <div className="text-sm text-[#8B9299]">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Pricing Section */}
            <motion.section variants={staggerItem} className="space-y-12">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-5xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Pay as You Grow with Caleb
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Transparent pricing that scales with your success
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    icon: "🔧",
                    name: "Setup",
                    price: "$497",
                    period: "one-time",
                    description: "Complete configuration and training",
                    features: [
                      "AI voice training and customization",
                      "CRM integration and setup",
                      "Custom script development",
                      "Testing and optimization",
                      "Team training session"
                    ],
                    popular: false
                  },
                  {
                    icon: "📊",
                    name: "Monthly Platform",
                    price: "$297",
                    period: "/month",
                    description: "Access and ongoing support",
                    features: [
                      "Platform access and maintenance",
                      "Regular AI model updates",
                      "Performance monitoring",
                      "Technical support",
                      "Monthly optimization review"
                    ],
                    popular: false
                  },
                  {
                    icon: "💬",
                    name: "Per Call",
                    price: "$2.50",
                    period: "/call",
                    description: "Pay only for successful connections",
                    features: [
                      "Only charged for answered calls",
                      "No minimum call requirements",
                      "Detailed call analytics",
                      "Automatic CRM updates",
                      "Performance reporting"
                    ],
                    popular: true
                  }
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    className={`relative group ${plan.popular ? 'scale-105' : ''}`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    
                    <div 
                      className={`relative bg-white/60 backdrop-blur-xl border rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 ${
                        plan.popular ? 'border-[#8B5CF6]/30' : 'border-white/40'
                      }`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <div className="text-center mb-8">
                        <div className="text-4xl mb-4">{plan.icon}</div>
                        <h3 className="text-2xl font-bold text-[#2D1A53] mb-2">{plan.name}</h3>
                        <p className="text-[#8B9299] mb-4">{plan.description}</p>
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-[#2D1A53]">{plan.price}</span>
                          <span className="text-[#8B9299] ml-1">{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                            <span className="text-[#8B9299]">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <motion.button
                        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white shadow-lg hover:shadow-xl'
                            : 'bg-white/40 text-[#2D1A53] border border-[#2D1A53]/20 hover:bg-white/60'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section variants={staggerItem} className="space-y-12">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-5xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Frequently Asked Questions about Caleb
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Everything you need to know about working with Caleb
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/5 to-[#C89BA1]/5 rounded-2xl blur-xl" />
                    
                    <div 
                      className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <button
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/20 transition-all duration-300"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <h3 className="text-lg font-semibold text-[#2D1A53] pr-4">{faq.question}</h3>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                        )}
                      </button>
                      
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-[#8B9299] leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Final CTA Section */}
            <motion.section variants={staggerItem} className="text-center space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl" />
                
                <div 
                  className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <h2
                    className="text-4xl lg:text-5xl font-bold mb-6"
                    style={{
                      background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Ready to Scale Your Sales with Caleb?
                  </h2>
                  
                  <p className="text-xl text-[#8B9299] mb-8 max-w-2xl mx-auto">
                    Join hundreds of businesses using Caleb to book more appointments, qualify better leads, and close more deals automatically.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get a Call from Caleb Today
                      <Phone className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      className="bg-white/40 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/60 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Schedule a Demo
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CalebBPage;