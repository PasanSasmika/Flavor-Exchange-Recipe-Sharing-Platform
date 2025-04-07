import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { RecipeProvider } from './context/RecipeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <RecipeProvider>

    <App />
    </RecipeProvider>
  </AuthProvider>
   
    </BrowserRouter>
)
