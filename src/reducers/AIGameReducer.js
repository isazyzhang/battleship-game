// const defaultState = {
//     gameBoard: 
//         [
//             ["", "", "", "", "", "", "", "", "", ""],
//             ["", "", "", "", "", "", "", "", "", ""],
//             ["", "", "", "", "", "", "", "", "", ""],
//             ["", "", "", "", "", "", "", "", "", ""],
//             ["", "", "", "", "", "", "", "", "", ""],
//             ["", "", "", "", "", "", "", "", "", ""],
//             ["", "", "", "", "", "", "", "", "", ""],
//             ["", "", "", "", "", "", "", "", "", ""],
//             ["", "", "", "", "", "", "", "", "", ""],
//             ["", "", "", "", "", "", "", "", "", ""]
//         ],
//     destroyed: 0,
// }

const defaultState = [
        [
            ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
            ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
            ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
            ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
            ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
            ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
            ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
            ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
            ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"],
            ["n", "n", "n", "n", "n", "n", "n", "n", "n", "n"]
        ], 0
];

export default function AIGameReducer(state = defaultState, action) {
    if (isGameBoardEmpty()) {
        generateGameBoard();
    }
    // for (let i = 0; i < state.gameBoard.length; i++) {
    //     let row = state.gameBoard[i];
    //     for (let j = 0; j < row.length; j++) {
    //         if (state.gameBoard[i][j] === "*") {
    //             state.ships.push([i, j]);
    //         }
    //     }
    // }
    if (action.type === 'boardClick') {
        // const value = defaultState.gameBoard[action.x][action.y];
        // need to make sure that user clicks on a valid tile
        const curValue = state[0][action.x][action.y];
        if (curValue === 'n') {
            state[0][action.x][action.y] = 'a';
        } else {
            state[1]++;
            // when the total destroyed adds up to 17, the player wins
            if (state[1] === 17) {
                alert("You won!");
            }
        }
        return [...state];
        // return Object.assign({}, state, { gameBoard: state.gameBoard});

    }
    return state;
}

function isGameBoardEmpty() {
    for (let i = 0; i < defaultState[0].length; i++) {
        for (let j = 0; j < defaultState[0][i].length; j++) {
            if (defaultState[0][i][j] !== "n") {
                return false;
            }
        }
    }
    return true;
}

function generateGameBoard() {

    // 5*1 ship
    validateAndPut(5);
    // 4*1 ship
    validateAndPut(4);
    // 2 times 3*1 ships
    validateAndPut(3);
    validateAndPut(3);
    // 2*1 ship
    validateAndPut(2);
}


// export default function AIGameReducer(state = defaultState, action) {
//     if (isGameBoardEmpty(state[0])) {
//         state[0] = generateGameBoard(state[0]);
//     }
//     // for (let i = 0; i < state.gameBoard.length; i++) {
//     //     let row = state.gameBoard[i];
//     //     for (let j = 0; j < row.length; j++) {
//     //         if (state.gameBoard[i][j] === "*") {
//     //             state.ships.push([i, j]);
//     //         }
//     //     }
//     // }
//     if (action.type === 'boardClick') {
//         // const value = defaultState.gameBoard[action.x][action.y];
//         // need to make sure that user clicks on a valid tile
//         const curValue = state[0][action.x][action.y];
//         if (curValue === 'n') {
//             state[0][action.x][action.y] = 'a';
//             return [...state];
//         } else if (curValue === 's') {
//             state[1]++;
//             // when the total destroyed adds up to 17, the player wins
//             if (state[1] === 17) {
//                 alert("You won!");
//             }
//         }
//         return [...state];
//         // return Object.assign({}, state, { gameBoard: state.gameBoard});

//     }
//     return state;
// }

function validateAndPut(size) {
    // use array to store the eligible directions and starting coordinates
    const eligible = [];
    // pick a random tile on the game board
    const x = Math.floor(Math.random() * (defaultState[0].length)); 
    const y = Math.floor(Math.random() * (defaultState[0].length)); 
    console.log(x);
    console.log(y);
    // check left
    let i = 0;
    while (i < size && y - i >= 0) {
        if (defaultState[0][x][y - i] === "s") {
            break;
        } else {
            i++;
        }
    }
    if (i === size) {
        eligible.push(["left", x, y]);
    }
    // check right
    let j = 0;
    while (j < size && y + j < defaultState[0].length) {
        if (defaultState[0][x][y + j] === "s") {
            break;
        } else {
            j++;
        }
    }
    if (j === size) {
        eligible.push(["right", x, y]);
    }
    // check up
    let k = 0;
    while (k < size && x - k >= 0) {
        if (defaultState[0][x - k][y] === "s") {
            break;
        } else {
            k++;
        }
    }
    if (k === size) {
        eligible.push(["up", x, y]);
    }
    // check down
    let l = 0;
    while (l < size && x + l < defaultState[0].length) {
        if (defaultState[0][x + l][y] === "s") {
            break;
        } else {
            l++;
        }
    }
    if (l === size) {
        eligible.push(["down", x, y]);
    }

    // To ensure the ships generated are placed as randomly as possible, we select a position randomly out of all available ones
    let randomDirection = Math.floor(Math.random() * eligible.length);
    let direction = eligible[randomDirection][0];
    let x_axis = eligible[randomDirection][1];
    let y_axis = eligible[randomDirection][2];

    if (direction === "left") {
        for (let i = 0; i < size; i++) {
            defaultState[0][x_axis][y_axis - i] = "s";
        }
    } else if (direction === "right") {
        for (let i = 0; i < size; i++) {
            defaultState[0][x_axis][y_axis + i] = "s";
        }
    } else if (direction === "up") {
        for (let i = 0; i < size; i++) {
            defaultState[0][x_axis - i][y_axis] = "s";
        }
    } else if (direction === "down") {
        for (let i = 0; i < size; i++) {
            defaultState[0][x_axis + i][y_axis] = "s";
        }
    }
}

// function generateGameBoard(gameBoard) {

//     // 5*1 ship
//     gameBoard = validateAndPut(gameBoard, 5);
//     // 4*1 ship
//     gameBoard = validateAndPut(gameBoard, 4);
//     // 2 times 3*1 ships
//     gameBoard = validateAndPut(gameBoard, 3);
//     gameBoard = validateAndPut(gameBoard, 3);
//     // 2*1 ship
//     gameBoard = validateAndPut(gameBoard, 2);
//     return gameBoard;
// }

// function validateAndPut(gameBoard, size) {
//     // use array to store the eligible directions and starting coordinates
//     const eligible = [];
//     // pick a random tile on the game board
//     const x = Math.floor(Math.random() * (gameBoard.length + 1)); 
//     const y = Math.floor(Math.random() * (gameBoard.length + 1)); 
//     // check left
//     let i = 0;
//     while (i < size && y - i >= 0) {
//         if (gameBoard[x][y - i] === "s") {
//             break;
//         } else {
//             i++;
//         }
//     }
//     if (i === size) {
//         eligible.push(["left", x, y]);
//     }
//     // check right
//     let j = 0;
//     while (j < size && y + j < gameBoard.length) {
//         if (gameBoard[x][y + j] === "s") {
//             break;
//         } else {
//             j++;
//         }
//     }
//     if (j === size) {
//         eligible.push(["right", x, y]);
//     }
//     // check up
//     let k = 0;
//     while (k < size && x - k >= 0) {
//         if (gameBoard[x - k][y] === "s") {
//             break;
//         } else {
//             k++;
//         }
//     }
//     if (k === size) {
//         eligible.push(["up", x, y]);
//     }
//     // check down
//     let l = 0;
//     while (l < size && x + l < gameBoard.length) {
//         if (gameBoard[x + l][y] === "s") {
//             break;
//         } else {
//             l++;
//         }
//     }
//     if (l === size) {
//         eligible.push(["down", x, y]);
//     }

//     // To ensure the ships generated are placed as randomly as possible, we select a position randomly out of all available ones
//     let randomDirection = Math.floor(Math.random() * eligible.length);
//     let direction = eligible[randomDirection][0];
//     let x_axis = eligible[randomDirection][1];
//     let y_axis = eligible[randomDirection][2];

//     if (direction === "left") {
//         for (let i = 0; i < size; i++) {
//             gameBoard[x_axis][y_axis - i] = "s";
//         }
//     } else if (direction === "right") {
//         for (let i = 0; i < size; i++) {
//             gameBoard[x_axis][y_axis + i] = "s";
//         }
//     } else if (direction === "up") {
//         for (let i = 0; i < size; i++) {
//             gameBoard[x_axis - i][y_axis] = "s";
//         }
//     } else if (direction === "down") {
//         for (let i = 0; i < size; i++) {
//             gameBoard[x_axis + i][y_axis] = "s";
//         }
//     }
//     return gameBoard;
// }

// function isGameBoardEmpty(gameBoard) {
//     for (let i = 0; i < gameBoard.length; i++) {
//         for (let j = 0; j < gameBoard[i].length; j++) {
//             if (gameBoard[i][j] !== "n") {
//                 return false;
//             }
//         }
//     }
//     return true;
// }



//     // select a random column to place the vertical 5*1 ship
//     let col5 = random(gameBoard);
//     // select a random row (can start at 0, 1, 2, 3, or 4)
//     let row5 = Math.floor(Math.random() * (4 + 1));
//     for (let i = 0; i < 5; i++) {
//         gameBoard[row5 + i][col5] = "*";
//     }

//     // select a random row to place the horizontal 4*1 ship
//     let row4 = random(gameBoard);
//     // make sure that we have enough 4 unoccupied places
//     const startCol4 = enoughForRow(gameBoard, row4, 4);
//     for (let i = 0; i < 4; i++) {
//         gameBoard[row4][startCol4 + i] = "*";
//     }

//     // // select two random columns to place the two vertical 3 * 1 ships
//     let col3_1 = random(gameBoard);
//     let startRow3_1 = enoughForCol(gameBoard, col3_1, 3);
//     while (startRow3_1 === -1) {
//         col3_1 = random(gameBoard);
//         startRow3_1 = enoughForCol(gameBoard, col3_1, 3);
//     }
//     for (let i = 0; i < 3; i++) {
//         gameBoard[startRow3_1 + i][col3_1] = "*";
//     }
//     let col3_2 = random(gameBoard);
//     let startRow3_2 = enoughForCol(gameBoard, col3_2, 3);
//     while (startRow3_2 === -1) {
//         col3_2 = random(gameBoard);
//         startRow3_2 = enoughForCol(gameBoard, col3_2, 3);
//     }
//     for (let i = 0; i < 3; i++) {
//         gameBoard[startRow3_2 + i][col3_2] = "*";
//     }

//     // select one row to place the horizontal 2 * 1 ship
//     let row2 = random(gameBoard);
//     let startCol2 = enoughForRow(gameBoard, row2, 2);
//     while (startCol2 === -1) {
//         row2 = random(gameBoard);
//         startCol2 = enoughForRow(gameBoard, row2, 2);
//     }
//     for (let i = 0; i < 2; i++) {
//         gameBoard[row2][startCol2 + i] = "*";
//     }
//     return gameBoard;
// }

// function random(gameBoard) {
//     return Math.floor(Math.random() * (gameBoard.length + 1));
// }

// function enoughForCol(gameBoard, col3, size) {
//     let eligible = [];
//     for (let i = 0; i <= gameBoard.length - size; i++) {
//         let j;
//         for (j = 0; j < size; j++) {
//             if (gameBoard[i + j][col3] === "*") {
//                 break;
//             }
//         }
//         if (j === size) {
//             eligible.push(i);
//         }
//     }
//     if (eligible.length === 0) return -1;
//     return Math.floor(Math.random() * eligible.length);
// }

// function enoughForRow(gameBoard, row, size) {
//     let eligible = [];
//     for (let i = 0; i <= gameBoard.length - size; i++) {
//         let j;
//         for (j = 0; j < size; j++) {
//             if (gameBoard[row][i + j] === "*") {
//                 break;
//             }
//         }
//         if (j === size){
//             eligible.push(i);
//         }
//     }
//     return Math.floor(Math.random() * eligible.length);
// }