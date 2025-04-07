import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import { useAuth } from '../context/AuthContext';

const AddRecipe = () => {
  const { addRecipe } = useRecipes();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    imageUrl: '',
    cookingTime: '',
    rating: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      ...formData,
      id: Date.now(),
      username: user?.username || 'guest' // add username
    };
    addRecipe(newRecipe);
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Add New Recipe</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth margin="normal" name="title" label="Title" value={formData.title} onChange={handleChange} />
        <TextField fullWidth margin="normal" name="ingredients" label="Ingredients" value={formData.ingredients} onChange={handleChange} />
        <TextField fullWidth margin="normal" name="instructions" label="Instructions" value={formData.instructions} onChange={handleChange} />
        <TextField fullWidth margin="normal" name="imageUrl" label="Image URL" value={formData.imageUrl} onChange={handleChange} />
        <TextField fullWidth margin="normal" name="cookingTime" label="Cooking Time (mins)" value={formData.cookingTime} onChange={handleChange} />
        <TextField fullWidth margin="normal" name="rating" label="Rating" value={formData.rating} onChange={handleChange} />
        <Button type="submit" variant="contained" color="primary">Add Recipe</Button>
      </form>
    </Container>
  );
};

export default AddRecipe;
