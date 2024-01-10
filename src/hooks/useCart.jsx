import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    isPending,
    refetch:refetchCart,
    data: cartItems = [],
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts/${user.email}`);
      return res.data;
    },
  });

  const handleAddToCart = (food) => {
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
            refetchCart()
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
    Swal.fire({
      title: "Delete item from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${cartId}`)
          .then((res) => {
            if (res?.data?.deletedCount) {
              refetchCart()
              Swal.fire({
                icon: "success",
                title: "Item deleted successfully",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return { handleAddToCart, handleDeleteFromCart, cartItems, isPending, refetchCart };
};

export default useCart;
