import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchComponent = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleIconClick = () => {
    setIsSearching(true);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="">
      {!isSearching ? (
        <div
          className="cursor-pointer p-2 rounded-full bg-white hover:bg-gray-200"
          onClick={handleIconClick}
        >
          <FiSearch />
        </div>
      ) : (
        <input
          type="text"
          className="border border-gray-400 rounded-md p-2 focus:outline-none  transition-all"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default SearchComponent;
