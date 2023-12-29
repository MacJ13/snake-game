"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas = document.querySelector("#canvas");
// Game data
const game = {
    startX: 200,
    startY: 200,
    dx: 1,
    dy: 0,
    changeDirection: false,
    playing: true,
    score: 0,
    snakeParts: 3,
};
// Board data
const board = {
    width: 400,
    height: 400,
    cellSize: 20,
};
const snake = []; // snake position parts
const food = []; // food position;
// data for animation
let then = Date.now();
let now;
const createBoard = () => {
    canvas.width = 400;
    canvas.height = 400;
    game.dx *= board.cellSize;
};
createBoard();
