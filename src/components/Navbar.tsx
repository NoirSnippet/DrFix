import { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-emerald-400 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-dark-900' : 'text-dark-900 drop-shadow-sm'}`}>
                Dr<span className="text-emerald-400">Fix</span>
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-emerald-400 ${isScrolled ? 'text-gray-600' : 'text-gray-800'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-emerald-400 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-emerald-400 hover:bg-emerald-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-blue-500 text-white px-5 py-3 rounded-xl font-medium shadow-md"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
