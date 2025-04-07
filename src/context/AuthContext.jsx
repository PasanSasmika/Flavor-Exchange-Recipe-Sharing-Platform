import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [favorites, setFavorites] = useState([]); 

 
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setFavorites([]);
  };

  const saveToFavorites = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, favorites, saveToFavorites }}>
      {children}
    </AuthContext.Provider>
  );
};
