import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import MainPage from '../MainPage'
import LatestRecipes from './LatestRecipies'
import Story from './Story'


function UserPages() {
  return (
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
            </main>
          }
        />
      </Routes>
    </div>
  </div>
  )
}

export default UserPages