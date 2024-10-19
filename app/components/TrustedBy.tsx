'use client';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  return (
    <section className="py-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Trusted By
      </motion.h2>
      <div className="flex flex-wrap justify-center space-x-6">
        {/* Placeholder for logos, replace with your actual images */}
        <div className="w-40 h-20 bg-gray-200 rounded-md mb-4"></div>
        <div className="w-40 h-20 bg-gray-200 rounded-md mb-4"></div>
        <div className="w-40 h-20 bg-gray-200 rounded-md mb-4"></div>
        <div className="w-40 h-20 bg-gray-200 rounded-md mb-4"></div>
      </div>
    </section>
  );
};

export default TrustedBy;
