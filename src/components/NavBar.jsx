import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import Auth context

function Navbar() {
  const { user, logout } = useAuth(); // Get user info and logout from AuthContext
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Flavor Exchange
        </Typography>
        
        <Box>
          
          <Button color="inherit" component={Link} to="/">Home</Button>
          
          
          {user && (
            <>
              <Button color="inherit" component={Link} to="/create">Add Recipe</Button>
              <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
            </>
          )}

         
          {!user ? (
            <>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            </>
          ) : (
           
            <>
              <Typography variant="body1" sx={{ mx: 2 }}>
                Welcome, {user.name}!
              </Typography>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
