import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Layout, Smartphone, ShoppingBag } from 'lucide-react';

const Portfolio = () => {
  const colors = {
    forestGreen: '#15803D',
    charcoal: '#1C1C1C'
  };

  const projects = [
    {
      title: "Zara Fashion",
      category: "E-commerce",
      desc: "Increased online sales by 40% with a faster checkout.",
      size: "md:col-span-3",
      icon: <ShoppingBag size={20} />,
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Ethio-Tech App",
      category: "Mobile App",
      desc: "A smooth delivery app for local businesses.",
      size: "md:col-span-2",
      icon: <Smartphone size={20} />,
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Skyline Hotel",
      category: "Web Design",
      desc: "Beautiful booking site for a luxury hotel stay.",
      size: "md:col-span-2",
      icon: <Layout size={20} />,
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Green Coffee",
      category: "Branding",
      desc: "Complete brand identity for organic coffee export.",
      size: "md:col-span-3",
      icon: <ExternalLink size={20} />,
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 px-6 sm:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              Real Work. <br />
              <span style={{ color: colors.forestGreen }}>Real Results.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              We don't just make things look pretty. We build tools that help businesses grow.
            </p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 font-black uppercase text-xs tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1"
          >
            View All Projects <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${project.size} group relative h-[400px] rounded-[2.5rem] overflow-hidden bg-slate-200 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500`}
            >
              {/* Project Image */}
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Content on Image */}
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white">
                    {project.icon}
                  </div>
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-black text-white mb-2 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-white/60 text-sm font-medium max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.desc}
                </p>
              </div>

              {/* Floating Link Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                <ExternalLink size={20} style={{ color: colors.forestGreen }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-6">Want to be our next success story?</p>
          <button 
            style={{ backgroundColor: colors.forestGreen }}
            className="px-10 py-5 rounded-2xl text-white font-black text-lg shadow-xl hover:scale-105 transition-transform"
          >
            Start Your Project
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;