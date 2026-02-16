import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Globe, Cpu, Zap, Target, BarChart3, Lock, Rocket, Code2, Server, TrendingUp } from 'lucide-react';
import Contact from '../components/Contact';

// About page fixed
const About: React.FC = () => {
  return (
    <div className="pt-32">
       <section className="relative max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-24 overflow-hidden">
         <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[90vw] h-[45vh] bg-blue-900/10 blur-[160px] opacity-50 pointer-events-none" />
         <div className="absolute bottom-[-10%] right-0 w-[60vw] h-[40vh] bg-[#00FFC2]/10 blur-[180px] opacity-30 pointer-events-none" />
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 md:mb-24 text-center relative z-10"
         >
            <span className="text-[#00FFC2] font-mono text-[11px] md:text-[13px] tracking-[0.6em] uppercase mb-10 block font-bold">
              Who We Are
            </span>
            <h1 className="text-[clamp(2.5rem,8vw,8.5rem)] font-black tracking-tighter mb-10 leading-[0.85] text-white uppercase">
              ARCHITECTS OF <br /> INFLUENCE.
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl font-light leading-relaxed tracking-tight max-w-4xl mx-auto">
              We build AI-first growth infrastructure that compounds. Strategy, engineering, and narrative control fused into one operating system for market leadership.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/consultation" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#00FFC2] text-black font-black uppercase tracking-widest text-sm md:text-base hover:scale-105 transition-transform shadow-[0_0_40px_rgba(0,255,194,0.3)]">
                Start Consultation
              </a>
              <a href="/services" className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-bold uppercase tracking-widest text-sm md:text-base hover:bg-white/[0.08] transition-all">
                View Capabilities
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.35em] text-slate-500">
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">AI Infrastructure</span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">Predictive Analytics</span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">Full‑Stack Growth</span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">Market Intelligence</span>
            </div>
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
                AppHub.ae is a systems studio. We blend engineering, data science, and creative strategy to turn complex market signals into deployable growth engines.
              </p>
              <p>
                Based in the Middle East’s tech epicenter, we deliver unfair advantage through resilient infrastructure, predictive intelligence, and execution velocity.
              </p>
            </motion.div>
            
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
                    <div key={idx} className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:bg-white/[0.08] hover:border-[#00FFC2]/30 transition-all group backdrop-blur-xl">
                        <stat.icon className="w-8 h-8 text-[#00FFC2] mb-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                        <span className="text-xs font-mono uppercase tracking-widest text-slate-500">{stat.label}</span>
                    </div>
                ))}
            </motion.div>
         </div>

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
                        className="relative p-8 border border-white/10 rounded-3xl bg-white/[0.02] overflow-hidden group hover:border-[#00FFC2]/50 hover:-translate-y-1 transition-all duration-500"
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
                   We operate with precision, speed, and transparency. Every decision is tied to measurable outcomes and system resilience.
               </p>
               <a href="/consultation" className="inline-flex items-center gap-3 text-white font-bold border-b border-[#00FFC2] pb-1 hover:text-[#00FFC2] transition-colors uppercase tracking-widest text-sm">
                   Talk to us <Zap className="w-4 h-4" />
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
                        className="bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:bg-white/[0.08] hover:border-[#00FFC2]/30 transition-all"
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
