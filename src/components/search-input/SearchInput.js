import React from "react";
import "./SearchInput.css";

const SearchInput = ({ searchChange }) => {
  return (
    <input 
        className="search-input" 
        type="text" 
        placeholder="Search"
        onChange={searchChange}
    >
    </input>
  );
};

export default SearchInput;
