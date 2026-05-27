import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import PartnerWithUs from './components/PartnerWithUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [prefilledPackage, setPrefilledPackage] = useState<{ name: string; price: string; service: string } | null>(null);
  const [activePricingTab, setActivePricingTab] = useState('car-wash');

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
    window.scrollTo(0, 0);
  };

  const handleSelectPackage = (packageName: string, packagePrice: string, serviceName: string = 'car-wash') => {
    setPrefilledPackage({ name: packageName, price: packagePrice, service: serviceName });
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSeePlans = () => {
    setActivePricingTab('bike-wash');
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    if (path === '/privacy-policy') {
      return <PrivacyPolicy navigate={navigate} />;
    }
    if (path === '/terms-of-use') {
      return <TermsOfUse navigate={navigate} />;
    }
    return (
      <>
        <Hero onSeePlans={handleSeePlans} />
        <Services />
        <Pricing activeTab={activePricingTab} setActiveTab={setActivePricingTab} onSelectPackage={handleSelectPackage} />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <PartnerWithUs />
        <Contact prefilledPackage={prefilledPackage} navigate={navigate} />
      </>
    );
  };

  return (
    <div className="font-sans antialiased text-dark-900 bg-gray-50 selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <Navbar navigate={navigate} currentPath={path} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer navigate={navigate} />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
