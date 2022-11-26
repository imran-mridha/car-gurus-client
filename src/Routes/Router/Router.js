import DashboardLayout from "../../Layouts/DashboardLayout";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import AddProducts from "../../Pages/DashBoard/AddProducts/AddProducts";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import AllProducts from "../../Pages/DashBoard/AllProducts/AllProducts";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import Payment from "../../Pages/DashBoard/DashBoard/Payment";
import MyBuyers from "../../Pages/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/DashBoard/ReportedItems/ReportedItems";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layouts/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blogs />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'all-products',
        element: <AllProducts />
      },
      {
        path: '/products/:categoryId',
        loader: ({params})=>fetch(`${process.env.REACT_APP_API_URL}/products/${params.categoryId}`),
        element: <CategoryProducts />
      }
      
      
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path:'/dashboard', 
        element: <DashBoard />
      },
      {
        path:'/dashboard/my-orders', 
        element: <MyOrders />
      },
      {
        path:'/dashboard/add-products', 
        element: <AddProducts />
      },
      {
        path:'/dashboard/my-products', 
        element: <MyProducts />
      },
      {
        path:'/dashboard/my-buyers', 
        element: <MyBuyers />
      },
      {
        path:'/dashboard/all-sellers', 
        element: <AllSellers />
      },
      {
        path:'/dashboard/all-buyers', 
        element: <AllBuyers />
      },
      {
        path:'/dashboard/reported-items', 
        element: <ReportedItems />
      },
      {
        path:'/dashboard/payment/:id',
        element: <Payment />,
        loader: ({params})=>fetch(`${process.env.REACT_APP_API_URL}/bookings/${params.id}`)
      }
    ]
  }
])
