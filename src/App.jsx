import { Route, Routes } from "react-router-dom"
// import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import RecipeDetails from "./pages/RecipeDetails"
import Favorites from "./pages/Favorites"
import AddRecipe from "./pages/AddRecipe"
import UserPages from "./pages/userPages/userPages"


function App() {

  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<UserPages />} />
      {/* <Route path="/" element={<Home />} /> */}
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
