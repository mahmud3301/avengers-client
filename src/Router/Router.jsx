import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Blogs from "../Pages/Blogs";
import AllToys from "../Pages/AllToysPages/AllToys";
import MyToys from "../Pages/MyToysPages/MyToys";
import AddToys from "../Pages/AddToys";
import PrivateRoute from "./PrivateRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/blogs",
        element: <Blogs/>,
      },
      {
        path: "/all-toys",
        element: <AllToys/>
      },
      {
        path: "/my-toys",
        element: <PrivateRoute><MyToys/></PrivateRoute>
      },
      {
        path: "/add-toys",
        element: <PrivateRoute><AddToys/></PrivateRoute>
      }
    ],
  },
]);

export default router;
