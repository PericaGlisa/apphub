import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {services.map((feature, idx) => (
        <Link 
          to={`/services/${feature.slug}`} 
          key={idx}
          className="group block h-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative h-full bg-[#0A0A0A] border border-white/5 hover:border-[#00FFC2]/50 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:bg-white/[0.03] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[#00FFC2]/10 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-start justify-between mb-6 relative z-10">
              <div className={`p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00FFC2]/30 transition-colors`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <div className="flex items-center gap-2 text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                <Activity className="w-3 h-3 text-[#00FFC2]" />
                <span>SYS_{idx + 1}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-tight group-hover:text-[#00FFC2] transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-slate-500 text-sm leading-relaxed font-light mb-8 flex-grow line-clamp-3">
              {feature.description}
            </p>
            
            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
              <span className="flex items-center gap-2">
                 <ShieldCheck className="w-3 h-3 text-[#00FFC2]" />
                 Verified
              </span>
              <ChevronRight className="w-4 h-4 text-[#00FFC2] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default BentoGrid;
