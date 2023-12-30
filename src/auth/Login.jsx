import { FaFacebook, FaGithub, FaGoogle, FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import banner from "../assets/others/banner.png"
import illustration from "../assets/others/authentication2.png"
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleForm = (e) => {
    e.preventDefault()
  }

  return (
    <div className="md:p-20 md:pt-28 pt-20" style={{backgroundImage:`url('${banner}')`}}>

      <div className="shadow-lg p-6 flex border-2 border-gray-200 rounded-sm gap-6 md:flex-nowrap flex-wrap items-center" style={{backgroundImage:`url('${banner}')`}}>
        <img src={illustration} className="md:w-1/2 w-full" alt="" />

        <form onSubmit={handleForm} className="md:w-1/2 w-full  text-center md:p-6">
          <h2 className="text-6xl font-bold font-clash-display">Login</h2>
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
          <div className="mt-6 relative">
            
            <div className="p-4 mb-4 relative w-full bg-white block">FSSKnsjjak63</div>
            <label htmlFor="email" className="absolute left-0 font-semibold">Captcha*</label>
            <input type="text" placeholder="Enter the characters" className="mt-6 outline-none p-4 w-full relative border-2 rounded-md" id="email"/>
          </div>

          <button className="text-xl hover:bg-yellow-600 transition-colors p-4 rounded-md font-semibold bg-yellow-600/75 text-white w-full my-6">Login</button>

          <span className="text-yellow-600/75 w-full">New here? 
          <Link to="/signup" className="underline underline-offset-8 font-semibold"> Signup!</Link>
          </span>

          <span className="block mt-8">Or sign in with</span>
          <div className="flex gap-4 mt-2 justify-center">

          <div className="border-2 border-gray-900 rounded-full p-4 text-xl hover:bg-gray-900 hover:text-[#fafafa] transition-colors"><FaGoogle></FaGoogle></div>
          <div className="border-2 border-gray-900 rounded-full p-4 text-xl hover:bg-gray-900 hover:text-[#fafafa] transition-colors"><FaFacebook></FaFacebook></div>
          <div className="border-2 border-gray-900 rounded-full p-4 text-xl hover:bg-gray-900 hover:text-[#fafafa] transition-colors"><FaGithub></FaGithub></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login