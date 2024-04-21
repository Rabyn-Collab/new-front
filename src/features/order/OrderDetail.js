import React from 'react'
import { regUser } from '../../dummy/users'
import { orders } from '../../dummy/orders'


const OrderDetail = () => {


  return (
    <div className='p-4'>

      <div>
        <h1 className="text-2xl font-bold">Delivery Address</h1>
        <div className='flex gap-3 text-gray-700 mb-2'>
          <h1>Address: {regUser?.shippingAddress?.address}</h1>
          <h1>City: {regUser?.shippingAddress?.city}</h1>
        </div>

      </div>

      <div className="">
        <div >
          {orders.orderItems?.map(({ name, price, image, _id }) => {
            return <div key={_id} className="grid grid-cols-2">
              <div>
                <img src={`${image}`} alt="" className='h-[70px]  w-[90px]' />
              </div>
              <div>
                <h1>{name}</h1>
                <h1>{`Rs.${price}`}</h1>
              </div>

            </div>
          })}

          {<div className="flex justify-between mt-10">
            <h1 className="text-xl font-semibold">Sub Total</h1>
            <h1>Rs.{9000}</h1>
          </div>}
        </div>

      </div>


    </div>
  )
}

export default OrderDetail