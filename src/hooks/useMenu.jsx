import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = ({
  selectedCategory="",
  sortBy,
  sortOrder,
  currentPage,
  itemsPerPage,
  showPagination=false,
  sortResults=false
}) => {
  const axiosPublic = useAxiosPublic();
  const {
    data,
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: [
      "menu",
      selectedCategory,
      sortBy,
      sortOrder,
      currentPage,
      itemsPerPage,
      showPagination,
      sortResults
    ],
    queryFn: async () => {
      const res = await axiosPublic(
        `/menu?category=${selectedCategory}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${currentPage}&size=${itemsPerPage}&pagination=${showPagination}&sort=${sortResults}`
      );
      return res.data;
    },
  });
  const menu = data?.menu || [];
  const count = data?.count || 0;
  return {menu, loading, count, refetch};
};

export default useMenu;
