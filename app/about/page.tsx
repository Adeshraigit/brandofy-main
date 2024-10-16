'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    
      <div className="min-h-screen bg-white text-gray-800 overflow-hidden font-sans">
        <main className="py-20 px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Brandofy
          </motion.h1>
          <motion.div
            className="space-y-6 text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              Welcome to Brandofy, where we bend the laws of physics and stretch the boundaries of imagination to bring you gifts that truly blow minds.
            </p>
            <p>
              Founded in 2024 by a group of quantum physicists, comedians, and unicorn tamers, Brandofy set out on a mission to revolutionize the world of gift-giving. We believe that every present should be an adventure, every unwrapping a journey into the unknown.
            </p>
            <p>
              Our team of reality-warping elves works tirelessly in our interdimensional workshop, crafting gifts that challenge perception, tickle funny bones, and occasionally cause existential crises (don't worry, we provide a free philosophy hotline with every purchase).
            </p>
            <p>
              At Brandofy, we're not just thinking outside the box - we've forgotten what boxes even are. Join us in our quest to make every day feel like a surprise party thrown by the universe itself.
            </p>
            <p>
              Remember: In a world of ordinary presents, be a Brandofy gift. Because why be normal when you can be mind-blowing?
            </p>
          </motion.div>
        </main>
      </div>
    
  )
}