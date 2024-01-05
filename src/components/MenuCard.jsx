import Btn from "./Btn";
import useItem from "../hooks/useItem";
import { Link } from "react-router-dom";

const MenuCard = ({ data }) => {
  const { name, recipe, image, _id } = data;
  const {handleAddToCart} = useItem()

  return (
    <div className="card md:w-[300px] rounded-md bg-white border-[1px] border-gray-400 hover:bg-[#fafafa] hover:shadow-sm cursor-pointer">
      <Link to={`/items/${_id}`}>
        <img src={image} alt="Shoes" className="w-full object-cover max-h-[350px]" />
      </Link>
      <div className="card-body p-4 items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe.length > 50 ? recipe.slice(0, 50) : recipe}</p>
        <div className="card-actions" onClick={() => handleAddToCart(data)}>
          <Btn>Add to cart</Btn>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
