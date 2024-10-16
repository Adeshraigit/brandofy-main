'use client'

import { motion } from 'framer-motion'
import { Input, Textarea, Button } from "@nextui-org/react"

export default function Contact() {
  return (
   
      <div className="min-h-screen bg-white text-gray-800 overflow-hidden font-sans">
        <main className="py-20 px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-6">
              <Input
                label="Name"
                placeholder="Enter your name"
                variant="bordered"
              />
              <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                variant="bordered"
              />
              <Textarea
                label="Message"
                placeholder="Enter your message"
                variant="bordered"
                minRows={4}
              />
              <Button color="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </main>
      </div>
    
  )
}