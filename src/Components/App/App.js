import "./App.css";
import React from "react";
import { useState } from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  // const [searchResults, setSearchResults] = useState([]);
  // const [playlistName, setPlaylistName] = useState('New Playlist');
  // const [playlistTrack, setPlaylistTrack] = useState([]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>
            JA<span id="highlight">MMM</span>ING🎧
          </h1>
          <section id="saying">
            Crafting a playlist is like curating your own musical adventure.
            It's time to DJ your mood & let the good vibes roll
          </section>
        </header>
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </>
  );
}

export default App;
