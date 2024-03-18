import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  // const [searchBarInput, setSearchBarInput] = useState('Search...');

  // //event handler
  // const handleChange = (e) => {
  //     e.preventDefault();
  //     setSearchBarInput(e.target.value);
  // }

  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search for Song, Album  or Artist" />
      {/* Input attributes 
                    
                    // onChange={handleChange}
                    // value={searchBarInput} />
                /* Additional filters with artist, Genere, Year & mood  */}
      <button type="submit" className="SearchButton">
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
}

export default SearchBar;
// https://www.emgoto.com/react-search-bar/
