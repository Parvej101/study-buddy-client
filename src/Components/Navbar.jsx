import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext';


const Navbar = () => {
    const { user, logOut } = useAuth()
    console.log(user);
    //handle logout
    const handleLogout = () => {
        logOut()
    }

    const links = <>
        <li><NavLink to="/">Assignment</NavLink></li>
        <li><NavLink to="/pending">Pending Assignments</NavLink></li>
        <li><NavLink to="/users">Profile Picture</NavLink></li>
    </>


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="navbar bg-blue-400 text-white">
            <div className="navbar-start">
                {/* Small device dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-blue-300 text-black ${isMenuOpen ? 'block' : 'hidden'}`}>
                        {links}
                    </ul>
                </div>
                <div className='hidden lg:flex'>
                    <img className='w-20' src="https://i.ibb.co.com/wCQTwZw/logo-3.png" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {/* User photo click */}
            <div className="navbar-end flex  lg:flex-row">

                {!user ? (
                    <div>
                        <Link className="btn px-3 py-1 mr-2" to="/login">Login</Link>

                    </div>
                ) :(
                    <div className="relative">
                      <button
                        className="flex items-center focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        <img
                          className="lg:w-10 w-8 rounded-full"
                          src={user.photoURL}
                          alt={user.displayName}
                        />
                        <span className="ml-2 ">{user.displayName}</span>
                      </button>
                      {isMenuOpen && (
                        <ul className="absolute z-50 right-0 mt-2 w-48 bg-blue-300 text-black shadow-lg rounded-md">
                          <li className="px-4 py-2 hover:bg-blue-400">
                            <Link to="/create">Create Assignment</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-blue-400">
                            <Link to="/myAttempted">My Attempted</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-blue-400">
                            <button onClick={handleLogout}>Logout</button>
                          </li>
                        </ul>
                      )}
                    </div>
                  )}
            </div>
        </div>

    );
};

export default Navbar;