import React, { useEffect, useState } from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";

function Playlist() {
  //   const [playlistName, setPlaylistName] = useState("New Playlist"); // user can change name by clicking on the title or stick to placeholder and use empty strings?
  // const [buttonText, setButtonText] = useState('Save to Spotify');
  // useEffect(() => {

  // })

  // need to have a button to remove added track
  // const [trackItem, newTrackItem] = useState(null);
  // useEffect(() => {

  // })
  // https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components

  // // could we use these funtion in JSX to lessen code
  // function playlistName() {
  //     setName('') // would this work?
  // }

  // // To be used when new playlist is created and user wants to save said playlist - Note: Project requires  a save to spotify button
  // function onClick() {
  //     //Not sure if this will be needed - maybe an if statement?
  //     setButtonText('Save')
  // }

  return (
    <div className="Playlist">
      <input defaultValue={Playlist} placeholder="Playlist" />
      {/* <TrackList /> */}
      <Tracklist />
      <button className="Save-playlist">Save To Spotify</button>
    </div>
  );
}

export default Playlist;
