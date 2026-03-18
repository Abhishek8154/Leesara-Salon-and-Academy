import { motion } from 'motion/react';
import { Star, Users, BookOpen, Award, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Experienced Trainers',
    desc: 'Learn from industry veterans with decades of collective experience.'
  },
  {
    icon: Award,
    title: 'Certified Courses',
    desc: 'Our certifications are recognized across the beauty industry.'
  },
  {
    icon: BookOpen,
    title: 'Practical Training',
    desc: '80% practical hands-on training on real models and clients.'
  },
  {
    icon: Star,
    title: 'Premium Products',
    desc: 'We use only the highest quality international beauty brands.'
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Environment',
    desc: 'Strict sanitization protocols for your safety and comfort.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-medium tracking-widest uppercase text-sm mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
              The Preferred Choice for <span className="text-brand-gold">Beauty Excellence</span>
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              At Leesara, we don't just provide services; we create experiences. Our commitment to quality and education sets us apart as a leader in the beauty industry.
            </p>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-6 border border-brand-pink">
                    <reason.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{reason.title}</h4>
                    <p className="text-gray-500">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                alt="Beauty Training"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-brand-pink hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif text-brand-gold">10+</div>
                <div className="text-sm text-gray-500 font-medium leading-tight">
                  Years of <br /> Excellence
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
