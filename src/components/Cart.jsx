import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Cart = () => {
  const { cart } = useOutletContext()

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='h-auto min-h-[100vh] w-3xl m-auto mb-4 p-8 bg-gray-200 mt-5'>
          <h1 className='text-4xl font-bold text-center'>Hostile Takecart</h1>

          {cart.map((item, index) => (
            <div key={index}>
              <div className="item flex justify-between items-center border p-6 m-5 rounded">
                <span className='text-2xl font-medium'>{item.name}</span>
                <span className='text-2xl font-medium'>${item.price} B</span>
              </div>
              
            </div>
          ))}
          <div className="billSection flex flex-col gap-3 mt-30">
                <h1 className='text-2xl font-semibold'>Bill Details</h1>
                <div className="flex justify-between">
                  <span className='mr-10'>Item Total</span>
                  <span>${totalPrice} B</span>
                </div>
                <div className="flex justify-between">
                  <span className='mr-10'>Free Speech Tax</span>
                  <span>$ 44 B</span>
                </div>
                <div className="flex justify-between">
                  <span className='mr-10'>Government Bribe</span>
                  <span>$ 1.4 B</span>
                </div>
                <div className="flex justify-between">
                  <span className='mr-10'>Overpopulation Fee</span>
                  <span>$ 2 B</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold">
                  <span className='mr-10'>Item Total</span>
                  <span>$ {totalPrice + 44 + 1.4 + 2} B</span>
                </div>
              </div>
              <div className="flex justify-end mt-10">
                <button className=" bg-green-500 p-2 rounded text-white border hover:cursor-pointer"
                onClick={() => alert("Relax, you’re not Elon. Your bank account has feelings.")}
                >Checkout</button>
              </div>
        </div>
        
      )}
    </div>
  )
}

export default Cart
