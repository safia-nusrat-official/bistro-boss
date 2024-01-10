import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { BsChevronDown, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import SectionTitle from "../../components/section components/SectionTitle";
import { MdDelete } from "react-icons/md";
import SearchBar from "../../components/search components/SearchBar";
import SearchList from "../../components/search components/SearchList";
import { useSearchContext } from "../../providers/SearchProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";

const ManageItems = () => {
  const { searchQuery } = useSearchContext();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState(1);
  const itemsPerPage = 7;
  const axiosSecure = useAxiosSecure();
  const { menu, count, loading, refetch } = useMenu({
    selectedCategory: selectedCategory,
    showPagination: true,
    sortResults: true,
    sortBy: sortBy,
    sortOrder: sortOrder,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
  });

  const numOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numOfPages).keys()];

  const handleDeleteItem = (id) => {
    console.log("delete", id);
    Swal.fire({
      title: "Delete item from database?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/menu/${id}`)
          .then((res) => {
            if (res?.data?.deletedCount) {
              refetch();
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
  return (
    <section>
      <SectionTitle
        heading="Items"
        sub_heading="update or delete items"
      ></SectionTitle>
      <div className="flex flex-col">
        <div className="p-4 font-medium font-clash-display text-xl flex justify-between items-center flex-wrap md:flex-nowrap gap-4">
          <h2>Total Items: {count}</h2>
          <div className="flex gap-2 items-center">
            <span>Sort by:</span>
            {/* custom select */}
            <div className="relative inline-block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none border rounded py-2 px-4 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pr-8 text-right"
              >
                <option value="price">price</option>
                <option value="name">name</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <BsChevronDown></BsChevronDown>
              </div>
            </div>
            <button
              onClick={() => {
                if (sortOrder < 0) {
                  setSortOrder(1);
                } else {
                  setSortOrder(-1);
                }
              }}
              className="text-2xl"
            >
              {sortOrder < 0 ? (
                <IoIosArrowRoundDown></IoIosArrowRoundDown>
              ) : (
                <IoIosArrowRoundUp></IoIosArrowRoundUp>
              )}
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <span>Filter by:</span>
            {/* custom select */}
            <div className="relative inline-block">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none border rounded py-2 px-4 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pr-8 text-right"
              >
                <option value="">All</option>
                <option value="salad">Salad</option>
                <option value="drinks">Drinks</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="pizza">Pizza</option>
                <option value="popular">Popular</option>
                <option value="offered">Offered</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <BsChevronDown></BsChevronDown>
              </div>
            </div>
          </div>
        </div>
        <section>
          <SearchBar></SearchBar>
          <SearchList handleDeleteItem={handleDeleteItem}></SearchList>
        </section>
        {!searchQuery && (
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
                {loading && (
                  <div className="p-8 w-full flex justify-center">
                    <span className="loading lg-loading"></span>
                  </div>
                )}
                {menu?.length > 0 &&
                  menu.map((item, index) => (
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
                            <div className="font-bold">{item?.name}</div>
                          </div>
                        </Link>
                      </td>

                      <td>
                        <div className="text-sm opacity-50">
                          $ {item?.price}
                        </div>
                      </td>
                      <td>
                        <button className="badge badge-ghost">
                          {item.category}
                        </button>
                      </td>

                      <th className="flex">
                        <button
                          onClick={() => handleDeleteItem(item?._id)}
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
        {/* pagination */}
        <div className="pagination my-6 items-center justify-center flex">
          <BsChevronLeft
            className="text-xl bg-[#eee] w-8 h-8 p-2 rounded-full"
            onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
          ></BsChevronLeft>

          {/* Render the pagination buttons based on the number of pages */}
          {numOfPages <= 7 ? (
            // If there are 12 or fewer pages, render all buttons
            pages.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`hover:text-white mx-1 font-medium w-8 h-8 rounded-full ${
                  currentPage === page ? "bg-primary text-white" : "bg-[#eee]"
                }`}
              >
                {page + 1}
              </button>
            ))
          ) : (
            // If there are more than 12 pages, dynamically render buttons
            <>
              {currentPage > 5 && (
                // Render a "..." button if current page is beyond the first 5 pages
                <span className="mx-1 px-2 rounded-full bg-zinc-100">...</span>
              )}
              {pages
                .slice(currentPage > 5 ? currentPage - 3 : 0, currentPage + 4)
                .map((page) => (
                  // Render buttons for the current page and surrounding pages
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`hover:text-white mx-1 font-medium w-8 h-8 rounded-full ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "bg-[#eee]"
                    }`}
                  >
                    {page + 1}
                  </button>
                ))}
              {currentPage < numOfPages - 6 && (
                // Render a "..." button if current page is before the last 6 pages
                <span className="mx-1 px-2 rounded-full bg-zinc-100">...</span>
              )}
            </>
          )}

          <BsChevronRight
            onClick={() =>
              currentPage < numOfPages - 1 && setCurrentPage(currentPage + 1)
            }
            className="text-xl bg-[#eee] w-8 h-8 p-2 rounded-full"
          ></BsChevronRight>
        </div>
      </div>
    </section>
  );
};

export default ManageItems;
