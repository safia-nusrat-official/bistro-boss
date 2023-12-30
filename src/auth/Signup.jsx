import { FaFacebook, FaGithub, FaGoogle, FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import banner from "../assets/others/banner.png"
import illustration from "../assets/others/authentication2.png"
import { useState } from "react";
import { Link } from "react-router-dom";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleForm = (e) => {
    e.preventDefault()
  }

  return (
    <div className="md:p-20 md:pt-28 pt-20" style={{backgroundImage:`url('${banner}')`}}>

      <div className="shadow-lg p-6 flex border-2 flex-row-reverse border-gray-200 rounded-sm gap-6 md:flex-nowrap flex-wrap items-center" style={{backgroundImage:`url('${banner}')`}}>
        <img src={illustration} className="md:w-1/2 w-full" alt="" />

        <form onSubmit={handleForm} className="md:w-1/2 w-full  text-center md:p-6">
          <h2 className="text-6xl font-bold font-clash-display">Signup</h2>

          <div className="flex mt-6 relative">
            <label htmlFor="name" className="absolute left-0 font-semibold">Name*</label>
            <input type="text" placeholder="Enter your name" className="mt-6 outline-none p-4 w-full relative border-2 rounded-md" id="name"/>
          </div>

          <div className="flex mt-6 relative">
            <label htmlFor="email" className="absolute left-0 font-semibold">Email*</label>
            <input type="text" placeholder="Enter your email" className="mt-6 outline-none p-4 w-full relative border-2 rounded-md" id="email"/>
          </div>

          <div className="flex mt-6 relative">
            <label htmlFor="password" className="absolute left-0 font-semibold">Password*</label>
            <input type={`${showPassword?"text":"password"}`} placeholder="Enter your password." className="mt-6 outline-none p-4 w-full relative border-2 rounded-md" id="password"/>
            <button className="absolute top-1/2 right-6 text-2xl" onClick={()=>setShowPassword(!showPassword)}>{
              showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
              }</button>
          </div>

          <button className="text-xl hover:bg-yellow-600 transition-colors p-4 rounded-md font-semibold bg-yellow-600/75 text-white w-full my-6">Sign up</button>

          <span className="text-yellow-600/75 w-full">Already registered? 
          <Link to="/login" className="underline underline-offset-8 font-semibold"> Signup!</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Signup