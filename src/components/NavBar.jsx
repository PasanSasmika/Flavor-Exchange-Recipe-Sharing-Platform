import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {FaHome,FaSearch,FaUser,FaSignInAlt,FaUserPlus,FaSignOutAlt,FaBars,FaTimes,FaPlus, FaHeart} from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    {
      path: '/',
      icon: <FaHome className="mr-3" />,
      label: 'Home',
    },
    {
      path: '/search',
      icon: <FaSearch className="mr-3" />,
      label: 'Search',
    },
    {
      path: '/profile',
      icon: <FaUser className="mr-3" />,
      label: 'Profile',
    },
  ];

  return (
    <nav className="shadow-sm">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Pushed completely left */}
          <div className="flex-shrink-0 mr-10">
            <Link to="/">
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap">
                Flavor Exchange
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered with optimal spacing */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-16 space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-3 rounded-lg text-sm font-medium flex items-center transition-all duration-200 
                  ${isActive(link.path) ? 'text-amber-600 bg-amber-50' : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'}`}
              >
                {link.icon} {link.label}
              </Link>
            ))}
          </div>
          
          {/* Desktop Auth Section - Right-aligned with good spacing */}
          <div className="hidden md:flex items-center space-x-6">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-amber-600 px-5 py-2.5 rounded-lg text-sm font-medium flex items-center transition-colors duration-200"
                >
                  <FaSignInAlt className="mr-3" /> Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-amber-500 text-white hover:bg-amber-600 px-5 py-2.5 rounded-lg text-sm font-medium flex items-center transition-colors duration-200"
                >
                  <FaUserPlus className="mr-3" /> Sign Up
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-6">
                  <Link
                    to="/create"
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium flex items-center transition-all duration-200 
                      ${isActive('/create') ? 'text-amber-600 bg-amber-50' : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'}`}
                  >
                    <FaPlus className="mr-3" /> Add Recipe
                  </Link>
                  <Link
                    to="/favorites"
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium flex items-center transition-all duration-200 
                      ${isActive('/favorites') ? 'text-amber-600 bg-amber-50' : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'}`}
                  >
                    <FaHeart className="mr-3" /> Favorites
                  </Link>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-amber-600 hover:bg-amber-50 px-4 py-2.5 rounded-lg text-sm font-medium flex items-center transition-colors duration-200"
                  >
                    <FaSignOutAlt className="mr-3" /> 
                  </button>
                  
                  <div className="flex items-center text-gray-700">
                    <HiUserCircle className="text-2xl text-amber-500" />
                    <span className="ml-2 text-sm font-medium hidden lg:inline">
                      Hi, {user.name}!
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden ml-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-amber-600 hover:text-amber-700 p-2.5 rounded-lg hover:bg-amber-50 transition-colors"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Improved layout and spacing */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-5 pt-3 pb-6 space-y-1 bg-white border-t border-amber-100">
          {/* Main Links */}
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={` px-5 py-3.5 rounded-lg text-base font-medium flex items-center transition-colors duration-200
                  ${isActive(link.path) ? 'text-amber-600 bg-amber-50' : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon} {link.label}
              </Link>
            ))}
          </div>
          
          {/* Conditional User Sections */}
          {!user ? (
            <div className="pt-4 space-y-3 border-t border-amber-100 mt-3">
              <Link
                to="/login"
                className=" w-full text-gray-600 hover:text-amber-600 px-5 py-3.5 rounded-lg text-base font-medium transition-colors duration-200 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaSignInAlt className="mr-4" /> Login
              </Link>
              <Link
                to="/signup"
                className=" w-full bg-amber-500 text-white hover:bg-amber-600 px-5 py-3.5 rounded-lg text-base font-medium transition-colors duration-200 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaUserPlus className="mr-4" /> Sign Up
              </Link>
            </div>
          ) : (
            <div className="pt-4 space-y-3 border-t border-amber-100 mt-3">
              {/* User Info */}
              <div className="px-5 py-3 flex items-center text-gray-700">
                <HiUserCircle className="text-2xl mr-4 text-amber-500" />
                <span className="text-base font-medium">Hi, {user.name}!</span>
              </div>
              
              {/* User Actions - Single Column */}
              <div className="space-y-2">
                <Link
                  to="/create"
                  className={` px-5 py-3.5 rounded-lg text-base font-medium flex items-center transition-all duration-200 
                    ${isActive('/create') ? 'text-amber-600 bg-amber-50' : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaPlus className="mr-4" /> Add Recipe
                </Link>
                
                <Link
                  to="/favorites"
                  className={` px-5 py-3.5 rounded-lg text-base font-medium flex items-center transition-all duration-200 
                    ${isActive('/favorites') ? 'text-amber-600 bg-amber-50' : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaHeart className="mr-4" /> Favorites
                </Link>
                
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className=" w-full text-left text-gray-600 hover:text-amber-600 px-5 py-3.5 rounded-lg text-base font-medium transition-colors duration-200 flex items-center"
                >
                  <FaSignOutAlt className="mr-4" /> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;