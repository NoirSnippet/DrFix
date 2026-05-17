
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [prefilledPackage, setPrefilledPackage] = useState<{ name: string; price: string } | null>(null);

  const handleSelectPackage = (packageName: string, packagePrice: string) => {
    setPrefilledPackage({ name: packageName, price: packagePrice });
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans antialiased text-dark-900 bg-gray-50 selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing onSelectPackage={handleSelectPackage} />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact prefilledPackage={prefilledPackage} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
