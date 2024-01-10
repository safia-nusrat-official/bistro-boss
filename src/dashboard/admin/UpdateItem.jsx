import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { BsUpload } from "react-icons/bs";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/section components/SectionTitle";
import Btn from "../../components/Btn";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const API_KEY = import.meta.env.VITE_IMG_HOSTING_API_KEY_2;
  const API_URL = `https://api.imgbb.com/1/upload?key=${API_KEY}`;
  const [imgUrl, setImgUrl] = useState("");
  const {
    register,
    reset,
    handleSubmit
  } = useForm();

  const {
    data: item,
    refetch: refetchItem,
  } = useQuery({
    queryKey: ["item", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/menu/${id}`);
      return res.data;
    },
  });

  const handleUpdateItem = async (data) => {
    console.log("submitted form", data);
    const { recipe, name, photo, category, price } = data;
    if (photo.length > 0) {
      const imgFile = { image: photo[0] };
      const res = await axiosPublic.post(API_URL, imgFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        setImgUrl(res.data?.data?.display_url);
      }
    }
    const updatedItem = {
      name: name || item?.name,
      recipe: recipe || item?.recipe,
      price: parseFloat(price) || item?.price,
      category: category || item?.category,
      image: imgUrl || item?.image,
    };
    console.log("updated", updatedItem);
    axiosSecure
        .patch(`/menu/${id}`, updatedItem)
        .then((res) => {
          console.log(res.data)
          if (res.data.modifiedCount) {
            Swal.fire({
              icon: "success",
              title: "Item updated successfully",
            });
            refetchItem();
            reset();
            navigate(`/dashboard/items/${id}`)
          }
        })
        .catch((err) => console.log(err));
  };
  
  return (
    <div className="md:p-8">
      <SectionTitle
        heading="Update an item"
        sub_heading="What's new?"
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(handleUpdateItem)}
        className="p-6 rounded-md bg-zinc-100"
      >
        <div className="field mb-6 relative">
          <label htmlFor="name" className="absolute font-medium">
            Updated Name*
          </label>
          <input
            type="text"
            id="name"
            className="rounded-md p-4 outline-none w-full mt-8"
            placeholder={item?.name}
            defaultValue={item?.name}
            {...register("name")}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div className="field relative">
            <label htmlFor="category" className="absolute font-medium">
              Category*
            </label>
            <select defaultValue={item?.category}
              {...register("category")}
              className="select w-full max-w-xs mt-8"
            >
              <option disabled>
                Select food category
              </option>
              <option value="salad">Salad</option>
              <option value="drinks">Drink</option>
              <option value="dessert">Dessert</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
            </select>
          </div>
          <div className="field relative">
            <label htmlFor="price" className="absolute font-medium">
              Update Price*
            </label>
            <input
              type="number"
              id="price"
              min={0.01}
              step="0.01"
              className="rounded-md p-4 outline-none w-full mt-8"
              placeholder={`$ ${item?.price}`}
              {...register("price")}
            />
          </div>
        </div>
        <div className="field mb-6 flex relative">
          <label htmlFor="description" className="absolute font-medium">
            Edit Details*
          </label>
          <textarea
            type="text"
            id="name"
            rows={8}
            {...register("recipe")}
            className="rounded-md p-4 outline-none w-full mt-8"
            placeholder={item?.recipe}
            defaultValue={item?.recipe}
          ></textarea>
        </div>
        <div className="flex flex-wrap mt-6 items-center gap-4 relative">
          <label
            htmlFor="photo"
            className="absolute top-0 left-0 font-semibold"
          >
            Update food item photo*
          </label>
          <div>
            <img src={item?.image} className="mt-8 rounded-md" alt="" />
          </div>
          <div className="relative w-full">
            <input
              name="photo"
              type="file"
              id="photo"
              className="file-input w-full mt-8 border-2 rounded-md outline-none border-gray-200"
              {...register("photo")}
            />
            <BsUpload className="absolute bg-white pl-2 right-4 text-3xl top-1/2"></BsUpload>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <Link to={`/dashboard/items/${item?._id}`}><Btn>Cancel</Btn></Link>
          <Btn>Update item</Btn>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
