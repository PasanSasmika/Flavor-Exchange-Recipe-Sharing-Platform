import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Container } from '@mui/material';
import { useRecipes } from '../context/RecipeContext';
import { useAuth } from '../context/AuthContext';

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes, deleteRecipe } = useRecipes();
  const { user } = useAuth();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <Typography>Recipe not found</Typography>;

  const handleDelete = () => {
    deleteRecipe(recipe.id, user.username);
    navigate('/');
  };

  const handleEdit = () => {
    navigate(`/edit/${recipe.id}`);
  };

  return (
    <Container>
      <Typography variant="h4">{recipe.title}</Typography>
      <img src={recipe.imageUrl} alt={recipe.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <Typography>Cooking Time: {recipe.cookingTime} mins</Typography>
      <Typography>Rating: {recipe.rating}</Typography>
      <Typography variant="h6">Ingredients:</Typography>
      <Typography>{recipe.ingredients}</Typography>
      <Typography variant="h6">Instructions:</Typography>
      <Typography>{recipe.instructions}</Typography>

      {user?.username === recipe.username && (
        <>
          <Button variant="contained" color="primary" onClick={handleEdit} style={{ marginRight: '8px' }}>Edit</Button>
          <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
        </>
      )}
    </Container>
  );
};

export default RecipeDetails;
