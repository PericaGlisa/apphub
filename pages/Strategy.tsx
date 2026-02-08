import React from 'react';
import { motion } from 'framer-motion';
import ProjectNexus from '../components/IDEWorkspace';
import Contact from '../components/Contact';

const Strategy: React.FC = () => {
  return (
    <div className="pt-32">
       <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-24">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-24 md:mb-40 text-center"
        >
          <span className="text-[#00FFC2] font-mono text-[11px] md:text-[13px] tracking-[0.6em] uppercase mb-10 block font-bold">
            The Architecture Core
          </span>
          <h1 className="text-[clamp(2.5rem,8vw,8.5rem)] font-black mb-10 tracking-tighter leading-[0.85] text-white">STRATEGIC CORE.</h1>
          <p className="text-slate-500 text-lg md:text-3xl max-w-5xl mx-auto font-light leading-relaxed tracking-tight px-4">
             Explore our proprietary methodology for identifying and executing high-value market opportunities.
          </p>
        </motion.div>
        
        <ProjectNexus />
      </section>
      <Contact />
    </div>
  );
};

export default Strategy;
