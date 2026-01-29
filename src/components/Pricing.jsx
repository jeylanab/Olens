import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Code2, 
  Layers, 
  Search 
} from 'lucide-react';

const PricingContact = () => {
  const colors = {
    forestGreen: '#15803D',
    charcoal: '#1C1C1C'
  };

  const tiers = [
    {
      name: "Launchpad",
      tagline: "For New Ventures",
      desc: "Perfect for new businesses that need a professional look to get their first customers.",
      icon: <Zap className="text-amber-500" />,
      features: ["Custom Web Design", "Works on Mobile", "Basic Google Setup", "14-Day Delivery"]
    },
    {
      name: "Market Leader",
      tagline: "For Growing Brands",
      desc: "A powerful digital setup designed to make you the #1 choice in your local market.",
      icon: <Sparkles className="text-white" />,
      features: ["Online Store Setup", "Advanced Google SEO", "Speed Optimization", "Content Writing"],
      popular: true
    },
    {
      name: "Custom Build",
      tagline: "For Large Projects",
      desc: "Bespoke software and complex systems built specifically for your unique business needs.",
      icon: <Code2 className="text-blue-500" />,
      features: ["Custom Dashboards", "App Development", "API Integrations", "Dedicated Support"]
    }
  ];

  const steps = [
    { num: "01", title: "Discovery Call", text: "We talk for 15 minutes to learn about your business goals." },
    { num: "02", title: "Custom Quote", text: "We send a clear plan and price based exactly on what you need." },
    { num: "03", title: "Build & Launch", text: "Our team builds your project and handles all the technical stuff." }
  ];

  return (
    <section className="py-24 bg-white px-6 sm:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION: THE TIERS --- */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
            Investing in <br />
            <span style={{ color: colors.forestGreen }}>Your Growth.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed">
            We don't have hidden fees. We look at your project and give you a fair price 
            that helps you make more money in the long run.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[3rem] border-2 transition-all flex flex-col ${
                tier.popular ? 'border-[#15803D] bg-slate-900 text-white shadow-2xl' : 'border-slate-100 bg-white'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${tier.popular ? 'bg-white/10' : 'bg-slate-50'}`}>
                {tier.icon}
              </div>
              
              <h3 className={`text-3xl font-black mb-2 tracking-tight ${tier.popular ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
              <p className="text-xs font-bold text-[#15803D] uppercase tracking-[0.2em] mb-6">{tier.tagline}</p>
              
              <p className={`text-sm mb-10 leading-relaxed font-medium flex-grow ${tier.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                {tier.desc}
              </p>
              
              <ul className="space-y-4 mb-12">
                {tier.features.map((f, i) => (
                  <li key={i} className="text-sm font-bold flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${tier.popular ? 'bg-green-400' : 'bg-[#15803D]'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <button 
                style={{ backgroundColor: tier.popular ? colors.forestGreen : colors.charcoal }}
                className="w-full py-5 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 hover:gap-4 transition-all shadow-xl"
              >
                Request Pricing <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM SECTION: THE PROCESS --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-[4rem] p-10 lg:p-20 overflow-hidden relative">
          
          {/* Subtle Background Icon */}
          <Layers className="absolute -bottom-10 -left-10 text-slate-200 opacity-20" size={300} />

          <div className="relative z-10">
            <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">How we get started.</h3>
            <p className="text-slate-500 font-medium mb-10 max-w-md">
              Starting a big project can be scary. We make it easy with three simple steps.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <span className="text-2xl font-black text-slate-300 group-hover:text-[#15803D] transition-colors">{step.num}</span>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-slate-500 text-sm font-medium">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 bg-slate-900 rounded-[3rem] p-10 text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#15803D] p-3 rounded-xl shadow-lg shadow-green-900/40">
                <Calendar size={24} />
              </div>
              <p className="text-xl font-black tracking-tight">Ready to talk?</p>
            </div>
            
            <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed">
              Skip the emails. Book a quick 15-minute call to see if we are a good match for your business.
            </p>

            <button 
              style={{ backgroundColor: colors.forestGreen }}
              className="w-full py-5 rounded-2xl font-black text-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Book Discovery Call
            </button>

            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700" />
                  ))}
               </div>
               <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Joined by 20+ businesses this month
               </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PricingContact;