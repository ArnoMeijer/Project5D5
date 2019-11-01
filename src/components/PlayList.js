import React from 'react';

const playList = (props) => {
    const songs= props.songs;
    const listItems = songs.map((song) =>
    <li>{song}</li>
    );
    return(
        <ul>{listItems}</ul>
    );
}

export default playList;