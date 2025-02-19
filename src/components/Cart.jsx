import React from 'react'

const Cart = () => {
  return (
    <div>
      <div className=' h-auto min-h-[100vh] w-3xl m-auto mb-4 p-8 bg-gray-300 mt-5'>
        <h1 className='text-4xl font-bold text-center'>Hostile Takecart </h1>
        <div className="item flex justify-between items-center border p-6 m-5 rounded">
          <span className='text-2xl font-medium'>Twitter</span>
          <div className="updateBtn flex gap-3 border p-2 rounded-2xl">
            <button className='text-gray-500'>-</button>
            <span>1</span>
            <button className=' text-green-400'>+</button>
          </div>
        </div>

        <div className="billSection flex flex-col gap-3 mt-30">
            <h1 className='text-2xl font-semibold'>Bill Details</h1>
            <div className="flex justify-between">
              <span className='mr-10'>Item Total</span>
              <span>₹320</span>
            </div>
            <div className=" flex justify-between">
              <span className='mr-10'>Free Speech Tax</span>
              <span>$ 44 B</span>
            </div>
            <div className="flex justify-between">
              <span className='mr-10'>Government Bribe</span>
              <span>$ 1.4 B</span>
            </div>
            <div className="flex justify-between">
              <span className='mr-10'>Overpopulation Fee </span>
              <span>$ 2 B</span>
            </div><hr />
            <div className="flex justify-between font-bold">
              <span className='mr-10'>Item Total</span>
              <span>₹400</span>
            </div>
          </div>
      
    
        
      </div>
    </div>
  )
}

export default Cart
