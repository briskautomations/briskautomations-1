"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Hexagon, MessageCircle, Clock, CheckCircle, Star, Users, Headphones, ArrowRight, Play, Target, Zap, BarChart3, Settings, Shield, Building, ShoppingCart, Home, Heart, Palette, ChevronDown, ChevronUp, X } from "lucide-react";
import { Link } from "react-router-dom";

const CassieBPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showChatWidget, setShowChatWidget] = useState(false);

  // Initialize n8n chat widget
  useEffect(() => {
    // Load n8n chat CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load and initialize n8n chat
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      window.initN8nChat = () => {
        createChat({
          webhookUrl: 'https://n8n.srv850687.hstgr.cloud/webhook-test/cassie',
          target: '#n8n-chat-container',
          mode: 'window',
          showWelcomeScreen: true,
          defaultLanguage: 'en',
          initialMessages: [
            'Hi there! 👋',
            'I\'m Cassie B., your AI Customer Support Specialist. How can I help you today?'
          ],
          i18n: {
            en: {
              title: 'Chat with Cassie B.',
              subtitle: "I'm here to help you 24/7 with any questions about our AI customer support solutions.",
              footer: 'Powered by Brisk Automations',
              getStarted: 'Start Conversation',
              inputPlaceholder: 'Ask me anything about customer support...',
            },
          },
        });
      };
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
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

  const faqs = [
    {
      question: "How does Cassie learn about my business?",
      answer: "Cassie is trained on your specific business data, including your knowledge base, FAQs, policies, and previous customer interactions. The setup process includes comprehensive training on your products, services, and customer service protocols."
    },
    {
      question: "Can customers tell they're talking to AI?",
      answer: "Cassie is designed to provide natural, human-like conversations. Many customers don't realize they're speaking with AI. However, we can configure Cassie to identify herself as an AI assistant if preferred for transparency."
    },
    {
      question: "What happens if Cassie can't solve an issue?",
      answer: "Cassie intelligently recognizes when an issue requires human intervention and seamlessly escalates to your human support team, providing complete conversation context and customer history for a smooth handoff."
    },
    {
      question: "How quickly can Cassie be set up?",
      answer: "Cassie can be fully operational within 24-48 hours. This includes AI training, system integration, testing, and team onboarding. We handle the entire setup process for you."
    },
    {
      question: "Does Cassie work with my existing tools?",
      answer: "Yes! Cassie integrates with all major CRMs, helpdesk systems, chat platforms, and business tools including Salesforce, HubSpot, Zendesk, Intercom, and 50+ other platforms."
    },
    {
      question: "What industries work best with Cassie?",
      answer: "Cassie works across all industries but is particularly effective for businesses with high support volumes, repetitive inquiries, or 24/7 support needs. This includes e-commerce, SaaS, healthcare, real estate, and professional services."
    }
  ];

  const handleStartChat = () => {
    setShowChatWidget(true);
    // Initialize the n8n chat widget
    if (window.initN8nChat) {
      window.initN8nChat();
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F0F5] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='8' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.15) 0%, rgba(212, 160, 167, 0.08) 30%, rgba(45, 26, 83, 0.06) 70%, rgba(45, 26, 83, 0.12) 100%)',
        }}
      />

      {/* Navigation Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 bg-white/90 backdrop-blur-20 border-b border-[#2D1A53]/10"
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
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-24 py-20"
          >
            {/* Centered AI Specialist Intro Section */}
            <motion.section variants={staggerItem} className="text-center space-y-12">
              <motion.div
                className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-3xl border border-white/40 rounded-full px-6 py-3 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 100%)',
                  boxShadow: '0 8px 32px rgba(45, 26, 83, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(255, 255, 255, 0.15)',
                }}
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="w-4 h-4 text-[#2D1A53]" />
                <span className="text-sm font-semibold text-[#2D1A53]">AI Customer Support Specialist</span>
              </motion.div>

              <div className="space-y-8">
                <h1
                  className="text-5xl lg:text-7xl font-extrabold leading-tight max-w-4xl mx-auto"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 2px 4px rgba(45, 26, 83, 0.1)',
                    filter: 'contrast(1.15) brightness(1.05)',
                  }}
                >
                  Meet Cassie B.,<br />
                  your AI Customer Support Specialist
                </h1>

                <div className="space-y-6 max-w-3xl mx-auto">
                  <p className="text-2xl text-[#8B9299] leading-relaxed">
                    No more phone trees. No typing numbers.<br />
                    <span className="font-semibold text-[#2D1A53]">Just real conversations that solve problems.</span>
                  </p>

                  <p className="text-lg text-[#8B9299] leading-relaxed">
                    As soon as a customer reaches out,<br />
                    <span className="font-semibold text-[#2D1A53]">Cassie handles the support by:</span>
                  </p>

                  <div className="space-y-4 max-w-2xl mx-auto">
                    {[
                      "Answering phone calls with natural conversation (no keypad navigation)",
                      "Responding to support emails with personalized solutions",
                      "Managing website chat with instant, accurate responses",
                      "Resolving issues 24/7 across all channels seamlessly"
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 justify-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <CheckCircle className="w-6 h-6 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                        <span className="text-[#2D1A53] font-medium text-left">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <motion.button
                    onClick={handleStartChat}
                    className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Talk to Cassie Now
                    <MessageCircle className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    className="bg-white/50 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/70 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Play className="w-5 h-5" />
                    See How Cassie Works
                  </motion.button>
                </div>
              </div>

              {/* Centered Cassie Avatar */}
              <motion.div
                className="relative w-full max-w-sm mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/20 to-[#C89BA1]/20 rounded-3xl blur-3xl" />
                
                <div 
                  className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)',
                    boxShadow: '0 12px 40px rgba(45, 26, 83, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center shadow-2xl mb-6">
                    <Headphones size={80} className="text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#2D1A53] mb-2">Cassie B.</h3>
                    <p className="text-[#8B9299]">AI Customer Support Specialist</p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-[#8B9299]">Available 24/7</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* How Cassie Works Section */}
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
                  How Cassie Works
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  A simple 4-step process that transforms customer support
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    number: "1",
                    icon: Target,
                    title: "Customer Reaches Out",
                    description: "Phone call, email, or website chat - customers contact you however they prefer"
                  },
                  {
                    number: "2",
                    icon: Zap,
                    title: "Cassie Responds Instantly",
                    description: "In seconds, Cassie engages in natural conversation - no menus, no waiting"
                  },
                  {
                    number: "3",
                    icon: CheckCircle,
                    title: "Problem Gets Solved",
                    description: "Cassie resolves issues using your knowledge base and company policies"
                  },
                  {
                    number: "4",
                    icon: Users,
                    title: "Seamless Escalation",
                    description: "Complex cases get smoothly transferred to your human team with full context"
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
                      className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
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

            {/* Experience Cassie in 2 Ways Section */}
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
                  Experience Cassie in 2 Ways
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Test Cassie's natural conversation abilities right now
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Chat Demo Card */}
                <motion.div
                  className="relative group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  
                  <div 
                    className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)',
                      boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#2D1A53] rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MessageCircle size={32} className="text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#2D1A53] mb-4">💬 Chat with Cassie Now</h3>
                    <p className="text-[#8B9299] mb-6">Ask Cassie any customer service question</p>
                    
                    <motion.button
                      onClick={handleStartChat}
                      className="bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full mb-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Start Chat
                    </motion.button>
                    
                    <p className="text-sm text-[#8B9299]">Instant responses, just like your customers would experience</p>
                  </div>
                </motion.div>

                {/* Phone Demo Card */}
                <motion.div
                  className="relative group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  
                  <div 
                    className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)',
                      boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Headphones size={32} className="text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#2D1A53] mb-4">📞 Call Cassie Directly</h3>
                    <div className="text-3xl font-bold text-[#8B5CF6] mb-4">(555) 123-CHAT</div>
                    
                    <motion.button
                      className="bg-white/50 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/70 transition-all duration-300 w-full mb-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Call Now
                    </motion.button>
                    
                    <p className="text-sm text-[#8B9299]">Experience natural phone support - no menus, just conversation</p>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Cassie's Capabilities Section */}
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
                  Cassie's Capabilities
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Advanced AI features designed for exceptional customer support
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Headphones,
                    title: "Natural Phone Support",
                    description: "Real conversations, not robotic menus. Customers talk normally and get human-like responses."
                  },
                  {
                    icon: MessageCircle,
                    title: "Email Intelligence",
                    description: "Reads, understands, and responds to support emails with personalized, helpful solutions."
                  },
                  {
                    icon: Clock,
                    title: "Website Chat Integration",
                    description: "Embedded chat widget that provides instant, accurate answers to visitor questions."
                  },
                  {
                    icon: Target,
                    title: "Learning & Adaptation",
                    description: "Gets smarter over time, learning your products, policies, and customer preferences."
                  },
                  {
                    icon: Users,
                    title: "Smart Escalation",
                    description: "Knows when to involve humans, passing along complete conversation context."
                  },
                  {
                    icon: BarChart3,
                    title: "Real-Time Analytics",
                    description: "Track response times, resolution rates, and customer satisfaction in real-time."
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
                      className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#2D1A53] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <capability.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#2D1A53] mb-2">{capability.title}</h3>
                      <p className="text-[#8B9299] leading-relaxed">{capability.description}</p>
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
                  Frequently Asked Questions about Cassie
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Everything you need to know about working with Cassie
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
                      className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl shadow-lg overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      <button
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/30 transition-all duration-300"
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
          </motion.div>
        </div>
      </main>

      {/* n8n Chat Widget Container */}
      {showChatWidget && (
        <div 
          id="n8n-chat-container" 
          className="fixed bottom-4 right-4 z-50"
          style={{ width: '400px', height: '600px' }}
        >
          {/* n8n chat widget will be rendered here */}
        </div>
      )}
    </div>
  );
};

export default CassieBPage;