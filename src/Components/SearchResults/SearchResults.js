import "./SearchResults.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* <SearchTrack value={ } onChange={newTrack => set(newTrack)} /> 
             <TrackList tracks={foundTrack} emptyHeading={`No matches for ${}`} />   */}
      <Tracklist
        tracks={props.tracks}
        addTrack={props.addTrack}
        isRemove={false}
      />
    </div>
  );
}

export default SearchResults;
