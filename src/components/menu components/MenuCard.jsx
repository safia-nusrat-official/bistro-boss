import Btn from "../Btn";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { useState } from "react";

const MenuCard = ({ data }) => {
  const { name, recipe, image, _id } = data;
  const { handleAddToCart, cartItems:cart, handleDeleteFromCart, refetchCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(
    cart.filter((item) => item?.foodId === _id).length > 0
  );

  return (
    <div className="rounded-md bg-white border-[1px] border-gray-400 hover:bg-[#fafafa] hover:shadow-sm cursor-pointer">
      <Link to={`/items/${_id}`}>
        <img
          src={image}
          alt="Shoes"
          className="w-full object-cover max-h-[350px]"
        />
      </Link>
      <div className="card-body p-4 items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe.length > 50 ? recipe.slice(0, 50) : recipe}</p>
        {addedToCart ? (
          <div
            className="card-actions"
            onClick={() => {
              const cartId = cart.filter(item=>item?.foodId===_id)
              handleDeleteFromCart(cartId?._id);
              refetchCart()
              setAddedToCart(cart.filter((item) => item?.foodId === _id).length > 0);
            }}
          >
            <Btn>Added to cart</Btn>
          </div>
        ) : (
          <div
            className="card-actions"
            onClick={async() => {
              handleAddToCart(data);
              refetchCart()
              setAddedToCart(cart.filter((item) => item?.foodId === _id).length > 0)
            }}
          >
            <Btn>{addedToCart ? "Added to cart" : "Add to cart"}</Btn>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
