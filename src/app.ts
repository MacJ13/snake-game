import { Game, Board } from "./types/types.js";
import { images } from "./helpers/imageElements.js";

const canvas: HTMLCanvasElement = document.querySelector("#canvas")!;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
let currentImage: HTMLImageElement;

// Game data
const game: Game = {
  startX: 200,
  startY: 200,
  dx: 1,
  dy: 0,
  changeDirection: false,
  direction: "right",
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

interface SnakePart {
  x: number;
  y: number;
  direction: string;
}

const snake: SnakePart[] = []; // snake position parts
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

    snake[i] = { x, y, direction: "right" };
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

  const isAvailableSnakePosition = snake.find((s) => s.x === x && s.y === y);

  if (isAvailableSnakePosition) addRandomFoodPosition();
  else {
    food[0] = x;
    food[1] = y;
  }
};

// function to draw image on canvas board
const drawImage = (imageEl: HTMLImageElement, x: number, y: number): void => {
  ctx.drawImage(imageEl, x, y, board.cellSize, board.cellSize);
};

// function draw snake head image depending on direction
const drawHead = (head: SnakePart): void => {
  let headImage: HTMLImageElement = images.headUp;

  if (head.direction === "up") {
    headImage = images.headUp;
  } else if (head.direction === "right") {
    headImage = images.headRight;
  } else if (head.direction === "down") {
    headImage = images.headDown;
  } else if (head.direction === "left") {
    headImage = images.headLeft;
  }

  drawImage(headImage, head.x, head.y);
};

// function set Tail image on last part of snake body depending on snake direction
const setTailImage = (prevDirection: string): void => {
  if (prevDirection === "up") {
    currentImage = images.tailDown;
  } else if (prevDirection === "right") {
    currentImage = images.tailLeft;
  } else if (prevDirection === "down") {
    currentImage = images.tailUp;
  } else if (prevDirection === "left") {
    currentImage = images.tailRight;
  }
};

// function set body image depending on snake direction
const setBodyImage = (direction: String): void => {
  switch (direction) {
    case "right":
    case "left":
      currentImage = images.bodyHorizontal;
      break;
    case "up":
    case "down":
      currentImage = images.bodyVertical;
      break;
    default:
      throw new Error("no direction");
  }
};

// function set body corner image when snake turn direction
const setCornerImage = (
  currentDirection: string,
  prevDirection: string
): void => {
  switch (true) {
    case prevDirection === "up" && currentDirection === "right":
    case prevDirection === "left" && currentDirection === "down":
      currentImage = images.bodyTopLeft;
      break;
    case prevDirection === "down" && currentDirection === "right":
    case prevDirection === "left" && currentDirection === "up":
      currentImage = images.bodyBottomLeft;
      break;

    case prevDirection === "right" && currentDirection === "down":
    case prevDirection === "up" && currentDirection === "left":
      currentImage = images.bodyTopRight;
      break;

    case prevDirection === "right" && currentDirection === "up":
    case prevDirection === "down" && currentDirection === "left":
      currentImage = images.bodyBottomRight;
      break;

    default:
      throw new Error("no direction");
  }
};

// draw snake parts on canvas board
const drawSnake = (): void => {
  ctx.fillStyle = "orangered";
  ctx.strokeStyle = "#ecfeff";
  const [head] = snake;

  for (let i = 1; i < snake.length; i++) {
    const currentPart = snake[i];
    const previousPart = snake[i - 1];

    if (i === snake.length - 1) {
      setTailImage(previousPart.direction);
      drawImage(currentImage, currentPart.x, currentPart.y);
    } else if (currentPart.direction === previousPart.direction) {
      setBodyImage(currentPart.direction);
    } else {
      setCornerImage(currentPart.direction, previousPart.direction);
    }

    drawImage(currentImage, currentPart.x, currentPart.y);
  }

  drawHead(head);
};

const drawFood = (): void => {
  drawImage(images.food, food[0], food[1]);
};

const isSnakeOffBoard = (x: number, y: number): boolean => {
  return x < 0 || x >= board.width || y < 0 || y >= board.height;
};

// move snake elements every animation
const moveSnake = (): void => {
  const [head, ...others] = snake;
  const last = snake[snake.length - 1];

  // detect collision between head and other snake parts
  const collision = others.every(
    (part) => head.x !== part.x || head.y !== part.y
  );

  if (!collision) {
    game.playing = false;
    return;
  }

  // detect if snake get the food
  if (food[0] === head.x && food[1] === head.y) {
    snake.push({ ...last });

    addRandomFoodPosition();
  }

  const nextX = head.x + game.dx;
  const nextY = head.y + game.dy;
  // add new position and remove last position
  snake.pop();
  snake.unshift({ x: nextX, y: nextY, direction: game.direction });
};

const draw = (): void => {
  if (!game.playing) {
    return;
  }
  clearSnake();
  drawFood();
  drawSnake();

  const head = snake[0];

  const offboard = isSnakeOffBoard(head.x, head.y);

  if (offboard) {
    game.playing = false;
    return;
  }

  moveSnake();
};

const clearSnake = (): void => {
  ctx.clearRect(0, 0, board.width, board.height);
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

document.addEventListener("keydown", (e: KeyboardEvent) => {
  // prevent to not press keyboard to trigger reverse current direction
  if (game.changeDirection) return;
  game.changeDirection = true;

  if (e.key === "ArrowUp" && game.dy === 0) {
    game.dy = -1 * board.cellSize;
    game.dx = 0;
    game.direction = "up";
  } else if (e.key === "ArrowRight" && game.dx === 0) {
    game.dy = 0;
    game.dx = 1 * board.cellSize;
    game.direction = "right";
  } else if (e.key === "ArrowDown" && game.dy === 0) {
    game.dy = 1 * board.cellSize;
    game.dx = 0;
    game.direction = "down";
  } else if (e.key === "ArrowLeft" && game.dx === 0) {
    game.dy = 0;
    game.dx = -1 * board.cellSize;
    game.direction = "left";
  }
});
