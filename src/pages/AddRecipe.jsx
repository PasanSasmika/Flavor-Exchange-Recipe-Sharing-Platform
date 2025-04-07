import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
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
    imageFile: null, // store file
    imagePreview: '', // store preview URL
    cookingTime: '',
    rating: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          imageFile: file,
          imagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      ...formData,
      id: Date.now(),
      username: user?.username || 'guest',
      imageUrl: formData.imagePreview, 
    };

    delete newRecipe.imageFile;
    delete newRecipe.imagePreview;

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
        
       
        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload Image
          <input type="file" hidden accept="image/*" onChange={handleImageChange} />
        </Button>

        {formData.imagePreview && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Image Preview:</Typography>
            <img
              src={formData.imagePreview}
              alt="Preview"
              style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 8 }}
            />
          </Box>
        )}

        <TextField fullWidth margin="normal" name="cookingTime" label="Cooking Time (mins)" value={formData.cookingTime} onChange={handleChange} />
        <TextField fullWidth margin="normal" name="rating" label="Rating" value={formData.rating} onChange={handleChange} />

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Add Recipe
        </Button>
      </form>
    </Container>
  );
};

export default AddRecipe;
