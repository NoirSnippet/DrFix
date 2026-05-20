
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Car, Wrench, Zap } from 'lucide-react';

interface PricingProps {
  onSelectPackage: (packageName: string, packagePrice: string) => void;
}

const tabs = [
  { id: 'car-wash', label: 'Car Wash', icon: Car },
  { id: 'plumbing', label: 'Plumbing', icon: Wrench },
  { id: 'electrical', label: 'Electrical', icon: Zap },
] as const;

const plansData: Record<string, { name: string; price: string; duration: string; description: string; features: string[]; popular: boolean }[]> = {
  'car-wash': [
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
  ],
  plumbing: [
    {
      name: 'Basic Fix',
      price: '₹299',
      duration: '45 mins',
      description: 'Quick fix for minor plumbing issues around your home.',
      features: [
        'Leaky faucet repair',
        'Drain unclogging',
        'Tap washer replacement',
        'Basic pipe joint fix'
      ],
      popular: false
    },
    {
      name: 'Standard Repair',
      price: '₹599',
      duration: '2 hours',
      description: 'Comprehensive repair and maintenance for your plumbing.',
      features: [
        'Everything in Basic Fix',
        'Pipe section replacement',
        'New tap / mixer installation',
        'Water heater connection',
        'Bathroom fitting repair'
      ],
      popular: true
    },
    {
      name: 'Full Installation',
      price: '₹999',
      duration: '4 hours',
      description: 'Complete plumbing installation and overhaul service.',
      features: [
        'Everything in Standard Repair',
        'Full pipe line installation',
        'Geyser / water purifier setup',
        'Basin & sink installation',
        'Complete bathroom plumbing'
      ],
      popular: false
    }
  ],
  electrical: [
    {
      name: 'Minor Repair',
      price: '₹299',
      duration: '30 mins',
      description: 'Quick electrical fixes for small household issues.',
      features: [
        'Switch / socket replacement',
        'MCB / fuse reset or replace',
        'Light fixture repair',
        'Wiring joint fix'
      ],
      popular: false
    },
    {
      name: 'Standard Fix',
      price: '₹599',
      duration: '1.5 hours',
      description: 'Reliable electrical repair and appliance setup.',
      features: [
        'Everything in Minor Repair',
        'Fan / light installation',
        'Exhaust fan setup',
        'Immersion rod / geyser point',
        'Earthing check & repair'
      ],
      popular: true
    },
    {
      name: 'Full Installation',
      price: '₹999',
      duration: '3 hours',
      description: 'Complete electrical wiring and panel installation.',
      features: [
        'Everything in Standard Fix',
        'New board / sub-board wiring',
        'AC power point installation',
        'Complete house wiring fix',
        'Safety inspection & certification'
      ],
      popular: false
    }
  ]
};

const Pricing = ({ onSelectPackage }: PricingProps) => {
  const [activeTab, setActiveTab] = useState('car-wash');
  const plans = plansData[activeTab];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2">Pricing Plans</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Transparent Pricing for Every Service</h3>
          <p className="text-gray-600 text-lg">
            Choose the perfect plan for your needs. No hidden fees, guaranteed quality.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl shadow-md border border-gray-100 p-1.5 gap-1 overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-6 sm:p-8 relative ${plan.popular
                ? 'border-2 border-emerald-400 shadow-2xl md:scale-105 z-10'
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
                <p className="text-gray-500 text-sm mb-6 md:h-10">{plan.description}</p>
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
