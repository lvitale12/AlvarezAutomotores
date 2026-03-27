import { MessageCircle } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 300);
  });

  return (
    <motion.a
      href="https://wa.me/5492227513962?text=Hola%20Álvarez%20Automotores,%20quisiera%20hacer%20una%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BE5C] hover:scale-110 transition-colors flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-brand-blue text-sm font-bold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Te ayudamos?
        {/* Flecha del tooltip */}
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white" />
      </div>
    </motion.a>
  );
}
