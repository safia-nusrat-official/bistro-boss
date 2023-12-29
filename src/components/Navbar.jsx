import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="font-semibold">
        <a>Home</a>
      </NavLink>

      <NavLink to="/menu" className="md:mx-4 font-semibold">
        <a>Our Menu</a>
      </NavLink>

      <NavLink to="/orders" className="md:mx-4 font-semibold">
        <a>Orders</a>
      </NavLink>

      <NavLink to="/contact" className="font-semibold">
        <a>Conatct Us</a>
      </NavLink>
    </>
  );
  return (
    <nav className="navbar bg-[#15151577] fixed z-50 md:px-8 text-white backdrop-blur-sm">
      {/* brand&logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost pr-4 text-2xl lg:hidden">
            <HiMenuAlt1></HiMenuAlt1>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-[#15151577] rounded-sm backdrop-blur-md w-52"
          >
            {links}
          </ul>
        </div>

        <div className="flex flex-col">
          <span className="uppercase text-xl font-clash-display font-medium">
            BISTRO BOSS
          </span>
          <span className="uppercase tracking-[.15em] font-clash-display font-normal">
            Restaurant
          </span>
        </div>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
