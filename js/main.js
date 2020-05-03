/*----- constants -----*/

const playerLookup = {
    "-1" : "purple",
    "0" : "transparent",
    "1" : "lime"
}


/*----- app's state (variables) -----*/

let board;  // Row array of column arrays of -1, 0, 1
let turn;   // -1 or 1
let winner; // -1, 0 (none), 1, or 2 (tie)


/*----- cached element references -----*/

const markers = document.getElementById("markers");
const markerEls = [...document.querySelectorAll("#markers > div")];
const msgEl = document.getElementById("msg");


/*----- event listeners -----*/

markers.addEventListener("click", handleClick);


/*----- functions -----*/

function init() {
    board = [
        [0, 0, 0, 0, 0, 0],   // Column 0
        [0, 0, 0, 0, 0, 0],   // Column 1
        [0, 0, 0, 0, 0, 0],   // Column 2
        [0, 0, 0, 0, 0, 0],   // etc.
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ]
    turn = -1;
    winner = 0;
    render();
}

function handleClick(evt) {
    const colIdx = markerEls.indexOf(evt.target);

    // Ensure actual col marker was clicked
    if (colIdx === -1 || winner || board[colIdx][5] !== 0) return false;
    
    // Add piece to column
    const rowIdx = board[colIdx].indexOf(0);
    board[colIdx][rowIdx] = turn;
    if (getWinner()) return true;

    // Change turn
    turn *= -1;
    render();
}

function getWinner() {
    board.forEach((colArr, colIdx) => {
        colArr.forEach((cell, rowIdx) => {

        });
    });
}

function checkUp() {

}

function checkDown() {

}

function checkUpDiag() {

}

function checkDownDiag() {

}

function render() {
    // Block filled columns
    markerEls.forEach((e, i) => {
        if (winner || board[i][5] !== 0) e.style.visibility = "hidden";
        else e.style.visibility = "visible";
    });

    // Render turn or winner
    if (winner) {
        if (winner === 2) msgEl.innerHTML = `TIE GAME!`;
        else msgEl.innerHTML = `<span style="color: ${playerLookup[winner]}">${playerLookup[winner].toUpperCase()} WINS!`;
    } else msgEl.innerHTML = `<span style="color: ${playerLookup[turn]}">${playerLookup[turn].toUpperCase()}'S</span> TURN`;

    // Draw board
    board.forEach((colArr, colIdx) => {
        colArr.forEach ((cell, rowIdx) => {
            const div = document.getElementById(`${colIdx}-${rowIdx}`);
            div.style.backgroundColor = playerLookup[cell];
        });
    });
}

init();