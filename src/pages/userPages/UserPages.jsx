import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import MainPage from '../MainPage'
import LatestRecipes from './LatestRecipies'
import Story from './Story'
import Footer from '../../components/Footer'
import Preloader from '../../components/Preloader'


function UserPages() {
  
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
      setTimeout(() => {
        setLoading(false)
      }, 3600);
      window.scrollTo(0, 0);
  
    },[])
  return (
    <>
    {loading ? (
        <Preloader />
      ) : (
    <div className="w-full h-screen bg-primary">
    <div>
      <Routes>
        <Route
        path='/'
          element={
            <main>
                <MainPage/>
                <LatestRecipes/>
                <Story/>
                <Footer/>
            </main>
          }
        />
      </Routes>
    </div>
  </div>
  )}
  </>
  )
}

export default UserPages