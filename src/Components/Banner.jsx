import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-200 to-blue-500 text-center overflow-hidden px-4">
            {/* Animated Background Shapes */}
            <motion.div
                className="absolute top-10 left-10 lg:w-40 lg:h-40 w-28 h-28 bg-gray-200 rounded-full shadow-xl"
                animate={{ x: [0, 50, 0], y: [0, -50, 0], rotate: 360 }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 lg:w-32 w-16 lg:h-32 h-16 bg-blue-700 rounded-full shadow-lg"
                animate={{ x: [0, -50, 0], y: [0, 50, 0], rotate: -360 }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                }}
            />
            <motion.div
                className="absolute top-1/3 right-1/3 lg:w-48 w-24 lg:h-48 h-24 bg-purple-300 rounded-full opacity-40"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
            />

            {/* Content Section */}
            <div className="relative z-10">
                <motion.h1
                    className="text-5xl font-extrabold text-white md:text-6xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to <span className="text-yellow-300">Study Buddy</span>
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg text-white md:text-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Collaborate, Learn, and Grow with Friends!
                </motion.p>
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Link to="/allAssignment">
                    <button className="px-6 py-3 btn btn-outline text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-500 focus:outline-none">
                        Get Started
                    </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;