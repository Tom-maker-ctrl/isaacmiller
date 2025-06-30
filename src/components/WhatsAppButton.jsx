import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const phoneNumber = "32465229050"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ scale: 0, x: -50 }}
      animate={{ scale: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
    >
      <Button
        size="lg"
        className="p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl hover:scale-110 transition-transform"
        onClick={handleClick}
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </motion.div>
  );
};

export default WhatsAppButton;