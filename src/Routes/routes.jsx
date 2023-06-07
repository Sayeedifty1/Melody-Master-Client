import {
    createBrowserRouter,
   
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";


import Main from "../Layout/Main";
import Classes from "../Pages/Classes/Classes";
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
   
  ]);

  export default router;