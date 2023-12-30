import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import { TbMenu } from "react-icons/tb";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
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
        to="/contact-us"
        className="transition-colors hover:text-[#ecd610] md:ml-4 font-semibold"
      >
        <a>Contact Us</a>
      </NavLink>

      <Link to="/login">
        <button className="btn btn-ghost ml-4 border-t-0 border-x-0 px-6 border-b-4 border-white">
          Login
        </button>
      </Link>
    </>
  );

  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="navbar bg-[#15151577] fixed z-30 md:px-8 text-white md:backdrop-blur-sm p-0">
      {/* brand&logo */}
      <div className="navbar-start relative">
        <div className="relative">
          <div
            onClick={() => setShowNav(!showNav)}
            className="btn btn-ghost pr-4 text-2xl lg:hidden"
          >
            {showNav ? <IoClose></IoClose> : <TbMenu></TbMenu>}
          </div>
        </div>

        <div className="">
          <span className="uppercase whitespace-nowrap inline md:block text-xl font-clash-display font-medium">
            BISTRO BOSS
          </span>
          <span className="uppercase md:block hidden tracking-[.15em] font-clash-display font-normal">
            Restaurant
          </span>
        </div>
      </div>

      {/* mobile-screen navbar links*/}
      <div
        className={`absolute top-2 mt-14 z-50 p-6 w-full h-screen md:hidden bg-[#15151577] backdrop-blur-md mobile-nav transition-transform transform
            ${showNav ? "block" : "hidden"}
             ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
        <ul className="flex flex-col gap-4 text-2xl font-clash-display">
          {links}
        </ul>
      </div>
      
      {/* desktop-screen navbar link */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center">{links}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
