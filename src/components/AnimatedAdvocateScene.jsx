import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, BookOpen } from 'lucide-react';

const AnimatedAdvocateScene = () => {
  const { t } = useTranslation('media');
  const slides = [
    {
      icon: Shield,
      text: t('media.carousel.slide1'),
    },
    {
      icon: BookOpen,
      text: t('media.carousel.slide2'),
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.some(slide => !slide.text || slide.text.includes('carousel'))) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides, slides.length]);

  if (!slides[index] || !slides[index].text || slides[index].text.includes('carousel')) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden min-h-[250px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-800 to-slate-600 rounded-full mb-6 text-white">
            {React.createElement(slides[index].icon, { className: "w-8 h-8" })}
          </div>
          <p className="text-lg md:text-xl text-slate-700 italic leading-relaxed">
            "{slides[index].text}"
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedAdvocateScene;