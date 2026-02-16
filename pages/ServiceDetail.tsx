import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Rocket, ShieldCheck, TrendingUp } from 'lucide-react';
import { services } from '../data/services';
import Contact from '../components/Contact';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);
  const relatedServices = services.filter(s => s.slug !== slug).slice(0, 3);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-32 min-h-screen">
      <section className="relative max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-24 overflow-hidden">
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[90vw] h-[45vh] bg-blue-900/10 blur-[160px] opacity-50 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-0 w-[60vw] h-[40vh] bg-[#00FFC2]/10 blur-[180px] opacity-30 pointer-events-none" />
        <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#00FFC2] transition-colors mb-12 uppercase tracking-widest text-xs font-bold relative z-10">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 relative z-10">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-[#00FFC2] font-mono text-[10px] md:text-[11px] tracking-[0.6em] uppercase mb-6 block font-bold">
                  Service Protocol
                </span>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8">
                    <service.icon className={`w-8 h-8 md:w-10 md:h-10 ${service.color}`} />
                </div>
                <h1 className="text-[clamp(2rem,5vw,5rem)] font-black tracking-tighter mb-8 leading-[0.9] text-white uppercase">
                    {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-12">
                    {service.longDescription}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.details.slice(0, 4).map((detail, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[10px] md:text-[11px] font-mono uppercase tracking-[0.35em] text-slate-400">
                      {detail}
                    </span>
                  ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/[0.03] border border-white/5 rounded-3xl p-6 md:p-12 h-fit backdrop-blur-xl"
            >
                <h3 className="text-white text-xl font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
                    System Capabilities
                </h3>
                <ul className="space-y-6">
                    {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-[#00FFC2] shrink-0" />
                            <span className="text-slate-300 text-lg">{detail}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-10 grid grid-cols-2 gap-4 text-[11px] font-mono uppercase tracking-widest text-slate-500">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 text-[#00FFC2] mb-2">
                      <Rocket className="w-4 h-4" />
                      Timeline
                    </div>
                    4–8 Weeks
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 text-[#00FFC2] mb-2">
                      <ShieldCheck className="w-4 h-4" />
                      Security
                    </div>
                    Zero‑Trust
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 text-[#00FFC2] mb-2">
                      <Cpu className="w-4 h-4" />
                      Stack
                    </div>
                    AI + Growth
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 text-[#00FFC2] mb-2">
                      <TrendingUp className="w-4 h-4" />
                      Lift
                    </div>
                    3× ROI
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                    <Link to="/contact" className="block w-full py-4 bg-[#00FFC2] text-black font-black text-center uppercase tracking-widest rounded-xl hover:bg-[#00FFC2]/90 transition-colors">
                        Initiate Protocol
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#00FFC2] font-mono text-[10px] md:text-[12px] tracking-[0.6em] uppercase mb-8 block font-bold">
            Execution Sequence
          </span>
          <h2 className="text-[clamp(2.2rem,6vw,6rem)] font-black tracking-tighter mb-8 leading-[0.9] text-white uppercase">
            BUILT TO OUTRUN.
          </h2>
          <p className="text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed tracking-tight px-4">
            Signal capture, system assembly, and continuous optimization engineered for compounding advantage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Signal Mapping', desc: 'We isolate the highest‑value market signals and build a decision engine.' },
            { title: 'System Deployment', desc: 'Infrastructure, automation, and creative stacks ship fast and stable.' },
            { title: 'Compounding Growth', desc: 'Always‑on optimization loops expand efficiency and outcomes.' }
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
                <div className="text-[#00FFC2] font-mono text-[10px] tracking-[0.6em] uppercase mb-4 font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 md:mb-20 gap-8 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <h2 className="text-[clamp(2.4rem,6vw,6rem)] font-black tracking-tighter mb-8 leading-[0.85] text-white uppercase">
              RELATED <br className="hidden md:block" /> SYSTEMS.
            </h2>
            <p className="text-slate-500 text-lg md:text-2xl font-light tracking-tight max-w-2xl">
              Pair this module with adjacent systems to remove friction and accelerate performance.
            </p>
          </div>
          <Link to="/services" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm md:text-base hover:text-[#00FFC2] transition-colors">
            Explore all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((related, idx) => (
            <motion.div
              key={related.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 overflow-hidden hover:bg-white/[0.05] hover:border-[#00FFC2]/30 transition-all"
            >
              <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-[#00FFC2]/10 blur-[70px] rounded-full translate-x-1/3 -translate-y-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00FFC2]/40 transition-colors">
                    <related.icon className={`w-6 h-6 ${related.color}`} />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-[#00FFC2] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </div>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-3">{related.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{related.description}</p>
                <Link to={`/services/${related.slug}`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs hover:text-[#00FFC2] transition-colors">
                  Open module
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ServiceDetail;
