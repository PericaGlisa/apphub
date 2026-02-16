import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 pt-20 md:pt-32 pb-12 md:pb-16 bg-black">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 mb-20 md:mb-32">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Link to="/">
                <img src="/logo.png" alt="AppHub.ae Logo" className="h-12 sm:h-16 md:h-24 w-auto object-contain" />
              </Link>
            </div>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 font-light max-w-xs">
              The unified digital engine for AI, development, and global marketing.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#00FFC2] transition-colors"><Instagram className="w-5 h-5 text-gray-500 hover:text-[#00FFC2] transition-colors" /></a>
              <a href="#" className="hover:text-[#00FFC2] transition-colors"><Twitter className="w-5 h-5 text-gray-500 hover:text-[#00FFC2] transition-colors" /></a>
              <a href="#" className="hover:text-[#00FFC2] transition-colors"><Linkedin className="w-5 h-5 text-gray-500 hover:text-[#00FFC2] transition-colors" /></a>
              <a href="#" className="hover:text-[#00FFC2] transition-colors"><Facebook className="w-5 h-5 text-gray-500 hover:text-[#00FFC2] transition-colors" /></a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-white mb-8">Engineering</h4>
            <ul className="space-y-4 text-base md:text-lg text-gray-500 font-light">
              <li><Link to="/services/steel-saas-stacks" className="hover:text-white transition-colors">Steel SaaS Stacks</Link></li>
              <li><Link to="/services/elite-engineering" className="hover:text-white transition-colors">Elite Engineering</Link></li>
              <li><Link to="/services/rapid-deployment" className="hover:text-white transition-colors">Rapid Deployment</Link></li>
              <li><Link to="/services/ai-automation-agents" className="hover:text-white transition-colors">AI Agent Systems</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-white mb-8">Growth</h4>
            <ul className="space-y-4 text-base md:text-lg text-gray-500 font-light">
              <li><Link to="/services/predictive-intelligence" className="hover:text-white transition-colors">Predictive Intel</Link></li>
              <li><Link to="/services/market-mastery" className="hover:text-white transition-colors">Market Mastery</Link></li>
              <li><Link to="/services/search-authority" className="hover:text-white transition-colors">Search Authority</Link></li>
              <li><Link to="/services/dominance-assets" className="hover:text-white transition-colors">Dominance Assets</Link></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-white mb-8">Connect</h4>
            <ul className="space-y-4 text-base md:text-lg text-gray-500 font-light">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/strategy" className="hover:text-white transition-colors">Strategy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/consultation" className="hover:text-white transition-colors">Consultation</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[9px] md:text-[10px] text-gray-600 font-mono tracking-widest text-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center order-1 md:order-2">
            <span className="hidden sm:inline">25.18° N, 55.27° E</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-slate-300 transition-all"
            >
              <span>Scroll to top</span>
              <span className="w-7 h-7 rounded-full flex items-center justify-center bg-[#00FFC2]/10 border border-[#00FFC2]/30 group-hover:bg-[#00FFC2]/20 transition-colors">
                <ArrowUp className="w-3.5 h-3.5 text-[#00FFC2]" />
              </span>
            </button>
          </div>
          <p className="order-2 md:order-1">© 2025 APPHUB.AE DIGITAL SOLUTIONS LLC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
