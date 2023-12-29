import React from "react";
import Btn from "./Btn";

const MenuCard = ({ data }) => {
  const { name, recipe, price, image, _id } = data;

  return (
    <div className="card w-96 rounded-md bg-white border-[1px] border-gray-400 hover:bg-[#fafafa] hover:shadow-sm cursor-pointer">
      <figure className="">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe.length > 50 ? recipe.slice(0, 50) : recipe}</p>
        <div className="card-actions">
          <Btn>Add to cart</Btn>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
