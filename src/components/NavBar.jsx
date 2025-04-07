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
          {/* Home link */}
          <Button color="inherit" component={Link} to="/">Home</Button>
          
          {/* Show "Add Recipe" and "Favorites" only if the user is logged in */}
          {user && (
            <>
              <Button color="inherit" component={Link} to="/create">Add Recipe</Button>
              <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
            </>
          )}

          {/* Show Login/Signup if user is not logged in */}
          {!user ? (
            <>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            </>
          ) : (
            // If logged in, show Welcome message and Logout button
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
