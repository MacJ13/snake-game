import { Game, Board } from "./types/types";

const canvas: HTMLCanvasElement = document.querySelector("#canvas")!;

// Game data
const game: Game = {
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
const board: Board = {
  width: 400,
  height: 400,
  cellSize: 20,
};

const snake: number[][] = []; // snake position parts
const food: number[] = []; // food position;

// data for animation
let then: number = Date.now();
let now: number;

const createBoard = (): void => {
  canvas.width = 400;
  canvas.height = 400;
  game.dx *= board.cellSize;
};

createBoard();
