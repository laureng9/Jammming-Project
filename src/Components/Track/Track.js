import React, { useState } from "react";
import "./Track.css";

function Track(props) {
  const handleAddTrack = (event) => {
    props.addTrack(props.track);
  };

  const handleRemoveTrack = (event) => {
    props.removeTrack(props.track);
  };

  return (
    <>
      <div className="Track">
        <div className="Track-info">
          {/* {tracks.map((track) => { */}
          <h3>{props.track.name}</h3>
          <p>{props.track.artist}</p>
          <p>{props.track.album}</p>
          {/* tracks.map((tracks) =>{" "}
          {/* // {trackDetails}
            /* // <ul key={id}>
          //   <li className="Track-name">{name}</li>
          //   <li className="Track-details">{artist}</li>
          //   <li className="Track-details">{album}</li>
          // </ul> */}
          <hr />
        </div>

        {props.isRemove ? (
          <button className="Track-action" onClick={handleRemoveTrack}>
            -
          </button>
        ) : (
          <button className="Track-action" onClick={handleAddTrack}>
            +
          </button>
        )}
      </div>
    </>
  );
}

export default Track;
