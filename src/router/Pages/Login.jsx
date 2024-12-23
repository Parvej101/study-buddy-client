import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const {login} = useAuth() 
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const result = login(email, password); // Your login logic here
            if (result) {
              Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome back!",
                showConfirmButton: false,
                timer: 1500,
              });
      
              // Navigate to /home after SweetAlert finishes
              setTimeout(() => {
                navigate("/");
              }, 1500);
            }
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Login Failed",
              text: error.message || "Invalid email or password.",
            });
          }

    }
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
            <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded-lg shadow-xl">
                <h2 className="text-3xl font-semibold text-center text-blue-600">Login</h2>
                {/* {error && <p className="text-red-500 text-sm text-center">{error}</p>} */}
                <form onSubmit={handleLogin}  className="space-y-6">
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
                        Login
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;