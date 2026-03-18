import { Instagram, Facebook, Twitter, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-serif font-bold text-white">
                LEESARA
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gold">
                Salon & Academy
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Your premier destination for luxury beauty services and professional academy training in Chembur, Mumbai. We transform looks and build careers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-brand-gold/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Salon Services</a></li>
              <li><a href="#academy" className="hover:text-brand-gold transition-colors">Beauty Academy</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-brand-gold/30 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Haircut & Styling</li>
              <li>Professional Makeup</li>
              <li>Skin Care & Facials</li>
              <li>Bridal Packages</li>
              <li>Academy Courses</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-brand-gold/30 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0" />
                <span>Shop No 17, Pink Corner, Sindhi Society, Chembur, Mumbai - 400071</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0" />
                <a href="tel:+919978936034" className="hover:text-brand-gold transition-colors">+91 9978936034</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@leesara.com" className="hover:text-brand-gold transition-colors">info@leesara.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 Leesara Salon and Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
