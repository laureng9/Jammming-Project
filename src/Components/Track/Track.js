import React, { useState } from "react";
import "./Track.css";

function Track(props) {
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
        <button className="Track-action">+</button>
        {/*To add / remove song to new playlist + or - */}
      </div>
    </>
  );
}

export default Track;
