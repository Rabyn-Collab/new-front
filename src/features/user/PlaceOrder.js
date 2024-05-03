import React from 'react'
import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../../constants/apis';
import { useAddOrderMutation } from '../order/orderApi';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { clearCart } from '../cart/cartSlice';



const PlaceOrder = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [addOrder, { isLoading }] = useAddOrderMutation();
  const { carts } = useSelector((state) => state.cartSlice);
  const { user } = useSelector((state) => state.userSlice);

  const total = carts.reduce((prev, cart) => prev + cart.price * cart.qty, 0);


  const handleOrder = async () => {
    try {
      const response = await addOrder({
        body: {
          totalAmount: total,
          orderItems: carts
        },
        token: user.token
      }).unwrap();
      dispatch(clearCart());
      toast.dismiss();
      toast.success(response.message);
      nav('/', { replace: true });
    } catch (err) {
      toast.dismiss();
      toast.error(err.data.message);
    }
  }

  return (
    <div className="p-5 space-y-4">

      <div>
        <h1 className="text-2xl font-bold">Delivery Address</h1>
        <div className='flex gap-3 text-gray-700 mb-2'>
          <h1>Address: {user?.shippingAddress?.address}</h1>
          <h1>City: {user?.shippingAddress?.city}</h1>
        </div>

      </div>


      {carts.length > 0 ? <div className="max-w-[30%]">
        <div >
          {carts.map((cart, i) => {
            return <div key={i} className="grid grid-cols-2">
              <div>
                <img src={`${baseUrl}${cart.image}`} alt="" className='h-[70px]  w-[90px]' />
              </div>
              <div>
                <h1>{cart.name}</h1>
                <h1>{`Rs.${cart.price} X ${cart.qty}`}</h1>
              </div>

            </div>
          })}

          <div className="flex justify-between mt-10">
            <h1 className="text-xl font-semibold">Sub Total</h1>
            <h1>Rs.{total}</h1>
          </div>
        </div>
        <Button loading={isLoading} onClick={handleOrder} className="mt-5" >Place An Order</Button>
      </div> : <h1>order list is empty</h1>}




    </div>
  )
}

export default PlaceOrder