import React, { useState } from 'react';
import { Card, CardContent, CardMedia, TextField, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import {FiSearch, FiClock, FiArrowRight,FiFrown,FiStar} from 'react-icons/fi';

const Home = () => {
  const [search, setSearch] = useState('');
  const { recipes } = useRecipes();

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // Recipes page
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
    
      <div className="max-w-6xl mx-auto mb-8 md:mb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-primary">
            Culinary Treasures
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Discover recipes that will delight your palate and inspire your cooking
          </p>
        </div>
        
        <div className="relative max-w-md mx-auto">
          <TextField
            fullWidth
            size="medium"
            placeholder="Search recipes..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white rounded-lg"
            InputProps={{
              className: "text-gray-700 pl-4 pr-12 py-2 font-medium",
              endAdornment: (
                <IconButton 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="search"
                >
                  <FiSearch className="text-xl" />
                </IconButton>
              ),
            }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredRecipes.map((recipe) => (
              <Card 
                key={recipe.id} 
                className="group h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
                elevation={0}
              >
                <div className="relative overflow-hidden">
                  <CardMedia
                    component="img"
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    image={recipe.imageUrl || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}
                    alt={recipe.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="flex-grow p-4 md:p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 font-secondary">
                    {recipe.title}
                  </h3>
                  <div className="text-sm text-gray-600 space-y-2 mb-4">
                    <div className="flex items-center">
                      <FiStar className="w-4 h-4 mr-2 text-amber-500" />
                      <span>Rating: {recipe.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="w-4 h-4 mr-2 text-blue-500" />
                      <span>Time: {recipe.cookingTime} mins</span>
                    </div>
                  </div>
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
          <div className="text-center py-12 md:py-20">
            <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm">
              <FiFrown className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2 font-primary">
                {search ? 'No matches found' : 'Recipe box is empty'}
              </h3>
              <p className="text-gray-500">
                {search 
                  ? `We couldn't find any recipes matching "${search}"`
                  : 'Add some recipes to get started!'}
              </p>
              {search && (
                <button 
                  onClick={() => setSearch('')}
                  className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>//
  );
};

export default Home;