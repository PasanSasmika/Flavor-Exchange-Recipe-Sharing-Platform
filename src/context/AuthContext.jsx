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

    const userFavorites = JSON.parse(
      localStorage.getItem(`favorites_${userData.username}`) || '[]'
    );
    setFavorites(userFavorites);
  };

  const logout = () => {
    setUser(null);
    setFavorites([]);
  };

  const toggleFavorite = (recipe) => {
    if (!user) return;

    const isFavorite = favorites.some((fav) => fav.id === recipe.id);
    const newFavorites = isFavorite
      ? favorites.filter((fav) => fav.id !== recipe.id)
      : [...favorites, recipe];

    setFavorites(newFavorites);
    localStorage.setItem(
      `favorites_${user.username}`,
      JSON.stringify(newFavorites)
    );
  };
  const saveToFavorites = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, favorites, saveToFavorites , toggleFavorite }}>
      {children}
    </AuthContext.Provider>
  );
};
