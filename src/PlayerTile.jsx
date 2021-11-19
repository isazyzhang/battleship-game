import "./css/PlayerTile.css";
import React from 'react';

export default function PlayerTile(props) {
    const condition = props.condition; // n or s or a
    return (
        <div id="playerTile" class={condition}>
            {condition}
        </div>
    )
}