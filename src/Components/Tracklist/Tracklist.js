import React, { useState } from "react";
import { useEffect } from "react";
import Track from "../Track/Track";
//this is list of songs appearing in a particular order from a search / a playlist created(user could change the order of the songs as desired??)

function Tracklist() {
  // const [addButton, setAddButton] = useState([null]);
  // const exampleTracks = [{}, {}]

  // useEffect(() => {

  // })

  return (
    <div className="Tracklist">
      {/* Think about using map method that renders a set of Track components */}
      <Track />
      <Track />
    </div>
  );
}

export default Tracklist;
