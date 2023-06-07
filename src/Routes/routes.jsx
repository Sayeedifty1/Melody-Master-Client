import {
    createBrowserRouter,
   
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";


import Main from "../Layout/Main";
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
        }
      ]
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>,
    },
    {
      path: "/login",
      element:<Login></Login>,
    },
  ]);

  export default router;