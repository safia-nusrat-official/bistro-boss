import React from "react";
import SectionTitle from "../../components/section components/SectionTitle";
import { useForm } from "react-hook-form";

const Reservations = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="p-8">
      <SectionTitle
        heading="Reservation"
        sub_heading="Book a table"
      ></SectionTitle>
      <form className="grid gap-4 md:grid-cols-3">
        <div className="field mb-6 relative">
          <label htmlFor="date" className="absolute font-medium">
            Date*
          </label>
          <input
            type="date"
            id="date"
            className="rounded-md p-4 border-[1px] border-zinc-200 outline-none w-full mt-8"
            placeholder="Food item name"
            {...register("date", {
              required: "Date is required.",
            })}
          />
          {errors.date?.type === "required" && (
            <p className="text-left text-red-500">{errors.date.message}</p>
          )}
        </div>

        <div className="field mb-6 relative">
          <label htmlFor="name" className="absolute font-medium">
            Name*
          </label>
          <input
            type="text"
            id="name"
            className="rounded-md p-4 border-[1px] border-zinc-200 outline-none w-full mt-8"
            placeholder="Food item name"
            {...register("name", {
              required: "Name is required.",
            })}
          />
          {errors.name?.type === "required" && (
            <p className="text-left text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="field mb-6 relative">
          <label htmlFor="name" className="absolute font-medium">
            Name*
          </label>
          <input
            type="text"
            id="name"
            className="rounded-md p-4 border-[1px] border-zinc-200 outline-none w-full mt-8"
            placeholder="Food item name"
            {...register("name", {
              required: "Name is required.",
            })}
          />
          {errors.name?.type === "required" && (
            <p className="text-left text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="field mb-6 relative">
          <label htmlFor="name" className="absolute font-medium">
            Name*
          </label>
          <input
            type="text"
            id="name"
            className="rounded-md p-4 border-[1px] border-zinc-200 outline-none w-full mt-8"
            placeholder="Food item name"
            {...register("name", {
              required: "Name is required.",
            })}
          />
          {errors.name?.type === "required" && (
            <p className="text-left text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="field mb-6 relative">
          <label htmlFor="name" className="absolute font-medium">
            Name*
          </label>
          <input
            type="text"
            id="name"
            className="rounded-md p-4 border-[1px] border-zinc-200 outline-none w-full mt-8"
            placeholder="Food item name"
            {...register("name", {
              required: "Name is required.",
            })}
          />
          {errors.name?.type === "required" && (
            <p className="text-left text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="field mb-6 relative">
          <label htmlFor="name" className="absolute font-medium">
            Name*
          </label>
          <input
            type="text"
            id="name"
            className="rounded-md p-4 border-[1px] border-zinc-200 outline-none w-full mt-8"
            placeholder="Food item name"
            {...register("name", {
              required: "Name is required.",
            })}
          />
          {errors.name?.type === "required" && (
            <p className="text-left text-red-500">{errors.name.message}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Reservations;
