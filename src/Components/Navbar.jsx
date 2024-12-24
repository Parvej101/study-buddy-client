import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Spinner from './Spinner';


const Navbar = () => {
    const { user, logOut, loading } = useAuth()
    
    //handle logout
    const handleLogout = () => {
        logOut()
    }

    const links = <>
        <li><NavLink to="/allAssignment">Assignment</NavLink></li>
        <li><NavLink to="/pending">Pending Assignments</NavLink></li>

    </>


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    if (loading) {
        return <Spinner></Spinner>
      }
      console.log(user);

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
            {/* User phot */}
            <div className="navbar-end flex  lg:flex-row">

                {!user ? (
                    <div>
                        <Link className="btn px-3 py-1 mr-2" to="/login">Login</Link>

                    </div>
                ) : (
                    <div className='flex items-center'>

                        <div>
                            <ul className="menu menu-horizontal px-1 bg-">

                                <li>
                                    <details>
                                        <summary >
                                            <div className='rounded-full relative inline-block'>
                                                <img
                                                    className='lg:w-20 w-10'
                                                    src={user.photoURL}
                                                    alt={user.displayName} />
                                                {/* Hover name */}
                                                <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 text-white text-sm font-semibold rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                    {user.displayName}
                                                </div>
                                            </div></summary>
                                        <ul className="px-2 lg:w-48 w-40  text-black bg-blue-300 absolute z-50">
                                            <li className='hover:bg-blue-400 hover:text-white'><Link to="/create">Create Assignment</Link></li>
                                            <li className='hover:bg-blue-400 hover:text-white'> <Link to="/myAttempted">My Attempted</Link></li>

                                        </ul>
                                    </details>
                                </li>

                            </ul>
                        </div>

                        <div> <Link className="btn px-3 py-1" onClick={handleLogout} to="/login">Logout</Link></div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Navbar;