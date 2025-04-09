import React, { createContext, useState, useEffect, useContext } from 'react';

const RecipeContext = createContext();

export const useRecipes = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (newRecipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
  };

  const deleteRecipe = (recipeId, username) => {
    setRecipes((prev) =>
      prev.filter((recipe) => 
        !(recipe.id === recipeId && recipe.username === username)
      )
    );
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes((prev) =>
      prev.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, deleteRecipe, updateRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
