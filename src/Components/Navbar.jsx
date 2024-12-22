import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Assignment</NavLink></li>
        <li><NavLink to="/pending">Pending Assignments</NavLink></li>
        <li><NavLink to="/users">Profile Picture</NavLink></li>

    </>
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isUserAuthenticated = false;

    return (
        <div className="navbar bg-blue-400 text-white">
            <div className="navbar-start">
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
            <div className="navbar-end flex  lg:flex-row">

                {!isUserAuthenticated ? (
                    <div>
                        <Link className="btn px-3 py-1 mr-2" to="/login">Login</Link>

                    </div>
                ) : (
                    <div className='flex items-center'>

                        <div>
                            <ul className="menu menu-horizontal px-1 bg-">

                                <li>
                                    <details>
                                        <summary className='rounded-full'><img className='lg:w-20 w-10' src="https://i.ibb.co.com/wCQTwZw/logo-3.png" alt="" /></summary>
                                        <ul className="p-2 w-48 text-black bg-blue-300">
                                            <li><Link to="/create">Create Assignment</Link></li>
                                            <li> <Link to="/myAttempted">My Attempted</Link></li>

                                        </ul>
                                    </details>
                                </li>

                            </ul>
                        </div>

                        <div> <Link className="btn px-3 py-1" to="/login">Logout</Link></div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Navbar;