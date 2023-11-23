import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/checkout/:id',
            element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5008/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

  export default router