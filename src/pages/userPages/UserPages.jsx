import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import MainPage from '../MainPage'


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
              <Home/>
              
            </main>
          }
        />
      </Routes>
    </div>
  </div>
  )
}

export default UserPages