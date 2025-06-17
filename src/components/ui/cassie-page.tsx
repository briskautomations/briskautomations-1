"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Hexagon, MessageCircle, Clock, CheckCircle, Star, Users, Headphones, ArrowRight, Play, Target, Zap, BarChart3, Settings, Shield, Building, ShoppingCart, Home, Heart, Palette, ChevronDown, ChevronUp, X, Send, Minimize2, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CassiePage: React.FC = () => {
    const [showChatWidget, setShowChatWidget] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi there! 👋 I'm Cassie, your AI Customer Support Specialist. How can I help you today?",
            sender: "cassie",
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputMessage;
        setInputMessage("");
        setIsTyping(true);

        setTimeout(() => {
            const responses = [
                "I'd be happy to help you with that! Let me look into your account details.",
                "That's a great question! Based on our policies, here's what I can tell you...",
                "I understand your concern. Let me provide you with the best solution.",
                "Thanks for reaching out! I can definitely assist you with this request.",
                "I see what you're asking about. Here's the information you need..."
            ];

            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            const cassieResponse = {
                id: messages.length + 2,
                text: randomResponse,
                sender: "cassie",
                timestamp: new Date()
            };

            setMessages(prev => [...prev, cassieResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

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

    const features = [
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
                        {/* Hero Section */}
                        <motion.section variants={staggerItem} className="text-center space-y-12">
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
                                        className="text-5xl lg:text-7xl font-extrabold leading-tight"
                                        style={{
                                            background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            textShadow: '0 1px 2px rgba(45, 26, 83, 0.1)',
                                            filter: 'contrast(1.1) brightness(1.05)',
                                        }}
                                    >
                                        Meet Cassie
                                    </h1>

                                    <p className="text-2xl text-[#8B9299] leading-relaxed max-w-3xl mx-auto">
                                        Your AI Customer Support Specialist that handles phone calls, emails, and chat with natural conversation
                                    </p>
                                </div>

                                {/* Cassie Avatar */}
                                <motion.div
                                    className="relative w-64 h-64 mx-auto"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/20 to-[#C89BA1]/20 rounded-full blur-2xl" />

                                    <div
                                        className="relative w-full h-full bg-white/60 backdrop-blur-xl border border-white/40 rounded-full flex items-center justify-center shadow-2xl"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                                            boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                                        }}
                                    >
                                        <div className="w-32 h-32 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center shadow-2xl">
                                            <Headphones size={64} className="text-white" />
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full px-4 py-2 shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-sm font-medium text-[#2D1A53]">Available 24/7</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.section>

                        {/* Experience Cassie Section */}
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
                                        className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                                            boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                                        }}
                                    >
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#2D1A53] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <MessageCircle size={32} className="text-white" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-[#2D1A53] mb-4">💬 Chat with Cassie Now</h3>
                                        <p className="text-[#8B9299] mb-6">Ask Cassie any customer service question</p>

                                        <motion.button
                                            onClick={() => setShowChatWidget(true)}
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
                                        className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                                            boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                                        }}
                                    >
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <Phone size={32} className="text-white" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-[#2D1A53] mb-4">📞 Call Cassie Directly</h3>
                                        <div className="text-3xl font-bold text-[#8B5CF6] mb-4">(555) 123-CHAT</div>

                                        <motion.button
                                            className="bg-white/40 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/60 transition-all duration-300 w-full mb-4"
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

                        {/* Features Section */}
                        <AnimatePresence>
                            {showFeatures && (
                                <motion.section
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-12"
                                >
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
                                        {features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                className="relative group"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ y: -5 }}
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
                            )}
                        </AnimatePresence>

                        {/* Bottom CTA Section */}
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
                                        Experience AI that understands, responds, and resolves issues 24/7 with natural conversation.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.button
                                            onClick={() => setShowFeatures(!showFeatures)}
                                            className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {showFeatures ? 'Hide Features' : 'Show Features'}
                                            {showFeatures ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                        </motion.button>

                                        <motion.button
                                            className="bg-white/40 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/60 transition-all duration-300 flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Calendar className="w-5 h-5" />
                                            Book a Call
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    </motion.div>
                </div>
            </main>

            {/* Chat Widget */}
            <AnimatePresence>
                {showChatWidget && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{
                            opacity: 1,
                            scale: isMinimized ? 0.8 : 1,
                            y: 0,
                            height: isMinimized ? "60px" : "500px"
                        }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-6 right-6 z-50 w-80 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                            boxShadow: '0 20px 40px rgba(45, 26, 83, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                        }}
                    >
                        {/* Chat Header */}
                        <div className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <Headphones size={16} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm">Cassie</h3>
                                    <p className="text-white/80 text-xs">AI Customer Support</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    <Minimize2 size={16} />
                                </button>
                                <button
                                    onClick={() => setShowChatWidget(false)}
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        {!isMinimized && (
                            <>
                                {/* Chat Messages */}
                                <div className="h-80 overflow-y-auto p-4 space-y-4">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[80%] p-3 rounded-2xl ${message.sender === 'user'
                                                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white'
                                                    : 'bg-white/60 text-[#2D1A53] border border-white/40'
                                                    }`}
                                                style={
                                                    message.sender === 'cassie'
                                                        ? {
                                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%)',
                                                            boxShadow: '0 4px 16px rgba(45, 26, 83, 0.08)',
                                                        }
                                                        : {}
                                                }
                                            >
                                                <p className="text-sm leading-relaxed">{message.text}</p>
                                                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-[#8B9299]'
                                                    }`}>
                                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div
                                                className="bg-white/60 text-[#2D1A53] border border-white/40 p-3 rounded-2xl"
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%)',
                                                    boxShadow: '0 4px 16px rgba(45, 26, 83, 0.08)',
                                                }}
                                            >
                                                <div className="flex space-x-1">
                                                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-bounce"></div>
                                                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Chat Input */}
                                <div className="p-4 border-t border-white/20">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={inputMessage}
                                            onChange={(e) => setInputMessage(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Ask Cassie anything..."
                                            className="flex-1 px-4 py-2 bg-white/40 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-[#2D1A53] placeholder-[#8B9299] text-sm"
                                            disabled={isTyping}
                                        />
                                        <motion.button
                                            onClick={sendMessage}
                                            disabled={!inputMessage.trim() || isTyping}
                                            className="bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white p-2 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Send size={16} />
                                        </motion.button>
                                    </div>
                                    <p className="text-xs text-[#8B9299] mt-2 text-center">
                                        This is a demo. Real Cassie would know your specific business.
                                    </p>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CassiePage;