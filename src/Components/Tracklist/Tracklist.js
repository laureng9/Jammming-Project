import React, { useState } from "react";
import { useEffect } from "react";
//this is list of songs appearing in a particular order from a search / a playlist created(user could change the order of the songs as desired??)


function Tracklist() {
    const [addButton, setAddButton] = useState([null]);
    const exampleTracks = [{}, {}]

    useEffect(() => {

    })


    return (
        <div className="Tracklist">
            /*Think about using map method that renders a set of Track components*/
            <ul>
                <li>Name of song{ }</li>
                <li>artist{ }</li>
                <li>year{ }</li>
            </ul>

        </div>
    )
}