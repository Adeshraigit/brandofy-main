'use client'

import { motion } from 'framer-motion'
import { Avatar } from "@nextui-org/react"
import { Star } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    { name: "Alice W.", review: "Mind-blowing gifts! My friends were speechless.", rating: 5 },
    { name: "Bob M.", review: "Quantum Rubik's Cube broke my brain... in a good way!", rating: 5 },
    { name: "Charlie D.", review: "Telepathic Teddy knew exactly what I needed. Spooky!", rating: 4 },
    { name: "Diana P.", review: "The Invisible Ink Diary is perfect for my secret recipes!", rating: 5 },
    { name: "Ethan S.", review: "Time-Traveling Watch made me early for once. Thanks!", rating: 4 },
    { name: "Fiona L.", review: "Gravity-Defying Slippers are a game-changer. Literally.", rating: 5 },
  ]

  return (
    
      <div className="min-h-screen bg-white text-gray-800 overflow-hidden font-sans">
        <main className="py-20 px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Customer Reviews
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <Avatar name={review.name} className="mr-4" />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">"{review.review}"</p>
              </motion.div>
            ))}
          </div>
        </main>
      </div>

  )
}