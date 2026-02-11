import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Globe, Menu, X, Zap, Users, Layers, Cpu, ChevronRight, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { services } from '../data/services';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (isMobileMenuOpen || isServicesOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isServicesOpen]);

  // Close services menu when location changes
  useEffect(() => {
    setIsServicesOpen(false);
  }, [location]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -50 },
    open: { opacity: 1, x: 0 }
  };

  const menuItems = [
    { path: '/', label: 'Home', icon: Zap, color: 'text-white' },
    { path: '/about', label: 'About', icon: Users, color: 'text-white' },
    { path: '/services', label: 'Services', icon: Layers, color: 'text-white' },
    { path: '/strategy', label: 'Strategy', icon: Cpu, color: 'text-white' },
    { path: '/consultation', label: 'Engage', icon: Send, color: 'text-white' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isServicesOpen ? 'py-4 bg-black/80 backdrop-blur-2xl border-b border-white/5' : 'py-6 md:py-10'}`}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between relative z-50">
          <div className="flex items-center gap-6 md:gap-12">
            <Link to="/" onClick={closeMenu} className="z-50 relative">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <img src="/logo.png" alt="AppHub.ae Logo" className="h-24 w-auto object-contain" />
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                <Link 
                  to="/services" 
                  className={`transition-colors ${isServicesOpen ? 'text-[#00FFC2]' : 'hover:text-white'}`}
                >
                  Services
                </Link>
              </div>

              <Link to="/strategy" className="hover:text-white transition-colors">Strategy</Link>
              <Link to="/consultation" className="hover:text-white transition-colors">Engage</Link>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <button className="hidden sm:flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all text-[9px] md:text-[11px] font-bold uppercase tracking-widest">
              <Globe className="w-4 h-4" />
              <span className="hidden md:inline">Middle East HQ</span>
            </button>
            <Link to="/contact" className="hidden sm:flex items-center gap-2 md:gap-3 px-5 md:px-8 py-2.5 md:py-3.5 rounded-2xl bg-[#00FFC2] text-black text-[9px] md:text-[11px] font-black uppercase tracking-widest shadow-[0_0_30px_rgba(0,255,194,0.2)] hover:scale-105 transition-transform">
              <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>Contact</span>
            </Link>
            <button className="lg:hidden p-2 text-gray-400 z-50 relative" onClick={toggleMenu}>
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 shadow-2xl z-40 max-h-[calc(100vh-100px)] overflow-y-auto"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                onClick={() => setIsServicesOpen(false)}
                className="absolute top-2 right-4 p-2 text-slate-400 hover:text-white transition-colors z-50"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="max-w-[1600px] mx-auto px-12 py-12 relative">
                <div className="grid grid-cols-12 gap-12">
                  <div className="col-span-3">
                    <span className="text-[#00FFC2] font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Our Capabilities</span>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Engineered<br/>Dominance</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                      We don't just build software; we architect market advantages using military-grade infrastructure and predictive data modeling.
                    </p>
                    <Link 
                      to="/services" 
                      className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-[#00FFC2] transition-colors group"
                    >
                      View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="col-span-9 grid grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                      <Link 
                        key={idx} 
                        to={`/services/${service.slug}`}
                        className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-[#00FFC2]/30 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl bg-white/5 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                            <service.icon className="w-6 h-6" />
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-[#00FFC2] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                        </div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2 group-hover:text-[#00FFC2] transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#08090C] z-[60] flex flex-col pt-32 px-6 lg:hidden overflow-y-auto"
          >
            <button
              onClick={closeMenu}
              className="fixed top-6 right-6 p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors z-[70]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FFC2]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <nav className="flex flex-col gap-6 relative z-10">
              {menuItems.map((item) => (
                <motion.div key={item.path} variants={itemVariants}>
                  <Link 
                    to={item.path} 
                    onClick={closeMenu}
                    className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-white/5 ${item.path === '/contact' ? 'text-[#00FFC2]' : 'text-slate-400'} group-hover:text-white transition-colors`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className={`text-2xl font-black uppercase tracking-tight ${item.color} group-hover:translate-x-2 transition-transform duration-300`}>
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-[#00FFC2] transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div variants={itemVariants} className="mt-auto mb-12 relative z-10">
               <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-bold mb-2">Need immediate assistance?</h4>
                  <p className="text-slate-400 text-sm mb-6">Our support team is available 24/7 for critical infrastructure issues.</p>
                  <a href="mailto:support@apphub.ae" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-colors">
                    Contact Support
                  </a>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
