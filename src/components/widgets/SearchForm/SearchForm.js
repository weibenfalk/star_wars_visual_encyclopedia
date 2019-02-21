import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchForm.css";

// Must have this here so we can reset it
let timeout = null;

const SearchForm = ({ callback }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    const search = event.target.value;
    setSearchTerm(search);
    clearTimeout(timeout);
    // Set a timeout to wait for the user to stop writing
    // So we don´t have to make unnessesary calls
    timeout = setTimeout(() => {
      callback(false, search);
    }, 500);
  };

  return (
    <div className="searchform-wrapper">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={"Search"}
      />
    </div>
  );
};

SearchForm.propTypes = {
  callback: PropTypes.func
};

export default SearchForm;
