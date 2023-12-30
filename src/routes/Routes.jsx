import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Root from "../Root";
import { Menu } from "../menu/Menu";
import Shop from "../shop/Shop";
import { ContactUs } from "../ContactUs";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/menu",
            element:<Menu></Menu>
        },
        {
            path:"/shop/:category",
            element:<Shop></Shop>
        },
        {
            path:"/contact-us",
            element:<ContactUs></ContactUs>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/signup",
            element:<Signup></Signup>
        }
    ]
  },
]);
