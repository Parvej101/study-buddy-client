import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 text-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
            >
                <motion.h1
                    className="text-9xl font-bold text-red-600 mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                >
                    404
                </motion.h1>
                <p className="text-2xl text-gray-800 mb-6">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to="/"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                    >
                        Go Back Home
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ErrorPage;