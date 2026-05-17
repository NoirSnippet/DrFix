
import { motion } from 'framer-motion';
import { Car, Wrench, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'car-wash',
      title: 'Premium Car Wash',
      description: 'Complete interior and exterior deep cleaning using high-quality, eco-friendly foam and microfiber towels. Leaves your car looking brand new.',
      icon: Car,
      image: '/images/car_wash.png',
      color: 'emerald',
      featured: true
    },
    {
      id: 'plumbing',
      title: 'Expert Plumbing',
      description: 'From leaky faucets to complete pipe installations. Our licensed plumbers ensure your home runs smoothly without a drop out of place.',
      icon: Wrench,
      image: '/images/plumbing.png',
      color: 'blue',
      featured: false
    },
    {
      id: 'electrical',
      title: 'Electrical Repairs',
      description: 'Safe and reliable electrical installations, repairs, and maintenance by certified electricians. Safety is our top priority.',
      icon: Zap,
      image: '/images/electrical.png',
      color: 'amber', // using a generic accent color class in logic
      featured: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Services Tailored for Your Home</h3>
          <p className="text-gray-600 text-lg">
            We specialize in providing top-tier doorstep services. From making your car shine to keeping your home running flawlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden border ${service.featured ? 'border-emerald-200 shadow-xl shadow-emerald-100/50' : 'border-gray-100 shadow-lg'} bg-white flex flex-col h-full group`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-emerald-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}
                <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                  <service.icon className={`h-6 w-6 ${service.featured ? 'text-emerald-500' : 'text-blue-500'}`} />
                </div>
              </div>
              
              <div className="pt-10 pb-8 px-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold text-dark-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className={`font-semibold inline-flex items-center gap-2 ${service.featured ? 'text-emerald-500 hover:text-emerald-600' : 'text-blue-500 hover:text-blue-600'} transition-colors`}
                >
                  Book this service <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
