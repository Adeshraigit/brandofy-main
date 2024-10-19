'use client';
import { motion } from 'framer-motion';

const CustomerReviews = () => {
  return (
    <section className="py-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Customer Reviews
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder for customer reviews */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="text-lg italic">"Amazing gift! Totally blew my mind!"</p>
          <p className="mt-4 text-right">- John Doe</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="text-lg italic">"Perfect for any occasion, loved it!"</p>
          <p className="mt-4 text-right">- Jane Smith</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="text-lg italic">"Will recommend to everyone!"</p>
          <p className="mt-4 text-right">- Alex Brown</p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
