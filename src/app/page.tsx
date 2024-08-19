"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center py-5 text-white px-4">
        <motion.div
          className="max-w-4xl px-6 py-12 bg-opacity-90 bg-black rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: 'spring', stiffness: 50 }}
        >
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">
            Welcome to AI App <span role="img" aria-label="sparkles">✨</span>
          </h1>
          <p className="text-2xl mb-8 leading-relaxed">
            Harness the power of AI to generate text, images, and videos with ease. Whether you’re creating content or exploring new ideas, our AI tools are designed to help you achieve your goals effortlessly. <span role="img" aria-label="rocket">🚀</span>
          </p>
          <motion.button
            onClick={() => alert('Start functionality coming soon!')}
            className="bg-yellow-400 text-gray-900 py-4 px-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started <span role="img" aria-label="rocket">🚀</span>
          </motion.button>
          <div className="mt-12">
            <h2 className="text-4xl font-bold mb-4">
              What People Are Saying <span role="img" aria-label="speech bubble">💬</span>
            </h2>
            <div className="space-y-6">
              <blockquote className="bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-lg italic">
                  "AI App is a game changer! The text generation is spot on, and the image and video tools are incredibly useful." - Alex R.
                </p>
              </blockquote>
              <blockquote className="bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-lg italic">
                  "I've never seen such intuitive AI tools before. It's like having a personal assistant at your fingertips!" - Jordan T.
                </p>
              </blockquote>
              <blockquote className="bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-lg italic">
                  "The user interface is sleek and modern, making it easy to navigate and get results quickly." - Taylor W.
                </p>
              </blockquote>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
