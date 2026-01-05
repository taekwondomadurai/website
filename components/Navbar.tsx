import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';
import WhatsAppButton from './WhatsAppButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section
      const sections = NAV_ITEMS.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4 lg:py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Area */}
        <a
          href="#home"
          className="flex items-center cursor-pointer group select-none active:scale-95 transition-transform duration-200"
        >
          <div className="mr-2 md:mr-4 flex items-center gap-2 md:gap-3 transition-transform duration-300 group-hover:scale-105 origin-left">
            <img src="/images/logo.png" alt="Taekwondo Madurai" className="h-8 md:h-12 w-auto object-contain" />
            <h1 className={`font-heading font-bold text-xl md:text-3xl uppercase leading-none tracking-tight ${scrolled ? 'text-secondary' : 'text-white drop-shadow-md'}`}>
              Taekwondo <span className="text-primary">Madurai</span>
            </h1>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
                group relative px-5 py-2 font-heading font-bold text-lg uppercase tracking-wider transition-all duration-300 rounded-sm
                hover:scale-105 hover:drop-shadow-md active:scale-95
                ${activeSection === item.id
                  ? (scrolled ? 'text-primary' : 'text-white')
                  : (scrolled ? 'text-zinc-600 hover:text-black' : 'text-zinc-200 hover:text-white')}
              `}
            >
              <span className="relative z-10">{item.label}</span>

              {/* Animated Bottom Border */}
              <span className={`absolute bottom-0 left-0 h-1 bg-primary rounded-t-sm transition-all duration-300 ease-out transform origin-left
                ${activeSection === item.id ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}
              `}></span>
            </a>
          ))}

          <div className="ml-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl rounded-md">
            <WhatsAppButton variant="primary" message="Hi, I want to join a class.">
              Join Now
            </WhatsAppButton>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="bg-primary p-2.5 rounded-full text-white shadow-lg animate-pulse hover:animate-none transition-transform active:scale-95"
            aria-label="Call Now"
          >
            <Phone size={20} />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 focus:outline-none transition-transform duration-300 transform active:scale-90 ${isOpen ? 'rotate-90' : ''} ${scrolled ? 'text-secondary' : 'text-white'}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white absolute top-full left-0 w-full shadow-2xl border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col py-6 px-6 space-y-3">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className={`
                     font-heading text-2xl uppercase tracking-wide flex justify-between items-center group p-3 rounded-lg transition-all duration-200 ease-out transform active:scale-95
                     ${activeSection === item.id
                      ? 'text-primary bg-red-50 border-l-4 border-primary pl-3'
                      : 'text-zinc-600 hover:text-primary hover:bg-gray-50 hover:pl-5'}
                  `}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.1 }}
                className="pt-6 pb-4"
              >
                <WhatsAppButton
                  variant="primary"
                  className="w-full justify-center shadow-red-200 shadow-lg py-4 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Book Free Trial
                </WhatsAppButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;