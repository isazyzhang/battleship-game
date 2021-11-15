import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PlayerBoard from "./PlayerBoard";
import "./css/Board.css";
import Tile from "./Tile";
import OpponentBoard from "./OpponentBoard";


export default function NormalGame() {

    return (
        <div>
            <div id="boards">
                <h1>Opponent Board</h1>
                <div>
                    <OpponentBoard />
                </div>
                <h1>
                    Your Board
                </h1>
                <div>
                    <PlayerBoard />
                </div>
            </div>
        </div>
    )
}