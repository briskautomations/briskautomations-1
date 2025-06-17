"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Hexagon, MessageCircle, Clock, CheckCircle, Star, Users, Headphones, Phone, Mail, Globe, Zap, Brain, BarChart3, Shield, Building, ShoppingCart, Home, Heart, Palette, Settings, ChevronDown, ChevronUp, X } from "lucide-react";
import { Link } from "react-router-dom";

const CassieBPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{text: string, sender: 'user' | 'cassie'}>>([]);
  const [currentMessage, setCurrentMessage] = useState("");

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
      quote: "Cassie transformed our customer support. Our customers love talking to her - many don't even realize she's AI!",
      name: "Sarah Martinez",
      company: "TechCorp Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "We went from 2-hour response times to instant responses. Customer satisfaction scores went through the roof.",
      name: "Mike Rodriguez",
      company: "GrowthCo",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "Cassie handles 80% of our support tickets perfectly. Our human team can focus on complex issues.",
      name: "Lisa Kim",
      company: "ServicePro",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const faqs = [
    {
      question: "How does Cassie learn about my business?",
      answer: "Cassie is trained on your specific business knowledge base, including your products, services, policies, and common customer questions. We work with you during setup to ensure she understands your unique business needs and can provide accurate, helpful responses."
    },
    {
      question: "Can customers tell they're talking to AI?",
      answer: "Cassie is designed to have natural, human-like conversations. Many customers don't realize they're talking to AI. However, we can configure Cassie to identify herself as an AI assistant if that aligns with your transparency preferences."
    },
    {
      question: "What happens if Cassie can't solve an issue?",
      answer: "Cassie is trained to recognize when an issue requires human intervention. She seamlessly escalates complex cases to your human support team, providing them with complete conversation context so customers don't have to repeat themselves."
    },
    {
      question: "How quickly can Cassie be set up?",
      answer: "Cassie can be operational within 24-48 hours. This includes training her on your business knowledge, integrating with your existing systems, and testing to ensure she's providing accurate responses before going live."
    },
    {
      question: "Does Cassie work with my existing tools?",
      answer: "Yes! Cassie integrates with all major CRM systems, helpdesk platforms, and communication tools including Zendesk, Salesforce, HubSpot, Intercom, and many others. She can also work with custom APIs."
    },
    {
      question: "What industries work best with Cassie?",
      answer: "Cassie works across all industries but is particularly effective for businesses with high support volumes, repetitive questions, or those needing 24/7 availability. E-commerce, SaaS, healthcare, and professional services see excellent results."
    }
  ];

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    const newMessages = [...chatMessages, { text: currentMessage, sender: 'user' as const }];
    setChatMessages(newMessages);
    setCurrentMessage("");

    // Simulate Cassie's response
    setTimeout(() => {
      let response = "I'd be happy to help you with that! ";
      
      if (currentMessage.toLowerCase().includes("return") || currentMessage.toLowerCase().includes("refund")) {
        response += "For returns, you can initiate the process through your account dashboard or I can help you right now. What item would you like to return?";
      } else if (currentMessage.toLowerCase().includes("hours") || currentMessage.toLowerCase().includes("open")) {
        response += "We're available 24/7 through this chat, and our phone support is available Monday-Friday 9AM-6PM EST. Is there something specific I can help you with today?";
      } else if (currentMessage.toLowerCase().includes("account") || currentMessage.toLowerCase().includes("login")) {
        response += "I can help you with account issues. Are you having trouble logging in, or do you need to update your account information?";
      } else if (currentMessage.toLowerCase().includes("shipping") || currentMessage.toLowerCase().includes("delivery")) {
        response += "I can check your order status and shipping information. Could you provide your order number or the email address associated with your order?";
      } else {
        response += "Could you provide a bit more detail about what you need help with? I'm here to assist you with any questions or concerns.";
      }

      setChatMessages(prev => [...prev, { text: response, sender: 'cassie' }]);
    }, 1000);
  };

  const startChat = () => {
    setChatOpen(true);
    if (chatMessages.length === 0) {
      setChatMessages([
        { text: "Hi! I'm Cassie, your AI customer support specialist. How can I help you today?", sender: 'cassie' }
      ]);
    }
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
      <script type="module" defer>
  import Chatbot from "https://cdn.n8nchatui.com/v1/embed.js";
  Chatbot.init({
    "n8nChatUrl": "YOUR_N8N_CHAT_TRIGGER_NODE_WEBHOOK_URL", // Replace this with your n8n chat webhook URL
    "metadata": {}, // Include any custom data to send with each message to your n8n workflow
    "theme": {
      "button": {
        "backgroundColor": "#ffc8b8",
        "right": 20,
        "bottom": 20,
        "size": 50,
        "iconColor": "#bd3cec",
        "customIconSrc": "https://n8n.srv850687.hstgr.cloud/webhook/95f138db-ae7a-4f20-a39c-3747ef6090c0/chat",
        "customIconSize": 60,
        "customIconBorderRadius": 3,
        "autoWindowOpen": {
          "autoOpen": false,
          "openDelay": 2
        },
        "borderRadius": "circle"
      },
      "tooltip": {
        "showTooltip": false,
        "tooltipMessage": "Hello 👋 customize & connect me to n8n",
        "tooltipBackgroundColor": "#d3bfb6",
        "tooltipTextColor": "#1c1c1c",
        "tooltipFontSize": 15
      },
      "chatWindow": {
        "borderRadiusStyle": "rounded",
        "avatarBorderRadius": 23,
        "messageBorderRadius": 27,
        "showTitle": true,
        "title": "N8N Chat UI Bot",
        "titleAvatarSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWFfj1QeivHuT6BctKScahuOwA9chivykBA&s",
        "welcomeMessage": "Hello! This is the default welcome message",
        "errorMessage": "I'm sorry im having an issue right now",
        "backgroundColor": "#ffffff",
        "height": 600,
        "width": 400,
        "fontSize": 16,
        "starterPrompts": [
          "Who are you?",
          "What do you do?"
        ],
        "starterPromptFontSize": 15,
        "renderHTML": false,
        "clearChatOnReload": false,
        "botMessage": {
          "backgroundColor": "#f36539",
          "textColor": "#fafafa",
          "showAvatar": true,
          "avatarSrc": "https://www.svgrepo.com/show/334455/bot.svg"
        },
        "userMessage": {
          "backgroundColor": "#fff6f3",
          "textColor": "#050505",
          "showAvatar": true,
          "avatarSrc": "https://www.svgrepo.com/show/532363/user-alt-1.svg"
        },
        "textInput": {
          "placeholder": "Type your query",
          "backgroundColor": "#ffffff",
          "textColor": "#1e1e1f",
          "sendButtonColor": "#f36539",
          "maxChars": 50,
          "maxCharsWarningMessage": "You exceeded the characters limit. Please input less than 50 characters.",
          "autoFocus": false,
          "borderRadius": 6,
          "sendButtonBorderRadius": 50
        },
        "uploadsConfig": {
          "enabled": true,
          "acceptFileTypes": [
            "jpeg",
            "jpg",
            "png",
            "pdf"
          ],
          "maxFiles": 5,
          "maxSizeInMB": 10
        },
        "voiceInputConfig": {
          "enabled": true,
          "maxRecordingTime": 15,
          "recordingNotSupportedMessage": "To record audio, use modern browsers like Chrome or Firefox that support audio recording"
        }
      }
    }
    });
  </script>

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
                  <MessageCircle className="w-4 h-4 text-[#2D1A53]" />
                  <span className="text-sm font-semibold text-[#2D1A53]">AI Customer Support Specialist</span>
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
                    Meet Cassie B.,<br />
                    your AI Customer Support Specialist
                  </h1>

                  <div className="space-y-4">
                    <p className="text-xl text-[#8B9299] leading-relaxed">
                      No more phone trees. No typing numbers.<br />
                      <span className="font-semibold text-[#2D1A53]">Just real conversations that solve problems.</span>
                    </p>

                    <p className="text-lg text-[#8B9299] leading-relaxed">
                      As soon as a customer reaches out,<br />
                      <span className="font-semibold text-[#2D1A53]">Cassie handles the support by:</span>
                    </p>

                    <div className="space-y-3">
                      {[
                        "Answering phone calls with natural conversation (no keypad navigation)",
                        "Responding to support emails with personalized solutions",
                        "Managing website chat with instant, accurate responses",
                        "Resolving issues 24/7 across all channels seamlessly"
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
                      onClick={startChat}
                      className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Talk to Cassie Now
                      <MessageCircle className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      className="bg-white/40 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/60 transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      See How Cassie Works
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
              </div>
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
                  A simple 4-step process that transforms your customer support
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    number: "1",
                    icon: Globe,
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
                <motion.div
                  className="relative group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  
                  <div 
                    className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                      boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                    }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#8B5CF6] to-[#2D1A53] rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2D1A53] mb-4">💬 Chat with Cassie Now</h3>
                    <p className="text-[#8B9299] mb-6">Ask Cassie any customer service question</p>
                    
                    <motion.button
                      onClick={startChat}
                      className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Start Chat
                    </motion.button>
                    
                    <p className="text-sm text-[#8B9299] mt-4">Instant responses, just like your customers would experience</p>
                  </div>
                </motion.div>

                <motion.div
                  className="relative group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  
                  <div 
                    className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                      boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                    }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Phone size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2D1A53] mb-4">📞 Call Cassie Directly</h3>
                    <div className="text-3xl font-bold text-[#8B5CF6] mb-4">(555) 123-CHAT</div>
                    
                    <motion.button
                      className="w-full bg-white/40 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/60 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Call Now
                    </motion.button>
                    
                    <p className="text-sm text-[#8B9299] mt-4">Experience natural phone support - no menus, just conversation</p>
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
                    icon: Phone,
                    title: "Natural Phone Support",
                    description: "Real conversations, not robotic menus. Customers talk normally and get human-like responses."
                  },
                  {
                    icon: Mail,
                    title: "Email Intelligence",
                    description: "Reads, understands, and responds to support emails with personalized, helpful solutions."
                  },
                  {
                    icon: MessageCircle,
                    title: "Website Chat Integration",
                    description: "Embedded chat widget that provides instant, accurate answers to visitor questions."
                  },
                  {
                    icon: Brain,
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
                      className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
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

            {/* Cassie is Always On Section */}
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
                  Cassie is Always On
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Performance metrics that matter to your business
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "⚡",
                    stat: "<3 Second",
                    title: "Response",
                    description: "Average response time across all channels"
                  },
                  {
                    icon: "🌙",
                    stat: "24/7",
                    title: "Availability",
                    description: "Never miss a customer inquiry, even on weekends and holidays"
                  },
                  {
                    icon: "🎯",
                    stat: "95%",
                    title: "Resolution Rate",
                    description: "Solves most issues without human intervention"
                  },
                  {
                    icon: "💰",
                    stat: "70%",
                    title: "Cost Reduction",
                    description: "Reduce support costs while improving satisfaction"
                  },
                  {
                    icon: "📈",
                    stat: "10x",
                    title: "Scale",
                    description: "Handle 10x more inquiries without hiring additional staff"
                  },
                  {
                    icon: "🔗",
                    stat: "Full",
                    title: "Integration",
                    description: "Works with your existing CRM, helpdesk, and communication tools"
                  }
                ].map((metric, index) => (
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
                      <div className="text-4xl mb-4">{metric.icon}</div>
                      <div className="text-3xl font-bold text-[#8B5CF6] mb-2">{metric.stat}</div>
                      <h3 className="text-lg font-bold text-[#2D1A53] mb-2">{metric.title}</h3>
                      <p className="text-[#8B9299] text-sm leading-relaxed">{metric.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials Section */}
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
                  What Businesses Say About Cassie
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Real results from companies using Cassie to transform their support
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
                  Invest in Cassie B.
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Transparent pricing that delivers exceptional ROI
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    icon: "🔧",
                    name: "Setup & Training",
                    price: "$2,997",
                    period: "one-time",
                    description: "Complete configuration and training",
                    features: [
                      "Custom knowledge base setup",
                      "Voice and personality training",
                      "Integration with your systems",
                      "Testing and optimization"
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
                      "Access to Cassie dashboard",
                      "Performance analytics",
                      "Ongoing improvements",
                      "Priority support"
                    ],
                    popular: false
                  },
                  {
                    icon: "💬",
                    name: "Per Interaction",
                    price: "$0.50",
                    period: "/interaction",
                    description: "Pay only for actual customer interactions",
                    features: [
                      "No minimums or hidden fees",
                      "Scale up or down as needed",
                      "Detailed interaction analytics",
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
                  Common Questions About Cassie
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
                    Ready to Transform Your Customer Support?
                  </h2>
                  
                  <p className="text-xl text-[#8B9299] mb-8 max-w-2xl mx-auto">
                    Join hundreds of businesses using Cassie to deliver exceptional customer support 24/7 while reducing costs and improving satisfaction.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started with Cassie B.
                      <MessageCircle className="w-5 h-5" />
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

      {/* Chat Widget */}
      {chatOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="fixed bottom-6 right-6 w-96 h-96 bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl z-50 flex flex-col"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
            boxShadow: '0 20px 40px rgba(45, 26, 83, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
          }}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center">
                <Headphones size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D1A53]">Cassie B.</h3>
                <p className="text-xs text-[#8B9299]">AI Support Specialist</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="w-8 h-8 bg-white/40 hover:bg-white/60 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <X size={16} className="text-[#2D1A53]" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white'
                      : 'bg-white/60 text-[#2D1A53] border border-white/40'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleChatSubmit} className="p-4 border-t border-white/30">
            <div className="flex gap-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-white/40 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Send
              </button>
            </div>
            <p className="text-xs text-[#8B9299] mt-2 text-center">
              This is a demo - real Cassie would know your specific business
            </p>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default CassieBPage;