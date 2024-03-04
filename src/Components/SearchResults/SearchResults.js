import React, { useState } from "react";
import { useEffect } from "react";

function SearchResults() {
    const [results, setResults] = useState('Name and Artist'); //not active when search has not been requested? (false);  


    const [selectedResult, setSelectedResult] = useState([{}, {}]); // (null)
    // const [track, setTrack] = useState(''); //({})

    useEffect(() => {

    })

    const foundTrack = filterTracks(); // could be used in searchbar??

    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <SearchTrack value={ } onChange={newTrack => set(newTrack)} />
            <TrackList tracks={foundTrack} emptyHeading={`No matches for ${}`} />
        </div>
    )
}


// function SearchableVideoList({ videos }) {
//     const [searchText, setSearchText] = useState('');
//     const foundVideos = filterVideos(videos, searchText);
//     return (
//       <>
//         <SearchInput
//           value={searchText}
//           onChange={newText => setSearchText(newText)} />
//         <VideoList
//           videos={foundVideos}
//           emptyHeading={`No matches for “${searchText}”`} />
//       </>
//     );