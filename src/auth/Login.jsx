import { HiOutlineRefresh } from "react-icons/hi";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

import {
  FaCheck,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaRegEye,
} from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import banner from "../assets/others/banner.png";
import illustration from "../assets/others/authentication2.png";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [captchaCorrect, setCaptchaCorrect] = useState(false);
  const captchaRef = useRef(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { Login, LoginGoogle, LoginGitHub, LoginFacebook } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleForm = (data) => {
    if(!captchaCorrect){
      return
    }
    const {email, password} = data

    Login(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state?.from?.pathname||"/", {replace:true})
      })
      .catch((err) => {
        
        setShowError(true);
        if(err.message==="Firebase: Error (auth/invalid-credential)."){
          setErrorMsg("Invalid Credentials")
        }else{
          setErrorMsg(err.message);
        }
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  });

  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value
    if (validateCaptcha(value, false)) {
      setCaptchaCorrect(true);
    } else {
      setCaptchaCorrect(false);
    }
  };

  return (
    <div
      className="md:p-20 md:pt-28 pt-20"
      style={{ backgroundImage: `url('${banner}')` }}
    >
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div
        className="shadow-lg p-6 flex border-2 border-gray-200 rounded-sm gap-6 md:flex-nowrap flex-wrap items-center"
        style={{ backgroundImage: `url('${banner}')` }}
      >
        <img src={illustration} className="md:w-1/2 w-full" alt="" />

        <form
          onSubmit={handleSubmit(handleForm)}
          className="md:w-1/2 w-full  text-center md:p-6"
        >
          <h2 className="text-6xl font-bold font-clash-display">Login</h2>
          <div className="flex mt-6 relative">
            <label htmlFor="email" className="absolute left-0 font-semibold">
              Email*
            </label>
            <input
              {...register("email", {
                required:"Email required.",
                pattern:{
                  value:emailRegex,
                  message:"Invalid email."
                }
              })}
              type="text"
              name="email"
              placeholder="Enter your email"
              className="mt-6 outline-none p-4 w-full relative border-2 rounded-md"
              id="email"
            />
          </div>

          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-500 text-left">
              {errors.email?.message}
            </p>
          )}
          {
            errors.email?.type === "pattern" && (
              <p role="alert" className="text-red-500 text-left">
                {errors.email?.message}
              </p>
          )}
          <div className="flex mt-6 relative">
            <label htmlFor="password" className="absolute left-0 font-semibold">
              Password*
            </label>
            <input
              {...register("password", {
                required: "Password is required."
              })}
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Enter your password."
              className="mt-6 outline-none p-4 w-full relative border-2 rounded-md"
              id="password"
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
          <div className="mt-6 relative">
            <label htmlFor="captcha" className="">
              <LoadCanvasTemplate />
            </label>
            <div className="">
              <div className="flex">
                <input
                  required
                  type="text"
                  name="captcha"
                  placeholder="Enter the characters"
                  className={`outline-none p-4 w-full relative border-2 ${captchaCorrect ? "border-green-400":"border-gray-400"} rounded-md rounded-r-none`}
                  id="captcha"
                  ref={captchaRef}
                  onBlur={handleValidateCaptcha}
                />

                <button
                  className={`rounded-r-sm p-4 text-white text-2xl ${
                    captchaCorrect ? "bg-green-400" : "bg-gray-400"
                  }`}
                >{ captchaCorrect ? <FaCheck></FaCheck> :
                  <HiOutlineRefresh></HiOutlineRefresh>
                  }</button>
              </div>

              {captchaCorrect || captchaRef?.current?.value && (
                <p className="ml-2 font-medium text-red-500 ">
                  Invalid characters
                </p>
              )}
            </div>
          </div>
          {
            showError && <p className="text-red-500 ">{errorMsg}</p>
          }
          <button
            disabled={!captchaCorrect}
            className={`text-xl transition-colors p-4 rounded-md font-semibold ${
              captchaCorrect
                ? "hover:bg-yellow-600  bg-yellow-600/75 "
                : "bg-gray-400"
            }  text-white w-full my-6`}
          >
            Login
          </button>

          <span className="text-yellow-600/75 w-full">
            New here?
            <Link
              to="/signup"
              className="underline underline-offset-8 font-semibold"
            >
              {" "}
              Signup!
            </Link>
          </span>

          <span className="block mt-8">Or sign in with</span>
          <div className="flex gap-4 mt-2 justify-center">

            <button onClick={LoginGoogle} className="border-2 border-gray-900 rounded-full p-4 text-xl hover:bg-gray-900 hover:text-[#fafafa] transition-colors">
              <FaGoogle></FaGoogle>
            </button>

            <button onClick={LoginFacebook} className="border-2 border-gray-900 rounded-full p-4 text-xl hover:bg-gray-900 hover:text-[#fafafa] transition-colors">
              <FaFacebook></FaFacebook>
            </button>

            <div onClick={LoginGitHub} className="border-2 border-gray-900 rounded-full p-4 text-xl hover:bg-gray-900 hover:text-[#fafafa] transition-colors">
              <FaGithub></FaGithub>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
