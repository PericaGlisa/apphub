import React from 'react';
import { motion } from 'framer-motion';
import BentoGrid from '../components/BentoGrid';
import Contact from '../components/Contact';

const Services: React.FC = () => {
  return (
    <div className="pt-32">
       <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-24">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-24 md:mb-40 gap-8 text-center lg:text-left">
            <div className="max-w-4xl mx-auto lg:mx-0">
               <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#00FFC2] font-mono text-[11px] md:text-[13px] tracking-[0.6em] uppercase mb-10 block font-bold"
               >
                  Our Capabilities
               </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[clamp(2.5rem,7vw,7.5rem)] font-black tracking-tighter mb-10 leading-[0.85] text-white uppercase"
              >
                FULL STACK <br className="hidden md:block" /> DOMINANCE.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-lg md:text-2xl font-light tracking-tight max-w-2xl"
              >
                From structural engineering to market prediction, our stack is built to kill latency and maximize impact.
              </motion.p>
            </div>
          </div>
          <BentoGrid />
        </section>
        <Contact />
    </div>
  );
};

export default Services;
