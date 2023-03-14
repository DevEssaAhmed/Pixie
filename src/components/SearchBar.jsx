import React from "react";
import { useState } from "react";

const [term, setTerm] = useState("");
const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const onSearchChange = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value.toLocaleLowerCase();
    setTerm(searchTerm);
  };
  return (
    <form>
      <input
        className='search-box'
        type='search'
        placeholder='Search'
        onChange={onSearchChange}
      />
      <button className='search-button'>
        <i className='fa fa-search'></i>
      </button>
    </form>
  );
};

export default SearchBar;
