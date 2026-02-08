
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Activity, 
  TrendingUp, 
  Cpu, 
  Palette, 
  Code2, 
  ShieldCheck, 
  Video, 
  Layers,
  Server
} from 'lucide-react';

const ProjectNexus: React.FC = () => {
  const [activeStage, setActiveStage] = useState('Intelligence');
  const [isProcessing, setIsProcessing] = useState(false);
  const [logs, setLogs] = useState<{msg: string, type: 'status' | 'exec' | 'success'}[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const stages = [
    { id: 'Intelligence', icon: Cpu, color: 'text-blue-500', label: 'Market Intel' },
    { id: 'Creative', icon: Palette, color: 'text-slate-400', label: 'Asset Architecture' },
    { id: 'Engineering', icon: Code2, color: 'text-[#00FFC2]', label: 'Core Deployment' },
    { id: 'Growth', icon: TrendingUp, color: 'text-blue-600', label: 'ROI Orchestration' },
  ];

  const runProjectFlow = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setLogs([]);
    
    const sequence = [
      { stage: 'Intelligence', msg: "INIT: Market saturation analysis complete.", type: 'status' },
      { stage: 'Intelligence', msg: "Intel: High-intent clusters identified in UAE region.", type: 'status' },
      { stage: 'Creative', msg: "Design: Engineering 8K visual dominance assets.", type: 'exec' },
      { stage: 'Engineering', msg: "Code: Compiling zero-latency cloud infrastructure.", type: 'exec' },
      { stage: 'Engineering', msg: "Success: Production environment synchronized.", type: 'success' },
      { stage: 'Growth', msg: "Ads: Precision Google targeting active. CPC optimized.", type: 'status' },
      { stage: 'Growth', msg: "Outcome: ROI projection 4.2x. Scaling verified.", type: 'success' },
    ];

    for (const step of sequence) {
      setActiveStage(step.stage);
      await new Promise(r => setTimeout(r, 700));
      setLogs(prev => [...prev, { msg: step.msg, type: step.type as any }]);
    }
    setIsProcessing(false);
  };

  return (
    <div className="w-full min-h-[800px] h-auto spotlight-card rounded-[2rem] md:rounded-[5rem] overflow-hidden flex flex-col relative shadow-3xl bg-[#08090C]">
      {/* Engineering Header */}
      <div className="h-auto py-6 md:py-0 md:h-24 bg-white/[0.02] border-b border-white/5 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 z-20 gap-6 md:gap-0">
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-800" />
            <div className="w-3 h-3 rounded-full bg-slate-800" />
            <div className="w-3 h-3 rounded-full bg-slate-800" />
          </div>
          <div className="px-4 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[9px] font-mono text-blue-500 uppercase tracking-widest font-bold">
            APPHUB_GROWTH_ENGINE
          </div>
        </div>

        <button 
          onClick={runProjectFlow}
          disabled={isProcessing}
          className="w-full md:w-auto flex items-center justify-center gap-4 px-8 py-3 md:px-10 md:py-4 rounded-xl bg-[#00FFC2] text-black text-[10px] md:text-[11px] font-black tracking-widest transition-all disabled:opacity-50 uppercase hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,194,0.3)]"
        >
          {isProcessing ? <Activity className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
          <span>{isProcessing ? "SYNCHRONIZING..." : "EXECUTE_DEPLOY"}</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Navigation Sidebar */}
        <div className="w-full lg:w-28 border-b lg:border-b-0 lg:border-r border-white/5 flex lg:flex-col items-center justify-around py-6 lg:py-16 bg-black/40 gap-4 lg:gap-0 overflow-x-auto">
          {stages.map((stage) => (
            <div 
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`relative cursor-pointer transition-all duration-300 p-2 ${activeStage === stage.id ? 'scale-110 lg:scale-125 opacity-100' : 'opacity-40 hover:opacity-100'}`}
            >
              <stage.icon className={`w-6 h-6 lg:w-7 lg:h-7 ${stage.color}`} />
              {activeStage === stage.id && (
                <div className="absolute -inset-2 lg:-inset-4 border border-white/10 rounded-xl lg:rounded-2xl -z-10 bg-white/5" />
              )}
            </div>
          ))}
        </div>

        {/* Display Core */}
        <div className="flex-1 flex flex-col bg-black/20 min-h-0">
          <div className="flex-1 relative p-6 md:p-20 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full h-full flex flex-col"
              >
                <div className="mb-8 md:mb-12">
                  <h4 className="text-slate-600 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] mb-3">Module Telemetry</h4>
                  <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-white uppercase">{activeStage}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 flex-1 content-start md:content-stretch">
                  <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center items-center text-center hover:bg-white/[0.04] transition-colors">
                    <div className="text-[9px] md:text-[10px] font-mono text-slate-600 uppercase mb-4 md:mb-6 tracking-widest">Efficiency Rating</div>
                    <div className="text-6xl md:text-9xl font-black text-white mb-2 italic tracking-tighter">
                      {activeStage === 'Growth' ? '98%' : 'MAX'}
                    </div>
                    <div className="text-[10px] md:text-[11px] text-[#00FFC2] font-bold uppercase tracking-widest bg-[#00FFC2]/10 px-4 py-1 rounded-full">Optimal Throughput</div>
                  </div>

                  <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center hover:bg-white/[0.04] transition-colors">
                    <div className="space-y-8 md:space-y-10">
                      {['Structural Integrity', 'Performance Yield'].map((item) => (
                        <div key={item} className="space-y-3 md:space-y-4">
                          <div className="flex justify-between text-[9px] md:text-[10px] font-bold uppercase text-slate-500 tracking-widest">
                            <span>{item}</span>
                            <span className="text-[#00FFC2] flex items-center gap-1">
                              <ShieldCheck className="w-3 h-3" /> VERIFIED
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ duration: 1, ease: "circOut" }}
                              className="h-full bg-gradient-to-r from-blue-600 to-[#00FFC2] w-full" 
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Telemetry Log */}
        <div className="w-full lg:w-[450px] h-[300px] lg:h-auto border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col bg-black/60 backdrop-blur-3xl">
          <div className="p-6 md:p-10 border-b border-white/5 flex justify-between items-center">
            <span className="text-[10px] md:text-[11px] font-black tracking-[0.5em] uppercase text-slate-500">Execution Telemetry</span>
            <div className="flex gap-1.5">
               <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
               <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
               <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
            </div>
          </div>
          
          <div ref={scrollRef} className="flex-1 p-6 md:p-10 font-mono text-[11px] md:text-[13px] overflow-auto space-y-4 md:space-y-6 hide-scrollbar bg-black/40">
            {logs.map((log, i) => (
              <div key={i} className={`flex gap-4 md:gap-5 ${log.type === 'success' ? 'text-[#00FFC2]' : 'text-slate-500'} border-l-2 ${log.type === 'success' ? 'border-[#00FFC2]' : 'border-transparent'} pl-3`}>
                <span className="opacity-30 select-none">{i.toString().padStart(2, '0')}</span>
                <span className="leading-relaxed uppercase tracking-tight break-words">{log.msg}</span>
              </div>
            ))}
            {logs.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center opacity-10 text-[10px] uppercase tracking-[0.5em] gap-4">
                <Server className="w-8 h-8" />
                <span>SYSTEM_IDLE</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNexus;
