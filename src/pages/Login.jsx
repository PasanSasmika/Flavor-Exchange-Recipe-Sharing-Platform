import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
   
    if (storedUser && storedUser.email === form.email && storedUser.password === form.password) {
      login(storedUser);
      navigate('/');
    } else {
      alert('Invalid email or password. Please sign up first.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Email" name="email" margin="normal" value={form.email} onChange={handleChange} required />
          <TextField fullWidth label="Password" name="password" type="password" margin="normal" value={form.password} onChange={handleChange} required />
          <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Login</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
