import {
    createBrowserRouter,
   
  } from "react-router-dom";
import AddClass from "../components/Dashboard/AddClass";
import ManageClasses from "../components/Dashboard/ManageClasses";
import MyClassroom from "../components/Dashboard/MyClassroom";
import Payment from "../components/Dashboard/payment/Payment";
import PaymentHistory from "../components/Dashboard/PaymentHistory";
import SelectedClasses from "../components/Dashboard/Table/SelectedClasses";
import DashboardLayout from "../Layout/DashboardLayout";
import HomeLayout from "../Layout/HomeLayout";


import Main from "../Layout/Main";
import Classes from "../Pages/Classes/Classes";
import ManageUser from "../Pages/Dashboard/ManageUser";
import ErrorPage from "../Pages/ErrorPage";
import Instructors from "../Pages/Instructors/Instructors";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<HomeLayout></HomeLayout>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/login",
          element:<Login></Login>,
        },
        {
          path: "/classes",
          element: <Classes></Classes>
        },
        {
          path: "/instructors",
          element: <Instructors></Instructors>
        },
      ]
      
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
          path:"manage-user",
          element:<ManageUser></ManageUser>
        },
        {
          path:"manage-class",
          element:<ManageClasses></ManageClasses>
        },
        {
          path:"add-class",
          element:<AddClass></AddClass>
        },
        {
          path:"my-classroom",
          element:<MyClassroom></MyClassroom>
        },
        {
          path:'my-classes',
          element:<SelectedClasses></SelectedClasses>
        },
        {
          path:"payment/:id",
          element:<Payment></Payment>
        },
        {
          path:"payment-history",
          element:<PaymentHistory></PaymentHistory>
        },
      ]
    }
   
  ]);

  export default router;