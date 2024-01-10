import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate()
  const {Logout} = useAuth()
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use((config)=>{
    return config;
  }, async(err)=>{
    const status = err.response.status
    if(status===401||status===403){
      await Logout()
      navigate("/login")
    }
    return Promise.reject(err);
  })
  return axiosSecure;
};

export default useAxiosSecure;
