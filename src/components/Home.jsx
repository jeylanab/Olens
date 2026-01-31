import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, TrendingUp, Globe, Star, MessageCircle } from 'lucide-react';
import heroImg from '../assets/hero.png'; 

const Hero = () => {
  const colors = {
    forestGreen: '#15803D',
    ochreGold: '#D97706',
    charcoal: '#1C1C1C',
    skyBlue: '#0EA5E9'
  };

  // Variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const FloatingCard = ({ icon: Icon, color, title, subtitle, className, delay }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: [0, -10, 0] // Continuous floating motion
      }}
      transition={{ 
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay } 
      }}
      className={`absolute bg-white p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 flex items-center gap-3 z-30 w-48 ${className}`}
    >
      <div className={`p-2 rounded-lg text-white shadow-md flex-shrink-0`} style={{ backgroundColor: color }}>
        <Icon size={18} />
      </div>
      <div className="leading-tight">
        <p className="text-xs font-black text-slate-900">{title}</p>
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">{subtitle}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-24 pb-12 lg:pt-20 lg:pb-0">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/40 -z-10 skew-x-[-6deg] translate-x-20 hidden lg:block" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-10" 
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SIDE: CONTENT */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left order-2 lg:order-1 relative z-20"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 mb-8">
                <Sparkles size={14} className="text-[#15803D] animate-pulse" />
                <span className="text-[#15803D] text-[10px] font-black uppercase tracking-[0.3em]">
                  Digital Excellence
                </span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[1.05] lg:leading-[0.9] text-slate-900 tracking-tighter">
                Your Business, <br />
                <span className="relative">
                    <span style={{ color: colors.forestGreen }}>Fully Digital.</span>
                    <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: '100%' }} 
                        transition={{ delay: 1.2, duration: 1 }}
                        className="absolute -bottom-2 left-0 h-2 bg-green-100 -z-10" 
                    />
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="mt-10 text-lg lg:text-2xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Transforming local vision into world-class digital presence through 
                high-speed development and iconic strategy.
              </motion.p>

              <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{ backgroundColor: colors.charcoal }}
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl text-white font-black text-lg flex items-center justify-center gap-3 transition-all"
                >
                  Start a Project <ArrowRight size={22} />
                </motion.button>
                
                <motion.button 
                  whileHover={{ backgroundColor: '#f8fafc' }}
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl border-2 border-slate-100 font-black text-lg text-slate-700 transition-colors"
                >
                  View Work
                </motion.button>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE: IMAGE BOX */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative order-1 lg:order-2 flex justify-center items-center h-[550px] lg:h-[700px]"
            >
              <div className="relative w-80 h-80 sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px]">
                <div className="absolute inset-0 rounded-full border-[14px] border-white shadow-2xl bg-slate-50 overflow-hidden z-10">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 300 300" className="w-full h-full scale-110">
                      <defs><path id="circlePath" d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" /></defs>
                      <text fill={colors.charcoal} className="text-[12px] font-black uppercase tracking-[0.7em]">
                        <textPath xlinkHref="#circlePath">DESIGN • DEVELOP • SCALE • INNOVATE • DELIVER</textPath>
                      </text>
                    </svg>
                  </motion.div>
                  <motion.img 
                    animate={{ y: [10, 0, 10] }} 
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    src={heroImg} alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto object-cover z-10 scale-125 origin-bottom" 
                  />
                </div>
                
                <FloatingCard icon={Zap} color={colors.ochreGold} title="Fast Build" subtitle="14-day delivery" className="-top-8 right-0" delay={0.6} />
                <FloatingCard icon={ShieldCheck} color={colors.forestGreen} title="Secure" subtitle="Enterprise grade" className="top-1/2 -left-12 -translate-y-1/2" delay={0.9} />
                <FloatingCard icon={TrendingUp} color="#0EA5E9" title="Growth" subtitle="SEO Optimized" className="-bottom-8 right-12" delay={1.2} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INFO SECTION (NOW WHITE) --- */}
      <section className="bg-white py-32 px-6 border-t border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            {[
              { label: 'Market Reach', val: '12M+', icon: <Globe className="text-blue-500"/> },
              { label: 'Revenue Increase', val: '240%', icon: <TrendingUp className="text-green-500"/> },
              { label: 'Projects', val: '500+', icon: <Zap className="text-amber-500"/> },
              { label: 'Rating', val: '4.9/5', icon: <Star className="text-orange-500" fill="currentColor"/> }
            ].map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="group border-l-2 border-slate-100 pl-8 hover:border-green-500 transition-colors"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">{stat.icon}</div>
                <h4 className="text-5xl font-black text-slate-900 tracking-tighter">{stat.val}</h4>
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-slate-50 p-12 rounded-[4rem] border border-slate-100 relative overflow-hidden group"
            >
               <h3 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Why Modern Businesses <br/>Choose Our Studio</h3>
               <div className="grid sm:grid-cols-2 gap-8">
                  {[
                  { t: 'Strategic Speed', d: 'We launch businesses in weeks, not months, without losing quality.' },
                  { t: 'Secure Tech', d: 'Top-tier security protocols to protect your data and transactions.' },
                  { t: 'Local Expertise', d: 'Deep understanding of market trends and consumer behavior.' },
                  { t: 'Dedicated Support', d: 'Always available for maintenance and growth consulting.' }
                  ].map((item, i) => (
                    <div key={i} className="relative pl-6">
                      <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-green-500" />
                      <p className="text-slate-900 font-black text-lg mb-1">{item.t}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  ))}
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-green-600 rounded-[4rem] p-12 flex flex-col justify-between items-center text-center text-white shadow-2xl shadow-green-200"
            >
               <div>
                 <MessageCircle className="mx-auto mb-6 opacity-40" size={50} />
                 <p className="text-2xl font-bold leading-tight italic">
                   "Tripled our sales in 3 months. The absolute best decision for our brand."
                 </p>
               </div>
               
               <div className="mt-8">
                 <div className="flex -space-x-3 mb-4">
                   {[1, 2, 3, 4].map((i) => (
                     <div key={i} className="w-12 h-12 rounded-full border-4 border-green-600 bg-white overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+15}`} alt="client" />
                     </div>
                   ))}
                 </div>
                 <p className="text-green-200 text-[10px] font-black uppercase tracking-widest">Trusted by 500+ Founders</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;