import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, ArrowUpRight, Zap, Shield } from 'lucide-react';
import aboutImg from '../assets/about.png';

const HighEnergyAbout = () => {
  const containerRef = useRef(null);
  
  // Create a parallax effect for the background and image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* --- BACKGROUND ANIMATIONS --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D97706]/10 rounded-full blur-[140px]" 
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* --- LEFT: FLOATING IMAGE STACK (Col 1-7) --- */}
        <div className="lg:col-span-7 relative h-[500px] lg:h-[700px]">
          {/* Decorative Back-Box */}
          <motion.div 
            style={{ rotate: -5, y: y1 }}
            className="absolute inset-0 bg-green-800/20 rounded-[4rem] border border-green-500/20"
          />
          
          {/* Main Image with Parallax & Rotation */}
          <motion.div 
            style={{ rotate }}
            className="absolute inset-4 lg:inset-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              src={aboutImg} 
              alt="Digital Future" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Floating High-Animation Cards */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="absolute top-1/4 -left-6 bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-600 rounded-2xl"><Zap size={24} className="text-white" /></div>
              <div>
                <p className="text-white font-black text-2xl leading-none">14 Days</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-tighter">Execution Speed</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT: KINETIC TYPOGRAPHY (Col 8-12) --- */}
        <div className="lg:col-span-5 text-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
              className="inline-block px-4 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold tracking-widest mb-6"
            >
              WHO WE ARE
            </motion.div>

            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-6xl lg:text-8xl font-black text-black tracking-tighter leading-[0.85] mb-8"
            >
              WE BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                LEGACIES.
              </span>
            </motion.h2>

            <motion.p 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-gray-400 text-lg font-medium leading-relaxed mb-10 max-w-md"
            >
              We don't do "average." Olens is a high-speed digital engine building 
              iconic brands and websites that dominate the African market.
            </motion.p>

            {/* Kinetic Buttons */}
            <div className="flex flex-wrap gap-6 items-center">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#16a34a' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-green-700 text-white font-black rounded-2xl flex items-center gap-3 transition-colors"
              >
                THE MISSION <ArrowUpRight size={20} />
              </motion.button>
              
              <div className="flex items-center gap-4 text-white/50 hover:text-white transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                   <Globe size={18} />
                </div>
                <span className="text-sm font-bold tracking-widest uppercase">Ethio-Digital</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HighEnergyAbout;