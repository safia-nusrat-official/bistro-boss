import useAdmin from "./useAdmin";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const {user:currentUser} = useAuth()
    const {
      data: users,
      isPending,
      refetch:refetchUsers,
    } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
      },
    });
    const hanldeMakeAdmin = (user) => {
      Swal.fire({
        title: "Make admin?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(`/users/${user?._id}`)
            .then((res) => {
              if (res?.data?.modifiedCount) {
                refetchUsers();
                Swal.fire({
                  icon: "success",
                  title: "User made admin successfully",
                });
              }
            })
            .catch((err) => console.log(err));
        }
      });
    };
    const handleRemoveAdmin = (user) => {
      Swal.fire({
        title: "Remove as admin?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          if(user?.email===currentUser?.email){
            Swal.fire({
              icon: "error",
              title: "Couldn't remove as admin.",
              text: "You can't remove yourself as admin. Another admin must remove you.",
            });
            return
          }
          axiosSecure
            .patch(`/users/${user?._id}`)
            .then((res) => {
              if (res?.data?.modifiedCount) {
                refetchUsers();
                Swal.fire({
                  icon: "success",
                  title: "User removed as admin successfully",
                });
              }
            })
            .catch((err) => console.log(err));
        }
      });
    };
    const hanldeDeleteUser = (id) => {
      Swal.fire({
        title: "Delete user from database",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .delete(`/users/${id}`)
            .then((res) => {
              if (res?.data?.deletedCount) {
                refetchUsers();
                Swal.fire({
                  icon: "success",
                  title: "User deleted successfully",
                });
              }
            })
            .catch((err) => console.log(err));
        }
      });
    };
    return {users, hanldeMakeAdmin, handleRemoveAdmin, hanldeDeleteUser, refetchUsers, isPending}
}

export default useUser