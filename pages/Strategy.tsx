import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Radar, ShieldCheck, TrendingUp, Rocket, Layers } from 'lucide-react';
import ProjectNexus from '../components/IDEWorkspace';
import Contact from '../components/Contact';

const Strategy: React.FC = () => {
  return (
    <div className="pt-32">
       <section className="relative max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-28 overflow-hidden">
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[90vw] h-[45vh] bg-blue-900/10 blur-[160px] opacity-50 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-0 w-[60vw] h-[40vh] bg-[#00FFC2]/10 blur-[180px] opacity-30 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-20 text-center relative z-10"
        >
          <span className="text-[#00FFC2] font-mono text-[11px] md:text-[13px] tracking-[0.6em] uppercase mb-10 block font-bold">
            The Architecture Core
          </span>
          <h1 className="text-[clamp(2.5rem,8vw,8.5rem)] font-black mb-10 tracking-tighter leading-[0.85] text-white uppercase">STRATEGIC CORE.</h1>
          <p className="text-slate-400 text-lg md:text-3xl max-w-5xl mx-auto font-light leading-relaxed tracking-tight px-4">
             We translate signal into leverage. Strategy is engineered, deployed, and continuously optimized for compounding advantage.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/consultation" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#00FFC2] text-black font-black uppercase tracking-widest text-sm md:text-base hover:scale-105 transition-transform shadow-[0_0_40px_rgba(0,255,194,0.3)]">
              Initiate Strategy
            </a>
            <a href="/services" className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-bold uppercase tracking-widest text-sm md:text-base hover:bg-white/[0.08] transition-all">
              Explore Systems
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.35em] text-slate-500">
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">Signal Intelligence</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">System Mapping</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">Precision Execution</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">Compounding Growth</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            { title: 'Opportunity Window', value: '14–21 Days', icon: Radar, desc: 'From discovery to decision.' },
            { title: 'Execution Speed', value: '4–8 Weeks', icon: Rocket, desc: 'From plan to deployment.' },
            { title: 'Performance Lift', value: '3× ROI', icon: TrendingUp, desc: 'Measured, compounding outcomes.' }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-xl hover:bg-white/[0.08] hover:border-[#00FFC2]/30 transition-all"
            >
              <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.35em] text-slate-400">
                <item.icon className="w-4 h-4 text-[#00FFC2]" />
                {item.title}
              </div>
              <div className="mt-4 text-2xl md:text-3xl font-black text-white uppercase tracking-tight">{item.value}</div>
              <p className="mt-2 text-slate-500 text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#00FFC2] font-mono text-[10px] md:text-[12px] tracking-[0.6em] uppercase mb-8 block font-bold">
            Strategic Pillars
          </span>
          <h2 className="text-[clamp(2.2rem,6vw,6rem)] font-black tracking-tighter mb-8 leading-[0.9] text-white uppercase">
            DESIGNED TO DOMINATE.
          </h2>
          <p className="text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed tracking-tight px-4">
            We align market position, infrastructure, and execution velocity into one decisive system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Signal Intelligence', desc: 'We map market signals into actionable advantage.', icon: Radar },
            { title: 'System Blueprint', desc: 'Architecture that turns intent into performance.', icon: Layers },
            { title: 'Operational Momentum', desc: 'Relentless iteration that compounds outcomes.', icon: Cpu }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 overflow-hidden hover:bg-white/[0.05] hover:border-[#00FFC2]/30 transition-all"
            >
              <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-[#00FFC2]/10 blur-[70px] rounded-full translate-x-1/3 -translate-y-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00FFC2]/40 transition-colors">
                  <item.icon className="w-6 h-6 text-[#00FFC2]" />
                </div>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#00FFC2] font-mono text-[10px] md:text-[12px] tracking-[0.6em] uppercase mb-8 block font-bold">
            Execution Flow
          </span>
          <h2 className="text-[clamp(2.2rem,6vw,6rem)] font-black tracking-tighter mb-8 leading-[0.9] text-white uppercase">
            SIGNAL TO SCALE.
          </h2>
          <p className="text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed tracking-tight px-4">
            A repeatable sequence that transforms research into decisive market control.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Intelligence', desc: 'Capture market signals and hidden demand.' },
            { step: '02', title: 'Blueprint', desc: 'Design infrastructure and positioning.' },
            { step: '03', title: 'Deployment', desc: 'Ship fast with resilient systems.' },
            { step: '04', title: 'Compounding', desc: 'Optimize and scale with data loops.' }
          ].map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 overflow-hidden hover:bg-white/[0.05] hover:border-[#00FFC2]/30 transition-all"
            >
              <div className="text-[#00FFC2] font-mono text-[10px] tracking-[0.6em] uppercase mb-4 font-bold">
                {item.step}
              </div>
              <h3 className="text-white text-lg font-bold uppercase tracking-tight mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 md:mb-20 gap-8 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <span className="text-[#00FFC2] font-mono text-[10px] md:text-[12px] tracking-[0.6em] uppercase mb-6 block font-bold">
              Strategic Core Lab
            </span>
            <h2 className="text-[clamp(2.5rem,7vw,7.5rem)] font-black tracking-tighter mb-8 leading-[0.85] text-white uppercase">
              LIVE STRATEGY <br className="hidden md:block" /> ENGINEERING.
            </h2>
            <p className="text-slate-500 text-lg md:text-2xl font-light tracking-tight max-w-2xl">
              Visualize the operational flow behind every high‑performance deployment.
            </p>
          </div>
          <a href="/consultation" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm md:text-base hover:text-[#00FFC2] transition-colors">
            Activate a strategy sprint <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <ProjectNexus />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Zero‑Guessing', desc: 'Every decision backed by signal and data.', icon: ShieldCheck },
            { title: 'Rapid Iteration', desc: 'Short loops that unlock momentum.', icon: Rocket },
            { title: 'Measured Lift', desc: 'Performance you can prove and scale.', icon: TrendingUp }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-xl hover:bg-white/[0.08] hover:border-[#00FFC2]/30 transition-all"
            >
              <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.35em] text-slate-400">
                <item.icon className="w-4 h-4 text-[#00FFC2]" />
                {item.title}
              </div>
              <p className="mt-3 text-slate-500 text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Strategy;
