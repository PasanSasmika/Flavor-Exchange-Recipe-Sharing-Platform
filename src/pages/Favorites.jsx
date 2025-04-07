import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Favorites = () => {
  const { user, favorites } = useAuth();

  if (!user) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" color="text.secondary">
          Please login to view your favorite recipes.
        </Typography>
      </Box>
    );
  }

  if (favorites.length === 0) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" color="text.secondary">
          You have no favorite recipes yet.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Your Favorite Recipes
      </Typography>

      <Grid container spacing={4}>
        {favorites.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={recipe.image}
                alt={recipe.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cooking Time: {recipe.cookingTime}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {recipe.rating} ⭐
                </Typography>
                <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Favorites;
