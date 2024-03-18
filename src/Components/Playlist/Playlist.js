import React, { useEffect, useState } from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";

function Playlist(props) {
  return (
    <div className="Playlist">
      <input defaultValue={Playlist} placeholder="Playlist" />
      {/* <TrackList /> */}
      <Tracklist tracks={props.tracks} />
      <button className="Save-playlist">Save To Spotify</button>
    </div>
  );
}

export default Playlist;
