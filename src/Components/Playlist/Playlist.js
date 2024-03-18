import React, { useEffect, useState } from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";

function Playlist(props) {
  return (
    <div className="Playlist">
      <input
        // defaultValue={props.playlistName}
        placeholder="Playlist Name"
      />
      {/* <TrackList /> */}
      <Tracklist
        tracks={props.tracks}
        removeTrack={props.removeTrack}
        isRemove={true}
      />
      <button className="Save-playlist">Save To Spotify</button>
    </div>
  );
}

export default Playlist;
