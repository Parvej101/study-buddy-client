import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
            <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded-lg shadow-xl">
                <h2 className="text-3xl font-semibold text-center text-blue-600">Register</h2>
                {/* {error && <p className="text-red-500 text-sm text-center">{error}</p>} */}
                <form  className="space-y-6">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="Photo URL (Optional)"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        Register
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;