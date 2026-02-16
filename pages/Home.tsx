import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Rocket, ShieldCheck, TrendingUp } from 'lucide-react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import ProjectNexus from '../components/IDEWorkspace';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-[#00FFC2] font-mono text-[10px] md:text-[12px] tracking-[0.6em] uppercase mb-8 block font-bold">
            Built for Advantage
          </span>
          <h2 className="text-[clamp(2.2rem,7vw,6.5rem)] font-black tracking-tighter mb-8 leading-[0.9] text-white uppercase">
            SYSTEMS THAT COMPOUND.
          </h2>
          <p className="text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed tracking-tight px-4">
            From strategy to deployment, we design a single operating system for growth—fast, measurable, and relentless.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              title: 'Strategic Intelligence',
              desc: 'Market intelligence, predictive modeling, and signal capture.',
              icon: Cpu
            },
            {
              title: 'Rapid Deployment',
              desc: 'Launch-ready stacks engineered for speed and resilience.',
              icon: Rocket
            },
            {
              title: 'Secure by Default',
              desc: 'Hardened architecture with zero‑trust principles baked in.',
              icon: ShieldCheck
            },
            {
              title: 'Growth Orchestration',
              desc: 'Automated pipelines that scale demand and conversion.',
              icon: TrendingUp
            }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 overflow-hidden transition-all hover:border-[#00FFC2]/40 hover:bg-white/[0.04]"
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
      
      <section id="strategy" className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-64">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-24 md:mb-40 text-center"
        >
          <span className="text-[#00FFC2] font-mono text-[11px] md:text-[13px] tracking-[0.6em] uppercase mb-10 block font-bold">
            The Architecture Core
          </span>
          <h2 className="text-[clamp(2.5rem,8vw,8.5rem)] font-black mb-10 tracking-tighter leading-[0.85] text-white">ENGINEERED ADVANTAGE.</h2>
          <p className="text-slate-500 text-lg md:text-3xl max-w-5xl mx-auto font-light leading-relaxed tracking-tight px-4">
            AppHub fuses <span className="text-white italic">structural engineering</span> with predictive models to create 
            zero‑latency market advantage. Precision built. Operational by design.
          </p>
        </motion.div>
        
        <ProjectNexus />
      </section>

      <section id="services" className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-64">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-24 md:mb-40 gap-8 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <h2 className="text-[clamp(2.5rem,7vw,7.5rem)] font-black tracking-tighter mb-10 leading-[0.85] text-white uppercase">UNMATCHED <br className="hidden md:block" /> OUTPUT.</h2>
            <p className="text-slate-500 text-lg md:text-2xl font-light tracking-tight max-w-2xl">
              We build systems that position you as the <span className="text-white">default choice</span> in your market. 
              Explore the stack below.
            </p>
          </div>
        </div>
        <BentoGrid />
      </section>

      <Contact />
    </>
  );
};

export default Home;
