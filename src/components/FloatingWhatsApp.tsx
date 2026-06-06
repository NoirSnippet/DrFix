import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/918791640669?text=Hello%20HelloHomie!%20I%20would%20like%20to%20book%20a%20service." 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-0 sm:gap-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-3.5 sm:pl-4 sm:pr-5 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping -z-10 group-hover:animate-none"></span>
      
      {/* Official WhatsApp Logo SVG */}
      <svg 
        viewBox="0 0 24 24" 
        className="h-5.5 w-5.5 sm:h-6 sm:w-6 fill-current transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
      >
        <path d="M12.031 2c-5.514 0-9.99 4.493-9.99 10.027a10.093 10.093 0 001.378 5.068L2.03 22l5.065-1.339a10.02 10.02 0 004.936 1.28c5.514 0 9.99-4.492 9.99-10.027C22.021 6.493 17.545 2 12.031 2zm6.275 14.398c-.27.766-1.364 1.48-1.89 1.543-.538.064-1.246.064-2.033-.19a9.664 9.664 0 01-4.047-2.308 10.42 10.42 0 01-2.483-3.968c-.413-.715-.715-1.545-.715-2.41 0-2.28 1.493-2.924 1.954-2.924.364 0 .524.086.643.344.135.29.585 1.58.643 1.688.058.107.098.236.019.397-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49a7.306 7.306 0 001.637 2.03 6.079 6.079 0 002.378 1.474c.24.118.384.098.48-.02.096-.118.423-.49.537-.663.116-.172.23-.14.384-.086.154.054 1.01.474 1.18.56.172.086.29.129.33.204.04.075.04.43-.075.766z" />
      </svg>

      <span className="hidden sm:inline text-sm font-bold tracking-wide select-none">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
