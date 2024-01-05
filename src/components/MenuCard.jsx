import React from "react";
import Btn from "./Btn";
import { Link } from "react-router-dom";

const MenuCard = ({ data }) => {
  const { name, recipe, image, _id} = data;

  return (
    <Link to={`/items/${_id}`} className="card md:w-[300px] rounded-md bg-white border-[1px] border-gray-400 hover:bg-[#fafafa] hover:shadow-sm cursor-pointer">
      <figure className="">
        <img src={image} alt="Shoes" className="w-full"/>
      </figure>
      <div className="card-body p-4 items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe.length > 50 ? recipe.slice(0, 50) : recipe}</p>
        <div className="card-actions">
          <Btn>Add to cart</Btn>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;
