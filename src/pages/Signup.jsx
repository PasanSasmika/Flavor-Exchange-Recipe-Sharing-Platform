import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import home from '/bg.jpg';

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 4;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Validate in real-time
    if (name === 'email') {
      setErrors({
        ...errors,
        email: value && !validateEmail(value) ? 'Please enter a valid email address' : ''
      });
    }
    
    if (name === 'password') {
      setErrors({
        ...errors,
        password: value && !validatePassword(value) ? 'Password must be at least 4 characters' : ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate before submission
    const emailValid = validateEmail(form.email);
    const passwordValid = validatePassword(form.password);
    
    if (!emailValid || !passwordValid) {
      setErrors({
        email: !emailValid ? 'Please enter a valid email address' : '',
        password: !passwordValid ?
        toast.error("Password must be at least 4 characters long") : ''
      });
      return;
    }
    
    // If validations pass
    login(form);
    localStorage.setItem('user', JSON.stringify(form));
    navigate('/');
  };


  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-900  to-black">
      {/* Background Image */}
      <img
             src={home}
             alt="Background"
             className="absolute inset-0 w-full h-full object-cover opacity-20"
           />
      {/* Signup Container */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Decorative Element */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent rounded-2xl -z-10" />

          {/* Header */}
          <h2 className="text-xl text-white/80 text-center font-medium">
          Welcome to Flavor Exchange
          </h2>
          <h1 className="text-3xl md:text-4xl text-white text-center font-bold mt-2 mb-8">
            Sign Up
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Create a password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;