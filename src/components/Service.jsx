import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, MapPin, PenTool, Share2, X, CheckCircle2, ArrowRight, Zap, Stars, Sparkles } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedService ? 'hidden' : 'unset';
  }, [selectedService]);

  const services = [
    {
      id: 1,
      title: "Business Website",
      simple: "Your professional digital storefront.",
      details: "In a world that never sleeps, your website is your best employee. We build ultra-fast, mobile-ready sites that turn browsers into buyers. Every site is custom-crafted to match your unique vision.",
      icon: <Layout size={28} />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      features: ["Mobile Optimization", "Speed Engineering", "SEO Foundation", "Contact Systems"],
      size: "md:col-span-2"
    },
    {
      id: 2,
      title: "Google Maps",
      simple: "Be found, instantly.",
      details: "We put your business on the map—literally. By optimizing your local profile, we ensure you are the first name people see when they search for services in your area.",
      icon: <MapPin size={28} />,
      image: "https://images.unsplash.com/photo-1569336415962-a4bd4f79c3f2?auto=format&fit=crop&q=80&w=800",
      features: ["Location Search #1", "Review Management", "Photo Optimization", "Direct Routing"],
      size: "md:col-span-1"
    },
    {
      id: 3,
      title: "Logo & Style",
      simple: "Iconic brand identity.",
      details: "Visual storytelling at its finest. We create logos and brand guidelines that don't just look good—they build immediate trust and recognition with your audience.",
      icon: <PenTool size={28} />,
      image: "https://images.unsplash.com/photo-1541462608141-ad4d01947f9d?auto=format&fit=crop&q=80&w=800",
      features: ["Premium Logo Design", "Brand Color Palette", "Typography Selection", "Social Media Kit"],
      size: "md:col-span-1"
    },
    {
      id: 4,
      title: "Social Growth",
      simple: "Engage your community.",
      details: "Turn followers into fans. We set up high-impact social media engines on Facebook, Instagram, and Telegram to keep your brand relevant and growing every single day.",
      icon: <Share2 size={28} />,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      features: ["Telegram Automation", "Content Strategy", "Platform Growth", "Direct Engagement"],
      size: "md:col-span-2"
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 20, 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-white px-6 lg:px-12 overflow-x-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header - Aligned Right to Start */}
        <div className="flex flex-col items-end text-right mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-[0.3em] text-xs"
          >
            Our Expertise <Sparkles size={14} />
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
            Precision <span className="text-green-600">Growth.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl">
            We don't just build; we accelerate. Experience a digital transformation designed for the modern era.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {services.map((service) => (
            <motion.div
              layoutId={`card-${service.id}`}
              variants={itemVariants}
              key={service.id}
              onClick={() => setSelectedService(service)}
              whileHover={{ y: -8 }}
              className={`${service.size} group relative h-[400px] rounded-[3rem] overflow-hidden cursor-pointer bg-slate-50 border border-slate-100`}
            >
              {/* Background Image Reveal */}
              <div className="absolute inset-0 z-0">
                <motion.img 
                  src={service.image} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 opacity-0 group-hover:opacity-100"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                
                <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-3xl font-black text-slate-900 group-hover:text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 group-hover:text-green-50 font-medium transition-colors">
                    {service.simple}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-green-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all">
                    View Strategy <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* MASTER CARD - FULL WIDTH */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 relative rounded-[3.5rem] p-10 md:p-16 bg-slate-900 overflow-hidden"
          >
            {/* Animated Background Element */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-24 -right-24 opacity-20"
            >
              <Stars size={300} className="text-green-400" />
            </motion.div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 text-green-400 rounded-full text-xs font-black uppercase tracking-widest">
                  <Zap size={14} fill="currentColor" /> All-In-One Power Plan
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                  The Complete <br /><span className="text-green-500">Business Engine</span>
                </h3>
                <p className="text-slate-400 text-lg max-w-xl font-medium">
                  Why settle for pieces? Get the full suite—Web, Maps, Branding, and Social—working in perfect harmony.
                </p>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-12 py-6 bg-green-600 text-white font-black rounded-[2rem] text-xl shadow-2xl shadow-green-900/40 flex items-center justify-center gap-3 hover:bg-green-500 transition-colors"
              >
                Launch Everything <ArrowRight size={24} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* --- MODAL SYSTEM --- */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
            />
            
            <motion.div 
              layoutId={`card-${selectedService.id}`}
              className="relative w-full max-w-5xl bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-[90vh] lg:h-auto"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 z-20 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:rotate-90 transition-transform duration-300"
              >
                <X size={20} />
              </button>

              <div className="lg:w-1/2 h-64 lg:h-auto relative">
                <img src={selectedService.image} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent" />
              </div>

              <div className="lg:w-1/2 p-10 lg:p-16 overflow-y-auto">
                <div className="flex items-center gap-4 mb-6 text-green-600">
                  <div className="p-3 bg-green-50 rounded-xl">{selectedService.icon}</div>
                  <span className="text-xs font-black uppercase tracking-[0.3em]">Premium Solutions</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  {selectedService.title}
                </h2>
                
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                  {selectedService.details}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                      <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                      <span className="font-bold text-slate-700 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-6 rounded-3xl bg-green-600 text-white font-black text-lg shadow-xl hover:bg-green-700 transition-all active:scale-95">
                  Begin Transformation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;