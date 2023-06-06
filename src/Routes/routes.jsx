import {
    createBrowserRouter,
   
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";


import Main from "../Layout/Main";

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
  ]);

  export default router;