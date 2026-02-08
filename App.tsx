import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Strategy from './pages/Strategy';
import Contact from './pages/Contact';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';
import Consultation from './pages/Consultation';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative selection:bg-[#00FFC2]/30 bg-[#050505]">
        {/* Background System - Dark & Technical */}
        <div className="fixed inset-0 -z-50 pointer-events-none">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[100vh] bg-blue-950/10 blur-[200px]" />
        </div>

        <Navbar scrolled={scrolled} />

        <main className="relative z-10 w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/consultation" element={<Consultation />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
