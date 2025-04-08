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
            <h2 className="font-primary font-bold text-2xl uppercase tracking-wider text-gray-800 mb-6">
                Latest Recipes
            </h2>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <div className="w-full h-48">
                            <img
                                src={recipe.imageUrl}
                                alt={recipe.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-4">
                            <h4 className="font-primary text-lg font-medium text-gray-900">
                                {recipe.title}
                            </h4>
                            <p className="font-secondary text-gray-600 mt-1">
                                ⏰ {recipe.cookingTime}
                            </p>
                            <p className="font-secondary text-gray-600 mt-1">
                                ⭐ {recipe.rating}
                            </p>
                            <a 
                                href={`/recipe/${recipe.id}`} 
                                className="font-secondary text-primary hover:underline mt-2 inline-block"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <Link 
                    to="/recipes" 
                    className="inline-block px-6 py-2 bg-primary text-black rounded-md hover:bg-primary-dark transition-colors font-primary"
                >
                    View All Recipes
                </Link>
            </div>
        </div>
    );
}

export default LatestRecipes;