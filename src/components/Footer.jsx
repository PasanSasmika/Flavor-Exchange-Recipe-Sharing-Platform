import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold  mb-6 font-primary">Get in Touch</h2>
            <p className="text-gray-600 mb-8 max-w-2xl font-secondary leading-relaxed">
            We’d love to hear from you! Whether you have questions, suggestions, or 
            simply want to share your culinary journey, our team is here to connect and collaborate.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold  font-primary">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/recipes" 
                className="text-gray-500 hover:text-gray-900 transition-colors font-secondary"
              >
                Recipes
              </Link>
              <Link 
                to="/login" 
                className="text-gray-500 hover:text-gray-900 transition-colors font-secondary"
              >
                Login
              </Link>
              <Link 
                to="/about" 
                className="text-gray-500 hover:text-gray-900 transition-colors font-secondary"
              >
                About Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>
        
        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
            <a 
              href="https://dribbble.com/example" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors font-secondary"
            >
             flavorexchange/example
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-gray-500 hover:text-gray-900 transition-colors font-secondary"
            >
              contact@flavorexchange.com
            </a>
          </div>
          
          <p className="text-gray-400 text-sm font-secondary">
            © {new Date().getFullYear()} flavorexchange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;