import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useSearchContext } from "../../providers/SearchProvider";
import { Link } from "react-router-dom";

const SearchList = ({ handleDeleteItem }) => {
  const { searchQuery } = useSearchContext();
  const axiosSecure = useAxiosSecure();
  const {
    data: searchResults,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["searchResults", searchQuery],
    queryFn: async () => {
      const res = await axiosSecure.get(`/search?query=${searchQuery}`);
      return res.data;
    },
  });
  return (
    <div className="">
      {searchQuery && searchResults?.length > 0 && (
        <div className="font-clash-display italic text-xl p-4">
          {searchResults?.length} results.
        </div>
      )}
      {searchQuery && searchResults?.length < 1 && (
        <div className="font-clash-display font-semibold text-4xl text-center py-8">
          No item found
        </div>
      )}
      {searchResults?.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>No. </label>
                </th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.length > 0 &&
                searchResults.map((item, index) => (
                  <tr key={item?._id}>
                    <th>
                      <label>{index + 1}</label>
                    </th>

                    <td>
                      <Link
                        to={`/dashboard/items/${item?._id}`}
                        className="flex items-center gap-3"
                      >
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </Link>
                    </td>

                    <td>
                      <div className="text-sm opacity-50">${item.price}</div>
                    </td>
                    <td>
                      <button className="p-[4px] px-2 font-semibold bg-yellow-400 rounded-full text-sm text-white transition-all">
                        {item.category}
                      </button>
                    </td>

                    <th className="flex">
                      <button
                        onClick={() => {
                          handleDeleteItem(item?._id);
                          refetch();
                        }}
                        className="p-2 rounded-md transition-all hover:scale-125 text-2xl text-red-600"
                      >
                        <MdDelete></MdDelete>
                      </button>
                      <Link
                        to={`/dashboard/update-item/${item?._id}`}
                        className="p-2 rounded-md transition-all hover:scale-125 text-2xl text-gray-600"
                      >
                        <MdEdit></MdEdit>
                      </Link>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SearchList;
