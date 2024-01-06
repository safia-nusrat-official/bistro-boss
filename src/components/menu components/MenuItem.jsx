import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ data }) => {
  const { name, recipe, price, image, _id } = data;
  return (
    <Link to={`/items/${_id}`} className="flex flex-wrap items-start hover:bg-black/5 hover:scale-105 transition-transform p-4 md:flex-nowrap">
      <img
        src={image}
        className="md:rounded-tl-none md:rounded-r-full object-cover  md:rounded-b-full rounded-full md:w-20 w-full  aspect-square" alt=""
      />
      <div className="md:ml-4 mt-4 md:mt-0 ml-0 md:text-left text-center">
        <div>
        <h3 className="text-xl font-clash-display uppercase">
          {name} <span className="md:inline hidden">------</span>
        <span className="text-yellow-400 md:hidden inline font-medium text-2xl ml-4">${price}</span>
        </h3>
        <p className="mt-2">{recipe.length > 100 ? <span>{recipe.slice(0, 100)}...</span> : recipe}</p>

        </div>
        
        <span className="text-yellow-400 md:block hidden font-medium font-clash-display text-2xl">${price}</span>

      </div>
    </Link>
  );
};

export default MenuItem;
