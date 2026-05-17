
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Desai',
      service: 'Premium Car Wash',
      text: 'Absolutely fantastic! They came to my office and washed my car while I was working. It looks like it just came out of the showroom.',
      rating: 5
    },
    {
      name: 'Rohan Patel',
      service: 'Plumbing Repair',
      text: 'Had a burst pipe emergency. The DrFix plumber arrived within 30 minutes, fixed it quickly, and cleaned up everything. Highly recommend!',
      rating: 5
    },
    {
      name: 'Anjali Sharma',
      service: 'Basic Car Wash',
      text: 'So convenient and affordable. The worker was polite and did a very thorough job on the exterior. Will definitely use them again.',
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-500 font-semibold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">What Our Clients Say</h3>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-8 h-10 w-10 text-emerald-100" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 relative z-10 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-dark-900">{testimonial.name}</div>
                  <div className="text-sm text-blue-500">{testimonial.service}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
