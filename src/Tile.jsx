// the tiles should have the following states:
// unselected (light blue background)
// selected and hit (light red, dark red cross)
// selected and miss (light green, dark green dui hao)
// hover --> styling so cursor turns to a pointer? enlarged?

import './css/Tile.css';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function Tile(props) {
    const condition = props.condition; //* or blank
    const boardState = props.boardState;
    const tilesOccupied = props.tilesOccupied;
    const shipsDestroyed = props.shipsDestroyed;
    const tilesTried = props.tilesTried;
    let shipPlacedOnTile = "no-ship";
    if (condition === "*") {
        shipPlacedOnTile = "ship";
    }
    // let tileColor;
    // let tileContent;
    // switch (state) {
    //     case "hit":
    //         tileColor = "lightcoral";
    //         tileContent = "X";
    //         break;
    //     case "miss":
    //         tileColor = "lightgreen";
    //         tileContent = "O";
    //         break;
    //     default:
    //         tileColor = "lightblue";
    //         tileContent = "";
    // }

    const dispatch = useDispatch();

    return (
        <div onClick={ () => {
            dispatch (
                {
                    type: "boardClick",
                    x: props.x,
                    y: props.y,
                }
            )
        }

        }class={shipPlacedOnTile}>
            {condition}
        </div>
    )
}

// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }
