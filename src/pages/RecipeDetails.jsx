import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Box, Divider, Chip, Rating } from '@mui/material';
import { useRecipes } from '../context/RecipeContext';
import { useAuth } from '../context/AuthContext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes, deleteRecipe } = useRecipes();
  const { user } = useAuth();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <Typography className="font-primary">Recipe not found</Typography>;

  const handleDelete = () => {
    deleteRecipe(recipe.id, user.username);
    navigate('/');
  };

  const handleEdit = () => {
    navigate(`/edit/${recipe.id}`);
  };

  return (
    <Container maxWidth="lg" className="py-12">
      <Box className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Image */}
        <Box className="lg:w-1/2">
          <Box className="relative pb-[75%] overflow-hidden rounded-2xl shadow-lg bg-gray-100">
            <img 
              src={recipe.imageUrl} 
              alt={recipe.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <Box className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <Typography 
                variant="h2" 
                className="font-primary text-white text-3xl md:text-4xl font-bold"
              >
                {recipe.title}
              </Typography>
            </Box>
          </Box>
          
          <Box className="mt-6 flex flex-wrap gap-3">
            <Chip
             
              label={`${recipe.cookingTime} mins`}
              className="font-secondary bg-white border border-gray-200"
            />
            <Chip
              
              label={
                <Rating 
                  value={recipe.rating} 
                  precision={0.5} 
                  readOnly 
                  size="small" 
                />
              }
              className="font-secondary bg-white border border-gray-200"
            />
          </Box>
        </Box>

        {/* Right Column - Content */}
        <Box className="lg:w-1/2">
          {/* Ingredients */}
          <Box className="mb-8">
            <Box className="flex items-center gap-3 mb-4">
              <LocalDiningIcon className="text-primary-500" />
              <Typography 
                variant="h5" 
                className="font-primary text-xl font-semibold text-gray-800"
              >
                Ingredients
              </Typography>
            </Box>
            <Box className="pl-9">
              <Typography className="font-secondary text-gray-700 whitespace-pre-line leading-relaxed">
                {recipe.ingredients}
              </Typography>
            </Box>
          </Box>

          <Divider className="my-6" />

          {/* Instructions */}
          <Box className="mb-8">
            <Box className="flex items-center gap-3 mb-4">
              <MenuBookIcon className="text-primary-500" />
              <Typography 
                variant="h5" 
                className="font-primary text-xl font-semibold text-gray-800"
              >
                Instructions
              </Typography>
            </Box>
            <Box className="pl-9">
              <Typography className="font-secondary text-gray-700 whitespace-pre-line leading-relaxed">
                {recipe.instructions}
              </Typography>
            </Box>
          </Box>

          {/* Action Buttons */}
          {user?.username === recipe.username && (
            <Box className="flex gap-4 mt-8">
              <Button 
                variant="outlined" 
                color="primary" 
                onClick={handleEdit}
                className="font-primary py-2 px-6 rounded-full border-2 hover:bg-primary-50 transition-all"
                size="large"
              >
                Edit Recipe
              </Button>
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={handleDelete}
                className="font-primary py-2 px-6 rounded-full hover:bg-secondary-600 transition-all shadow-sm"
                size="large"
              >
                Delete Recipe
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default RecipeDetails;