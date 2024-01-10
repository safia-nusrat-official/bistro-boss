import { GiKnifeFork } from "react-icons/gi";
import React, { useState } from "react";
import SectionTitle from "../../components/section components/SectionTitle";
import { useForm } from "react-hook-form";
import { BsUpload } from "react-icons/bs";
import Btn from "../../components/Btn";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useMenu from "../../hooks/useMenu";

const AddItem = () => {
  const {refetch} = useMenu({selectedCategory:""})
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const API_KEY = import.meta.env.VITE_IMG_HOSTING_API_KEY_2;
  const API_URL = `https://api.imgbb.com/1/upload?key=${API_KEY}`;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddItem = async (data) => {
    const { recipe, name, photo, category, price } = data;
    const imgFile = { image: photo[0] };
    const res = await axiosPublic.post(API_URL, imgFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imgURL = res.data.data.display_url;
    if (res.data.success) {
      const food = {
        recipe,
        name,
        price: parseFloat(price),
        category,
        image: imgURL,
      };
      axiosSecure
        .post("/menu", food)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Item added successfully",
            });
            refetch()
            reset()
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="md:p-8">
      <SectionTitle
        heading="Add an item"
        sub_heading="What's new?"
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(handleAddItem)}
        className="p-6 rounded-md bg-zinc-100"
      >
        <div className="field mb-6 relative">
          <label htmlFor="name" className="absolute font-medium">
            Name*
          </label>
          <input
            type="text"
            id="name"
            className="rounded-md p-4 outline-none w-full mt-8"
            placeholder="Food item name"
            {...register("name", {
              required: "Name is required.",
            })}
          />
          {errors.name?.type === "required" && (
            <p className="text-left text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div className="field relative">
            <label htmlFor="category" className="absolute font-medium">
              Category*
            </label>
            <select
              {...register("category", {
                required: "Food category required",
              })}
              className="select w-full max-w-xs mt-8"
            >
              <option disabled selected>
                Select food category
              </option>
              <option value="salad">Salad</option>
              <option value="drinks">Drink</option>
              <option value="dessert">Dessert</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
            </select>
            {errors.category?.type === "required" && (
              <p className="text-left text-red-500">
                {errors.category?.message}
              </p>
            )}
          </div>
          <div className="field relative">
            <label htmlFor="price" className="absolute font-medium">
              Price*
            </label>
            <input
              type="number"
              id="price"
              step="0.01"
              className="rounded-md p-4 outline-none w-full mt-8"
              placeholder="Food price"
              {...register("price", {
                required: "Item price required.",
              })}
            />
            {errors.price?.type === "required" && (
              <p className="text-left text-red-500">{errors.price.message}</p>
            )}
          </div>
        </div>
        <div className="field mb-6 flex relative">
          <label htmlFor="description" className="absolute font-medium">
            Details*
          </label>
          <textarea
            type="text"
            id="name"
            rows={8}
            {...register("recipe", {
              required: "Food description required.",
            })}
            className="rounded-md p-4 outline-none w-full mt-8"
            placeholder="Food description"
          />
        </div>
        <div className="flex mt-6 relative">
          <label htmlFor="photo" className="absolute left-0 font-semibold">
            Food item photo*
          </label>
          <input
            name="photo"
            type="file"
            id="photo"
            className="file-input w-full mt-8 border-2 rounded-md outline-none border-gray-200"
            {...register("photo", {
              required: "Profile photo required.",
            })}
          />
          <BsUpload className="absolute bg-white pl-2 right-4 text-3xl top-1/2"></BsUpload>
        </div>
        {errors.photo?.type === "required" && (
          <p className="text-left text-red-500">{errors.photo.message}</p>
        )}
        <Btn>Add item</Btn>
      </form>
    </div>
  );
};

export default AddItem;
