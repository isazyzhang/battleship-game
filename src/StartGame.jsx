import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function StartGame() {

    return (

        <div>
            <button>
                <Link to={"/normalGame"}>Normal Game</Link>
            </button>
            <button>
                <Link to={"/freeplay"}>Free Play</Link>
            </button>
        </div>
    )
    // if start the game
    // normal game: both boards
    // freeplay game: only show the opponent board (the enemy AI
    // does not take any turns here and their turn will be skipped)

    // const dispatch = useDispatch();
    // useEffect(() => dispatch({type: "CREATE_GAME_BOARD", gameType}), [])

    // // if empty array, this will only execute once


    // 2 10 * 10 boards
    // randomly place 5 ships on each board (black dots)
    // 5x1, 4x1, two times 3x1, 2x1 (both horizontal and vertical)
    // each ship should fit entirely onboard and not overlap with any other board
    // left board is enemy's board
    // - clickable
    // - cannot see the ships
    // - marks after movements

    // right board is own board
    // - non clickable
    // - can see ships
    // - marks after movements

    // player goes first -> select a square on opponent's board
    // AI goes -> randomly select square from your board

    // after hitting a ship, mark that board with a 
    // color and symbol (light red background, dark red cross)
    // if missed, mark that square with light green background
    // and deep green cross

    // on own board, we see hits and ships, not AI's attempts

    // each spot only selected once (both user and AI)


    // game over: list at top of screen -> game over -> {Player or AI} won
    // button: reset --> restart new game

    // const gameType = useParams().gameType;
    // return (
    //     <div class="">
    //         <h3>{"This is an " + gameType + " game"}</h3>
    //         <h1>
    //            Let's start!
    //         </h1>
    //     </div>
    // )
}