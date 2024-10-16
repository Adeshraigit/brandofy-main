'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Button } from "@nextui-org/react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorAnimation = useAnimation()

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  useEffect(() => {
    cursorAnimation.start({
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: "spring", damping: 3 }
    })
  }, [mousePosition, cursorAnimation])

  const shootConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* <div className="container mx-auto px-4">
        <Layout children={undefined}/>
      </div> */}

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply pointer-events-none z-50"
        animate={cursorAnimation}
      />

      <main className="pt-20">
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
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              color="primary"
              size="lg"
              onPress={shootConfetti}
              className="text-lg font-bold py-6 px-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full shadow-lg transform transition-all duration-500 hover:rotate-3"
            >
              Blow My Mind
            </Button>
          </motion.div>

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
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Trusted By</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => (
              <motion.div
                key={company}
                className="bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">{company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Featured Mind-Benders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Quantum Rubik's Cube", description: "Solve in multiple dimensions!" },
              { name: "Telepathic Teddy", description: "Cuddles with your thoughts!" },
              { name: "Invisible Ink Diary", description: "Write secrets in thin air!" }
            ].map((gift, index) => (
              <motion.div
                key={gift.name}
                className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-blue-800">{gift.name}</h3>
                <p className="text-blue-600">{gift.description}</p>
                <Button color="primary" className="mt-4">
                  Warp Reality
                </Button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}