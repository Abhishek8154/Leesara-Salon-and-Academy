import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Salon Client',
    content: 'The best hair spa experience I have ever had! The staff is so professional and the environment is extremely relaxing. Highly recommended!',
    rating: 5
  },
  {
    name: 'Anjali Gupta',
    role: 'Academy Student',
    content: 'Joining the Professional Makeup Course at Leesara was the best decision for my career. The hands-on training is exceptional.',
    rating: 5
  },
  {
    name: 'Sneha Patil',
    role: 'Salon Client',
    content: 'I got my bridal makeup done here and I felt like a princess. They understood exactly what I wanted. Thank you Leesara team!',
    rating: 5
  },
  {
    name: 'Rahul Verma',
    role: 'Academy Student',
    content: 'The hair styling course is very comprehensive. The trainers are patient and explain every technique in detail.',
    rating: 4
  },
  {
    name: 'Meera Deshmukh',
    role: 'Salon Client',
    content: 'Clean, hygienic, and premium services. I visit every month for my facials and the results are always amazing.',
    rating: 5
  },
  {
    name: 'Kavita Nair',
    role: 'Academy Student',
    content: 'I am now working as a professional makeup artist thanks to the certification and training I received here.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-pink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Happy Clients & Students</span>
          <h2 className="section-title">Testimonials</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-pink relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-brand-pink/30" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-brand-gold fill-brand-gold' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center text-brand-gold font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <span className="text-xs text-brand-gold uppercase font-medium tracking-wider">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
