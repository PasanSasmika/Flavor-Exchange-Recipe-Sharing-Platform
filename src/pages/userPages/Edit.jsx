import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container, Box, TextField, Button, Divider, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useRecipes } from '../../context/RecipeContext';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const Edit = () => {
  const { id } = useParams();
  const { recipes, updateRecipe } = useRecipes();
  const { user } = useAuth();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <Typography className="text-rose-600 text-xl font-medium">Recipe not found</Typography>;
  }
  if (user?.username !== recipe.username) {
    navigate('/');
    return null;
  }

  const [formData, setFormData] = useState({
    id: recipe.id,
    title: recipe.title,
    username: recipe.username,
    imageUrl: recipe.imageUrl || '',
    cookingTime: recipe.cookingTime || '',
    category: recipe.category || '',
    mealType: recipe.mealType || '',
    ingredients: recipe.ingredients.join('\n'),
    alternativeIngredients: recipe.alternativeIngredients?.join('\n') || '',
    instructions: recipe.instructions.join('\n'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...formData,
      ingredients: formData.ingredients.split('\n').filter((item) => item.trim() !== ''),
      alternativeIngredients: formData.alternativeIngredients.split('\n').filter((item) => item.trim() !== ''),
      instructions: formData.instructions.split('\n').filter((item) => item.trim() !== ''),
      reviews: recipe.reviews || [],
    };
    updateRecipe(updatedRecipe);
    toast.success('Recipe Updated Successful')
    navigate(`/recipe/${recipe.id}`);
  };

  const categoryOptions = ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free', 'Keto'];
  const mealTypeOptions = ['Appetizer', 'Main Course', 'Dessert', 'Breakfast', 'Snack'];

  return (
    <Container maxWidth="md" className="py-12 px-4">
      <Box className="mb-10 text-center">
        <Typography variant="h4" className="text-4xl font-bold text-gray-800 mb-2">
          Edit Recipe
        </Typography>
        <Typography className="text-xl text-gray-500">
          {recipe.title}
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-gray-200">
        <Box className="space-y-8">
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              name="title"
              value={formData.title}
              onChange={handleChange}
              InputProps={{ className: "rounded-lg" }}
            />
            
            <TextField
              fullWidth
              label="Image URL"
              variant="outlined"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              InputProps={{ className: "rounded-lg" }}
            />
          </Box>

          <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TextField
              fullWidth
              label="Cooking Time"
              variant="outlined"
              type="number"
              name="cookingTime"
              value={formData.cookingTime}
              onChange={handleChange}
              InputProps={{ className: "rounded-lg" }}
            />
            
            <FormControl fullWidth variant="outlined">
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                label="Category"
                className="rounded-lg"
              >
                <MenuItem value="">
                  <em>Select Category</em>
                </MenuItem>
                {categoryOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <FormControl fullWidth variant="outlined">
              <InputLabel>Meal Type</InputLabel>
              <Select
                name="mealType"
                value={formData.mealType}
                onChange={handleChange}
                label="Meal Type"
                className="rounded-lg"
              >
                <MenuItem value="">
                  <em>Select Meal Type</em>
                </MenuItem>
                {mealTypeOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box className="space-y-8">
            <Box>
              <Typography className="text-sm font-medium text-gray-700 mb-2">Ingredients</Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                InputProps={{ className: "rounded-lg" }}
              />
            </Box>

            <Box>
              <Typography className="text-sm font-medium text-gray-700 mb-2">Alternative Ingredients</Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                name="alternativeIngredients"
                value={formData.alternativeIngredients}
                onChange={handleChange}
                InputProps={{ className: "rounded-lg" }}
              />
            </Box>

            <Box>
              <Typography className="text-sm font-medium text-gray-700 mb-2">Instructions</Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                InputProps={{ className: "rounded-lg" }}
              />
            </Box>
          </Box>

          <Divider className="!my-8" />

          <Box className="flex gap-4 justify-end">
            <Button
              variant="outlined"
              className="px-6 py-2 rounded-lg border-gray-300 text-gray-600"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white shadow-sm"
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Edit;