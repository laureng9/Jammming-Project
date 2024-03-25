import "./App.css";
import React, { useCallback } from "react";
import { useState } from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../Utils/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([
    // {
    //   name: "Fire for You",
    //   artist: "Cannons",
    //   album: "Shadows",
    //   id: 1,
    // },
    // {
    //   name: "Wine into Whiskey",
    //   artist: "Tucker Wetmore",
    //   album: "Wine into Whiskey",
    //   id: 2,
    // },
    // {
    //   name: "Daydreams",
    //   artist: "We Three",
    //   album: "Happy",
    //   id: 3,
    // },
  ]);

  const searchSpotify = useCallback((searchTerm) => {
    Spotify.search(searchTerm).then((tracks) => {
      setSearchResults(tracks);
    });
  }, []);

  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  }, []);

  const removeTrack = useCallback((trackToRemove) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((track) => track.id !== trackToRemove.id)
    );
  }, []);

  const [playlistName, setPlaylistName] = useState("");
  const updatePlaylistName = useCallback((title) => {
    setPlaylistName(title);
  }, []);

  const savePlaylist = useCallback(() => {
    const uris = playlistTracks.map((track) => {
      return track.uri;
    });
    Spotify.savePlaylist(playlistName, uris);
  }, [playlistTracks, playlistName]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>
            JA<span id="highlight">MMM</span>ING🎧
          </h1>
          <section id="saying">
            Crafting a <span className="word-Color1">playlist</span> is like
            curating your own <span className="word-Color2">musical</span>{" "}
            adventure.
            {/* It's time to DJ your mood & let the good vibes roll */}
          </section>
        </header>
        <SearchBar onSearchSpotify={searchSpotify} />
        <div className="App-playlist">
          <SearchResults tracks={searchResults} addTrack={addTrack} />
          <Playlist
            tracks={playlistTracks}
            playlistName={playlistName}
            removeTrack={removeTrack}
            updatePlaylistName={updatePlaylistName}
            savePlaylist={savePlaylist}
          />
        </div>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
