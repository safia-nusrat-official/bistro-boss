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
import { Dashboard } from "../dashboard/Dashboard";
import AdminRoute from "./AdminRoute";
import DashboardHome from "../dashboard/DashboardHome";
import ManageItems from "../dashboard/admin/ManageItems";
import Payments from "../dashboard/user/Payments";
import AddItem from "../dashboard/admin/AddItem";
import { Orders } from "../dashboard/admin/Orders";
import Reservations from "../dashboard/user/Reservations";
import { Bookings } from "../dashboard/user/Bookings";
import Review from "../dashboard/user/Review";
import Users from "../dashboard/admin/Users";
import SearchProvider from "../providers/SearchProvider";
import UpdateItem from "../dashboard/admin/UpdateItem";
import ItemDetails from "../dashboard/admin/ItemDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <SearchProvider>
            <Shop></Shop>
          </SearchProvider>
        ),
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
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/home",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/review",
        element: <Review></Review>,
      },
      {
        path: "/dashboard/payment",
        element: <Payments></Payments>,
      },
      {
        path: "/dashboard/reservations",
        element: <Reservations></Reservations>,
      },
      {
        path: "/dashboard/bookings",
        element: <Bookings></Bookings>,
      },
      // admin routes
      {
        path: "/dashboard/orders",
        element: (
          <AdminRoute>
            <Orders></Orders>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/items",
        element: (
          <AdminRoute>
            <SearchProvider>
              <ManageItems></ManageItems>
            </SearchProvider>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/items/:id",
        element: (
          <AdminRoute>
            <ItemDetails></ItemDetails>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params?.id}`),
      },
      {
        path: "/dashboard/add-item",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/update-item/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);
