import { motion } from 'motion/react';
import { Award, Users, Sparkles, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: 'Professional Experts',
    desc: 'Our team consists of highly skilled beauty professionals with years of industry experience.'
  },
  {
    icon: Award,
    title: 'Certified Programs',
    desc: 'Gain globally recognized certifications that jumpstart your professional beauty career.'
  },
  {
    icon: Sparkles,
    title: 'Modern Equipment',
    desc: 'We use the latest beauty technology and premium products for all our services and training.'
  },
  {
    icon: ShieldCheck,
    title: 'Trusted in Chembur',
    desc: 'The most preferred destination for beauty services and professional training in Chembur.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
                alt="Salon Training"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-brand-pink rounded-2xl -z-0 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-brand-gold rounded-2xl -z-0 hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-medium tracking-widest uppercase text-sm mb-4 block">
              About Leesara
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              Where Beauty Meets <span className="italic">Professionalism</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Leesara Salon and Academy is a premier beauty destination in Chembur, Mumbai. We pride ourselves on offering a unique blend of luxury salon services and high-quality professional training. 
            </p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Whether you're looking for a transformative beauty experience or aiming to master the art of beauty, our expert trainers and stylists are here to guide you every step of the way.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-brand-pink p-3 rounded-xl mr-4">
                    <item.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
