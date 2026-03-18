import { motion } from 'motion/react';
import { Phone, MapPin, Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Forms */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-brand-pink p-3 rounded-xl mr-4">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Shop No 17, Pink Corner, Sindhi Society, Chembur, Mumbai, Maharashtra 400071
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-brand-pink p-3 rounded-xl mr-4">
                  <Phone className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <a href="tel:+919978936034" className="text-sm text-gray-500 hover:text-brand-gold transition-colors">
                    +91 9978936034
                  </a>
                </div>
              </div>
            </div>

            {/* Forms Tabs */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-brand-pink">
              <div className="flex space-x-4 mb-8">
                <h3 className="text-xl font-serif text-gray-900 border-b-2 border-brand-gold pb-2">Book Appointment / Enroll</h3>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Service / Course</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all bg-white">
                    <option>Select Option</option>
                    <optgroup label="Salon Services">
                      <option>Hair Services</option>
                      <option>Facial & Cleanup</option>
                      <option>Bridal Makeup</option>
                      <option>Waxing & Threading</option>
                    </optgroup>
                    <optgroup label="Academy Courses">
                      <option>Professional Makeup Course</option>
                      <option>Hair Styling Course</option>
                      <option>Beauty Therapist Course</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message / Preferred Date</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] lg:h-full rounded-3xl overflow-hidden shadow-lg border border-brand-pink">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.214436577366!2d72.8931118!3d19.0543162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ad8951662d%3A0x6a19f61b076398b!2sLeesara%20Salon%20and%20Academy!5e0!3m2!1sen!2sin!4v1710745924000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Leesara Salon Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
