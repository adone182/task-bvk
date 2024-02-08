import { useState } from "react";
// import Input from "../Input/Input";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    onSearch(inputValue);
  };

  return (
    <div className="md:px-32 px-4 flex justify-center items-center mt-8">
      <div className="relative md:w-2/4 w-full rounded-2xl">
        {/* <Input type="search" placeholder="Search for movies.." /> */}
        <input
          className="border border-gray-300 bg-white h-12 px-4 rounded-full text-sm focus:outline-none w-full"
          type="search"
          placeholder="Search for movies.."
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
