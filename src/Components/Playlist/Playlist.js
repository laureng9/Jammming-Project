import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";

function Playlist(props) {
  const handlePlaylistName = (event) => {
    props.updatePlaylistName(event.target.value);
  };

  const handleClick = () => {
    props.savePlaylist();
  };

  return (
    <div className="Playlist">
      <input placeholder="Playlist Name" onChange={handlePlaylistName} />
      <Tracklist
        tracks={props.tracks}
        removeTrack={props.removeTrack}
        isRemove={true}
      />
      <button className="Save-playlist" onClick={handleClick}>
        Save To Spotify
      </button>
    </div>
  );
}

export default Playlist;
