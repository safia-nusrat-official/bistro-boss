import { FaCalendarDays } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaGrinStars } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { FaWallet } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BiSolidHome } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

export const Dashboard = () => {
  const {isAdmin} = useAdmin()
  
  return (
    <div className="flex md:flex-nowrap flex-wrap">
      {/* sidebar */}
      <div className="drawer bg-base-200 lg:drawer-open md:w-fit">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col md:items-center p-4 bg-base-200 md:hidden">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="drawer-button flex lg:hidden items-center gap-4">
            <HiMenuAlt1 className="text-2xl"/>
            <span className="uppercase whitespace-nowrap text-xl font-clash-display font-medium">
              BISTRO BOSS
            </span>
          </label>
        </div>

        <div className="drawer-side z-30">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* brand and logo */}
          <div className="text-left bg-base-200 px-6 pt-4 items-center gap-4 md:flex hidden">
            <span className="uppercase whitespace-nowrap text-xl font-clash-display font-medium">
              BISTRO BOSS
            </span>
            <span className="uppercase tracking-[.15em] font-clash-display font-normal">
              Restaurant
            </span>
          </div>

          <ul className="p-4 gap-2 flex flex-col font-clash-display font-medium min-h-full bg-base-200 text-base-content text-xl">
            {/* Sidebar content here */}

            <NavLink
              to="/dashboard/home"
              className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
            >
              <MdDashboard></MdDashboard>
              <a>{isAdmin ? 'Admin':'User'} Home</a>
            </NavLink>
            {isAdmin ? (
              <>
                <NavLink
                  to="/dashboard/orders"
                  className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
                >
                  <FaMoneyCheckDollar></FaMoneyCheckDollar>
                  <a>Orders</a>
                </NavLink>
                <NavLink
                  to="/dashboard/items"
                  className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
                >
                  <FaListUl></FaListUl>
                  <a>Manage Items</a>
                </NavLink>
                <NavLink
                  to="/dashboard/add-item"
                  className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
                >
                  <IoAddCircle></IoAddCircle>
                  <a>Add Item</a>
                </NavLink>
                <NavLink
                  to="/dashboard/users"
                  className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
                >
                  <HiUsers></HiUsers>
                  <a>Manage users</a>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/dashboard/cart"
                  className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
                >
                  <FaCartShopping></FaCartShopping>
                  <a>My Cart</a>
                </NavLink>

                <NavLink
                  to="/dashboard/payment"
                  className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
                >
                  <FaWallet></FaWallet>
                  <a>Payment History</a>
                </NavLink>

                <NavLink
                  to="/dashboard/reservations"
                  className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
                >
                  <FaCalendarDays></FaCalendarDays>
                  <a>My Reservations</a>
                </NavLink>

                <NavLink
                  to="/dashboard/review"
                  className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
                >
                  <FaGrinStars></FaGrinStars>
                  <a>Review</a>
                </NavLink>

                <NavLink
                  to="/dashboard/bookings"
                  className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
                >
                  <FaCalendarCheck></FaCalendarCheck>
                  <a>My Bookings</a>
                </NavLink>
              </>
            )}

            <div className="divider"></div>

            <NavLink
              to="/"
              className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
            >
              <a>Home</a>
            </NavLink>
            <NavLink
              to="/menu"
              className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
            >
              <a>Menu</a>
            </NavLink>
            <NavLink
              to="/shop/salad"
              className="flex rounded-md w-full transition-all p-2 items-center gap-2 dashboard hover:bg-zinc-200"
            >
              <a>Shop</a>
            </NavLink>
          </ul>
        </div>
      </div>

      {/* dshboard contents */}
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
