import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Loader2 } from 'lucide-react';

interface ContactProps {
  prefilledPackage: { name: string; price: string; service?: string } | null;
  navigate: (path: string) => void;
}

const Contact = ({ prefilledPackage, navigate }: ContactProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'car-wash',
    selectedPackage: '',
    price: '',
    address: '',
    preferredTime: '',
    message: ''
  });

  useEffect(() => {
    if (prefilledPackage) {
      setFormData(prev => ({
        ...prev,
        service: prefilledPackage.service || 'car-wash',
        selectedPackage: prefilledPackage.name,
        price: prefilledPackage.price
      }));
    }
  }, [prefilledPackage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'selectedPackage') {
      const priceMap: Record<string, Record<string, string>> = {
        'car-wash': {
          'Complete Detailing': '₹549',
          'Car Servicing': '₹999 + Material cost',
          'Premium Plan': '₹1,499 + Material cost'
        },
        'bike-wash': {
          'Complete Detailing': '₹149',
          'Bike Servicing': '₹299 + Material cost',
          'Premium Plan': '₹699 + Material cost'
        },
        'plumbing': {
          'Basic Fix': '₹299',
          'Standard Repair': '₹599'
        },
        'electrical': {
          'Minor Repair': '₹299',
          'Standard Fix': '₹599'
        }
      };
      const servicePrices = priceMap[formData.service] || {};
      setFormData(prev => ({
        ...prev,
        selectedPackage: value,
        price: servicePrices[value] || ''
      }));
    } else if (name === 'service') {
      setFormData(prev => ({
        ...prev,
        service: value,
        selectedPackage: '',
        price: ''
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.selectedPackage) {
      const msg = 'Please select a package before submitting.';
      setErrorMsg(msg);
      alert(msg);
      return;
    }
    
    // Validate Indian phone number (10 digits starting with 6-9)
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    
    if (!phoneRegex.test(cleanPhone)) {
      const msg = 'Please enter a valid 10-digit Indian phone number (e.g., 98765 43210).';
      setErrorMsg(msg);
      alert(msg);
      return;
    }

    setIsLoading(true);

    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      
      if (!scriptUrl || scriptUrl === 'YOUR_WEB_APP_URL_HERE') {
        throw new Error('Google Apps Script URL is not configured.');
      }

      // Map service values to professional user-friendly labels
      const serviceLabels: Record<string, string> = {
        'car-wash': 'Car Wash',
        'bike-wash': 'Bike Wash',
        'plumbing': 'Plumbing',
        'electrical': 'Electrical Work'
      };

      // Create a clean and robust payload without duplicate case variations as requested
      const payload = {
        name: formData.name,
        phone: formData.phone,
        service: serviceLabels[formData.service] || formData.service,
        selectedPackage: formData.selectedPackage,
        price: formData.price,
        address: formData.address,
        preferredTime: formData.preferredTime,
        message: formData.message
      };

      // We send data as text/plain to avoid CORS preflight issues with Google Apps Script
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          service: 'car-wash',
          selectedPackage: '',
          price: '',
          address: '',
          preferredTime: '',
          message: ''
        });
      }, 5000);
      
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg('Failed to submit the form. Please try again or contact us via WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="bg-gradient-to-br from-emerald-400 to-blue-500 p-10 lg:p-16 text-white flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Book Your Service Today</h3>
              <p className="text-emerald-50 mb-8 text-lg">
                Fill out the form, and our team will confirm your booking within minutes. We're ready to fix it!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-emerald-100 text-sm">Working Hours</div>
                    <div className="font-semibold text-lg">Mon - Sun: 8:00 AM - 8:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 lg:p-16">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="bg-emerald-100 p-4 rounded-full">
                    <CheckCircle className="h-16 w-16 text-emerald-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-dark-900">Booking Confirmed!</h4>
                  <p className="text-gray-600">
                    Booking request sent successfully. DrFix will contact you soon.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        service: 'car-wash',
                        selectedPackage: '',
                        price: '',
                        address: '',
                        preferredTime: '',
                        message: ''
                      });
                    }}
                    className="mt-6 text-emerald-500 font-medium hover:underline"
                  >
                    Book another service
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                      {errorMsg}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none text-dark-900"
                        placeholder="Rahul Sharma"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none text-dark-900"
                        placeholder="98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Select Service</label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none bg-white text-dark-900"
                    >
                      <option value="car-wash">Car Wash</option>
                      <option value="bike-wash">Bike Wash</option>
                      <option value="plumbing" disabled>Plumbing (Coming Soon)</option>
                      <option value="electrical" disabled>Electrical Work (Coming Soon)</option>
                    </select>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    <div>
                      <label htmlFor="selectedPackage" className="block text-sm font-medium text-gray-700 mb-2">Select Package</label>
                      <select 
                        id="selectedPackage" 
                        name="selectedPackage"
                        value={formData.selectedPackage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none bg-white text-dark-900"
                      >
                        <option value="">Select a package...</option>
                        {formData.service === 'car-wash' && (
                          <>
                            <option value="Complete Detailing">Complete Detailing - ₹549</option>
                            <option value="Car Servicing">Car Servicing - ₹999 + Material cost</option>
                            <option value="Premium Plan">Premium Plan - ₹1,499 + Material cost</option>
                          </>
                        )}
                        {formData.service === 'bike-wash' && (
                          <>
                            <option value="Complete Detailing">Complete Detailing - ₹149</option>
                            <option value="Bike Servicing">Bike Servicing - ₹299 + Material cost</option>
                            <option value="Premium Plan">Premium Plan - ₹699 + Material cost</option>
                          </>
                        )}
                        {formData.service === 'plumbing' && (
                          <>
                            <option value="Basic Fix">Basic Fix - ₹299</option>
                            <option value="Standard Repair">Standard Repair - ₹599</option>
                          </>
                        )}
                        {formData.service === 'electrical' && (
                          <>
                            <option value="Minor Repair">Minor Repair - ₹299</option>
                            <option value="Standard Fix">Standard Fix - ₹599</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">Package Price</label>
                      <input 
                        type="text" 
                        id="price" 
                        name="price" 
                        readOnly
                        value={formData.price}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 font-semibold cursor-not-allowed outline-none"
                        placeholder="Select a package first"
                      />
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Service Address</label>
                      <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none text-dark-900"
                        placeholder="Flat 203, Green Park, New Delhi"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <input 
                        type="text" 
                        id="preferredTime" 
                        name="preferredTime" 
                        required
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none text-dark-900"
                        placeholder="Tomorrow, 10:00 AM"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Details (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none resize-none text-dark-900"
                      placeholder="Any specific instructions for our team?"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3 mt-4 mb-6">
                    <input 
                      type="checkbox" 
                      id="agreement" 
                      name="agreement" 
                      required
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400 cursor-pointer"
                    />
                    <label htmlFor="agreement" className="text-sm text-gray-600 select-none cursor-pointer">
                      I agree to the{' '}
                      <button 
                        type="button" 
                        onClick={() => navigate('/terms-of-use')} 
                        className="text-emerald-500 hover:text-emerald-600 font-semibold hover:underline bg-transparent border-none p-0 inline cursor-pointer"
                      >
                        Terms of Use
                      </button>
                      {' '}and acknowledge the{' '}
                      <button 
                        type="button" 
                        onClick={() => navigate('/privacy-policy')} 
                        className="text-emerald-500 hover:text-emerald-600 font-semibold hover:underline bg-transparent border-none p-0 inline cursor-pointer"
                      >
                        Privacy Policy
                      </button>
                      .
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {isLoading ? (
                      <><Loader2 className="animate-spin h-5 w-5" /> Submitting...</>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
