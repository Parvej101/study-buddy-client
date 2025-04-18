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
        <li className=' font-semibold border-white hover:border'><NavLink to="/allAssignment">Assignment</NavLink></li>
        <li className=' font-semibold border-white hover:border' ><NavLink to="/pending">Pending Assignments</NavLink></li>

    </>


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    if (loading) {
        return <Spinner></Spinner>
    }


    return (
      <section className='bg-blue-900/70 backdrop-blur-md sticky top-0 z-50 text-white'>
          <div className="container mx-auto navbar lg:px-32  text-white h-24 shadow-lg flex justify-between items-center ">
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
                        className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-slate-700 text-white ${isMenuOpen ? 'block' : 'hidden'}`}>
                        {links}
                    </ul>
                </div>
                <div>
                    <Link to="/">
                    <div className='hidden lg:flex bg-white rounded-full'>
                        <img className='w-20' src="https://i.ibb.co.com/wCQTwZw/logo-3.png" alt="" />
                    </div>
                </Link>
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
                                                    className='w-12 h-12 lg:h-16 lg:w-16 rounded-full border-2 border-white'
                                                    src={user.photoURL}
                                                    alt={user.displayName} />
                                                {/* Hover name */}
                                                <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 text-white text-sm font-semibold rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                    {user.displayName}
                                                </div>
                                            </div></summary>
                                        <ul className="px-2 lg:w-48 w-40 text-white bg-slate-700 absolute z-50">
                                            <li className=' hover:border'><Link to="/create">Create Assignment</Link></li>
                                            <li className=' hover:border'> <Link to="/myAttempted">My Attempted</Link></li>

                                        </ul>
                                    </details>
                                </li>

                            </ul>
                        </div>

                        <div> <Link className=" px-3 py-1  btn btn-outline hover:bg-red-400 text-white" onClick={handleLogout} to="/login">Logout</Link></div>
                    </div>
                )}
            </div>
        </div>
      </section>

    );
};

export default Navbar;