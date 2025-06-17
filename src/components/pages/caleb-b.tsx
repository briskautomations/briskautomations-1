"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Hexagon, Phone, Calendar, CheckCircle, Star, Users, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const CalebBPage: React.FC = () => {
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
            {/* Hero Section */}
            <motion.section variants={staggerItem} className="text-center space-y-8">
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
                <motion.div
                  className="w-32 h-32 mx-auto bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <PhoneCall size={48} className="text-white" />
                </motion.div>

                <h1
                  className="text-5xl lg:text-7xl font-extrabold leading-tight"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 1px 2px rgba(45, 26, 83, 0.1)',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                >
                  Meet Caleb B.
                </h1>

                <p className="text-xl lg:text-2xl text-[#8B9299] leading-relaxed max-w-3xl mx-auto">
                  Your AI-powered sales specialist who books appointments, qualifies leads, and closes deals while you focus on what matters most.
                </p>
              </div>
            </motion.section>

            {/* What Caleb Does Section */}
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
                  What Caleb Does
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Caleb handles your sales calls and appointment booking with AI precision and human-like conversation
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Phone,
                    title: "Outbound Sales Calls",
                    description: "Make hundreds of personalized sales calls daily with natural conversation"
                  },
                  {
                    icon: Calendar,
                    title: "Appointment Booking",
                    description: "Schedule meetings directly into your calendar with qualified prospects"
                  },
                  {
                    icon: Users,
                    title: "Lead Qualification",
                    description: "Identify and qualify high-value prospects before they reach your team"
                  },
                  {
                    icon: CheckCircle,
                    title: "Follow-up Automation",
                    description: "Never miss a follow-up with automated, personalized outreach sequences"
                  },
                  {
                    icon: Star,
                    title: "CRM Integration",
                    description: "Seamlessly sync all call data and appointments with your existing CRM"
                  },
                  {
                    icon: PhoneCall,
                    title: "Call Analytics",
                    description: "Track call performance, conversion rates, and optimize your sales process"
                  }
                ].map((capability, index) => (
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
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <capability.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#2D1A53] mb-2">{capability.title}</h3>
                      <p className="text-[#8B9299] leading-relaxed">{capability.description}</p>
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
                  Pricing Plans
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Choose the perfect plan for your sales and appointment booking needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    name: "Starter",
                    price: "$497",
                    period: "/month",
                    description: "Perfect for small sales teams",
                    features: [
                      "Up to 500 calls/month",
                      "Basic appointment booking",
                      "CRM integration (3 platforms)",
                      "Standard call scripts",
                      "Basic analytics dashboard",
                      "Email support"
                    ],
                    popular: false
                  },
                  {
                    name: "Professional",
                    price: "$997",
                    period: "/month",
                    description: "Ideal for growing sales teams",
                    features: [
                      "Up to 2,000 calls/month",
                      "Advanced booking automation",
                      "Custom CRM integrations",
                      "AI-powered script optimization",
                      "Advanced analytics & reporting",
                      "Lead scoring & qualification",
                      "Priority support"
                    ],
                    popular: true
                  },
                  {
                    name: "Enterprise",
                    price: "$1,997",
                    period: "/month",
                    description: "For large sales organizations",
                    features: [
                      "Unlimited calls",
                      "Multi-team management",
                      "Custom AI voice training",
                      "Advanced integrations (Salesforce, HubSpot, etc.)",
                      "Dedicated account manager",
                      "24/7 priority support",
                      "Custom SLA agreements",
                      "White-label options"
                    ],
                    popular: false
                  }
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    className={`relative group ${plan.popular ? 'scale-105' : ''}`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    
                    <div 
                      className={`relative bg-white/60 backdrop-blur-xl border rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 ${
                        plan.popular ? 'border-[#2D1A53]/30' : 'border-white/40'
                      }`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <div className="text-center mb-8">
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
                            <CheckCircle className="w-5 h-5 text-[#2D1A53] mt-0.5 flex-shrink-0" />
                            <span className="text-[#8B9299]">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <motion.button
                        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white shadow-lg hover:shadow-xl'
                            : 'bg-white/40 text-[#2D1A53] border border-[#2D1A53]/20 hover:bg-white/60'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Started with Caleb
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
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
                    Ready to Work with Caleb?
                  </h2>
                  
                  <p className="text-xl text-[#8B9299] mb-8 max-w-2xl mx-auto">
                    Scale your sales team with AI that makes calls, books appointments, and closes deals 24/7.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Start Working with Caleb
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