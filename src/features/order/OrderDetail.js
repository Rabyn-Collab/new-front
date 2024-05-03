import React from 'react'
import { useParams } from 'react-router'
import { useOrderByIdQuery } from './orderApi'
import { useSelector } from 'react-redux'
import { baseUrl } from '../../constants/apis'


const OrderDetail = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.userSlice);
  const { data, isLoading, error } = useOrderByIdQuery({ id, token: user.token });

  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div className='p-4'>

      <div>
        <h1 className="text-2xl font-bold">Delivery Address</h1>
        <div className='flex gap-3 text-gray-700 mb-2'>
          <h1>Address: {user?.shippingAddress?.address}</h1>
          <h1>City: {user?.shippingAddress?.city}</h1>
        </div>

      </div>

      <div className="">
        <div >
          {data?.data?.orderItems.map(({ name, price, image, _id }) => {
            return <div key={_id} className="grid grid-cols-2">
              <div>
                <img src={`${baseUrl}${image}`} alt="" className='h-[70px]  w-[90px]' />
              </div>
              <div>
                <h1>{name}</h1>
                <h1>{`Rs.${price}`}</h1>
              </div>

            </div>
          })}

          {<div className="flex justify-between mt-10">
            <h1 className="text-xl font-semibold">Sub Total</h1>
            <h1>Rs.{data?.data?.totalAmount}</h1>
          </div>}
        </div>

      </div>


    </div>
  )
}

export default OrderDetail