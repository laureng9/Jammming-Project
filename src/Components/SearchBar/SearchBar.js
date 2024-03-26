import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [searchBarInput, setSearchBarInput] = useState("");

  // //event handler
  const handleChange = (event) => {
    event.preventDefault();
    setSearchBarInput(event.target.value);
  };

  const handleClick = () => {
    //Search on spotify
    props.onSearchSpotify(searchBarInput);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search for Song, Album  or Artist"
        onChange={handleChange}
        value={searchBarInput}
      />
      <button type="submit" className="SearchButton" onClick={handleClick}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
}

export default SearchBar;
