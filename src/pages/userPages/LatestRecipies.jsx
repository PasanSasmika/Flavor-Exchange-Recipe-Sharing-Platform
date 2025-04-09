import React, { useState } from 'react';
import { useRecipes } from '../../context/RecipeContext';
import { Link } from 'react-router-dom';

function LatestRecipes() {
    const [search, setSearch] = useState('');
    const { recipes } = useRecipes();
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="font-primary font-bold text-3xl uppercase tracking-wider mb-8 text-gray-800">
                Latest Recipes
            </h2>

            {/* Recipes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRecipes.slice(0, 3).map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                    >
                        {/* Recipe Image */}
                        <div className="w-full h-56 relative overflow-hidden">
                            <img 
                                src={recipe.imageUrl} 
                                alt={recipe.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full border border-white shadow-sm">
                                <p className="font-secondary text-sm font-medium">
                                    ⏰ {recipe.mealType}
                                </p>
                            </div>
                        </div>
                        
                        {/* Recipe Details */}
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-primary text-xl font-bold text-gray-900 line-clamp-1">
                                    {recipe.title}
                                </h4>
                                <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                                    {recipe.category}
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-4 text-gray-600 mt-3">
                                <p className="font-secondary text-sm">
                                    ⏱️ {recipe.cookingTime} mins
                                </p>
                                <p className="font-secondary text-sm">
                                    ⭐ {recipe.rating}
                                </p>
                            </div>
                            
                            <Link
                                to={`/recipe/${recipe.id}`}
                                className="mt-4 inline-flex items-center font-secondary text-primary hover:text-primary-dark font-medium transition-colors group-hover:underline"
                            >
                                View Details →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-10 text-center">
                <Link 
                    to="/recipes" 
                    className="inline-flex items-center px-6 py-3 rounded-lg shadow-md transition-all font-medium"
                >
                    View All Recipes 
                </Link>
            </div>
        </div>
    );
}

export default LatestRecipes;