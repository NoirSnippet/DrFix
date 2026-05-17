
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, ThumbsUp, Sparkles, UserCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Doorstep Convenience',
      description: 'We come to your home, office, or preferred location. Save your time and skip the waiting lines.'
    },
    {
      icon: UserCheck,
      title: 'Trained Workers',
      description: 'Our team consists of certified, experienced professionals who know exactly what they are doing.'
    },
    {
      icon: ThumbsUp,
      title: 'Affordable Pricing',
      description: 'Premium service does not have to mean premium prices. We offer transparent, competitive rates.'
    },
    {
      icon: Sparkles,
      title: 'Quick Booking',
      description: 'Book your service in under 60 seconds using our simple online platform or a quick WhatsApp text.'
    },
    {
      icon: ShieldCheck,
      title: 'Clean & Reliable Service',
      description: 'We leave your place cleaner than we found it. Satisfaction guaranteed on every job.'
    }
  ];

  return (
    <section className="py-20 bg-dark-900 text-white overflow-hidden relative">
      {/* Background Decorative */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="w-full lg:w-1/3">
            <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2">Why DrFix</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">The Smart Choice for Home Services</h3>
            <p className="text-gray-400 text-lg mb-8">
              We are revolutionizing how you maintain your car and home. Experience unmatched quality, trust, and convenience.
            </p>
            <div className="hidden lg:block relative">
              <div className="w-48 h-48 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center p-1">
                <div className="w-full h-full bg-dark-900 rounded-full flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-emerald-400 text-sm font-medium">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl hover:bg-gray-800 transition-colors"
                >
                  <div className="bg-gray-700/50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <reason.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
