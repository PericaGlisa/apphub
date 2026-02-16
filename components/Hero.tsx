
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
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[92vw] h-[55vh] bg-blue-900/10 blur-[160px] opacity-40" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[85vw] h-[45vh] bg-[#00FFC2]/10 blur-[180px] opacity-30" />
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-12 shadow-[0_0_30px_rgba(0,255,194,0.08)]"
        >
          <ShieldCheck className="w-4 h-4 text-[#00FFC2]" />
          <span className="text-[10px] md:text-[11px] font-mono text-slate-400 uppercase tracking-[0.4em] font-bold">
            AppHub Core: Tactical Supremacy
          </span>
          <div className="w-[1px] h-3 bg-white/20" />
          <span className="text-[10px] text-[#00FFC2] font-bold uppercase tracking-widest">ROI Focused</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(3.5rem,11vw,10.5rem)] font-black tracking-tight leading-[0.85] mb-12 md:mb-16 text-white uppercase"
        >
          ENGINEER <br />
          <span className="apphub-gradient-text italic">MARKET DOMINANCE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl text-slate-400 max-w-5xl mb-16 md:mb-20 font-light leading-relaxed tracking-tight px-4"
        >
          AppHub builds AI-first infrastructure and full‑stack growth systems that compound. 
          We combine <span className="text-white font-semibold italic">engineering rigor</span> with{' '}
          <span className="text-blue-500 font-semibold italic">predictive intelligence</span> to turn strategy into measurable lift.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full sm:w-auto"
        >
          <Link to="/consultation" className="w-full sm:w-auto group relative px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 rounded-2xl bg-[#00FFC2] text-black font-black text-base sm:text-xl md:text-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(0,255,194,0.3)]">
            START THE BUILD <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/services" className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all text-base sm:text-xl md:text-2xl font-bold flex items-center justify-center gap-4 text-white uppercase tracking-tighter">
            <Layers className="w-6 h-6 text-blue-500" /> 
            <span>Explore the Stack</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 md:mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left backdrop-blur-xl">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.35em] text-slate-400">
              <Rocket className="w-4 h-4 text-[#00FFC2]" />
              Deployment Velocity
            </div>
            <div className="mt-4 text-2xl md:text-3xl font-black text-white uppercase tracking-tight">6–8 Weeks</div>
            <p className="mt-2 text-slate-500 text-sm md:text-base">From kickoff to live growth systems.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left backdrop-blur-xl">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.35em] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#00FFC2]" />
              Enterprise Grade
            </div>
            <div className="mt-4 text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Secure by Design</div>
            <p className="mt-2 text-slate-500 text-sm md:text-base">Hardened stack with zero‑trust posture.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left backdrop-blur-xl">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.35em] text-slate-400">
              <Layers className="w-4 h-4 text-[#00FFC2]" />
              Full‑Stack Growth
            </div>
            <div className="mt-4 text-2xl md:text-3xl font-black text-white uppercase tracking-tight">One System</div>
            <p className="mt-2 text-slate-500 text-sm md:text-base">Product, data, and demand unified.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-3 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.35em] text-slate-500"
        >
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">AI Infrastructure</span>
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">Predictive Analytics</span>
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">Growth Systems</span>
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">Global Marketing</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
