import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Box, Divider, Chip, Rating, List, ListItem, ListItemText, ListItemIcon, TextField } from '@mui/material';
import { useRecipes } from '../context/RecipeContext';
import { useAuth } from '../context/AuthContext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';
const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes, deleteRecipe, addReview } = useRecipes();
  const [rating, setRating] = useState(0);
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

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please log in to submit a review');
      return;
    }
    if (rating === 0) {
      alert('Please provide both a rating and review text');
      return;
    }
  
    const newReview = {
      id: Date.now(),
      username: user.username,
      rating,
      date: new Date().toISOString()
    };
  
    addReview(recipe.id, newReview);
    setRating(0);
  };

  return (
    <Container maxWidth="lg" className="py-12 font-primary">
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
              <Box className="flex items-center gap-4 mt-2">
                <Chip
                  icon={<AccessTimeIcon />}
                  label={`${recipe.cookingTime} mins`}
                  className="font-secondary"
                  size="small"
                />
                <Chip
                  label={recipe.category}
                  className="font-secondary bg-white/90 text-gray-800"
                  size="small"
                />
                <Chip
                  label={recipe.mealType}
                  className="font-secondary bg-white/90 text-gray-800"
                  size="small"
                />
              </Box>
            </Box>
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
                className="font-primary text-xl font-semibold "
              >
                Ingredients
              </Typography>
            </Box>
            <List dense>
              {recipe.ingredients.map((ingredient, index) => (
                <ListItem key={index} className="py-1">
                  <ListItemIcon className="min-w-6">
                    <CircleIcon sx={{ fontSize: '8px' }} />
                  </ListItemIcon>
                  <ListItemText primary={ingredient} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Alternative Ingredients */}
          {recipe.alternativeIngredients && recipe.alternativeIngredients.length > 0 && (
            <>
              <Divider className="my-4" />
              <Box className="mb-8">
                <Box className="flex items-center gap-3 mb-4">
                  <LocalDiningIcon className="text-green-500" />
                  <Typography 
                    variant="h5" 
                    className="font-primary text-xl font-semibold"
                  >
                    Alternative Ingredients
                  </Typography>
                </Box>
                <List dense>
                  {recipe.alternativeIngredients.map((alt, index) => (
                    <ListItem key={index} className="py-1">
                      <ListItemIcon className="min-w-6">
                        <CircleIcon sx={{ fontSize: '8px', color: 'green' }} />
                      </ListItemIcon>
                      <ListItemText primary={alt} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </>
          )}

          <Divider className="my-6" />

         
          {/* Instructions */}
          <Box className="mb-8">
            <Box className="flex items-center gap-3 mb-4">
              <MenuBookIcon className="text-primary-500" />
              <Typography 
                variant="h5" 
                className="font-primary text-xl font-semibold"
              >
                Instructions
              </Typography>
            </Box>
            <List>
              {recipe.instructions.map((step, index) => (
                <ListItem key={index} className="py-3">
                  <ListItemText
                    primary={
                      <Box className="flex gap-4">
                        <Box className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Typography className="text-primary-600 font-bold">{index + 1}</Typography>
                        </Box>
                        <Typography className="font-secondary text-gray-700">
                          {step}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
              
          <Box className="mb-8">
  <Box className="flex items-center gap-3 mb-4">
    <StarIcon className="text-yellow-500" />
    <Typography variant="h5" className="font-primary text-xl font-semibold">
      Reviews
    </Typography>
  </Box>

  {/* Review Form */}
  {user && (
    <Box component="form" onSubmit={handleReviewSubmit} className="mb-6">
      <Rating
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
        className="mb-4"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="font-primary py-2 px-6 rounded-full"
      >
        Submit Review
      </Button>
    </Box>
  )}

  {/* Display Reviews */}
  {recipe.reviews && recipe.reviews.length > 0 ? (
    <List>
      {recipe.reviews.map((review) => (
        <ListItem key={review.id} className="py-3 flex-col items-start">
          <Box className="flex items-center gap-2 mb-2">
            <Typography className="font-secondary font-bold">
              {review.username}
            </Typography>
            <Rating value={review.rating} readOnly size="small" />
          </Box>
          <Typography className="font-secondary text-gray-700">
            {review.text}
          </Typography>
          <Typography className="font-secondary text-gray-500 text-sm mt-1">
            {new Date(review.date).toLocaleDateString()}
          </Typography>
        </ListItem>
      ))}
    </List>
  ) : (
    <Typography className="font-secondary text-gray-600">
      No reviews yet. Be the first to review this recipe!
    </Typography>
  )}
</Box>


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
          )}   </Box>
      </Box>
    </Container>
  );
};

export default RecipeDetails;