import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import Swal from 'sweetalert2';


const Register = () => {
    const {register} = useAuth()
    const navigate = useNavigate()
    
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const [error, setError] = useState("");

        const handleRegister = (e) =>{
            e.preventDefault()
            setError("");
            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            const photoURL = e.target.photoURL.value;
            console.log("Form Sign Up", email, password);
            if (!passwordRegex.test(password)) {
                setError(
                  "Password must be at least 8 characters long, contain at least one letter and one number."
                );
                return; 
              }
              console.log("Valid Password. Proceeding with registration...");
              register(email, password)
              .then(result =>{
                console.log("User registered successfully:", result);
              })
              try {

                const newUser = register(email, password, name, photoURL );
                console.log("User registered successfully:", newUser);
            
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: `Welcome, ${name}!`,
                    confirmButtonText: 'OK',
                  }).then(() => {
                    // Redirect to home route
                    navigate('/');
                  });

              } catch (error) {
                setError(error.message);
                console.error("Error during registration:", error);
              }
        }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
            <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded-lg shadow-xl">
                <h2 className="text-3xl font-semibold text-center text-blue-600">Register</h2>
                <form onSubmit={handleRegister}  className="space-y-6">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="Photo URL"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                    >
                        Register
                    </button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
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