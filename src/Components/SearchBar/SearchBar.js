import React, { useState } from "react";

function SearchBar() {
    const [searchBarInput, setSearchBarInput] = useState('Search...');

    //event handler
    const handleChange = (e) => {
        e.preventDefault();
        setSearchBarInput(e.target.value);
    }



    return (
        <div className="SearchBar">
            <form action='/' method="get">
                <input
                    type="text"
                    placeholder="Search for Song, Album  or Artist"
                    onChange={handleChange}
                    value={searchBarInput} />
                {/* Additional filters with artist, Genere, Year & mood */}
                <button type="submit" className="SearchButton">Search</button>
            </form>
        </div>
    )

}

https://www.emgoto.com/react-search-bar/