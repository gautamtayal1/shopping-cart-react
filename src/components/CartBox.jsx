import React from 'react';

const CartBox = ({ name, url, price, addToCart }) => {
  const handleAddToCart = () => {
    const item = {
      name,
      price,
      url
    }
    addToCart(item)
  }

  return (
    <div className="cardContainer h-[50vh] w-[20vw] border rounded-2xl">
      <img src={url} alt="" className='h-[32vh] w-[20vw] rounded-2xl rounded-b-none' />
      <div className='h-[10vh] w-[20vw] flex justify-between items-center p-3'>
        <div>{name}</div>
        <div>${price} B</div>
      </div>
      <div className="div h-[8vh] text-center">
        <button 
          className='border-1 rounded p-1 hover:cursor-pointer' 
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default CartBox
