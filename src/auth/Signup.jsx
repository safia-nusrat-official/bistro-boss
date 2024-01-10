import { FaFacebook, FaGithub, FaGoogle, FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import banner from "../assets/others/banner.png";
import illustration from "../assets/others/authentication2.png";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BsUpload } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useUser from "../hooks/useUser";

const Signup = () => {
  const API_KEY = import.meta.env.VITE_IMG_HOSTING_API_KEY;
  const API_URL = `https://api.imgbb.com/1/upload?key=${API_KEY}`;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?$%&*#@_\-;!])[A-Za-z\d?$%&*#@_\-;!]{6,}$/;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { Signup, UpdateProfile } = useContext(AuthContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = async (data) => {
    const { email, name, photo, password } = data;

    const imgFile = { image: photo[0] };
    const res = await axios.post(API_URL, imgFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imgURL = res.data.data.display_url;

    Signup(email, password)
      .then((res) => {
        const user = res.user;
        res.user.displayName = name;
        res.user.photoURL = imgURL;
        UpdateProfile(name, imgURL)
          .then(() => {
            axiosPublic.post("/users", {
              name: user?.displayName,
              email: user?.email,
              photo: user?.photoURL,
              role: "user",
            })
          })
          .catch((err) => console.log(err));
        Swal.fire({
          icon: "success",
          title: "Account created successfully!",
        });
        reset();
        navigate(location?.state?.from?.pathname || "/", (replace = true));
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  return (
    <div
      className="md:p-20 md:pt-28 pt-20"
      style={{ backgroundImage: `url('${banner}')` }}
    >
      <Helmet>
        <title>Bistro Boss | Signup</title>
      </Helmet>
      <div
        className="shadow-lg p-6 flex border-2 flex-row-reverse border-gray-200 rounded-sm gap-6 md:flex-nowrap flex-wrap items-center"
        style={{ backgroundImage: `url('${banner}')` }}
      >
        <img src={illustration} className="md:w-1/2 w-full" alt="" />

        <form
          onSubmit={handleSubmit(handleForm)}
          className="md:w-1/2 w-full  text-center md:p-6"
        >
          <h2 className="text-6xl font-bold font-clash-display">Signup</h2>

          <div className="flex mt-6 relative">
            <label htmlFor="name" className="absolute left-0 font-semibold">
              Name*
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="mt-6 outline-none p-4 w-full relative border-2 rounded-md"
              id="name"
              {...register("name", {
                required: "Name is required.",
              })}
            />
          </div>
          {errors.name?.type === "required" && (
            <p className="text-left text-red-500">{errors.name.message}</p>
          )}
          <div className="flex mt-6 relative">
            <label htmlFor="photo" className="absolute left-0 font-semibold">
              Profile Picture*
            </label>
            <input
              name="photo"
              type="file"
              id="photo"
              className="file-input w-full mt-6 border-2 rounded-md outline-none border-gray-200"
              {...register("photo", {
                required: "Profile photo required.",
              })}
            />
            <BsUpload className="absolute bg-white pl-2 right-4 text-3xl top-1/2"></BsUpload>
          </div>
          {errors.photo?.type === "required" && (
            <p className="text-left text-red-500">{errors.photo.message}</p>
          )}
          <div className="flex mt-6 relative">
            <label htmlFor="email" className="absolute left-0 font-semibold">
              Email*
            </label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              className="mt-6 outline-none p-4 w-full relative border-2 rounded-md"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: emailRegex,
                  message: "Invalid Email",
                },
              })}
            />
          </div>
          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-500 text-left">
              {errors.email?.message}
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p role="alert" className="text-red-500 text-left">
              {errors.email?.message}
            </p>
          )}
          <div className="flex mt-6 relative">
            <label htmlFor="password" className="absolute left-0 font-semibold">
              Password*
            </label>
            <input
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Enter your password."
              className="mt-6 outline-none p-4 w-full relative border-2 rounded-md"
              id="password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters long.",
                },
                pattern: {
                  value: passwordRegex,
                  message:
                    "Password must contain both uppercase and lowercase characters and numbers and special characters like $ * & % # @.",
                },
              })}
            />
            <button
              className="absolute top-1/2 right-6 text-2xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaRegEye></FaRegEye>
              ) : (
                <FaRegEyeSlash></FaRegEyeSlash>
              )}
            </button>
          </div>

          {errors.password?.type === "required" && (
            <p role="alert" className="text-red-500 text-left">
              {errors.password?.message}
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p role="alert" className="text-red-500 text-left">
              {errors.password?.message}
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p role="alert" className="text-red-500 text-left">
              {errors.password?.message}
            </p>
          )}

          {/* {showError && <span className="text-red-500">{errorMsg}</span>}
          {showSuccess && (
            <span className="text-green-500">Account created Successfully</span>
          )} */}
          <button className="text-xl hover:bg-yellow-600 transition-colors p-4 rounded-md font-semibold bg-yellow-600/75 text-white w-full my-6">
            Sign up
          </button>

          <span className="text-yellow-600/75 w-full">
            Already registered?
            <Link
              to="/login"
              className="underline underline-offset-8 font-semibold"
            >
              {" "}
              Login!
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
