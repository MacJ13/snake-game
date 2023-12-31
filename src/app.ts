import { Game, Board } from "./types/types.js";

const canvas: HTMLCanvasElement = document.querySelector("#canvas")!;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
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
  canvas.width = board.width;
  canvas.height = board.height;
  game.dx *= board.cellSize;
};

// add initial snake part positions
const initSnakePositions = () => {
  for (let i = 0; i <= game.snakeParts; i++) {
    const x = game.startX - i * board.cellSize;
    const y = game.startY;

    snake[i] = [x, y];
  }
};

// create random position for food
const addRandomFoodPosition = (): void => {
  let x =
    Math.floor((Math.random() * canvas.width) / board.cellSize) *
    board.cellSize;
  let y =
    Math.floor((Math.random() * canvas.height) / board.cellSize) *
    board.cellSize;

  const isAvailableSnakePosition = snake.find((s) => s[0] === x && s[1] === y);

  if (isAvailableSnakePosition) addRandomFoodPosition();
  else {
    food[0] = x;
    food[1] = y;
  }
};

// draw snake parts on canvas board
const drawSnake = (): void => {
  ctx.fillStyle = "orangered";
  ctx.strokeStyle = "#ecfeff";

  snake.forEach((part) => {
    ctx.fillRect(part[0], part[1], board.cellSize, board.cellSize);
  });
};

const drawFood = (): void => {
  ctx.fillStyle = "black";
  ctx.fillRect(food[0], food[1], board.cellSize, board.cellSize);
};

const draw = (): void => {
  drawSnake();
  drawFood();
};

const animate = (): void => {
  // compare timestamp difference after animate function
  // to slow animation frames
  now = Date.now();
  const difference = now - then;

  if (difference > 125) {
    game.changeDirection = false;
    then = now;

    draw();
  }

  window.requestAnimationFrame(animate);
};

const init = () => {
  if (canvas.getContext !== undefined) {
    createBoard();
    initSnakePositions();
    addRandomFoodPosition();

    animate();
  }
};

init();
