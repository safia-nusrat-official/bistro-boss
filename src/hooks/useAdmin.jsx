import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: isAdmin,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/${user?.email}`);
      return res?.data?.isAdmin;
    },
  });

  return {isAdmin, isPending, refetch};
};

export default useAdmin;
