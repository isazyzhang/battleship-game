import Tile from "./Tile";
import React from "react";
import "./css/Board.css";
import { useSelector} from 'react-redux';

export default function PlayerBoard() {

    const playerBoardState = useSelector((state) => state.playerGame.gameBoard);

    const boardComponent = [];
    for (let i = 0; i < playerBoardState.length; i++) {
        let row = playerBoardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push(<Tile condition={playerBoardState[i][j]} x={i} y={j}/>);
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