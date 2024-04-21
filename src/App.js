import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayOut from "./ui/RootLayOut";
import HomePage from "./features/home/HomePage";
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";
import About from "./features/about/About";
import AdminProducts from "./features/admin/AdminProducts";
import ProductForm from "./features/admin/ProductForm";
import ProductEdit from "./features/admin/ProductEdit/ProductEdit";
import ProductDetail from "./features/products/ProductDetail";
import CartPage from "./features/cart/CartPage";
import ShippingAddress from "./features/user/ShippingAddress";
import PlaceOrder from "./features/user/PlaceOrder";
import UserProfile from "./features/user/UserProfile";
import OrderDetail from "./features/order/OrderDetail";
import AdminProfile from "./features/admin/AdminProfile";




const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        { index: true, element: <Login /> },


        { path: 'login', element: <Login /> },
        { path: 'signUp', element: <SignUp /> },


        { path: 'carts', element: <CartPage /> },
        { path: 'shippingAddress', element: <ShippingAddress /> },
        { path: 'placeOrder', element: <PlaceOrder /> },
        { path: 'userProfile', element: <UserProfile /> },


        { path: 'admin/products', element: <AdminProducts /> },
        { path: 'admin/profile', element: <AdminProfile /> },
        { path: 'add/product', element: <ProductForm /> },
        { path: 'edit/product/:id', element: <ProductEdit /> },

        {
          path: 'about', element: <About />
        },
        { path: 'product/:id', element: <ProductDetail /> },
        { path: 'order/:id', element: <OrderDetail /> },
      ]
    },

  ]);


  return <RouterProvider router={router} />
}

export default App