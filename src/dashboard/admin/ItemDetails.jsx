import { MdEdit } from "react-icons/md";
import { Link, useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const food = useLoaderData();
    const { image, name, recipe, price, category, _id } = food;
  
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
              <div
                className="p-2 rounded-full font-medium px-6  text-yellow-600  bg-yellow-400/25"
              >
                {category}
              </div>
            </div>
            <p className="my-4 text-gray-600">{recipe}</p>
  
            <div className="flex md:flex-nowrap flex-wrap gap-6 justify-between">
              <span className=" font-semibold font-clash-display text-yellow-400 text-xl border-[1.5px] border-yellow-400  p-4">
                ${price}
              </span>
              <Link to={`/dashboard/update-item/${_id}`} className=" font-semibold font-clash-display text-yellow-400 text-xl border-[1.5px] border-yellow-400  p-4">
                <MdEdit/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ItemDetails