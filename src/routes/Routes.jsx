import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Root from "../Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
  },
]);
