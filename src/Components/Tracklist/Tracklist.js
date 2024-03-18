import React, { useState } from "react";
import { useEffect } from "react";
import Track from "../Track/Track";
import "./Tracklist.css";

function Tracklist(props) {
  return (
    <div className="Tracklist">
      {props.tracks.map((track) => {
        return <Track key={track.id} track={track} />;
      })}
      {/* <Track key={track.id} track={track} /> */}
    </div>
  );
}

export default Tracklist;
