import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainHighlight from './MainHighlight';
import { MainHighlightData } from '../types';

interface MainHighlightCarouselProps {
  highlights: MainHighlightData[];
}

export default function MainHighlightCarousel({ highlights }: MainHighlightCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (highlights.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlights.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, [highlights.length]);

  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl min-h-[500px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={highlights[currentIndex].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <MainHighlight {...highlights[currentIndex]} />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      {highlights.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {highlights.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
