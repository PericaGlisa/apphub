
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Layers, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const yBg = useTransform(scrollY, [0, 600], [0, 150]);

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* PROFESSIONAL BACKGROUND SYSTEM */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90vw] h-[50vh] bg-blue-900/10 blur-[150px] opacity-40" />
        <div className="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,black,transparent)]" 
             style={{ 
               backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
               backgroundSize: '100px 100px',
             }} 
        />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full max-w-[1600px] px-6 md:px-12 flex flex-col items-center text-center
                   py-[clamp(14rem,28vh,35rem)] md:py-[clamp(20rem,35vh,45rem)]"
      >
        {/* Authority Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl mb-12"
        >
          <ShieldCheck className="w-4 h-4 text-[#00FFC2]" />
          <span className="text-[10px] md:text-[11px] font-mono text-slate-400 uppercase tracking-[0.4em] font-bold">
            AppHub Core: Tactical Supremacy
          </span>
          <div className="w-[1px] h-3 bg-white/20" />
          <span className="text-[10px] text-[#00FFC2] font-bold uppercase tracking-widest">ROI Focused</span>
        </motion.div>

        {/* Precise High-Impact Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(3.5rem,11vw,10.5rem)] font-black tracking-tight leading-[0.85] mb-12 md:mb-16 text-white uppercase"
        >
          WE SHIP <br />
          <span className="apphub-gradient-text italic">THE JUICE.</span>
        </motion.h1>

        {/* Sharp Professional Copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl text-slate-400 max-w-5xl mb-16 md:mb-24 font-light leading-relaxed tracking-tight px-4"
        >
          Stop hiring "mid" agencies. We are the <span className="text-white font-semibold italic">Giga-brained engineering elite</span>. 
          We deploy cracked <span className="text-blue-500 font-semibold italic">SaaS Stacks</span> and data-driven 
          dominance engines that print. Real engineering. No fluff. No cap.
        </motion.p>

        {/* Reliable CTA Cluster */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full sm:w-auto"
        >
          <Link to="/consultation" className="w-full sm:w-auto group relative px-12 py-7 rounded-2xl bg-[#00FFC2] text-black font-black text-xl md:text-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(0,255,194,0.3)]">
            SCALE NOW <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/services" className="w-full sm:w-auto px-12 py-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all text-xl md:text-2xl font-bold flex items-center justify-center gap-4 text-white uppercase tracking-tighter">
            <Layers className="w-6 h-6 text-blue-500" /> 
            <span>Peep the Stack</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
