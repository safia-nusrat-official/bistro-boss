import React, { useContext, useEffect, useState } from "react";
import { api } from "../main";
import { AuthContext } from "../providers/AuthProvider";
import { axiosSecure } from "./useAxiosSecure";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const useItem = () => {
    const [cartItems, setCartItems] = useState([])
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  
  const handleAddToCart = (food) => {
    if((cartItems.filter(item=>item.foodId===food._id)).length){
        Swal.fire({
            icon:"error",
            title:"Item already added to cart."
        })
        return
    }
    if (user && user.email) {
      const cartItem = {
        foodId: food._id,
        email: user.email,
        userName: user.displayName,
        foodName: food.name,
        foodImg: food.image,
        foodPrice: food.price,
        foodCategory: food.category,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          if (res?.data?.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Item added to your cart.",
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        title: "You aren't logged in!",
        text: "Please login to add this item to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  const handleDeleteFromCart = (cartId) => {
    if(cartItems.filter(item=>item._id===cartId)){
        axiosSecure.delete(`/carts/${cartId}`)
        .then(res=>{
            if(res?.data?.deletedCount){
                const newCartItems = cartItems.filter(item=>item?._id!==cartId)
                setCartItems(newCartItems)
                Swal.fire({
                    icon:"success",
                    title:"Item deleted successfully"
                })
            }
        })
        .catch(err=>console.log(err))
    }else{
        Swal.fire({
            icon:"error",
            title:"Unexpected Error",
            text:"You can't delete an item that is not in your cart."
        })
    }
  }
  useEffect(()=>{
    if(user && user.email){
        axiosSecure.get(`/carts/${user.email}`)
        .then(res=>{
            setCartItems(res.data)
        })
        .catch(err=>console.log(err))
    }
  }, [user])

  
  return { handleAddToCart, handleDeleteFromCart, cartItems };
};

export default useItem;
