import DashboardLayout from "../../Layouts/DashboardLayout";
import AddProducts from "../../Pages/DashBoard/AddProducts/AddProducts";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import AllProducts from "../../Pages/DashBoard/AllProducts/AllProducts";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import MyBuyers from "../../Pages/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/DashBoard/ReportedItems/ReportedItems";
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
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      // {
      //   path:'/dashboard', 
      //   element: <DashBoard />
      // },
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
    ]
  }
])
