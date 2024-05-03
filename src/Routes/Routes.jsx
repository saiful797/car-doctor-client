import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement:'',
      element: <Root />,
      children:[
        {
            path:'/',
            element:<HomePage />
        },
        {
            path:'/login',
            element: <Login />

        }
      ]
    },
]);
  
export default router;