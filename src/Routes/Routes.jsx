import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/Home/HomePage";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement:'',
      element: <Root />,
      children:[
        {
            path:'/',
            element:<HomePage />
        }
      ]
    },
]);
  
export default router;