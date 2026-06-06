import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Mail, Lock, Eye, CheckCircle } from 'lucide-react';

interface PrivacyPolicyProps {
  navigate: (path: string) => void;
}

const PrivacyPolicy = ({ navigate }: PrivacyPolicyProps) => {
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
        <div className="inline-flex p-3 rounded-full bg-emerald-50 text-emerald-400 mb-4 border border-emerald-100">
          <Shield className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold text-dark-900 tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm">Last updated: May 25, 2026</p>
      </div>

      {/* Content Cards */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-10 space-y-10">
        
        {/* Intro */}
        <section className="prose max-w-none text-gray-600 leading-relaxed">
          <p>
            At <strong>HelloHomie</strong>, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by HelloHomie and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>
        </section>

        {/* 1. What Data We Collect */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-400">
              <Eye className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900">1. Information We Collect</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To provide our premium doorstep repair and wash services, we collect information that helps us identify you and deliver services efficiently. This includes:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 pl-4 list-disc">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number (10-digit Indian standard)</li>
            <li>Service Address (for doorstep delivery)</li>
            <li>Device details and service specifications</li>
            <li>Repair request and cleaning service history</li>
            <li>Payment-related information (handled via secure gateway)</li>
            <li>Cookies and analytics data (IP address, browser type)</li>
          </ul>
        </section>

        {/* 2. Why We Collect It */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-500">
              <CheckCircle className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900">2. How We Use Your Information</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We use the collected data for various purposes to maintain and improve our services:
          </p>
          <ul className="space-y-2 text-gray-600 list-inside list-decimal pl-2">
            <li>To schedule and fulfill repair bookings and doorstep car washes.</li>
            <li>To provide active customer support and respond to queries.</li>
            <li>To process secure payments for completed services.</li>
            <li>To send you important service updates, confirmations, or changes.</li>
            <li>To understand website usage patterns and optimize user experience.</li>
            <li>To monitor, detect, and prevent fraudulent transactions or activities.</li>
          </ul>
        </section>

        {/* 3. Who We Share Data With */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-400">
              <Shield className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900">3. Information Sharing and Disclosure</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We do not sell your personal data. We only share information with trusted third-party partners necessary to execute our service:
          </p>
          <ul className="space-y-3 text-gray-600 pl-4 list-disc">
            <li><strong>Payment Processors:</strong> To complete secure transactions.</li>
            <li><strong>Hosting Providers:</strong> To keep our web applications running reliably.</li>
            <li><strong>Analytics Providers:</strong> To analyze web traffic and user flows (e.g. Google Analytics).</li>
            <li><strong>Logistics Partners:</strong> Our technicians and professionals who travel to your address to perform the service.</li>
          </ul>
        </section>

        {/* 4. Data Security */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-500">
              <Lock className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900">4. Data Security</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. We employ standard technical measures including SSL encryption and secure hosting configurations. However, remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
          </p>
        </section>

        {/* 5. User Rights */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-400">
              <Eye className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900">5. Your Privacy Rights</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul className="space-y-2 text-gray-600 pl-4 list-disc">
            <li>The right to request access to and copies of your personal data.</li>
            <li>The right to request correction of any inaccurate information.</li>
            <li>The right to request deletion of your personal data, subject to certain legal obligations.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            If you would like to exercise any of these rights, please contact us.
          </p>
        </section>

        {/* Contact Us */}
        <section className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-bold text-dark-900 text-lg">Have Questions?</h3>
            <p className="text-gray-500 text-sm">Get in touch with our privacy compliance team.</p>
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

export default PrivacyPolicy;
