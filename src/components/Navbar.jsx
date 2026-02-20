import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#collection' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-[100] transition-all duration-500">
      <div className="bg-white/95 border-b border-primary/10 py-2">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] md:text-xs font-medium text-gray-600 tracking-wide italic">
            "This is a demo website showcasing a modern fragrance store design. Built for portfolio and client demonstration purposes."
          </p>
        </div>
      </div>
      <nav className={`transition-all duration-500 relative z-[130] ${mobileMenuOpen ? 'bg-transparent py-4' : isScrolled ? 'bg-white/95 py-3 backdrop-blur-xl shadow-lg border-b border-primary/10' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          {/* Logo */}
          <a href="#home" className={`flex flex-col items-start translate-x-0 hover:scale-105 transition-transform duration-300 origin-left group ${mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <span className="text-2xl font-serif text-primary tracking-[0.2em] font-bold leading-tight drop-shadow-sm group-hover:text-primary transition-colors">Royal Oud Fragrances</span>
            <span className="text-[10px] tracking-[0.5em] uppercase text-gray-500 font-light -mt-1 group-hover:text-primary transition-colors">F-10 Markaz, Islamabad</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#333]'}`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://wa.me/92510000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 btn-primary !py-2.5 !px-6 text-[11px] tracking-widest"
            >
              <ShoppingBag size={18} />
              <span className="font-bold">ORDER NOW</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-6">
            <a href="tel:+92510000000" className="text-primary hover:scale-110 transition-transform"><Phone size={22} /></a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`transition-colors relative ${isScrolled || mobileMenuOpen ? 'text-[#1A1A1A]' : 'text-gray-800'}`}>
              {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Menu - Moved outside nav to avoid scroll-driven style changes */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 w-full h-screen bg-white z-[120] flex flex-col items-center justify-center pt-20 space-y-10"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-serif tracking-widest text-[#1A1A1A] hover:text-primary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/92510000000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="btn-primary !px-12 !py-4 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              ORDER NOW
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
