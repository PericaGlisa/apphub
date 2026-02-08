import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Globe, Cpu, Zap, Target, BarChart3, Lock, Rocket, Code2, Server, TrendingUp } from 'lucide-react';
import Contact from '../components/Contact';

// About page fixed
const About: React.FC = () => {
  return (
    <div className="pt-32">
       {/* Hero Section */}
       <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-24">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 text-center"
         >
            <span className="text-[#00FFC2] font-mono text-[11px] md:text-[13px] tracking-[0.6em] uppercase mb-10 block font-bold">
              Who We Are
            </span>
            <h1 className="text-[clamp(2.5rem,8vw,8.5rem)] font-black tracking-tighter mb-10 leading-[0.85] text-white uppercase">
              ARCHITECTS OF <br /> INFLUENCE.
            </h1>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-slate-500 text-lg leading-relaxed font-light"
            >
              <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">The AppHub Standard</h2>
              <p className="mb-6">
                AppHub.ae isn't a traditional agency. We are a collective of systems engineers, data scientists, and creative strategists who believe that marketing is an engineering problem, not an art project.
              </p>
              <p>
                Founded in the heart of the Middle East's tech revolution, we operate with a singular mission: to provide our partners with unfair market advantages through superior technological infrastructure and data-driven narrative control.
              </p>
            </motion.div>
            
            {/* Stats Grid */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="grid grid-cols-2 gap-4"
            >
                {[
                    { label: "Systems Deployed", value: "50+", icon: Server },
                    { label: "Growth Generated", value: "300%", icon: TrendingUp },
                    { label: "Data Sovereignty", value: "100%", icon: Lock },
                    { label: "Global Partners", value: "12+", icon: Globe },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors group">
                        <stat.icon className="w-8 h-8 text-[#00FFC2] mb-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                        <span className="text-xs font-mono uppercase tracking-widest text-slate-500">{stat.label}</span>
                    </div>
                ))}
            </motion.div>
         </div>

         {/* Philosophy Section */}
         <div className="mb-32">
            <div className="text-center mb-16">
                <span className="text-[#00FFC2] font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Our Methodology</span>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">The AppHub Algorithm</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Audit & Architect",
                        desc: "We deconstruct your current market position and engineer a superior roadmap.",
                        icon: Cpu,
                        step: "01"
                    },
                    {
                        title: "Deploy & Dominate",
                        desc: "Rapid implementation of high-velocity growth systems and content infrastructure.",
                        icon: Rocket,
                        step: "02"
                    },
                    {
                        title: "Scale & Sustain",
                        desc: "Continuous optimization through data feedback loops and AI-driven insights.",
                        icon: BarChart3,
                        step: "03"
                    }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="relative p-8 border border-white/10 rounded-3xl bg-black/20 overflow-hidden group hover:border-[#00FFC2]/50 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-6xl font-black text-white">{item.step}</span>
                        </div>
                        <div className="w-12 h-12 bg-[#00FFC2]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00FFC2]/20 transition-colors">
                            <item.icon className="w-6 h-6 text-[#00FFC2]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 uppercase">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
         </div>

         {/* Values Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <span className="text-[#00FFC2] font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Core Directives</span>
               <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">Code We Live By</h2>
               <p className="text-slate-500 text-lg font-light mb-8 max-w-md">
                   Our culture is defined by a relentless pursuit of engineering perfection in a marketing world obsessed with ambiguity.
               </p>
               <a href="/consultation" className="inline-flex items-center gap-3 text-white font-bold border-b border-[#00FFC2] pb-1 hover:text-[#00FFC2] transition-colors uppercase tracking-widest text-sm">
                   Join the team <Zap className="w-4 h-4" />
               </a>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                    { title: "Elite Talent Only", desc: "No juniors. Only senior specialists touch your project.", icon: Users },
                    { title: "Radical Truth", desc: "We don't sell dreams. We sell mathematical certainty.", icon: Target },
                    { title: "Speed is a Feature", desc: "Market dominance belongs to the fast.", icon: Zap },
                    { title: "Code > Content", desc: "Systems scale. Content expires. We build systems.", icon: Code2 },
                ].map((val, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <val.icon className="w-6 h-6 text-[#00FFC2] mb-4" />
                        <h4 className="text-white font-bold uppercase mb-2 text-sm">{val.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{val.desc}</p>
                    </motion.div>
                ))}
            </div>
         </div>
       </section>
       <Contact />
    </div>
  );
};

export default About;
