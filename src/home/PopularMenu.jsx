import React, { useEffect, useState } from "react";
import SectionTitle from "../components/section components/SectionTitle";
import useMenu from "../hooks/useMenu";
import MenuItem from "../components/menu components/MenuItem";
import Btn from "../components/Btn";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popularMenu = menu.filter((item) => item?.category === "popular");

  return (
    <section className="md:mx-28 md:my-8 m-8">
      <SectionTitle
        heading="Popular Picks"
        sub_heading="Check it Out"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {loading && (
          <div className="w-full text-center col-span-2">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        {popularMenu &&
          popularMenu.map((item) => (
            <MenuItem key={item?._id} data={item}></MenuItem>
          ))}
      </div>
      <Link to="/menu" className="w-full justify-center flex">
        <Btn>View Full Menu</Btn>
      </Link>
    </section>
  );
};

export default PopularMenu;
