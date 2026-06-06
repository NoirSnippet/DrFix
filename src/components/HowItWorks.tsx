
import { motion } from 'framer-motion';
import { MousePointerClick, CalendarDays, MapPin, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MousePointerClick,
      title: 'Choose a Service',
      description: 'Select car wash, plumbing, or electrical work.'
    },
    {
      icon: CalendarDays,
      title: 'Pick Time & Location',
      description: 'Tell us when and where you need us.'
    },
    {
      icon: MapPin,
      title: 'HelloHomie Comes to You',
      description: 'Our professionals arrive fully equipped.'
    },
    {
      icon: CreditCard,
      title: 'Pay After Service',
      description: 'Hassle-free payment only when the job is done.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">How It Works</h3>
          <p className="text-gray-600 text-lg">
            Booking a service with HelloHomie is as easy as 1-2-3-4. We value your time and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gray-100 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 text-center"
            >
              <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center border-4 border-gray-50 shadow-lg mb-6 group hover:border-blue-100 transition-colors">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <step.icon className="h-8 w-8 text-blue-500 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-blue-500 lg:hidden">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-dark-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
