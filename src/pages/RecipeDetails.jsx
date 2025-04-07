import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockRecipes } from '../data/mockRecipes'; 
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const RecipeDetails = () => {
  const { id } = useParams(); 
  const { user, saveToFavorites } = useAuth(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    
    const foundRecipe = mockRecipes.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  const handleSaveToFavorites = () => {
    if (user) {
      saveToFavorites(recipe);
    } else {
      alert('Please login to save this recipe to your favorites!');
    }
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        {recipe.title}
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
        Cooking Time: {recipe.cookingTime} | Rating: {recipe.rating} ⭐
      </Typography>

      <img src={recipe.image} alt={recipe.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }} />

      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Ingredients:
      </Typography>
      <List>
        {recipe.ingredients.map((ingredient, index) => (
          <ListItem key={index}>
            <ListItemText primary={ingredient} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Instructions:
      </Typography>
      <Typography variant="body1" paragraph>
        {recipe.instructions}
      </Typography>

   
      {user && (
        <Button variant="contained" color="primary" onClick={handleSaveToFavorites}>
          Save to Favorites
        </Button>
      )}
    </Box>
  );
};

export default RecipeDetails;
