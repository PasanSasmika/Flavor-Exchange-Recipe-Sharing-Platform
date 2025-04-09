import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import RecipeDetails from "./pages/RecipeDetails"
// import Favorites from "./pages/Favorites"
import AddRecipe from "./pages/AddRecipe"
import UserPages from "./pages/userPages/UserPages"
import Home from "./pages/Home"
import Mode from "./components/mode"
import { useEffect, useState } from "react"
import Story from "./pages/userPages/Story"
import { Toaster } from "react-hot-toast"
import Favorite from "./pages/userPages/Favorites"


function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <>
    <NavBar />
    <Toaster/>
    <Routes>
    <Route path="/" element={<UserPages />} />
      <Route path="/recipes" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/favorites" element={<Favorite />} />
      <Route path="/create" element={<AddRecipe />} />
      <Route path="/about" element={<Story/>} />
      <Route path="/mode" element={<Mode theme={theme} setTheme={setTheme} />} />
      </Routes>
  </>
  )
}

export default App
