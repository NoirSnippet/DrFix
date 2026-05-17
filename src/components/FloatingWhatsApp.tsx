
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/918791640669?text=Hello%20DrFix!%20I%20would%20like%20to%20book%20a%20service." 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
    >
      <MessageCircle className="h-7 w-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-dark-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with DrFix
        {/* Triangle arrow */}
        <span className="absolute top-1/2 -right-1 -mt-1 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-dark-900"></span>
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
