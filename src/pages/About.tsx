import '../app/globals.css';
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="bg-gray-100 py-16 px-8">
            <div className="container mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center text-gray-800 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Our AI
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-700 text-center mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Our AI is capable of handling various queries including text-to-image, text-to-video, image-to-video, and more. Whether you&#39;re looking to generate creative visuals or need a quick video based on your images, our AI has you covered.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Text-to-Image Section */}
                    <motion.div
                        className="bg-white p-8 shadow-lg rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Text to Image</h3>
                        <p className="text-gray-600 mb-4">
                            Enter any text, and our AI will generate a stunning image that matches your description.
                        </p>
                        <motion.img
                            src="/image"
                            alt="Text to Image"
                            className="w-full h-40 object-cover rounded-lg"
                            whileHover={{ scale: 1.05 }}
                        />
                    </motion.div>

                    {/* Text-to-Video Section */}
                    <motion.div
                        className="bg-white p-8 shadow-lg rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Text to Video</h3>
                        <p className="text-gray-600 mb-4">
                            Generate a video based on the text you provide, perfect for quick video content creation.
                        </p>
                        <motion.img
                            src="/video-thumbnail"
                            alt="Text to Video"
                            className="w-full h-40 object-cover rounded-lg"
                            whileHover={{ scale: 1.05 }}
                        />
                    </motion.div>

                    {/* Image-to-Video Section */}
                    <motion.div
                        className="bg-white p-8 shadow-lg rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Image to Video</h3>
                        <p className="text-gray-600 mb-4">
                            Transform your images into engaging videos with just a few clicks.
                        </p>
                        <motion.img
                            src="/image-video-thumbnail" 
                            alt="Image to Video"
                            className="w-full h-40 object-cover rounded-lg"
                            whileHover={{ scale: 1.05 }}
                        />
                    </motion.div>

                    {/* Normal Text Queries Section */}
                    <motion.div
                        className="bg-white p-8 shadow-lg rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Normal Text Queries</h3>
                        <p className="text-gray-600 mb-4">
                            Our AI can handle all sorts of text queries, providing you with accurate and reliable results.
                        </p>
                        <motion.img
                            src="/text-query-thumbnail" 
                            alt="Normal Text Queries"
                            className="w-full h-40 object-cover rounded-lg"
                            whileHover={{ scale: 1.05 }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
