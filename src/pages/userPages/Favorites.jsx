import React from 'react';
import { Card, CardContent, Box, Typography, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { FiClock, FiArrowRight, FiStar } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

const Favorite = () => {
  const { user, favorites, toggleFavorite } = useAuth();

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {user ? (
          favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {favorites.map((recipe) => (
                <Card
                  key={recipe.id}
                  className="h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
                  elevation={0}
                >
                  <CardContent className="flex-grow p-6">
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                        <img src={recipe.imageUrl} alt="" className='rounded-md '/>
                    </Box>

                    <Chip 
                      label={recipe.mealType} 
                      size="small" 
                      className="mb-3 bg-blue-50 text-blue-600" 
                    />
                        <Typography 
                        variant="h6" 
                        component="h3" 
                        className="font-bold font-primary text-gray-800 mb-3 line-clamp-2"
                      >
                        {recipe.title}
                      </Typography>
                    <Box className="space-y-3 mb-4">
                      <Box display="flex" alignItems="center">
                        <FiClock className="w-4 h-4 mr-2 text-blue-500" />
                        <Typography variant="body2" className="text-gray-600">
                          Time: {recipe.cookingTime} mins
                        </Typography>
                      </Box>
                    </Box>

                    <Link
                     to={`/recipe/${recipe.id}`} 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm"
                    >
                      View recipe
                      <FiArrowRight className="ml-1.5" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Box className="text-center py-12">
              <Box className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm">
                <FiStar className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <Typography variant="h5" component="h3" className="font-bold text-gray-700 mb-2">
                  No favorites yet
                </Typography>
                <Typography variant="body1" className="text-gray-500">
                  Save your favorite recipes by clicking the star icon ★
                </Typography>
              </Box>
            </Box>
          )
        ) : (
          <Box className="text-center py-12">
            <Box className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm">
              <FiStar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <Typography variant="h5" component="h3" className="font-bold text-gray-700 mb-2">
                Please log in to view favorites
              </Typography>
              <Typography variant="body1" className="text-gray-500">
                Your saved recipes will appear here once you're logged in.
              </Typography>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

export default Favorite;