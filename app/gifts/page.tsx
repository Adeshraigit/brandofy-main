"use client";

import { motion } from 'framer-motion';
import { Button } from "@nextui-org/react";



export default function Gifts() {
  return (
    
      <div className="min-h-screen bg-white text-gray-800 overflow-hidden font-sans">
        <main className="py-20 px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mind-Bending Gifts
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Quantum Rubik's Cube", description: "Solve in multiple dimensions!" },
              { name: "Telepathic Teddy", description: "Cuddles with your thoughts!" },
              { name: "Invisible Ink Diary", description: "Write secrets in thin air!" }
            ].map((gift, index) => (
              <motion.div
                key={gift.name}
                className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-800">{gift.name}</h3>
                <p className="text-blue-600">{gift.description}</p>
                <Button color="primary" className="mt-4">
                  Explore More
                </Button>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    
  );
}
