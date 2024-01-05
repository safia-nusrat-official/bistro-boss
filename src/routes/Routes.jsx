import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Root from "../Root";
import { Menu } from "../menu/Menu";
import Shop from "../shop/Shop";
import { ContactUs } from "../ContactUs";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import FoodDetails from "../item/FoodDetails";
import { api } from "../main";
import PrivateRoute from "./PrivateRoute";
import Profile from "../profile/Profile";
import UpdateProfile from "../profile/UpdateProfile";
import ErrorPage from "../Error404";
import Cart from "../cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/shop/:category",
        element: <Shop></Shop>,
      },
      {
        path: "/items/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params?.id}`),
      },
      {
        path: "/cart/:email",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/carts/${params?.email}`),
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/update-profile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
    ],
  },
]);
