import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[12vh] w-[100vw] bg-amber-500 flex jus p-5 text-white justify-between items-center'>
      <Link to ="/" ><div className="logo font-bold text-2xl">elonmusk.com</div></Link>
      <div className="right flex gap-7">
         <Link to ="/home" ><div className="text-[22px] font-medium">Home</div></Link>
         <Link to ="/cart" ><div className="text-[22px] font-medium pr-3">Cart</div></Link>
      </div>
    </div>
  )
}

export default Navbar
