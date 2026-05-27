import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Wallet, ArrowRight } from 'lucide-react';

const PartnerWithUs = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Expand Your Reach',
      description: 'Get regular booking requests and connect with premium customers in your service region.'
    },
    {
      icon: Wallet,
      title: 'Reliable Weekly Payouts',
      description: 'Enjoy transparent earnings, weekly payouts, and absolutely zero hidden platform fees.'
    },
    {
      icon: Handshake,
      title: 'Marketing & Support',
      description: 'We handle the brand building, advertising, and support so you can focus on quality work.'
    }
  ];

  return (
    <section id="connect" className="py-20 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card */}
        <div className="bg-gradient-to-br from-emerald-400 to-blue-500 rounded-3xl shadow-xl overflow-hidden text-white relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 lg:p-16 items-center relative z-10">
            {/* Header Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 text-white font-semibold text-xs tracking-wider uppercase backdrop-blur-sm border border-white/10">
                Partner Network
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Grow Your Business <br className="hidden sm:inline" />
                With Dr<span className="text-blue-500">Fix</span>
              </h2>
              <p className="text-emerald-50 text-lg leading-relaxed max-w-xl">
                Are you an expert mechanic, detailer, plumber, or electrician? Partner with us, serve verified clients, and scale your business easily.
              </p>
              
              <div className="pt-4">
                <a
                  href="https://wa.me/918791640669?text=Hello%20DrFix!%20I%20am%20interested%20in%20partnering%20with%20your%20business%20as%20a%20service%20provider."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-emerald-500 hover:text-emerald-600 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Connect With Us <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Benefits List */}
            <div className="lg:col-span-5 space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-start gap-4"
                >
                  <div className="p-3 bg-white/20 rounded-xl text-white shrink-0">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-emerald-50 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnerWithUs;
