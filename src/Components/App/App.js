import React from "react";
import { useState } from "react";

function App() {
    // const [searchResults, setSearchResults] = useState([]);
    // const [playlistName, setPlaylistName] = useState('New Playlist');
    // const [playlistTrack, setPlaylistTrack] = useState([]);



    return (
        <div>
            <h1>
                <span id="uppercase"> JA<span id="highlight">MMM</span>ING🎧 </span>
            </h1>
            <div>
                <p>🎵Crafting a playlist is like curating your own musical adventure 🎵 - It's time to DJ your mood & let the good vibes roll 🎉🎵</p>
            </div>
            <div className="App">
                <SearchBar placeholder="Name of Song" />
                <button>Search</button>
            </div>
            <div className="App-playlist">
                <SearchResults />
                <Playlist />
            </div>
        </div>
    );
};

export default App; 