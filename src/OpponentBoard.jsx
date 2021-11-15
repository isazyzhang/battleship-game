import Tile from "./Tile";
import React from "react";
import "./css/Board.css";
import { useSelector} from 'react-redux';

export default function OpponentBoard() {

    const AIBoardState = useSelector((state) => state.AIGame.gameBoard);
    const occupiedByShips = useSelector((state) => state.AIGame.ships);
    const destroyed = useSelector((state) => state.AIGame.destroyed);
    const attempted = useSelector((state) => state.AIGame.attempted);

    const boardComponent = [];
    for (let i = 0; i < AIBoardState.length; i++) {
        let row = AIBoardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push(<Tile 
                condition={AIBoardState[i][j]}
                x={i}
                y={j}
                boardState={AIBoardState}
                tilesOccupied={occupiedByShips}
                shipsDestroyed={destroyed}
                tilesTried={attempted}/>);
        }
    }
    return (
        <div>
            <div id="board">
                {boardComponent}
            </div>
        </div>
    )
}