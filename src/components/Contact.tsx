import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'car-wash',
    address: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    
    // Validate Indian phone number (10 digits starting with 6-9)
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    
    if (!phoneRegex.test(cleanPhone)) {
      setErrorMsg('Please enter a valid 10-digit Indian phone number.');
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
        'plumbing': 'Plumbing',
        'electrical': 'Electrical Work'
      };

      // Create a robust payload containing lowercase, camelCase, and capitalized variations
      // to ensure flawless compatibility with any custom or generic dynamic Apps Script mapping
      const payload = {
        ...formData,
        service: serviceLabels[formData.service] || formData.service,
        
        // Preferred time column name fallback mappings
        time: formData.preferredTime,
        Time: formData.preferredTime,
        'Preferred Time': formData.preferredTime,
        preferredtime: formData.preferredTime,
        
        // Case fallbacks for sheet headers
        Name: formData.name,
        Phone: formData.phone,
        Service: serviceLabels[formData.service] || formData.service,
        Address: formData.address,
        Message: formData.message
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
          name: '', phone: '', service: 'car-wash', address: '', preferredTime: '', message: ''
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
                    onClick={() => setIsSubmitted(false)}
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none bg-white"
                    >
                      <option value="car-wash">Car Wash</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical Work</option>
                    </select>
                  </div>

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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-colors outline-none resize-none"
                      placeholder="Any specific instructions for our team?"
                    ></textarea>
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
