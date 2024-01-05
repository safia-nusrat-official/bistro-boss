import { IoClose } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import bgImg from "../assets/menu/pizza-bg.jpg";
import useItem from "../hooks/useItem";

const Cart = () => {
  // const [cart, setCart] = useState(useLoaderData());
  const { handleDeleteFromCart, cartItems } = useItem();

  return (
    <section
      className="md:p-20 pt-16 bg-fixed bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="overflow-x-auto md:rounded-md p-4 bg-black/50 backdrop-blur-sm text-white relative ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-clash-display text-white text-xl">
              <th>Item</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems &&
              cartItems.map((item) => (
                <tr key={item?._id}>
                  <th>
                    <Link to={`/items/${item?.foodId}`}>
                      <img src={item?.foodImg} className="w-28" alt="" />
                    </Link>
                  </th>
                  <td>{item?.foodName}</td>
                  <td>{item?.foodCategory}</td>
                  <td>{item?.foodPrice}</td>
                  <td>
                    <button
                      className="font-2xl"
                      onClick={() => {
                        handleDeleteFromCart(item?._id);
                        const newCartItems = cartItems.filter(
                          (cartItem) => cartItem._id !== item?._id
                        );
                        setCart(newCartItems);
                      }}
                    >
                      <IoClose></IoClose>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {cartItems.length < 1 && (
          <div className="flex items-center py-8 justify-center gap-4">
            No item added.{" "}
            <Link to="/shop/salad">
              <CiCirclePlus className=" text-4xl"></CiCirclePlus>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
