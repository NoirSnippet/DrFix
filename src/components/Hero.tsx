
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onSeePlans: () => void;
}

const Hero = ({ onSeePlans }: HeroProps) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
              <Star className="h-4 w-4 fill-blue-500 text-blue-500" />
              <span>Rated by 20+ Active Customers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-dark-900 mb-6 leading-tight">
              Professional <span className="text-blue-600">Car Wash</span> <br />
              At Your Doorstep
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience the ultimate convenience with HelloHomie. We provide premium doorstep car wash, alongside expert plumbing and electrical services. You relax, we fix and clean!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Book a Wash<ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  onSeePlans();
                }}
                className="bg-emerald-400 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 flex items-center justify-center"
              >
                See Plans
              </a>
              <a
                href="#services"
                className="bg-white hover:bg-gray-50 text-dark-900 border border-gray-200 px-8 py-3.5 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 flex items-center justify-center"
              >
                View Services
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                Trained Professionals
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                Eco-Friendly Products
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent z-10"></div>
              <img
                src="/images/hero.png"
                alt="Premium Doorstep Car Wash"
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 z-20 glass rounded-xl p-4 flex items-center gap-4">
                <div className="bg-emerald-400 text-white p-3 rounded-full">
                  <Star className="h-6 w-6 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-dark-900 text-lg">100% Satisfaction</div>
                  <div className="text-gray-600 text-sm">Guaranteed Quality</div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
