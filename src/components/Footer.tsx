import { Droplets, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-gray-900 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-400 p-1.5 rounded-lg">
                <Droplets className="h-5 w-5 text-black" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-black">
                Dr<span className="text-emerald-400">Fix</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mt-4">
              Premium doorstep services for all your needs. Professional car wash, expert plumbing, and reliable electrical work, all at your convenience.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-800 hover:text-emerald-500 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-800 hover:text-emerald-500 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-800 hover:text-emerald-500 transition-colors">
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#34D399] text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Premium Car Wash</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Interior Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Plumbing Repairs</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Electrical Installations</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Appliance Fixing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#34D399] text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Book a Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#34D399] text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Atala, kareli<br />Prayagraj, Uttar Pradesh 211016</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>+91 8791640669</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>supportdrfix@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} DrFix Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
