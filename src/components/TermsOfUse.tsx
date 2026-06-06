import { motion } from 'framer-motion';
import { Scale, ArrowLeft, Mail, BookOpen, CreditCard, ShieldAlert } from 'lucide-react';

interface TermsOfUseProps {
  navigate: (path: string) => void;
}

const TermsOfUse = ({ navigate }: TermsOfUseProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-500 font-semibold mb-6 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        <div className="inline-flex p-3 rounded-full bg-blue-50 text-blue-500 mb-4 border border-blue-100">
          <Scale className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold text-dark-900 tracking-tight mb-2">Terms of Use</h1>
        <p className="text-gray-500 text-sm">Last updated: May 25, 2026</p>
      </div>

      {/* Content Cards */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-10 space-y-10">

        {/* 1. Acceptance of Terms */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-500">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900">1. Acceptance of Terms</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using the services provided by <strong>HelloHomie</strong> ("we", "us", "our"), including our doorstep car wash, plumbing, and electrical services, you agree to be bound by these Terms of Use. If you do not agree to all of these terms, please do not access our website or book any services.
          </p>
        </section>

        {/* 2. Description of Services */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-400">
              <Scale className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900">2. Description of Services</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            HelloHomie provides a platform for booking premium doorstep services, including professional car washing, and licensed plumbing and electrical tasks. Our professionals travel directly to the user-supplied address to perform the requested service.
          </p>
        </section>

        {/* 3. User Responsibility */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-500">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900">3. User Responsibility</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            When booking a service, you agree to:
          </p>
          <ul className="space-y-2 text-gray-600 pl-4 list-disc">
            <li>Provide accurate, current, and complete contact, device, and address information.</li>
            <li>Provide safe and reasonable access to the service location.</li>
            <li>Ensure a reliable water and electricity connection as requested (e.g. for car wash equipment).</li>
            <li>Be present or assign an authorized representative during the scheduled service slot.</li>
          </ul>
        </section>

        {/* 4. Payment, Booking & Cancellation */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-400">
              <CreditCard className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900">4. Payment, Bookings, & Cancellations</h2>
          </div>
          <p className="text-gray-600 leading-relaxed font-semibold">
            Pricing and Payment:
          </p>
          <p className="text-gray-600 leading-relaxed">
            All prices listed on the site are transparent and clear. Payment is due upon completion of the service. No advance payment is required for standard bookings. Payment can be made using online payment links, credit/debit cards, UPI, or cash.
          </p>
          <p className="text-gray-600 leading-relaxed font-semibold">
            Cancellations & Refunds:
          </p>
          <p className="text-gray-600 leading-relaxed">
            You may cancel or reschedule your booking at no extra cost up to 2 hours before the scheduled time slot. If we must cancel due to weather conditions (e.g. heavy rain during a car wash booking) or emergencies, we will contact you to reschedule. Refund claims for unsatisfied service quality will be evaluated on a case-by-case basis.
          </p>
        </section>

        {/* 5. Service Disclaimer & Warranty */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-500">
              <Scale className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900">5. Service Warranty Disclaimer</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We strive to provide top-quality services through certified professionals. 
            All plumbing and electrical repairs come with a standard service-specific warranty (e.g. 7 days for general plumbing repairs) details of which will be communicated upon job completion. This warranty only covers issues directly related to the service provided and does not cover subsequent damage caused by external factors, misuse, or normal wear and tear.
          </p>
        </section>

        {/* 6. Limitation of Liability */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-505 border border-red-100 bg-red-50 text-red-500">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900">6. Limitation of Liability</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            In no event shall HelloHomie, its directors, employees, or contractors be liable for any direct, indirect, incidental, or consequential damages resulting from:
          </p>
          <ul className="space-y-2 text-gray-600 pl-4 list-disc">
            <li>Any pre-existing vehicle defects, paint issues, or device/plumbing issues not explicitly disclosed before service starts.</li>
            <li>Accidental data loss on electronic appliances during repair (users are advised to back up data before service, if applicable).</li>
            <li>Water/power interruptions outside the control of our service technicians.</li>
          </ul>
        </section>

        {/* Contact Us */}
        <section className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-bold text-dark-900 text-lg">Legal Queries?</h3>
            <p className="text-gray-500 text-sm">For details regarding terms or liability, contact us.</p>
          </div>
          <a
            href="mailto:hellohomie.support@gmail.com"
            className="bg-emerald-400 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            hellohomie.support@gmail.com
          </a>
        </section>

      </div>
    </motion.div>
  );
};

export default TermsOfUse;
