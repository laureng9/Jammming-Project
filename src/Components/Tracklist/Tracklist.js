import React from "react";
import Track from "../Track/Track";
import "./Tracklist.css";

function Tracklist(props) {
  return (
    <div className="Tracklist">
      {props.tracks.map((track) => {
        return (
          <Track
            key={track.id}
            track={track}
            addTrack={props.addTrack}
            removeTrack={props.removeTrack}
            isRemove={props.isRemove}
          />
        );
      })}
    </div>
  );
}

export default Tracklist;
