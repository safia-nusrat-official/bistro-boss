import { IoClose } from "react-icons/io5";
import React, { useContext, useState } from "react";
import { TbMenu } from "react-icons/tb";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { AuthContext } from "../providers/AuthProvider";
import { MdOutlineLogout } from "react-icons/md";

const Navbar = () => {
  const { user, loading, Logout } = useContext(AuthContext);

  const links = (
    <>
      <NavLink
        to="/"
        className="font-semibold transition-colors hover:text-[#ecd610]"
      >
        <a>Home</a>
      </NavLink>

      <NavLink
        to="/menu"
        className="transition-colors hover:text-[#ecd610] md:ml-4 font-semibold"
      >
        <a>Our Menu</a>
      </NavLink>

      <NavLink
        to={`/shop/salad`}
        className="transition-colors hover:text-[#ecd610] md:ml-4 font-semibold"
      >
        <a>Our Shop</a>
      </NavLink>

      <NavLink
        to="/orders"
        className="transition-colors hover:text-[#ecd610] md:ml-4 font-semibold"
      >
        <a>Orders</a>
      </NavLink>

      <NavLink
        to="/dashboard"
        className="transition-colors hover:text-[#ecd610] md:ml-4 font-semibold"
      >
        <a>Dashboard</a>
      </NavLink>

      <NavLink
        to="/contact-us"
        className="transition-colors hover:text-[#ecd610] md:ml-4 font-semibold"
      >
        <a>Contact Us</a>
      </NavLink>

      {user ? (
        <>
          <Link
            to="/profile"
            className="md:flex hidden ml-4 items-center gap-4"
          >
            <span>{user?.displayName}</span>
            <img
              src={user?.photoURL}
              className="w-10 rounded-full aspect-square"
              alt=""
            />
          </Link>
          <button
            className="text-2xl m-2 hidden md:block"
            onClick={() => Logout()}
          >
            <MdOutlineLogout></MdOutlineLogout>
          </button>
        </>
      ) : (
        <NavLink to="/login" className="md:ml-4 font-semibold">Login</NavLink>
      )}
    </>
  );

  const [showNav, setShowNav] = useState(false);

  return (
    <nav
      className={`navbar md:items-center items-stretch bg-[#15151577] fixed z-30 md:px-8 text-white justify-between md:backdrop-blur-md p-0 ${
        showNav ? "blurred" : ""
      }`}
    >
      {/* brand&logo */}
      <div className="md:navbar-start md:w-fit w-full backdrop-blur-sm md:backdrop-blur-0 relative">
        <div className="relative">
          <div
            onClick={() => setShowNav(!showNav)}
            className="btn btn-ghost pr-4 text-2xl lg:hidden"
          >
            {showNav ? <IoClose></IoClose> : <TbMenu></TbMenu>}
          </div>
        </div>

        <div className="bg-transparent items-center w-full md:flex-col flex justify-between">
          <span className="uppercase whitespace-nowrap inline md:block text-xl font-clash-display font-medium">
            BISTRO BOSS
          </span>
          <span className="uppercase md:block hidden tracking-[.15em] font-clash-display font-normal">
            Restaurant
          </span>
          {user && (
            <div className="flex">
              <Link to="/profile" className="flex md:hidden items-center">
                <img
                  src={user?.photoURL}
                  className="w-10 rounded-full aspect-square"
                  alt=""
                />
                <span className="hidden md:inline-flex">
                  {user?.displayName}
                </span>
              </Link>
              <button
                className="text-2xl m-2 md:hidden"
                onClick={() => Logout()}
              >
                <MdOutlineLogout></MdOutlineLogout>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* mobile-screen navbar links*/}
      <div
        className={`absolute mt-16 z-50 p-6 items-start flex w-full h-screen md:hidden bg-[#15151577] mobile-nav drop-nav
            ${showNav ? "visible" : ""}`}
      >
        <ul className="flex flex-col gap-4 text-2xl font-clash-display justify-start">
          {links}
        </ul>
      </div>

      {/* desktop-screen navbar link */}
      <div className=" hidden lg:flex">
        <ul className="menu font-clash-display menu-horizontal px-1 flex items-center">
          {links}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
