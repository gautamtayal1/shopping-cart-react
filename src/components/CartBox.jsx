import React from 'react'

const CartBox = ({url, price, data}) => {
  return (
      <div className="cardContainer h-[42vh] w-[20vw] border rounded-2xl">
        <img src={url} alt=""
        className='h-[32vh] w-[20vw] rounded-2xl rounded-b-none'
        />
        <div className=' h-[10vh] w-[20vw] flex justify-between items-center p-3'>
          <div>${price} B</div>
          <button className='border-1 rounded p-1'
          onClick={}
          >Add to Cart</button>
        </div>
      </div>
  )
}

export default CartBox
