import { motion } from 'framer-motion';
import { pageVariants, pageTransition,containerVariants,fadeInLeft,socialHover
} from '../animations/animation';
import { FaPlay, FaShareAlt, FaHeart, FaFacebook, FaTwitter, FaYoutube, FaStar, FaLeaf, FaClock } from 'react-icons/fa';
import home from '/image.jpg';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="font-primary" 
    >
      <div className="w-full flex flex-col md:flex-row  min-h-screen">
        {/* Image Section - Left Side */}
        <motion.div 
          className="md:w-1/2 h-[695px] relative"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <img 
            src={home}
            alt="Delicious food"
            className="w-full h-full object-cover opacity-90"
          />
          {/* Social Media Links */}
          <motion.div 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-3  bg-opacity-80 rounded-l-lg shadow-md"
            variants={containerVariants}
          >
            <motion.a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
              variants={socialHover}
              whileHover="hover"
            >
              <FaFacebook size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-blue-400 hover:text-blue-600 transition-colors"
              variants={socialHover}
              whileHover="hover"
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-red-600 hover:text-red-800 transition-colors"
              variants={socialHover}
              whileHover="hover"
            >
              <FaYoutube size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Content Section - Right Side */}
        <div className="md:w-1/2 h-[800px] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div>
            <h1 className="text-4xl md:text-5xl  font-bold lg:text-6xl text-gray-800 mb-4 leading-tight">
              Share Your Culinary Creations
            </h1>
            <p className="text-lg text-gray-600 mb-8 font-secondary font-bold">
              Join our community of food lovers and exchange amazing recipes.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/create"><motion.button 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center text-lg font-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaShareAlt className="mr-3" />
              Share a Recipe
            </motion.button></Link>
            <motion.button 
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center text-lg font-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlay className="mr-3" />
              Watch Tutorials
            </motion.button>
          </div>
          
          {/* Features Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-primary">
              Why Share With Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <FaStar className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 font-primary">Get Feedback</h3>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <FaHeart className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 font-primary">Save Favorites</h3>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <FaLeaf className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 font-primary">Discover Trends</h3>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <FaClock className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 font-primary">Quick Recipes</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;