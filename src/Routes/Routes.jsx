import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layouts/MainLayout'
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";

const Routes = createBrowserRouter(
  [
    {
      path:'/',
      element:<MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          loader: ()=> fetch('https://child-care-server.vercel.app/toys')
        },
        {
          path:'login',
          element: <Login/>
        }
      ]
      
    }
  ]
)

export default Routes;
