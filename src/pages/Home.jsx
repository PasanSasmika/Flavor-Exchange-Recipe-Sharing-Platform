import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { mockRecipes } from '../data/mockRecipes';

const Home = () => {
  const [search, setSearch] = useState('');

  
  const filteredRecipes = mockRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ padding: 4 }}>
      <TextField
        fullWidth
        label="Search Recipes"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 4 }}
      />

      <Grid container spacing={4}>
        {filteredRecipes.map((recipe) => (
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
                  <Typography variant="body2" color="primary">
                    View Details
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
