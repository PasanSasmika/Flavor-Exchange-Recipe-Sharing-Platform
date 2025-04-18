import React, { useState } from 'react';
import { Card, CardContent, CardMedia, TextField, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import {FiSearch, FiClock, FiArrowRight,FiFrown,FiStar, FiHeart} from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const [search, setSearch] = useState('');
  const { recipes } = useRecipes();
  const { user, toggleFavorite, favorites } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free', 'Keto'];
  
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = 
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.mealType.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = 
      selectedCategory ? recipe.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    // Recipes page
    <div className="min-h-screen p-4 md:p-8">
    
      <div className="max-w-6xl mx-auto mb-8 md:mb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold  mb-2 font-primary">
            Culinary Treasures
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover recipes that will delight your palate and inspire your cooking
          </p>
        </div>
        
        <div className="relative max-w-md mx-auto">
  <div className="relative flex items-center">
    <input
      type="text"
      placeholder="Search recipes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full pl-5 pr-12 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 shadow-sm text-gray-700 font-medium"
    />
    <button 
      className="absolute right-3 text-gray-500 hover:text-blue-600 transition-colors"
      aria-label="search"
    >
      <FiSearch className="w-5 h-5" />
    </button>
  </div>
  <div className="flex flex-wrap justify-center gap-2 mt-4">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
      className={`px-4 py-1 rounded-4xl border transition-colors ${
        selectedCategory === category
          ? 'bg-blue-500 text-white border-blue-500'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
      }`}
    >
      {category}
    </button>
  ))}
</div>
</div>
      </div>

      <div className="max-w-6xl mx-auto">
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredRecipes.map((recipe) => (
              <Card 
                key={recipe.id} 
                className="group h-full flex flex-col bg-white rounded-xl overflow-hidden  transition-all duration-300 border border-gray-100"
                elevation={0}
              >
                <div className="relative overflow-hidden">
                  <CardMedia
                    component="img"
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    image={recipe.imageUrl || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}
                    alt={recipe.title}
                  />
                   <div className="absolute bottom-2 left-2  bg-opacity-70  px-2 py-1 rounded-4xl border">
                   <p className="font-secondary text-sm">
                     {recipe.category}
                     </p>
                 </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="flex-grow p-4 md:p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 font-secondary">
                    {recipe.title}
                  </h3>
                  <h3 className="text-sm  text-gray-800 mb-2 line-clamp-2 font-secondary">
                    {recipe.mealType}
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
                  {user && (
              <IconButton
                onClick={() => toggleFavorite(recipe)}
                size="small"
              >
                
                <FiHeart className="ml-44" />
              </IconButton>
            )}
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
              {(search || selectedCategory) && (
      <button 
        onClick={() => {
          setSearch('');
          setSelectedCategory(null);
        }}
        className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
      >
        Clear filters
      </button>
    )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;