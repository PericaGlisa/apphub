
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, ShieldCheck, Check, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    entity: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-40">
      <div className="ultra-glass rounded-[3rem] md:rounded-[5rem] overflow-hidden flex flex-col lg:flex-row border-white/5 shadow-3xl">
        <div className="flex-1 p-8 md:p-16 lg:p-24 bg-gradient-to-br from-black to-blue-950/20">
          <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 md:mb-10 leading-[0.9] text-white uppercase">ACQUIRE <br /> DOMINANCE.</h2>
          <p className="text-slate-400 text-lg md:text-2xl font-light mb-12 md:mb-20 leading-relaxed max-w-xl">
            Our typical partnership yields a 3x ROI in fiscal year one. Stop testing the waters. It's time to build the engine.
          </p>
          
          <div className="space-y-10">
            <div className="flex items-center gap-5 sm:gap-8 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shadow-inner">
                <MapPin className="text-[#00FFC2] w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">Base of Operations</div>
                <div className="text-lg sm:text-xl font-medium text-white">Business Bay, Dubai, UAE</div>
              </div>
            </div>
            <div className="flex items-center gap-5 sm:gap-8 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                <Mail className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">Strategic Inquiries</div>
                <div className="text-lg sm:text-xl font-medium text-white">hello@apphub.ae</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 md:p-16 lg:p-24 bg-white/[0.01] backdrop-blur-3xl relative">
          {isSubmitted ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="h-full flex flex-col items-center justify-center text-center py-20"
             >
               <div className="w-24 h-24 rounded-full bg-[#00FFC2]/20 flex items-center justify-center mb-8">
                 <Check className="w-12 h-12 text-[#00FFC2]" />
               </div>
               <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase">Transmission Received</h3>
               <p className="text-slate-400 text-base sm:text-xl mb-12 max-w-md">
                 Your strategic briefing has been encrypted and routed to our intake team. We will initiate contact shortly.
               </p>
               <button 
                 onClick={() => setIsSubmitted(false)}
                 className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all uppercase tracking-widest text-xs font-bold"
               >
                 Send Another Brief
               </button>
             </motion.div>
          ) : (
            <form className="space-y-8 sm:space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-4 font-bold">Principal Partner</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 sm:py-5 px-6 sm:px-8 focus:outline-none focus:border-[#00FFC2]/40 transition-all text-white placeholder:opacity-20" 
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-4 font-bold">The Entity</label>
                  <input 
                    type="text" 
                    value={formState.entity}
                    onChange={(e) => setFormState({...formState, entity: e.target.value})}
                    placeholder="Enterprise / Fund Name" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 sm:py-5 px-6 sm:px-8 focus:outline-none focus:border-[#00FFC2]/40 transition-all text-white placeholder:opacity-20" 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-4 font-bold">Direct Contact</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder="executive@company.com" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 sm:py-5 px-6 sm:px-8 focus:outline-none focus:border-[#00FFC2]/40 transition-all text-white placeholder:opacity-20" 
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 ml-4 font-bold">Strategic Briefing</label>
                <textarea 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Describe your digital infrastructure goals..." 
                  rows={4} 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 sm:py-5 px-6 sm:px-8 focus:outline-none focus:border-[#00FFC2]/40 transition-all resize-none text-white placeholder:opacity-20"
                ></textarea>
              </div>
              <button 
                disabled={isSubmitting}
                className="w-full py-5 sm:py-6 md:py-8 rounded-[2rem] bg-blue-600 text-white font-black text-base sm:text-lg md:text-xl uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-blue-500 transition-all shadow-2xl group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> INITIATING...</>
                ) : (
                  <>INITIATE SYNC <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
              <div className="flex items-center justify-center gap-3 opacity-30">
                <ShieldCheck className="w-4 h-4" />
                <p className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">Encrypted Client Data Protection</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
