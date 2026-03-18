import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Academy', href: '#academy' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex flex-col">
            <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              LEESARA
            </span>
            <span className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? 'text-brand-gold' : 'text-brand-pink'}`}>
              Salon & Academy
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-brand-gold' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919978936034" className={`flex items-center text-sm font-medium ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              <Phone className="w-4 h-4 mr-2 text-brand-gold" />
              +91 9978936034
            </a>
            <a href="#contact" className="btn-primary !py-2 !px-6 !text-sm">
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-900' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-pink overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-gold hover:bg-brand-pink/20 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-4 px-3">
                <a href="tel:+919978936034" className="flex items-center text-gray-700 font-medium">
                  <Phone className="w-5 h-5 mr-3 text-brand-gold" />
                  +91 9978936034
                </a>
                <a href="#contact" className="btn-primary text-center">
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
