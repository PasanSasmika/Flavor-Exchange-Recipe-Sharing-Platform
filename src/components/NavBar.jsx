import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaHome, FaSearch, FaUser, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaBars, FaTimes, FaPlus, FaHeart, FaInfoCircle, FaEnvelope, FaPalette } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';
import logo from '/logo.png';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsProfileDropdownOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    {
      path: '/',
      icon: <FaHome className="mr-3" />,
      label: 'Home',
    },
    {
      path: '/about',
      icon: <FaInfoCircle className="mr-3" />,
      label: 'About',
    },
  ];

  return (
    <nav className="shadow-sm">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mr-2 mt-6">
          <Link to="/">
          <img 
           src={logo}
           alt="Flavor Exchange Logo" 
           className="h-32 w-32 object-cover" 
            />
             </Link>
</div>
          
          {/* Desktop Navigation */}
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
          
          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-6">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="bg-amber-500 text-white hover:bg-amber-600 px-5 py-2.5 rounded-lg text-sm font-medium flex items-center transition-colors duration-200"
                >
                   Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-amber-500 text-white hover:bg-amber-600 px-5 py-2.5 rounded-lg text-sm font-medium flex items-center transition-colors duration-200"
                >
                  Sign Up
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
                
                <div className="relative">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center space-x-2 focus:outline-none"
                  >
                    <HiUserCircle className="text-2xl text-amber-500" />
                    <span className="ml-2 text-sm font-medium hidden lg:inline">
                      Hi, {user.name}!
                    </span>
                  </button>
                  
                  {/* Profile Dropdown */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                      <Link
                        to="/mode"
                        onClick={() => setIsProfileDropdownOpen(false)}
                        className=" px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 flex items-center"
                      >
                        <FaPalette className="mr-3" /> Theme
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 flex items-center"
                      >
                        <FaSignOutAlt className="mr-3" /> Logout
                      </button>
                    </div>
                  )}
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
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-5 pt-3 pb-6 space-y-1 bg-white border-t border-amber-100">
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
            <Link
              to="/mode"
              className={` px-5 py-3.5 rounded-lg text-base font-medium flex items-center transition-colors duration-200
                ${isActive('/mode') ? 'text-amber-600 bg-amber-50' : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaPalette className="mr-4" /> Theme
            </Link>
          </div>
          
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
              <div className="px-5 py-3 flex items-center text-gray-700">
                <HiUserCircle className="text-2xl mr-4 text-amber-500" />
                <span className="text-base font-medium">Hi, {user.name}!</span>
              </div>
              
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