'use client';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <section className="py-20 bg-gray-100">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Hampers
      </motion.h2>
      <div className="flex flex-wrap justify-center space-x-6">
        {/* Placeholder for hamper images */}
        <div className="w-60 h-60 bg-gray-300 rounded-md mb-6"></div>
        <div className="w-60 h-60 bg-gray-300 rounded-md mb-6"></div>
        <div className="w-60 h-60 bg-gray-300 rounded-md mb-6"></div>
      </div>
    </section>
  );
};

export default Cards;
