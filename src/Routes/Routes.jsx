import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Toys from "../pages/Product/Toys";
import AddToy from "../pages/AddToy/AddToy";
import Details from "../pages/Details/Details";
import MyToy from "../pages/MyToy/MyToy";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";

const Routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch("https://child-care-server.vercel.app/toys"),
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "toys",
          element: <Toys />,
          loader: () => fetch("https://child-care-server.vercel.app/toys"),
        },
        {
          path: "add-toy",
          element: <PrivateRoute><AddToy /></PrivateRoute>,
        },
        {
          path: "toys/:id",
          element:<PrivateRoute> <Details /></PrivateRoute>,
          loader: ({ params }) =>
            fetch(`https://child-care-server.vercel.app/toys/${params.id}`),
        },
        {
          path: "my-toys",
          element:<PrivateRoute> <MyToy /></PrivateRoute>,
        },
        {
          path: 'blog',
          element: <Blog/>
        }
      ],
    },
  ],
);

export default Routes;
