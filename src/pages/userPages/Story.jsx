import React from 'react';
import { motion } from 'framer-motion';
import food1 from '/image.jpg'; // Replace with actual food images
import food2 from '/image.jpg';
import food3 from '/image.jpg';
import chef from '/image.jpg';
import { Link } from 'react-router-dom';

const Story = () => {
  return (
    <div className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 font-semibold tracking-wider">OUR STORY</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Flavors That Tell <br/>Our <span className="text-rose-500">Delicious</span> Story</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Food Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <img 
                src={food1} 
                alt="Signature dish" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-lg">Signature Dish</span>
              </div>
            </div>
            
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <img 
                src={food2} 
                alt="Fresh ingredients" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-lg">Fresh Ingredients</span>
              </div>
            </div>
            
            <div className="relative h-64 rounded-2xl overflow-hidden group col-span-2">
              <img 
                src={food3} 
                alt="Dining experience" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-lg">Memorable Dining</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative mb-10">
              <img 
                src={chef} 
                alt="Head chef" 
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-rose-500 text-white p-6 rounded-xl shadow-xl">
                <span className="block text-2xl font-bold">15+</span>
                <span className="block">Of Connecting Food Lovers Worldwide</span>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6">Our Recipe Philosophy</h3>
            <p className=" mb-6 leading-relaxed">
            We believe every recipe is a journey, not just a set of instructions. Our passionate community blends cherished traditions with creative twists to craft 
            dishes that inspire and connect. Every recipe shared is a story of love, culture, and creativity.            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Shared by passionate home cooks & food lovers</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Crafted with authentic ingredients and personal flair</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Exploring bold flavors from kitchens around the world</span>
              </div>
            </div>

            <Link to="/favorites"><button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg font-medium transition duration-300 shadow-lg">
             View Favourities
            </button></Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Story;