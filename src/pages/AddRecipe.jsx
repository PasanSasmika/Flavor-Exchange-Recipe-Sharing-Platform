import React, { useState, useEffect } from 'react';
import { 
  TextField, Button, Container, Typography, Box, 
  Grid, InputLabel, Select, MenuItem, IconButton,
  FormControl, Divider, Chip
} from '@mui/material';
import { AddCircle, Delete, CloudUpload, LocalDining } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const categories = ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free', 'Keto'];
const mealTypes = ['Appetizer', 'Main Course', 'Dessert', 'Breakfast', 'Snack'];

const AddRecipe = () => {
  const { addRecipe } = useRecipes();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    ingredients: [''],
    instructions: [''],
    alternativeIngredients: [''],
    imageFile: null,
    imagePreview: '',
    cookingTime: '',
    category: '',
    mealType: ''
  });

  useEffect(() => {
    if (!user) {
      toast.error("Please Login to add Recipies ")
      navigate('/login');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          imageFile: file,
          imagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addListItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeListItem = (field, index) => {
    const updatedItems = formData[field].filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, [field]: updatedItems }));
  };

  const handleListChange = (field, index, value) => {
    const updatedItems = [...formData[field]];
    updatedItems[index] = value;
    setFormData(prev => ({ ...prev, [field]: updatedItems }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return; 
    const newRecipe = {
      ...formData,
      id: Date.now(),
      username: user.username, 
      imageUrl: formData.imagePreview,
    };
    delete newRecipe.imageFile;
    delete newRecipe.imagePreview;
    addRecipe(newRecipe);
    toast.success('Recipe added successfully')
    navigate('/');
  };

  return (
    <Container maxWidth="lg" className="py-8">
      <Box className="text-center mb-8">
        <LocalDining className="text-4xl mb-2 font-primary font-bold" />
        <Typography variant="h3" className="font-bold 0 mb-2">
          Share Your Culinary Creation
        </Typography>
        <Typography variant="subtitle1">
          Craft your recipe with love and precision
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <Typography variant="h5" className="font-semibold mb-4 text-gray-700">
            Basic Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Recipe Title"
                name="title"
                variant="outlined"
                value={formData.title}
                onChange={handleChange}
                required
                InputProps={{
                  className: 'bg-gray-50 rounded-lg'
                }}
              />
            </Grid>
            
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 w-full"
                >
                  {categories.map(category => (
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Meal Type</InputLabel>
                <Select
                  name="mealType"
                  value={formData.mealType}
                  onChange={handleChange}
                  required
                  className="bg-gray-50"
                >
                  {mealTypes.map(type => (
                    <MenuItem key={type} value={type}>{type}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Cooking Time (mins)"
                name="cookingTime"
                type="number"
                value={formData.cookingTime}
                onChange={handleChange}
                required
                InputProps={{
                  className: 'bg-gray-50 rounded-lg'
                }}
              />
            </Grid>

          </Grid>
        </Box>

        
        <Box className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <Typography variant="h5" className="font-semibold mb-4 text-gray-700">
            Visual Storytelling
          </Typography>
          <label htmlFor="image-upload" className="cursor-pointer">
            <Box className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary-500 transition-colors">
              <CloudUpload className="text-4xl text-gray-400 mb-4" />
              <Typography variant="h6" className="text-gray-600 mb-2">
                Drag & Drop or Click to Upload
              </Typography>
              <Typography variant="body2" className="text-gray-500">
                Recommended size: 1200x800 pixels (JPEG/PNG)
              </Typography>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
              {formData.imagePreview && (
                <Box className="mt-6">
                  <img
                    src={formData.imagePreview}
                    alt="Preview"
                    className="mx-auto max-h-64 rounded-lg shadow-md object-cover"
                  />
                  <Chip
                    label="Image Ready!"
                    color="success"
                    variant="outlined"
                    className="mt-4"
                    icon={<CloudUpload />}
                  />
                </Box>
              )}
            </Box>
          </label>
        </Box>

        {/* Ingredients Section */}
        <Box className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <Typography variant="h5" className="font-semibold mb-4 text-gray-700">
            Ingredients
          </Typography>
          {formData.ingredients.map((ingredient, index) => (
            <Box key={index} className="flex gap-4 mb-4 items-center">
              <div className="flex-1">
                <TextField
                  fullWidth
                  label={`Ingredient ${index + 1}`}
                  value={ingredient}
                  onChange={(e) => handleListChange('ingredients', index, e.target.value)}
                  required
                  InputProps={{
                    className: 'bg-gray-50 rounded-lg',
                    startAdornment: <span className="text-primary-600 mr-2">•</span>
                  }}
                />
              </div>
              {index > 0 && (
                <IconButton
                  onClick={() => removeListItem('ingredients', index)}
                  className="text-red-500რhover:bg-red-50"
                >
                  <Delete />
                </IconButton>
              )}
            </Box>
          ))}
          <Button
            variant="outlined"
            startIcon={<AddCircle />}
            onClick={() => addListItem('ingredients')}
            className="mt-4 text-primary-600 border-primary-300 hover:border-primary-500"
          >
            Add Another Ingredient
          </Button>
        </Box>

        {/* Alternative Ingredients Section */}
        <Box className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <Typography variant="h5" className="font-semibold mb-4 text-gray-700">
            Alternative Ingredients
          </Typography>
          {formData.alternativeIngredients.map((alt, index) => (
            <Box key={index} className="flex gap-4 mb-4 items-center">
              <div className="flex-1">
                <TextField
                  fullWidth
                  label={`Alternative ${index + 1}`}
                  value={alt}
                  onChange={(e) => handleListChange('alternativeIngredients', index, e.target.value)}
                  InputProps={{
                    className: 'bg-gray-50 rounded-lg',
                    startAdornment: <span className="text-green-600 mr-2">♻️</span>
                  }}
                />
              </div>
              {index > 0 && (
                <IconButton
                  onClick={() => removeListItem('alternativeIngredients', index)}
                  className="text-red-500 hover:bg-red-50"
                >
                  <Delete />
                </IconButton>
              )}
            </Box>
          ))}
          <Button
            variant="outlined"
            startIcon={<AddCircle />}
            onClick={() => addListItem('alternativeIngredients')}
            className="mt-4 text-green-600 border-green-300 hover:border-green-500"
          >
            Add Alternative Ingredient
          </Button>
        </Box>

        {/* Step-by-Step Instructions */}
        <Box className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <Typography variant="h5" className="font-semibold mb-4 text-gray-700">
            Cooking Instructions
          </Typography>
          {formData.instructions.map((step, index) => (
            <Box key={index} className="flex gap-4 mb-6 items-start">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-bold">{index + 1}</span>
              </div>
              <div className="flex-1">
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label={`Step ${index + 1}`}
                  value={step}
                  onChange={(e) => handleListChange('instructions', index, e.target.value)}
                  required
                  InputProps={{
                    className: 'bg-gray-50 rounded-lg'
                  }}
                />
              </div>
              {index > 0 && (
                <IconButton
                  onClick={() => removeListItem('instructions', index)}
                  className="text-red-500 hover:bg-red-50 mt-2"
                >
                  <Delete />
                </IconButton>
              )}
            </Box>
          ))}
          <Button
            variant="outlined"
            startIcon={<AddCircle />}
            onClick={() => addListItem('instructions')}
            className="mt-4 text-blue-600 border-blue-300 hover:border-blue-500"
          >
            Add Another Step
          </Button>
        </Box>

        <Box className="text-center">
          <Button
            type="submit"
            variant="contained"
            size="large"
            className="py-4 px-12 text-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
          >
            Publish Recipe
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AddRecipe;