const defaultState = {
    gameBoard: 
        [
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""]
        ],
    ships: new Set(),
    destroyed: new Set(),
    attempted: new Set()
}

export default function AIGameReducer(state = defaultState, action) {
    if (isGameBoardEmpty()) {
        state.gameBoard = generateGameBoard();
    }
    if (action.type === "boardClick") {
        // const value = defaultState.gameBoard[action.x][action.y];
        // need to make sure that user clicks on a valid tile
        const curX = action.x;
        const curY = action.y;
        const test = defaultState.ships.has([curX,curY]);
        alert(action.x + ", " + action.y + test);
        // error message if user clicks on one of the ships
        // if (defaultState.ships.has(cur)) {
        //     alert("Cannot click on ships!");
        // }
        // return [...defaultState.gameBoard];
    }
    return state;
}


function generateGameBoard() {

    // select a random column to place the vertical 5*1 ship
    let col5 = random();
    // select a random row (can start at 0, 1, 2, 3, or 4)
    let row5 = Math.floor(Math.random() * (4 + 1));
    for (let i = 0; i < 5; i++) {
        defaultState.gameBoard[row5 + i][col5] = "*";
        defaultState.ships.add([row5 + i,col5]);
    }

    // select a random row to place the horizontal 4*1 ship
    let row4 = random();
    // make sure that we have enough 4 unoccupied places
    const startCol4 = enoughForRow(row4, 4);
    for (let i = 0; i < 4; i++) {
        defaultState.gameBoard[row4][startCol4 + i] = "*";
        defaultState.ships.add([row4,startCol4 + i]);
    }

    // // select two random columns to place the two vertical 3 * 1 ships
    let col3_1 = random();
    let startRow3_1 = enoughForCol(col3_1, 3);
    while (startRow3_1 === -1) {
        col3_1 = random();
        startRow3_1 = enoughForCol(col3_1, 3);
    }
    for (let i = 0; i < 3; i++) {
        defaultState.gameBoard[startRow3_1 + i][col3_1] = "*";
        defaultState.ships.add([startRow3_1 + i,col3_1]);
    }
    let col3_2 = random();
    let startRow3_2 = enoughForCol(col3_2, 3);
    while (startRow3_2 === -1) {
        col3_2 = random();
        startRow3_2 = enoughForCol(col3_2, 3);
    }
    for (let i = 0; i < 3; i++) {
        defaultState.gameBoard[startRow3_2 + i][col3_2] = "*";
        defaultState.ships.add([startRow3_2 + i,col3_2]);
    }

    // select one row to place the horizontal 2 * 1 ship
    let row2 = random();
    let startCol2 = enoughForRow(row2, 2);
    while (startCol2 === -1) {
        row2 = random();
        startCol2 = enoughForRow(row2, 2);
    }
    for (let i = 0; i < 2; i++) {
        defaultState.gameBoard[row2][startCol2 + i] = "*";
        defaultState.ships.add([row2,startCol2 + i]);
    }
    console.log(defaultState.ships);
    return defaultState.gameBoard;
}

function random() {
    return Math.floor(Math.random() * (defaultState.gameBoard.length + 1));
}

function enoughForCol(col3, size) {
    let eligible = [];
    for (let i = 0; i <= defaultState.gameBoard.length - size; i++) {
        for (let j = 0; j < size; j++) {
            if (defaultState.gameBoard[i + j][col3] === "*") {
                break;
            }
        }
        eligible.push(i);
    }
    if (eligible.length === 0) return -1;
    return Math.floor(Math.random() * eligible.length);
}

function enoughForRow(row, size) {
    let eligible = [];
    for (let i = 0; i <= defaultState.gameBoard.length - size; i++) {
        for (let j = 0; j < size; j++) {
            if (defaultState.gameBoard[row][i + j] === "*") {
                break;
            }
        }
        eligible.push(i);
    }
    return Math.floor(Math.random() * eligible.length);
}

function isGameBoardEmpty() {
    for (let i = 0; i < defaultState.gameBoard.length; i++) {
        for (let j = 0; j < defaultState.gameBoard[i].length; j++) {
            if (defaultState.gameBoard[i][j] !== "") {
                return false;
            }
        }
    }
    return true;
}
