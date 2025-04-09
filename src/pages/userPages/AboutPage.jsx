import React from 'react';
import home from '/image.jpg'; // Assuming you'll replace with actual images
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 p-6 md:p-10"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-6"></div>
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Crafting Culinary <span className="text-amber-400">Excellence</span> Since 1995
          </h2>
          <p className="font-secondary text-gray-300 mb-8 text-lg leading-relaxed">
            Our restaurant chain began as a single family-owned bistro with a passion for authentic flavors. 
            Today, we maintain that same dedication to quality ingredients and exceptional service across all our locations.
          </p>
          <div className="flex space-x-4">
            <button className="font-secondary border-2 border-amber-400 px-8 py-3 hover:bg-amber-400 hover:text-black transition duration-300 font-medium">
              OUR STORY
            </button>
            <button className="font-secondary bg-amber-400 text-black px-8 py-3 hover:bg-amber-300 transition duration-300 font-medium">
              VIEW MENU
            </button>
          </div>
          
          {/* Stats Section */}
          <div className="flex mt-12 space-x-8">
            <div>
              <div className="text-4xl font-bold text-amber-400">25+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400">50+</div>
              <div className="text-gray-400">Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400">100+</div>
              <div className="text-gray-400">Menu Items</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Images */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col items-center p-6 relative"
        >
          {/* Main Image with Decorative Elements */}
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden group">
            <img
              src={home}
              alt="Our restaurant interior"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Our Flagship Location</h3>
              <p className="text-amber-200">Downtown, New York</p>
            </div>
          </div>
          
          {/* Secondary Image with Floating Effect */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-3/4 h-64 bg-gray-800 rounded-xl overflow-hidden absolute -bottom-20 right-0 shadow-2xl border-4 border-white/10 z-10"
          >
            <img
              src={home}
              alt="Signature dish"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              Chef's Special
            </div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-24 h-24 border-4 border-amber-400/30 rounded-full"></div>
          <div className="absolute bottom-40 -right-6 w-16 h-16 bg-amber-400/20 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;