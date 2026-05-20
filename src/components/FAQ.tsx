import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need to provide water or electricity for the car wash?',
      answer: 'Yes, You just need to provide water and electricity and our professionals come fully equipped with their equipments and eco-friendly products. But in future we will be upgrading ourself as the our business proceeds to bring our own water supply and electricity supply!'
    },
    {
      question: 'How quickly can I get a plumber or electrician?',
      answer: 'For emergencies, we aim to reach your location within 60 minutes. Standard bookings can be scheduled for any convenient time slot.'
    },
    {
      question: 'Are your workers trained and background-checked?',
      answer: 'Absolutely. All DrFix professionals undergo strict background checks and rigorous training to ensure safety and top-quality service.'
    },
    {
      question: 'How do I pay for the service?',
      answer: 'You can pay after the service is completed via credit/debit card, online payment links, or cash. No advance payment is required for standard bookings.'
    },
    {
      question: 'What if it rains during my scheduled car wash?',
      answer: 'We will contact you to either reschedule the wash for a later time at no extra cost, or if you have a covered garage, we can proceed as planned.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">Got Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-emerald-200 bg-emerald-50/30' : 'border-gray-200 bg-white'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-dark-900">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-emerald-500' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-emerald-100/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
