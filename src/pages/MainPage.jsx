import { motion } from 'framer-motion';
import home from '/image.jpg';
import { Link } from 'react-router-dom';


const MainPage = () => {
  return (
     <div className=" text-white py-20 overflow-hidden">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 p-6 md:p-10"
            >
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-6"></div>
              <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sharing Culinary <span className="text-amber-400">Passions</span> Since 1995
              </h2>
              <p className="font-secondary text-gray-300 mb-8 text-lg leading-relaxed">
              Flavor Exchange started as a simple idea: to connect home cooks and food lovers worldwide. Today, we continue that mission by bringing together
               a vibrant community that shares, discovers, and celebrates recipes from every corner of the globe.
              </p>
              <div className="flex space-x-4">
               <Link to="/create"><button className="font-secondary border-2 border-amber-400 px-8 py-3 hover:bg-amber-400 hover:text-black transition duration-300 font-medium">
                  Add Recipes
                </button></Link> 
                <Link to="/recipes"><button className="font-secondary bg-amber-400 text-black px-8 py-3 hover:bg-amber-300 transition duration-300 font-medium">
                  View Recipes
                </button></Link> 
              </div>
              
              <div className="flex mt-12 space-x-8">
                <div>
                  <div className="text-4xl font-bold text-amber-400">25+</div>
                  <div className="text-gray-400">Global Cuisines
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400">50+</div>
                  <div className="text-gray-400">Food Enthusiasts</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400">100+</div>
                  <div className="text-gray-400">Curated Recipes</div>
                </div>
              </div>
            </motion.div>
    
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 flex flex-col items-center p-6 relative"
            >
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden group">
                <img
                  src={home}
                  alt="Our restaurant interior"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
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
              </motion.div>
              
              
              <div className="absolute -top-10 -left-10 w-24 h-24 border-4 border-amber-400/30 rounded-full"></div>
              <div className="absolute bottom-40 -right-6 w-16 h-16 bg-amber-400/20 rounded-full"></div>
            </motion.div>
          </div>
        </div>
  );
};

export default MainPage;