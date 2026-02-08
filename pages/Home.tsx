import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import ProjectNexus from '../components/IDEWorkspace';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
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
          <h2 className="text-[clamp(2.5rem,8vw,8.5rem)] font-black mb-10 tracking-tighter leading-[0.85] text-white">PROVEN ALPHA.</h2>
          <p className="text-slate-500 text-lg md:text-3xl max-w-5xl mx-auto font-light leading-relaxed tracking-tight px-4">
            Watch the process. Our AppHub core fuses <span className="text-white italic">structural engineering</span> with 
            predictive models to build zero-latency market advantages. No fluff. Just results.
          </p>
        </motion.div>
        
        <ProjectNexus />
      </section>

      <section id="services" className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-64">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-24 md:mb-40 gap-8 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <h2 className="text-[clamp(2.5rem,7vw,7.5rem)] font-black tracking-tighter mb-10 leading-[0.85] text-white uppercase">UNMATCHED <br className="hidden md:block" /> OUTPUT.</h2>
            <p className="text-slate-500 text-lg md:text-2xl font-light tracking-tight max-w-2xl">
              We aren't here to make friends. We're here to make you the <span className="text-white">Main Character</span> of your market. 
              Peep the stack below.
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
