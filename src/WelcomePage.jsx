import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
    return (
        <div class="welcome-page">
            <h1>
                Title of the game: Battleship
            </h1>
            <button>
                <Link to={"/rules"}>Rules</Link>
            </button>
            <br />
            <button>
                <Link to={"/StartGame"}>Play Game</Link>
            </button>
        </div>
    )
}