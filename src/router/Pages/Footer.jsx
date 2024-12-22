import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white p-4 mt-8">
            <div className="container mx-auto">
                {/* Grid Layout for Footer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* About Section */}
                    <div>
                        <h3 className="font-bold text-lg">Study Buddy</h3>
                        <p className="text-sm mt-2">
                            A platform for online group study, where you can create, attempt, and grade assignments with your friends.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h3 className="font-bold text-lg">Quick Links</h3>
                        <ul className="text-sm mt-2 space-y-2">
                            <li><a href="/create" className="hover:underline">Create Assignment</a></li>
                            <li><a href="/myAttempted" className="hover:underline">My Attempted Assignments</a></li>
                            <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="font-bold text-lg">Contact Us</h3>
                        <ul className="text-sm mt-2 space-y-2">
                            <li>Email: support@studybuddy.com</li>
                            <li>Phone: +1 123 456 7890</li>
                            <li>
                                Follow Us:
                                <div className="flex space-x-2 mt-1">
                                    <a href="#" className="hover:text-gray-300">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="#" className="hover:text-gray-300">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="hover:text-gray-300">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-6 border-t border-gray-400 pt-4">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Study Buddy. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;