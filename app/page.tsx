'use client';

import TrustedBy from './components/TrustedBy';
import Cards from './components/Cards';
import CustomerReviews from './components/CustomerReviews';
// import HelpSection from './components/HelpSection';
import { motion } from 'framer-motion';  // Import motion only once
import confetti from 'canvas-confetti';
import { Button } from "@nextui-org/react";

export default function Home() {
  const shootConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden font-sans relative z-10">
      {/* Background Blobs */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-20 -right-20 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
        }}
      />
      <motion.div
        className="absolute -bottom-8 right-40 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 4,
        }}
      />

      <main className="pt-20 relative z-10">
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center relative">
          <motion.h2
            className="text-6xl md:text-8xl font-bold text-center mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Gifts that
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Blow Minds
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-center mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover gifts so unique, they'll question reality. Are you ready for the gift-pocalypse?
          </motion.p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              color="primary"
              size="lg"
              onPress={shootConfetti}
              className="text-lg font-bold py-6 px-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full shadow-lg transform transition-all duration-500 hover:rotate-3"
            >
              Blow My Mind
            </Button>
          </motion.div>
        </section>

        {/* Trusted By Section */}
        <section className="relative z-10">
          <TrustedBy />
        </section>

        {/* Cards Section */}
        <section className="relative z-10">
          <Cards />
        </section>

        {/* Customer Reviews Section */}
        <section className="relative z-10">
          <CustomerReviews />
        </section>

        {/* Help Section */}
        {/* <HelpSection /> */}
      </main>
    </div>
  );
}
// /commit