import { useEffect, useState } from "react";
import { useSearchContext } from "../../providers/SearchProvider";
import MenuCard from "../menu components/MenuCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { MdDelete, MdEdit } from "react-icons/md";

const SearchGrid = () => {
  const { searchQuery } = useSearchContext();
  const [searchResults, setSearchResults] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (searchQuery) {
      axiosPublic
        .get(`/search?query=${searchQuery}`)
        .then((res) => {
          setSearchResults(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div
      className={`${searchResults.length ? "p-8 pt-0" : ""} md:py-0 md:px-0`}
    >
      {searchQuery && searchResults.length > 0 && (
        <div className="italic my-2">{searchResults.length} results.</div>
      )}
      {searchQuery && searchResults.length < 1 && <span>No item found</span>}
      {searchResults.length > 0 && (
        <div className="md:grid-cols-3 grid gap-4">
          {searchResults.map((item) => (
            <MenuCard data={item} key={item?._id}></MenuCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchGrid;
