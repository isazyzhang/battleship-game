import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import OpponentBoard from "./OpponentBoard";

export default function FreePlay() {

    return (
        <div>
            <h1>Opponent Board</h1>
            <OpponentBoard />
        </div>
    )
}