import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Flavor Exchange
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/create">Add Recipe</Button>
      <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
      <Button color="inherit" component={Link} to="/login">Login</Button>
      <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
    </Toolbar>
  </AppBar>  )
}

export default NavBar