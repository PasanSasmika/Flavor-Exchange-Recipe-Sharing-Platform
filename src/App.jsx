import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import RecipeDetails from "./pages/RecipeDetails"
import Favorites from "./pages/Favorites"
import AddRecipe from "./pages/AddRecipe"
import UserPages from "./pages/userPages/userPages"
import Home from "./pages/Home"


function App() {

  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<UserPages />} />
      <Route path="/recipes" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/create" element={<AddRecipe />} />
    </Routes>
  </>
  )
}

export default App
