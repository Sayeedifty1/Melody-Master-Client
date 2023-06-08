import {
    createBrowserRouter,
   
  } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import HomeLayout from "../Layout/HomeLayout";


import Main from "../Layout/Main";
import Classes from "../Pages/Classes/Classes";
import ManageUser from "../Pages/Dashboard/ManageUser";
import Instructors from "../Pages/Instructors/Instructors";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          path:"manage-user",
          element:<ManageUser></ManageUser>
        }
      ]
    }
   
  ]);

  export default router;