import { motion } from 'motion/react';
import { Scissors, Sparkle, Heart, UserCheck } from 'lucide-react';

const hairServices = [
  {
    title: 'Haircut & Styling',
    desc: 'Expert cuts tailored to your face shape and personal style.',
    icon: Scissors
  },
  {
    title: 'Hair Spa',
    desc: 'Deep conditioning treatments to restore shine and health.',
    icon: Sparkle
  },
  {
    title: 'Hair Treatments',
    desc: 'Keratin, Smoothening, and specialized scalp care.',
    icon: Heart
  }
];

const beautyServices = [
  {
    title: 'Facial & Cleanup',
    desc: 'Premium skin treatments for a radiant and glowing complexion.',
    icon: Sparkle
  },
  {
    title: 'Waxing & Threading',
    desc: 'Precise and gentle hair removal services for smooth skin.',
    icon: Scissors
  },
  {
    title: 'Manicure & Pedicure',
    desc: 'Relaxing hand and foot care with premium products.',
    icon: Heart
  },
  {
    title: 'Bridal Makeup',
    desc: 'Exquisite makeup looks for your most special day.',
    icon: UserCheck
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Our Expertise</span>
          <h2 className="section-title">Salon Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Experience luxury and pampering with our wide range of professional beauty and hair services.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-serif text-gray-900 mb-8 border-l-4 border-brand-gold pl-4">Hair Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hairServices.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-gray-900 mb-8 border-l-4 border-brand-gold pl-4">Beauty Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beautyServices.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            View Full Menu & Book
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, icon: Icon, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-pink"
    >
      <div className="w-14 h-14 bg-brand-pink rounded-full flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-brand-gold" />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
