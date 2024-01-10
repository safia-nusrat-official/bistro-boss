import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import SectionTitle from "../components/section components/SectionTitle";

const Cart = () => {
  const { cartItems, isPending } = useCart();
  console.log(cartItems);
  return (
    <section
      className="bg-fixed mt-6 bg-cover"
      // style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Helmet>
        <title>Bistro Boss | Cart</title>
      </Helmet>
      <SectionTitle heading="My cart" sub_heading="Add or remove items"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartItems?.length > 0 &&
              cartItems.map((item, index) => (
                <CartItem key={item?._id} item={item} index={index}></CartItem>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const CartItem = ({ item, index }) => {
  const { handleDeleteFromCart, refetchCart } = useCart();
  const [count, setCount] = useState(1);
  const {
    foodCategory,
    foodId,
    foodImg,
    foodName,
    foodPrice,
    _id: cartId,
  } = item;
  return (
    <tr>
      <th>
        <label>{index + 1}</label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-16 aspect-square">
              <img src={foodImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{foodName}</div>
            <div className="text-sm opacity-50">{foodPrice}</div>
          </div>
        </div>
      </td>
      <td>
        <br />
        <Link to={`/shop/${foodCategory}`} className="badge badge-ghost font-semibold badge-sm">
          {foodCategory}
        </Link>
      </td>
      <td>
        <div className="flex items-center gap-2">
          <button
            className="text-2xl hover:bg-zinc-100 rounded-full w-fit h-fit"
            onClick={() => {
              count > 1 && setCount(count-1);
            }}
          >
            <CiCircleMinus></CiCircleMinus>
          </button>
          <span className="font-clash-display font-semibold text-2xl">
            {count}
          </span>
          <button
            onClick={() => {
              setCount(count+1);
            }}
            className="text-2xl hover:bg-zinc-100 rounded-full w-fit h-fit"
          >
            <CiCirclePlus></CiCirclePlus>
          </button>
        </div>
      </td>
      <th>
        <button
        onClick={()=>{
          handleDeleteFromCart(cartId)
        }}
         className="btn text-2xl rounded-full btn-ghost "><IoClose></IoClose></button>
      </th>
    </tr>
  );
};
export default Cart;
