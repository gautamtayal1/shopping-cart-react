import { useState } from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import { Outlet } from 'react-router-dom'

function App() {
  

  return(
    <>
    <Navbar />
    <Outlet />
    </>
    
  )
}

export default App
