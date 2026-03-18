import { motion } from 'motion/react';
import { GraduationCap, Clock, Award, CheckCircle } from 'lucide-react';

const courses = [
  {
    title: 'Professional Makeup Course',
    duration: '3 Months',
    desc: 'Master the art of makeup from basic to advanced bridal and editorial looks.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Hair Styling Course',
    duration: '2 Months',
    desc: 'Learn professional hair cutting, coloring, and advanced styling techniques.',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Beauty Therapist Course',
    duration: '4 Months',
    desc: 'Comprehensive training in skin care, facials, and body treatments.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Bridal Makeup Training',
    duration: '1 Month',
    desc: 'Specialized intensive course focusing on traditional and modern bridal looks.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Academy() {
  return (
    <section id="academy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Career in Beauty</span>
          <h2 className="section-title">Beauty Academy</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Start your journey to becoming a certified beauty professional with our hands-on training programs.
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold animate-pulse">
            Limited Seats Available for Next Batch!
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-brand-pink"
            >
              <div className="md:w-2/5 relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                  {course.duration}
                </div>
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {course.desc}
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-brand-gold mr-2" />
                      Certified Certification
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-brand-gold mr-2" />
                      Practical Hands-on Training
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-brand-gold mr-2" />
                      Industry Expert Trainers
                    </li>
                  </ul>
                </div>
                <a href="#contact" className="btn-secondary !py-2 text-center text-sm">
                  Enroll Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-brand-gold rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl font-serif mb-4">Ready to Start Your Career?</h3>
              <p className="text-white/80">
                Join our academy today and learn from the best in the industry. We provide 100% practical training and job assistance.
              </p>
            </div>
            <a href="#contact" className="bg-white text-brand-gold px-10 py-4 rounded-full font-bold hover:bg-brand-pink transition-colors">
              Get Course Details
            </a>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
