import { cloneDeep } from "lodash";

export function randomlyChooseFiveShips(board) {
     // 5*1 ship
     validateAndPut(board, 5);
     // 4*1 ship
     validateAndPut(board, 4);
     // 2 times 3*1 ships
     validateAndPut(board, 3);
     validateAndPut(board, 3);
     // 2*1 ship
     validateAndPut(board, 2);
     return cloneDeep(board);
}

function validateAndPut(board, size) {
    // use array to store the eligible directions and starting coordinates
    const eligible = [];
    // pick a random tile on the game board
    const x = Math.floor(Math.random() * board.length); 
    const y = Math.floor(Math.random() * board.length); 
    console.log(x);
    console.log(y);
    // check left
    let i = 0;
    while (i < size && y - i >= 0) {
        if (board[x][y - i] === "s") {
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
    while (j < size && y + j < board.length) {
        if (board[x][y + j] === "s") {
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
        if (board[x - k][y] === "s") {
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
    while (l < size && x + l < board.length) {
        if (board[x + l][y] === "s") {
            break;
        } else {
            l++;
        }
    }
    if (l === size) {
        eligible.push(["down", x, y]);
    }

    if (eligible.length === 0) {
        validateAndPut(size);
    }
    // To ensure the ships generated are placed as randomly as possible, we select a position randomly out of all available ones
    let randomDirection = Math.floor(Math.random() * eligible.length);
    let direction = eligible[randomDirection][0];
    let x_axis = eligible[randomDirection][1];
    let y_axis = eligible[randomDirection][2];

    if (direction === "left") {
        for (let i = 0; i < size; i++) {
            board[x_axis][y_axis - i] = "s";
        }
    } else if (direction === "right") {
        for (let i = 0; i < size; i++) {
            board[x_axis][y_axis + i] = "s";
        }
    } else if (direction === "up") {
        for (let i = 0; i < size; i++) {
            board[x_axis - i][y_axis] = "s";
        }
    } else if (direction === "down") {
        for (let i = 0; i < size; i++) {
            board[x_axis + i][y_axis] = "s";
        }
    }
}