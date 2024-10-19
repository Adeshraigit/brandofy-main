'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Textarea, Button } from "@nextui-org/react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission (e.g., send data to a server)
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

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
          {submitted ? (
            <motion.div
              className="text-center text-green-600 text-xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank you! Your message has been sent.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                  variant="bordered"
                  value={formData.name}
                  onChange={handleChange}
                  status={errors.name ? 'error' : 'default'}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>

              <div>
                <Input
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  variant="bordered"
                  value={formData.email}
                  onChange={handleChange}
                  status={errors.email ? 'error' : 'default'}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>

              <div>
                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Enter your message"
                  variant="bordered"
                  minRows={4}
                  value={formData.message}
                  onChange={handleChange}
                  status={errors.message ? 'error' : 'default'}
                />
                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
              </div>

              <Button type="submit" color="primary" className="w-full" disabled={submitted}>
                {submitted ? 'Sent' : 'Send Message'}
              </Button>
            </form>
          )}
        </motion.div>
      </main>
    </div>
  );
}
