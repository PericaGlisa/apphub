import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Globe, ShieldCheck, Zap } from 'lucide-react';
import ContactSection from '../components/Contact';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen">
      <section className="relative max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-28 overflow-hidden">
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[90vw] h-[45vh] bg-blue-900/10 blur-[160px] opacity-50 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-0 w-[60vw] h-[40vh] bg-[#00FFC2]/10 blur-[180px] opacity-30 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-20 text-center relative z-10"
        >
          <span className="text-[#00FFC2] font-mono text-[11px] md:text-[13px] tracking-[0.6em] uppercase mb-10 block font-bold">
            Strategic Contact
          </span>
          <h1 className="text-[clamp(2.5rem,8vw,8.5rem)] font-black mb-10 tracking-tighter leading-[0.85] text-white uppercase">
            INITIATE <br /> THE LINK.
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed tracking-tight px-4">
            Brief us on your infrastructure, growth targets, and urgency. We respond fast, align scope, and move to execution without noise.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#00FFC2] text-black font-black uppercase tracking-widest text-sm md:text-base hover:scale-105 transition-transform shadow-[0_0_40px_rgba(0,255,194,0.3)]">
              Send Brief
            </a>
            <a href="/consultation" className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-bold uppercase tracking-widest text-sm md:text-base hover:bg-white/[0.08] transition-all">
              Book Session
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.35em] text-slate-500">
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">Response SLA: 2h</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">Senior‑Only Team</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">NDA on Request</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">Global Coverage</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            { title: 'Decision Window', value: '14 Days', icon: Clock, desc: 'From brief to launch plan.' },
            { title: 'Coverage', value: 'MENA + Global', icon: Globe, desc: 'Distributed execution footprint.' },
            { title: 'Security', value: 'Zero‑Leak', icon: ShieldCheck, desc: 'Confidentiality by default.' }
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
            Engagement Steps
          </span>
          <h2 className="text-[clamp(2.2rem,6vw,6rem)] font-black tracking-tighter mb-8 leading-[0.9] text-white uppercase">
            BRIEF. ALIGN. DEPLOY.
          </h2>
          <p className="text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed tracking-tight px-4">
            A direct line from signal capture to execution. No ambiguity, no delay.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Transmit Brief', desc: 'Send your goals, constraints, and urgency.' },
            { step: '02', title: 'Strategy Sync', desc: 'We align scope, timeline, and KPIs.' },
            { step: '03', title: 'Execution Start', desc: 'We deploy the system and measure lift.' }
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

      <ContactSection />

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Rapid Alignment', desc: 'Tight scope in 48 hours for confident execution.', icon: Zap },
            { title: 'Secure Channels', desc: 'Encrypted communication and NDA‑ready workflows.', icon: ShieldCheck },
            { title: 'Direct Access', desc: 'Senior team access from day one.', icon: ArrowRight }
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
    </div>
  );
};

export default Contact;
