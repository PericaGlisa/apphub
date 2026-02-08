import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, ArrowRight, Check, Loader2 } from 'lucide-react';

const Consultation: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    topic: 'Strategic Partnership',
    timeframe: ''
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
    <div className="pt-32 min-h-screen">
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 md:mb-32 text-center"
        >
          <span className="text-[#00FFC2] font-mono text-[11px] md:text-[13px] tracking-[0.6em] uppercase mb-10 block font-bold">
            High-Level Access
          </span>
          <h1 className="text-[clamp(2.5rem,7vw,7rem)] font-black mb-10 tracking-tighter leading-[0.85] text-white uppercase">
            Strategic <br /> Consultation.
          </h1>
          <p className="text-slate-500 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed tracking-tight px-4">
            Secure a dedicated session with our senior engineers and strategists. We dissect your current infrastructure and map the path to market dominance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Info & Value Prop */}
          <div className="space-y-16">
            <div className="bg-white/[0.03] border border-white/5 rounded-[2rem] p-10 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">What to Expect</h3>
              <ul className="space-y-8">
                {[
                  { title: "Deep-Dive Audit", desc: "Full analysis of your current tech stack and market positioning." },
                  { title: "Roadmap Architecture", desc: "Concrete steps to scale from MVP to market leader." },
                  { title: "ROI Projection", desc: "Data-backed estimation of potential returns." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-[#00FFC2]/10 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-[#00FFC2]" />
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-600/10 border border-blue-500/20 rounded-[2rem] p-10">
              <div className="flex items-center gap-4 mb-4 text-blue-400 font-mono text-xs uppercase tracking-widest">
                <Clock className="w-4 h-4" />
                <span>Session Duration</span>
              </div>
              <p className="text-white text-3xl md:text-4xl font-black tracking-tight mb-2">45 - 90 Minutes</p>
              <p className="text-blue-200/60">Depending on project complexity.</p>
            </div>
          </div>

          {/* Right Column: Booking Form/Calendar Placeholder */}
          <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-3xl relative overflow-hidden">
            <div className="flex items-center gap-4 mb-10">
              <Calendar className="w-6 h-6 text-[#00FFC2]" />
              <h3 className="text-2xl font-bold text-white tracking-tight">Request Session</h3>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center flex flex-col items-center justify-center h-full"
              >
                <div className="w-20 h-20 rounded-full bg-[#00FFC2]/20 flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-[#00FFC2]" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase">Request Confirmed</h3>
                <p className="text-slate-400 text-lg mb-8 max-w-md">
                  Your briefing has been routed to our strategy team. Expect a calendar invite within 2 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#00FFC2] font-mono text-sm uppercase tracking-widest hover:text-white transition-colors"
                >
                  Submit New Request
                </button>
              </motion.div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold ml-2">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-[#00FFC2]/50 text-white transition-all" 
                    placeholder="Enter your name" 
                  />
                </div>
                
                <div className="space-y-4">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold ml-2">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-[#00FFC2]/50 text-white transition-all" 
                    placeholder="work@email.com" 
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold ml-2">Topic</label>
                  <div className="relative">
                    <select 
                      value={formState.topic}
                      onChange={(e) => setFormState({...formState, topic: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-[#00FFC2]/50 text-white transition-all appearance-none cursor-pointer"
                    >
                      <option style={{ backgroundColor: '#0A0A0A' }} value="Strategic Partnership">Strategic Partnership</option>
                      <option style={{ backgroundColor: '#0A0A0A' }} value="Technical Audit">Technical Audit</option>
                      <option style={{ backgroundColor: '#0A0A0A' }} value="Growth Hacking">Growth Hacking</option>
                      <option style={{ backgroundColor: '#0A0A0A' }} value="Other">Other</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight className="w-4 h-4 text-slate-500 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold ml-2">Preferred Timeframe</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      type="button"
                      onClick={() => setFormState({...formState, timeframe: 'This Week'})}
                      className={`py-4 rounded-xl border transition-all text-sm font-medium flex items-center justify-center gap-2 ${
                        formState.timeframe === 'This Week' 
                          ? 'bg-[#00FFC2]/10 border-[#00FFC2] text-[#00FFC2]' 
                          : 'border-white/10 hover:bg-white/5 hover:border-[#00FFC2]/30 text-slate-400 hover:text-white'
                      }`}
                    >
                      {formState.timeframe === 'This Week' && <Check className="w-4 h-4" />}
                      This Week
                    </button>
                    <button 
                      type="button"
                      onClick={() => setFormState({...formState, timeframe: 'Next Week'})}
                      className={`py-4 rounded-xl border transition-all text-sm font-medium flex items-center justify-center gap-2 ${
                        formState.timeframe === 'Next Week' 
                          ? 'bg-[#00FFC2]/10 border-[#00FFC2] text-[#00FFC2]' 
                          : 'border-white/10 hover:bg-white/5 hover:border-[#00FFC2]/30 text-slate-400 hover:text-white'
                      }`}
                    >
                      {formState.timeframe === 'Next Week' && <Check className="w-4 h-4" />}
                      Next Week
                    </button>
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-6 rounded-xl bg-[#00FFC2] text-black font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#00E6AF] transition-all mt-8 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                  ) : (
                    <>Confirm Request <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
