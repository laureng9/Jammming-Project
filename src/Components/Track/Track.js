import React from "react";
import "./Track.css";

function Track(props) {
  const handleAddTrack = () => {
    props.addTrack(props.track);
  };

  const handleRemoveTrack = () => {
    props.removeTrack(props.track);
  };

  return (
    <>
      <div className="Track">
        <div className="Track-info">
          <h3>{props.track.name}</h3>
          <ul>
            <li>{props.track.artist}</li>
            <li>{props.track.album}</li>
          </ul>
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
