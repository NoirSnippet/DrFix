
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingProps {
  onSelectPackage: (packageName: string, packagePrice: string) => void;
}

const Pricing = ({ onSelectPackage }: PricingProps) => {
  const plans = [
    {
      name: 'Basic Wash',
      price: '₹399',
      duration: '45 mins',
      description: 'Quick and clean wash for your regular maintenance.',
      features: [
        'Exterior foam wash',
        'Wheel & tire cleaning',
        'Window cleaning (exterior)',
        'Tire dressing'
      ],
      popular: false
    },
    {
      name: 'Premium Wash',
      price: '₹599',
      duration: '1.5 hours',
      description: 'The perfect balance of thorough exterior and interior cleaning.',
      features: [
        'Everything in Basic Wash',
        'Interior vacuuming',
        'Dashboard & console wipe down',
        'Window cleaning (interior)',
        'Spray wax application'
      ],
      popular: true
    },
    {
      name: 'Deep Clean',
      price: '₹999',
      duration: '3 hours',
      description: 'Complete transformation inside and out. Like brand new.',
      features: [
        'Everything in Premium Wash',
        'Seat stain removal / conditioning',
        'Carpet deep shampoo',
        'Clay bar treatment',
        'Hand paste wax'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2">Pricing Plans</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Car Wash Packages</h3>
          <p className="text-gray-600 text-lg">
            Choose the perfect wash for your car. Transparent pricing, no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-8 relative ${plan.popular
                ? 'border-2 border-emerald-400 shadow-2xl scale-105 z-10'
                : 'border border-gray-100 shadow-lg hover:shadow-xl transition-shadow'
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-400 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-md">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-dark-900 mb-2">{plan.name}</h4>
                <p className="text-gray-500 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-dark-900">{plan.price}</span>
                  <span className="text-gray-500 font-medium">/service</span>
                </div>
                <div className="text-emerald-500 font-medium mt-2 text-sm">~ {plan.duration}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 bg-emerald-50 p-0.5 rounded-full">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onSelectPackage(plan.name, plan.price)}
                className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all ${plan.popular
                  ? 'bg-emerald-400 hover:bg-emerald-500 text-white shadow-md hover:shadow-lg'
                  : 'bg-gray-50 hover:bg-gray-100 text-dark-900 border border-gray-200'
                  }`}
              >
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
