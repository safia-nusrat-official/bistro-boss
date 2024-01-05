import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useItem from "../hooks/useItem";

const FoodDetails = () => {
  const food = useLoaderData();
  const { image, name, recipe, price, category, _id } = food;
  const { handleAddToCart, cartItems } = useItem();
  const [addedToCart, setAddedToCart] = useState(
    (cartItems.filter((item) => item?.foodId === _id)).length
  );
  
  return (
    <div
      className="md:p-20 py-20 relative bg-fixed"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black/50 backdrop-blur-sm"></div>
      <div className="bg-white md:rounded-md overflow-hidden md:flex-nowrap flex flex-wrap relative z-[10]">
        <img src={image} className="md:w-1/2" alt="" />
        <div className="p-6">
          <div className="flex flex-wrap font-clash-display items-center gap-4">
            <h2 className="text-4xl font-semi-bold">{name}</h2>
            <Link to={`/shop/${category}`} className="p-2 rounded-full font-medium px-6  text-yellow-600  bg-yellow-400/25">
              {category}
            </Link>
          </div>
          <p className="my-4 text-gray-600">{recipe}</p>

          <div className="flex md:flex-nowrap flex-wrap gap-6 justify-between">
            <span className=" font-semibold font-clash-display text-yellow-400 text-xl border-[1.5px] border-yellow-400  p-4">
              ${price}
            </span>
            <button
              onClick={() => {
                handleAddToCart(food);
                setAddedToCart(cartItems.filter((item) => item?.foodId === _id).length)
              }}
              className="px-8 py-2 text-xl w-full md:w-fit font-semibold font-clash-display bg-yellow-400 border-[1.5px]  text-white uppercase"
            >
              {cartItems.filter((item) => item?.foodId === _id).length ? "Added to cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
