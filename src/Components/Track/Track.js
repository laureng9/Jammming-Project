import React, { useState } from "react";

function Track() {
    const [trackName, setTrackName] = useState('Track 1');
    const [artistName, setArtistName] = useState('Artist');
    const [year, setYear] = useState(2023);




    //eventhandler - when name of song is clicked take the user to the artist page where they can listeb to song  or when song is clicked play button  displays on right side & add button is at the bottom of results block??

    // const trackDetails = [setTrackName, setArtistName, setYear]

    // key = 


    return (
        <div className="Track">
            <div className="Track-info">
                {/* <<input value={}/> */}
                <h3>{trackName}</h3>
                <li>{artistName}</li>
                <li>{year}</li>
            </div>

            <button className="Track-action">{ }</button> {/*To add / remove song to new playlist + or - */}

        </div>
    )
}

