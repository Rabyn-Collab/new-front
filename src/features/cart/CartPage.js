import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { removeCart, setToCart } from "./cartSlice";
import { baseUrl } from "../../constants/apis";

const CartPage = () => {


  const { carts } = useSelector((state) => state.cartSlice);
  const { user } = useSelector((state) => state.userSlice);
  const total = carts.reduce((prev, cart) => prev + cart.price * cart.qty, 0);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { handleChange } = useFormik({
    initialValues: {
      qty: 1
    }
  });
  // const sio = { id: 1, qty: 1, name: 'clothes' };
  // const newCopy = { ...sio, qty: 2 };
  // console.log(newCopy);

  return (
    <div className="p-5 space-y-4">

      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {carts.length > 0 ? <div className="max-w-[65%]">
        <div >
          {carts.map((cart, i) => {
            return <div key={i} className="grid grid-cols-5 gap-10 ">
              <div>
                <img src={`${baseUrl}${cart.image}`} alt="" />
              </div>
              <div>
                <h1>{cart.name}</h1>
                <h1>{`Rs.${cart.price} X ${cart.qty}`}</h1>
              </div>
              <div>
                <select value={cart.qty} onChange={(e) => {
                  dispatch(setToCart(
                    { ...cart, qty: Number(e.target.value) }
                  ));
                }} className="px-2 py-1 z-30" label="Select" size="md">
                  {[...Array(cart.countInStock).keys()].map((val, i) => {
                    return <option value={val + 1} key={i + 1}>{val + 1} </option>
                  })}
                </select>
              </div>
              <div className="">
                <Button onClick={() => dispatch(removeCart(i))} size="sm" color="pink" className="text-[9px] py-1 ">Remove</Button>
              </div>

              <div className="justify-self-end">
                <h1>{`${cart.price * cart.qty}`}</h1>
              </div>

            </div>
          })}

          <div className="flex justify-between mt-4">
            <h1 className="text-xl font-semibold">Sub Total</h1>
            <h1>Rs.{total}</h1>
          </div>
        </div>
        <Button onClick={() => {
          if (user) {
            if (user?.shippingAddress?.isEmpty) {
              nav('/shippingAddress');
            } else {
              nav('/placeOrder');
            }
          } else {
            nav('/login');
          }

        }} className="mt-5" >CheckOut</Button>
      </div> : <h1>cart list is empty</h1>}




    </div>
  )
}
export default CartPage