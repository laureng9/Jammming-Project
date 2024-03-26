import "./SearchResults.css";
import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist
        tracks={props.tracks}
        addTrack={props.addTrack}
        isRemove={false}
      />
    </div>
  );
}

export default SearchResults;
