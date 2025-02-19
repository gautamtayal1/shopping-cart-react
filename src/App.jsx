import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    // Check if item already exists in cart
    const existingItem = cart.find(cartItem => cartItem.name === item.name)
    
    if (!existingItem) {
      setCart(prevCart => [...prevCart, { ...item, quantity: 1 }])
    } else {
      alert('One hostile takeover at a time, champ.')
    }
  }

  return (
    <>
      <Navbar />
      <Outlet context={{ cart, setCart, addToCart }} />
    </>
  )
}

export default App
