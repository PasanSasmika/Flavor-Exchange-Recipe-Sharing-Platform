import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    login(form);
    localStorage.setItem('user', JSON.stringify(form));

    navigate('/');
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>Sign Up</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" name="name" margin="normal" value={form.name} onChange={handleChange} required />
          <TextField fullWidth label="Email" name="email" margin="normal" value={form.email} onChange={handleChange} required />
          <TextField fullWidth label="Password" name="password" type="password" margin="normal" value={form.password} onChange={handleChange} required />
          <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Sign Up</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
