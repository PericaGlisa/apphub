import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import Contact from '../components/Contact';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-32 min-h-screen">
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-24">
        <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#00FFC2] transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8">
                    <service.icon className={`w-8 h-8 md:w-10 md:h-10 ${service.color}`} />
                </div>
                <h1 className="text-[clamp(2rem,5vw,5rem)] font-black tracking-tighter mb-8 leading-[0.9] text-white uppercase">
                    {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-12">
                    {service.longDescription}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-12 h-fit"
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
                <div className="mt-12 pt-8 border-t border-white/10">
                    <Link to="/contact" className="block w-full py-4 bg-[#00FFC2] text-black font-black text-center uppercase tracking-widest rounded-xl hover:bg-[#00FFC2]/90 transition-colors">
                        Initiate Protocol
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ServiceDetail;
