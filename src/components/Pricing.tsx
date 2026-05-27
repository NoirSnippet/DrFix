import { motion } from 'framer-motion';
import { Check, Car, Wrench, Zap, Bike } from 'lucide-react';

interface PricingProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectPackage: (packageName: string, packagePrice: string, serviceName: string) => void;
}

const tabs = [
  { id: 'car-wash', label: 'Car Wash', icon: Car },
  { id: 'bike-wash', label: 'Bike Wash', icon: Bike },
  { id: 'plumbing', label: 'Plumbing', icon: Wrench },
  { id: 'electrical', label: 'Electrical', icon: Zap },
] as const;

const plansData: Record<
  string,
  { name: string; price: string; priceSuffix?: string; description: string; features: string[]; popular: boolean }[]
> = {
  'car-wash': [
    {
      name: 'Complete Detailing',
      price: '₹549',
      description: 'Quick and clean wash for your regular maintenance.',
      features: [
        'Exterior foam wash',
        'Wheel & tire cleaning',
        'Window cleaning',
        'Interior vaccuming',
        'Dashboard & console wipe down',
      ],
      popular: false
    },
    {
      name: 'Car Servicing',
      price: '₹999',
      priceSuffix: ' + Material cost',
      description: 'The perfect balance of thorough exterior and interior cleaning.',
      features: [
        'Engine oil change',
        'Oil filter replacement',
        'Air filter cleaning/replacement',
        'Fluid top-up (brake oil, washer fluid, coolant, etc.'
      ],
      popular: false
    },
    {
      name: 'Premium Plan',
      price: '₹1,499',
      priceSuffix: ' + Material cost',
      description: 'Comprehensive car servicing and multi-point inspection.',
      features: [
        'Everything in Complete Detailing',
        'Engine oil & filter change check',
        'Air filter & cabin filter check',
        'Coolant & brake fluid top-up',
        'Brake pad cleaning & adjustment',
        'Battery & electrical diagnostics',
        'Spark plug check & clean',
        'Extra parts/items charged separately'
      ],
      popular: true
    }
  ],
  'bike-wash': [
    {
      name: 'Complete Detailing',
      price: '₹149',
      description: 'Thorough detailing and cleaning to restore that showroom shine.',
      features: [
        'Premium foam wash & rinse',
        'Deep engine & chassis cleaning',
        'Chain cleaning & lubrication',
        'High-gloss wax polish',
        'Tire & plastic parts dressing',
      ],
      popular: false
    },
    {
      name: 'Bike Servicing',
      price: '₹299',
      priceSuffix: ' + Material cost',
      description: 'Comprehensive general service to keep your ride running smoothly.',
      features: [
        'General inspection & diagnostics',
        'Engine oil change & top-up check',
        'Air filter & spark plug cleaning',
        'Brake adjustment & pad inspection',
        'Clutch & accelerator cable lubing',
        'Nut & bolt tightening check',
        'Extra parts/items charged separately'
      ],
      popular: false
    },
    {
      name: 'Premium Plan',
      price: '₹699',
      priceSuffix: ' + Material cost',
      description: 'The ultimate care package: Detailing + Servicing combined.',
      features: [
        'Everything in Complete Detailing',
        'Everything in Servicing',
        'Spark plug & & brake pad replacement labor',
        'Complete carburetor cleaning',
        'Moving joints grease application',
        'Priority booking support'
      ],
      popular: true
    }
  ],
  plumbing: [
    {
      name: 'Basic Fix',
      price: '₹299',
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
      description: 'Comprehensive repair and maintenance for your plumbing.',
      features: [
        'Everything in Basic Fix',
        'Pipe section replacement',
        'New tap / mixer installation',
        'Water heater connection',
        'Bathroom fitting repair'
      ],
      popular: true
    }
  ],
  electrical: [
    {
      name: 'Minor Repair',
      price: '₹299',
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
      description: 'Reliable electrical repair and appliance setup.',
      features: [
        'Everything in Minor Repair',
        'Fan / light installation',
        'Exhaust fan setup',
        'Immersion rod / geyser point',
        'Earthing check & repair'
      ],
      popular: true
    }
  ]
};

const Pricing = ({ activeTab, setActiveTab, onSelectPackage }: PricingProps) => {
  const plans = plansData[activeTab] || [];

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
                className={`flex items-center gap-1.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all whitespace-nowrap ${activeTab === tab.id
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

        <div className="relative max-w-6xl mx-auto">
          {activeTab !== 'car-wash' && activeTab !== 'bike-wash' && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-50/40 backdrop-blur-[2px]">
              <div className="bg-amber-500/90 text-white font-bold px-6 py-3 rounded-full shadow-lg border border-amber-400/50 backdrop-blur-md uppercase tracking-wider text-sm">
                Coming Soon
              </div>
            </div>
          )}

          <div
            className={`grid grid-cols-1 ${activeTab === 'car-wash' || activeTab === 'bike-wash'
              ? 'md:grid-cols-3 max-w-6xl items-stretch'
              : 'md:grid-cols-2 max-w-4xl items-center'
              } gap-8 mx-auto ${activeTab !== 'car-wash' && activeTab !== 'bike-wash' ? 'filter blur-[4px] select-none pointer-events-none' : ''
              }`}
          >
            {plans.map((plan) => {
              const isPremium = plan.name === 'Premium Plan';
              const isServicing = plan.name === 'Car Servicing' || plan.name === 'Servicing';

              const animationProps = isServicing
                ? {
                  initial: { opacity: 1, y: 0, scale: 1 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: { duration: 0 }
                }
                : isPremium
                  ? {
                    initial: { opacity: 0, scale: 0.9, y: 20 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    transition: { type: 'spring' as const, stiffness: 200, damping: 15, delay: 0.1 }
                  }
                  : {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.3, delay: 0.05 }
                  };

              return (
                <motion.div
                  key={`${activeTab}-${plan.name}`}
                  {...animationProps}
                  className={`bg-white rounded-3xl p-6 sm:p-8 flex flex-col relative h-full ${plan.popular
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
                    <p className="text-gray-500 text-sm mb-6 md:h-10 text-sm">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-extrabold text-dark-900">{plan.price}</span>
                      {plan.priceSuffix && (
                        <span className="text-gray-500 font-medium text-sm">{plan.priceSuffix}</span>
                      )}
                      <span className="text-gray-500 font-medium">/service</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 bg-emerald-50 p-0.5 rounded-full shrink-0">
                          <Check className="h-4 w-4 text-emerald-500" />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    disabled={activeTab !== 'car-wash' && activeTab !== 'bike-wash'}
                    onClick={() => onSelectPackage(plan.name, plan.price + (plan.priceSuffix || ''), activeTab)}
                    className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all ${plan.popular
                      ? 'bg-emerald-400 hover:bg-emerald-500 text-white shadow-md hover:shadow-lg'
                      : 'bg-gray-50 hover:bg-gray-100 text-dark-900 border border-gray-200'
                      }`}
                  >
                    Choose {plan.name}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
