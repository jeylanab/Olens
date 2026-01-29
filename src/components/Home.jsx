import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import heroImg from '../assets/hero.png'; 

const Hero = () => {
  const colors = {
    forestGreen: '#15803D',
    ochreGold: '#D97706',
    charcoal: '#1C1C1C',
    skyBlue: '#0EA5E9' // Added for the glow
  };

  const FloatingCard = ({ icon: Icon, color, title, subtitle, className, delay }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={`absolute bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-30 w-44 ${className}`}
    >
      <div className={`p-2 rounded-lg text-white shadow-md flex-shrink-0`} style={{ backgroundColor: color }}>
        <Icon size={18} />
      </div>
      <div className="leading-tight">
        <p className="text-xs font-black text-slate-900">{title}</p>
        <p className="text-[9px] font-medium text-slate-500">{subtitle}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white pt-24 pb-12 lg:pt-32 lg:pb-0">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/50 -z-10 skew-x-[-4deg] translate-x-16 hidden lg:block" />
      
      {/* Blue Glow Background Support */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1 relative z-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 mb-6">
              <Sparkles size={14} className="text-[#15803D]" />
              <span className="text-[#15803D] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                Digital Excellence in Ethiopia
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.05] lg:leading-[0.9] text-slate-900 tracking-tighter">
              Your Business, <br />
              <span style={{ color: colors.forestGreen }}>Fully Digital.</span>
            </h1>

            <p className="mt-8 text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Olens transforms local businesses into global competitors with 
              bespoke web design, iconic branding, and SEO that actually works.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: colors.charcoal }}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 shadow-xl"
              >
                Start a Project <ArrowRight size={20} />
              </motion.button>
              
              <button className="w-full sm:w-auto px-10 py-4 rounded-2xl border-2 border-slate-200 font-bold text-lg text-slate-700 hover:bg-slate-50 transition-colors">
                View Work
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE BOX */}
          <motion.div 
            className="relative order-1 lg:order-2 flex justify-center items-center h-[500px] lg:h-[650px]"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">
              
              {/* 1. The Circular Background Mask */}
              <div className="absolute inset-0 rounded-full border-[12px] border-white shadow-inner bg-slate-50 overflow-hidden z-10">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                >
                  <svg viewBox="0 0 300 300" className="w-full h-full scale-110">
                    <defs><path id="circlePath" d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" /></defs>
                    <text fill={colors.charcoal} className="text-[11px] font-bold uppercase tracking-[0.6em]">
                      <textPath xlinkHref="#circlePath">DESIGN • DEVELOP • SCALE • INNOVATE •</textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Bottom Part of Image */}
                <img 
                  src={heroImg} 
                  alt="" 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto object-cover z-10 scale-125 origin-bottom"
                />
              </div>

              {/* 2. Top Part of Image (Pop-out with Sky Blue Glow) */}
              <div 
                className="absolute inset-0 z-20 pointer-events-none overflow-visible"
                style={{ clipPath: 'inset(-100% -100% 48% -100%)' }}
              >
                <img 
                  src={heroImg} 
                  alt="Specialist" 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto object-cover scale-125 origin-bottom
                             drop-shadow-[0_0_15px_rgba(14,165,233,0.4)] 
                             drop-shadow-[0_0_30px_rgba(14,165,233,0.2)]"
                />
              </div>

              {/* Floating Cards */}
              <FloatingCard 
                icon={Zap} 
                color={colors.ochreGold} 
                title="Fast Build" 
                subtitle="14-day delivery" 
                className="-top-4 right-0 lg:-right-4"
                delay={0.5}
              />
              
              <FloatingCard 
                icon={ShieldCheck} 
                color={colors.forestGreen} 
                title="Secure" 
                subtitle="Enterprise grade" 
                className="top-1/2 -left-8 lg:-left-16 -translate-y-1/2"
                delay={0.7}
              />

              <FloatingCard 
                icon={TrendingUp} 
                color="#0EA5E9" 
                title="Growth" 
                subtitle="SEO Optimized" 
                className="-bottom-4 right-8 lg:right-16"
                delay={0.9}
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;