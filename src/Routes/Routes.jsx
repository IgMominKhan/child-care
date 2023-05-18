import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layouts/MainLayout'
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";

const Routes = createBrowserRouter(
  [
    {
      path:'/',
      element:<MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>
        }
      ]
      
    }
  ]
)

export default Routes;